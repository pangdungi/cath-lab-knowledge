export type MenuItem = {
  id: string;
  label: string;
  description: string;
  href: string;
  icon: string;
  available: boolean;
};

export const menus: MenuItem[] = [
  {
    id: "medical-terms",
    label: "의학용어",
    description: "Cath Lab 관련 의학용어와 약어를 정리합니다.",
    href: "/medical-terms",
    icon: "📖",
    available: true,
  },
  {
    id: "cardiovascular-diseases",
    label: "심혈관 질환",
    description: "조영실에서 자주 마주치는 심혈관 질환을 정리합니다.",
    href: "/cardiovascular-diseases",
    icon: "❤️",
    available: true,
  },
  {
    id: "test-interpretations",
    label: "검사 결과 해석",
    description: "RHC 등 검사 결과를 쉽게 해석하는 방법을 정리합니다.",
    href: "/test-interpretations",
    icon: "🔍",
    available: true,
  },
  {
    id: "procedures",
    label: "시술 절차",
    description: "조영실 시술 절차와 단계별 순서를 정리합니다.",
    href: "/procedures",
    icon: "🩺",
    available: true,
  },
  {
    id: "medications",
    label: "약물",
    description: "조영실에서 자주 쓰이는 약물과 주의사항을 정리합니다.",
    href: "/medications",
    icon: "💊",
    available: true,
  },
  {
    id: "ep",
    label: "EP",
    description: "전기생리·부정맥 질환과 심전도 포인트를 정리합니다.",
    href: "/ep",
    icon: "⚡",
    available: true,
  },
  {
    id: "cardiovascular-anatomy",
    label: "심혈관 해부학",
    description: "관상동맥 등 심혈관 구조와 혈관명을 이미지와 함께 정리합니다.",
    href: "/cardiovascular-anatomy",
    icon: "🫀",
    available: true,
  },
  {
    id: "equipment",
    label: "장비 가이드",
    description: "조영실 장비 사용법과 주의사항 (준비 중)",
    href: "/equipment",
    icon: "⚙️",
    available: false,
  },
  {
    id: "nursing",
    label: "간호",
    description: "조영실·심장내과 병동에서 필요한 간호 포인트와 측정법을 정리합니다.",
    href: "/nursing",
    icon: "🩹",
    available: true,
  },
  {
    id: "emergency-nursing",
    label: "응급간호",
    description: "ACLS, 심정지·코드 블루 등 응급 상황 대응을 정리합니다.",
    href: "/emergency-nursing",
    icon: "🚨",
    available: true,
  },
];
