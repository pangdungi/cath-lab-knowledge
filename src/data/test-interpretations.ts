import type { KnowledgeArticle } from "@/types/knowledge-article";

export const testInterpretations: KnowledgeArticle[] = [
  {
    slug: "rhc-increased-filling-pressure",
    title: "RHC에서 increased filling pressure?",
    englishName: "Increased Filling Pressure on Right Heart Catheterization",
    koreanName: "오른심 카테터검사에서 충만압 상승",
    summary:
      "심장이 피로 가득 찼을 때 혈관/심방 안 압력이 평소보다 높다는 뜻으로, 심장이 부담받고 있다는 신호",
    summaryEn:
      "Increased filling pressure means the heart chambers are under higher pressure when filling with blood, suggesting congestion or volume overload.",
    definition: [
      "RHC(오른심 카테터검사)에서 'filling pressure(충만압)'는 심장이 이완하며 피를 받아들이는 시점의 압력을 말합니다. 쉽게 말해 '심장이 얼마나 빵빵하게 차 있고, 그만큼 압력이 높은가'를 보는 값입니다.",
      "Increased filling pressure는 이 압력이 정상보다 높다는 뜻입니다. 심장이 피를 제대로 비우지 못하거나, 몸에 물이 너무 많거나, 심장이 뻣뻣해져서 피가 잘 안 들어가는 상태일 때 흔히 나타납니다.",
      "RHC에서 주로 보는 값은 오른심방 평균압(RA mean), 오른심실 말기 이완압(RVEDP), 폐모세혈관 쐐기압(PCWP) 등입니다. 어느 챔버의 압력이 오르는지에 따라 원인 방향이 달라집니다.",
      "한마디로, '심장이나 혈관이 벌어져 있어서 피가 몰려 있다'는 신호로 이해하면 됩니다.",
    ],
    measurementSteps: [
      "RHC 검사지에서 RA mean, RVEDP, PCWP(또는 PAWP) 수치를 먼저 찾습니다.",
      "환자가 얼마나 누워 있는지(누운 자세/부분 기립)와 맥박수, 최근 수액/이뇨제 사용 여부를 함께 확인합니다. 같은 수치라도 상황에 따라 의미가 달라질 수 있습니다.",
      "RA mean이 눈에 띄게 높으면(대략 10 mmHg 이상) 오른심 쪽 충만압이 올라간 것으로 봅니다. 이때 압력 파형에 큰 V파가 있으면 TR 가능성을 생각합니다.",
      "RVEDP가 높으면 오른심실이 부담받고 있다는 뜻입니다. 폐고혈압, 오른심부전, 심낭질환 등을 함께 봅니다.",
      "PCWP가 높으면 왼심 쪽(폐정맥 쪽) 압력이 올라간 것으로, 왼심부전·부종·수분 과다를 의심합니다.",
      "수치 하나만 보지 말고, 심초음파·흉부 X-ray·BNP·임상 증상(호흡곤란, 부종)과 함께 해석합니다.",
      "결론: increased filling pressure = '심장이 혈액으로 과하게 차 있거나, 비우기 어려운 상태'로 이해하고, 어느 챔버인지에 따라 원인을 좁혀 갑니다.",
    ],
    clinicalUse:
      "심부전 환자, 의심스러운 폐고혈압, 심낭질환, 쇼크 원인 감별에서 RHC 결과를 읽을 때 가장 자주 마주치는 표현입니다. 조영실·중환자실·심장내과가 함께 '지금 환자가 혈액량이 많은 건지, 심장이 막힌 건지, 펌프가 약한 건지'를 가르는 단서로 씁니다. 치료 방향(이뇨제, 수액 조절, 혈관확장제, 원인 치료)을 정하는 데 직접 연결됩니다.",
    keyPoints: [
      "충만압 상승 = 심장/혈관이 혈액으로 몰려 있다는 신호",
      "RA 상승 → 오른심 문제, TR, 심낭질환, 수분 과다 등",
      "PCWP 상승 → 왼심부전 가능성",
      "반드시 임상·초음파·다른 압력 값과 함께 해석",
      "조영실에서: 이런 환자는 시술 전 수액 상태·신기능·호흡 상태를 더 꼼꼼히 확인",
    ],
    relatedItems: ["RHC", "Tricuspid Regurgitation", "Heart Failure"],
    tags: ["RHC", "검사해석", "심부전", "혈역학"],
  },
  {
    slug: "rhc-large-v-wave",
    title: "RHC에서 오른심방 큰 V파?",
    englishName: "Large V Wave on Right Atrial Pressure Tracing",
    koreanName: "오른심방 압력 파형의 큰 V파",
    summary:
      "심장이 뛸 때 오른심방 안 압력이 툭 튀어 오르는 모양으로, 주로 삼첨판 역류(TR)를 의심한다",
    summaryEn:
      "A large V wave on the right atrial tracing means pressure spikes when the heart beats, often suggesting tricuspid regurgitation.",
    definition: [
      "RHC에서 오른심방(RA)에 압력을 재면, 화면에 파형(물결 모양 그래프)이 나옵니다. 그중 V파는 '심장이 뛰는 동안(수축기) 오른심방 안 압력이 올라가는 봉우리'입니다.",
      "정상적으로도 작은 V파는 있습니다. 그런데 V파가 유난히 크면, 심장이 뛸 때 오른심방으로 피가 많이 밀려 들어왔다는 뜻으로 해석합니다.",
      "가장 흔한 이유는 삼첨판 폐쇄부전(TR)입니다. 오른심실이 뛸 때 삼첨판이 제대로 닫히지 않으면, 피가 다시 오른심방으로 역류하면서 압력이 확 올라가 큰 V파가 생깁니다.",
      "다만 수분이 많거나 오른심실이 부담받는 상태에서도 V파가 커질 수 있어, 심초음파·임상 소견과 함께 봐야 합니다.",
      "한마디로, '심장이 뛸 때마다 오른심방이 툭 밀리는 신호'이고, 특히 TR을 떠올리라는 힌트입니다.",
    ],
    measurementSteps: [
      "RHC 검사지에서 오른심방(RA) 압력 파형 그래프를 찾습니다.",
      "파형에서 a파, c파, v파, y descent 중 v파(수축기 중반~말기에 나오는 봉우리)를 확인합니다.",
      "v파가 다른 파형보다 눈에 띄게 높으면 '큰 V파(large/prominent V wave)'로 기록된 것입니다.",
      "이때 환자에게 다리 부종, 목정맥 부풂, 간비종 같은 오른심부전 증상이 있는지 봅니다.",
      "심초음파에서 TR(삼첨판 역류)이 있는지 함께 확인합니다. 큰 V파 + TR이면 해석이 잘 맞습니다.",
      "TR이 없는데도 V파가 크면, 수분 과다, 오른심실 부담 증가, 폐고혈압 등 다른 원인을 생각합니다.",
      "결론: 큰 V파 = '심장이 뛸 때 오른심방으로 피가 많이 밀려 왔다' → 가장 먼저 TR 의심, 임상·초음파와 함께 해석",
    ],
    stepsTitle: "해석 방법",
    stepsSubtitle: "단계별로 이해하기",
    clinicalUse:
      "RHC 보고서나 모니터 화면에서 'prominent V wave', 'large V wave'라고 적혀 있을 때 쓰는 해석입니다. TR 환자, 오른심부전 환자, 폐고혈압 환자 평가에서 자주 등장합니다. 조영실에서는 이런 환자의 정맥 울혈·부종·수액 상태를 시술 전후로 더 꼼꼼히 확인하고, 수액을 과하게 주지 않도록 주의합니다.",
    keyPoints: [
      "큰 V파 = 수축기에 오른심방 압력이 크게 올라감",
      "가장 흔한 원인: TR(삼첨판 역류)",
      "반드시 심초음파·임상 증상과 함께 해석",
      "오른심부전·부종·JVD가 있으면 해석이 더 확실해짐",
      "조영실: 수액 과다·정맥 울혈 악화 주의",
    ],
    relatedItems: ["RHC", "Tricuspid Regurgitation", "Right Heart Failure"],
    tags: ["RHC", "검사해석", "압력파형", "TR"],
  },
  {
    slug: "p2y12-platelet-function-test",
    title: "P2Y12 검사 결과 해석",
    englishName: "P2Y12 Platelet Function Test Interpretation",
    koreanName: "P2Y12 수용체 억제 반응 검사 (혈소판 기능검사)",
    summary:
      "클로피도그렐·티카그렐러 등 P2Y12 억제제 복용 중 혈소판이 얼마나 억제됐는지 보는 검사 — PRU가 높으면 약 반응 부족(혈전 위험↑)",
    summaryEn:
      "P2Y12 platelet function testing shows how well P2Y12 inhibitors are working — higher PRU means less inhibition and higher thrombosis risk.",
    definition: [
      "P2Y12 검사는 **P2Y12 억제제(클로피도그렐, 프라수그렐, 티카그렐러 등)를 먹고 있는 환자**의 혈소판이 실제로 얼마나 억제됐는지 보는 **혈소판 기능검사**입니다.",
      "DAPT(아스피린 + P2Y12)는 PCI·스텐트 후 혈전을 막는 핵심인데, 사람마다 약에 반응하는 정도가 다릅니다. 특히 **클로피도그렐(Plavix)** 은 간에서 활성화되어야 하므로, **CYP2C19 저대사형** 등에서는 효과가 약한 경우가 많습니다(이른바 '저반응·non-responder').",
      "검사 결과가 '반응 부족(고혈소판 반응성)'이면 **스텐트 혈전(stent thrombosis)·재협심증 위험이 올라갈 수 있다**는 뜻으로 해석합니다. 반대로 충분히 억제되면 현재 약물·용량이 잘 작동하고 있다는 신호입니다.",
      "가장 흔한 검사는 **VerifyNow P2Y12 assay**(포인트오브케어, 조영실·병동에서 혈액 한 방울로 측정)입니다. 결과는 **PRU(P2Y12 Reaction Units)** 로 나옵니다.",
      "한마디로, 'P2Y12 약이 이 환자 혈소판을 실제로 얼마나 막고 있나?'를 숫자로 보는 검사이고, **PRU가 높을수록 약 효과가 약하다**고 봅니다.",
    ],
    measurementSteps: [
      "【검사가 무엇인지】 혈액 샘플에서 혈소판이 P2Y12 경로로 응집하는 능력을 측정합니다. P2Y12 억제제가 잘 작동하면 응집이 잘 안 되고 → **PRU가 낮아집니다**.",
      "【대표 검사 방법 — VerifyNow P2Y12】 조영실·응급실에서 가장 흔함. 카트리지에 혈액 1방울 → 수 분 내 결과. **PRU(P2Y12 Reaction Units)** 0~550 범위. **낮을수록 = 억제 잘 됨**, **높을수록 = 억제 부족**.",
      "【다른 검사 방법】 VASP phosphorylation assay(연구·특수), Light transmission aggregometry(LTA), Multiplate, TEG/ROTEM platelet mapping — 기관·연구에 따라 다름. 임상에서 'P2Y12 검사'라고 하면 대개 VerifyNow PRU를 말하는 경우가 많음.",
      "【언제 검사하나】 ① PCI 전·후 클로피도그렐 반응 확인 ② 증상성 스텐트 혈전·재협심증 환자 ③ DAPT 감량·중단 결정 전(일부 기관) ④ 연구·프로토콜. **로딩 용량 투여 후 최소 수 시간~24시간 이후** 에 측정하는 경우가 많음(약·기관별 상이).",
      "【결과 해석 — PRU (VerifyNow, 일반적 기준)】 **PRU ≥ 208** (또는 기관에 따라 **≥ 240**): **HPR(High Platelet Reactivity, 고혈소판 반응성)** = P2Y12 억제 **부족** → 스텐트 혈전·재이벤트 위험 ↑. **PRU < 208**: 억제 **충분**(adequate response)으로 보는 경우 많음. ※ 컷오프는 **기관·가이드·사용 약물**에 따라 다름 — 반드시 병원 기준 확인.",
      "【결과의 임상적 의미】 HPR(고 PRU): ① 클로피도그렐 저반응 가능 → **프라수그렐·티카그렐러로 변경** 검토 ② 용량·복용 순응도 확인(약을 안 먹었는지) ③ CYP2C19 유전자검사 병행(선택) ④ DAPT 유지 기간 연장 검토. 저 PRU(억제 충분): 현재 DAPT가 효과적 — 단, **출혈 위험**과 균형.",
      "【주의 — 해석할 때 함께 볼 것】 ① 어떤 P2Y12 약인지(클로피도그렐 vs 티카그렐러 — 티카그렐러는 PRU가 원래 더 낮게 나옴) ② 마지막 복용 시간 ③ 아스피린 병용 여부(VerifyNow 아스피린 검사는 별도) ④ 급성 MI·감염·염증은 일시적으로 혈소판 반응성 변화 ⑤ 검사 하나만으로 DAPT 중단 결정하지 않음 — **임상·가이드·의사 판단**.",
      "【조영실에서의 활용】 PCI 전 클로피도그렐만 복용 중인 환자에서 HPR이면 강한 P2Y12로 바꾸는 근거가 될 수 있음. 시술 후 스텐트 혈전 의심 시 '약 복용 순응 vs 저반응' 가름에 도움. 간호: 검사 시점·마지막 P2Y12 복용 시간·약 이름을 반드시 기록.",
      "【결론】 P2Y12 검사 = P2Y12 억제제 효과 측정. **PRU 높음 → 억제 부족 → 혈전 위험↑ → 약 변경·DAPT 강화 검토**. **PRU 낮음 → 억제 충분 → 현재 치료 유지(출혈 위험과 균형)**.",
    ],
    stepsTitle: "검사·해석",
    stepsSubtitle: "VerifyNow PRU 기준",
    clinicalUse:
      "관상동맥 조영실·심장내과에서 DAPT 반응을 개인화할 때 쓰는 검사입니다. 클로피도그렐은 환자마다 효과 차이가 커서, PCI 전후 '이 환자가 약에 잘 반응하는가?'를 확인하는 데 활용됩니다. PRU가 높다고 해서 자동으로 약을 바꾸는 것은 아니며, 출혈 위험·시술 종류·ACS 여부·복용 순응도와 함께 의사가 결정합니다. 간호사는 검사 전 **마지막 P2Y12 복용 시간·약물명(브랜드 포함)** 을 정확히 전달하는 것이 해석 오류를 줄입니다.",
    keyPoints: [
      "P2Y12 검사 = 클로피도그렐·티카그렐러 등 억제 효과 측정",
      "VerifyNow PRU: 낮을수록 억제 좋음, 높을수록 억제 부족",
      "PRU ≥ 208(기관별 상이) = HPR → 스텐트 혈전 위험↑",
      "HPR 시 → 강한 P2Y12(프라수그렐·티카그렐러) 변경 검토",
      "약 종류·마지막 복용 시간·복용 순응도 함께 확인",
      "검사만으로 DAPT 중단하지 않음 — 임상·의사 판단",
    ],
    relatedItems: [
      "Antiplatelet Agents",
      "DAPT",
      "Clopidogrel",
      "PCI",
      "CYP2C19",
    ],
    tags: ["P2Y12", "검사해석", "혈소판", "DAPT", "PRU", "VerifyNow"],
  },
];

export function getTestInterpretationBySlug(
  slug: string,
): KnowledgeArticle | undefined {
  return testInterpretations.find((item) => item.slug === slug);
}
