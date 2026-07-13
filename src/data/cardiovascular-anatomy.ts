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
    relatedItems: ["PCI", "LAD", "RCA", "PDA", "판막 해부학", "CABG 이식 혈관", "관상동맥 협착 — 조영 해석"],
    tags: ["해부학", "관상동맥", "조영실", "이미지"],
  },
  {
    slug: "cabg-graft-vessels",
    title: "CABG 이식 혈관",
    englishName: "CABG Graft Vessels",
    koreanName: "관상동맥우회술 이식 혈관 해부학",
    summary:
      "CABG에서 쓰는 이식 혈관(LITA·RITA·요골동맥·대복정맥)의 해부학적 기원, 경로, 연결 부위와 동맥·정맥 이식의 차이를 정리",
    summaryEn:
      "CABG graft anatomy covers internal thoracic (mammary), radial, and saphenous vein conduits — origin, course, anastomosis targets, and arterial vs venous patency.",
    definition: [
      "CABG(Coronary Artery Bypass Grafting, 관상동맥우회술)는 막힌 관상동맥을 **우회(bypass)** 하기 위해 다른 혈관을 가져와 연결하는 수술입니다. 가져오는 혈관을 **이식 혈관(conduit, graft)** 이라고 부릅니다.",
      "이식 혈관은 크게 **동맥 이식(arterial graft)** 과 **정맥 이식(venous graft)** 으로 나뉩니다. 동맥 이식은 장기 개통률(patency)이 높아 현재 표준에 가깝고, 정맥 이식은 여러 군데를 한꺼번에 우회할 때 여전히 많이 씁니다.",
      "**'어디서 떼고(채취)'**, **'어디에 붙이는지(문합)'** 를 구분하는 것이 핵심입니다. **LITA** 는 완전히 떼지 않고(in-situ) **쇄골하동맥→흉골 옆** 을 그대로 쓰며 **distal 끝만 LAD** 에 붙입니다. **요골동맥·대복정맥** 은 몸에서 **완전히 채취(free graft)** 하고, **proximal(근위)은 대동맥**, **distal(원위)은 관상동맥 협착 너머** 에 붙입니다.",
      "**LITA/LIMA(좌흉내 동맥, Left Internal Thoracic Artery)** 는 가장 중요한 이식 혈관입니다. 쇄골하 동맥(subclavian artery)에서 나와 흉골 옆을 따라 내려가며, **그대로(in-situ)** LAD에 연결하는 것이 gold standard입니다. RITA(우흉내 동맥)도 같은 구조이나 LITA보다 덜 씁니다.",
      "**요골동맥(Radial artery)** 은 전완에서 채취하는 **자유 동맥 이식(free arterial graft)** 입니다. 팔꿈치 동맥(brachial)에서 갈라져 요골 쪽으로 내려갑니다. 채취 전 **Allen test** 로 손 혈류가 충분한지 반드시 확인합니다. LCX 분지(OM), 대각지(diagonal), PDA 등에 연결합니다.",
      "**대복정맥 이식(SVG, Saphenous Vein Graft)** 은 다리 안쪽의 **대복정맥(greater saphenous vein)** 을 채취합니다. 발등·내측복사에서 시작해 허벅지 안쪽을 따라 올라갑니다. RCA, OM, 여러 관상동맥에 동시에 연결하기 쉬워 역사적으로 가장 흔했으나, **10년 개통률이 동맥 이식보다 낮습니다.**",
      "드물게 **위망막동맥(Gastroepiploic artery, GEA)** 를 복부에서 채취해 RCA 등에 쓰기도 합니다. 최근에는 **전동맥 이식(all-arterial revascularization)** 전략 — LITA + 요골동맥 조합 — 이 권장되는 경우가 많습니다.",
      "조영실·Cath lab에서 CABG 환자를 볼 때는 '어느 혈관이 이식됐는지', 'native vs graft'를 구분하는 것이 핵심입니다. 이식 부위는 **proximal(근위) 연결부** 와 **distal(원위) 문합부(anastomosis)** 로 나뉘며, 협착은 주로 문합부·이식혈관 본체·native 쪽 진입부에서 발생합니다.",
      "한마디로, CABG 이식 혈관은 **'어디서 왔는지(기원)'**, **'어디에 붙었는지(표적 관상동맥)'**, **'동맥인지 정맥인지'** 를 아는 것이 해부생리학 이해의 시작입니다.",
    ],
    images: [
      {
        src: "/images/anatomy/cabg-graft-harvest-attach.svg",
        alt: "CABG 이식 혈관 채취 위치와 연결 위치 - LITA, 요골동맥, SVG 각각 어디서 떼고 어디에 붙이는지",
        caption:
          "채취(떼는 곳) vs 연결(붙이는 곳) 한눈에. 주황=채취·기원, 초록=distal 문합. LITA: in-situ(쇄골하→흉골 옆)→LAD. 요골동맥: 전완 채취→proximal 대동맥, distal OM/diagonal/PDA. SVG: 다리 안쪽 채취→proximal 대동맥(aortic punch), distal RCA/OM/PDA.",
      },
      {
        src: "/images/anatomy/cabg-graft-body-map.svg",
        alt: "CABG 전신 도해 - 몸에서 심장까지 이식 혈관 경로",
        caption:
          "전신 맵. 몸(흉곽·전완·다리)에서 채취한 혈관이 심장 관상동맥 어디에 연결되는지 화살표로 표시. LITA는 in-situ로 흉골 옆에서 직접 LAD로, free graft(요골·SVG)는 proximal→대동맥, distal→관상동맥.",
      },
      {
        src: "/images/anatomy/cabg-graft-overview.svg",
        alt: "CABG 이식 혈관 개요 - LITA, 요골동맥, 대복정맥이 LAD, LCX, RCA에 연결되는 도해",
        caption:
          "CABG 이식 혈관 전체 개요. 녹색=LITA(흉내 동맥, in-situ) → LAD, 보라=요골동맥(free arterial) → LCX/OM, 파랑=SVG(대복정맥) → RCA 등. 노란 원=협착 부위.",
      },
      {
        src: "/images/anatomy/cabg-graft-sources.svg",
        alt: "CABG 이식 혈관 채취 부위 상세 - 흉내 동맥, 요골동맥, 대복정맥 해부 위치",
        caption:
          "채취 부위 상세. 좌=ITA(IMA): 쇄골하동맥→흉골 옆(in-situ, 완전 채취 아님). 중=요골동맥: 전완 전체, Allen test 필수. 우=대복정맥: 다리 안쪽(medial), EVH 또는 개방 채취.",
      },
      {
        src: "/images/anatomy/cabg-graft-patency.svg",
        alt: "CABG 이식 혈관 10년 개통률 비교 - LITA, 요골동맥, SVG",
        caption:
          "이식 혈관별 장기 개통률과 혈관벽 특성. LITA→LAD ~95%, 요골동맥 ~85%, SVG ~50%(10년 기준, 대략적). 동맥 이식은 내막 기능이 유지되어 혈관경화에 강하고, 정맥 이식은 동맥압에 적응하며 조기·만성 협착이 흔합니다.",
      },
    ],
    imagesTitle: "해부 도해",
    imagesSubtitle: "채취 위치 · 연결 위치 · 전신 경로",
    measurementSteps: [
      "【공통 원칙】 Distal anastomosis = native 관상동맥 **협착 너머(beyond stenosis)** · Proximal = in-situ ITA origin 또는 aorta(SVG/radial)",
      "LITA / LIMA → **채취:** in-situ, 쇄골하동맥 기원·흉골 내측 1~2 cm (완전 떼지 않음) · **연결:** distal end → **LAD** (gold standard)",
      "RITA / RIMA → **채취:** 우측 흉골 옆 in-situ · **연결:** RCA 또는 lateral wall free graft",
      "Radial artery → **채취:** 전완 요골동맥 전체(brachial bifurcation~wrist), Allen test(-) · **연결:** proximal → **ascending aorta** · distal → **OM, diagonal, PDA**",
      "SVG → **채취:** 대복정맥(GSV), 다리 안쪽(medial leg), EVH or open · **연결:** proximal → **aorta punch** · distal → **RCA, OM, PDA** (jump graft 가능)",
      "GEA (Gastroepiploic artery) → 위 대망 · 복부 채취 · 드물게 RCA 등에 사용",
      "Anastomosis (문합) → proximal: aorta or in-situ ITA origin · distal: target coronary beyond stenosis",
      "Graft failure 위치 → distal anastomosis(가장 흔함) · graft body · proximal anastomosis · native coronary entry",
      "조영 시 구분 → 'LIMA-LAD patent' / 'SVG-OM occluded' / 'jump graft' = 하나의 이식혈관에서 여러 관상동맥으로 분기",
      "Native vs graft → 이식 후에도 원래 관상동맥(native)은 남아 있음 · graft와 native가 동시에 협착될 수 있음",
      "수술 기록 확인 항목 → LITA→LAD? SVG 개수? Radial 사용? RITA? target vessel 이름(LAD, OM1, PDA, RCA)",
    ],
    stepsTitle: "이식 혈관별 정리",
    stepsSubtitle: "기원 · 채취 · 연결 부위",
    clinicalUse:
      "CABG 환자의 조영·PCI·재협심증 평가에 필수적인 해부학입니다. Cath lab에서 'LIMA-LAD는 patent, SVG-RCA는 occluded'처럼 보고할 때 같은 그림을 그릴 수 있어야 합니다. 이식 혈관 종류에 따라 협착 시기·시술 난이도·약물(요골동맥 spasm 예방용 칼슘채널차단제 등)이 달라집니다. 수술 기록(op note)에서 어떤 conduit가 어디에 연결됐는지 확인한 뒤, native coronary anatomy(관상동맥 구조 항목)와 함께 읽는 것이 중요합니다.",
    keyPoints: [
      "채취 vs 연결: 어디서 떼고 어디에 붙이는지 구분",
      "LITA: in-situ, distal만 LAD에 문합",
      "요골·SVG: free graft, proximal=aorta, distal=관상동맥",
      "LITA(LIMA) → LAD: gold standard, 최고 개통률",
      "문합부(distal anastomosis)가 협착·폐쇄의 흔한 부위",
      "native coronary와 graft를 조영·보고서에서 구분",
    ],
    relatedItems: [
      "관상동맥 구조",
      "LAD",
      "RCA",
      "LCX",
      "PCI",
      "CABG",
      "CABG LHC — 우요골 접근이 어려운 이유",
    ],
    tags: ["해부학", "CABG", "이식혈관", "LITA", "SVG", "이미지"],
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
