import type { KnowledgeArticle } from "@/types/knowledge-article";

export const nursingTopics: KnowledgeArticle[] = [
  {
    slug: "why-lvad-map-only",
    title: "왜 LVAD 환자는 MAP만 측정 가능한가?",
    englishName: "Why Only MAP Can Be Measured in LVAD Patients",
    koreanName: "LVAD 환자에서 MAP만 측정되는 이유",
    summary:
      "LVAD는 맥이 거의 없는 연속 흐름에 가까워, 수축기·이완기를 나눌 파형이 없고 평균압(MAP)만 신뢰할 수 있기 때문",
    summaryEn:
      "LVAD flow is often continuous with little pulse, so there is no clear systolic/diastolic wave — only mean arterial pressure (MAP) is reliable.",
    definition: [
      "일반 혈압 측정은 '심장이 뛸 때마다 혈관 안 압력이 올랐다 내려가는 파형'을 전제로 합니다. 수축기 혈압은 파형의 가장 높은 점, 이완기 혈압은 가장 낮은 점입니다.",
      "LVAD(좌심실 보조장치)는 기계 펌프가 거의 일정하게 피를 밀어 보냅니다. 심장 자체 박동은 약하거나 보조 역할만 하므로, 맥이 약하거나 거의 느껴지지 않는 경우가 많습니다. 이를 '비맥동성(non-pulsatile)' 또는 '저맥동성' 흐름이라고 부릅니다.",
      "맥이 거의 없으면 혈관 안 압력도 '툭툭 튀는 파형'이 아니라 '거의 일정한 수준'에 가깝습니다. 그래서 수축기와 이완기를 구분할 기준점이 사라집니다.",
      "자동 혈압계는 커프를 풀 때 생기는 미세한 맥동(진동)을 감지해 수치를 계산합니다. LVAD 환자는 이 맥동이 너무 약해 측정이 실패하거나 잘못된 값이 나옵니다.",
      "MAP(평균동맥압, Mean Arterial Pressure)은 파형의 꼭대기·바닥이 아니라 '혈관 안 평균 압력'입니다. 도플러로 '혈류가 다시 흐르기 시작하는 시점'을 찾으면 MAP을 잴 수 있어, 맥이 약한 LVAD 환자에서도 가장 신뢰할 수 있는 값입니다.",
      "한마디로, '맥이 거의 없어서 수축기/이완기를 나눌 수 없고, 평균압(MAP)만 의미 있게 잴 수 있다'는 뜻입니다.",
    ],
    measurementSteps: [
      "일반 환자 → 심장이 뛸 때마다 혈관 압력이 오르내림 → 수축기/이완기 구분 가능",
      "LVAD 환자 → 기계 펌프가 연속적으로 피를 밀어 보냄 → 맥이 약하거나 없음",
      "맥이 약하면 → 혈관 안 압력 파형이 평평해짐 → 수축기·이완기 기준점이 없어짐",
      "자동 혈압계 → 맥동 진동을 감지해 계산 → 맥이 없으면 '측정 불가' 또는 오류",
      "청진(코로트코프음) → 수축기·이완기 시점을 소리로 구분 → LVAD에서는 소리 경계가 불분명",
      "MAP → 혈관 안 '평균 압력' → 맥의 꼭대기/바닥이 없어도 측정 가능",
      "도플러 MAP → 커프를 풀 때 혈류가 처음 다시 흐르는 시점 = MAP → LVAD에서 표준 방법",
      "결론: 수축기/이완기가 아니라 MAP만 재는 것은 '장비 오류'가 아니라 LVAD 환자의 정상적인 측정 방식",
    ],
    stepsTitle: "이해하기",
    stepsSubtitle: "왜 MAP만 가능한가",
    clinicalUse:
      "LVAD 환자 병동·중환자실에서 '혈압이 왜 안 잡히지?', '수축기/이완기가 왜 없지?'라는 질문에 답하는 핵심 설명입니다. 간호사가 자동 혈압계를 반복해서 시도하거나, 수축기/이완기를 억지로 기록하지 않도록 이해를 돕습니다. MAP 하나만 있어도 장기 관류(뇌·신장·장기로 가는 혈류) 평가에 충분한 정보를 줄 수 있으며, LVAD 팀은 주로 MAP 목표 범위로 혈압을 관리합니다.",
    nursingCare: {
      pre: [
        "LVAD 환자는 '수축기/이완기'가 없을 수 있음을 미리 이해",
        "자동 혈압계 실패를 기기 고장으로 오해하지 않기",
        "MAP 측정 도구(수동 커프 + 도플러) 준비",
        "동맥라인 MAP이 있으면 함께 참고",
      ],
      post: [
        "MAP만 기록해도 정상 — 'MAP XX mmHg (Doppler)' 형식 사용",
        "수축기/이완기 칸을 비워두거나 'N/A'로 기록 (기관 지침 따름)",
        "MAP + LVAD flow + RPM + 증상을 함께 기록",
        "MAP 이상 시 LVAD 팀에 보고",
      ],
    },
    keyPoints: [
      "LVAD = 연속 흐름에 가까워 맥이 약하거나 없음",
      "수축기/이완기는 '맥의 파형'이 있어야 구분 가능",
      "자동 혈압계는 맥동 감지 기반이라 LVAD에서 부정확",
      "MAP = 평균 압력 → 맥이 약해도 도플러로 측정 가능",
      "MAP만 재는 것은 LVAD 환자의 정상적인 방식",
      "실제 측정법 → 'LVAD 환자 혈압 측정법' 항목 참고",
    ],
    relatedItems: [
      "LVAD 환자 혈압 측정법",
      "LVAD",
      "MAP",
      "Doppler",
    ],
    tags: ["간호", "LVAD", "혈압", "MAP"],
  },
  {
    slug: "lvad-blood-pressure-measurement",
    title: "LVAD 환자 혈압 측정법",
    englishName: "Blood Pressure Measurement in LVAD Patients",
    koreanName: "LVAD(좌심실 보조장치) 환자 혈압 측정",
    summary:
      "LVAD 환자는 맥이 약하거나 불규칙해 자동 혈압계가 잘 안 되므로, 수동 커프와 도플러로 MAP(평균동맥압)을 재는 것이 기본",
    summaryEn:
      "LVAD patients often have weak or non-pulsatile flow, so MAP is usually measured with a manual cuff and Doppler ultrasound instead of an automatic monitor.",
    definition: [
      "LVAD(Left Ventricular Assist Device, 좌심실 보조장치)는 심장이 피를보내는 힘을 기계적으로 도와 주는 장치입니다. 심장이 스스로 뛰는 힘과 기계 펌프가 함께 피를 밀어 보내기 때문에, 맥이 약하거나 거의 느껴지지 않을 수 있습니다.",
      "그래서 병동에서 흔히 쓰는 자동 혈압계(오실로메트릭)는 LVAD 환자에서 값이 안 나오거나, 잘못된 숫자가 나오는 경우가 많습니다. '측정 불가' 또는 비현실적인 수치가 나오면 이상한 것이 아니라 흔한 상황입니다.",
      "LVAD 환자 혈압 측정의 기본은 수동 커프 + 도플러(Doppler) 초음파입니다. 커프를 천천히 풀 때 혈류 소리가 처음 다시 들리는 시점의 압력을 MAP(평균동맥압, Mean Arterial Pressure)으로 기록합니다.",
      "동맥라인(arterial line)이 있으면 그 값을 우선 참고할 수 있지만, 일상 병동 모니터링에서는 도플러 MAP이 가장 많이 쓰입니다.",
      "한마디로, '자동 혈압계 대신 수동 커프와 도플러로 MAP을 재는 것'이 LVAD 환자 혈압 측정의 기본입니다.",
    ],
    measurementSteps: [
      "환자를 편안히 앉히거나 누운 자세로 맞춥니다. LVAD 설정(RPM, flow 등)이 평소와 같은지 확인합니다.",
      "도플러 탐촉자를 상완동맥(brachial artery) 위에 놓습니다. 팔꿈치 안쪽, 팔꿈치 주름 위 약 2~3cm 지점이 일반적입니다.",
      "수동 혈압 커프를 같은 팔의 상완에 감습니다. 도플러 소리가 잘 들리는 위치를 먼저 찾은 뒤 커프를 씌웁니다.",
      "심장 소리가 방해되면 청진 대신 도플러만으로 혈류 소리를 확인합니다. '삐-' 또는 '스윙' 소리가 나면 위치가 맞은 것입니다.",
      "커프를 펌프로 가압합니다. 도플러 소리가 사라질 때까지 계속 올린 뒤, 그보다 약 20 mmHg 더 올립니다.",
      "밸브를 조금씩 열어 커프 압력을 천천히 내립니다. 보통 초당 2~3 mmHg 속도가 권장됩니다.",
      "도플러 혈류 소리가 처음 다시 들리는 순간의 커프 압력 숫자를 읽습니다. 이 값이 MAP입니다.",
      "기록 예: 'MAP 75 mmHg (Doppler)' — LVAD 환자는 수축기/이완기를 따로 잴 수 없는 경우가 많으므로 MAP으로 기록합니다.",
      "도플러 소리가 전혀 나지 않으면, 탐촉자 위치를 다시 맞추거나 반대팔로 시도합니다. 그래도 안 되면 담당 의료진에게 바로 알립니다.",
      "측정 후 LVAD 알람, 맥박수(보조맥), 호흡, 산소포화도, 환자 증상(어지럼, 흉답)을 함께 확인합니다.",
    ],
    stepsTitle: "측정 방법",
    stepsSubtitle: "수동 커프 + 도플러 MAP",
    clinicalUse:
      "LVAD 환자 병동·중환자실·조영실 전후 관리에서 가장 기본적인 활력징후 측정입니다. 자동 혈압계 수치를 그대로 믿지 않고, 도플러 MAP을 기준으로 수액·약물·활동 허용 여부를 판단합니다. MAP이 너무 낮으면(예: 60 mmHg 미만) 저혈류, 너무 높으면(예: 90 mmHg 이상) LVAD 후부하 증가·출혈 위험 등을 생각합니다. 기관마다 목표 MAP 범위가 다를 수 있으므로, 해당 환자의 LVAD 팀 지침을 함께 확인합니다.",
    nursingCare: {
      pre: [
        "자동 혈압계 대신 수동 커프 + 도플러 준비",
        "LVAD 기종·RPM·flow·알람 상태 확인",
        "동맥라인 유무 확인 — 있으면 라인 MAP과 교차 확인",
        "측정 팔 선택(AVF/접근 부위·수술 부위 피하기)",
        "환자에게 '팔을 편하게 두고 움직이지 않기' 안내",
      ],
      post: [
        "MAP 수치와 측정 방법(Doppler)을 정확히 기록",
        "자동 혈압계 '측정 불가'를 오류로 처리하지 않기",
        "MAP 이상 시 LVAD 팀·담당의 보고",
        "어지럼·흉답·호흡곤란·저산소 등 증상 함께 기록",
        "반복 측정 시 같은 방법·같은 팔로 일관되게 측정",
      ],
    },
    keyPoints: [
      "자동 혈압계는 LVAD 환자에서 종종 부정확하거나 측정 불가",
      "기본 방법: 수동 커프 + 도플러 → 첫 혈류 재개 시점 = MAP",
      "기록 형식: 'MAP XX mmHg (Doppler)'",
      "수축기/이완기가 안 잡히는 것은 흔한 상황",
      "MAP 이상·도플러 소리 없음 → 즉시 LVAD 팀에 보고",
      "기관·환자별 목표 MAP은 LVAD 팀 지침 확인",
      "왜 MAP만 가능한지 → '왜 LVAD 환자는 MAP만 측정 가능한가?' 항목 참고",
    ],
    relatedItems: [
      "왜 LVAD 환자는 MAP만 측정 가능한가?",
      "LVAD",
      "MAP",
      "Doppler",
      "Heart Failure",
    ],
    tags: ["간호", "LVAD", "혈압", "활력징후"],
  },
];

export function getNursingTopicBySlug(
  slug: string,
): KnowledgeArticle | undefined {
  return nursingTopics.find((item) => item.slug === slug);
}
