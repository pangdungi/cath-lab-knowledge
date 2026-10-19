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
        src: "/images/ep/mi-ecg/contiguous-leads-territory.svg",
        alt: "12-lead ECG 리드 그리드 - 부위별 색상 매핑 (Contiguous leads)",
        caption:
          "**12-lead 리드 배치 + 부위별 색상.** 주황=중격(V1-V2) · 파랑=전벽(V3-V4) · 노랑=하벽(II,III,aVF) · 초록=측벽(I,aVL,V5-V6) · 분홍=aVR. **인접 유도(contiguous)** 2개 이상 ST↑ = 해당 territory STEMI. 출처: Wikimedia Commons, Cburnett, CC BY-SA 3.0.",
      },
      {
        src: "/images/ep/mi-ecg/mi-regions-overview.jpg",
        alt: "심근경색 부위별 ECG 유도 매핑 - ECGpedia MI regions",
        caption:
          "**ECGpedia MI regions 개요도.** 심장 벽면(전벽·측벽·하벽·중격)과 **어느 ECG 유도가 그 부위를 보는지** 한눈에 연결. LAD→전벽·중격 · RCA→하벽 · LCx→측벽. 출처: Wikimedia Commons, CardioNetworks ECGpedia, CC BY-SA 3.0.",
      },
      {
        src: "/images/ep/mi-ecg/coronary-arteries-territory.png",
        alt: "관상동맥 해부와 혈관 공급 영역 - LAD RCA LCx",
        caption:
          "**관상동맥 위치 + 공급 영역.** **LAD(좌전하행지)** = 전벽·중격(V1-V4) · **RCA(우관상동맥)** + PDA = 하벽(II,III,aVF) · **LCx(좌회선지)** = 측벽(I,aVL,V5-V6). ECG ST↑ 유도 → 의심 혈관 연결의 해부학 기준. 출처: Wikimedia Commons, Patrick J. Lynch / Mikael Häggström, CC BY-SA 3.0.",
      },
      {
        src: "/images/ep/mi-ecg/heart-anterolateral-infarct-ecgpedia.png",
        alt: "3D 심장 전측벽 괴사 영역 시각화 - ECGpedia",
        caption:
          "**3D 심장 + 괴사 영역(하이라이트).** 전측벽(anterolateral) MI 시 **LAD 공급 부위**가 어디인지 입체적으로 표시. 이 부위 괴사 → V1-V6, I, aVL ST↑ 패턴. 출처: Wikimedia Commons, CardioNetworks ECGpedia / R.C.B. Kreuger, CC BY-SA 3.0.",
      },
      {
        src: "/images/ep/mi-ecg/stemi-color-coded-leads.jpg",
        alt: "색상 코딩 STEMI 12-lead - 전벽 ST elevation 주황, 하벽 역변화 파랑",
        caption:
          "**색상 코딩 STEMI 예시.** 주황=ST elevation(전벽 V2-V5, I, aVL) · 파랑=역변화 ST depression(하벽 II,III,aVF). 전벽 STEMI에서 하벽 유도에 reciprocal ST↓가 동반되는 전형 패턴. 출처: Wikimedia Commons, Displaced, Public Domain.",
      },
      {
        src: "/images/ep/mi-ecg/anterior-v2-4-stemi.jpg",
        alt: "실제 12-lead ECG - 전벽 STEMI V2-V4 ST elevation",
        caption:
          "**전벽 STEMI 실제 심전도.** V2-V4에서 **ST elevation** 이 두드러집니다(LAD 폐색 패턴). 전흉 유도 2개 이상 연속 ST↑ = 전벽 STEMI 의심. 출처: Wikimedia Commons, Med Chaos, CC BY-SA 4.0.",
      },
      {
        src: "/images/ep/mi-ecg/anterior-stemi.jpg",
        alt: "실제 12-lead ECG - 전벽 STEMI ST elevation",
        caption:
          "**전벽 STEMI 실제 12-lead.** 내원 시 촬영 ECG — 전벽 유도 ST elevation. Cureus 사례. 출처: Cureus 2018;10(4):e2523, CC BY 4.0.",
      },
      {
        src: "/images/ep/mi-ecg/inferior-stemi.jpg",
        alt: "실제 12-lead ECG - 하벽 STEMI II III aVF ST elevation",
        caption:
          "**하벽 STEMI 실제 심전도.** II, III, aVF에서 **ST elevation**(Pardee wave) · 전측벽 유도에 **역변화 ST depression** 동반. 의심 혈관: RCA(가장 흔함). 출처: Wikimedia Commons, Glenlarson, CC BY-SA 3.0.",
      },
      {
        src: "/images/ep/mi-ecg/anterolateral-stemi.jpg",
        alt: "실제 12-lead ECG - 전측벽 STEMI",
        caption:
          "**전측벽(Anterolateral) STEMI 실제 심전도.** 전벽(V1-V4) + 측벽(I, aVL, V5-V6) ST↑ 패턴. LAD·LCx 병변 범위가 넓을 때. 출처: Wikimedia Commons, James Heilman MD, CC BY-SA 3.0.",
      },
      {
        src: "/images/ep/mi-ecg/inferior-rv-stemi.jpg",
        alt: "실제 12-lead ECG - 하벽 + 우심실 STEMI",
        caption:
          "**하벽 + 우심실(RV) STEMI 실제 심전도.** 하벽 ST↑와 함께 **V4R** 확인이 필요합니다 — RV MI면 니트로·이뇨제 신중, 수액 우선. 출처: Wikimedia Commons, James Heilman MD, CC BY-SA 4.0.",
      },
      {
        src: "/images/ep/mi-ecg/posterior-stemi.jpg",
        alt: "실제 ECG - 후벽 STEMI (전흉 ST depression, 뒤집어 본 후벽 ST elevation)",
        caption:
          "**후벽 STEMI 실제 심전도.** 전흉 V1-V3에서는 **ST depression + tall R** 로만 보이는 경우가 많습니다. ECG를 뒤집으면 후벽 **ST elevation** 이 드러납니다. 확정은 **V7-V9** 유도. 출처: Wikimedia Commons / LITFL, CC BY-SA 3.0.",
      },
    ],
    imagesTitle: "심전도",
    imagesSubtitle: "부위별 리드 매핑 · 관상동맥 · 실제 12-lead ECG",
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
  {
    slug: "pacemaker-modes",
    title: "페이스메이커 모드",
    englishName: "Pacemaker Modes (NBG Code)",
    koreanName: "심장박동기 모드 정리 — VVI · DDD · AAI 등",
    summary:
      "NBG 코드 3~5자리로 페이싱·센싱·반응을 읽는 법 — VVI, AAI, DDD, DDDR 등 임상에서 쓰는 모드와 적응증·심전도 소견",
    summaryEn:
      "NBG pacemaker nomenclature — how to read pacing, sensing, and response letters; common modes (VVI, AAI, DDD, DDDR) with indications and ECG clues.",
    definition: [
      "페이스메이커(PPM, permanent pacemaker) 모드는 **NBG 코드**(North American Society of Pacing and Electrophysiology / BPEG / NASPE)로 표기합니다. 보통 **3~4글자**(때로 5글자)로 **무엇을 박동(pace)·무엇을 감지(sense)·어떻게 반응(response)** 하는지 나타냅니다.",
      "**읽는 법(앞 3자리가 핵심)** ① **1번째 = Pacing(박동하는 챔버)**: O=없음 · A=심방(Atrium) · V=심실(Ventricle) · D=Dual(심방+심실) ② **2번째 = Sensing(감지하는 챔버)**: O · A · V · D ③ **3번째 = Response(감지 후 반응)**: O=반응 없음 · T=Triggered(감지 시 즉시 박동 유발) · I=Inhibited(자발 박동 있으면 박동 억제) · D=Dual(T+I 둘 다 — 심방·심실 각각 다르게) ④ **4번째(선택) = Rate modulation**: O=없음 · R=Rate-responsive(활동·호흡에 따라 빈도 조절) ⑤ **5번째(선택) = Multisite**: 양심실·CRT 등 — 임상에서 자주 생략",
      "**한마디 예시**: **VVI** = 심실만 박동·심실만 감지·자발 심실 박동 있으면 **억제(inhibit)** → '심실만 단독으로 도는 모드'. **DDD** = 심방·심실 모두 박동·감지·**이중 반응** → 심방 자발 박동 있으면 심방 박동 억제, 심실 자발 박동 있으면 심실 박동 억제, **AV 동기화** 유지.",
      "조영실·CCU·병동에서 환자 팔찌·차트·디바이스 카드에 **VVI 60**, **DDD 60/130** 처럼 적혀 있습니다. **60** = 하한 빈도(lower rate, bpm) · **130** = 상한 추적 빈도(upper tracking rate) — DDD에서 심방이 빨라지면 심실도 따라가되 이 값까지만.",
      "심전도에서 **페이싱 spike(수직 날카로운 선)** 가 보이면 인공 박동입니다. **심방 spike + P파**, **심실 spike + QRS** 순서로 나오면 DDD 정상 동작. **Spike만 있고 P/QRS 없으면 failure to capture** · **자발 QRS 있는데 spike도 겹치면 fusion/capture 확인** 필요.",
      "한마디로, **'NBG 글자 = 어디를 얼마나 똑똑하게 박동시키는지'** — 모드를 알면 환자 리듬·증상·MRI/시술 주의까지 이어집니다.",
    ],
    images: [
      {
        src: "/images/ep/pacemaker/ppm-lead-placement.png",
        alt: "심장박동기 lead 위치 - 우심방·우심실 전극",
        caption:
          "**PPM lead 위치.** 우심방(RA) lead — 심방 appendage 방향 J-loop · 우심실(RV) lead — RV apex(또는 septal). **심방+심실 lead** = dual-chamber(DDD 등) · **심실 lead만** = single-chamber(VVI 등). 출처: Wikimedia Commons, Npatchett, CC BY-SA 4.0.",
      },
      {
        src: "/images/ep/pacemaker/dual-chamber-pacemaker-xray.jpg",
        alt: "이심실 pacemaker 흉부 X-ray - RA J-loop, RV apex lead",
        caption:
          "**Dual-chamber PPM 흉부 X-ray.** 흰색 화살표 = **RA lead tip**(우심이 appendage) · 검은 화살표 = **RV lead tip**(우심실 apex). 시술·입원 시 lead 위치 이탈·탈구 여부 확인에 사용. 출처: Wikimedia Commons, Case courtesy of Dr Hani Salam, CC BY-SA 3.0.",
      },
    ],
    imagesTitle: "장치·lead",
    imagesSubtitle: "전극 위치 · 흉부 X-ray",
    measurementSteps: [
      "【NBG 코드 빠른 해석】 1번째=Pace · 2번째=Sense · 3번째=Response(I/T/D) · 4번째=R(있으면 rate-responsive) · 예: **DDDR** = dual pace + dual sense + dual response + rate modulation",
      "【VVI】 Pace **V** · Sense **V** · **I**(inhibit) · 심실만 박동, 심실 자발 리듬 있으면 억제 · **적응**: **AF + 느린 심실반응**, 고령, 단순 서맥, 심실 단독 lead만 있는 경우 · **장점**: 단순·AF에서 빠른 심실 추적 없음 · **단점**: **AV dissociation** — 심방·심실 따로 뛰어 **pacemaker syndrome**(어지러움·저출량) 가능",
      "【VVIR】 VVI + **R**(rate-responsive) · 활동·호흡 센서로 심박 조절 · 낮 활동 시 저빈도·운동 시 빈도↑ · AF + 서맥 환자에서 가장 흔한 실전 모드 중 하나",
      "【AAI】 Pace **A** · Sense **A** · **I** · 심방만 박동·감지 · **적응**: **정상 AV 전도** 있는 **동방결절병(Sick sinus syndrome)** — 서맥·sinus arrest, AF 없음 · **장점**: 생리적(본인 심실 수축 유지) · **단점**: **AV block 생기면** 박동 못 함 → DDD로 전환 필요",
      "【AAIR】 AAI + rate-responsive",
      "【DDD】 Pace **D** · Sense **D** · **D**(dual response) · 심방·심실 모두 박동·감지 · **심방 자발 → 심방 inhibit** · **심실 자발 → 심실 inhibit** · **심방 박동 후 일정 AV delay 뒤 심실 박동** → **AV synchrony** · **적응**: **SSS + AV block**, **고도 AV block**, 대부분의 **dual-chamber PPM** · **설정 예**: lower 60 / upper tracking 130 bpm",
      "【DDDR】 DDD + rate-responsive · SSS·AV block에서 **가장 흔한 장기 모드**",
      "【DDI】 Pace D · Sense D · **I only**(trigger 없음) · 심방 빨라져도 **심실 추적 안 함** · **적응**: **AF + PPM** 인데 빠른 ventricular pacing 피할 때(구형) · 요즘은 **VVI/VVIR** 로 대체하는 경우 많음",
      "【VDD】 Pace **V** only · Sense **D** · **I** · **심실 lead 1개**만 있고 심방은 **감지만**(floating dipole 등) · 심방 자발 있으면 AV delay 맞춰 심실 pacing · lead 1개로 DDD와 비슷한 효과",
      "【AOO / VOO / DOO】 **비동기(asynchronous) pacing** — sensing 무시, 고정 빈도 박동 · **마그넷 적용 시** 임시 모드 · 수술실·MRI 전 점검 · **위험**: 자발 QRS와 **competition pacing** → **VT/VF 위험**(드묾, 마그넷 시에만 단기)",
      "【CRT-P / CRT-D】 **양심실(Biventricular) pacing** — RV + **LV lead(CS)** · 모드 표기는 보통 **DDDR** 기반 + CRT · **적응**: **HFrEF + LBBB + QRS≥130ms**(가이드라인 기준 참고) · 목적: **심실 역동기(resynchrony)**",
      "【ICD 모드】 **VVI/VVIR** (심실 pacing 위주) 또는 **DDD/DDDR** (dual-chamber ICD) · **텔레메트리·shock** 기능은 별도 — 모드 읽는 법은 PPM과 동일",
      "【심전도에서 볼 것】 ① **Pacing spike** — 얇고 날카로운 수직선 ② **Capture** — spike 직후 P파 또는 QRS ③ **Failure to capture** — spike만 있고 P/QRS 없음 ④ **Failure to sense** — 자발 박동 있는데 spike가 겹침(undersensing) ⑤ **Pacemaker-mediated tachycardia(PMT)** — DDD에서 retrograde conduction 등으로 빈맥",
      "【임상 선택 요약】 SSS + 정상 AV → **AAI/AAIR** 또는 **DDD** · AV block → **DDD/DDDR** · AF + slow VR → **VVI/VVIR** · HFrEF + LBBB → **CRT(DDDR+BiV)**",
      "【조영실·시술 주의】 **전기 수술기(electrocautery)** → sensing 오류·inhibit 가능 — **마그넷** 또는 bipolar·짧은 burst 사용(기관·EP팀) · **MRI** — MR-conditional 기기만 조건부 허용 · **LHC/PCI** — lead 손상 주의, **우측 또는 좌측** 접근 lead 위치 확인",
    ],
    stepsTitle: "모드별 정리",
    stepsSubtitle: "NBG 코드 · 적응증 · 심전도 · 주의",
    clinicalUse:
      "EP 클리닉·CCU·조영실·응급실에서 PPM/ICD/CRT 환자를 만날 때 가장 먼저 확인하는 정보가 **모드·하한/상한 빈도·lead 종류**입니다. 환자가 어지럽고 VVI인데 AF가 있으면 AV dissociation을, 서맥인데 DDD인데 capture failure를 의심합니다. AF 카디오버전·PCI·MRI·수술 전에는 반드시 **기기 종류·모드·마지막 interrogation 일자**를 확인합니다. Cath Lab에서는 lead가 있는 쪽 팔/쇄골하 접근 여부, electrocautery 사용 시 EP 담당자와 협의가 필요합니다.",
    nursingCare: {
      pre: [
        "PPM/ICD/CRT 여부·제조사·모드(VVI, DDD 등)·마지막 검사(interrogation) 일자 확인",
        "lower/upper rate, battery 상태(가능 시) 확인",
        "lead 종류: single(RV only) vs dual(RA+RV) vs CRT(+LV)",
        "MRI·electrocautery·defibrillation 예정 여부 → EP/기술자 협의",
        "접근 쪽 팔 수술·혈압 cuff·IV 우선 부위(반대쪽) 확인",
      ],
      post: [
        "심전도: pacing spike, capture, fusion, failure to capture/sense 기록",
        "어지러움·저혈압·실신 — pacemaker syndrome(VVI+AV dissociation) 의심 보고",
        "빈맥 — PMT, AF with rapid pacing, device malfunction 감별",
        "시술 후 lead 탈구 증상(흉통, syncope, capture loss) 모니터",
        "마그넷 적용 여부·시간·모드 변화 기록",
        "퇴원 시 wallet card(모드·제조사·24h 연락처) 확인",
      ],
    },
    keyPoints: [
      "NBG: 1=Pace · 2=Sense · 3=Response(I/T/D) · 4=R(rate)",
      "VVI = 심실만·억제 — AF+느린 VR에 흔함",
      "DDD/DDDR = AV 동기화 — SSS·AV block 표준",
      "AAI = 심방만 — 정상 AV + sinus node disease",
      "Spike + P/QRS = capture · Spike만 = failure to capture",
      "마그넷 → AOO/VOO/DOO 비동기 모드",
      "CRT = DDDR + LV lead (양심실 pacing)",
    ],
    relatedItems: [
      "Pacemaker",
      "ICD",
      "CRT",
      "AV Block",
      "Sick Sinus Syndrome",
      "Atrial Fibrillation",
      "Cardioversion",
    ],
    tags: ["EP", "페이스메이커", "PPM", "DDD", "VVI", "NBG", "CRT", "ICD"],
  },
  {
    slug: "tee-cardioversion",
    title: "TEE-guided Cardioversion",
    englishName: "Transesophageal Echocardiography-guided Electrical Cardioversion",
    koreanName: "경식도 심초음파 유도 전기적 심율동전환",
    summary:
      "AF를 전기 충격으로 sinus로 전환 — 충격 줄 때 LAA thrombus 날아가면 stroke, 그래서 anticoag or TEE 필수",
    summaryEn:
      "TEE-guided cardioversion delivers synchronized electrical shock to restore sinus rhythm in AF/flutter — TEE rules out LAA thrombus when anticoagulation is uncertain.",
    definition: [
      "**Cardioversion** = AF·AFL 같은 빠른 atrial rhythm을 **synchronized electrical shock**으로 끊고 **sinus rhythm**으로 돌리는 시술.",
      "**Reentry란?**: 정상은 전기가 한 방향으로 쭉 감. AF에서는 atrium 여러 곳에서 **전기가 빙글빙글 원을 그리며 계속 돔 (reentry circuit)**. 왜 빙빙 돌 수 있나? → 일부 cell은 이미 repolarize(회복)돼서 다시 자극 받을 수 있고, 일부는 아직 refractory(불응기)라 못 받음 → 이 **시간차** 때문에 전기가 끊기지 않고 계속 돎.",
      "**Shock이 reentry를 끊는 원리**: 고에너지 shock → **atrial myocyte 전체가 동시에 depolarize** → 모든 cell이 **동시에 refractory period**에 들어감 → 전부 refractory면 **전기가 갈 곳이 없음** → reentry circuit **끊김** → 그 다음 모든 cell이 repolarize되면 → **SA node가 가장 먼저 fire** → 정상 sinus rhythm 시작.",
      "**비유 — 운동장 술래잡기**: 애들이 운동장에서 **빙글빙글 술래잡기** 하고 있음 (= reentry). 선생님이 **\"전원 정지!!\"** 외침 (= shock) → **모두 멈춤** (= 모든 cell depolarize → 전부 refractory). 그 다음 선생님이 **\"다시 한 줄로 따라와\"** (= SA node가 먼저 fire) → **정상 대형** (= sinus rhythm).",
      "**왜 TEE 하나**: AF 48h 이상이면 LAA에 thrombus 있을 수 있음. **Cardioversion 순간 atrium이 갑자기 squeeze → thrombus가 튕겨 나감 → stroke**. TTE로 LAA 잘 안 보임 → **TEE로 직접 LAA 들여다보고** thrombus 있는지 확인.",
      "**Anticoag 왜 중요?**: 핵심은 **'전기충격 줄 때 thrombus 날아갈까봐'**. ① **시술 전 3~4주 anticoag** → thrombus 녹거나 단단히 붙어서 안 떨어지게(organized) ② **시술 후 4주 anticoag** → cardioversion 직후 atrium이 stunning 상태라 새 thrombus 생기기 쉬움 ③ anticoag 불충분하면 → **TEE로 thrombus 없는 거 확인**하고 시술.",
      "**Sync 왜 중요**: T wave = **vulnerable period**. 여기서 shock 맞으면 일부 cell만 반응 → **VF 유발**. 반면 **QRS(R wave) 시점**은 ventricle이 이미 depolarizing 중(**absolute refractory**) → 어차피 다 depolarize 상태라 **안전**. Defibrillator **sync ON** → R wave 감지 → **QRS 위에** shock deliver. (VF는 QRS 없으니 sync OFF)",
      "**한 줄 요약**: 전기로 **'전원 정지'** → 모든 reentry 끊김 → SA node가 다시 지휘 → sinus. 단, **충격 줄 때 LAA thrombus 날아가면 stroke** → 시술 전 **anticoag 충분히 or TEE로 thrombus 없는 거 확인** 필수.",
    ],
    images: [
      {
        src: "/images/ep/cardioversion/sync-marker-qrs.jpg",
        alt: "Defibrillator sync marker on QRS",
        caption:
          "**Sync marker 확인.** Defibrillator 화면에서 QRS마다 **sync marker(화살표)** 찍히는 거 확인. 이 marker 위치에 shock 들어감. Marker 안 보이거나 T wave에 찍히면 **repositioning** 필요. (출처: Wikimedia, CC BY-SA 4.0)",
      },
      {
        src: "/images/ep/cardioversion/cardioversion-af-to-sinus.jpg",
        alt: "Cardioversion ECG - AF to sinus rhythm",
        caption:
          "**Cardioversion 성공 ECG.** AF rhythm → shock artifact → **sinus rhythm 회복**. P wave 다시 보이고 regular rhythm. (출처: CardioNetworks ECGpedia, CC BY-SA 3.0)",
      },
      {
        src: "/images/ep/cardioversion/cardioversion-principle.svg",
        alt: "Cardioversion 원리 - atrium 전체 depolarize → SA node restart",
        caption:
          "**원리.** AF 중 atrium 여러 곳에서 reentry 돌고 있음 → synchronized shock → 모든 myocyte 한꺼번에 depolarize → reentry 끊김 → SA node가 먼저 fire → sinus rhythm.",
      },
      {
        src: "/images/ep/cardioversion/heart-position-thorax.jpg",
        alt: "Heart position in thorax",
        caption:
          "**심장 위치.** Heart는 chest 중앙에서 **왼쪽으로 치우침** (2/3가 midline 왼쪽). Pad 위치 정할 때 이 위치 고려 — current가 heart를 지나가야 효과적. (출처: Anatomy & Physiology, CC BY 3.0)",
      },
      {
        src: "/images/ep/cardioversion/electrode-position-current-flow.jpg",
        alt: "AP vs AL electrode position with current flow",
        caption:
          "**AP vs AL 전류 흐름 비교.** 왼쪽: **AL position** — Rt. clavicle → Lt. axillary, 전류가 chest **가로로** 지나감. 오른쪽: **AP position** — Anterior → Posterior, 전류가 heart를 **앞뒤로 직접 관통**. Heart 위치(빨간색) 보면 **AP가 heart를 더 많이 통과**함. (출처: Wikimedia, CC BY-SA 3.0)",
      },
      {
        src: "/images/ep/cardioversion/electrode-position-comparison.svg",
        alt: "Defibrillation electrode position diagram",
        caption:
          "**Pad 위치 비교.** AL: 오른쪽 위 + 왼쪽 옆 (AED 표준). AP: 앞 + 뒤. AF cardioversion에서는 **AP가 atrium에 전류 더 잘 전달** → 성공률 ↑. (출처: Wikimedia, CC BY-SA 4.0)",
      },
      {
        src: "/images/ep/cardioversion/pacemaker-chest-xray.jpg",
        alt: "Pacemaker chest X-ray",
        caption:
          "**PPM 환자 주의.** Lt. pectoral에 generator 보임. Pad를 **generator 위에 직접 붙이면 안 됨** — device damage·energy 흡수. ≥8cm 떨어뜨리거나 **AP position** 사용. (출처: CardioNetworks ECGpedia, CC BY-SA 3.0)",
      },
      {
        src: "/images/ep/cardioversion/pad-positions.svg",
        alt: "Cardioversion pad 위치 - AP vs AL",
        caption:
          "**AP vs AL.** AP: anterior(sternum/apex) + posterior(back) — heart 앞뒤 관통, **AF에 효과적, 비만에도 좋음**. AL: Rt. clavicle + Lt. axillary — VT/VF 표준.",
      },
      {
        src: "/images/ep/cardioversion/tee-diagram.svg",
        alt: "TEE probe가 esophagus에서 heart를 보는 구조",
        caption:
          "**TEE 원리.** Probe가 **esophagus(식도)**에 들어감 → esophagus가 heart **바로 뒤**에 있음 → **LA(left atrium)와 LAA를 직접 visualization** 가능. TTE(경흉부)로는 chest wall·lung 때문에 LAA가 잘 안 보임. (출처: Wikimedia, CC BY 2.5)",
      },
      {
        src: "/images/ep/cardioversion/heart-esophagus-relations.svg",
        alt: "Heart와 esophagus 해부학적 관계",
        caption:
          "**왜 esophagus에서 잘 보이나?** Lateral view에서 보면 **esophagus가 LA 바로 뒤**를 지나감. TEE probe를 여기에 넣으면 **LA·LAA를 가장 가까이서** 볼 수 있음. (출처: Wikimedia, CC BY-SA 3.0)",
      },
      {
        src: "/images/ep/cardioversion/laa-thrombus-ct.jpg",
        alt: "LAA thrombus CT 영상",
        caption:
          "**LAA thrombus 실제 CT.** 좌: axial view, 우: coronal view. LAA 안에 **thrombus(혈전)** 보임. 이런 환자에게 cardioversion 하면 **thrombus가 튕겨 나가서 stroke**. (출처: Wikimedia, CC BY-SA 3.0)",
      },
    ],
    imagesTitle: "Sync·Pad·PPM·TEE·LAA",
    imagesSubtitle: "R wave sync · Pad position · PPM 피하기 · TEE가 LAA 보는 원리",
    tables: [
      {
        title: "Pad Position — AP vs AL (ZOLL Guideline)",
        subtitle: "AP가 atrium으로 current flow 최대화 → AF cardioversion에 권장",
        columns: ["Position", "Pad 위치 (정확한 landmark)", "Current 경로", "특징"],
        rows: [
          [
            "**AP (Anterior-Posterior)** ⭐권장",
            "**Anterior**: Sternum 바로 **우측**, clavicle 아래, **4th intercostal space** | **Posterior**: Lt. scapula 아래, spine 바로 **좌측**, **T7 level**",
            "**앞→뒤** (heart 직접 관통)",
            "**AF 성공률 ↑** — atrium으로 current 최대 전달 · 비만도 효과적 · Posterior pad **먼저** 붙이기",
          ],
          [
            "**AL (Anterior-Lateral)**",
            "**Anterior**: Sternum 우측, clavicle 아래 | **Lateral**: Lt. mid-axillary line, **5th intercostal space** (V5~V6)",
            "**우→좌** (chest 가로지름)",
            "VT/VF defibrillation 표준 · AP 어려울 때 · AED 기본 위치",
          ],
        ],
      },
      {
        title: "ZOLL Keys to Successful Cardioversion",
        subtitle: "Cleveland Clinic Dr. Niebauer 권고",
        columns: ["항목", "권고 사항"],
        rows: [
          ["**Position**", "**AP position** 사용 → atrium으로 current flow 최대화"],
          ["**Electrode type**", "**Wet gel electrode** > solid gel — skin-gel coupling 우수"],
          ["**Skin prep**", "**Dry**, hair 제거, lotion 없어야 함 — adhesion 영향"],
          ["**Pad 부착 순서**", "**Posterior pad 먼저** 붙이고 → 환자 눕힌 후 anterior 붙이기 — air pocket 방지 위해 roll하듯 붙이기"],
          ["**Sync 확인**", "**R wave에 sync** 되는지 확인 — T wave에 lock 될 수 있음 (high amplitude T wave 시)"],
          ["**Shock 간격**", "여러 번 필요 시 **1분 rest** (ACC 권고)"],
          ["**Pad pressure**", "어려운 환자에서 **pad 위에 pressure** 주면 거리↓ → current flow↑"],
        ],
      },
      {
        title: "Energy 선택 (Biphasic)",
        subtitle: "환자 상태에 따라",
        columns: ["환자", "Energy", "비고"],
        rows: [
          ["**Small patient / Recent onset AF**", "**75 J**", "Myocardial protection 위해 low dose 시작"],
          ["**Routine persistent AF**", "**100-120 J**", ">90% first shock success"],
          ["**Difficult to cardiovert (예상)**", "**200 J** (max)", "Pad에 pressure 주면서 shock"],
          ["**AFL / SVT**", "**50-100 J**", "AF보다 낮은 energy로 conversion 가능"],
        ],
      },
      {
        title: "체중·체형별 Pad 위치 조정",
        subtitle: "전류가 heart를 제대로 지나가게",
        columns: ["상황", "문제", "해결"],
        rows: [
          [
            "**비만 (obesity)**",
            "피하지방 두꺼움 → AL position에서 current가 heart 못 닿을 수 있음",
            "**AP 권장** — anterior를 sternum 한가운데 or apex, posterior를 back 한가운데(spine 옆) → heart 직접 관통",
          ],
          [
            "**여성 (breast)**",
            "Breast tissue 위에 pad → current 분산·burn",
            "**Breast 아래** inframammary fold에 부착 or AP position",
          ],
          [
            "**소아**",
            "Chest 작아서 pad overlap 위험",
            "**AP position** 필수 — anterior sternum, posterior back",
          ],
        ],
      },
      {
        title: "PPM/ICD 환자 Pad 위치",
        subtitle: "Generator 피해야 함",
        columns: ["상황", "주의", "권장 위치"],
        rows: [
          [
            "**Lt. pectoral PPM/ICD** (가장 흔함)",
            "Generator 바로 위에 pad → device damage·energy 흡수",
            "**AP position** 권장 — anterior pad를 sternum 우측 or apex에, generator에서 **≥8cm** 떨어뜨리기",
          ],
          [
            "**Rt. pectoral PPM/ICD**",
            "드물지만 존재",
            "AL position 가능 — Lt. clavicle 아래 + Lt. axillary",
          ],
          [
            "**시술 후**",
            "Shock으로 device setting 변경 가능",
            "반드시 **device interrogation** — threshold·sensing 확인",
          ],
        ],
      },
      {
        title: "Cardioversion Indication",
        subtitle: "주로 atrial arrhythmia — sinus rhythm 회복 목적",
        columns: ["Arrhythmia", "설명", "Anticoag/TEE"],
        rows: [
          ["**AF**", "가장 흔한 indication · Sx 개선, EF 보존", "48h 이상 or onset 불명 → **TEE or anticoag 3~4주**"],
          ["**AFL**", "regular rapid atrial flutter · 약물 불응 시", "AF와 같은 원칙"],
          ["**AT**", "약물·vagal maneuver 실패 시", "상황별"],
          ["**Unstable SVT (hemodynamic compromise)**", "BP↓ · mental change → **emergency cardioversion**", "응급 시 thrombus 확인 생략 가능 (benefit > risk)"],
        ],
      },
      {
        title: "Pad 부착 시 체크리스트",
        subtitle: "Skin·Device·Environment",
        columns: ["항목", "주의"],
        rows: [
          ["**Skin**", "땀·젖음 → **건조** 후 부착 · 털 많으면 shave"],
          ["**Pad 간격**", "**≥8 cm** 간격 — sternum 위에서 overlap 안 되게"],
          ["**Transdermal patch**", "NTG patch 등 **제거** (burn·energy loss)"],
          ["**PPM/ICD**", "Generator 위치 **피해서** pad 부착 · AP 권장 · 시술 후 device interrogation"],
          ["**O₂**", "고농도 O₂ mask/nasal → **제거 or 거리 두기** (fire risk)"],
          ["**Gel pad vs Paddle**", "Gel pad 우선 · paddle 시 gel 충분히, paddle끼리 연결되면 energy 분산"],
          ["**Sync**", "AF/AFL → **sync ON** (R wave 동기화) · VF → sync OFF"],
        ],
      },
    ],
    measurementSteps: [
      "**왜 하나?** AF·AFL Sx(palpitation·dyspnea·fatigue) 개선, EF 보존, stroke risk 감소. 약물(rate/rhythm control) 실패 or 빠른 conversion 필요 시.",
      "**AF에서 특히 하는 이유**: AF 지속 → **atrial remodeling** → sinus 복귀 어려워짐(\"AF begets AF\"). 조기 cardioversion → 성공률 ↑. Sx 심하거나 HFrEF·tachycardia-induced CMP 우려 시.",
      "**Anticoag 왜 중요?** 핵심 = **전기충격 줄 때 thrombus 날아갈까봐**. AF 중 LAA에 blood 고여서 thrombus 생김 → cardioversion 순간 atrium이 squeeze → **thrombus 튕겨 나감 → stroke**. 그래서 시술 전 **3~4주 anticoag**(thrombus 녹이거나 붙여놓기) 또는 **TEE로 thrombus 없는 거 확인** 필수.",
      "**TEE 역할**: TTE로 LAA 잘 안 보임. **TEE**는 esophagus에서 heart posterior 직접 봄 → LAA thrombus/sludge 확인. Thrombus 있으면 **연기 + anticoag 강화**.",
      "**전기가 sinus 어떻게 만드나?** Atrium 여러 곳에서 **reentry** 돌고 있음 → high-energy shock → **모든 atrial myocyte 동시 depolarize** → 모든 circuit 끊김 → **SA node가 먼저 repolarize & fire** → sinus 시작.",
      "**Sync 왜 R wave?**: T wave = **vulnerable period** — 여기서 shock → 일부만 반응 → **VF (R-on-T)**. 반면 **QRS 시점**은 ventricle이 이미 depolarizing 중(absolute refractory) → 안전. Defibrillator **sync ON** → 화면에 QRS마다 **marker** 찍히는 거 확인 → **R wave 위에** shock. VF는 QRS 없으니 sync OFF.",
      "**Energy (ZOLL 권고)**: Small/recent onset → **75J**, routine persistent AF → **100-120J** (>90% 1st shock success), difficult → **200J** + pad pressure. AFL/SVT는 **50-100J**.",
      "**Pad — AP 권장 (ZOLL)**: **Anterior**: sternum 바로 우측, clavicle 아래, **4th ICS**. **Posterior**: Lt. scapula 아래, spine 바로 좌측, **T7 level**. AP가 atrium으로 current 최대 전달 → **AF 성공률 ↑**.",
      "**Pad 부착 순서 (ZOLL)**: **Posterior pad 먼저** → 환자 눕힌 후 anterior. Roll하듯 붙여서 **air pocket 방지**. Wet gel > solid gel.",
      "**Pad 체크**: Skin **dry·hair 제거·lotion 없이** · pad 간격 ≥8 cm · transdermal patch 제거 · PPM/ICD 피함 · O₂ 멀리 · **sync marker가 R wave에** 찍히는지 확인.",
      "**Sedation**: Conscious 환자 → short sedation(propofol·midazolam·fentanyl) 필요 — **airway·SpO₂·BP** continuous monitoring. Anesthesia standby.",
      "**시술 후**: EKG로 **sinus 확인** · skin burn 점검 · sedation recovery · **anticoag 최소 4주** 유지 · AF 재발 모니터 · PPM/ICD 있으면 device interrogation.",
    ],
    stepsTitle: "핵심 이해",
    stepsSubtitle: "Indication · Anticoag · Mechanism · Pad",
    clinicalUse:
      "EP Lab·ER·CCU·조영실 인접 recovery room에서 AF cardioversion 자주 시행. 간호사는 **anticoag 상태 확인**(마지막 복용·INR·DOAC), **TEE 결과 확인(LAA thrombus 유무)**, **sync·pad 위치·O₂ 제거**, **sedation monitoring**, **시술 후 sinus 확인·skin burn 점검·anticoag 교육**이 핵심. Emergency(hemodynamic instability) 시 thrombus 확인 없이 진행 가능하지만, elective 시에는 반드시 anticoag or TEE 거침.",
    nursingCare: {
      pre: [
        "AF duration · Sx · hemodynamic status 확인",
        "Anticoag 상태: 3~4주 INR 2~3(warfarin) 또는 DOAC 복용 확인",
        "TEE 예정 시 NPO(보통 6시간) · 결과 확인(LAA thrombus 여부)",
        "EKG·K·Mg·TFT 확인 · digoxin toxicity r/o",
        "Sedation·응급약(atropine·amiodarone·lidocaine)·airway 장비 준비",
        "PPM/ICD 여부 → **AP position** 권장 · device 팀 연락",
        "**Skin prep**: dry, **hair shave**, lotion 제거, transdermal patch 제거",
        "**Wet gel electrode** 준비 (solid gel보다 우수)",
        "O₂ 사용 시 mask 제거 또는 거리 두기",
        "**AP position 시 posterior pad 먼저** 붙일 준비",
      ],
      post: [
        "EKG로 **sinus 확인** — AF 지속 시 **1분 rest 후** 재시도 또는 drug strategy Dr. 상의",
        "Pad 부착 부위 **skin burn** 점검",
        "Sedation recovery(의식·airway·BP·SpO₂) monitoring",
        "Beta blocker 복용 환자 → **post-shock bradycardia** 주의 (TCP 준비)",
        "**Anticoag 최소 4주** 유지 교육 — 임의 중단 금지",
        "AF 재발 Sx(palpitation·irregular pulse) 시 notify",
        "PPM/ICD 환자 → device interrogation (threshold·sensing 확인)",
        "D/C 시 OPD F/U·INR/DOAC·Sx 교육",
      ],
    },
    keyPoints: [
      "Cardioversion = synchronized shock으로 AF/AFL → sinus (전원 정지 → SA node 재시작)",
      "**AP position 권장** (ZOLL) — atrium으로 current flow 최대화 → 성공률 ↑",
      "AP landmark: Anterior(sternum 우측, 4th ICS) + Posterior(Lt. scapula 아래, T7)",
      "**Posterior pad 먼저** 붙이기 → air pocket 방지",
      "Anticoag or TEE(LAA thrombus r/o)가 **stroke prevention** 핵심",
      "Sync marker가 **R wave에** 찍히는지 확인 — T wave lock 주의",
      "Energy: 75J(small) / 100-120J(routine) / 200J(difficult)",
      "Skin: dry, hair 제거, lotion X · wet gel > solid gel",
      "시술 후 anticoag 4주↑ · PPM/ICD → device interrogation",
    ],
    relatedItems: [
      "Atrial Fibrillation",
      "Atrial Flutter",
      "ACLS",
      "Anticoagulants",
      "DOAC",
      "TEE",
      "LAA Closure",
      "Pacemaker Modes",
    ],
    tags: ["EP", "cardioversion", "AF", "TEE", "anticoag", "LAA", "sync"],
  },
];

export function getEpTopicBySlug(slug: string): KnowledgeArticle | undefined {
  return epTopics.find((item) => item.slug === slug);
}
