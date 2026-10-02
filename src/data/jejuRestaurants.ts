export interface MenuItem {
  name: string;
  price: string;
  description: string;
  isSignature?: boolean;
}

export interface CatchTableInfo {
  supported: boolean;
  type: '원격줄서기' | '온라인예약' | '현장키오스크' | '워크인/전화';
  badgeText: string;
  notice: string;
  reservationTip: string;
}

export interface Restaurant {
  id: string;
  name: string;
  nameEn: string;
  category: string;
  area: '구제주' | '신제주';
  district: string;
  tagline: string;
  rating: {
    overall: number;
    naver: number;
    kakao: number;
    reviewsCount: string;
  };
  address: {
    road: string;
    jibun: string;
    detail?: string;
  };
  hours: {
    open: string;
    close: string;
    lastOrder: string;
    closedDays: string;
    holidayNotice?: string;
  };
  breakTime: {
    hasBreak: boolean;
    time: string;
    notes?: string;
  };
  catchTable: CatchTableInfo;
  menus: MenuItem[];
  phone: string;
  parking: string;
  features: string[];
  localTip: string;
  image: string;
  mapQuery: string;
}

export const JEJU_RESTAURANTS: Restaurant[] = [
  {
    id: 'gonbap2',
    name: '곤밥2',
    nameEn: 'Gonbap 2',
    category: '흑돼지 두루치기 & 옥돔구이 백반',
    area: '구제주',
    district: '건입동 (탑동 산지천 부근)',
    tagline: '만원 초반대에 옥돔구이와 흑돼지 두루치기, 풍성한 찬이 한상 가득 채워지는 전설의 원도심 정식',
    rating: {
      overall: 4.54,
      naver: 4.61,
      kakao: 4.40,
      reviewsCount: '3,800+',
    },
    address: {
      road: '제주특별자치도 제주시 탑동로11길 4',
      jibun: '제주특별자치도 제주시 건입동 1445-1',
    },
    hours: {
      open: '10:30',
      close: '20:30',
      lastOrder: '19:45',
      closedDays: '매주 일요일 정기휴무',
      holidayNotice: '재료 소진 시 조기 마감',
    },
    breakTime: {
      hasBreak: true,
      time: '15:00 ~ 17:00',
      notes: '점심 주문마감 14:30 / 저녁 재료 조기 소진 빈번',
    },
    catchTable: {
      supported: true,
      type: '원격줄서기',
      badgeText: '캐치테이블 원격줄서기',
      notice: '캐치테이블 앱을 통한 원격 줄서기 및 매장 앞 키오스크 현장 등록 가능',
      reservationTip: '점심 10시 30분 오픈 직후 또는 이동 중 11시경 앱으로 원격 줄서기를 등록하면 웨이팅을 최소화할 수 있습니다.',
    },
    menus: [
      {
        name: '정식 (1인)',
        price: '11,000원',
        description: '바삭하게 튀기듯 구운 제주 옥돔구이 + 매콤달콤 흑돼지 두루치기 + 제철 쌈채소 + 미역국 + 8첩 제철 반찬 (2인 이상 주문 권장, 1인 식사도 친절히 응대)',
        isSignature: true,
      },
      {
        name: '두루치기 추가',
        price: '8,000원',
        description: '푸짐한 흑돼지 두루치기 추가 단품',
      },
      {
        name: '옥돔구이 추가',
        price: '7,000원',
        description: '제주산 고소한 옥돔 튀김구이 추가',
      },
      {
        name: '몸국',
        price: '9,000원',
        description: '제주 향토 모자반과 돼지사골 육수의 진한 맛',
      },
    ],
    phone: '064-722-2258',
    parking: '전용 주차장 협소, 인근 산지천 하천변 공영주차장 또는 칠성로 공영주차장 이용 권장',
    features: ['옥돔구이 기본제공', '가성비 극강', '혼밥 친화', '동문시장 도보 8분'],
    localTip: '두루치기 양념에 밥을 비벼 쌈을 싸먹은 후, 바삭한 옥돔구이 살점을 얹어 드시면 감칠맛이 폭발합니다. 반찬 리필도 매우 넉넉합니다.',
    image: '/src/assets/images/jeju_jeongshik_hero_1790925293258.jpg',
    mapQuery: '제주 곤밥2',
  },
  {
    id: 'hwamokwon',
    name: '화목원',
    nameEn: 'Hwamogwon',
    category: '품격 제주 향토 한정식 & 솥밥 정식',
    area: '신제주',
    district: '연동 (한라수목원 부근)',
    tagline: '사계절 푸른 정원과 전통 한옥의 정취 속에서 즐기는 제주 갈치조림과 옥돔구이 품격 상차림',
    rating: {
      overall: 4.48,
      naver: 4.52,
      kakao: 4.38,
      reviewsCount: '2,100+',
    },
    address: {
      road: '제주특별자치도 제주시 연오로 160',
      jibun: '제주특별자치도 제주시 연동 1358-1',
    },
    hours: {
      open: '11:00',
      close: '21:00',
      lastOrder: '20:00',
      closedDays: '연중무휴 (명절 당일 단축운영)',
    },
    breakTime: {
      hasBreak: true,
      time: '15:00 ~ 16:30',
      notes: '주말 및 공휴일에도 브레이크 타임 운영',
    },
    catchTable: {
      supported: true,
      type: '온라인예약',
      badgeText: '캐치테이블 예약 가능',
      notice: '캐치테이블 앱에서 날짜/시간별 프라이빗 룸 및 테이블 예약 지원',
      reservationTip: '부모님 동반 가족 여행이나 모임 시 3~5일 전 캐치테이블로 정원 뷰 창가 룸을 사전 예약하시면 편안합니다.',
    },
    menus: [
      {
        name: '화목원 정식 (1인)',
        price: '25,000원',
        description: '제주 돔베고기 + 옥돔구이 + 매콤한 생선조림 + 제철 전채요리 + 돌솥밥 + 계절 된장찌개',
        isSignature: true,
      },
      {
        name: '향토 가족상 (3~4인)',
        price: '110,000원',
        description: '통갈치조림 + 옥돔구이 + 전복버터구이 + 돔베수육 + 게장 + 갓 지은 솥밥 4인',
        isSignature: true,
      },
      {
        name: '흑돼지 떡갈비 정식',
        price: '20,000원',
        description: '아이들도 좋아하는 제주 흑돼지 수제 떡갈비와 12첩 계절 반찬',
      },
    ],
    phone: '064-748-0005',
    parking: '식당 전면 및 후면 50대 이상 대형 전용 주차장 완비 (버스 주차 가능)',
    features: ['정원 뷰 룸 완비', '부모님 모시기 최고', '캐치테이블 예약', '넓은 주차장'],
    localTip: '식사 전후로 아름답게 조성된 야외 조경 정원을 산책할 수 있어 기념사진 명소로도 인기입니다. 솥밥 숭늉으로 깔끔하게 마무리하세요.',
    image: '/src/assets/images/jeju_dombe_pork_1790925315057.jpg',
    mapQuery: '제주 화목원',
  },
  {
    id: 'doraji',
    name: '도라지식당',
    nameEn: 'Doraji Sikdang',
    category: '50년 전통 제주 토속 백년가게 정식',
    area: '신제주',
    district: '오라2동 (공항 10분, 연삼로)',
    tagline: '1978년부터 2대에 걸쳐 제주 토속의 원형을 지켜온 중소벤처기업부 인증 백년가게',
    rating: {
      overall: 4.38,
      naver: 4.43,
      kakao: 4.25,
      reviewsCount: '2,900+',
    },
    address: {
      road: '제주특별자치도 제주시 연삼로 128',
      jibun: '제주특별자치도 제주시 오라2동 3162-1',
    },
    hours: {
      open: '09:00',
      close: '20:30',
      lastOrder: '19:50',
      closedDays: '매주 수요일 정기휴무',
      holidayNotice: '아침 9시 오픈으로 공항 도착 직후 식사 가능',
    },
    breakTime: {
      hasBreak: false,
      time: '브레이크 타임 없음',
      notes: '오후 2~5시 애매한 시간대에도 여유롭게 식사 가능',
    },
    catchTable: {
      supported: true,
      type: '현장키오스크',
      badgeText: '현장 등록 / 전화 예약',
      notice: '캐치테이블 현장 웨이팅 키오스크 비치, 단체는 사전 유선 예약 가능',
      reservationTip: '피크타임 대기 등록 후 매장 내 대기석이나 주차장에서 카카오톡 알림을 받고 입장하시면 됩니다.',
    },
    menus: [
      {
        name: '도라지 한상 세트 (2인)',
        price: '65,000원',
        description: '제주 은갈치조림 + 돔베고기 + 한치초무침/구이 + 성게미역국 + 계절 반찬',
        isSignature: true,
      },
      {
        name: '옥돔구이 정식 (1인)',
        price: '22,000원',
        description: '제주 전통 방식으로 참기름을 발라 노릇하게 구워낸 옥돔 한 마리 정식',
        isSignature: true,
      },
      {
        name: '갈치조림 정식',
        price: '24,000원',
        description: '칼칼한 비법 양념장에 무와 감자를 푹 졸여낸 제주산 갈치조림',
      },
      {
        name: '성게미역국',
        price: '15,000원',
        description: '구좌산 자연산 성게알과 제주 돌미역을 진하게 끓여낸 아침 보양국',
      },
    ],
    phone: '064-747-6303',
    parking: '매장 1층 필로티 및 야외 전용 주차장 30여 대 무료 주차',
    features: ['중기부 인증 백년가게', '브레이크타임 없음', '공항 차량 8분', '아침식사 가능'],
    localTip: '갈치호박국과 옥돔국 등 진짜배기 제주 옛 방식 생선국을 맛볼 수 있는 몇 안 되는 명소입니다. 비린 맛 없이 시원하고 깊습니다.',
    image: '/src/assets/images/jeju_tilefish_grill_1790925324775.jpg',
    mapQuery: '제주 도라지식당',
  },
  {
    id: 'yurine',
    name: '유리네식당',
    nameEn: 'Yurine Restaurant',
    category: '역대 대통령 방문 명가 향토 정식',
    area: '신제주',
    district: '연동 (제주도청/연북로)',
    tagline: '대한민국 100대 식당 선정, 벽면 가득 유명 인사 방명록이 증명하는 토속 한상차림',
    rating: {
      overall: 4.26,
      naver: 4.32,
      kakao: 4.12,
      reviewsCount: '4,500+',
    },
    address: {
      road: '제주특별자치도 제주시 연북로 146',
      jibun: '제주특별자치도 제주시 연동 427-1',
    },
    hours: {
      open: '09:00',
      close: '21:00',
      lastOrder: '20:10',
      closedDays: '연중무휴',
      holidayNotice: '명절 연휴에도 정상 운영',
    },
    breakTime: {
      hasBreak: true,
      time: '16:00 ~ 17:30',
      notes: '오후 4시부터 1시간 30분간 브레이크 타임',
    },
    catchTable: {
      supported: true,
      type: '원격줄서기',
      badgeText: '캐치테이블 원격/현장',
      notice: '캐치테이블 앱을 통한 실시간 웨이팅 확인 및 원격 줄서기 지원',
      reservationTip: '주말 점심 12:00~13:30에는 캐치테이블 앱으로 대기 팀 수를 미리 확인하고 출발하세요.',
    },
    menus: [
      {
        name: '유리네 향토 한상 (2~3인)',
        price: '75,000원',
        description: '제주 은갈치조림 소 + 옥돔구이 + 성게미역국 + 돔베고기 + 10가지 토속 밑반찬',
        isSignature: true,
      },
      {
        name: '갈치조림 (소)',
        price: '45,000원',
        description: '자작하고 매콤달콤한 특제 양념의 원조 갈치조림',
        isSignature: true,
      },
      {
        name: '성게미역국 정식',
        price: '15,000원',
        description: '신선한 성게알과 깊은 참기름 향미의 시원한 미역국 백반',
      },
      {
        name: '물회 (자리/한치)',
        price: '15,000원',
        description: '제주식 구수한 된장 베이스 육수의 별미 물회',
      },
    ],
    phone: '064-748-0890',
    parking: '식당 전용 주차장 40대 주차 가능 및 주차 안내 요원 상주',
    features: ['대통령 맛집 공인', '연중무휴', '넓은 단체석', '다양한 향토단품'],
    localTip: '갈치조림 국물을 밥 위에 덜고 함께 나오는 콩나물과 갈치 살점을 비벼 먹는 것이 단골들의 정석 코스입니다.',
    image: '/src/assets/images/jeju_jeongshik_hero_1790925293258.jpg',
    mapQuery: '제주 유리네식당',
  },
  {
    id: 'hyeonok',
    name: '현옥식당',
    nameEn: 'Hyeonok Sikdang',
    category: '가성비 1티어 흑돼지 두루치기 백반 노포',
    area: '구제주',
    district: '오라1동 (제주시외버스터미널 정문 앞)',
    tagline: '단돈 9천 원에 즐기는 갓 볶아낸 두루치기와 무제한 밥심, 기사님과 도민들의 영혼의 안식처',
    rating: {
      overall: 4.45,
      naver: 4.51,
      kakao: 4.39,
      reviewsCount: '1,900+',
    },
    address: {
      road: '제주특별자치도 제주시 동광로1길 35',
      jibun: '제주특별자치도 제주시 오라1동 2444-22',
    },
    hours: {
      open: '07:00',
      close: '22:00',
      lastOrder: '21:15',
      closedDays: '연중무휴 (설/추석 당일만 단축)',
      holidayNotice: '이른 아침 7시부터 영업 개시',
    },
    breakTime: {
      hasBreak: false,
      time: '브레이크 타임 없음',
      notes: '아침부터 밤까지 상시 식사 가능',
    },
    catchTable: {
      supported: false,
      type: '워크인/전화',
      badgeText: '현장 방문 (회전율 빠름)',
      notice: '캐치테이블 미지원, 매장 도착 즉시 입장 또는 5~10분 내 빠른 착석',
      reservationTip: '기사식당 겸 노포 특성상 테이블 회전이 매우 빨라 만석이어도 10분 이상 기다리지 않습니다.',
    },
    menus: [
      {
        name: '두루치기 정식 (1인)',
        price: '9,000원',
        description: '신선한 돼지고기를 불판에 굽다 무생채, 콩나물, 파채를 듬뿍 올려 볶아먹는 제주식 두루치기 + 공깃밥 + 시원한 된장국 + 쌈채소',
        isSignature: true,
      },
      {
        name: '정식 백반 (1인)',
        price: '9,000원',
        description: '제육볶음 + 생선구이 + 매일 바뀌는 찌개와 8가지 집밥 스타일 찬',
        isSignature: true,
      },
      {
        name: '동태찌개',
        price: '9,000원',
        description: '얼큰하고 칼칼하게 끓여낸 해장 1등 양은냄비 찌개',
      },
      {
        name: '김치찌개',
        price: '9,000원',
        description: '묵은지와 돼지고기를 듬뿍 넣은 든든한 찌개',
      },
    ],
    phone: '064-757-3439',
    parking: '식당 주변 골목 또는 제주시외버스터미널 유료 공영주차장 도보 2분 이용',
    features: ['착한가격업소 선정', '아침 7시 영업', '브레이크타임 없음', '공깃밥 무제한 리필'],
    localTip: '고기가 반쯤 익었을 때 양념된 콩나물과 무채, 파채를 한꺼번에 올려 센 불에 볶아주세요. 남은 양념에 밥과 김가루를 볶아 먹는 것은 필수입니다.',
    image: '/src/assets/images/jeju_dombe_pork_1790925315057.jpg',
    mapQuery: '제주 현옥식당',
  },
  {
    id: 'apbaengdi',
    name: '앞뱅디식당',
    nameEn: 'Apbaengdi Sikdang',
    category: '신제주 로컬 향토 생선국 & 멜튀김 정식',
    area: '신제주',
    district: '연동 (신제주 로터리 인근)',
    tagline: '배추된장 국물에 싱싱한 전갱이와 멸치를 끓여내는 제주 고유의 깊고 맑은 바다 백반',
    rating: {
      overall: 4.41,
      naver: 4.45,
      kakao: 4.36,
      reviewsCount: '2,400+',
    },
    address: {
      road: '제주특별자치도 제주시 선덕로 32',
      jibun: '제주특별자치도 제주시 연동 314-91',
    },
    hours: {
      open: '09:00',
      close: '21:00',
      lastOrder: '20:15',
      closedDays: '매달 1·3번째 일요일 정기휴무',
    },
    breakTime: {
      hasBreak: true,
      time: '14:30 ~ 17:00',
      notes: '점심 주문마감 14:00',
    },
    catchTable: {
      supported: false,
      type: '워크인/전화',
      badgeText: '현장 방문 / 전화 문의',
      notice: '캐치테이블 미지원, 매장 도착 시 번호표 수령 방식',
      reservationTip: '도민 비중이 80% 이상인 곳으로 점심 피크(12:00~12:45)를 피해 11:20이나 13:20에 방문하시면 쾌적합니다.',
    },
    menus: [
      {
        name: '각재기국 (전갱이국) 정식',
        price: '11,000원',
        description: '싱싱한 통전갱이와 달큰한 얼갈이배추를 된장에 끓여낸 시원한 국 + 바삭 노릇한 고등어구이(2인 이상 주문 시 기본 서비스 제공) + 강된장 쌈',
        isSignature: true,
      },
      {
        name: '멜국 (생멸치국)',
        price: '11,000원',
        description: '통통한 생멸치와 배추를 넣어 맑고 담백하게 끓여낸 제주 바다의 진미',
        isSignature: true,
      },
      {
        name: '멜튀김',
        price: '15,000원',
        description: '비린내 없이 겉바속촉 고소하게 튀겨낸 생멸치 튀김 별미',
        isSignature: true,
      },
      {
        name: '돔베고기',
        price: '18,000원',
        description: '촉촉하게 삶아낸 제주 돼지고기 수육',
      },
    ],
    phone: '064-744-7942',
    parking: '식당 전용 주차장 8대 가능, 만차 시 인근 주택가 또는 유료 공영주차장 이용',
    features: ['블루리본 서베이 수록', '고등어구이 서비스', '도민 찐단골', '강된장 쌈채소 제공'],
    localTip: '함께 나오는 제주식 풋배추 쌈에 밥과 강된장, 멜튀김을 한 쌈 싸먹고 시원한 각재기 국물을 들이키면 속이 확 풀립니다.',
    image: '/src/assets/images/jeju_tilefish_grill_1790925324775.jpg',
    mapQuery: '제주 앞뱅디식당',
  },
  {
    id: 'daewoojeong',
    name: '대우정 본점',
    nameEn: 'Daewoojeong Main Branch',
    category: '원조 마가린 전복돌솥밥 백반 명가',
    area: '구제주',
    district: '삼도1동 (서사로 서문사거리 인근)',
    tagline: '수요미식회가 극찬한 원조! 고소한 마가린과 비법 양념장이 어우러진 찰진 전복돌솥밥 한상',
    rating: {
      overall: 4.42,
      naver: 4.46,
      kakao: 4.35,
      reviewsCount: '3,200+',
    },
    address: {
      road: '제주특별자치도 제주시 서사로 152',
      jibun: '제주특별자치도 제주시 삼도1동 569-27',
    },
    hours: {
      open: '09:00',
      close: '19:30',
      lastOrder: '18:50',
      closedDays: '매주 일요일 정기휴무',
    },
    breakTime: {
      hasBreak: true,
      time: '15:00 ~ 16:30',
      notes: '점심 마지막 입장 14:30',
    },
    catchTable: {
      supported: true,
      type: '현장키오스크',
      badgeText: '캐치테이블 현장 등록',
      notice: '매장 입구 캐치테이블 태블릿을 통해 대기 등록 및 실시간 호출 알림',
      reservationTip: '주말 12시에는 4~6팀 정도 대기가 발생하므로 매장 도착 즉시 태블릿에 번호를 입력하세요.',
    },
    menus: [
      {
        name: '전복돌솥밥 정식',
        price: '16,000원',
        description: '얇게 저민 전복과 내장(게우) 밥 위에 마가린 한 술과 달래 양념장을 넣어 비벼 먹는 시그니처 + 해물 된장뚝배기 + 6가지 반찬 + 누룽지 숭늉',
        isSignature: true,
      },
      {
        name: '해물뚝배기 정식',
        price: '14,000원',
        description: '딱새우, 홍합, 조개, 꽃게가 듬뿍 들어가 국물이 시원칼칼한 뚝배기',
        isSignature: true,
      },
      {
        name: '옥돔구이 (단품)',
        price: '20,000원',
        description: '돌솥밥과 환상궁합을 자랑하는 노릇한 옥돔구이',
      },
      {
        name: '전복죽',
        price: '13,000원',
        description: '신선한 전복 내장을 진하게 갈아 끓여낸 녹진한 영양죽',
      },
    ],
    phone: '064-757-9662',
    parking: '식당 뒤편 전용 주차장(약 10대) 및 길 건너 공영주차장 이용',
    features: ['수요미식회 방영', '마가린 전복솥밥 원조', '고소한 숭늉 누룽지', '공항 차량 9분'],
    localTip: '돌솥 밥이 나오면 밥을 밥공기에 덜지 않고 솥 안에서 마가린 반 스푼과 특제 간장을 넣고 비빈 뒤, 살짝 눌어붙게 만들어 긁어먹는 것이 꿀팁입니다.',
    image: '/src/assets/images/jeju_abalone_pot_1790925303836.jpg',
    mapQuery: '제주 대우정 서사로',
  },
  {
    id: 'jejuyechan',
    name: '제주예찬 공항본점',
    nameEn: 'Jeju Yechan',
    category: '은갈치조림 & 황게장 12첩 한상차림 정식',
    area: '신제주',
    district: '노형동 (1100로 축산마을 입구)',
    tagline: '신선한 제주 통은갈치와 제주산 황게장, 돔베고기, 옥돔구이가 푸짐하게 깔리는 대형 향토 명가',
    rating: {
      overall: 4.71,
      naver: 4.73,
      kakao: 4.41,
      reviewsCount: '5,600+',
    },
    address: {
      road: '제주특별자치도 제주시 1100로 2997',
      jibun: '제주특별자치도 제주시 노형동 287-1',
    },
    hours: {
      open: '09:00',
      close: '21:00',
      lastOrder: '20:10',
      closedDays: '연중무휴',
      holidayNotice: '브레이크 타임 없이 상시 운영',
    },
    breakTime: {
      hasBreak: false,
      time: '브레이크 타임 없음',
      notes: '오후 시간대 편안한 방문 가능',
    },
    catchTable: {
      supported: true,
      type: '온라인예약',
      badgeText: '네이버/캐치테이블 예약',
      notice: '캐치테이블 및 네이버 실시간 사전 예약 및 좌석 배정 지원',
      reservationTip: '당일 또는 방문 하루 전 온라인 예약 시 웨이팅 없이 바로 입장 가능하며, 영수증 리뷰 이벤트도 상시 진행합니다.',
    },
    menus: [
      {
        name: '은갈치조림 한상차림 (2인)',
        price: '79,000원',
        description: '특대 은갈치조림 + 제주 황게장 + 옥돔구이 + 돔베고기 + 성게미역국 + 12가지 수제 찬',
        isSignature: true,
      },
      {
        name: '수제 흑돼지 떡갈비 정식 (1인)',
        price: '18,000원',
        description: '두툼한 육즙의 떡갈비 + 성게미역국 + 제철 반찬 정식',
        isSignature: true,
      },
      {
        name: '통갈치구이 한상차림 (2인)',
        price: '79,000원',
        description: '길다란 제주 은갈치 한 마리를 통째로 소금구이한 정식',
      },
    ],
    phone: '064-746-0403',
    parking: '100대 이상 동시 수용 가능한 광활한 단독 전용 주차장 (초보 운전자도 주차 극히 편리)',
    features: ['브레이크타임 없음', '주차 100대 완비', '캐치테이블 예약', '황게장 무한인기'],
    localTip: '달지 않고 살이 꽉 찬 특제 제주 황게장과 은갈치조림 시래기가 밥도둑입니다. 공항 가기 전 렌터카 반납 경로에 위치해 동선이 최적입니다.',
    image: '/src/assets/images/jeju_jeongshik_hero_1790925293258.jpg',
    mapQuery: '제주예찬 공항본점',
  },
  {
    id: 'sunokine',
    name: '순옥이네명가',
    nameEn: 'Sunokine Myeongga',
    category: '도두항 해녀 직영 전복뚝배기 해물 정식',
    area: '신제주',
    district: '도두1동 (도두항/도두봉 인근)',
    tagline: '해녀가 직접 채취한 자연산 전복과 해산물로 끓여내는 칼칼한 해물뚝배기와 갓 구운 생선 백반',
    rating: {
      overall: 4.36,
      naver: 4.41,
      kakao: 4.28,
      reviewsCount: '4,100+',
    },
    address: {
      road: '제주특별자치도 제주시 도공로 8',
      jibun: '제주특별자치도 제주시 도두1동 2615-5',
    },
    hours: {
      open: '09:00',
      close: '21:00',
      lastOrder: '20:00',
      closedDays: '격주 화요일 정기휴무 (방문 전 확인 권장)',
    },
    breakTime: {
      hasBreak: true,
      time: '15:30 ~ 17:00',
      notes: '점심 주문마감 15:00',
    },
    catchTable: {
      supported: true,
      type: '원격줄서기',
      badgeText: '테이블링/캐치테이블 원격',
      notice: '원격 대기 등록 및 매장 앞 터치스크린 대기표 발권기 운영',
      reservationTip: '여름 성수기나 주말 점심에는 대기가 30분 이상 발생하므로, 공항에서 렌터카 수령 후 바로 원격 대기를 거는 것을 권장합니다.',
    },
    menus: [
      {
        name: '순옥이네 정식',
        price: '15,000원',
        description: '활전복 뚝배기(전복 2미 + 딱새우 + 조개) + 노릇한 고등어구이 반 마리 + 게장 및 해초 반찬 한상',
        isSignature: true,
      },
      {
        name: '전복물회',
        price: '16,000원',
        description: '오독오독 씹히는 활전복과 뿔소라, 해삼이 들어간 시원한 제주 된장초고추장 물회',
        isSignature: true,
      },
      {
        name: '전복뚝배기 (단품)',
        price: '16,000원',
        description: '활전복 3미가 들어간 얼큰하고 칼칼한 해물 된장 뚝배기',
      },
      {
        name: '전복죽',
        price: '13,000원',
        description: '내장(게우)을 듬뿍 넣어 짙은 녹색을 띠는 고소한 보양식',
      },
    ],
    phone: '064-743-4813',
    parking: '식당 앞 6대 및 도보 1분 거리 도두항 무료 공영주차장(매우 넓음) 이용 가능',
    features: ['해녀 직영점', '수요미식회 방영', '도두항 오션뷰 인근', '전복뚝배기 정식'],
    localTip: '뚝배기가 끓을 때 살아있는 전복을 국물 속 깊숙이 넣어 살짝 익혀 드시면 야들야들한 극상의 식감을 즐길 수 있습니다.',
    image: '/src/assets/images/jeju_abalone_pot_1790925303836.jpg',
    mapQuery: '제주 순옥이네명가',
  },
  {
    id: 'neokdungbaegi',
    name: '넉둥베기',
    nameEn: 'Neokdungbaegi',
    category: '용담동 접짝뼈국 & 돼지산적 구이 쌈정식',
    area: '구제주',
    district: '용담1동 (서문시장 인근)',
    tagline: '그릇 밖으로 넘치는 거대한 돼지 목뼈와 푹 우려낸 메밀 육수, 숯불 산적구이의 환상 조합',
    rating: {
      overall: 4.62,
      naver: 4.67,
      kakao: 4.54,
      reviewsCount: '2,600+',
    },
    address: {
      road: '제주특별자치도 제주시 서문로 9-1',
      jibun: '제주특별자치도 제주시 용담1동 282-1',
    },
    hours: {
      open: '09:00',
      close: '14:00',
      lastOrder: '13:30',
      closedDays: '매주 수요일 정기휴무',
      holidayNotice: '당일 준비된 뼈 고기 소진 시 12:30~13:00 조기 마감',
    },
    breakTime: {
      hasBreak: false,
      time: '브레이크 타임 없음 (단축 영업)',
      notes: '오전 9시부터 오후 2시까지만 점심 집중 영업',
    },
    catchTable: {
      supported: true,
      type: '원격줄서기',
      badgeText: '캐치테이블 원격 (08:30 오픈)',
      notice: '아침 8시 30분부터 캐치테이블 현장 등록 및 9시 정각부터 원격 줄서기 활성화',
      reservationTip: '워낙 대기가 치열하여 당일 8:30~9:00 사이에 캐치테이블을 확인하지 않으면 재료 소진으로 당일 접수가 마감될 수 있습니다.',
    },
    menus: [
      {
        name: '접짝뼈국 (1인 정식)',
        price: '11,000원',
        description: '돼지 머리뼈와 목뼈 부위를 메밀가루를 풀어 뽀얗고 쫀득하게 끓여낸 제주 잔칫날 전통 국 + 배추 쌈채소 + 멜젓 + 밥',
        isSignature: true,
      },
      {
        name: '돼지산적 구이',
        price: '10,000원',
        description: '두툼한 제주산 돼지고기를 꼬치에 꿰어 불향 가득 달콤 짭조름하게 구워낸 별미 (쌈 싸먹을 때 필수)',
        isSignature: true,
      },
      {
        name: '고사리육개장',
        price: '10,000원',
        description: '잘게 찢은 제주 고사리와 메밀풀의 구수하고 진득한 토속 육개장',
      },
    ],
    phone: '064-753-7898',
    parking: '전용 주차장 없음, 서문공설시장 공영주차장 또는 인근 유료 주차장 이용',
    features: ['오전 9시~오후 2시 한정', '캐치테이블 필수', '제주 접짝뼈국 성지', '불향 산적구이'],
    localTip: '접짝뼈 위의 살코기를 뜯어 배추 위에 얹고, 고추장아찌와 갈치속젓, 돼지산적 한 조각을 함께 싸 드시면 제주 최고의 쌈밥을 경험하실 수 있습니다.',
    image: '/src/assets/images/jeju_dombe_pork_1790925315057.jpg',
    mapQuery: '제주 넉둥베기',
  },
];
