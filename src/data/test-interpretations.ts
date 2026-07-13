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
  {
    slug: "troponin-t-acs-interpretation",
    title: "TnT로 STEMI·NSTEMI·협심증 구분",
    englishName: "Troponin T (TnT) in ACS — STEMI, NSTEMI, and Angina",
    koreanName: "고감도 트로포닌 T 변화와 급성관상동맥증후군 분류",
    summary:
      "TnT는 심근 손상 지표 — URL(상한) 초과·유의미한 상승(Δ)이 있으면 MI(NSTEMI/STEMI), 없으면 협심증 쪽으로 구분. STEMI는 ECG가 우선",
    summaryEn:
      "TnT reflects myocardial injury — values above the URL or a significant rise suggest MI (NSTEMI/STEMI); without these, ischemia without infarction (angina) is more likely. STEMI is diagnosed by ECG first.",
    definition: [
      "**TnT(Troponin T, 트로포닌 T)** 는 심근세포가 손상되면 혈액으로 나오는 **심근 손상 표지자**입니다. **심근 괴사(= 심근경색, MI)** 가 있으면 TnT가 올라가고, **허혈만 있고 괴사가 없으면** 올라가지 않거나 **의미 있는 상승이 없습니다**.",
      "급성관상동맥증후군(ACS)을 나누는 핵심은 **① ECG(ST 상승 여부) ② TnT(심근 손상 여부)** 입니다. **STEMI** = ST 상승 + (보통 TnT 상승). **NSTEMI** = ST 상승 없음 + **TnT 상승(URL 초과·유의미한 Δ)**. **불안정 협심증(괴사 없음)** = 허혈 증상·ECG/ST-T 변화 가능 + **TnT 정상·유의미한 상승 없음**.",
      "요즘은 **고감도 TnT(hs-cTnT)** 를 씁니다. 정상인도 아주 낮은 수치가 나올 수 있어, **'0이어야 정상'이 아니라** **① 99백분위 상한(URL) 초과** **② 시간에 따른 유의미한 상승(delta, Δ)** 으로 **급성 MI**를 판단합니다.",
      "TnT **시간 변화**: 증상 시작 후 **3~6시간**에 상승 시작 → **12~24시간** peak → **7~14일** 서서히 정상화. **너무 이른 1회 검사**만으로 MI를 배제하면 안 됩니다 → **0h·1h·3h serial** 이 중요합니다.",
      "한마디로, **'TnT가 URL을 넘거나 유의미하게 올랐으면 MI(NSTEMI/STEMI), 그렇지 않으면 협심증(괴사 없음)'** 으로 보고, **STEMI는 TnT보다 ECG ST 상승이 먼저**입니다.",
    ],
    measurementSteps: [
      "【먼저 확인】 검사 종류: **hs-cTnT** 인지 일반 TnT인지 · **우리 병원 URL(99th percentile)** 값(검사지 상단·참고치) · 증상 시작 시각 · **0h/1h/3h serial** 결과",
      "【ACS 3분류 — 임상+ECG+TnT】 ① **STEMI**: **ST elevation**(또는 동등 소견) + 허혈 증상 → **조영·재관류가 우선**, TnT는 나중에 올라도 진단에 필수 아님 ② **NSTEMI**: ST 상승 없음 + **TnT 급성 상승(URL↑ 또는 Δ 유의)** + 허혈 증상/ECG ③ **불안정 협심증(Non-MI)**: 허혈 증상 있음 + **TnT URL 미만·Δ 비유의** (심근 괴사 없음)",
      "【MI(심근경색)로 보는 TnT 기준 — Universal Definition】 **99th percentile URL 초과** + **급성 상승/하강 패턴**(serial) + **허혈 증거**(증상, ST-T, 조영 소견 등). URL은 **검사실·기기마다 다름** — 반드시 해당 병원 기준 사용.",
      "【hs-cTnT URL 예시 — Roche Elecsys, 참고】 많은 기관에서 URL **14 ng/L (0.014 ng/mL)** 를 씀. ※ **본인 병원 URL이 최우선**. URL **미만**이고 **Δ 비유의** → 급성 MI 아님(협심증 쪽). URL **초과** 또는 **Δ 유의** → **급성 심근 손상** → NSTEMI/STEMI 중 하나.",
      "【유의미한 변화(Δ) — ESC 0/1h 알고리즘, hs-cTnT 예시】 **Rule-in(급성 MI 가능성 높음)**: 0h **≥52 ng/L**, 또는 **1h Δ ≥5 ng/L** (0h ≥12 ng/L일 때), 또는 0h 12~52 + 1h Δ≥5. **Rule-out(급성 MI 배제)**: 0h **<5 ng/L** (증상 재발 없을 때), 또는 0h **<12 ng/L** + **1h Δ <3 ng/L**. **그 사이 = observe zone** → 3h 재검·추적.",
      "【0/3h 알고리즘(요약)】 0h·3h serial. Rule-out: 0h·3h 모두 URL 미만 + Δ 비유의(기관 cutoff). Rule-in: **≥URL** + **Δ ≥5~7 ng/L**(기관·assay별). 중간 구간 → 관찰·반복.",
      "【STEMI에서 TnT 패턴】 ECG로 **즉시** STEMI 진단 → 문턱까지 TnT 기다리지 않음. TnT는 보통 **빠르고 크게** 상승(수백~수천 ng/L 가능, infarct 크기에 비례). **peak 12~24h**. 재관류(PCI) 후에도 수일간 높음.",
      "【NSTEMI에서 TnT 패턴】 ST 상승 없음. TnT **소~중등도 상승**이 흔하나 작은 MI는 **미세 상승**만 있을 수 있음 → **serial·Δ**가 핵심. 0h 정상이어도 **3h·6h 재검** 필요. 상승 확인 시 **NSTEMI = MI** → DAPT·조기 조영·PCI 검토.",
      "【협심증(괴사 없음) / unstable angina without MI】 흉통·허혈 증상은 있으나 **TnT serial에서 URL 미만 + Δ < rule-out cutoff** → **심근 괴사 없음**. 다만 **재검** 필요(너무 이른 검사 배제 오류 방지). 안정 협심증(elective)은 통상 TnT 정상.",
      "【헷갈리기 쉬운 경우】 ① **만성 상승**: 신부전·심부전·고령 — baseline TnT 높음 → **Δ**로 급성 여부 판단 ② **재관류 후**: TnT는 며칠 높음 — 새 상승인지 baseline인지 시계열로 ③ **STEMI vs NSTEMI**: TnT 높이로 구분 **안 함** → **ECG ST 상승**으로 구분 ④ **MI vs 협심증**: **URL + Δ + 허혈 증거**로 구분",
      "【조영실·응급실 간호 체크】 TnT 채혈 **시각** 기록(0h/1h/3h) · 증상 시작 시각 · **최신 TnT + Δ** · ECG STEMI 여부 · NSTEMI로 분류 시 **조기 조영 시간** · 협심증(괴사-)으로 분류돼도 **증상·ECG 재평가**",
    ],
    stepsTitle: "TnT 해석",
    stepsSubtitle: "시간 변화 · URL · Δ · ACS 분류",
    clinicalUse:
      "응급실에서 ACS 환자를 조영실로 보낼 때 'STEMI인가, NSTEMI인가, 협심증인가'를 TnT와 ECG로 맞추는 것이 출발점입니다. STEMI는 TnT 결과를 기다리지 않고 ST 상승으로 즉시 활성화합니다. NSTEMI는 TnT 상승이 확인되면 MI로 취급해 DAPT·항응고·조기 invasive strategy를 검토합니다. TnT가 URL 미만이고 Δ가 없으면 괴사 없는 협심증 가능성이 있으나, 1회 정상만으로 MI를 완전히 배제하지 않고 serial protocol을 따릅니다. 간호사는 **채혈 시각**이 알고리즘 해석에 직접 영향을 주므로 정확한 기록이 필수입니다.",
    keyPoints: [
      "STEMI = ECG ST↑ 우선 (TnT 기다리지 않음)",
      "NSTEMI = ST↑ 없음 + TnT URL↑ 또는 Δ 유의",
      "협심증(괴사-) = 허혈 증상 + TnT URL 미만·Δ 비유의",
      "hs-cTnT: URL(병원별) + serial Δ가 핵심",
      "0/1h 예: rule-in Δ≥5, rule-out 0h<5 또는 Δ<3",
      "너무 이른 1회 정상으로 MI 배제 금지",
    ],
    relatedItems: [
      "STEMI",
      "NSTEMI",
      "ACS",
      "PCI",
      "Antiplatelet Agents",
    ],
    tags: ["TnT", "troponin", "검사해석", "ACS", "STEMI", "NSTEMI", "협심증"],
  },
  {
    slug: "coronary-stenosis-angiography",
    title: "관상동맥 협착 — 조영 해석",
    englishName: "Coronary Stenosis on Angiography",
    koreanName: "관상동맥 조영에서 협착 부위 읽기",
    summary:
      "LAO·RAO 관상동맥 조영에서 LAD·LCX·RCA·LM 협착이 어디인지 보는 법 — 형광투시 화면에서 좁아지는 부위, p/m/d 구분, 보고서 % 협착",
    summaryEn:
      "How to read coronary stenosis on LAO/RAO angiography — identifying the narrowed segment on fluoroscopy, proximal/mid/distal labeling, and report percent stenosis.",
    definition: [
      "관상동맥조영( coronary angiography )은 조영제를 관상동맥에 넣어 **형광투시 화면**에 혈관을 밝은 선으로 보여 주는 검사입니다. **협착(stenosis)** 은 그 밝은 관강(lumen)이 **갑자기 가늘어지는 구간**으로 보입니다.",
      "조영 화면에서 협착을 찾는 방법: ① **관강이 좁아짐**(shelf, taper) ② **협착 너머 대비 지연 조영**(distal filling delay) ③ **심한 경우 hairline** 만 보이거나 **TIMI flow 저하** ④ 보고서의 **'pLAD 90% stenosis'** 와 같은 문장과 **같은 위치**를 짚습니다.",
      "**LAD(좌전하행지)** 는 보통 **LAO(Left Anterior Oblique)** 뷰에서 세로로 내려가는 굵은 혈관입니다. **pLAD(proximal)** = LM 분지 직후 ~ 첫 major branch 전 · **mLAD(mid)** = 중간 구간 · **dLAD(distal)** = 마지막 대각지/중격지 너머 ~ apex. **협착 위치**를 말할 때 이 p/m/d를 반드시 붙입니다.",
      "**LM(좌주형지)** 협착은 매우 짧은 구간에서 좁아지며, LAD·LCX가 갈라지기 **바로 전**입니다. 고위험이라 **CABG·긴급 PCI** 를 떠올립니다.",
      "**LCX·OM(둔각지)** 협착은 LAO에서 **옆으로 뻗는 가지**에서 좁아집니다. **측벽(lateral) 허혈** 과 연결됩니다.",
      "**RCA(우관상동맥)** 는 **RAO(Right Anterior Oblique)** 뷰에서 심장 오른쪽을 따라 C자 형태로 보입니다. **pRCA·mRCA·dRCA**, **PDA** 협착은 **하벽(inferior) MI** 영역과 연결됩니다.",
      "보고서의 **% stenosis**(예: 70%, 90%)는 의사가 **시각 추정**하거나 **QCA(정량 관상동맥조영)** 로 계산한 값입니다. **50% 미만** = 경미 · **50~70%** = 중등도(FFR/iFR로 시술 결정 가능) · **70~99%** = 중증(허혈·PCI/CABG 고려) · **100%/CTO** = 완전 폐쇄.",
      "한마디로, **'어느 혈관(LAD 등) · 어느 구간(p/m/d) · 화면 어디가 가장 좁은지'** 를 같이 보면 조영 해석의 절반은 끝납니다.",
    ],
    images: [
      {
        src: "/images/test-interpretations/angio/lad-proximal-stenosis.jpg",
        alt: "실제 관상동맥 조영 - LAD proximal 고도 협착",
        caption:
          "**pLAD(좌전하행지 근위) 실제 조영.** 혈전 흡인 후에도 LAD proximal에 **거의 폐쇄 수준의 협착(preocclusive stenosis)** 이 보입니다. 관강이 갑자기 가늘어지는 구간 = 병변. distal branch에는 조영제가 들어가 있음. 출처: Wikimedia Commons, 6129bm, CC BY-SA 3.0.",
      },
      {
        src: "/images/test-interpretations/angio/lcx-lm-stenosis-arrows.jpg",
        alt: "실제 관상동맥 조영 - LM 및 LCX 협착, 화살표 표시",
        caption:
          "**LM + LCX 협착 실제 조영.** 위쪽 화살표 = **좌관상동맥 공통부(common trunk) 중증 협착** · 아래쪽 화살표 = **LCX(좌회선지) 협착**. 조영 화면에서 화살표가 가리키는 곳이 병변 위치. 출처: Pantaleo et al., BMC Cancer 2012, CC BY 2.0.",
      },
      {
        src: "/images/test-interpretations/angio/lad-rca-cto-cag.png",
        alt: "실제 관상동맥 조영 - LAD와 RCA CAG 영상",
        caption:
          "**LAD·RCA 실제 조영(CAG).** 왼쪽 상단(1A) = **LAD CTO(완전폐쇄) 조영** · 왼쪽 하단(1D) = **RCA CTO 조영**. LAD는 LAO 계열, RCA는 RAO 계열에서 이렇게 보입니다. 출처: Qu et al., PLoS ONE 2014, CC BY-SA 2.5.",
      },
      {
        src: "/images/test-interpretations/angio/lad-distal-before-after.jpg",
        alt: "실제 관상동맥 조영 - distal LAD before·after",
        caption:
          "**dLAD(원위 LAD) 실제 조영.** 왼쪽 = 협착 있던 상태 · 오른쪽 = 32개월 후 개선. LAD distal segment의 관강 변화 비교. 출처: Wikimedia Commons, Mealsforhealth, CC BY-SA 4.0.",
      },
      {
        src: "/images/test-interpretations/angio/left-coronary-angiogram.jpg",
        alt: "실제 관상동맥 조영 - 좌관상동맥 계통 전체",
        caption:
          "**좌관상동맥 계통 실제 조영.** LM에서 **LAD(아래로)** · **LCX(옆으로)** 분지. 협착 없을 때 관강이 균일하게 밝게 보이는 기준 화면. 출처: Wikimedia Commons, Bleiglass, GFDL/CC.",
      },
      {
        src: "/images/anatomy/coronary-angiogram-views.svg",
        alt: "LAO·RAO 관상동맥 조영 표준 뷰 참고도",
        caption:
          "혈관 이름·각도 참고용 schematic (실제 조영 아님). LAO=LM·LAD·LCX · RAO=RCA. 위 실제 조영 사진과 함께 보면서 p/m/d 위치를 맞춥니다.",
      },
    ],
    imagesTitle: "실제 조영 사진",
    imagesSubtitle: "Wikimedia Commons 임상 관상동맥조영 — 협착 부위 표시",
    measurementSteps: [
      "【1단계 — 뷰 확인】 LAO injection → 좌관상동맥(LM·LAD·LCX) · RAO injection → RCA · 화면에서 척추 위치(LAO=오른쪽, RAO=왼쪽)로 방향 확인",
      "【2단계 — 혈관 이름】 가장 굵은 세로 혈관=LAD(LAO) · LM에서 갈라지는 짧은 stem=LM · 옆 가지=LCX/OM/D · C자 RCA=RAO",
      "【3단계 — 협착 찾기】 밝은 관강이 **갑자기 가늘어지는 점** · 실제 조영 사진에서 **화살표·좁아진 segment** 확인 · 의사가 'here'·'lesion'이라고 할 때 **가장 좁은 구간**",
      "【4단계 — 구간(p/m/d)】 LAD: p=LM 직후, m=중간, d=apex 쪽 · RCA: p/m/d along AV groove · OM1/OM2=LCX 분지 번호",
      "【LAD 협착 — LAO에서】 pLAD 협착=LM bifurcation 바로 아래 좁아짐(고위험) · mLAD=LAD 중간(가장 흔한 예시) · dLAD=distal LAD 작은 혈관",
      "【LM 협착】 LM 본체 짧은 구간만 좁음 · LAD·LCX both affected · 'left main disease' = 긴급/고위험",
      "【LCX/OM 협착】 LAO에서 옆으로 나온 가지의 narrowing · 'OM1 80%' = 첫 둔각지",
      "【RCA 협착 — RAO에서】 pRCA/mRCA/dRCA · Crux 이후 PDA narrowing = inferior territory",
      "【TIMI flow】 협착 distal flow: 3=정상, 2=느리지만 채움, 1=희미, 0=없음(CTO) · STEMI=종종 TIMI 0-1",
      "【보고서 예시 읽기】 'mLAD 90% stenosis, TIMI 2' → LAD 중간 90% 좁음, 원위 조영 느림 · 'pLAD 70%, D1 50%' → LAD 근위 중증 + 대각지 중등도",
      "【조영실 간호】 협착 부위 촬영 각도 저장 · PCI 시 balloon/stent 길이가 병변 위치와 맞는지 확인 · 보고서 vessel name+segment+stenosis% 기록",
    ],
    stepsTitle: "조영 해석",
    stepsSubtitle: "혈관 · 구간 · 협착 위치",
    clinicalUse:
      "Cath lab·조영실에서 가장 기본적인 화면 읽기입니다. 'LAD에 스텐트'라고 할 때 간호사·영상팀도 **어느 구간인지** 알아야 길이·촬영 각도·보고서를 맞출 수 있습니다. LAD proximal 협착, LM disease, RCA-PDA 병변은 각각 위험도와 시술 계획이 달라, 협착 **위치**를 정확히 아는 것이 PCI·CABG·응급 STEMI 대응의 기본입니다. 관상동맥 해부학(혈관 이름)과 이 항목(조영에서 어디가 좁은지)을 함께 보면 보고서 전체가 읽힙니다.",
    keyPoints: [
      "협착 = 조영 화면에서 관강이 갑자기 가늘어짐",
      "LAD는 LAO에서 세로 — p/m/d 구간 구분",
      "실제 조영: 화살표·좁아진 밝은 선 = 병변",
      "LM·pLAD 협착 = 고위험",
      "RCA는 RAO, LCX/OM은 LAO 옆 가지",
      "보고서: 혈관 + segment + % + TIMI",
    ],
    relatedItems: [
      "관상동맥 구조",
      "LAD",
      "RCA",
      "LCX",
      "PCI",
      "CABG",
      "STEMI",
    ],
    tags: ["검사해석", "조영", "관상동맥", "협착", "LAD", "LAO", "RAO", "이미지"],
  },
];

export function getTestInterpretationBySlug(
  slug: string,
): KnowledgeArticle | undefined {
  return testInterpretations.find((item) => item.slug === slug);
}
