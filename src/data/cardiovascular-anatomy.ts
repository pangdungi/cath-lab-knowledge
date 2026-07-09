import type { KnowledgeArticle } from "@/types/knowledge-article";

export const cardiovascularAnatomy: KnowledgeArticle[] = [
  {
    slug: "coronary-artery-anatomy",
    title: "관상동맥 구조",
    englishName: "Coronary Artery Anatomy",
    koreanName: "관상동맥 해부학",
    summary:
      "심장에 혈을 공급하는 좌·우 관상동맥과 주요 분지(LAD, LCX, RCA, PDA 등)를 조영실 관점에서 정리",
    summaryEn:
      "Coronary artery anatomy covers the left and right coronary systems and major branches such as LAD, LCX, RCA, and PDA.",
    definition: [
      "관상동맥은 심장 근육 자체에 혈액을 공급하는 혈관입니다. 조영실에서 보는 '관상동맥 조영'은 이 혈관들이 어디가 좁은지, 어디에 스텐트를 넣을지 찾는 검사입니다.",
      "크게 왼쪽 관상동맥 계통과 오른쪽 관상동맥(RCA) 계통으로 나뉩니다. 왼쪽은 보통 좌주형지(LM)에서 시작해 LAD와 LCX 두 갈래로 갈라집니다.",
      "LAD(좌전하행지)는 심장 앞면·중격 쪽을 따라 내려가며, LCX(좌회선지)는 심장 왼쪽 옆을 따라 돕니다. RCA는 심장 오른쪽을 따라 내려갑니다.",
      "조영 보고서에는 'pLAD', 'mRCA', 'OM2'처럼 약어로 적히는데, p=proximal(근위), m=mid(체), d=distal(원위)을 뜻하는 경우가 많습니다.",
      "PDA(후하행지)가 RCA에서 나오면 우성형(right dominant), LCX에서 나오면 좌성형(left dominant)입니다. 우성형이 가장 흔합니다.",
      "한마디로, '심장에 피를 먹이는 혈관 나무'이고, 조영실에서는 이 가지 이름을 정확히 아는 것이 PCI·보고서 이해의 기본입니다.",
    ],
    images: [
      {
        src: "/images/anatomy/coronary-arteries.svg",
        alt: "관상동맥 주요 혈관 구조도 - LM, LAD, LCX, RCA, D1, OM1, PDA 등",
        caption:
          "관상동맥 주요 혈관 개략도 (앞면 기준). LM에서 LAD·LCX로 갈라지고, RCA는 오른쪽에서 내려옵니다. D=대각지, OM=둔각지, S=중격지.",
      },
      {
        src: "/images/anatomy/coronary-dominance.svg",
        alt: "관상동맥 우성형 좌성형 공우성형 - PDA 기원",
        caption:
          "관상동맥 우세(dominance). PDA(후하행지)가 RCA에서 나오면 우성형(~80%), LCX에서 나오면 좌성형(~10%), 둘 다 공급하면 공우성형(~10%).",
      },
    ],
    imagesTitle: "해부 도해",
    imagesSubtitle: "혈관명 라벨 참고",
    measurementSteps: [
      "LM (Left Main, 좌주형지) → 좌관상동맥의 시작. 매우 짧은 구간. 여기 병변이면 고위험.",
      "LAD (Left Anterior Descending, 좌전하행지) → 심장 앞·중격 쪽. 근위(pLAD)·체(mLAD)·원위(dLAD)로 나눔.",
      "D1, D2 (Diagonal, 대각지) → LAD에서 나와 왼심실 앞벽 쪽으로 감. 큰 D1은 '대각지'라고 따로 부름.",
      "S1, S2 (Septal perforator, 중격지) → LAD에서 중격(심장 벽) 쪽으로 들어가는 작은 가지.",
      "LCX (Left Circumflex, 좌회선지) → 심장 왼쪽 가로줄을 따라 돔. 좌심방·좌심실 옆벽 공급.",
      "OM1, OM2 (Obtuse Marginal, 둔각지) → LCX에서 나오는 주요 분지. 숫자가 클수록 더 멀리 나온 가지.",
      "RCA (Right Coronary Artery, 우관상동맥) → 오른 관상동맥동에서 시작. 근위(pRCA)·체(mRCA)·원위(dRCA).",
      "AM (Acute Marginal, 예각지) → RCA에서 오른심실 쪽으로 나오는 분지.",
      "PDA (Posterior Descending Artery, 후하행지) → 심장 뒤 중격 쪽을 따라 내려감. 보통 RCA에서 기원(우성형).",
      "PLB (Posterolateral Branch, 후외측지) → 심실 뒤·옆벽 공급. RCA 또는 LCX에서 나올 수 있음.",
      "조영 보고서 읽기 예: 'pLAD 90% stenosis' = LAD 근위부 90% 협착 / 'RCA-PDA' = RCA가 PDA까지 이어지는 우성형",
    ],
    stepsTitle: "혈관별 정리",
    stepsSubtitle: "이름·위치·약어",
    clinicalUse:
      "조영실에서 가장 먼저 익혀야 할 해부학입니다. 의사가 'LAD proximal에 스텐트', 'OM1까지 조영', 'RCA dominant'라고 말할 때 같은 그림을 그릴 수 있어야 합니다. PCI 준비(와이어 진입, 스텐트 길이), 보고서 작성, 타과와의 커뮤니케이션에 직접 쓰입니다. LM 병변, LAD proximal 병변, PDA 병변은 각각 위험도와 시술 난이도가 달라, 혈관 이름을 정확히 아는 것이 중요합니다.",
    keyPoints: [
      "왼쪽: LM → LAD + LCX",
      "오른쪽: RCA",
      "LAD 분지: D(대각지), S(중격지)",
      "LCX 분지: OM(둔각지)",
      "RCA 분지: AM(예각지), PDA(후하행지), PLB(후외측지)",
      "p/m/d = 근위/체/원위부",
      "우성형·좌성형·공우성형 = PDA 기원으로 구분",
    ],
    relatedItems: ["PCI", "LAD", "RCA", "PDA", "IVUS"],
    tags: ["해부학", "관상동맥", "조영실", "이미지"],
  },
];

export function getCardiovascularAnatomyBySlug(
  slug: string,
): KnowledgeArticle | undefined {
  return cardiovascularAnatomy.find((item) => item.slug === slug);
}
