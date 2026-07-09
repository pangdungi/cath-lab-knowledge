import type { KnowledgeArticle } from "@/types/knowledge-article";

export const cardiovascularDiseases: KnowledgeArticle[] = [
  {
    slug: "tricuspid-regurgitation",
    title: "Tricuspid Regurgitation",
    englishName: "Tricuspid Regurgitation (TR)",
    koreanName: "삼첨판 폐쇄부전",
    summary:
      "삼첨판이 제대로 닫히지 않아, 오른심실에서 오른심방으로 피가 역류하는 상태",
    summaryEn:
      "Tricuspid regurgitation is when the tricuspid valve leaks and blood flows backward from the right ventricle into the right atrium.",
    definition: [
      "삼첨판은 오른심방과 오른심실 사이의 문입니다. 심장이 뛸 때(수축기) 이 문이 닫혀야 피가 폐동맥 쪽으로만 나가는데, TR은 문이 완전히 닫히지 않아 피가 다시 심방 쪽으로 새는 상태입니다.",
      "가벼운 역류는 건강한 사람에서도 흔히 볼 수 있지만, 중등도 이상이면 오른심방·오른심실이 점점 커지고, 목정맥이 부어 보이거나 다리가 붓는 등 오른심부전 증상이 나타날 수 있습니다.",
      "원인은 크게 삼첨판 자체 문제(감염, 외상, 인공판막 문제)와, 오른심실이 너무 커져서 판막이 제대로 닫히지 못하는 경우(폐고혈압, 왼심부전으로 인한 오른심 부담 증가 등)로 나눌 수 있습니다.",
      "조영실에서는 주로 오른심 카테터검사(RHC)나 심장초음파 소견을 함께 보며, 오른심이 얼마나 부담받고 있는지 평가할 때 중요하게 다룹니다.",
    ],
    clinicalUse:
      "심부전·폐고혈압·판막질환 환자에서 오른심 기능 평가 시 핵심 질환 중 하나입니다. RHC에서 오른심방 압력 파형에 큰 V파가 보이거나, 심초음파에서 심한 TR이 확인되면 오른심 부담이 크다는 뜻으로 해석합니다. 조영실 팀은 TR 환자의 정맥 울혈, 신기능, 체액 상태를 시술 전후로 꼼꼼히 봐야 합니다.",
    keyPoints: [
      "심초음파가 가장 먼저 보는 검사, TR 정도(경도/중등도/중증) 평가",
      "RHC에서 오른심방 압력 상승 + 뚜렷한 V파 → 역류가 임상적으로 의미 있을 수 있음",
      "중증 TR + 증상 → 오른심부전 치료, 원인 치료(폐고혈압 등), 필요 시 수술/경피적 치료 검토",
      "조영실 주의: 정맥 울혈·부종 환자는 시술 전후 체액·전해질·신기능 모니터링",
    ],
    relatedItems: ["RHC", "Right Heart Failure", "Pulmonary Hypertension", "Mitral Regurgitation"],
    tags: ["판막질환", "오른심", "심부전", "RHC"],
  },
  {
    slug: "mitral-regurgitation",
    title: "Mitral Valve Regurgitation",
    englishName: "Mitral Regurgitation (MR)",
    koreanName: "승모판 폐쇄부전",
    summary:
      "승모판이 제대로 닫히지 않아, 왼심실에서 왼심방으로 피가 역류하는 상태 — 급성·만성, 원발성·속발성으로 구분",
    summaryEn:
      "Mitral regurgitation is leakage of the mitral valve, with blood flowing backward from the left ventricle into the left atrium — classified as acute/chronic and primary/secondary.",
    definition: [
      "승모판(Mitral valve)은 **왼심방(LA)과 왼심실(LV) 사이**의 문입니다. 심장이 뛸 때(수축기) 이 문이 닫혀야 피가 **대동맥**으로만 나가는데, **MR(승모판 폐쇄부전)** 은 문이 완전히 닫히지 않아 피가 **다시 왼심방으로 새는** 상태입니다.",
      "심초음파 보고서의 **'MR', 'Mitral regurgitation', '승모판 역류'** 는 모두 같은 뜻입니다. 정도는 **trace(미세) · mild(경도) · moderate(중등도) · severe(중증)** 로 나뉩니다.",
      "**원발성 MR(primary, degenerative)** : 승모판 **자체**가 망가짐 — 승모판 탈출증(MVP), 류마티스, 감염성 심내막염, chordae(건도) 파열, 외상 등. **속발성 MR(secondary, functional)** : 판막은 얇아 보이지만 **왼심실이 확장·기능 저하**되어 잎이 맞닿지 못함 — 허혈성 심근병증, 확장성 심근병증, MI 후 등.",
      "**만성 MR**은 천천히 진행하며 LA가 점점 커져 **비교적 오래 버티는** 경우가 많습니다. **급성 MR**은 chordae·유두근 파열·심내막염 등으로 **갑자기 심해져** 폐부종·쇼크로 응급 상황이 됩니다 — 조영실·응급실에서 매우 위험합니다.",
      "한마디로, **'왼심실→왼심방으로 피가 역류하는 승모판 누출'** 이며, 정도·급성/만성·원인에 따라 치료와 조영실 주의가 달라집니다.",
    ],
    measurementSteps: [
      "【해부 위치】 Mitral valve = LA ↔ LV 사이 · 잎(leaflet) 2개(전잎·후잎) · chordae tendineae · 유두근(papillary muscle)이 잎을 당김 → 이 중 어디가 망가져도 MR",
      "【정상 혈류 vs MR】 정상: LV 수축 → 승모판 닫힘 → 피가 대동맥으로 / MR: LV 수축 시 일부 피가 **LA로 역류** → LA 압↑ → 폐정맥압↑ → **폐부종·호흡곤란**",
      "【심초음파에서 보는 것】 역류 **정도(grade)** , **역류 jet** 방향·넓이, **vena contracta**, **EROA**(유효 역류 구멍), **regurgitant volume**, **LA/LV 크기**, **LVEF**(박출률), **폐동맥압**. 'Moderate MR' = 중등도, 'Severe MR' = 중증",
      "【원인 구분】 원발성: MVP, chordae 파열, 류마티스, 심내막염 / 속발성: MI 후 LV 확장, ischemic·dilated cardiomyopathy / **급성**: 유두근·chordae 파열, 심내막염, 급한 valve injury",
      "【증상】 경도: 무증상 가능 / 중등도~중증: **숨참, 피로, 두근거림(AF)**, 운동 내성 저하 / 급성 중증: **급성 폐부종, 저혈압, 쇼크**",
      "【만성 중증 MR의 진행】 LA 비대 → 이후 LV dysfunction → 심부전 · **AF** 흔함(심방이 커지면서) · 수술/경피적 치료 시기는 증상·LVEF·LV 크기로 결정",
      "【치료 방향】 경도·무증상: 추적 / 중등도: 원인 치료, 증상 관리 / 중증·증상: **수술(판막 성형·교환)** 또는 **MitraClip, TMVR** 등 경피적 시술 / 급성 중증: **응급 수술** 검토, IABP·기계환기 등 혈역학 지원",
      "【조영실에서 MR이 중요한 이유】 ① **MitraClip·TMVR** 환자 ② **PCI 전** LV 기능·폐부종 평가 ③ **급성 MI 후** 유두근 파열 의심 → 조영 전 TEE/심초음파 ④ **HOCM**에서 SAM(승모판 전혈) → 동적 MR ⑤ MR 심한 환자는 **수액·조영제 부담**에 폐부종 악화 주의",
    ],
    stepsTitle: "MR 이해하기",
    stepsSubtitle: "원인 · 정도 · 급성 vs 만성",
    clinicalUse:
      "심초음파 보고서에서 가장 흔히 보는 판막질환 중 하나입니다. structural lab에서는 MitraClip·TMVR 적응 평가의 핵심이고, 관상동맥 조영실에서는 'MR이 있는 환자'의 호흡 상태·LV 기능·시술 내성을 반드시 확인합니다. 급성 중증 MR은 PCI 전에 먼저 잡아야 할 혈역학 문제이고, 만성 중증 MR은 수술 없이 PCI만 계획할 때 예후에 영향을 줍니다. TR과 달리 **왼심·폐 쪽 울혈**이 핵심이라 산소포화도·폐부종·이뇨제 필요 여부를 시술 전후로 봅니다.",
    nursingCare: {
      pre: [
        "심초음파 MR 정도(mild/moderate/severe)·급성 vs 만성 병력 확인",
        "호흡곤란·폐부종·산소포화도·이뇨제 사용 여부",
        "LVEF·LA/LV 크기·AF 여부 확인",
        "MitraClip/TMVR 예정 시 TEE 계획·NPO 확인",
        "급성 MR 의심(최근 MI, 급한 호흡곤란) → 응급 평가 우선",
      ],
      post: [
        "호흡·SpO₂·폐수포음·혈압 지속 모니터",
        "수액 과다 주의 — 폐부종 악화 가능",
        "MitraClip/TMVR 후 잔존 MR·저혈압·출혈 확인",
        "새로운 AF·빈맥·폐부종 증상 즉시 보고",
        "퇴원 시 증상 악화 시 연락·외래 추적 안내",
      ],
    },
    keyPoints: [
      "MR = LV → LA 역류 (승모판 누출)",
      "원발성(판막 자체) vs 속발성(LV 확장·기능저하)",
      "급성 중증 MR = 응급 — 폐부종·쇼크",
      "심초음파: grade, LVEF, LA/LV 크기, 폐압",
      "치료: 추적 / MitraClip·TMVR·수술(중증)",
      "조영실: 호흡·수액·LV 기능 — 폐부종 주의",
    ],
    relatedItems: [
      "판막 해부학",
      "MitraClip",
      "TMVR",
      "Tricuspid Regurgitation",
      "Heart Failure",
      "HCM",
    ],
    tags: ["판막질환", "승모판", "MR", "심초음파", "structural"],
  },
  {
    slug: "hcm",
    title: "HCM",
    englishName: "Hypertrophic Cardiomyopathy",
    koreanName: "비대성 심근병증",
    summary:
      "심장 근육(특히 중격)이 비정상적으로 두꺼워져, 심장이 뛰거나 피가 나갈 때 문제를 일으키는 질환",
    summaryEn:
      "HCM is a disease where the heart muscle becomes abnormally thick, often causing obstruction or heart failure symptoms.",
    definition: [
      "HCM(비대성 심근병증)은 심장 근육이 유전적·구조적 이유로 비정상적으로 두꺼워지는 질환입니다. 가장 흔히 심장 중격(벽)이 두꺼워집니다.",
      "심장 근육이 두꺼우면 심장 안 공간이 줄고, 심장이 뛸 때 피가 나가는 길(좌심실 유출로)이 막힐 수 있습니다. 이를 폐쇄성 비대성 심근병증(HOCM)이라고 부릅니다.",
      "흔한 증상은 운동 시 숨참, 흉통, 어지럼·실신, 두근거림입니다. 가벼워 보이는 환자도 갑작스러운 심장성 사망 위험이 있어 주의가 필요합니다.",
      "진단은 주로 심초음파로 합니다. 심벽 두께가 기준 이상 두꺼우면 의심하고, 가족력이 있으면 더 적극적으로 봅니다.",
      "한마디로, '심장 근육이 두꺼워져서 심장이 제대로 일하지 못하는 질환'입니다.",
    ],
    clinicalUse:
      "젊은 환자의 실신, 운동 시 증상, 가족력 있는 심근병증에서 가장 먼저 떠올려야 할 질환 중 하나입니다. 조영실에서는 HOCM 환자의 혈역학(특히 좌심실 유출로 압력 차이), 승모판 전혈(systolic anterior motion, SAM), 부정맥 여부를 주의 깊게 봅니다. 시술·마취·수액 관리에서 혈압·심박출 변화가 크게 나타날 수 있어 팀 전체가 환자 상태를 면밀히 모니터링해야 합니다.",
    keyPoints: [
      "핵심: 심근 비대, 특히 중격 두꺼워짐",
      "HOCM: 심장이 뛸 때 좌심실 유출로 협착 → 막힘·실신·흉통",
      "심초음파가 가장 중요한 진단 검사",
      "갑작스러운 심장성 사망 위험 → 부정맥·실신 평가 중요",
      "조영실 주의: 수액·혈압·리듬 변화에 민감, 증상 악화 여부 모니터링",
      "치료: 약물, ICD, 필요 시 판막 아래 심근 절제술 등",
    ],
    relatedItems: ["HOCM", "Subvalvular Myomectomy", "LVOT Obstruction"],
    tags: ["심근병증", "유전질환", "심초음파", "실신"],
  },
  {
    slug: "right-vs-left-heart-failure",
    title: "오른심부전 vs 왼심부전",
    englishName: "Right Heart Failure vs Left Heart Failure",
    koreanName: "오른심부전과 왼심부전의 차이",
    summary:
      "왼심부전은 폐에 물이 차는 쪽, 오른심부전은 몸 전체 정맥에 물이 차는 쪽으로 이해하면 쉽다",
    summaryEn:
      "Left heart failure backs up into the lungs; right heart failure backs up into the body veins — that is the core difference.",
    definition: [
      "심부전은 '심장이 피를 제대로 펌프질하지 못해 몸에 피가 몰리는 상태'입니다. 그런데 어느 쪽 심장이 먼저/주로 문제인지에 따라 증상이 달라집니다.",
      "왼심부전은 왼심실이 약해져 폐로 피를 보내지 못하고, 폐 쪽에 피가 몰리는 상태입니다. 그래서 숨이 차고, 누워 있기 어렵고, 기침·가래가 나타나기 쉽습니다.",
      "오른심부전은 오른심실이 약해져 온몸의 정맥 쪽으로 피가 잘 안 넘어가고, 몸에 물이 차는 상태입니다. 다리가 붓고, 목정맥이 부풀고, 배가 불러 오르기 쉽습니다.",
      "실제로는 왼심부전이 오래가면 폐혈관 압력이 올라 오른심부전으로 이어지는 경우가 많아, 둘 다 있는 환자도 흔합니다.",
      "한마디로, 왼심부전은 '폐 쪽 울혈', 오른심부전은 '전신 정맥 울혈'로 기억하면 됩니다.",
    ],
    measurementSteps: [
      "어느 심장이 문제인가? → 왼심부전: 왼심실 펌프 약함 / 오른심부전: 오른심실 펌프 약함",
      "대표 증상 → 왼심부전: 숨참, 누워 있기 힘듦, 폐수종 / 오른심부전: 다리 부종, 목정맥 부풂, 피로",
      "신체 진찰 → 왼심부전: 양쪽 폐 수포음(rales) / 오른심부전: JVD(목정맥 울혈), 간비종, 하지부종",
      "RHC에서 보는 값 → 왼심부전: PCWP(폐캡illary 쐐기압) 상승 / 오른심부전: RA·RVEDP 상승",
      "원인 예시 → 왼심부전: 고혈압, 관상동맥질환, 판막질환 / 오른심부전: 폐고혈압, TR, 왼심부전 장기화",
      "치료 방향 → 왼심부전: 이뇨제, 혈압·심박수 조절, 원인 치료 / 오른심부전: 원인 치료(폐고혈압 등), 이뇨제, 수분·염분 조절",
      "조영실에서 → 왼심부전 환자: 호흡·산소포화도·폐울혈 주의 / 오른심부전 환자: 수액 과다 주의, 하지부종·신기능·정맥 울혈 확인",
    ],
    stepsTitle: "차이 한눈에 보기",
    stepsSubtitle: "왼심부전 vs 오른심부전",
    clinicalUse:
      "심부전 환자를 조영실·병동·외래에서 볼 때 가장 기본적인 구분입니다. 환자가 '숨이 찬다'면 왼심부전을, '다리가 붓는다'면 오른심부전을 먼저 떠올리되, 둘 다 있을 수 있음을 항상 염두에 둡니다. RHC나 심초음파 결과를 읽을 때도 PCWP 상승(왼쪽)과 RA 상승(오른쪽)을 구분해 해석합니다.",
    keyPoints: [
      "왼심부전 = 폐 쪽에 피·물이 몰림 (pulmonary congestion)",
      "오른심부전 = 전신 정맥 쪽에 피·물이 몰림 (systemic venous congestion)",
      "왼심부전이 오래되면 오른심부전으로 진행되는 경우 많음",
      "증상·진찰·RHC 수치로 어느 쪽인지 구분",
      "조영실: 왼쪽 문제 → 호흡/산소, 오른쪽 문제 → 수액·부종 관리",
    ],
    relatedItems: ["RHC", "Tricuspid Regurgitation", "Pulmonary Hypertension"],
    tags: ["심부전", "오른심", "왼심", "비교"],
  },
  {
    slug: "pulmonary-hypertension",
    title: "폐고혈압",
    englishName: "Pulmonary Hypertension (PH)",
    koreanName: "폐동맥 고혈압",
    summary:
      "폐동맥(심장에서 폐로 가는 혈관) 안 압력이 높아져, 오른심장이 점점 힘들어지는 상태",
    summaryEn:
      "Pulmonary hypertension is high pressure in the lung arteries, which makes the right heart work harder and can lead to right heart failure.",
    definition: [
      "폐고혈압은 폐동맥 안 압력이 정상보다 높은 상태입니다. 쉽게 말해 '심장에서 폐로 보내는 혈관이 좁아지거나 막혀서, 오른심실이 피를 밀어 넣기 힘든 상황'입니다.",
      "처음에는 특별한 증상이 없을 수 있지만, 진행되면 운동할 때 숨이 차고, 피로하고, 가끔 실신하기도 합니다. 오래되면 오른심부전(다리 부종, 목정맥 부풂)으로 이어질 수 있습니다.",
      "원인은 여러 가지입니다. 폐 자체 질환(만성 폐질환), 왼심부전, 혈전, 원인 불명(특발성) 등으로 나눕니다. 원인에 따라 치료가 완전히 달라집니다.",
      "확진은 주로 RHC(오른심 카테터검사)로 합니다. 폐동맥 압력이 높은지, 어느 부위에서 막히는 느낌인지 직접 재어 확인합니다.",
      "한마디로, '폐 쪽 혈관 압력이 높아서 오른심장이 과부하되는 질환'입니다.",
    ],
    clinicalUse:
      "호흡곤란 원인 감별, TR·오른심부전 환자 평가, 조영실 RHC에서 자주 확인하는 질환입니다. 폐고혈압 환자는 오른심이 약한 상태일 수 있어, 조영 시 수액을 과하게 주면 증상이 악화될 수 있습니다. 산소포화도, 혈압, 호흡 상태를 꼼꼼히 모니터링하고, 시술 후에도 부종·피로 악화 여부를 봅니다.",
    keyPoints: [
      "핵심: 폐동맥 압력 상승 → 오른심실 부담 증가",
      "흔한 증상: 운동 시 숨참, 피로, 실신, 오른심부전",
      "RHC가 진단과 원인 감별에 가장 중요",
      "원인별 치료가 다름 (약물, 산소, 항응고, 원인 질환 치료 등)",
      "조영실 주의: 수액 과다 금지, 산소·호흡·혈압 모니터링 강화",
    ],
    relatedItems: ["RHC", "Right Heart Failure", "Tricuspid Regurgitation"],
    tags: ["폐혈관", "오른심", "RHC", "호흡곤란"],
  },
  {
    slug: "laa",
    title: "LAA",
    englishName: "Left Atrial Appendage",
    koreanName: "좌심이귀",
    summary:
      "왼심방 옆에 달린 주머니 모양 구조로, 심방세동 때 혈전이 잘 생기는 대표적인 부위",
    summaryEn:
      "The left atrial appendage is a pouch-like structure off the left atrium where clots often form in atrial fibrillation.",
    definition: [
      "LAA(Left Atrial Appendage, 좌심이귀)는 왼심방 옆에 붙어 있는 주머니 모양의 작은 구조입니다. 모양은 사람마다 다르고, 크기도 제각각입니다.",
      "정상 리듬에서는 큰 문제가 없어 보일 수 있지만, 심방세동(AF)이 되면 좌심이귀 안에서 혈액이 잘 정체되어 혈전이 생기기 쉽습니다.",
      "이 혈전이 떨어져 나가 뇌혈관을 막으면 뇌졸중이 될 수 있어, AF 환자의 뇌졸중 예방에서 LAA는 매우 중요한 부위입니다.",
      "그래서 항응고 약(와파린, DOAC 등)을 쓰거나, 약을 못 쓰는 환자에게는 Watchman 같은 좌심이귀 폐쇄술을 고려합니다.",
      "한마디로, 'AF에서 혈전이 잘 생기는 왼심방의 주머니'입니다.",
    ],
    clinicalUse:
      "AF 환자의 뇌졸중 위험 평가, 항응고 처방, Watchman 시술 계획에서 핵심 구조입니다. TEE(경식도 초음파)로 좌심이귀에 혈전이 있는지 확인하고, 시술 전 좌심이귀 크기·형태를 재어 기구 크기를 정합니다. 조영실/EP Lab에서는 'LAA thrombus 의심' 환자의 시술 시기와 항응고 계획을 특히 신중하게 결정합니다.",
    keyPoints: [
      "LAA = Left Atrial Appendage = 좌심이귀",
      "AF에서 혈전 형성의 대표 부위",
      "뇌졸중 예방이 임상적으로 가장 중요한 이유",
      "TEE로 혈전 여부·크기·형태 확인",
      "Watchman 시술과 직접 연결되는 구조",
    ],
    relatedItems: ["Atrial Fibrillation", "Watchman Device", "TEE"],
    tags: ["해부", "좌심방", "AF", "혈전"],
  },
  {
    slug: "red-man-syndrome",
    title: "Red Man Syndrome",
    englishName: "Red Man Syndrome",
    koreanName: "레드맨 증후군",
    summary:
      "반코마이신을 너무 빨리 맞을 때 상체가 빨갛게 달아오르고 가려운 반응",
    summaryEn:
      "Red man syndrome is a flushing reaction during rapid vancomycin infusion, causing redness and itching of the upper body.",
    definition: [
      "Red Man Syndrome(레드맨 증후군)은 주로 반코마이신(vancomycin)을 빠르게 주입할 때 나타나는 이상반응입니다.",
      "얼굴·목·상체가 갑자기 빨갛게 달아오르고(red flush), 가렵고 따끔한 느낌이 날 수 있습니다. 그래서 '빨간 사람'이라는 이름이 붙었습니다.",
      "알레르기 쇼크와 비슷해 보일 수 있지만, 보통은 histamine(히스타민) 방출과 관련된 반응이고, 주입 속도를 늦추면 많이 좋아집니다.",
      "드물게는 저혈압, 호흡곤란 같은 증상이 같이 올 수 있어, 조영실·병동에서 수액/항생제 주입 중 반드시 환자를 지켜봐야 합니다.",
      "한마디로, '반코마이신 빠른 주입 때문에 상체가 빨개지는 반응'입니다.",
    ],
    measurementSteps: [
      "수액/반코마이신 주입 중 환자가 갑자기 얼굴·목·상체 홍조, 가려움을 호소하는지 확인합니다.",
      "혈압, 맥박, 호흡, 산소포화도를 즉시 재고 의식 상태를 봅니다.",
      "반코마이신 주입을 바로 멈추거나 속도를 크게 늦춥니다.",
      "증상이 심하면 생리식염수로 수액을 유지하고, 필요 시 항히스타민제를 투여합니다.",
      "저혈압·호흡곤란이 있으면 응급 프로토콜에 따라 의료진을 호출합니다.",
      "증상이 가라앉으면 이후 반코마이신은 반드시 느린 속도로 재투여합니다.",
      "진정한 항생제 알레르기와 구분하기 위해 반응 시간·패턴·재투여 반응을 기록합니다.",
    ],
    stepsTitle: "대응 순서",
    stepsSubtitle: "발생 시 단계별로",
    clinicalUse:
      "조영실·중환자실·일반 병동에서 반코마이신 예방/치료 주입 시 흔히 마주칩니다. 심장 카테터 시술 전 항생제로 반코마이신을 쓰는 경우도 있어, 간호사는 주입 속도 준수와 초기 증상 인지가 매우 중요합니다. 겉으로는 알레르기처럼 보여 panic이 생길 수 있지만, 대부분 주입 중단·감속·항히스타민으로 조절됩니다.",
    keyPoints: [
      "주원인: 반코마이신 빠른 주입",
      "증상: 상체 홍조, 가려움, 따끔함 (± 저혈압)",
      "즉시 조치: 주입 중단/감속 + 활력징후 확인",
      "예방: 충분히 느린 주입 속도 유지",
      "조영실: 항생제 라인·주입속도·환자 피부색 지속 관찰",
    ],
    relatedItems: ["Vancomycin", "Anaphylaxis", "Antibiotic Prophylaxis"],
    tags: ["약물반응", "반코마이신", "조영실", "응급"],
  },
  {
    slug: "pda",
    title: "PDA",
    englishName: "Patent Ductus Arteriosus",
    koreanName: "동맥관 개존증",
    summary:
      "태아 때 있던 폐동맥-대동맥 사이 연결 혈관(동맥관)이 출생 후에도 닫히지 않아, 피가 왼쪽에서 오른쪽으로 새는 선천성 심장질환",
    summaryEn:
      "PDA is a congenital heart defect where the ductus arteriosus fails to close after birth, causing a left-to-right shunt from the aorta to the pulmonary artery.",
    definition: [
      "PDA(Patent Ductus Arteriosus, 동맥관 개존증)는 태아 시기에 폐동맥과 대동맥을 잇던 작은 혈관인 '동맥관(ductus arteriosus)'이 출생 후에도 닫히지 않은 상태입니다.",
      "정상적으로는 태아가 엄마 뱃속에 있을 때 이 혈관이 폐로 가지 않고 대동맥 쪽으로 피가 흐르게 해 줍니다. 출생 후 호흡이 시작되면 동맥관은 보통 며칠 안에 스스로 닫혀야 합니다.",
      "닫히지 않으면 대동맥(압이 높은 쪽)에서 폐동맥(압이 낮은 쪽)으로 피가 계속 새어 나갑니다. 이를 '좌→우 단락(left-to-right shunt)'이라고 합니다.",
      "작은 PDA는 증상이 없을 수 있지만, 큰 PDA는 폐로 피가 너무 많이 가서 숨이 차고, 땀을 많이 흘리고, 체중 증가가 잘 안 되는 등 심부전 비슷한 증상이 나타날 수 있습니다. 오래되면 폐혈관이 손상되어 폐고혈압으로 이어질 수 있습니다.",
      "한마디로, '출생 후에도 닫히지 않은 태아용 우회 혈관 때문에 심장·폐에 부담이 생기는 질환'입니다.",
    ],
    measurementSteps: [
      "어디서 새는가? → 대동맥 → 폐동맥 방향으로 좌→우 단락",
      "심초음파에서 보는 것 → 동맥관 부위 연속성 잡음(continuous murmur), 좌심방·좌심실 확장 여부",
      "크기·중증도 → 작은 PDA: 증상 없을 수 있음 / 큰 PDA: 호흡곤란, 체중 증가 부진, 다한증",
      "심도자(카테터) 검사에서 → 폐동맥·대동맥 산소 포화도 차이, 단락량(Qp:Qs) 측정으로 새는 양 평가",
      "치료 선택 → 미숙아: 인도메타신 등 약물로 닫기 시도 / 소아·성인: 경피적 동맥관 폐쇄술(코일·디바이스) 또는 수술",
      "조영실에서 → 폐쇄술 전 크기·위치 확인, 시술 중 혈압·산소·리듬 모니터링, 시술 후 새는 소리·증상 변화 관찰",
    ],
    stepsTitle: "이해하기",
    stepsSubtitle: "PDA 핵심 정리",
    clinicalUse:
      "주로 소아·선천성 심장질환 영역에서 다루지만, 조영실에서는 경피적 PDA 폐쇄술과 심도자 혈역학 평가가 핵심입니다. 심초음파에서 연속성 잡음과 좌심실 부담을 확인한 뒤, 필요 시 카테터로 단락량과 폐동맥 압을 재어 치료 시기를 결정합니다. 간호사는 영아·소아 환자의 호흡, 체온, 수분 섭취, 체중 변화를 시술 전후로 꼼꼼히 보고, 시술 후 출혈·사지 맥박·산소포화도를 확인합니다.",
    keyPoints: [
      "PDA = Patent Ductus Arteriosus = 동맥관 개존증",
      "핵심: 출생 후 닫히지 않은 동맥관 → 좌→우 단락",
      "큰 PDA: 폐 과다순환, 심부전 증상, 장기 시 폐고혈압 위험",
      "진단: 심초음파(연속성 잡음) + 필요 시 심도자 검사",
      "치료: 약물(미숙아), 경피적 폐쇄술(코일/디바이스), 수술",
      "조영실: 폐쇄술 시 혈역학·출혈·호흡 상태 모니터링",
    ],
    relatedItems: [
      "Congenital Heart Disease",
      "Pulmonary Hypertension",
      "Left-to-Right Shunt",
    ],
    tags: ["선천성심질환", "소아심장", "단락", "심초음파"],
  },
  {
    slug: "sickle-cell-anemia",
    title: "겸상적혈구 빈혈",
    englishName: "Sickle Cell Anemia (SCA)",
    koreanName: "겸상적혈구증 빈혈",
    summary:
      "적혈구가 겸상 모양으로 변해 혈관을 막고 산소 운반이 줄어드는 유전성 빈혈 질환",
    summaryEn:
      "Sickle cell anemia is a genetic anemia where red blood cells become sickle-shaped, block vessels, and carry less oxygen.",
    definition: [
      "겸상적혈구 빈혈(겸상적혈구증, Sickle Cell Disease/Anemia)은 유전자 이상으로 적혈구 안 헤모글로빈(HbS)이 만들어지는 질환입니다. 정상적인 둥근 적혈구가 '낫 모양(겸상)'으로 변할 수 있습니다.",
      "겸상 적혈구는 혈관이 좁은 곳에서 서로 엉키거나 막혀, 해당 부위로 피가 잘 안 갑니다. 이를 '혈관폐색(vaso-occlusion)'이라고 하며, 통증·조직 손상의 핵심 원인입니다.",
      "산소가 부족하거나, 탈수, 감염, 추위, 스트레스 등이 있으면 겸상화가 더 잘 일어납니다. 그래서 환자 상태가 갑자기 나빠지는 '위기(crisis)'가 반복될 수 있습니다.",
      "만성 빈혈 때문에 심장이 항상 더 많이 뛰고(박출 증가), 오래되면 심장이 커지거나(비대), 폐동맥 압이 올라(폐고혈압) 심장·폐에 부담이 쌓일 수 있습니다.",
      "한마디로, '겸상 적혈구 때문에 혈관이 막히고 빈혈·통증·장기 손상이 생기는 유전 질환'입니다.",
    ],
    measurementSteps: [
      "혈액검사 → Hb 농도(빈혈 정도), 망상적혈구 수, HbS 비율 확인",
      "증상 → 빈혈(피로, 창백), 통증 위기, 호흡곤란(급흉 증후군 의심) 여부",
      "심장 관련 → 빈맥, 심장 비대, 심부전·폐고혈압 증상(숨참, 다리 부종) 확인",
      "위기 유발 요인 → 발열, 감염, 탈수, 저산소, 통증 유무 확인",
      "조영실·시술 전 → 최근 위기 여부, 수액 상태, Hb 수치, 산소포화도 확인",
      "시술 중 → 충분한 수분 공급, 산소포화도 유지, 통증·호흡 악화 모니터링",
      "시술 후 → 조영제 신독성, 탈수, 저산소, 통증 악화 여부 확인",
      "결론: 겸상적혈구 빈혈 환자는 '빈혈 + 혈관폐색 위험'을 함께 보고, 산소·수분·감염 관리가 심장·전신 보호의 핵심",
    ],
    stepsTitle: "이해하기",
    stepsSubtitle: "겸상적혈구 빈혈 핵심 정리",
    clinicalUse:
      "혈액질환이지만 만성 빈혈·폐고혈압·심비대로 심혈관 클리닉·조영실과 자주 연결됩니다. 관상동맥 조영·RHC·기타 카테터 시술이 필요할 때, 위기를 유발하지 않도록 수액·산소·통증·감염 상태를 시술 전후로 꼼꼼히 봐야 합니다. 조영제 사용 후 신기능·수분 상태를 더 주의하고, 환자가 통증을 호소하면 단순 불편이 아니라 혈관폐색 위기일 수 있음을 염두에 둡니다.",
    keyPoints: [
      "유전성 빈혈 — HbS로 적혈구가 겸상 모양으로 변함",
      "혈관폐색 → 통증 위기, 장기 손상의 핵심",
      "위기 유발: 탈수, 저산소, 감염, 추위, 스트레스",
      "만성 빈혈 → 심박출 증가, 심비대, 폐고혈압·심부전 가능",
      "조영실 주의: 수액·산소 유지, 조영제 신독성·탈수 예방, 통증 악화 즉시 보고",
    ],
    relatedItems: [
      "Pulmonary Hypertension",
      "Heart Failure",
      "Acute Chest Syndrome",
      "Anemia",
    ],
    tags: ["혈액질환", "빈혈", "유전질환", "폐고혈압"],
  },
];

export function getCardiovascularDiseaseBySlug(
  slug: string,
): KnowledgeArticle | undefined {
  return cardiovascularDiseases.find((item) => item.slug === slug);
}
