// ==========================================
// 1. 레시피 데이터 (기본 탑재)
// ==========================================
const recipes = [
    { id: 1, target: "전체", category: "한식", title: "돼지고기 김치찌개", img: "images/kimchi_stew.jpg", difficulty: 1, popularity: 99, time: "20분", desc: "한국인의 소울푸드, 얼큰하고 진한 국민 찌개", reason: "가장 구하기 쉬운 재료로 깊은 맛을 낼 수 있습니다.", ingredients: ["김치", "돼지고기", "두부", "대파"], steps: [{ text: "참기름에 김치와 고기를 볶다가 물을 붓고 끓입니다.", img: "" }] },
    { id: 36, target: "1인 가구", category: "중식", title: "토마토 달걀 볶음", img: "images/tomatoegg.jpg", difficulty: 1, popularity: 89, time: "10분", desc: "다이어터들에게 사랑받는 부드러운 중화풍 볶음", reason: "아침 식사로 부담 없이 훌륭한 영양 만점 요리입니다.", ingredients: ["토마토", "계란", "소금", "대파"], steps: [{ text: "계란을 볶아 빼두고 토마토를 볶다 합칩니다.", img: "" }] },
    { id: 3, target: "아이 가정", category: "한식", title: "간장 찜닭", img: "images/jjimdak.jpg", difficulty: 2, popularity: 95, time: "40분", desc: "맵지 않고 달콤 짭짤한 가족 메뉴", reason: "자극적이지 않아 아이들이 먹기 좋습니다.", ingredients: ["닭고기", "감자", "당근", "간장"], steps: [{ text: "닭과 채소를 넣고 졸입니다.", img: "" }] }
];

let myFridgeItems = [];
let currentTarget = "전체";
let currentCategory = "전체";
let lastAiRecipe = null; 

// ==========================================
// 2. 인증 관리 (로그인 / 회원가입 / 로그아웃)
// ==========================================
function doSignup() {
    const email = document.getElementById('regEmail').value.trim();
    const pw = document.getElementById('regPw').value;
    const pwConfirm = document.getElementById('regPwConfirm').value;

    if (!email || !pw || !pwConfirm) { alert("모든 항목을 입력해 주세요."); return; }
    if (pw !== pwConfirm) { alert("비밀번호가 서로 일치하지 않습니다."); return; }

    auth.createUserWithEmailAndPassword(email, pw)
        .then(() => { alert("회원가입이 완료되었습니다!"); window.location.href = "app.html"; })
        .catch((error) => {
            console.error("회원가입 에러:", error);
            if (error.code === "auth/weak-password") alert("비밀번호는 최소 6자리 이상이어야 합니다.");
            else if (error.code === "auth/email-already-in-use") alert("이미 가입된 이메일 주소입니다.");
            else alert("회원가입 실패: " + error.message);
        });
}

function doLogin() {
    const email = document.getElementById('loginId').value.trim();
    const pw = document.getElementById('loginPw').value;
    if (!email || !pw) { alert("이메일과 비밀번호를 모두 입력해 주세요."); return; }

    auth.signInWithEmailAndPassword(email, pw)
        .then(() => { window.location.href = "app.html"; })
        .catch((error) => { alert("로그인 실패: 이메일 또는 비밀번호를 확인하세요."); });
}

function doLogout() {
    if (confirm("로그아웃 하시겠습니까?")) {
        auth.signOut().then(() => { window.location.href = "index.html"; });
    }
}

// ==========================================
// 3. 필터 및 엔터 키 이벤트 매핑
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const targetButtons = document.querySelectorAll("#targetFilter .filter-btn");
    targetButtons.forEach(btn => {
        btn.addEventListener("click", function() {
            currentTarget = this.getAttribute("data-target");
            targetButtons.forEach(b => b.classList.remove("active"));
            this.classList.add("active");
            renderRecipes();
        });
    });

    const categoryButtons = document.querySelectorAll("#categoryFilter .filter-btn");
    categoryButtons.forEach(btn => {
        btn.addEventListener("click", function() {
            currentCategory = this.getAttribute("data-category");
            categoryButtons.forEach(b => b.classList.remove("active"));
            this.classList.add("active");
            renderRecipes();
        });
    });

    document.querySelector(".btn-search")?.addEventListener("click", renderRecipes);
    document.getElementById("searchInput")?.addEventListener("keypress", (e) => {
        if(e.key === "Enter") renderRecipes();
    });

    initTheme();
});

// ==========================================
// 4. 냉장고 데이터 실시간 연동 및 필터링 알고리즘
// ==========================================
function addIngredient() {
    const input = document.getElementById('ingInput');
    const user = auth.currentUser;
    if (!input.value || !user) return;

    const forbiddenList = [
        "손가락", "발가락", "눈알", "머리카락", "가발", "손톱", "발톱", 
        "사람", "인간", "인육", "시체", "독약", "유리", "벽돌",
        "키보드", "휴대폰", "스마트폰", "마우스", "모니터"
    ];
    const rawItems = input.value.split(',').map(item => item.trim()).filter(item => item.length > 0);
    const hasForbidden = rawItems.some(item => forbiddenList.some(w => item.replace(/\s+/g, "").includes(w)));
    
    if (hasForbidden) {
        alert("⚠️ 요리 재료로 적합하지 않은 유해 물품은 추가할 수 없습니다!");
        input.value = ""; return;
    }

    rawItems.forEach(itemName => {
        db.collection("users").doc(user.uid).collection("fridge").add({
            name: itemName, timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
    });
    input.value = "";
}

// 💡 [기능 구현] 원클릭 추천 태그 마우스 클릭 연동 함수
window.addQuickIngredient = function(itemName) {
    const user = auth.currentUser;
    if (!user) { alert("로그인이 필요한 서비스입니다."); return; }
    
    // 이미 동일한 재료가 냉장고 안에 들어가 있다면 중복 방지 처리
    if (myFridgeItems.includes(itemName)) {
        alert(`이미 내 냉장고에 [${itemName}] 재료가 보관되어 있습니다!`);
        return;
    }

    db.collection("users").doc(user.uid).collection("fridge").add({
        name: itemName, timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
}

function deleteIngredient(id) {
    const user = auth.currentUser;
    db.collection("users").doc(user.uid).collection("fridge").doc(id).delete();
}

function getMatchRate(recipeIngredients) {
    if (myFridgeItems.length === 0) return 0;
    const matches = recipeIngredients.filter(need => myFridgeItems.some(mine => mine.includes(need) || need.includes(mine)));
    return Math.round((matches.length / recipeIngredients.length) * 100);
}

function renderRecipes() {
    const grid = document.getElementById('recipeGrid');
    const countDisplay = document.getElementById('resultCount');
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || "";
    if (!grid) return;

    let filtered = recipes.filter(r => {
        const targetMatch = (currentTarget === "전체" || r.target === currentTarget);
        const categoryMatch = (currentCategory === "전체" || r.category === currentCategory);
        const searchMatch = r.title.toLowerCase().includes(searchTerm) || r.desc.toLowerCase().includes(searchTerm);
        return targetMatch && categoryMatch && searchMatch;
    });

    const scoredRecipes = filtered.map(r => ({ ...r, matchRate: getMatchRate(r.ingredients) }));
    scoredRecipes.sort((a, b) => b.matchRate - a.matchRate || b.popularity - a.popularity);

    grid.innerHTML = "";
    if (countDisplay) countDisplay.innerText = scoredRecipes.length;

    if (scoredRecipes.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: #a8a29e;">
                <i class="fas fa-utensils" style="font-size: 3rem; margin-bottom: 15px; color: #fdba74;"></i>
                <p style="font-size: 1.1rem; font-weight: 500; margin: 0;">매칭되는 추천 레시피가 없습니다.</p>
            </div>`;
        return;
    }

    scoredRecipes.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.onclick = () => openModal(recipe.id);
        const aiBadge = recipe.matchRate > 0 
            ? `<span class="ai-match" style="background:#ff6b6b; color:white; padding:2px 8px; border-radius:4px;"><i class="fas fa-robot"></i> AI 추천 ${recipe.matchRate}%</span>`
            : `<span class="ai-match"><i class="fas fa-check-circle"></i> AI 추천</span>`;

        card.innerHTML = `
            <div class="card-img-wrapper"><img src="${recipe.img}" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400'"></div>
            <div class="recipe-info">
                <div class="badge-group">${aiBadge} <span class="household-badge">${recipe.target}</span></div>
                <h3>${recipe.title}</h3>
                <p class="recipe-desc">${recipe.desc}</p>
                <div class="card-footer">
                    <span><i class="far fa-clock"></i> ${recipe.time}</span>
                    <span><i class="fas fa-fire" style="color:#ea580c;"></i> 난이도: ${'⭐'.repeat(recipe.difficulty)}</span>
                </div>
            </div>`;
        grid.appendChild(card);
    });
}

function loadIngredients() {
    const user = auth.currentUser;
    if (!user) return;
    db.collection("users").doc(user.uid).collection("fridge").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
        myFridgeItems = [];
        const listDiv = document.getElementById('myFridgeList');
        if(!listDiv) return;
        listDiv.innerHTML = "";
        snapshot.forEach((doc) => {
            const data = doc.data();
            myFridgeItems.push(data.name);
            listDiv.innerHTML += `
                <div class="ingredient-tag">
                    <span>${data.name}</span>
                    <i class="fas fa-times" onclick="deleteIngredient('${doc.id}')" style="cursor:pointer; margin-left:8px;"></i>
                </div>`;
        });
        renderRecipes();
    });
}

// ==========================================
// 5. 북마크 데이터 로드 및 삭제
// ==========================================
function loadFavorites() {
    const user = auth.currentUser;
    if (!user) return;
    const favoriteListDiv = document.getElementById('myFavoriteList');
    if (!favoriteListDiv) return;

    db.collection("users").doc(user.uid).collection("favorites").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
        favoriteListDiv.innerHTML = "";
        if (snapshot.empty) {
            favoriteListDiv.innerHTML = `<p style="color: #a8a29e; font-size: 0.9rem; text-align: center; padding: 15px 0;">저장된 AI 레시피가 없습니다.</p>`;
            return;
        }
        snapshot.forEach((doc) => {
            const data = doc.data();
            const item = document.createElement('div');
            item.style.cssText = "display: flex; justify-content: space-between; align-items: center; padding: 12px; background: var(--card-bg); border: 1px solid var(--border-color); border-radius: 8px; margin-bottom: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.05);";
            item.innerHTML = `
                <span onclick="openFavoriteModal('${doc.id}', \`${data.title}\`, \`${data.content.replace(/`/g, '\\`').replace(/\n/g, ' ')}\`, \`${data.rawText.replace(/`/g, '\\`').replace(/\n/g, ' ')}\`)" style="cursor: pointer; font-weight: 600; color: #ea580c; font-size: 0.9rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 80%;">
                    ❤️ ${data.title}
                </span>
                <i class="fas fa-trash-alt" onclick="deleteFavorite('${doc.id}')" style="cursor: pointer; color: #ef4444; font-size: 0.85rem;" title="삭제"></i>`;
            favoriteListDiv.appendChild(item);
        });
    });
}

window.deleteFavorite = function(id) {
    if (confirm("이 레시피를 즐겨찾기에서 삭제하시겠습니까?")) {
        const user = auth.currentUser;
        db.collection("users").doc(user.uid).collection("favorites").doc(id).delete().then(() => alert("삭제되었습니다."));
    }
}

window.openFavoriteModal = function(id, title, content, rawText) {
    const modal = document.getElementById('recipeModal');
    const modalBody = document.getElementById('modalBody');
    lastAiRecipe = { title: title, formattedText: content, rawText: rawText };

    modalBody.innerHTML = `
        <div style="border-bottom: 2px solid #ea580c; padding-bottom: 12px; margin-bottom: 16px;">
            <h2 style="margin: 0; font-size: 1.4rem;">❤️ 저장된 레시피: ${title}</h2>
            <div style="margin-top: 12px;">
                <button onclick="copyAiRecipe()" style="background: #f3f4f6; color: #374151; border: 1px solid #d1d5db; padding: 6px 12px; border-radius: 6px; font-size: 0.85rem; font-weight: 500; cursor: pointer;"><i class="far fa-copy"></i> 레시피 복사</button>
            </div>
        </div>
        <div style="line-height: 1.7; font-size: 0.95rem; max-height: 60vh; overflow-y: auto; padding-right: 8px;">${content}</div>`;
    modal.style.display = "block";
}

// 상태 감시
auth.onAuthStateChanged((user) => {
    const nameDisplay = document.getElementById('userDisplayName');
    const isAppPage = window.location.pathname.includes('app.html');
    if (user) {
        if (nameDisplay) nameDisplay.innerText = `${user.email.split('@')[0]}님 환영합니다!`;
        if (isAppPage) { loadIngredients(); loadFavorites(); }
    } else {
        if (isAppPage) window.location.href = "index.html";
    }
});

// 정적 레시피 모달 제어
window.openModal = function(id) {
    const recipe = recipes.find(r => r.id === id);
    if(!recipe) return;
    const modal = document.getElementById('recipeModal');
    document.getElementById('modalBody').innerHTML = `
        <h2 style="margin-bottom:10px;">${recipe.title}</h2>
        <div style="background:#fff5f5; padding:15px; border-radius:10px; margin-bottom:20px; color:#444;">
            <h4 style="color:#ff6b6b;"><i class="fas fa-magic"></i> AI 분석</h4>
            <p>${recipe.reason}</p>
        </div>
        <h3>재료</h3><p>${recipe.ingredients.join(', ')}</p>`;
    modal.style.display = "block";
}
window.closeModal = function() { document.getElementById('recipeModal').style.display = "none"; }

window.copyAiRecipe = function() {
    if (!lastAiRecipe) return;
    navigator.clipboard.writeText(lastAiRecipe.rawText).then(() => alert("📋 클립보드에 복사되었습니다!")).catch(() => alert("복사 실패"));
}

window.saveAiRecipeToFavorites = function() {
    const user = auth.currentUser;
    if (!user) { alert("로그인이 필요합니다."); return; }
    if (!lastAiRecipe) return;

    const saveBtn = document.getElementById('btnSaveFavorite');
    saveBtn.disabled = true;
    saveBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> 저장 중...`;

    db.collection("users").doc(user.uid).collection("favorites").add({
        title: lastAiRecipe.title, content: lastAiRecipe.formattedText, rawText: lastAiRecipe.rawText, timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        alert("❤️ 북마크에 성공적으로 보관되었습니다!");
        saveBtn.innerHTML = `<i class="fas fa-heart"></i> 저장 완료`;
        saveBtn.style.background = "#d97706";
    })
    .catch(err => { alert("저장 실패"); saveBtn.disabled = false; });
}

// ==========================================
// 6. [REAL AI] 실시간 호출 엔진 (쇼핑 연동 탑재)
// ==========================================
async function askAiChef() {
    if (!myFridgeItems || myFridgeItems.length === 0) {
        alert("냉장고에 재료를 최소 1개 이상 추가해 주세요!"); return;
    }

    const forbiddenList = ["손가락", "발가락", "눈알", "머리카락", "인간", "독약", "유리", "벽돌", "휴대폰"];
    if (myFridgeItems.some(item => forbiddenList.some(w => item.replace(/\s+/g, "").includes(w)))) {
        alert("⚠️ 경고: 요리에 적합하지 않은 유해 물품이 감지되었습니다."); return;
    }

    const aiButton = document.getElementById('btnAiRecommend');
    const modal = document.getElementById('recipeModal');
    const modalBody = document.getElementById('modalBody');

    const API_KEY = "AIzaSyD3fFCXC2bf7TTs4B8V9WUGteRBjzyJstg"; 
    const modelName = "gemini-2.5-flash"; 
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${API_KEY}`;

    aiButton.disabled = true;
    aiButton.innerHTML = `<i class="fas fa-spinner fa-spin"></i> 요리 구상 중...`;

    const promptMessage = `
    사용자의 냉장고 재료 목록: [${myFridgeItems.join(", ")}]
    타겟 고객: ${currentTarget}, 선호 카테고리: ${currentCategory}

    [필수 예외 처리 규칙]
    - 재료 목록에 먹을 수 없는 물건이 있다면 "ERR_NOT_FOOD" 하나만 응답하세요.

    [정상 출력 규칙]
    - 답변 첫 줄은 반드시 "요리명: [이름]" 형태로 작성해 주세요.
    - 요리명, 이유, 재료, 조리 순서 형식을 마크다운 특수 기호 없이 가독성 높게 개행을 사용해 작성해 주세요.
    - 🌟 답변의 가장 마지막 줄에는 반드시 "•쇼핑이 필요한 주재료:[재료이름, 재료이름]" 형태로 추가로 필요한 추천 식재료 혹은 핵심 재료를 2~3개 쉼표로 분리하여 명시해 주세요. (예: •쇼핑이 필요한 주재료:[차돌박이, 양파, 버섯])
    `;

    try {
        const response = await fetch(url, {
            method: "POST", headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: [{ parts: [{ text: promptMessage }] }] })
        });
        const resData = await response.json();
        if (!response.ok) throw new Error("API 호출 실패");

        const aiText = resData.candidates[0].content.parts[0].text.trim();
        if (aiText.includes("ERR_NOT_FOOD")) { alert("⚠️ 요리할 수 없는 물건이 포함되어 있습니다!"); return; }

        let extractedTitle = "AI 추천 레시피";
        const titleMatch = aiText.match(/요리명:\s*(.*?)(?:\n|$)/);
        if (titleMatch && titleMatch[1]) extractedTitle = titleMatch[1].replace(/[*#]/g, "").trim();

        let formattedText = aiText
            .replace(/\*\*(.*?)\*\*/g, '<strong style="color: #ea580c; display: inline-block; margin-top: 10px; font-size: 1.05rem;">$1</strong>')
            .replace(/^\* (.*?)$/gm, '• $1')
            .replace(/\n/g, '<br>');

        const shopMatch = aiText.match(/•쇼핑이 필요한\s*주재료:\s*\[(.*?)\]/);
        if (shopMatch && shopMatch[1]) {
            const shopItems = shopMatch[1].split(',').map(i => i.trim());
            let shopHtml = `<div style="margin-top: 20px; padding: 15px; background: rgba(234,88,12,0.08); border-radius: 10px; border: 1px solid #ea580c;">
                            <h4 style="margin:0 0 10px 0; color:#ea580c;"><i class="fas fa-shopping-cart"></i> 부족한 재료 바로 구매하기</h4>
                            <div style="display:flex; gap:8px; flex-wrap:wrap;">`;
            shopItems.forEach(item => {
                shopHtml += `<a href="https://www.coupang.com/np/search?q=${encodeURIComponent(item)}" target="_blank" style="background:#ea580c; color:white; text-decoration:none; padding:6px 12px; border-radius:6px; font-size:0.85rem; font-weight:bold; display:inline-flex; align-items:center; gap:5px;">
                                ${item} 장보기 <i class="fas fa-external-link-alt" style="font-size:0.75rem;"></i>
                             </a>`;
            });
            shopHtml += `</div></div>`;
            formattedText += shopHtml;
        }

        lastAiRecipe = { title: extractedTitle, formattedText: formattedText, rawText: aiText };

        modalBody.innerHTML = `
            <div style="border-bottom: 2px solid #ea580c; padding-bottom: 12px; margin-bottom: 16px;">
                <h2 style="margin: 0; font-size: 1.4rem;"><i class="fas fa-magic" style="color:#ea580c;"></i> AI 셰프 추천 레시피</h2>
                <div style="margin-top: 12px; display: flex; gap: 8px;">
                    <button id="btnCopyClipboard" onclick="copyAiRecipe()" style="background: #f3f4f6; color: #374151; border: 1px solid #d1d5db; padding: 6px 12px; border-radius: 6px; font-size: 0.85rem; font-weight: 500; cursor: pointer;"><i class="far fa-copy"></i> 복사</button>
                    <button id="btnSaveFavorite" onclick="saveAiRecipeToFavorites()" style="background: #ea580c; color: white; border: none; padding: 6px 12px; border-radius: 6px; font-size: 0.85rem; font-weight: 500; cursor: pointer;"><i class="far fa-heart"></i> 즐겨찾기 저장</button>
                </div>
            </div>
            <div style="line-height: 1.7; font-size: 0.95rem; max-height: 60vh; overflow-y: auto; padding-right: 8px;">${formattedText}</div>`;
        modal.style.display = "block";

    } catch (error) {
        alert("⏰ 현재 AI 서버 혼잡 유효시간입니다. 잠시 후 다시 시도해 주세요!");
    } finally {
        aiButton.disabled = false;
        aiButton.innerHTML = `<i class="fas fa-robot"></i> AI 셰프에게 추천받기`;
    }
}

// ==========================================
// 7. 다크 모드(Dark Mode) 전용 테마 컨트롤 엔진
// ==========================================
function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById('themeToggleBtn');
    
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
        btn.innerHTML = `<i class="fas fa-moon"></i>`;
    } else {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
        btn.innerHTML = `<i class="fas fa-sun" style="color:#fdbb2d;"></i>`;
    }
}

function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const btn = document.getElementById('themeToggleBtn');
    if(!btn) return;
    
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        btn.innerHTML = `<i class="fas fa-sun" style="color:#fdbb2d;"></i>`;
    } else {
        body.classList.remove('dark-theme');
        btn.innerHTML = `<i class="fas fa-moon"></i>`;
    }
}