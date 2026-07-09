import type { KnowledgeArticle } from "@/types/knowledge-article";

export const epTopics: KnowledgeArticle[] = [
  {
    slug: "wpw-syndrome",
    title: "WPW 증후군",
    englishName: "Wolff-Parkinson-White Syndrome",
    koreanName: "볼프-파킨슨-화이트 증후군",
    summary:
      "심장에 엉뚱한 전기 길(부속로)이 있어, 심박이 갑자기 빨라지거나 위험한 부정맥이 생길 수 있는 상태",
    summaryEn:
      "WPW syndrome is when an extra electrical pathway in the heart can cause rapid heartbeats and dangerous arrhythmias.",
    definition: [
      "WPW 증후군은 심장에 정상 전도로 말고도, 심방과 심실을 직접 잇는 '부속 전도로(accessory pathway)'가 있는 상태입니다.",
      "정상적으로 전기 신호는 심방→방실결절(AV node)→심실 순서로 전달됩니다. 그런데 WPW는 지름길이 있어서, 일부 신호가 AV node를 건너뛰고 심실로 먼저 들어갑니다.",
      "심전도에서는 PR간격이 짧고, QRS 시작 부분이 둔하게 보이는 delta파가 나타나며, QRS가 약간 넓어지는 것이 특징입니다.",
      "많은 사람은 평소 증상이 없지만, 갑자기 심박이 빨라지는 발작(SVT)이 생길 수 있습니다. 특히 심방세동(AF)이 생기면 매우 빠른 심실 반응으로 위험해질 수 있어 주의가 필요합니다.",
      "한마디로, '심장에 전기 지름길이 있어 부정맥이 생기기 쉬운 상태'입니다.",
    ],
    measurementSteps: [
      "심전도에서 3가지를 봅니다: ① PR간격 짧음 ② delta파 ③ QRS 약간 증가 → 이 조합이면 WPW 패턴을 의심합니다.",
      "환자에게 갑작스러운 두근거림, 어지럼, 실신, 가슴 답답함이 있었는지 병력을 묻습니다.",
      "발작이 있었다면 어떤 상황에서 시작됐는지(운동, 스트레스, 카페인 등)도 함께 확인합니다.",
      "심방세동이 있는지 확인합니다. WPW + AF는 위험한 조합이라 우선순위가 높습니다.",
      "증상이 있거나 위험 소견이 있으면 전기생리검사(EPS)와 카테터 절제술(ablation)을 검토합니다.",
      "절제술은 부속 전도로를 찾아 무력화해 지름길을 끊는 치료입니다. 성공률이 높은 편입니다.",
      "응급 시 약물 선택에 주의합니다. WPW에서 심방세동일 때 AV node만 막는 약 단독 사용은 위험할 수 있어, 전문 지침을 따릅니다.",
    ],
    stepsTitle: "이해 순서",
    stepsSubtitle: "진단부터 치료까지",
    clinicalUse:
      "EP(전기생리) 클리닉·응급실·조영실 인근 모니터링에서 자주 다루는 부정맥 질환입니다. 젊은 환자의 갑작스러운 빈맥, 실신, 'delta wave' 심전도 소견에서 먼저 떠올립니다. Cath Lab/EP Lab에서는 부속로 위치를 찾고 절제하는 시술이 핵심이며, 시술 전후 리듬·혈압·증상 변화를 꼼꼼히 봐야 합니다.",
    keyPoints: [
      "핵심: 심방-심실을 잇는 부속 전도로(지름길)",
      "심전도 3요소: 짧은 PR, delta파, 넓은 QRS",
      "증상: 갑작스러운 빈맥(SVT), 실신 가능",
      "WPW + 심방세동 = 고위험 → 응급 대응 중요",
      "치료: 증상/위험 있으면 카테터 절제술(ablation) 검토",
    ],
    relatedItems: ["SVT", "Atrial Fibrillation", "Catheter Ablation"],
    tags: ["EP", "부정맥", "심전도", "부속로"],
  },
  {
    slug: "avrt",
    title: "AVRT",
    englishName: "Atrioventricular Reentrant Tachycardia",
    koreanName: "방실재진입성 빈맥",
    summary:
      "심방과 심실 사이를 전기가 빙글빙글 도는 부정맥으로, WPW에서 가장 흔한 발작성 빈맥",
    summaryEn:
      "AVRT is a reentrant tachycardia using the AV node and an accessory pathway, and it is the most common tachycardia in WPW.",
    definition: [
      "AVRT(방실재진입성 빈맥)는 심방→심실→다시 심방으로 전기가 '한 바퀴 도는' 부정맥입니다. 정상 전도로(AV node)와 부속 전도로가 함께 쓰이면서 생깁니다.",
      "WPW 증후군 환자에서 가장 흔한 발작성 SVT가 AVRT입니다. 갑자기 심박이 빨라지고, 끝나면 갑자기 정상으로 돌아오는 패턴이 흔합니다.",
      "크게 두 가지가 있습니다. ① Orthodromic AVRT: 전기가 AV node로 내려가고 부속로로 올라옴 → QRS가 보통 좁음 ② Antidromic AVRT: 전기가 부속로로 내려가고 AV node로 올라옴 → QRS가 넓고 delta파가 더 뚜렷할 수 있음",
      "환자는 갑작스러운 두근거림, 답답함, 어지럼, 실신을 호소합니다. 혈압이 떨어지거나 호흡곤란이 있으면 응급 상황으로 봅니다.",
      "한마디로, '심방-심실 지름길을 이용해 전기가 빙글 도는 빠른 심박'입니다.",
    ],
    images: [
      {
        src: "/images/ep/avrt-ecg.svg",
        alt: "AVRT orthodromic 심전도 예시 - 규칙적인 좁은 QRS 빈맥",
        caption:
          "Orthodromic AVRT 예시: 리듬이 규칙적이고 QRS가 좁은(narrow) 빈맥 형태로 보이는 경우가 많습니다. 실제 환자 파형은 케이스마다 다를 수 있습니다.",
      },
    ],
    imagesTitle: "심전도",
    imagesSubtitle: "참고 파형",
    measurementSteps: [
      "심전도에서 심박이 갑자기 빨라졌는지, 리듬이 규칙적인지 확인합니다.",
      "QRS 폭을 봅니다: 좁으면 orthodromic AVRT 가능성이 큽니다. 넓으면 antidromic AVRT 또는 다른 원인을 생각합니다.",
      "발작 전·후 심전도가 있으면 비교합니다. 발작 전 WPW 소견(짧은 PR, delta파)이 있었다면 AVRT 가능성이 더 높아집니다.",
      "혈압, 의식, 산소포화도, 흉통/호흡곤란 여부를 즉시 확인합니다.",
      "혈역학이 불안정하면 즉시 응급 프로토콜(동기화 심율동전환술 등)을 고려합니다.",
      "안정적이면 vagal maneuver, ATP, 베타차단제/칼슘채널차단제 등을 전문 지침에 따라 사용합니다.",
      "재발이 잦거나 WPW가 있으면 EP 검사 후 카테터 절제술로 부속로를 끊는 것을 검토합니다.",
    ],
    stepsTitle: "이해 순서",
    stepsSubtitle: "심전도부터 처치까지",
    clinicalUse:
      "EP Lab·응급실·심전도 모니터링에서 가장 자주 보는 WPW 관련 발작성 빈맥입니다. '갑자기 빨라졌다가 갑자기 멈춤' 병력과 규칙적 빈맥 파형이 단서입니다. 조영실/EP 팀은 발작 중 리듬·혈압 모니터링, 급성 처치 준비, 절제술 전 부속로 위치 확인을 체계적으로 진행합니다.",
    keyPoints: [
      "WPW에서 가장 흔한 발작성 SVT",
      "Orthodromic: 좁은 QRS / Antidromic: 넓은 QRS",
      "심전도: 규칙적인 빈맥이 핵심 단서",
      "혈역학 불안정 시 즉시 전기 심율동전환술 고려",
      "근본 치료: 부속로 절제(ablation)",
    ],
    relatedItems: ["WPW 증후군", "SVT", "Catheter Ablation"],
    tags: ["EP", "부정맥", "심전도", "WPW"],
  },
  {
    slug: "pac",
    title: "PAC",
    englishName: "Premature Atrial Contraction",
    koreanName: "심방 조기수축",
    summary:
      "심방에서 정상 박동보다 일찍 전기 신호가 나와 '두근' 한 번 뛰는 조기 박동이며, AF 카디오버전 직후 많이 보일 수 있음",
    summaryEn:
      "A PAC is an early heartbeat originating in the atrium. Frequent PACs are common right after AF cardioversion and may signal AF recurrence risk.",
    definition: [
      "PAC(Premature Atrial Contraction, 심방 조기수축)는 심방 어딘가에서 정상 리듬보다 먼저 전기 신호가 튀어 나와, 심장이 '일찍 한 번 뛰는' 박동입니다. 흔히 '심방성 수축조기박동'이라고도 부릅니다.",
      "심전도에서는 정상 P파보다 일찍 나오는 이상 P파(또는 P파 모양이 다른 조기 P파) 뒤에 QRS가 붙습니다. 대부분 QRS는 좁지만, 전도가 늦어지면 넓어질 수 있습니다.",
      "가끔 한두 번이면 건강한 사람에게도 흔하고, 증상이 없으면 크게 문제 없는 경우가 많습니다. 그런데 '많이' 반복되면 두근거림, 불편감, 또는 다른 부정맥으로 이어질 수 있습니다.",
      "특히 심방세동(AF) 카디오버전(전기 또는 약물로 정상 리듬 복귀) 직후에는 PAC가 많이 나오는 것이 흔합니다. 심장이 방금 큰 전기 자극이나 리듬 변화를 겪었고, 원래 AF가 생기기 쉬웠던 심방 조직이 아직 예민한 상태이기 때문입니다.",
      "한마디로, '심방에서 일찍 튀는 박동'이고, AF 카디오버전 후에는 자주 보이며 AF 재발 신호일 수도 있습니다.",
    ],
    measurementSteps: [
      "심전도에서 정상 리듬 중 갑자기 일찍 나온 P파(또는 P파 모양 변화) + QRS를 찾습니다 → PAC입니다.",
      "몇 분·몇 시간 동안 얼마나 자주 나오는지 세거나 모니터 알람 빈도를 봅니다. (예: 연속 다발, 매 박동마다 등)",
      "AF 카디오버전 직후라면 → 시술 직후 24~48시간 내 일시적으로 많아지는 것은 흔함",
      "환자 증상 확인 → 두근거림, 흉답, 어지럼, 호흡곤란, 혈압 저하 여부",
      "전해질·감염·통증·수면·카페인·음주 등 유발 요인 확인 (특히 K⁺, Mg²⁺)",
      "많은 PAC가 지속되면 → 'AF가 다시 생길 위험이 높다'는 신호일 수 있음 (심방이 아직 불안정)",
      "혈역학 불안정·지속 흉통·의식 변화 → 즉시 의료진 보고",
      "안정적이고 일시적이면 → 관찰 + 전해질 보정 + 유발 요인 제거",
      "증상이 있거나 PAC가 계속 많으면 → 베타차단제/칼슘채널차단제 등 증상 완화·AF 재발 예방 약물 검토",
      "PAC가 매우 많고 AF 재발이 반복되면 → 항부정맥제 조정, 또는 EP 검사·심방 부위 절제술(ablation) 검토",
    ],
    stepsTitle: "이해·대응 순서",
    stepsSubtitle: "특히 AF 카디오버전 이후",
    clinicalUse:
      "EP Lab·회복실·병동 모니터에서 AF 카디오버전 직후 가장 흔히 보는 소견 중 하나입니다. 시술 직후 PAC가 많아도 환자가 안정적이고 점차 줄어들면 대개 일시적 반응으로 봅니다. 다만 PAC가 많고 지속되면 AF 재발 가능성이 높아지므로, 24~48시간 이상 지속·증가하면 전해질, 약물, 재발 위험을 함께 평가합니다. 조영실/EP 팀은 'PAC 많음'을 단순 모니터 알람으로 넘기지 말고, 리듬이 다시 AF로 바뀌는지, 환자 증상·혈압 변화를 함께 봐야 합니다.",
    nursingCare: {
      pre: [
        "AF 카디오버전 환자 → 시술 후 PAC 증가가 흔함을 미리 인지",
        "시술 전후 전해질(K, Mg) 결과 확인",
        "카페인·흥분·수면 부족 등 유발 요인 병력 확인",
      ],
      post: [
        "회복실에서 리듬·혈압·증상(두근거림, 흉답) 지속 모니터링",
        "PAC 빈도가 줄어드는지 vs 늘어나는지 추세 관찰",
        "AF 재발(불규칙 리듬 재출현) 여부 즉시 확인",
        "전해질 이상·발열·통증 등 교정 가능한 원인 확인",
        "PAC가 많고 증상 있으면 담당의·EP 팀에 보고",
      ],
    },
    keyPoints: [
      "PAC = 심방에서 일찍 나오는 조기 박동",
      "AF 카디오버전 직후 PAC 증가 → 흔하고, 대개 일시적",
      "많이·지속되면 → 심방 불안정, AF 재발 위험 신호일 수 있음",
      "먼저 확인: 증상, 혈압, 전해질(K/Mg), AF 재발 여부",
      "안정적·일시적 → 관찰 + 전해질·유발 요인 교정",
      "증상 있거나 지속 → 베타차단제/CCB, 필요 시 항부정맥제·절제술 검토",
    ],
    relatedItems: [
      "Atrial Fibrillation",
      "Cardioversion",
      "Atrial Fibrillation Ablation",
      "Electrolytes",
    ],
    tags: ["EP", "부정맥", "심전도", "AF", "카디오버전"],
  },
];

export function getEpTopicBySlug(slug: string): KnowledgeArticle | undefined {
  return epTopics.find((item) => item.slug === slug);
}
