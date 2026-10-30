// ==========================================
// 1. 레시피 데이터 (기본 탑재 - 36종 확장 버전)
// ==========================================
const recipes = [
    // --- 한식 (Korean) ---
    {
    id: 1,
    target: "전체",
    category: "한식",
    title: "돼지고기 김치찌개",
    img: "images/김치찌개.png",
    difficulty: 1,
    popularity: 99,
    time: "30분",
    desc: "진하게 우러난 돼지고기와 잘 익은 김치의 환상 조합",
    reason: "한국인이 가장 사랑하는 찌개 중 하나로 실패 확률이 매우 낮습니다.",
    ingredients: [
        "김치",
        "돼지고기",
        "두부",
        "대파",
        "양파",
        "다진마늘",
        "고춧가루",
        "국간장",
        "멸치육수"
    ],
    steps: [
        { text: "김치는 먹기 좋은 크기로 자르고 돼지고기는 한입 크기로 준비합니다.", img: "" },
        { text: "냄비에 참기름을 두르고 돼지고기를 중불에서 볶습니다.", img: "" },
        { text: "고기가 익기 시작하면 김치를 넣고 4~5분 정도 함께 볶습니다.", img: "" },
        { text: "멸치육수를 붓고 끓기 시작하면 다진마늘과 국간장을 넣습니다.", img: "" },
        { text: "중약불에서 15분 정도 푹 끓여 깊은 맛을 냅니다.", img: "" },
        { text: "두부와 양파를 넣고 5분간 더 끓입니다.", img: "" },
        { text: "마지막으로 대파와 고춧가루를 넣고 2분 더 끓여 완성합니다.", img: "" }
    ]
},
    {
    id: 2,
    target: "전체",
    category: "한식",
    title: "된장찌개",
    img: "images/된장찌개.jpg",
    difficulty: 1,
    popularity: 94,
    time: "25분",
    desc: "구수한 된장 향이 가득한 집밥 대표 찌개",
    reason: "냉장고 속 다양한 채소를 활용하기 좋은 만능 찌개입니다.",
    ingredients: [
        "된장",
        "두부",
        "애호박",
        "양파",
        "다진마늘",
        "감자",
        "청양고추",
        "멸치육수"
    ],
    steps: [
        { text: "멸치와 다시마로 육수를 준비합니다.", img: "" },
        { text: "감자와 양파를 먹기 좋은 크기로 썰어줍니다.", img: "" },
        { text: "끓는 육수에 된장을 체에 풀어 넣습니다.", img: "" },
        { text: "감자를 먼저 넣고 5분 정도 끓입니다.", img: "" },
        { text: "애호박과 양파를 넣고 중불에서 끓입니다.", img: "" },
        { text: "다진마늘을 넣어 풍미를 더합니다.", img: "" },
        { text: "두부를 넣고 5분 정도 더 끓입니다.", img: "" },
        { text: "청양고추를 넣고 한소끔 끓여 마무리합니다.", img: "" }
    ]
},
    {
    id: 3,
    target: "아이 가정",
    category: "한식",
    title: "간장 찜닭",
    img: "images/간장찜닭.jpg",
    difficulty: 2,
    popularity: 95,
    time: "45분",
    desc: "달콤짭짤한 양념이 잘 배어든 가족 인기 메뉴",
    reason: "맵지 않아 아이들과 함께 즐기기 좋은 닭요리입니다.",
    ingredients: [
        "닭고기",
        "감자",
        "당근",
        "간장",
        "양파",
        "대파",
        "당면",
        "설탕",
        "다진마늘",
        "후추"
    ],
    steps: [
        { text: "닭고기는 깨끗이 씻어 물기를 제거합니다.", img: "" },
        { text: "감자와 당근은 큼직하게 썰어 준비합니다.", img: "" },
        { text: "간장, 설탕, 다진마늘을 섞어 양념장을 만듭니다.", img: "" },
        { text: "냄비에 닭고기와 양념장을 넣고 10분 정도 끓입니다.", img: "" },
        { text: "감자와 당근을 넣고 중불에서 졸입니다.", img: "" },
        { text: "양파와 대파를 넣고 10분 정도 더 끓입니다.", img: "" },
        { text: "불린 당면을 넣고 국물을 흡수시킵니다.", img: "" },
        { text: "후추를 살짝 뿌린 뒤 국물이 자작해지면 완성합니다.", img: "" }
    ]
},
    {
    id: 4,
    target: "1인 가구",
    category: "한식",
    title: "스팸 계란 볶음밥",
    img: "images/스팸계란볶음밥.jpg",
    difficulty: 1,
    popularity: 92,
    time: "15분",
    desc: "짭조름한 스팸과 고소한 계란이 어우러진 자취생 필수 메뉴",
    reason: "짧은 시간 안에 든든한 한 끼를 만들 수 있습니다.",
    ingredients: [
        "스팸",
        "달걀",
        "대파",
        "찬밥",
        "식용유",
        "간장",
        "후추"
    ],
    steps: [
        { text: "스팸은 작은 깍둑썰기, 대파는 송송 썰어 준비합니다.", img: "" },
        { text: "팬에 식용유를 두르고 대파를 볶아 파기름을 냅니다.", img: "" },
        { text: "스팸을 넣고 노릇하게 볶습니다.", img: "" },
        { text: "달걀을 풀어 넣고 스크램블처럼 익혀줍니다.", img: "" },
        { text: "찬밥을 넣고 덩어리를 풀어가며 볶습니다.", img: "" },
        { text: "간장을 팬 가장자리에 둘러 불향을 냅니다.", img: "" },
        { text: "후추를 뿌리고 골고루 섞은 뒤 완성합니다.", img: "" }
    ]
},
    {
    id: 5,
    target: "부모님",
    category: "한식",
    title: "소고기 미역국",
    img: "images/소고기미역국.jpg",
    difficulty: 1,
    popularity: 96,
    time: "35분",
    desc: "깊고 진한 국물이 매력적인 영양 만점 미역국",
    reason: "부모님 건강식이나 생일상에 잘 어울립니다.",
    ingredients: [
        "미역",
        "소고기",
        "참기름",
        "국간장",
        "다진마늘",
        "소금",
        "물"
    ],
    steps: [
        { text: "미역을 찬물에 15분 정도 불린 뒤 물기를 제거합니다.", img: "" },
        { text: "냄비에 참기름을 두르고 소고기를 볶습니다.", img: "" },
        { text: "불린 미역을 넣고 함께 볶아 향을 냅니다.", img: "" },
        { text: "물을 붓고 강불에서 끓입니다.", img: "" },
        { text: "끓기 시작하면 국간장과 다진마늘을 넣습니다.", img: "" },
        { text: "중약불로 줄여 20분 이상 푹 끓입니다.", img: "" },
        { text: "소금으로 간을 맞추고 완성합니다.", img: "" }
    ]
},
    {
    id: 6,
    target: "전체",
    category: "한식",
    title: "제육볶음",
    img: "images/제육볶음.jpg",
    difficulty: 2,
    popularity: 98,
    time: "30분",
    desc: "매콤달콤한 양념이 일품인 국민 반찬",
    reason: "밥반찬과 술안주 모두 가능한 만능 메뉴입니다.",
    ingredients: [
        "돼지고기",
        "양파",
        "대파",
        "고추장",
        "고춧가루",
        "간장",
        "설탕",
        "다진마늘",
        "참기름"
    ],
    steps: [
        { text: "돼지고기를 먹기 좋은 크기로 썰어 준비합니다.", img: "" },
        { text: "고추장, 고춧가루, 간장, 설탕, 마늘을 섞어 양념장을 만듭니다.", img: "" },
        { text: "고기를 양념장에 20분 정도 재워둡니다.", img: "" },
        { text: "팬을 달군 뒤 양념된 고기를 볶기 시작합니다.", img: "" },
        { text: "고기가 반쯤 익으면 양파를 넣습니다.", img: "" },
        { text: "대파를 넣고 강불에서 빠르게 볶아 불맛을 냅니다.", img: "" },
        { text: "마지막에 참기름을 넣고 마무리합니다.", img: "" }
    ]
},
    {
    id: 7,
    target: "아이 가정",
    category: "한식",
    title: "뚝배기 불고기",
    img: "images/뚝배기불고기.jpg",
    difficulty: 2,
    popularity: 91,
    time: "25분",
    desc: "달콤한 국물과 부드러운 고기가 매력적인 불고기",
    reason: "아이들도 부담 없이 먹을 수 있습니다.",
    ingredients: [
        "소고기",
        "팽이버섯",
        "당면",
        "간장",
        "양파",
        "설탕",
        "대파",
        "다진마늘"
    ],
    steps: [
        { text: "당면은 미리 물에 불려둡니다.", img: "" },
        { text: "간장, 설탕, 마늘을 섞어 양념장을 만듭니다.", img: "" },
        { text: "소고기를 양념장에 15분 정도 재웁니다.", img: "" },
        { text: "뚝배기에 양파를 깔고 고기를 올립니다.", img: "" },
        { text: "팽이버섯과 당면을 올립니다.", img: "" },
        { text: "육수를 자작하게 붓고 끓입니다.", img: "" },
        { text: "대파를 넣고 한소끔 끓이면 완성입니다.", img: "" }
    ]
},
    {
    id: 8,
    target: "부모님",
    category: "한식",
    title: "버섯 두부 전골",
    img: "images/버섯두부전골.jpg",
    difficulty: 2,
    popularity: 88,
    time: "35분",
    desc: "담백하고 깔끔한 국물이 특징인 건강식 전골",
    reason: "칼로리가 낮고 영양이 풍부합니다.",
    ingredients: [
        "두부",
        "팽이버섯",
        "표고버섯",
        "느타리버섯",
        "대파",
        "양파",
        "국간장",
        "멸치육수"
    ],
    steps: [
        { text: "두부와 버섯을 먹기 좋은 크기로 손질합니다.", img: "" },
        { text: "전골냄비에 재료를 보기 좋게 담습니다.", img: "" },
        { text: "멸치육수를 부어줍니다.", img: "" },
        { text: "국간장으로 기본 간을 합니다.", img: "" },
        { text: "강불에서 끓이다가 중불로 줄입니다.", img: "" },
        { text: "버섯 향이 충분히 우러날 때까지 끓입니다.", img: "" },
        { text: "대파를 넣고 마무리합니다.", img: "" }
    ]
},
    {
    id: 9,
    target: "1인 가구",
    category: "한식",
    title: "참치 김치볶음밥",
    img: "images/참치김치볶음밥.jpg",
    difficulty: 1,
    popularity: 97,
    time: "15분",
    desc: "김치와 참치의 조합이 환상적인 볶음밥",
    reason: "냉장고에 있는 재료만으로 쉽게 만들 수 있습니다.",
    ingredients: [
        "김치",
        "참치캔",
        "찬밥",
        "설탕",
        "대파",
        "달걀",
        "참기름"
    ],
    steps: [
        { text: "김치를 잘게 썰고 대파를 준비합니다.", img: "" },
        { text: "참치 기름으로 대파를 볶아 파기름을 냅니다.", img: "" },
        { text: "김치를 넣고 충분히 볶아 신맛을 줄입니다.", img: "" },
        { text: "참치를 넣고 함께 볶습니다.", img: "" },
        { text: "찬밥을 넣고 골고루 섞습니다.", img: "" },
        { text: "설탕을 약간 넣어 감칠맛을 살립니다.", img: "" },
        { text: "참기름을 둘러 마무리합니다.", img: "" },
        { text: "기호에 따라 계란후라이를 올려 완성합니다.", img: "" }
    ]
},

    // --- 일식 (Japanese) ---
    {
    id: 10,
    target: "1인 가구",
    category: "일식",
    title: "규동 (소고기 덮밥)",
    img: "images/규동.jpg",
    difficulty: 1,
    popularity: 89,
    time: "20분",
    desc: "달콤짭짤한 일본식 소고기 덮밥",
    reason: "간단한 재료로 일본 식당 느낌을 낼 수 있습니다.",
    ingredients: [
        "소고기",
        "양파",
        "간장",
        "설탕",
        "달걀",
        "맛술",
        "밥",
        "대파"
    ],
    steps: [
        { text: "양파를 얇게 채 썰어 준비합니다.", img: "" },
        { text: "냄비에 간장, 설탕, 맛술, 물을 넣고 끓입니다.", img: "" },
        { text: "양파를 넣고 부드러워질 때까지 익힙니다.", img: "" },
        { text: "소고기를 넣고 중불에서 익힙니다.", img: "" },
        { text: "고기가 익으면 달걀을 살짝 풀어 넣습니다.", img: "" },
        { text: "밥 위에 올리고 대파를 뿌려 완성합니다.", img: "" }
    ]
},
    {
    id: 11,
    target: "아이 가정",
    category: "일식",
    title: "수제 돈카츠",
    img: "images/수제돈카츠.jpg",
    difficulty: 3,
    popularity: 93,
    time: "40분",
    desc: "겉은 바삭하고 속은 촉촉한 정통 돈카츠",
    reason: "아이들이 가장 좋아하는 대표 외식 메뉴입니다.",
    ingredients: [
        "돼지고기",
        "빵가루",
        "밀가루",
        "달걀",
        "소금",
        "후추",
        "식용유"
    ],
    steps: [
        { text: "돼지고기를 두드려 부드럽게 만듭니다.", img: "" },
        { text: "소금과 후추로 밑간을 합니다.", img: "" },
        { text: "밀가루를 골고루 묻힙니다.", img: "" },
        { text: "달걀물을 입혀줍니다.", img: "" },
        { text: "빵가루를 꼼꼼히 묻힙니다.", img: "" },
        { text: "170도 기름에서 노릇하게 튀깁니다.", img: "" },
        { text: "먹기 좋게 썰어 소스와 함께 제공합니다.", img: "" }
    ]
},
    {
    id: 12,
    target: "전체",
    category: "일식",
    title: "밀푀유나베",
    img: "images/밀푀유나베.jpg",
    difficulty: 2,
    popularity: 97,
    time: "35분",
    desc: "배추와 소고기를 층층이 쌓은 전골",
    reason: "비주얼과 맛을 모두 만족시키는 손님 초대 요리입니다.",
    ingredients: [
        "소고기",
        "배추",
        "깻잎",
        "숙주",
        "표고버섯",
        "멸치육수",
        "대파"
    ],
    steps: [
        { text: "배추와 깻잎, 소고기를 겹겹이 쌓습니다.", img: "" },
        { text: "먹기 좋은 크기로 잘라 냄비에 세워 담습니다.", img: "" },
        { text: "가운데에 버섯과 숙주를 채웁니다.", img: "" },
        { text: "육수를 붓고 강불에서 끓입니다.", img: "" },
        { text: "끓기 시작하면 중불로 줄입니다.", img: "" },
        { text: "고기가 완전히 익으면 대파를 넣고 마무리합니다.", img: "" }
    ]
},
    {
    id: 13,
    target: "1인 가구",
    category: "일식",
    title: "가츠동 (돈까스 덮밥)",
    img: "images/가츠동.jpg",
    difficulty: 2,
    popularity: 86,
    time: "20분",
    desc: "돈까스와 계란이 어우러진 일본식 덮밥",
    reason: "남은 돈까스를 활용하기 좋은 메뉴입니다.",
    ingredients: [
        "돈까스",
        "양파",
        "달걀",
        "간장",
        "설탕",
        "밥",
        "대파"
    ],
    steps: [
        { text: "양파를 채 썰어 준비합니다.", img: "" },
        { text: "간장과 설탕으로 소스를 만듭니다.", img: "" },
        { text: "양파를 소스에 넣고 끓입니다.", img: "" },
        { text: "돈까스를 썰어 올립니다.", img: "" },
        { text: "풀어놓은 달걀을 둘러줍니다.", img: "" },
        { text: "뚜껑을 덮고 살짝 익힙니다.", img: "" },
        { text: "밥 위에 올리고 대파를 뿌립니다.", img: "" }
    ]
},
    {
    id: 14,
    target: "부모님",
    category: "일식",
    title: "삼치 데리야끼 구이",
    img: "images/삼치데리야끼구이.jpg",
    difficulty: 2,
    popularity: 85,
    time: "25분",
    desc: "달콤한 데리야끼 소스를 입힌 생선구이",
    reason: "부드러운 식감으로 부모님이 드시기 좋습니다.",
    ingredients: [
        "삼치",
        "간장",
        "맛술",
        "올리고당",
        "생강",
        "후추"
    ],
    steps: [
        { text: "삼치의 물기를 제거합니다.", img: "" },
        { text: "간장, 맛술, 올리고당을 섞어 소스를 만듭니다.", img: "" },
        { text: "팬에서 삼치를 앞뒤로 굽습니다.", img: "" },
        { text: "겉면이 익으면 소스를 붓습니다.", img: "" },
        { text: "중약불에서 소스를 끼얹어가며 졸입니다.", img: "" },
        { text: "윤기가 돌면 접시에 담아 완성합니다.", img: "" }
    ]
},
    {
    id: 15,
    target: "전체",
    category: "일식",
    title: "야끼소바",
    img: "images/야끼소바.jpg",
    difficulty: 2,
    popularity: 88,
    time: "20분",
    desc: "일본식 볶음면의 대표 메뉴",
    reason: "냉장고 속 자투리 채소 활용에 좋습니다.",
    ingredients: [
        "우동면",
        "양배추",
        "돼지고기",
        "굴소스",
        "양파",
        "당근",
        "대파"
    ],
    steps: [
        { text: "양배추와 양파, 당근을 채 썹니다.", img: "" },
        { text: "팬에 돼지고기를 먼저 볶습니다.", img: "" },
        { text: "채소를 넣고 숨이 죽을 때까지 볶습니다.", img: "" },
        { text: "면을 넣고 함께 볶습니다.", img: "" },
        { text: "굴소스를 넣고 골고루 버무립니다.", img: "" },
        { text: "대파를 넣어 향을 더합니다.", img: "" },
        { text: "접시에 담아 가쓰오부시를 올리면 더욱 맛있습니다.", img: "" }
    ]
},

    // --- 중식 (Chinese) ---
    {
    id: 16,
    target: "전체",
    category: "중식",
    title: "짜장라면 고급화 (짜계치)",
    img: "images/짜계치.jpg",
    difficulty: 1,
    popularity: 95,
    time: "10분",
    desc: "짜장라면에 계란과 치즈를 더한 초간단 별미",
    reason: "간단한 재료만 추가해도 훨씬 풍부한 맛을 냅니다.",
    ingredients: [
        "짜장라면",
        "달걀",
        "체다치즈",
        "대파",
        "참기름"
    ],
    steps: [
        { text: "물을 끓여 면과 건더기 스프를 넣습니다.", img: "" },
        { text: "면이 익으면 물을 조금 남기고 따라냅니다.", img: "" },
        { text: "짜장 스프를 넣고 골고루 비벼줍니다.", img: "" },
        { text: "반숙 계란후라이를 준비합니다.", img: "" },
        { text: "치즈를 올리고 잔열로 녹입니다.", img: "" },
        { text: "대파와 참기름을 살짝 더해 마무리합니다.", img: "" }
    ]
},
    {
    id: 17,
    target: "부모님",
    category: "중식",
    title: "해물 누룽지탕",
    img: "images/해물누룽지탕.jpg",
    difficulty: 3,
    popularity: 89,
    time: "40분",
    desc: "바삭한 누룽지와 해물 소스가 어우러진 고급 요리",
    reason: "특별한 날 대접 요리로 손색이 없습니다.",
    ingredients: [
        "누룽지",
        "오징어",
        "새우",
        "청경채",
        "양파",
        "당근",
        "전분물",
        "굴소스"
    ],
    steps: [
        { text: "오징어와 새우를 손질합니다.", img: "" },
        { text: "양파와 당근, 청경채를 썰어 준비합니다.", img: "" },
        { text: "팬에 해물과 채소를 볶습니다.", img: "" },
        { text: "굴소스와 물을 넣고 끓입니다.", img: "" },
        { text: "전분물을 넣어 농도를 맞춥니다.", img: "" },
        { text: "누룽지를 바삭하게 튀기거나 구워 준비합니다.", img: "" },
        { text: "먹기 직전에 해물 소스를 누룽지 위에 붓습니다.", img: "" }
    ]
},
    {
    id: 18,
    target: "전체",
    category: "중식",
    title: "마파두부",
    img: "images/마파두부.jpg",
    difficulty: 2,
    popularity: 91,
    time: "25분",
    desc: "매콤하고 부드러운 두부 요리",
    reason: "밥 위에 올려 먹기 좋은 중식 대표 메뉴입니다.",
    ingredients: [
        "두부",
        "다진돼지고기",
        "두반장",
        "대파",
        "다진마늘",
        "고춧가루",
        "전분물",
        "참기름"
    ],
    steps: [
        { text: "두부를 깍둑썰기해 준비합니다.", img: "" },
        { text: "팬에 대파와 마늘을 볶아 향을 냅니다.", img: "" },
        { text: "다진 돼지고기를 넣고 볶습니다.", img: "" },
        { text: "두반장과 고춧가루를 넣고 볶습니다.", img: "" },
        { text: "물을 넣고 끓입니다.", img: "" },
        { text: "두부를 넣고 부서지지 않게 섞습니다.", img: "" },
        { text: "전분물로 농도를 맞춥니다.", img: "" },
        { text: "참기름을 둘러 완성합니다.", img: "" }
    ]
},
    {
    id: 19,
    target: "아이 가정",
    category: "중식",
    title: "꿔바로우 (찹쌀탕수육)",
    img: "images/꿔바로우.jpg",
    difficulty: 3,
    popularity: 94,
    time: "45분",
    desc: "겉은 바삭하고 속은 쫀득한 찹쌀탕수육",
    reason: "새콤달콤한 맛으로 아이들이 좋아합니다.",
    ingredients: [
        "돼지고기",
        "감자전분",
        "식초",
        "설탕",
        "간장",
        "당근",
        "양파",
        "식용유"
    ],
    steps: [
        { text: "돼지고기를 먹기 좋게 썰어 준비합니다.", img: "" },
        { text: "감자전분 반죽을 만들어 고기에 입힙니다.", img: "" },
        { text: "170도 기름에서 1차 튀김을 합니다.", img: "" },
        { text: "잠시 식힌 후 2차 튀김으로 바삭함을 살립니다.", img: "" },
        { text: "식초와 설탕으로 소스를 만듭니다.", img: "" },
        { text: "채소를 넣고 소스를 끓입니다.", img: "" },
        { text: "튀긴 고기에 소스를 버무려 완성합니다.", img: "" }
    ]
},
    {
    id: 20,
    target: "1인 가구",
    category: "중식",
    title: "토마토 달걀 볶음",
    img: "images/토마토달걀볶음.jpg",
    difficulty: 1,
    popularity: 89,
    time: "10분",
    desc: "중국 가정식의 대표 메뉴",
    reason: "재료가 간단하고 영양이 풍부합니다.",
    ingredients: [
        "토마토",
        "달걀",
        "소금",
        "대파",
        "설탕",
        "식용유"
    ],
    steps: [
        { text: "토마토를 큼직하게 썰어 준비합니다.", img: "" },
        { text: "달걀을 풀어 스크램블로 먼저 익힙니다.", img: "" },
        { text: "달걀은 따로 덜어둡니다.", img: "" },
        { text: "팬에 토마토를 볶아 수분을 냅니다.", img: "" },
        { text: "소금과 설탕으로 간을 맞춥니다.", img: "" },
        { text: "달걀을 다시 넣고 섞습니다.", img: "" },
        { text: "대파를 넣고 마무리합니다.", img: "" }
    ]
},
    {
    id: 21,
    target: "전체",
    category: "중식",
    title: "고추잡채와 꽃빵",
    img: "images/고추잡채와꽃빵.jpg",
    difficulty: 2,
    popularity: 87,
    time: "30분",
    desc: "아삭한 채소와 고기를 꽃빵에 싸 먹는 중식",
    reason: "손님 초대용 메뉴로 인기가 많습니다.",
    ingredients: [
        "피망",
        "돼지고기",
        "꽃빵",
        "굴소스",
        "양파",
        "대파",
        "다진마늘"
    ],
    steps: [
        { text: "피망과 양파를 가늘게 채 썹니다.", img: "" },
        { text: "돼지고기를 채 썰어 준비합니다.", img: "" },
        { text: "팬에 마늘과 대파를 볶아 향을 냅니다.", img: "" },
        { text: "돼지고기를 넣고 볶습니다.", img: "" },
        { text: "피망과 양파를 넣고 강불에서 볶습니다.", img: "" },
        { text: "굴소스로 간을 맞춥니다.", img: "" },
        { text: "꽃빵은 찜기에 쪄 준비합니다.", img: "" },
        { text: "고추잡채를 꽃빵에 넣어 먹습니다.", img: "" }
    ]
},

    // --- 양식 (Western) ---
    {
    id: 22,
    target: "1인 가구",
    category: "양식",
    title: "베이컨 알리오 올리오",
    img: "images/베이컨알리오올리오.jpg",
    difficulty: 1,
    popularity: 93,
    time: "20분",
    desc: "마늘 향과 베이컨 풍미가 살아있는 오일 파스타",
    reason: "적은 재료로 레스토랑 같은 분위기를 낼 수 있습니다.",
    ingredients: [
        "파스타면",
        "마늘",
        "올리브유",
        "베이컨",
        "페페론치노",
        "소금",
        "후추",
        "파슬리"
    ],
    steps: [
        { text: "끓는 물에 소금을 넣고 파스타면을 삶습니다.", img: "" },
        { text: "마늘은 얇게 편 썰고 베이컨은 먹기 좋게 자릅니다.", img: "" },
        { text: "팬에 올리브유를 두르고 마늘을 약불에서 볶습니다.", img: "" },
        { text: "베이컨과 페페론치노를 넣어 풍미를 냅니다.", img: "" },
        { text: "삶은 면을 넣고 볶습니다.", img: "" },
        { text: "면수를 조금 넣어 소스를 유화시킵니다.", img: "" },
        { text: "소금과 후추로 간을 맞춥니다.", img: "" },
        { text: "파슬리를 뿌려 완성합니다.", img: "" }
    ]
},
    {
    id: 23,
    target: "아이 가정",
    category: "양식",
    title: "까르보나라 파스타",
    img: "images/까르보나라파스타.jpg",
    difficulty: 2,
    popularity: 96,
    time: "25분",
    desc: "부드럽고 고소한 크림 파스타",
    reason: "아이들이 가장 좋아하는 양식 메뉴 중 하나입니다.",
    ingredients: [
        "파스타면",
        "생크림",
        "우유",
        "베이컨",
        "양파",
        "파마산치즈",
        "후추",
        "버터"
    ],
    steps: [
        { text: "파스타면을 삶아 준비합니다.", img: "" },
        { text: "베이컨과 양파를 볶아 향을 냅니다.", img: "" },
        { text: "버터를 넣고 녹입니다.", img: "" },
        { text: "우유와 생크림을 넣고 끓입니다.", img: "" },
        { text: "파마산치즈를 넣어 농도를 맞춥니다.", img: "" },
        { text: "삶은 면을 넣고 소스를 입힙니다.", img: "" },
        { text: "후추를 듬뿍 뿌려 완성합니다.", img: "" }
    ]
},
    {
    id: 24,
    target: "전체",
    category: "양식",
    title: "찹스테이크",
    img: "images/찹스테이크.jpg",
    difficulty: 2,
    popularity: 92,
    time: "25분",
    desc: "부드러운 소고기와 채소를 함께 즐기는 스테이크 요리",
    reason: "손님상이나 특별한 날 식사로 좋습니다.",
    ingredients: [
        "소고기",
        "파프리카",
        "양파",
        "돈까스소스",
        "케첩",
        "버터",
        "후추",
        "마늘"
    ],
    steps: [
        { text: "소고기를 큼직하게 썰고 밑간을 합니다.", img: "" },
        { text: "파프리카와 양파를 먹기 좋게 자릅니다.", img: "" },
        { text: "팬에 버터를 녹이고 마늘을 볶습니다.", img: "" },
        { text: "소고기를 강불에서 빠르게 구워냅니다.", img: "" },
        { text: "채소를 넣고 함께 볶습니다.", img: "" },
        { text: "케첩과 돈까스소스를 넣어 버무립니다.", img: "" },
        { text: "후추를 뿌려 마무리합니다.", img: "" }
    ]
},
    {
    id: 25,
    target: "부모님",
    category: "양식",
    title: "토마토 카프레제 샐러드",
    img: "images/토마토카프레제샐러드.jpg",
    difficulty: 1,
    popularity: 84,
    time: "10분",
    desc: "신선한 토마토와 치즈가 어우러진 건강 샐러드",
    reason: "입맛을 돋우는 가벼운 전채요리입니다.",
    ingredients: [
        "토마토",
        "모짜렐라치즈",
        "발사믹식초",
        "올리브유",
        "바질",
        "후추"
    ],
    steps: [
        { text: "토마토와 치즈를 비슷한 두께로 썹니다.", img: "" },
        { text: "접시에 번갈아 담아줍니다.", img: "" },
        { text: "올리브유를 골고루 뿌립니다.", img: "" },
        { text: "발사믹식초를 둘러줍니다.", img: "" },
        { text: "바질과 후추를 뿌려 완성합니다.", img: "" }
    ]
},
    {
    id: 26,
    target: "1인 가구",
    category: "양식",
    title: "콘치즈",
    img: "images/콘치즈.webp",
    difficulty: 1,
    popularity: 95,
    time: "10분",
    desc: "달콤하고 고소한 국민 간식",
    reason: "간단하지만 만족도가 매우 높은 메뉴입니다.",
    ingredients: [
        "옥수수캔",
        "모짜렐라치즈",
        "마요네즈",
        "설탕",
        "버터",
        "파슬리"
    ],
    steps: [
        { text: "옥수수의 물기를 제거합니다.", img: "" },
        { text: "옥수수와 마요네즈를 섞습니다.", img: "" },
        { text: "설탕과 버터를 넣어 풍미를 더합니다.", img: "" },
        { text: "오븐용 그릇에 담습니다.", img: "" },
        { text: "치즈를 듬뿍 올립니다.", img: "" },
        { text: "오븐이나 에어프라이어에 구워줍니다.", img: "" },
        { text: "파슬리를 뿌려 완성합니다.", img: "" }
    ]
},
    {
    id: 27,
    target: "아이 가정",
    category: "양식",
    title: "식빵 치즈 피자",
    img: "images/식빵치즈피자.jpg",
    difficulty: 1,
    popularity: 90,
    time: "15분",
    desc: "아이들과 만들기 좋은 초간단 피자",
    reason: "집에서도 부담 없이 피자를 즐길 수 있습니다.",
    ingredients: [
        "식빵",
        "피자소스",
        "모짜렐라치즈",
        "햄",
        "옥수수",
        "파프리카"
    ],
    steps: [
        { text: "식빵을 오븐 팬에 올립니다.", img: "" },
        { text: "피자소스를 고르게 펴 바릅니다.", img: "" },
        { text: "햄과 채소를 올립니다.", img: "" },
        { text: "치즈를 듬뿍 뿌립니다.", img: "" },
        { text: "에어프라이어 또는 오븐에 넣습니다.", img: "" },
        { text: "치즈가 녹고 노릇해질 때까지 굽습니다.", img: "" }
    ]
},
    {
    id: 28,
    target: "전체",
    category: "양식",
    title: "에그인헬 (Shakshuka)",
    img: "images/에그인헬.webp",
    difficulty: 2,
    popularity: 91,
    time: "25분",
    desc: "토마토 소스에 달걀을 익혀 먹는 브런치 메뉴",
    reason: "카페 스타일 브런치를 집에서 즐길 수 있습니다.",
    ingredients: [
        "토마토소스",
        "달걀",
        "소시지",
        "양파",
        "모짜렐라치즈",
        "파프리카",
        "올리브유"
    ],
    steps: [
        { text: "양파와 파프리카를 썰어 준비합니다.", img: "" },
        { text: "팬에 올리브유를 두르고 채소를 볶습니다.", img: "" },
        { text: "소시지를 넣고 함께 볶습니다.", img: "" },
        { text: "토마토소스를 넣고 끓입니다.", img: "" },
        { text: "달걀을 깨뜨려 넣습니다.", img: "" },
        { text: "치즈를 올리고 뚜껑을 덮습니다.", img: "" },
        { text: "달걀이 익을 때까지 기다립니다.", img: "" },
        { text: "빵과 함께 곁들여 먹습니다.", img: "" }
    ]
},

    // --- 야외/캠핑 (Camping) ---
    {
    id: 29,
    target: "전체",
    category: "야외/캠핑",
    title: "모둠 꼬치구이",
    img: "images/모듬꼬치구이.webp",
    difficulty: 2,
    popularity: 94,
    time: "30분",
    desc: "숯불 향 가득한 캠핑 대표 꼬치 요리",
    reason: "캠핑 분위기를 가장 잘 살려주는 메뉴입니다.",
    ingredients: [
        "닭고기",
        "대파",
        "파프리카",
        "허브솔트",
        "양파",
        "식용유"
    ],
    steps: [
        { text: "닭고기를 한입 크기로 자릅니다.", img: "" },
        { text: "대파, 양파, 파프리카를 비슷한 크기로 썹니다.", img: "" },
        { text: "꼬치에 재료를 번갈아 끼웁니다.", img: "" },
        { text: "허브솔트를 골고루 뿌립니다.", img: "" },
        { text: "그릴 또는 숯불에 올립니다.", img: "" },
        { text: "앞뒤로 뒤집으며 노릇하게 굽습니다.", img: "" },
        { text: "취향에 따라 바비큐 소스를 곁들입니다.", img: "" }
    ]
},
    {
    id: 30,
    target: "1인 가구",
    category: "야외/캠핑",
    title: "순두부 열라면",
    img: "images/순두부열라면.jpg",
    difficulty: 1,
    popularity: 98,
    time: "10분",
    desc: "얼큰함과 부드러움이 공존하는 캠핑 라면",
    reason: "캠핑장에서 가장 실패 없는 메뉴입니다.",
    ingredients: [
        "라면",
        "순두부",
        "대파",
        "달걀",
        "고춧가루",
        "물"
    ],
    steps: [
        { text: "냄비에 물을 넣고 끓입니다.", img: "" },
        { text: "면과 스프를 넣습니다.", img: "" },
        { text: "순두부를 크게 떠 넣습니다.", img: "" },
        { text: "대파를 썰어 넣습니다.", img: "" },
        { text: "달걀을 넣고 익힙니다.", img: "" },
        { text: "고춧가루를 약간 추가합니다.", img: "" },
        { text: "보글보글 끓여 완성합니다.", img: "" }
    ]
},
    {
    id: 31,
    target: "전체",
    category: "야외/캠핑",
    title: "바지락 술찜",
    img: "images/바지락술찜.webp",
    difficulty: 1,
    popularity: 93,
    time: "15분",
    desc: "버터와 마늘 향이 가득한 감성 캠핑 요리",
    reason: "간단한 재료로 고급 술안주를 만들 수 있습니다.",
    ingredients: [
        "바지락",
        "마늘",
        "버터",
        "청주",
        "후추",
        "대파"
    ],
    steps: [
        { text: "바지락을 소금물에 해감합니다.", img: "" },
        { text: "마늘을 편 썰어 준비합니다.", img: "" },
        { text: "냄비에 버터를 녹입니다.", img: "" },
        { text: "마늘을 넣고 향을 냅니다.", img: "" },
        { text: "바지락을 넣고 볶습니다.", img: "" },
        { text: "청주를 붓고 뚜껑을 덮습니다.", img: "" },
        { text: "조개가 입을 벌리면 후추와 대파를 넣고 마무리합니다.", img: "" }
    ]
},
    {
    id: 32,
    target: "아이 가정",
    category: "야외/캠핑",
    title: "소시지 야채볶음 (쏘야)",
    img: "images/소시지야채볶음.jpg",
    difficulty: 1,
    popularity: 92,
    time: "15분",
    desc: "달콤짭짤한 국민 반찬",
    reason: "아이들과 어른 모두 좋아하는 캠핑 메뉴입니다.",
    ingredients: [
        "비엔나소시지",
        "양파",
        "파프리카",
        "케첩",
        "올리고당",
        "식용유"
    ],
    steps: [
        { text: "소시지에 칼집을 넣습니다.", img: "" },
        { text: "양파와 파프리카를 썰어 준비합니다.", img: "" },
        { text: "팬에 기름을 두르고 소시지를 볶습니다.", img: "" },
        { text: "채소를 넣고 함께 볶습니다.", img: "" },
        { text: "케첩과 올리고당을 넣습니다.", img: "" },
        { text: "양념이 골고루 배도록 볶습니다.", img: "" },
        { text: "접시에 담아 완성합니다.", img: "" }
    ]
},
    {
    id: 33,
    target: "부모님",
    category: "야외/캠핑",
    title: "비어캔 치킨",
    img: "images/비어캔치킨.jpg",
    difficulty: 3,
    popularity: 89,
    time: "70분",
    desc: "겉은 바삭하고 속은 촉촉한 바비큐 치킨",
    reason: "캠핑장에서 존재감이 가장 큰 메인 요리입니다.",
    ingredients: [
        "생닭",
        "캔맥주",
        "바비큐시즈닝",
        "올리브유",
        "후추"
    ],
    steps: [
        { text: "생닭의 물기를 제거합니다.", img: "" },
        { text: "올리브유를 바르고 시즈닝을 뿌립니다.", img: "" },
        { text: "맥주캔 절반을 비웁니다.", img: "" },
        { text: "닭을 맥주캔 위에 세웁니다.", img: "" },
        { text: "그릴에 올리고 뚜껑을 덮습니다.", img: "" },
        { text: "약 1시간 동안 천천히 익힙니다.", img: "" },
        { text: "속까지 완전히 익으면 완성합니다.", img: "" }
    ]
},
    {
    id: 34,
    target: "전체",
    category: "야외/캠핑",
    title: "콘치즈 불닭볶음면",
    img: "images/콘치즈불닭볶음면.jpg",
    difficulty: 1,
    popularity: 96,
    time: "12분",
    desc: "매운맛과 고소함이 공존하는 캠핑 야식",
    reason: "SNS에서 꾸준히 인기 있는 조합입니다.",
    ingredients: [
        "불닭볶음면",
        "옥수수캔",
        "모짜렐라치즈",
        "마요네즈",
        "설탕"
    ],
    steps: [
        { text: "불닭볶음면을 삶습니다.", img: "" },
        { text: "소스를 넣고 비벼줍니다.", img: "" },
        { text: "옥수수와 마요네즈를 섞습니다.", img: "" },
        { text: "면 위에 콘치즈를 올립니다.", img: "" },
        { text: "치즈를 듬뿍 뿌립니다.", img: "" },
        { text: "뚜껑을 덮어 치즈를 녹입니다.", img: "" },
        { text: "잘 섞어 먹습니다.", img: "" }
    ]
},
    {
    id: 35,
    target: "1인 가구",
    category: "야외/캠핑",
    title: "캠핑장 스팸 부대찌개",
    img: "images/캠핑장스팸부대찌개.jpg",
    difficulty: 1,
    popularity: 94,
    time: "20분",
    desc: "햄과 김치가 듬뿍 들어간 진한 부대찌개",
    reason: "캠핑 저녁 메뉴로 최고의 만족도를 자랑합니다.",
    ingredients: [
        "스팸",
        "김치",
        "라면사리",
        "사골육수팩",
        "대파",
        "두부",
        "고춧가루"
    ],
    steps: [
        { text: "스팸과 두부를 먹기 좋게 썹니다.", img: "" },
        { text: "냄비에 김치와 햄을 깔아줍니다.", img: "" },
        { text: "사골육수를 붓습니다.", img: "" },
        { text: "끓기 시작하면 두부를 넣습니다.", img: "" },
        { text: "고춧가루를 추가합니다.", img: "" },
        { text: "라면사리를 넣습니다.", img: "" },
        { text: "대파를 올리고 완성합니다.", img: "" }
    ]
},
    {
    id: 36,
    target: "전체",
    category: "야외/캠핑",
    title: "감바스 알 아히요",
    img: "images/감바스알아히요.jpg",
    difficulty: 1,
    popularity: 95,
    time: "15분",
    desc: "새우와 마늘을 올리브유에 끓여 먹는 스페인 요리",
    reason: "캠핑장에서 분위기를 살려주는 대표 메뉴입니다.",
    ingredients: [
        "새우",
        "마늘",
        "올리브유",
        "페페론치노",
        "소금",
        "후추",
        "바게트"
    ],
    steps: [
        { text: "새우의 내장을 제거합니다.", img: "" },
        { text: "마늘을 편 썰어 준비합니다.", img: "" },
        { text: "팬에 올리브유를 넉넉히 붓습니다.", img: "" },
        { text: "마늘과 페페론치노를 넣어 향을 냅니다.", img: "" },
        { text: "새우를 넣고 익힙니다.", img: "" },
        { text: "소금과 후추로 간을 합니다.", img: "" },
        { text: "바게트와 함께 곁들여 먹습니다.", img: "" }
    ]
}
];

let myFridgeItems = [];
let currentTarget = "전체";
let currentCategory = "전체";
let currentDifficulty = "전체"; // 🌟 난이도 필터 변수 추가
let currentTime = "전체";       // 🌟 조리시간 필터 변수 추가
let lastAiRecipe = null; 

// ==========================================
// 2. 인증 관리 (로그인 / 회원가입 / 로그아웃)
// ==========================================
function doSignup() {
    const email = document.getElementById('regEmail')?.value.trim() || "";
    const pw = document.getElementById('regPw')?.value || "";
    const pwConfirm = document.getElementById('regPwConfirm')?.value || "";
    const nicknameInput = (document.getElementById('regNickname')?.value || "").trim();
    const userId = (document.getElementById('regUserId')?.value || "").trim();
    const name = (document.getElementById('regName')?.value || "").trim();
    const birthdate = document.getElementById('regBirthdate')?.value || "";
    const privacyConsent = document.getElementById('regPrivacyConsent')?.checked || false;

    // 1. 기본 검증
    if (!nicknameInput || !userId || !name || !birthdate || !email || !pw || !pwConfirm) {
        alert("모든 항목을 입력해 주세요.");
        return;
    }
    if (!privacyConsent) {
        alert("개인정보 수집 및 이용에 동의해 주세요.");
        return;
    }
    if (pw !== pwConfirm) {
        alert("비밀번호가 서로 일치하지 않습니다.");
        return;
    }
    if (pw.length < 6) {
        alert("비밀번호는 최소 6자리 이상이어야 합니다.");
        return;
    }
    // 아이디: 영문/숫자/_ 만 허용 (원하면 규칙 변경 가능)
    if (!/^[a-zA-Z0-9_]{3,20}$/.test(userId)) {
        alert("아이디는 영문, 숫자, _ 만 사용하며 3~20자로 입력해 주세요.");
        return;
    }

    // 2. 아이디 중복 확인 후 가입
    db.collection("users").where("userId", "==", userId).limit(1).get()
        .then((snapshot) => {
            if (!snapshot.empty) {
                alert("이미 사용 중인 아이디입니다. 다른 아이디를 입력해 주세요.");
                return Promise.reject(new Error("duplicate-userid"));
            }

            return auth.createUserWithEmailAndPassword(email, pw);
        })
        .then((userCredential) => {
            if (!userCredential) return; // 중복 아이디로 중단된 경우

            const user = userCredential.user;
            console.log("1단계: 인증 계정 생성 성공 -> UID:", user.uid);

            return Promise.all([
                user.updateProfile({ displayName: nicknameInput }),
                db.collection("users").doc(user.uid).set({
                    nickname: nicknameInput,
                    userId: userId,
                    name: name,
                    birthdate: birthdate,
                    email: email,
                    privacyConsent: true,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp()
                })
            ]);
        })
        .then(() => {
            if (!auth.currentUser) return; // 중복으로 중단된 경우
            console.log("2단계: 프로필 및 Firestore 저장 완료");
            alert("회원가입이 완료되었습니다!");
            window.location.href = "app.html";
        })
        .catch((error) => {
            if (error.message === "duplicate-userid") return;

            console.error("회원가입 에러:", error);
            if (error.code === "auth/weak-password") {
                alert("비밀번호는 최소 6자리 이상이어야 합니다.");
            } else if (error.code === "auth/email-already-in-use") {
                alert("이미 가입된 이메일 주소입니다.");
            } else if (error.code === "auth/invalid-email") {
                alert("올바른 이메일 형식이 아닙니다.");
            } else {
                alert("회원가입 실패: " + (error.message || "알 수 없는 오류"));
            }
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
// 3. 필터 및 엔터 키 이벤트 매핑 (전체 필터 완전 보정)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    // 1) 대상 필터
    const targetButtons = document.querySelectorAll("#targetFilter .filter-btn");
    targetButtons.forEach(btn => {
        btn.addEventListener("click", function() {
            currentTarget = this.getAttribute("data-target");
            targetButtons.forEach(b => b.classList.remove("active"));
            this.classList.add("active");
            renderRecipes();
        });
    });

    // 2) 카테고리 필터
    const categoryButtons = document.querySelectorAll("#categoryFilter .filter-btn");
    categoryButtons.forEach(btn => {
        btn.addEventListener("click", function() {
            currentCategory = this.getAttribute("data-category");
            categoryButtons.forEach(b => b.classList.remove("active"));
            this.classList.add("active");
            renderRecipes();
        });
    });

    // 🌟 3) 난이도 필터 추가
    const difficultyButtons = document.querySelectorAll("#difficultyFilter .filter-btn");
    difficultyButtons.forEach(btn => {
        btn.addEventListener("click", function() {
            currentDifficulty = this.getAttribute("data-difficulty");
            difficultyButtons.forEach(b => b.classList.remove("active"));
            this.classList.add("active");
            renderRecipes();
        });
    });

    // 🌟 4) 조리시간 필터 추가
    const timeButtons = document.querySelectorAll("#timeFilter .filter-btn");
    timeButtons.forEach(btn => {
        btn.addEventListener("click", function() {
            currentTime = this.getAttribute("data-time");
            timeButtons.forEach(b => b.classList.remove("active"));
            this.classList.add("active");
            renderRecipes();
        });
    });

    // 검색 버튼 및 엔터키 이벤트
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

window.addQuickIngredient = function(itemName) {
    const user = auth.currentUser;
    if (!user) { alert("로그인이 필요한 서비스입니다."); return; }
    
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

// 🌟 다중 필터(타겟, 카테고리, 난이도, 조리시간, 검색어) 종합 반영 함수
function renderRecipes() {
    const grid = document.getElementById('recipeGrid');
    const countDisplay = document.getElementById('resultCount');
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || "";
    if (!grid) return;

    let filtered = recipes.filter(r => {
        // ① 타겟 필터 ("전체"로 설정된 레시피도 범용적으로 매칭되도록 보정)
        const targetMatch = (currentTarget === "전체" || r.target === "전체" || r.target === currentTarget);
        
        // ② 카테고리 필터
        const categoryMatch = (currentCategory === "전체" || r.category === currentCategory);
        
        // 🌟 ③ 난이도 필터
        const difficultyMatch = (currentDifficulty === "전체" || String(r.difficulty) === String(currentDifficulty));

        // 🌟 ④ 조리시간 필터 ("30분" -> 30 추출 후 설정값 이하 검사)
        let timeMatch = true;
        if (currentTime !== "전체") {
            const recipeMinutes = parseInt(String(r.time || "").replace(/[^0-9]/g, ""), 10) || 999;
            const limitMinutes = parseInt(currentTime, 10);
            timeMatch = recipeMinutes <= limitMinutes;
        }

        // ⑤ 검색어 필터
        const searchMatch = r.title.toLowerCase().includes(searchTerm) || r.desc.toLowerCase().includes(searchTerm);

        return targetMatch && categoryMatch && difficultyMatch && timeMatch && searchMatch;
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
        if (!listDiv) return;
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

        const countEl = document.getElementById('fridgeCount');
        if (countEl) countEl.innerText = `(${snapshot.size})`;

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

        const countEl = document.getElementById('favCount');
        if (countEl) countEl.innerText = `(${snapshot.size})`;

        if (snapshot.empty) {
            favoriteListDiv.innerHTML = `
                <div style="text-align: center; padding: 20px 10px; color: var(--text-muted, #a8a29e);">
                    <i class="far fa-heart" style="font-size: 1.5rem; margin-bottom: 8px; display: block; color: #fdba74;"></i>
                    <p style="font-size: 0.85rem; margin: 0; line-height: 1.5;">
                        저장된 레시피가 없습니다.<br>
                        AI 추천 후 하트로 저장해 보세요.
                    </p>
                </div>`;
            return;
        }

        snapshot.forEach((doc) => {
            const data = doc.data();

            const item = document.createElement('div');
            item.style.cssText = "display: flex; justify-content: space-between; align-items: center; padding: 12px; background: var(--bg-card, #ffffff); border: 1px solid var(--border-color, #e7e5e4); border-radius: 8px; margin-bottom: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.05);";

            const titleSpan = document.createElement('span');
            titleSpan.style.cssText = "cursor: pointer; font-weight: 600; color: #ea580c; font-size: 0.9rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 80%;";
            titleSpan.innerHTML = `❤️ ${data.title}`;
            titleSpan.onclick = () => openFavoriteModal(doc.id, data.title, data.content, data.rawText);

            const deleteIcon = document.createElement('i');
            deleteIcon.className = "fas fa-trash-alt";
            deleteIcon.style.cssText = "cursor: pointer; color: #ef4444; font-size: 0.85rem;";
            deleteIcon.title = "삭제";
            deleteIcon.onclick = () => deleteFavorite(doc.id);

            item.appendChild(titleSpan);
            item.appendChild(deleteIcon);
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

// ==========================================
// 🌟 상태 감시 및 닉네임 로드 실시간 바인딩 엔진 🌟
// ==========================================
auth.onAuthStateChanged((user) => {
    const nameDisplay = document.getElementById('userDisplayName');
    const isAppPage = window.location.pathname.includes('app.html');
    if (user) {
        if (nameDisplay) {
            db.collection("users").doc(user.uid).onSnapshot((doc) => {
                if (doc.exists && doc.data().nickname) {
                    nameDisplay.innerText = `${doc.data().nickname}님 환영합니다!`;
                } else if (user.displayName) {
                    nameDisplay.innerText = `${user.displayName}님 환영합니다!`;
                } else {
                    nameDisplay.innerText = `${user.email.split('@')[0]}님 환영합니다!`;
                }
            }, (err) => {
                console.error("실시간 닉네임 로드 실패:", err);
                const backupName = user.displayName ? user.displayName : user.email.split('@')[0];
                nameDisplay.innerText = `${backupName}님 환영합니다!`;
            });
        }
        if (isAppPage) { 
    loadIngredients(); 
    loadFavorites(); 
    loadMyScraps();   // ← 추가
}
    } else {
        if (isAppPage) window.location.href = "index.html";
    }
});

// ==========================================
// 🌟 정적 레시피 모달 제어 🌟
// ==========================================
window.openModal = function(id) {
    const recipe = recipes.find(r => r.id === id);
    if (!recipe) return;

    const stepsHtml = recipe.steps.map((step, idx) => `
    <div style="display:flex; gap:15px; margin-bottom:15px; padding:15px; border-radius:12px; background:#fff7ed; border-left:5px solid #ea580c;">
        <div style="min-width:40px; height:40px; background:#ea580c; color:white; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:bold;">
            ${idx + 1}
        </div>
        <div style="line-height:1.7; font-size:15px; color:#333;">
            ${step.text}
        </div>
    </div>
    `).join('');

    document.getElementById("modalBody").innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; padding-right: 45px; border-bottom: 2px solid #ea580c; padding-bottom: 12px;">
            <h2 style="margin: 0;">${recipe.title}</h2>
            <button id="btnSaveStatic_${recipe.id}" onclick="saveStaticRecipeToFavorites(${recipe.id})" style="background: #ea580c; color: white; border: none; padding: 6px 12px; border-radius: 6px; font-size: 0.85rem; font-weight: 500; cursor: pointer; display: flex; align-items: center; gap: 5px;">
                <i class="far fa-heart"></i> 찜하기
            </button>
        </div>

        <div style="background:#fff5f5;padding:15px;border-radius:10px;margin-bottom:20px;">
            <h4 style="margin-top:0; color:#ff6b6b;">🤖 AI 추천 이유</h4>
            <p style="color:#333; margin:0;">${recipe.reason}</p>
        </div>

        <h3 style="margin-bottom:10px;">재료</h3>
        <p style="margin-bottom:25px;">${recipe.ingredients.join(", ")}</p>

        <h3>🍳 조리 순서</h3>
        ${stepsHtml}
    `;

    document.getElementById("recipeModal").style.display = "block";
}

// ==========================================
// 🌟 정적 레시피 찜(북마크) 저장 함수 🌟
// ==========================================
window.saveStaticRecipeToFavorites = function(id) {
    const user = auth.currentUser;
    if (!user) { alert("로그인이 필요한 서비스입니다."); return; }

    const recipe = recipes.find(r => r.id === id);
    if (!recipe) return;

    const saveBtn = document.getElementById(`btnSaveStatic_${recipe.id}`);
    if (saveBtn) {
        saveBtn.disabled = true;
        saveBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> 저장 중...`;
    }

    const stepsHtml = recipe.steps.map((step, idx) => `
    <div style="display:flex; gap:15px; margin-bottom:15px; padding:15px; border-radius:12px; background:#fff7ed; border-left:5px solid #ea580c;">
        <div style="min-width:40px; height:40px; background:#ea580c; color:white; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:bold;">
            ${idx + 1}
        </div>
        <div style="line-height:1.7; font-size:15px; color:#333;">
            ${step.text}
        </div>
    </div>
    `).join('');

    const content = `
        <div style="background:#fff5f5;padding:15px;border-radius:10px;margin-bottom:20px;">
            <h4 style="margin-top:0; color:#ea580c;"><i class="fas fa-info-circle"></i> 메뉴 설명</h4>
            <p style="color:#333; margin:0;">${recipe.desc}</p>
        </div>
        <h3>재료</h3>
        <p>${recipe.ingredients.join(", ")}</p>
        <h3 style="margin-top:25px;">🍳 조리 순서</h3>
        ${stepsHtml}
    `;

    const rawText = `요리명: ${recipe.title}\n재료: ${recipe.ingredients.join(', ')}\n\n[조리 순서]\n${recipe.steps.map((s, idx) => `${idx + 1}.${s.text}`).join('\n')}`;

    db.collection("users").doc(user.uid).collection("favorites").add({
        title: recipe.title,
        content: content,
        rawText: rawText,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        alert("❤️️ 찜 목록에 성공적으로 보관되었습니다!");
        if (saveBtn) {
            saveBtn.innerHTML = `<i class="fas fa-heart"></i> 찜 완료`;
            saveBtn.style.background = "#d97706";
        }
    })
    .catch(err => {
        console.error("저장 실패:", err);
        alert("저장 실패");
        if (saveBtn) {
            saveBtn.disabled = false;
            saveBtn.innerHTML = `<i class="far fa-heart"></i> 찜하기`;
        }
    });
}

// 닫기버튼
window.closeModal = function() { document.getElementById('recipeModal').style.display = "none"; }

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
// 6. [REAL AI] 실시간 호출 엔진
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

    const API_KEY = "AQ.Ab8RN6JlMQ90VqmCV0ffyZgK9-eoQ8hLM1gTAE0eYw9rMvpFLw"; 
    const modelName = "gemini-3-flash-preview";
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
            method: "POST", 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: [{ parts: [{ text: promptMessage }] }] })
        });
        
        if (!response.ok) {
            const errData = await response.json().catch(() => ({}));
            console.error("구글 API 거절 원인 상세:", errData);
            throw new Error("API 호출 실패");
        }

        const resData = await response.json();
        const aiText = resData.candidates[0].content.parts[0].text.trim();
        
        if (aiText.includes("ERR_NOT_FOOD")) { 
            alert("⚠️ 요리할 수 없는 물건이 포함되어 있습니다!"); 
            return; 
        }

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
        console.error("AI 에러로그상세:", error);
        alert("⏰ 현재 AI 서버 혼잡 유효시간입니다. 잠시 후 다시 시도해 주세요!");
    } finally {
        aiButton.disabled = false;
        aiButton.innerHTML = `<i class="fas fa-robot"></i> AI 셰프에게 추천받기`;
    }
}

// 레시피 클립보드 복사 함수 추가
function copyAiRecipe() {
    if (!lastAiRecipe || !lastAiRecipe.rawText) return;
    navigator.clipboard.writeText(lastAiRecipe.rawText).then(() => {
        alert("📋 레시피가 클립보드에 복사되었습니다!");
    }).catch(err => {
        alert("복사 실패: " + err);
    });
}

// ==========================================
// 7. 다크 모드(Dark Mode) 컨트롤
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

// ==========================================
// 8. 커뮤니티 + 스크랩 기능 (개선 버전)
// ==========================================

// 커뮤니티 게시글 실시간 로드
function loadCommunityPosts() {
    const list = document.getElementById('communityPostList');
    if (!list) return;

    list.innerHTML = `
        <div style="text-align:center; padding:40px; color:var(--text-muted);">
            <i class="fas fa-spinner fa-spin" style="font-size:1.5rem; margin-bottom:10px;"></i>
            <p>게시글을 불러오는 중...</p>
        </div>`;

    // 기존 리스너 중복 방지
    if (window._communityUnsubscribe) {
        window._communityUnsubscribe();
    }

    window._communityUnsubscribe = db.collection("community")
        .orderBy("createdAt", "desc")
        .limit(40)
        .onSnapshot((snapshot) => {
            if (snapshot.empty) {
                list.innerHTML = `
                    <div style="text-align:center; padding:50px 20px; color:var(--text-muted);">
                        <i class="far fa-comment-dots" style="font-size:2.5rem; margin-bottom:12px; display:block; opacity:0.6;"></i>
                        <p style="margin:0; line-height:1.6;">아직 공유된 레시피가 없습니다.<br>첫 번째 레시피를 공유해보세요!</p>
                    </div>`;
                return;
            }

            list.innerHTML = "";
            snapshot.forEach((doc) => {
                const data = doc.data();
                const isMine = auth.currentUser && data.uid === auth.currentUser.uid;
                const dateStr = data.createdAt?.toDate 
                    ? data.createdAt.toDate().toLocaleDateString('ko-KR') 
                    : '';

                const card = document.createElement('div');
                card.style.cssText = `
                    background: var(--bg-card); 
                    border: 1px solid var(--border-color);
                    border-radius: 14px; 
                    padding: 20px; 
                    margin-bottom: 16px;
                    transition: box-shadow 0.2s;
                `;

                let imageHtml = "";
                if (data.imageUrl) {
                    imageHtml = `
                        <img src="${data.imageUrl}" 
                             style="width:100%; max-height:240px; object-fit:cover; border-radius:10px; margin:14px 0; display:block;">
                    `;
                }

                card.innerHTML = `
                    <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:12px;">
                        <div style="flex:1; min-width:0;">
                            <h3 style="margin:0 0 6px 0; font-size:1.15rem; font-weight:700; color:var(--text-main); word-break:break-word;">
                                ${data.title}
                            </h3>
                            <div style="font-size:0.85rem; color:var(--text-muted);">
                                ${data.nickname || '익명'} · ${dateStr}
                            </div>
                        </div>
                        <div style="display:flex; gap:6px; flex-shrink:0;">
                            <button onclick="toggleScrap('${doc.id}', this)" 
                                    class="scrap-btn"
                                    style="background:none; border:none; cursor:pointer; font-size:1.25rem; color:#f43f5e; padding:4px;">
                                <i class="far fa-heart"></i>
                            </button>
                            ${isMine ? `
                                <button onclick="openCommunityEditModal('${doc.id}')" 
                                        style="background:none; border:none; cursor:pointer; color:var(--text-muted); padding:4px;">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button onclick="deleteCommunityPost('${doc.id}')" 
                                        style="background:none; border:none; cursor:pointer; color:#ef4444; padding:4px;">
                                    <i class="fas fa-trash"></i>
                                </button>
                            ` : ''}
                        </div>
                    </div>
                    ${imageHtml}
                    <div style="font-size:0.95rem; line-height:1.65; color:var(--text-main); white-space:pre-wrap; margin-top:8px;">
                        ${data.content || ''}
                    </div>
                `;
                list.appendChild(card);
            });
        }, (err) => {
            console.error("커뮤니티 로드 실패:", err);
            list.innerHTML = `
                <div style="text-align:center; padding:40px; color:#ef4444;">
                    게시글을 불러오지 못했습니다.
                </div>`;
        });
}

// 커뮤니티 글 등록
function submitCommunityPost() {
    const user = auth.currentUser;
    if (!user) {
        alert("로그인이 필요합니다.");
        return;
    }

    const title = document.getElementById('commTitleInput').value.trim();
    const content = document.getElementById('commContentInput').value.trim();
    const imageInput = document.getElementById('commImageInput');

    if (!title || !content) {
        alert("제목과 내용을 모두 입력해주세요.");
        return;
    }

    const btn = document.querySelector('#communityModal .btn-primary-full');
    if (btn) {
        btn.disabled = true;
        btn.innerText = "등록 중...";
    }

    const finish = (imageUrl = "") => {
        db.collection("users").doc(user.uid).get()
            .then((userDoc) => {
                const nickname = (userDoc.exists && userDoc.data().nickname)
                    ? userDoc.data().nickname
                    : (user.displayName || user.email.split('@')[0]);

                return db.collection("community").add({
                    title,
                    content,
                    imageUrl,
                    uid: user.uid,
                    nickname,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp()
                });
            })
            .then(() => {
                alert("레시피가 성공적으로 공유되었습니다!");
                closeCommunityWriteModal();
                document.getElementById('commTitleInput').value = "";
                document.getElementById('commContentInput').value = "";
                if (imageInput) imageInput.value = "";
            })
            .catch((err) => {
                console.error(err);
                alert("등록에 실패했습니다.");
            })
            .finally(() => {
                if (btn) {
                    btn.disabled = false;
                    btn.innerText = "게시글 등록하기";
                }
            });
    };

    if (imageInput && imageInput.files && imageInput.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => finish(e.target.result);
        reader.readAsDataURL(imageInput.files[0]);
    } else {
        finish();
    }
}

// 수정 모달 열기 (데이터 다시 조회)
function openCommunityEditModal(postId) {
    db.collection("community").doc(postId).get()
        .then((doc) => {
            if (!doc.exists) {
                alert("게시글을 찾을 수 없습니다.");
                return;
            }
            const data = doc.data();
            document.getElementById('editPostId').value = postId;
            document.getElementById('editTitleInput').value = data.title || '';
            document.getElementById('editContentInput').value = data.content || '';
            document.getElementById('communityEditModal').style.display = 'flex';
        })
        .catch((err) => {
            console.error(err);
            alert("게시글을 불러오지 못했습니다.");
        });
}

// 수정 완료
function updateCommunityPost() {
    const id = document.getElementById('editPostId').value;
    const title = document.getElementById('editTitleInput').value.trim();
    const content = document.getElementById('editContentInput').value.trim();
    const imageInput = document.getElementById('editImageInput');

    if (!title || !content) {
        alert("제목과 내용을 입력해주세요.");
        return;
    }

    const btn = document.querySelector('#communityEditModal .btn-primary-full');
    if (btn) {
        btn.disabled = true;
        btn.innerText = "수정 중...";
    }

    const finish = (imageUrl = null) => {
        const updateData = {
            title,
            content,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        };

        // 새 이미지가 있을 때만 imageUrl 업데이트
        if (imageUrl !== null) {
            updateData.imageUrl = imageUrl;
        }

        db.collection("community").doc(id).update(updateData)
            .then(() => {
                alert("수정되었습니다.");
                closeCommunityEditModal();
                if (imageInput) imageInput.value = "";
            })
            .catch((err) => {
                console.error(err);
                alert("수정 실패");
            })
            .finally(() => {
                if (btn) {
                    btn.disabled = false;
                    btn.innerText = "수정 완료하기";
                }
            });
    };

    if (imageInput && imageInput.files && imageInput.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => finish(e.target.result);
        reader.readAsDataURL(imageInput.files[0]);
    } else {
        finish(null); // 이미지 변경 없음
    }
}

// 삭제
function deleteCommunityPost(id) {
    if (!confirm("이 게시글을 삭제하시겠습니까?")) return;

    db.collection("community").doc(id).delete()
        .then(() => alert("삭제되었습니다."))
        .catch((err) => {
            console.error(err);
            alert("삭제 실패");
        });
}

// 스크랩 토글
function toggleScrap(postId, btn) {
    const user = auth.currentUser;
    if (!user) {
        alert("로그인이 필요합니다.");
        return;
    }

    const scrapRef = db.collection("users").doc(user.uid).collection("scraps").doc(postId);

    scrapRef.get().then((doc) => {
        if (doc.exists) {
            return scrapRef.delete().then(() => {
                if (btn) btn.innerHTML = `<i class="far fa-heart"></i>`;
            });
        } else {
            return db.collection("community").doc(postId).get().then((postDoc) => {
                if (!postDoc.exists) return;
                const data = postDoc.data();
                return scrapRef.set({
                    title: data.title,
                    content: data.content,
                    imageUrl: data.imageUrl || "",
                    nickname: data.nickname || "",
                    scrapedAt: firebase.firestore.FieldValue.serverTimestamp()
                }).then(() => {
                    if (btn) btn.innerHTML = `<i class="fas fa-heart" style="color:#f43f5e;"></i>`;
                });
            });
        }
    }).catch(err => console.error(err));
}

// 내가 스크랩한 목록 실시간 로드
function loadMyScraps() {
    const user = auth.currentUser;
    if (!user) return;

    const list = document.getElementById('myScrapList');
    const countEl = document.getElementById('scrapCount');
    if (!list) return;

    if (window._scrapUnsubscribe) {
        window._scrapUnsubscribe();
    }

    window._scrapUnsubscribe = db.collection("users").doc(user.uid)
        .collection("scraps")
        .orderBy("scrapedAt", "desc")
        .onSnapshot((snapshot) => {
            if (countEl) countEl.innerText = `(${snapshot.size})`;

            if (snapshot.empty) {
                list.innerHTML = `
                    <div style="text-align:center; padding:18px 10px; color:var(--text-muted); font-size:0.85rem; line-height:1.5;">
                        스크랩한 레시피가 없습니다.
                    </div>`;
                return;
            }

            list.innerHTML = "";
            snapshot.forEach((doc) => {
                const data = doc.data();
                const item = document.createElement('div');
                item.style.cssText = `
                    display:flex; justify-content:space-between; align-items:center;
                    padding:11px 12px; 
                    background: var(--bg-card); 
                    border: 1px solid var(--border-color);
                    border-radius: 8px; 
                    margin-bottom: 6px;
                    gap: 8px;
                `;

                item.innerHTML = `
                    <span style="font-size:0.9rem; font-weight:600; color:#ea580c; cursor:pointer; 
                                 overflow:hidden; text-overflow:ellipsis; white-space:nowrap; flex:1;"
                          onclick="openScrapModal('${doc.id}')">
                        ❤️ ${data.title}
                    </span>
                    <i class="fas fa-times" 
                       style="cursor:pointer; color:#a8a29e; flex-shrink:0;" 
                       title="스크랩 취소"
                       onclick="removeScrap('${doc.id}')"></i>
                `;
                list.appendChild(item);
            });
        });
}

// 스크랩 상세 모달
function openScrapModal(scrapId) {
    const user = auth.currentUser;
    if (!user) return;

    db.collection("users").doc(user.uid).collection("scraps").doc(scrapId).get()
        .then((doc) => {
            if (!doc.exists) {
                alert("스크랩한 글을 찾을 수 없습니다.");
                return;
            }
            const data = doc.data();
            const modal = document.getElementById('recipeModal');
            const modalBody = document.getElementById('modalBody');

            let imageHtml = "";
            if (data.imageUrl) {
                imageHtml = `
                    <img src="${data.imageUrl}" 
                         style="width:100%; max-height:260px; object-fit:cover; border-radius:10px; margin-bottom:16px;">
                `;
            }

            modalBody.innerHTML = `
                <div style="border-bottom: 2px solid #ea580c; padding-bottom: 12px; margin-bottom: 16px;">
                    <h2 style="margin: 0; font-size: 1.35rem;">❤️ ${data.title}</h2>
                    <div style="margin-top: 6px; font-size: 0.9rem; color: var(--text-muted);">
                        ${data.nickname || '익명'} · 스크랩한 레시피
                    </div>
                </div>
                ${imageHtml}
                <div style="line-height: 1.7; font-size: 0.95rem; white-space: pre-wrap;">
                    ${data.content || ''}
                </div>
            `;
            modal.style.display = "block";
        })
        .catch(err => {
            console.error(err);
            alert("불러오기 실패");
        });
}

// 스크랩 삭제
function removeScrap(scrapId) {
    const user = auth.currentUser;
    if (!user) return;
    if (!confirm("스크랩을 취소하시겠습니까?")) return;

    db.collection("users").doc(user.uid).collection("scraps").doc(scrapId).delete()
        .catch(err => console.error(err));
}