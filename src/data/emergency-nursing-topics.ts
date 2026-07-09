import type { KnowledgeArticle } from "@/types/knowledge-article";

export const emergencyNursingTopics: KnowledgeArticle[] = [
  {
    slug: "acls",
    title: "ACLS",
    englishName: "Advanced Cardiovascular Life Support",
    koreanName: "심정지 고급소생술",
    summary:
      "심정지 시 VF/pVT·PEA·Asystole 리듬별 단계별 대응 — CPR, 제세동, 에피네프린, 가역 원인(H's & T's) 처리",
    summaryEn:
      "ACLS step-by-step for VF/pVT, PEA, and asystole — CPR, defibrillation, epinephrine, and reversible causes (H's & T's).",
    definition: [
      "ACLS(Advanced Cardiovascular Life Support)는 **심정지(cardiac arrest)** 상황에서 팀이 따라야 하는 **고급 소생술 프로토콜**입니다. 조영실·CCU·응급실·병동 어디서든 '반응 없음 + 맥박 없음'이 확인되면 즉시 시작합니다.",
      "가장 먼저 하는 일은 공통입니다: **반응 확인 → 도움 요청(코드 블루) → 911/팀 호출 → 모니터/AED 부착 → CPR 시작**.",
      "리듬은 크게 두 가지로 나뉩니다. **제세동 가능(shockable)**: **VF(심실세동)·pulseless VT(무맥성 심실빈맥)**. **제세동 불가(non-shockable)**: **PEA(무맥성 전기활동)·Asystole(무수축)**.",
      "심정지가 오래 지속되는 가장 흔한 이유는 **제때 된 CPR·제세동·약물**이 아니라, **가역 원인(H's & T's)** 을 놓치는 경우입니다. Hypovolemia, Hypoxia, H⁺(산증), Hypo/Hyperkalemia, Hypothermia / Tension pneumothorax, Tamponade, Toxins, Thrombosis.",
      "한마디로, '리듬을 보고 VF/pVT는 **전기+CPR+에피네프린+항부정맥제**, PEA/Asystole은 **CPR+에피네프린+가역 원인**'으로 단계별 대응합니다.",
    ],
    measurementSteps: [
      "【공통 1단계 — 모든 심정지】 ① 반응 없음 확인(어깨 두드리고 큰 소리로 호흡) ② 도움 요청·코드 블루·제세동기/AED 요청 ③ 모니터/AED 패드 부착 ④ **즉시 고품질 CPR** 시작(가슴압박 100~120/min, 깊이 5~6 cm, 완전 이완, 교대 2분마다) ⑤ 산소·정맥로/IO 확보",
      "【공통 2단계 — 리듬 확인】 모니터 리듬 분석 → **VF 또는 pulseless VT** 인가? **PEA 또는 Asystole** 인가? (맥박 확인: 제세동 직전·투약 전 10초 이내, CPR 중단 최소화)",
      "【VF / Pulseless VT — 제세동 가능 리듬】 1) **CPR 계속**하면서 제세동기 충전 2) **제세동 1회** (양상성: 120~200 J, 기관 지침 또는 최대 에너지) 3) 충격 직후 **즉시 CPR 2분** 재개(맥박 확인하지 말 것) 4) 2분 후 리듬 재확인 → 여전히 VF/pVT면 **제세동 2회째** + CPR 5) **에피네프린 1 mg IV/IO** — 2번째 충격 직후 또는 CPR 2분 주기 중 가급적 빨리, 이후 **3~5분마다 반복** 6) 3번째 충격 후에도 VF/pVT 지속 시 **아미오다론 300 mg IV/IO 1회** (대안: 리도카인) 7) 이후 VF/pVT 지속 → **아미오다론 150 mg** 추가 1회 가능 8) 매 2분마다: CPR → 리듬 확인 → shockable이면 충격 → CPR 반복 9) **ROSC(자발순환 회복)** 시: 맥박·혈압·SpO₂·호흡 확인 → 소생 후 관리",
      "【PEA — 무맥성 전기활동】 심전도에 QRS는 있으나 **맥박 없음**. 1) **제세동 하지 않음** 2) **즉시 고품질 CPR** 3) **에피네프린 1 mg IV/IO ASAP**, 이후 **3~5분마다** 4) **가역 원인(H's & T's) 적극 탐색·치료** — 이 단계가 PEA 소생의 핵심 5) 고급 기도(기관삽관 등) 고려, ETCO₂로 CPR 품질·ROSC 확인 6) **2분마다** CPR → 리듬·맥박 확인 → 여전히 PEA면 CPR·에피네프린·원인 치료 지속 7) 리듬이 **VF/pVT로 바뀌면** → 제세동 가능 알고리즘으로 전환",
      "【Asystole — 무수축】 심전도가 거의 평평한 직선(또는 매우 미세한 전기활동). 1) **제세동 하지 않음** 2) **연결·리드·gain 확인** — 진짜 Asystole인지, 미세 VF를 놓치지 않았는지 3) **즉시 고품질 CPR** 4) **에피네프린 1 mg IV/IO ASAP**, 이후 **3~5분마다** 5) **가역 원인(H's & T's) 적극 치료** — PEA와 동일하게 원인 교정이 핵심 6) **2분마다** CPR → 리듬 확인 → Asystole/PEA 지속 시 계속 7) VF/pVT로 전환 시 → 제세동 알고리즘으로 전환",
      "【H's & T's — 가역 원인 체크리스트】 Hypovolemia → 수액·출혈 통제 / Hypoxia → 기도·환기·FiO₂↑ / Hydrogen ion(산증) → 환기·HCO₃⁻(상황별) / Hypo·Hyperkalemia → Ca, insulin+D50, kayexalate 등 / Hypothermia → 보온·체온↑ / Tension pneumothorax → 감압·drain / Tamponade → pericardiocentesis / Toxins → 해독제·지원 / Thrombosis(폐·관상) → PCI, thrombolysis, ECMO 검토",
      "【조영실·Cath Lab 특이점】 헤파린·항응고제, 조영제 과민반응, 관상동맥 폐색, 공기색전, 긴장성 기흉, 심낭압전(tamponade) 가능성 높음. 심정지 시 **Sheath·접근 부위 출혈, 심낭압, 기흉** 즉시 확인. PCI 진행 중이면 **지속 CPR, 제세동, 필요 시 IABP/ECMO** 등 기관 프로토콜.",
      "【ROSC 후】 목표 SpO₂ 94~98%, 혈압 유지(수액·승압제), 12-lead ECG, 원인 치료, 저체온 치료·ICU 이송 검토, 아미오다론 등 지속 용량 정리.",
    ],
    stepsTitle: "리듬별 대응",
    stepsSubtitle: "VF/pVT · PEA · Asystole 단계별",
    clinicalUse:
      "조영실·CCU·병동에서 코드 블루 시 간호사 역할은 고품질 CPR, 제세동기 조작·충전·충격 확인, 약물 준비·투여 기록, 리듬·시간 기록, 팀 리더 지시 보조, 가역 원인(출혈·기흉·심낭압·저산소) 즉시 알리기입니다. VF/pVT는 '빠른 제세동+즉시 CPR 재개'가 생존율을 좌우하고, PEA/Asystole은 '제세동 없이 에피네프린+원인 치료'가 핵심입니다. 모든 리듬에서 CPR 중단은 리듬 확인·충격·투약 순간을 제외하고 최소화합니다.",
    nursingCare: {
      pre: [
        "코드 카트·제세동기·약물(에피네프린, 아미오다론) 위치·유효기간 숙지",
        "팀 역할 분담(압박자, 투약, 기록, 제세동, 리더) 미리 확인",
        "조영실: sheath·출혈·심낭압·기흉 가능성 인지",
        "고품질 CPR 기준(100~120/min, 5~6 cm, 완전 이완) 숙지",
      ],
      post: [
        "ROSC 후 혈압·SpO₂·호흡·의식 지속 모니터링",
        "12-lead ECG, 원인 치료, ICU 이송 준비",
        "투여 약물·제세동 횟수·에너지·시간 정확히 기록",
        "가역 원인 교정 여부 문서화",
        "팀 debriefing 참여",
      ],
    },
    keyPoints: [
      "VF/pVT = 제세동 가능 → 충격 → 즉시 CPR 2분 → 에피네프린 → 아미오다론",
      "PEA = 맥박 없는 조직적 전기활동 → CPR + 에피네프린, 제세동 금지",
      "Asystole = 무수축 → CPR + 에피네프린, 제세동 금지, 리드/gain 확인",
      "모든 리듬: H's & T's 원인 치료가 소생율 좌우",
      "CPR 중단 최소화 — 리듬 확인·충격 때만 잠시 중단",
      "조영실: tamponade·출혈·공기색전·관상폐색 적극 의심",
    ],
    relatedItems: [
      "CPR",
      "Defibrillation",
      "Epinephrine",
      "Amiodarone",
      "Cardiac Tamponade",
    ],
    tags: ["응급간호", "ACLS", "심정지", "CPR", "제세동", "코드블루"],
  },
];

export function getEmergencyNursingTopicBySlug(
  slug: string,
): KnowledgeArticle | undefined {
  return emergencyNursingTopics.find((item) => item.slug === slug);
}
