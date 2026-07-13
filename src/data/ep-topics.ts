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
    images: [
      {
        src: "/images/ep/wpw-pathway.svg",
        alt: "WPW 부속 전도로 개념도 - AV node 우회 지름길",
        caption:
          "WPW 개념도: 정상 전도(파란색)는 심방→AV node→심실로 갑니다. 부속 전도로(빨간색)는 AV node를 건너뛰는 지름길이라 심실이 일찍 excited(pre-excitation)됩니다. WPW + AF는 매우 빠른 심실 반응으로 위험할 수 있습니다.",
      },
      {
        src: "/images/ep/wpw-ecg.svg",
        alt: "WPW 심전도 - short PR, delta wave, wide QRS",
        caption:
          "WPW 심전도 3요소: ① PR간격 짧음 ② QRS 시작부 slurring = delta wave(주황) ③ QRS 약간 넓음. 점선은 정상 리듬 참고, 실선은 WPW 패턴 예시입니다.",
      },
    ],
    imagesTitle: "이해 도해 & 심전도",
    imagesSubtitle: "부속로 개념 + WPW ECG",
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
    relatedItems: ["AVRT", "SVT", "Atrial Fibrillation", "Catheter Ablation"],
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
      "【AF 카디오버전 후 PAC가 생기는 이유】 ① **심방 기질(substrate)**: AF를 앓아온 심방은 전기적으로 불안정하고, 조기 흥분이 일어나기 쉬운 부위(ectopic focus)가 이미 있습니다. 카디오버전으로 리듬만 돌아와도 심방 조직은 바로 '정상'이 되지 않습니다. ② **심방 스터닝(atrial stunning)**: AF 종료 직후 심방의 기계·전기 기능이 잠시 회복 지연 → 일시적으로 조기 박동이 잘 튀어나옵니다. ③ **카디오버전 자체의 자극**: 전기 카디오버전 시 강한 자극·통증·불안으로 **교감신경(심박↑)** 이 올라가고, 카테콜아민이 심방 이소성 흥분을 촉진합니다. ④ **자율신경 변화**: 시술 전후 긴장·통증·저산소·수액 변화가 PAC를 늘립니다. ⑤ **전해질·대사**: **K⁺, Mg²⁺** 저하, 발열, 탈수, 감염이 조기 박동을 유발·악화합니다. ⑥ **약물 전환기**: 카디오버전 전후 항부정맥제 농도 변화 구간에서 일시적으로 PAC가 늘 수 있습니다. ⑦ **재발 신호**: 카디오버전 후 **지속·다발성 PAC** 는 심방이 아직 불안정하고 **AF가 다시 생길 위험**이 높다는 임상적 단서로 봅니다.",
      "【베타차단제를 주는 이유】 PAC마다 약을 쓰는 것은 아닙니다. **증상이 있거나, PAC가 많고 지속되거나, AF 재발 위험이 높을 때** 의사가 처방합니다. ① **교감신경 억제**: β-차단으로 카테콜아민 효과를 줄여 심방 ectopic focus의 **자동성(automaticity)·triggered activity** 를 낮춥니다 — 카디오버전 직후 교감신경 항진이 PAC의 핵심 원인 중 하나이기 때문입니다. ② **증상 완화**: 빈번한 PAC로 인한 **두근거림·불쾌감**을 줄이고, 조기 박동 이후 compensatory pause로 느껴지는 '멈춤·추락감'도 완화에 도움이 됩니다. ③ **심박수·심근 산소요구 감소**: 심박이 너무 빨라지지 않게 해 **심근 부담**을 줄입니다. ④ **AF 재발 예방 보조**: 베타차단제는 AF **율조절(rate control)** 1차 약물이며, 카디오버전 후 리듬 유지·재발 감소에 기여할 수 있습니다(환자·병력·가이드라인에 따라). ⑤ **다른 부정맥 진행 억제**: PAC가 연속되면 **짧은 AF run·다발성 PAC** 로 이어질 수 있어, 초기에 억제하는 전략입니다. 대표 약물: **메토프롤롤(Lopressor/Toprol), 비소프롤롤(Concor), 아테놀롤(Tenormin), 에스몰롤(Brevibloc IV)** 등. **주의**: **서맥·저혈압·천식/COPD·급성심부전·쇼크** 에서는 신중하거나 피합니다.",
      "한마디로, '심방에서 일찍 튀는 박동'이고, AF 카디오버전 후에는 심방 불안정·교감신경 항진·전해질 등으로 흔히 보이며, 필요 시 베타차단제로 PAC·증상·AF 재발 위험을 함께 관리합니다.",
    ],
    images: [
      {
        src: "/images/ep/pac-ecg.svg",
        alt: "PAC 심전도 예시 - 조기 P파(P'), 좁은 QRS, 보상간격",
        caption:
          "PAC 심전도 예시: 정상 리듬 중 갑자기 일찍 나온 P'(주황색) 뒤에 QRS가 붙습니다. 대부분 QRS는 좁고, PAC 뒤에 pause가 생기기 쉽습니다(완전 보상간격이 아닌 경우 많음). AF 카디오버전 후 이런 파형이 연속으로 많아지면 AF 재발 위험을 함께 봅니다.",
      },
    ],
    imagesTitle: "심전도",
    imagesSubtitle: "PAC 리듬 파형",
    measurementSteps: [
      "심전도에서 정상 리듬 중 갑자기 일찍 나온 P'(조기 P파, 모양이 다를 수 있음) + QRS를 찾습니다 → PAC입니다.",
      "몇 분·몇 시간 동안 얼마나 자주 나오는지 세거나 모니터 알람 빈도를 봅니다. (예: 연속 다발, 매 박동마다 등)",
      "AF 카디오버전 직후라면 → 시술 직후 24~48시간 내 일시적으로 많아지는 것은 흔함",
      "【왜 생기나】 심방 기질(원래 AF 취약) + 스터닝 + 시술 자극·교감신경↑ + K/Mg 이상 → PAC 증가. 줄어드는 추세면 일시적, 늘면 AF 재발 의심",
      "환자 증상 확인 → 두근거림, 흉답, 어지럼, 호흡곤란, 혈압 저하 여부",
      "전해질·감염·통증·수면·카페인·음주 등 유발 요인 확인 (특히 K⁺, Mg²⁺)",
      "많은 PAC가 지속되면 → 'AF가 다시 생길 위험이 높다'는 신호일 수 있음 (심방이 아직 불안정)",
      "혈역학 불안정·지속 흉통·의식 변화 → 즉시 의료진 보고",
      "안정적이고 일시적이면 → 관찰 + 전해질 보정 + 유발 요인 제거",
      "【베타차단제 검토 시점】 증상(두근거림) 있음, PAC 빈번·지속, AF 재발 위험 높음, 심박 빠름 → 메토프롤롤·비소프롤롤·아테놀롤 등 검토",
      "【베타차단제 목적】 교감신경 억제(PAC↓) + 증상 완화 + 심박·MVO2↓ + AF 재발 예방 보조 — 서맥·저혈압·천식·쇼크 시 주의",
      "베타차단제로 부족하면 → 비수술적 CCB(디르티아젬/베라파밀), 항부정맥제 조정 검토",
      "PAC가 매우 많고 AF 재발이 반복되면 → 항부정맥제 조정, 또는 EP 검사·심방 부위 절제술(ablation) 검토",
    ],
    stepsTitle: "이해·대응 순서",
    stepsSubtitle: "특히 AF 카디오버전 이후",
    clinicalUse:
      "EP Lab·회복실·병동 모니터에서 AF 카디오버전 직후 가장 흔히 보는 소견 중 하나입니다. PAC가 늘어나는 이유는 단순 '시술 실패'가 아니라, **심방 전기 불안정·스터닝·교감신경 항진·전해질** 등이 겹치기 때문인 경우가 많습니다. 시술 직후 PAC가 많아도 환자가 안정적이고 점차 줄어들면 대개 일시적 반응으로 봅니다. 다만 PAC가 많고 지속되면 AF 재발 가능성이 높아지므로, 24~48시간 이상 지속·증가하면 전해질, 약물, 재발 위험을 함께 평가합니다. **베타차단제**는 모든 PAC 환자에게 주는 것이 아니라, 증상·빈도·재발 위험이 있을 때 교감신경을 억제하고 두근거림을 줄이며 AF 유지에 도움을 주기 위해 처방합니다. 투여 후에는 **서맥·저혈압**을 반드시 모니터합니다.",
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
        "베타차단제 시작 시 HR·BP 모니터, 서맥·저혈압 즉시 보고",
      ],
    },
    keyPoints: [
      "PAC = 심방에서 일찍 나오는 조기 박동",
      "AF 카디오버전 후 PAC↑ → 심방 기질·스터닝·교감신경↑·K/Mg 이상",
      "일시적·감소 추세 → 관찰, 지속·증가 → AF 재발 위험",
      "베타차단제 이유: 교감신경 억제, 증상 완화, 심박↓, AF 재발 예방 보조",
      "베타차단제는 증상·빈번·재발 위험 시 — 서맥·저혈압·천식 주의",
      "먼저 확인: 증상, 혈압, 전해질(K/Mg), AF 재발 여부",
    ],
    relatedItems: [
      "Atrial Fibrillation",
      "Cardioversion",
      "Atrial Fibrillation Ablation",
      "Beta Blockers",
      "Electrolytes",
    ],
    tags: ["EP", "부정맥", "심전도", "AF", "카디오버전"],
  },
  {
    slug: "mi-ecg-by-location",
    title: "심근경색 부위별 ECG",
    englishName: "ECG Changes by Myocardial Infarction Location",
    koreanName: "STEMI·NSTEMI 부위별 심전도 변화",
    summary:
      "심근 괴사 부위마다 ST 상승·Q파·역변화가 나타나는 유도가 다름 — 전벽·하벽·측벽·후벽·중격·우심실, 관상동맥 연관",
    summaryEn:
      "Each infarct territory shows characteristic ST elevation, Q waves, and reciprocal changes on specific leads — anterior, inferior, lateral, posterior, septal, and RV with coronary correlation.",
    definition: [
      "급성 **심근경색(MI)** 에서 심전도는 **어느 부위 심근이 괴사 중인지** 가르는 가장 빠른 단서입니다. **STEMI**는 해당 유도에서 **ST segment elevation** 이 보이고, 시간이 지나면 **병리적 Q파**가 생길 수 있습니다.",
      "핵심 원리: **인접한 2개 이상 유도(contiguous leads)** 에서 ST↑가 나오면 그 **영역(territory)** 의 STEMI를 의심합니다. 한 유도만 보면 안 되고, **유도 조합 + 증상 + troponin**을 함께 봅니다.",
      "**전벽(Anterior)** = V1~V4 · **중격(Septal)** = V1~V2 · **측벽(Lateral)** = I, aVL, V5~V6 · **하벽(Inferior)** = II, III, aVF · **후벽(Posterior)** = V7~V9 ST↑ (전흉 V1~V3에서는 ST↓·R파 증가로 간접 소견) · **우심실(RV)** = **V4R** ST↑ (하벽 STEMI와 함께 확인)",
      "관상동맥 연관(일반적): **LAD** → 전벽·중격 · **RCA** → 하벽(+우심실·후벽) · **LCx(좌관상동맥)** → 측벽·후벽. 조영실에서는 ECG 패턴으로 **어느 혈관을 먼저 열어야 하는지** 예측합니다.",
      "한마디로, **'ST↑가 어느 유도에 있느냐 = 괴사 부위 = 의심 혈관'** 입니다.",
    ],
    images: [
      {
        src: "/images/ep/mi-ecg-stemi-patterns.svg",
        alt: "STEMI 부위별 ECG ST 변화 - Anterior, Inferior, Lateral, Posterior, V4R",
        caption:
          "부위별 ST segment 패턴 예시. 주황 = ST elevation(STEMI) · 보라 = ST depression(후벽 간접 소견). Anterior(V1-V4) · Inferior(II,III,aVF) · Lateral(I,aVL,V5-V6) · Posterior(V1-V3 ST↓, V7-V9 ST↑) · RV(V4R).",
      },
      {
        src: "/images/ep/mi-ecg-12lead-anterior.svg",
        alt: "12-lead ECG Anterior STEMI 예시 - V2-V4 ST elevation, inferior reciprocal ST depression",
        caption:
          "전벽 STEMI 12-lead 배치 예시: V2-V4 ST↑가 두드러지고, 하벽 유도(II, III, aVF)에 역변화 ST↓가 동반될 수 있습니다(LAD 폐색 패턴).",
      },
      {
        src: "/images/ep/mi-ecg-locations.svg",
        alt: "심근경색 부위별 ECG 유도 매핑 - Anterior, Inferior, Lateral, Posterior",
        caption:
          "STEMI 부위별 대표 유도와 관상동맥 연관: Anterior(V1-V4, LAD) · Inferior(II,III,aVF, RCA) · Lateral(I,aVL,V5-V6, LCx) · Posterior(V7-V9).",
      },
    ],
    imagesTitle: "심전도",
    imagesSubtitle: "부위별 ST↑ 패턴 · 12-lead 예시",
    measurementSteps: [
      "【STEMI 진단 기준(요약)】 **2개 이상 인접 유도**에서 ST↑ **≥1 mm**(흉유도) · **V2-V3**는 성별·나이별 기준(남 <40세 2.5mm, ≥40세 2mm, 여 1.5mm) · **새로운 LBBB** = STEMI equivalent(동등 소견) · **후벽**은 V7-V9 ST↑로 확정",
      "【전벽 Anterior STEMI】 **ST↑ V1, V2, V3, V4**(2개 이상 연속) · **역변화(reciprocal)**: 하벽(II,III,aVF) ST↓ · **Q파** 나중에 V1-V4 · **의심 혈관: LAD** · 임상: 전심실 기능 저하·심부전·killip 높음 가능",
      "【중격 Septal】 **ST↑ V1-V2** 중심(전벽과 겹침 많음) · **병리적 Q V1-V2** · LAD proximal/septal branch · 전벽 STEMI와 함께 해석",
      "【측벽 Lateral STEMI】 **고측벽**: ST↑ **I, aVL** · **저측벽**: ST↑ **V5, V6** · 전체 측벽: I,aVL + V5-V6 · **역변화**: 하벽 또는 V1-V3 ST↓ · **의심 혈관: LCx**, LAD diagonal/obtuse marginal",
      "【하벽 Inferior STEMI】 **ST↑ II, III, aVF** 중 **2개 이상** · **역변화**: I, aVL ST↓ · **의심 혈관: RCA**(가장 흔함), LCx · **반드시**: **우심실 MI** 배제 위해 **V4R** 기록 — ST↑ 있으면 **nitrate/nitroglycerin 신중**, **수액 우선**",
      "【후벽 Posterior STEMI】 전흉 유도만 보면 **놓치기 쉬움** · **간접 소견**: **V1-V3 ST depression** + **tall R wave** + upright T · **확정**: **V7, V8, V9 ST elevation** (후흉 유도) · RCA 또는 LCx · **하벽 STEMI와 동반** 흔함",
      "【우심실 RV infarction】 **하벽 STEMI 환자**에서 · **V4R ST↑ ≥1 mm** · 저혈압·JVD·clear lungs · **치료**: **수액**, **니트로·이뇨제·마약제 신중**(preload↓ 위험)",
      "【시간에 따른 변화】 초기(수시간): **ST↑** · 수일: **T파 변화** · 수주~: **Q파 고정**, ST 정상화 · **NSTEMI**: ST↑ 없음(일시 ST↓·T inversion 가능) — 부위별 패턴은 STEMI만큼 뚜렷하지 않음",
      "【조영실·응급 연결】 Anterior/LAD → **긴급 PCI LAD** · Inferior/RCA → **RCA PCI**, RV MI면 **수액·혈압** 먼저 · Posterior → **후벽 유도 재확인**, RCA/LCx · Lateral/LCx → **LCx 또는 branch** · ECG + 증상 + echo(벽운동 이상) 종합",
      "【한눈에 표】 Anterior=V1-V4(LAD) · Septal=V1-V2 · Lateral=I,aVL,V5-V6(LCx) · Inferior=II,III,aVF(RCA) · Posterior=V7-V9 · RV=V4R",
    ],
    stepsTitle: "부위별 ECG",
    stepsSubtitle: "ST↑ 유도 · 역변화 · 관상동맥",
    clinicalUse:
      "응급실·조영실·CCU에서 12-lead ECG를 보면 가장 먼저 '어느 벽 STEMI인가'를 분류합니다. 하벽 STEMI에서 V4R을 안 보면 우심실 MI를 놓쳐 니트로글리세린으로 저혈압·쇼크를 유발할 수 있고, 후벽 STEMI를 전흉만으로 놓치면 reperfusion이 지연됩니다. EP/조영 팀은 ECG 패턴을 관상동맥 해부와 연결해 PCI 전략을 세우고, STEMI equivalent(LBBB 등)도 빠르게 인식해야 합니다.",
    nursingCare: {
      pre: [
        "12-lead ECG 즉시·10분마다 재기록(기관 프로토콜)",
        "하벽 STEMI → V4R 유도 추가 확인 요청",
        "후벽 의심(V1-V3 ST↓, tall R) → V7-V9 기록",
        "ST↑ 유도·증상·troponin·혈압 동시 기록",
        "STEMI 활성화·조영실 이송 시간 기록",
      ],
      post: [
        "재관류(PCI) 전후 ECG 비교 — ST↓(reciprocal improvement) 확인",
        "새로운 부정맥(VF, AV block — 하벽/RCA) 모니터",
        "RV MI 시 니트로·이뇨제 투여 여부 의사 확인",
        "재발 흉통 시 즉시 12-lead 재취득",
        "ECG·시간·증상 변화 정확히 문서화",
      ],
    },
    keyPoints: [
      "2개 이상 인접 유도 ST↑ = STEMI territory",
      "Anterior V1-V4(LAD) · Inferior II,III,aVF(RCA)",
      "Lateral I,aVL,V5-V6(LCx) · Posterior V7-V9",
      "하벽 STEMI → V4R(우심실) 필수",
      "후벽: V1-V3 ST↓·tall R → V7-V9 확인",
      "ECG 부위 = PCI 타깃 혈관 예측",
    ],
    relatedItems: [
      "STEMI",
      "NSTEMI",
      "LAD",
      "RCA",
      "PCI",
      "TnT ACS Interpretation",
    ],
    tags: ["EP", "심전도", "STEMI", "MI", "12-lead", "조영실"],
  },
];

export function getEpTopicBySlug(slug: string): KnowledgeArticle | undefined {
  return epTopics.find((item) => item.slug === slug);
}
