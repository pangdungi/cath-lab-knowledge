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
      "조영실에서는 해부학 그림과 실제 형광투시 화면이 1:1로 같지 않습니다. LAO에서는 좌관상동맥(LM·LAD·LCX), RAO에서는 RCA가 주로 보이며, 촬영 각도(cranial/caudal)에 따라 혈관이 겹쳐 보이기도 합니다.",
      "한마디로, '심장에 피를 먹이는 혈관 나무'이고, 조영실에서는 이 가지 이름을 정확히 아는 것이 PCI·보고서 이해의 기본입니다.",
    ],
    images: [
      {
        src: "/images/anatomy/coronary-arteries-wikimedia.svg",
        alt: "관상동맥 해부 구조도 - LM, LAD, LCX, RCA, marginal branches 등 라벨",
        caption:
          "관상동맥 전체 구조 (심장 앞면·해부학적 위치). 빨간색=동맥, 파란색=정맥/기준 구조. LM→LAD·LCX 분지, RCA·marginal·PDA 위치를 한눈에 볼 수 있습니다. 출처: Wikimedia Commons (Mikael Häggström, CC BY-SA 3.0).",
      },
      {
        src: "/images/anatomy/coronary-angiogram-views.svg",
        alt: "조영실 LAO·RAO 관상동맥 조영 시 혈관 배치 - LM, LAD, LCX, RCA, PDA",
        caption:
          "조영실 형광투시 화면에서 보는 관상동맥 배치 개략도. 왼쪽=LAO(좌관상동맥 계통: LM, LAD, LCX, D1, OM1), 오른쪽=RAO(우관상동맥: RCA, AM, Crux, PDA, PLB). 실제 조영 각도에 따라 겹침·길이는 달라집니다.",
      },
      {
        src: "/images/anatomy/coronary-dominance.svg",
        alt: "관상동맥 우성형 좌성형 공우성형 - PDA 기원",
        caption:
          "관상동맥 우세(dominance). PDA(후하행지)가 RCA에서 나오면 우성형(~80%), LCX에서 나오면 좌성형(~10%), 둘 다 공급하면 공우성형(~10%).",
      },
    ],
    imagesTitle: "해부 도해",
    imagesSubtitle: "해부학 구조 + 조영실 시야",
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
      "LAO 화면 팁: 척추가 오른쪽, 카테터가 보이면 좌관상동맥 계통 조영 중일 가능성 큼",
      "RAO 화면 팁: 척추가 왼쪽이면 RCA 조영 중일 가능성 큼. Crux에서 PDA가 내려가는지 확인",
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
    relatedItems: ["PCI", "LAD", "RCA", "PDA", "판막 해부학"],
    tags: ["해부학", "관상동맥", "조영실", "이미지"],
  },
  {
    slug: "heart-valve-anatomy",
    title: "판막 해부학",
    englishName: "Heart Valve Anatomy",
    koreanName: "심장 판막 해부학",
    summary:
      "심장의 4개 판막(승모·삼첨·대동맥·폐동맥) 위치, 종류, 혈류 방향을 조영실·구조적 시술 관점에서 정리",
    summaryEn:
      "Heart valve anatomy covers the four valves — mitral, tricuspid, aortic, and pulmonary — including location, type, and blood flow direction.",
    definition: [
      "심장에는 4개의 판막이 있어, 피가 '한 방향으로만' 흐르게 합니다. 판막이 제대로 닫히지 않으면 역류(regurgitation), 너무 좁으면 협착(stenosis)이 생깁니다.",
      "판막은 크게 두 종류입니다. ① 방실판(AV valve): 심방과 심실 사이 — 승모판(Mitral), 삼첨판(Tricuspid) ② 반월판(Semilunar valve): 심실과 대동맥/폐동맥 사이 — 대동맥판(Aortic), 폐동맥판(Pulmonary).",
      "승모판(Mitral)은 왼심방(LA)과 왼심실(LV) 사이에 있고, 잎(leaflet)이 2개라 '이첨판'이라고도 합니다. 삼첨판(Tricuspid)은 오른심방(RA)과 오른심실(RV) 사이, 잎이 3개입니다.",
      "대동맥판(Aortic)은 왼심실에서 대동맥으로 나가는 문이고, 폐동맥판(Pulmonary)은 오른심실에서 폐동맥으로 나가는 문입니다. 둘 다 반월 모양의 3개 판(cusp)으로 되어 있습니다.",
      "조영실·structural lab에서는 TAVR(대동맥판), TMVR/MitraClip(승모판), TTVR/Tricuspid TEER(삼첨판) 등이 이 해부 위치를 기준으로 시행됩니다. TEE(경식도 초음파)로 판막 위치·누출을 실시간 확인하는 경우가 많습니다.",
      "한마디로, '심장 안의 네 개 문'이고, 어느 문이 망가졌는지 아는 것이 판막질환·시술 이해의 시작입니다.",
    ],
    images: [
      {
        src: "/images/anatomy/heart-valves-labeled.svg",
        alt: "심장 4개 판막 라벨 - Mitral, Tricuspid, Aortic, Pulmonary valve",
        caption:
          "심장 단면에서 보는 4개 판막과 심방·심실 위치. Mitral(좌방실판), Tricuspid(우방실판), Aortic(대동맥판), Pulmonary(폐동맥판)이 표시되어 있습니다. 출처: Wikimedia Commons (Wapcaplet/Yaddah, CC BY-SA).",
      },
      {
        src: "/images/anatomy/heart-valves-overview.svg",
        alt: "심장 판막 개요 - AV판 vs 반월판, 혈류 방향",
        caption:
          "4개 판막 한눈에 보기. 파란색=방실판(AV: Mitral·Tricuspid), 보라색=반월판(Semilunar: Aortic·Pulmonary). 화살=정상 혈류 방향.",
      },
      {
        src: "/images/anatomy/heart-valves-schematic.svg",
        alt: "심방 심실과 판막 관계 schematic",
        caption:
          "심방·심실·주요 혈관·판막의 관계를 단순화한 schematic. 출처: Wikimedia Commons (Laurens R. Krol, CC BY-SA 4.0).",
      },
    ],
    imagesTitle: "해부 도해",
    imagesSubtitle: "4개 판막 위치와 종류",
    measurementSteps: [
      "Mitral valve (승모판, Mitral) → LA와 LV 사이 · 2개 잎 · 역류=MR · 협착=MS · MR 상세 → 'Mitral Regurgitation' 항목",
      "Tricuspid valve (삼첨판, Tricuspid) → RA와 RV 사이 · 3개 잎 · 역류=TR · 협착=TS",
      "Aortic valve (대동맥판, Aortic) → LV와 Aorta 사이 · 3 cusps · 역류=AR · 협착=AS",
      "Pulmonary valve (폐동맥판, Pulmonary) → RV와 Pulmonary artery 사이 · 3 cusps · 역류=PR · 협착=PS",
      "AV valve(방실판) 특징 → leaflet + chordae(건도) + papillary muscle · TEE에서 잎 움직임 평가",
      "Semilunar valve(반월판) 특징 → 3개의 cusp가 pocket처럼 닫힘 · 심초음파에서 gradient·valve area 측정",
      "혈류 방향 → RA→RV→PA(폐) / LA→LV→Aorta(전신) · 판막은 각 구간의 '문'",
      "조영실 시술 연결 → TAVR=대동맥판 · TMVR/MitraClip=승모판 · TTVR/TEER=삼첨판",
      "TEE에서 보는 것 → 잎 모양, 누출 jet, valve area, chordae·기구 위치(시술 중)",
      "심초음파 보고서 예: 'Moderate MR' = 중등도 승모판 역류 / 'Severe AS' = 중증 대동맥판 협착",
    ],
    stepsTitle: "판막별 정리",
    stepsSubtitle: "이름·위치·질환 약어",
    clinicalUse:
      "판막질환 환자 평가, TAVR/TMVR/MitraClip/TTVR 시술, TEE 가이드, 심초음파 보고서 해석의 기본입니다. 조영실·structural lab 팀은 '어느 판막인지', '역류인지 협착인지', '시술 판막이 맞는지'를 항상 확인해야 합니다. 대동맥판과 승모판은 왼심 쪽, 삼첨·폐동맥판은 오른심 쪽이라 오른심 부담·폐동맥 압 평가도 함께 봅니다.",
    keyPoints: [
      "4개 판막: Mitral, Tricuspid, Aortic, Pulmonary",
      "AV판(방실판): Mitral(2잎), Tricuspid(3잎)",
      "반월판: Aortic, Pulmonary (각 3 cusps)",
      "MR/TR=역류, MS/TS=협착, AR/AS, PR/PS 동일 패턴",
      "TAVR=대동맥판 · MitraClip/TMVR=승모판 · TTVR/TEER=삼첨판",
      "TEE·심초음파가 판막 평가의 핵심",
    ],
    relatedItems: [
      "Mitral Regurgitation",
      "TAVR",
      "TMVR",
      "MitraClip",
      "TTVR",
      "Tricuspid TEER",
      "TEE",
    ],
    tags: ["해부학", "판막", "심초음파", "TEE"],
  },
];

export function getCardiovascularAnatomyBySlug(
  slug: string,
): KnowledgeArticle | undefined {
  return cardiovascularAnatomy.find((item) => item.slug === slug);
}
