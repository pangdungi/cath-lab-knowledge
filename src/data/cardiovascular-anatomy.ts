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
    relatedItems: ["PCI", "LAD", "RCA", "PDA", "판막 해부학", "CABG 이식 혈관", "관상동맥 협착 — 조영 해석", "동맥 해부 — 팔·하지·심장"],
    tags: ["해부학", "관상동맥", "조영실", "이미지"],
  },
  {
    slug: "arteries-arm-leg-heart",
    title: "동맥 해부 — 팔·하지·심장",
    englishName: "Arteries of the Arm, Leg & Heart",
    koreanName: "상지·하지·심장 동맥 해부학",
    summary:
      "조영실에서 매일 쓰는 요골·대퇴동맥부터 심장의 관상동맥·대동맥·폐동맥까지 — 팔·다리·심장 동맥을 Wikimedia 해부 그림과 함께 정리",
    summaryEn:
      "Upper limb, lower limb, and cardiac arteries — radial and femoral access to coronary and great vessels — with Wikimedia anatomy images.",
    definition: [
      "**동맥(artery)** 는 심장에서 나온 **산소가 풍부한 혈액**(대부분)을 몸·심장으로 보내는 혈관입니다. 조영실에서는 **어느 동맥에 카테터를 넣느냐**가 시술의 시작점입니다.",
      "이 항목은 동맥을 **세 군데**로 나눠 정리합니다. ① **팔(상지)** — PCI·LHC의 **요골동맥** ② **다리(하지)** — PCI·TAVR·EVAR의 **대퇴동맥** ③ **심장 안·심장에 붙은 동맥** — **관상동맥** + **대동맥·폐동맥** 등",
      "**비유**: 동맥은 '큰 도로'입니다. **고속도로(대동맥)** 에서 **지방도(요골·대퇴)** 로 나가고, **심장 근육으로 들어가는 골목길(관상동맥)** 이 따로 있습니다. 조영실은 이 도로망에서 **어디를 뚫어 들어가느냐**를 아는 일입니다.",
      "**팔 동맥 핵심**: 쇄골하동맥 → 액와동맥 → **상완동맥** → **요골동맥(radial)** · **천지동맥(ulnar)**. 조영실 **요골 접근**은 요골동맥을 puncture합니다.",
      "**다리 동맥 핵심**: 외장장골동맥 → **대퇴동맥(femoral)** → 심대퇴동맥(profunda) 분지 → 대퇴동맥이 **굴곡동맥(popliteal)** 로 이어짐 → **전경골·후경골동맥** → 발등동맥. **대퇴 접근**은 common femoral을 puncture합니다.",
      "**심장 동맥 핵심**: ① **관상동맥** — 심장 근육에 혈 공급 (LAD·LCX·RCA) → 상세는 **'관상동맥 구조'** 항목 ② **대동맥(aorta)** — 좌심실에서 전신으로 ③ **폐동맥(pulmonary artery)** — 우심실에서 폐로 (정맥혈)",
      "한마디로, **'팔=요골, 다리=대퇴, 심장=관상동맥+대동맥'** 을 그림과 함께 외우면 조영실 혈관 이름이 훨씬 수월해집니다.",
    ],
    images: [
      {
        src: "/images/anatomy/upper-limb-arteries-openstax.jpg",
        alt: "상지·흉부 동맥 해부도 - 쇄골하동맥, 액와동맥, 상완동맥, 요골동맥, 천지동맥",
        caption:
          "**팔(상지) 동맥 전체.** Subclavian(쇄골하) → Axillary(액와) → Brachial(상완) → Radial(요골)·Ulnar(천지). 조영실 요골 puncture는 Radial artery. 출처: Wikimedia Commons, OpenStax Anatomy & Physiology, CC BY 3.0.",
      },
      {
        src: "/images/anatomy/cath-lab-artery-access.svg",
        alt: "조영실 동맥 접근 - 요골동맥 radial과 대퇴동맥 femoral puncture 부위",
        caption:
          "조영실 **접근 요약**. 왼쪽=요골(Radial) LHC·PCI · 오른쪽=대퇴(Femoral) PCI·TAVR·EVAR·transseptal. Allen test·말초혈류 확인 필수.",
      },
      {
        src: "/images/anatomy/lower-limb-arteries-openstax.jpg",
        alt: "하지 동맥 해부도 앞면 뒷면 - 대퇴동맥, 굴곡동맥, 전경골, 후경골, 발등동맥",
        caption:
          "**다리(하지) 동맥 — 앞·뒤.** External iliac → Femoral → Popliteal → Anterior/Posterior tibial → Dorsalis pedis. 대퇴 puncture는 Femoral artery (inguinal ligament 아래). 출처: Wikimedia Commons, OpenStax, CC BY 3.0.",
      },
      {
        src: "/images/anatomy/thigh-arteries-schema.svg",
        alt: "대퇴부 동맥 상세 - femoral, profunda femoris, circumflex, genicular branches",
        caption:
          "**대퇴부 동맥 확대.** Common femoral · Profunda femoris(심대퇴) · Circumflex · Adductor hiatus → Popliteal. TAVR·EVAR sheath는 common femoral 경로. 출처: Wikimedia Commons, Mcstrother/Mikael Häggström, CC BY-SA 3.0.",
      },
      {
        src: "/images/anatomy/leg-arteries-blausen.png",
        alt: "하지 동맥 전체 경로 - 대동맥에서 발까지",
        caption:
          "**하지 동맥 한눈에.** Aorta → Iliac → Femoral → Popliteal → Tibial arteries → Foot. 말초혈류 확인: dorsalis pedis(발등)·posterior tibial(내측복사). 출처: Wikimedia Commons, Blausen Medical, CC BY 3.0.",
      },
      {
        src: "/images/anatomy/heart-great-vessels-diagram.svg",
        alt: "심장 대혈관 - 대동맥, 폐동맥, 상대정맥, 폐정맥, 좌우 심방심실",
        caption:
          "**심장 안·밖 대혈관.** 빨강=산소화 혈(Aorta, Pulmonary vein) · 파랑=비산소화 혈(Pulmonary artery, Vena cava). Aorta=좌심실→전신 · Pulmonary artery=우심실→폐. 출처: Wikimedia Commons, ZooFari, CC BY-SA 3.0.",
      },
      {
        src: "/images/anatomy/coronary-arteries-wikimedia-labeled.svg",
        alt: "관상동맥 해부 - RCA, LAD, LCX, PDA 등 라벨",
        caption:
          "**심장 동맥 = 관상동맥.** 심장 근육에 직접 혈을 공급. LM→LAD·LCX · RCA→PDA. PCI·조영의 핵심 혈관. 상세 → '관상동맥 구조' 항목. 출처: Wikimedia Commons, Patrick J. Lynch, CC BY-SA 3.0.",
      },
    ],
    imagesTitle: "해부 도해",
    imagesSubtitle: "Wikimedia Commons — 팔 · 다리 · 심장",
    measurementSteps: [
      "【팔 — 상지 동맥】 **Subclavian artery(쇄골하동맥)** → 팔·머리 쪽 큰 줄기 · **Axillary artery(액와동맥)** → 겨드랑이 · **Brachial artery(상완동맥)** → 팔꿈치까지 · **Radial artery(요골동맥)** → 엄지 쪽 손목·손 (조영실 **요골 접근**) · **Ulnar artery(천지동맥)** → 새끼 쪽 · **Superficial/Deep palmar arch** — 요골·천지가 손바닥에서 연결 (Allen test = 천지 막고 요골 혈류 확인)",
      "【팔 — 조영실 포인트】 **Puncture**: 요골 styloid(돌기) **위 2~3 cm** · **Sheath**: 5~7 Fr 흔함 · **CABG LHC**: **Left radial** 선호 (우요골은 graft 채취 팔이면 금기) · **압박**: TR band · **합병증**: radial artery occlusion, hematoma",
      "【다리 — 하지 동맥】 **External iliac artery(외장장골동맥)** → 사타구니 위 · **Femoral artery(대퇴동맥)** = inguinal ligament 아래 시작 · **Common femoral** → **Profunda femoris(심대퇴동맥)** 분지 (대퇴 근육 공급) · **Subsartorial/SFA** 구간 → adductor canal · **Popliteal artery(굴곡동맥)** = 무릎 뒤 · **Anterior tibial(전경골)** · **Posterior tibial(후경골)** · **Peroneal/Fibular(비골)** · **Dorsalis pedis(발등동맥)** = 말초혈류 확인",
      "【다리 — 조영실 포인트】 **Puncture**: femoral triangle — **mid-inguinal point** (ASIS~pubic symphysis 중간) · **Sheath**: 6~8 Fr (TAVR·EVAR는 더 큼) · **확인**: **발 dorsalis pedis/posterior tibial** 맥 · **합병증**: pseudoaneurysm, AV fistula, retroperitoneal bleed",
      "【심장 — 관상동맥】 심장 **근육**에 혈 공급 · **Left main(LM)** → **LAD(좌전하행지)** + **LCX(좌회선지)** · **RCA(우관상동맥)** → **PDA(후하행지)** · 조영·PCI 대상 → **'관상동맥 구조'** 항목 참고",
      "【심장 — 대혈관】 **Aorta(대동맥)**: **Ascending**(승모판 위) → **Arch**(brachiocephalic·좌쇄골하·좌경동맥) → **Descending**(흉부·복부) · **Pulmonary artery(폐동맥)**: 우심실 → 폐 (비산소화 혈) · **Pulmonary vein(폐정맥)**: 폐 → 좌심방 (산소화 혈) · TAVR = **대동맥·승모판** 경로",
      "【심장 — 혈류 방향 한줄】 전신 정맥 → RA → RV → **Pulmonary artery** → 폐 → **Pulmonary vein** → LA → LV → **Aorta** → 전신 · **Coronary artery** = 심장 벽 자체에 공급 (LV에서 관상동맥동으로)",
    ],
    stepsTitle: "부위별 동맥 정리",
    stepsSubtitle: "팔 · 다리 · 심장",
    tables: [
      {
        title: "팔(상지) 동맥 — 이름·경로·조영실",
        subtitle: "proximal → distal (심장 쪽 → 손 쪽)",
        columns: ["동맥 (한글)", "영문", "위치·다음 분지", "조영실"],
        rows: [
          ["쇄골하동맥", "Subclavian", "쇄골 아래 → 액와", "직접 puncture 드묾"],
          ["액와동맥", "Axillary", "겨드랑이", "—"],
          ["상완동맥", "Brachial", "팔 안쪽", "도플러·혈압 측정 위치"],
          ["**요골동맥**", "**Radial**", "엄지쪽 손목", "**LHC·PCI 요골 접근**"],
          ["천지동맥", "Ulnar", "새끼쪽", "Allen test"],
        ],
      },
      {
        title: "다리(하지) 동맥 — 이름·경로·조영실",
        subtitle: "proximal → distal",
        columns: ["동맥 (한글)", "영문", "위치·다음 분지", "조영실"],
        rows: [
          ["외장장골동맥", "External iliac", "사타구니 위", "대퇴의 연장"],
          ["**대퇴동맥**", "**Femoral**", "inguinal ligament 아래", "**PCI·TAVR·EVAR puncture**"],
          ["심대퇴동맥", "Profunda femoris", "대퇴 깊은 근육", "분지 — puncture 피함"],
          ["굴곡동맥", "Popliteal", "무릎 뒤", "무릎 아래로"],
          ["전경골동맥", "Anterior tibial", "전경골근 사이", "발등으로"],
          ["후경골동맥", "Posterior tibial", "내측복사", "말초혈류 확인"],
          ["발등동맥", "Dorsalis pedis", "발등", "말초혈류 확인"],
        ],
      },
      {
        title: "심장 동맥 — 관상동맥 + 대혈관",
        subtitle: "심장 근육 vs 심장 안·밖 혈류",
        columns: ["동맥", "영문", "역할", "조영실 연결"],
        rows: [
          ["**관상동맥**", "Coronary (LAD/LCX/RCA)", "심장 **근육** 공급", "**PCI·LHC 조영**"],
          ["대동맥", "Aorta", "LV → **전신**", "TAVR·대동맥 시술"],
          ["폐동맥", "Pulmonary artery", "RV → **폐**", "RV-PA catheter (Swan-Ganz)"],
          ["폐정맥", "Pulmonary vein", "폐 → LA", "AF ablation·LAA"],
          ["쇄골하·경동맥", "Subclavian, Carotid", "대동맥궁 분지", "TAVR 대안 접근"],
        ],
      },
    ],
    clinicalUse:
      "조영실·Cath Lab 간호사가 **puncture 부위·말초혈류 확인 위치·차트 기록**에 쓰는 기본 해부학입니다. 'Radial artery access', 'Common femoral puncture'를 들을 때 같은 그림을 그릴 수 있어야 합니다. 관상동맥 이름은 **'관상동맥 구조'** 항목에서 더 깊게 다루고, 여기서는 **팔·다리·심장 대혈관의 큰 그림**을 잡습니다. 시술별 접근 상세는 **'시술별 혈관 접근 정리'** 간호 항목과 함께 보면 좋습니다.",
    keyPoints: [
      "팔: Subclavian → Axillary → Brachial → **Radial**(요골 PCI)",
      "다리: Iliac → **Femoral**(대퇴 PCI·TAVR) → Popliteal → Tibial",
      "심장: **Coronary**(근육) + **Aorta**(전신) + **Pulmonary**(폐)",
      "요골 puncture: Allen test · 손 말초혈류",
      "대퇴 puncture: femoral triangle · 발 말초혈류",
      "관상동맥 상세 → '관상동맥 구조' 항목",
    ],
    relatedItems: [
      "관상동맥 구조",
      "시술별 혈관 접근 정리",
      "CABG LHC — 우요골 접근이 어려운 이유",
      "PCI",
      "TAVR",
      "EVAR",
      "Allen test",
    ],
    tags: ["해부생리학", "동맥", "요골", "대퇴", "관상동맥", "조영실", "이미지"],
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
  {
    slug: "hemostasis-thrombosis-antithrombotics",
    title: "혈액 응고와 항혈전제",
    englishName: "Hemostasis, Thrombosis & Antithrombotics",
    koreanName: "혈액 응고 경로 · 항혈소판제 · 항응고제",
    summary:
      "혈액이 굳는 1차(혈소판)·2차(응고계) 경로와, 항혈소판제·항응고제가 어느 단계를 막는지 조영실 관점에서 정리",
    summaryEn:
      "Primary (platelet) and secondary (coagulation cascade) hemostasis, and where antiplatelet and anticoagulant drugs act — cath lab perspective.",
    definition: [
      "**해부생리학**은 '몸 구조(해부학)'와 '그 구조가 어떻게 작동하는지(생리학)'를 함께 보는 것입니다. 여기서는 **혈액이 굳는(응고·혈전) 과정**과 **약이 그 과정을 막는 위치**를 정리합니다.",
      "정상적으로 혈액이 굳는 것을 **지혈(hemostasis)** 이라고 합니다. 상처가 나면 혈이 멈추도록 도와주는 **좋은 반응**입니다. 반면 혈관 안에서 불필요하게 굳으면 **혈전(thrombosis)** 이 되어 심근경색·뇌졸중·스텐트 혈전으로 이어질 수 있습니다.",
      "혈전 형성은 크게 **두 단계**로 생각하면 이해하기 쉽습니다. ① **1차 지혈 = 혈소판 단계** — 혈소판이 상처 부위에 달라붙고 서로 뭉침 ② **2차 지혈 = 응고계 단계** — 응고인자들이 연쇄 반응을 일으켜 **섬유소(fibrin) 그물**을 만들고, 혈소판 덮개 위에 견고한 혈전을 완성",
      "**비유**: 벽에 구멍이 났을 때, 먼저 **스펀지(혈소판)** 가 구멍을 막고, 그 위에 **시멘트(섬유소)** 를 바르는 것과 비슷합니다. 스펀지만으로는 약하고, 시멘트까지 있어야 단단해집니다.",
      "**항혈소판제**는 **1차(혈소판) 경로**를 막습니다. **항응고제**는 **2차(응고계) 경로**를 막습니다. 둘은 다른 길을 막으므로 **역할이 다릅니다**. PCI 후에는 주로 **DAPT(항혈소판 2종)**, 시술 중에는 **헤파린(항응고)**, 심방세동 등에서는 **DOAC/와파린(항응고)** 을 씁니다.",
      "조영실에서 자주 헷갈리는 점: **'혈소판 약 = 응고 약'이 아닙니다.** 아스피린을 먹고 있어도 시술 중 **헤파린**이 필요하고, 반대로 **와파린**을 쓰는 환자도 스텐트 후에는 **DAPT**가 추가될 수 있습니다(AF + PCI 시 **삼중요법**).",
      "한마디로, **'혈이 굳는 두 갈래 길'** 을 알면, **왜 아스피린+P2Y12인지, 왜 PCI 중 헤파린인지, 왜 AF 환자는 DOAC인지**가 한 번에 연결됩니다. 약물 상세 용량은 **약물 → DAPT / 항혈소판제 / 항응고제** 항목을 참고하세요.",
    ],
    images: [
      {
        src: "/images/anatomy/hemostasis-cascade.svg",
        alt: "혈액 응고 1차 혈소판 2차 응고계 경로와 항혈소판제 항응고제 작용점",
        caption:
          "1차(노랑)=혈소판 부착·활성화·응집, 2차(분홍)=응고인자 연쇄→thrombin→fibrin. 파란 박스=항혈소판제, 빨간 박스=항응고제. 조영실: PCI 중 헤파린, 스텐트 후 DAPT.",
      },
    ],
    imagesTitle: "응고 경로 도해",
    imagesSubtitle: "1차·2차 지혈 + 약물 작용점",
    measurementSteps: [
      "【1차 지혈 — 혈소판 단계】 ① 혈관 내피(endothelium) 손상 → 아래 조직·콜라겐 노출 ② **vWF(von Willebrand factor)** 가 콜라겐에 달라붙고 혈소판을 끌어당김 ③ 혈소판 **부착(adhesion)** → **활성화(activation)** ④ 활성화된 혈소판이 **ADP·thromboxane A2(TxA2)** 를 보냄 ⑤ 주변 혈소판이 더 뭉침 → **응집(aggregation)** ⑥ 끝단에서 **GP IIb/IIIa** 수용체가 fibrinogen을 잡아 혈소판끼리 다리를 놓음",
      "【2차 지혈 — 응고계】 ① **외인성 경로**: 조직 손상 → **조직인자(TF)** 노출 → factor VIIa 활성화 ② **내인성 경로**: factor XII 등 접촉 활성화(혈관 손상 시 보조) ③ 두 경로가 합쳐져 **factor X → Xa** ④ **Xa + Va + Ca²⁺ + phospholipid** = **prothrombinase** ⑤ **Prothrombin(II) → Thrombin(IIa)** ⑥ Thrombin이 **fibrinogen → fibrin(섬유소)** 으로 바꿈 + factor XIII가 교차결합 → **견고한 혈전** ⑦ Thrombin은 혈소판도 더 활성화(1차와 2차가 서로 증폭)",
      "【병리적 혈전 — 조영실 맥락】 관상동맥 **플라크 파열** → 혈소판 응집 + 응고 → **관상동맥 혈전** → ACS. **PCI·스텐트** 후 금속 표면에 혈소판·fibrin이 쌓이면 **스텐트 혈전(stent thrombosis)**. **심방세동**에서는 심방 안 정체 → **심방 혈전** → 뇌졸중·전신 색전",
      "【항혈소판제가 막는 곳】 **아스피린**: COX-1 억제 → **TxA2 생성 ↓** → 혈소판 응집 약화(비가역적). **P2Y12 억제제**(클로피도그렐·티카그렐러·프라수그렐): **ADP 수용체** 차단 → 활성화·응집 ↓. **GP IIb/IIIa 억제제**(abciximab 등): 최종 공통 경로 차단(시술 중 IV, 현재는 덜 흔함). → **DAPT = 아스피린 + P2Y12** 로 두 갈래 동시 차단",
      "【항응고제가 막는 곳】 **UFH/LMWH**: **항트롬빈 III(AT)** 와 결합 → **Xa·thrombin(IIa)** 억제(LMWH는 주로 Xa). **와파린**: 비타민 K 억제 → **II·VII·IX·X** 합성 감소. **DOAC — Xa 억제제**(리바록사반·아픽사반·에독사반): **factor Xa** 직접 차단. **DOAC — thrombin 억제제**(다비가트란): **thrombin(IIa)** 직접 차단. **비발루루딘**: thrombin 직접 억제(헤파린 대안, HIT 시). **폰다파리눅스**: Xa 선택 억제",
      "【조영실에서의 조합】 **PCI 시술 중**: UFH(ACT 모니터) 또는 비발루루딘 — **응고계** 억제. **스텐트 삽입 후**: **DAPT** — **혈소판** 억제(6~12개월). **AF + 최근 스텐트**: 항응고 + DAPT = **삼중요법**(출혈 위험↑, 기간 단축 검토). **진단 조영만**: 헤파린만 쓰는 경우 많음, DAPT는 PCI 시 시작",
      "【검사로 보는 응고】 **ACT**: 시술 중 UFH 효과(목표 250~300초 등). **aPTT**: UFH drip·LMWH·아르가트로반. **INR**: 와파린(목표 2~3). **anti-Xa**: LMWH·DOAC(특수). **혈소판 수**: HIT 의심, baseline",
    ],
    stepsTitle: "경로별 정리",
    stepsSubtitle: "1차 혈소판 · 2차 응고계 · 약물 작용점",
    tables: [
      {
        title: "혈액이 굳는 경로 — 1차 vs 2차",
        subtitle: "단계 · 핵심 물질 · 결과",
        columns: ["단계", "무슨 일이?", "핵심 물질", "결과"],
        rows: [
          [
            "**1차 — 혈소판**",
            "상처에 혈소판 달라붙고 뭉침",
            "vWF, ADP, TxA2, GP IIb/IIIa",
            "일차 혈소판 플러그(빠름, 약함)",
          ],
          [
            "**2차 — 응고계**",
            "응고인자 연쇄 → 섬유소 그물",
            "TF, Xa, thrombin(IIa), fibrin",
            "견고한 혈전(느림, 단단함)",
          ],
          [
            "**병리 혈전**",
            "혈관 안에서 불필요하게 진행",
            "플라크 파열, 스텐트, AF 정체",
            "MI, stroke, stent thrombosis",
          ],
        ],
      },
      {
        title: "항혈소판제 — 어디를 막나?",
        subtitle: "약물군 · 작용 지점 · 대표 약물 (상세 → 약물 항목)",
        columns: ["약물군", "막는 경로", "대표 약물", "조영실에서"],
        rows: [
          [
            "**아스피린**",
            "COX-1 → **TxA2 ↓**",
            "Aspirin (Bayer 등)",
            "모든 PCI/ACS 기본",
          ],
          [
            "**P2Y12 억제제**",
            "**ADP 수용체** 차단",
            "Plavix, Brilinta, Effient",
            "DAPT의 두 번째 약",
          ],
          [
            "**GP IIb/IIIa**",
            "최종 응집 공통 경로",
            "Abciximab (ReoPro)",
            "고위험 PCI 시 IV(드묾)",
          ],
          [
            "**DAPT**",
            "TxA2 + ADP **동시**",
            "아스피린 + P2Y12",
            "스텐트 후 6~12개월",
          ],
        ],
      },
      {
        title: "항응고제 — 어디를 막나?",
        subtitle: "약물군 · 작용 지점 · 모니터링",
        columns: ["약물군", "막는 경로", "대표 약물", "모니터링"],
        rows: [
          [
            "**UFH**",
            "AT → **Xa·IIa**",
            "Heparin sodium",
            "**ACT**(시술 중)",
          ],
          [
            "**LMWH**",
            "AT → 주로 **Xa**",
            "Clexane, Fragmin",
            "anti-Xa(특수), Cr",
          ],
          [
            "**와파린**",
            "비타민 K → **II·VII·IX·X**",
            "Coumadin, Marevan",
            "**INR**",
          ],
          [
            "**Xa 억제 DOAC**",
            "**factor Xa** 직접",
            "Xarelto, Eliquis, Lixiana",
            "루틴 없음(출혈 시 anti-Xa)",
          ],
          [
            "**IIa 억제 DOAC**",
            "**thrombin** 직접",
            "Pradaxa",
            "aPTT/TT(특수)",
          ],
          [
            "**비발루루딘**",
            "**thrombin** 직접",
            "Angiomax",
            "ACT, HIT 대안",
          ],
        ],
      },
      {
        title: "조영실 상황별 — 무슨 약?",
        subtitle: "상황 · 주로 쓰는 약 · 이유",
        columns: ["상황", "주로 쓰는 약", "막는 단계", "기억할 점"],
        rows: [
          [
            "PCI 시술 **중**",
            "UFH 또는 비발루루딘",
            "2차 응고계",
            "ACT 목표 달성·기록",
          ],
          [
            "스텐트 **후**",
            "**DAPT**",
            "1차 혈소판",
            "임의 중단 금지",
          ],
          [
            "AF + 스텐트",
            "항응고 + DAPT",
            "1차 + 2차",
            "삼중요법, 출혈↑",
          ],
          [
            "진단 조영만",
            "UFH(단회)",
            "2차 응고계",
            "PCI 없으면 DAPT 미시작",
          ],
          [
            "HIT 의심 PCI",
            "비발루루딘",
            "thrombin(헤파린 무관)",
            "헤파린 금기",
          ],
        ],
      },
    ],
    clinicalUse:
      "조영실·CCU·응급실에서 '왜 이 환자에게 헤파린과 DAPT를 같이 쓰는지', '와파린 복용 환자 PCI 시 뭘 조심하는지'를 설명할 때 쓰는 기초 해부생리학입니다. 간호사는 시술 전 **항혈소판·항응고 병력**, 시술 중 **헤파린 용량·ACT**, 시술 후 **DAPT 처방·시작 시간**을 연결해서 기록합니다. 약물 용량·브랜드·리버설은 각 약물 항목을 참고하세요.",
    keyPoints: [
      "지혈 = 1차(혈소판) + 2차(응고계/fibrin)",
      "항혈소판제 → 혈소판 경로 (DAPT = 아스피린 + P2Y12)",
      "항응고제 → 응고인자·thrombin·Xa 경로",
      "PCI 중: 헤파린(ACT) / 스텐트 후: DAPT",
      "혈소판 약 ≠ 응고 약 — 역할이 다름",
      "AF+스텐트: 삼중요법(항응고+DAPT) 가능",
    ],
    relatedItems: [
      "DAPT",
      "항혈소판제",
      "항응고제",
      "조영 전 항혈소판제 로딩",
      "PCI",
      "스텐트 혈전",
      "ACT",
      "HIT",
    ],
    tags: ["해부생리학", "응고", "혈전", "항혈소판", "항응고", "조영실", "이미지"],
  },
];

export function getCardiovascularAnatomyBySlug(
  slug: string,
): KnowledgeArticle | undefined {
  return cardiovascularAnatomy.find((item) => item.slug === slug);
}
