import type { KnowledgeArticle } from "@/types/knowledge-article";

export const procedures: KnowledgeArticle[] = [
  {
    slug: "dcb",
    title: "DCB",
    englishName: "Drug-Coated Balloon",
    koreanName: "약물코팅풍선",
    summary:
      "스텐트 없이 풍선에 코팅된 약물을 혈관벽에 전달해 협착을 치료하는 시술",
    summaryEn:
      "DCB is a procedure that delivers a drug from a coated balloon into the vessel wall to treat stenosis without leaving a stent.",
    definition: [
      "DCB(약물코팅풍선)는 일반 풍선과 달리 표면에 약물(주로 paclitaxel 등)이 코팅된 풍선입니다. 풍선을 팽창시킬 때 약물이 혈관벽으로 전달되어, 혈관이 다시 좁아지는 것을 막는 데 도움을 줍니다.",
      "일반 스텐트(DES)는 금속 틀을 남기지만, DCB는 스텐트를 남기지 않는다는 점이 큰 특징입니다. 그래서 스텐트 안이 다시 좁아진 경우(in-stent restenosis), 작은 혈관, 스텐트를 남기기 어려운 부위 등에서 선택됩니다.",
      "시술 흐름은 기본 PCI와 비슷합니다. 가이드 와이어로 병변을 통과하고, 필요하면 먼저 일반 풍선으로 살짝 넓힌 뒤, DCB를 병변에 정확히 맞춰 팽창시킵니다.",
      "한마디로, '풍선으로 약물을 바르고, 스텐트 없이 혈관을 넓히는 시술'입니다.",
    ],
    measurementSteps: [
      "시술 전: 동의서, 병변 위치·길이, 신기능, 항응고제/이중항혈소판 복용 여부를 확인합니다.",
      "환자를 준비하고 국소 마취 후 동맥에 접근합니다. (요골동맥 또는 대퇴동맥)",
      "가이드 와이어를 협착 부위를 지나도록 넣고, 조영으로 위치를 확인합니다.",
      "혈관이 너무 딱딱하거나 심하게 좁으면, DCB 전에 일반 풍선으로 먼저 살짝 넓힙니다. (예비 확장, predilation)",
      "병변 길이와 직경에 맞는 DCB 크기를 선택합니다. 풍선이 병변을 완전히 덮도록 맞춥니다.",
      "DCB를 병변 위치에 정확히 위치시키고, 마커로 양끝이 병변을 포함하는지 조영으로 확인합니다.",
      "제조사 권장 압력으로 풍선을 팽창합니다. 보통 60초 정도 유지하며, 이 시간에 약물이 혈관벽으로 전달됩니다.",
      "팽창 후 천천히(또는 권장 속도로) 풍선을 수축합니다. 너무 빠르게 빼면 약물 전달이 줄어들 수 있어 주의합니다.",
      "최종 조영으로 혈관 모양, 잔존 협착, 층류(dissection) 여부를 확인합니다.",
      "시술 종료 후 출혈 처치, 압박, 시술 후 항혈전 치료 계획을 정리합니다.",
    ],
    stepsTitle: "시술 절차",
    stepsSubtitle: "단계별 순서",
    clinicalUse:
      "스텐트 내 재협착(in-stent restenosis), 소혈관 병변, 분지부 병변, 스텐트를 남기고 싶지 않은 경우(예: 다리 혈관, 일부 관상동맥)에 사용됩니다. 조영실에서는 DCB 팽창 시간·압력·풍선 위치가 결과에 큰 영향을 주므로, 팀원 모두가 '지금 DCB 팽창 중'임을 인지하고 모니터링을 유지해야 합니다.",
    nursingCare: {
      pre: [
        "금식 여부, 알레르기(조영제·약물), 동의서 확인",
        "신기능, 항응고/이중항혈소판 복용 상태 확인",
        "접근 부위(요골/대퇴) 피부 상태, 말초혈류 확인",
        "DCB 크기·병변 길이 준비물 확인",
        "시술 중 타이머(팽창 시간) 준비",
      ],
      post: [
        "접근 부위 출혈·혈종·말초혈류 반복 확인",
        "혈압·심전도·흉통·호흡곤란 모니터링",
        "수분 섭취/이뇨, 신기능 악화 여부 확인",
        "이중항혈소판 복용 교육 및 처방 확인",
        "퇴원 전 출혈 응급 대처법 안내",
      ],
    },
    keyPoints: [
      "스텐트를 남기지 않고 약물만 전달하는 것이 핵심",
      "팽창 시간(보통 60초)과 정확한 위치가 매우 중요",
      "ISR(스텐트 내 재협착)에서 자주 선택",
      "조영실 역할: DCB 크기 준비, 팽창 타이머 확인, 조영 촬영 타이밍 맞추기",
      "시술 후에도 일반 PCI와 같이 출혈·항혈전 관리 필요",
    ],
    relatedItems: ["PCI", "DES", "ISR"],
    tags: ["시술", "관상동맥", "풍선", "약물코팅"],
  },
  {
    slug: "des",
    title: "DES",
    englishName: "Drug-Eluting Stent",
    koreanName: "약물방출 스텐트",
    summary:
      "약물이 코팅된 스텐트를 협착 부위에 넣어 혈관을 넓히고, 다시 좁아지는 것을 막는 시술",
    summaryEn:
      "DES is a PCI procedure that places a drug-coated stent to open a stenosis and help prevent renarrowing.",
    definition: [
      "DES(약물방출 스텐트)는 금속 스텐트 표면에 약물이 코팅되어 있는 스텐트입니다. 협착된 혈관을 넓힌 뒤 그 자리에 남겨 두어, 혈관이 다시 좁아지는 것을 막는 데 도움을 줍니다.",
      "일반 금속 스텐트(BMS)보다 재협착이 적은 편이라, 현재 관상동맥 PCI에서 가장 많이 쓰입니다. DCB가 '스텐트 없이 약물만 전달'한다면, DES는 '스텐트를 남기면서 약물도 함께 전달'합니다.",
      "시술 흐름은 기본 PCI와 같습니다. 가이드 와이어로 병변을 통과하고, 필요하면 먼저 풍선으로 넓힌 뒤, DES를 병변에 맞게 배치해 팽창시킵니다.",
      "한마디로, '약물 코팅 스텐트를 넣어 혈관을 넓히고 유지하는 시술'입니다.",
    ],
    measurementSteps: [
      "시술 전: 동의서, 병변 위치·길이, 신기능, 항응고제/이중항혈소판 복용 여부를 확인합니다.",
      "환자를 준비하고 국소 마취 후 동맥에 접근합니다. (요골동맥 또는 대퇴동맥)",
      "가이드 와이어를 협착 부위를 지나도록 넣고, 조영으로 위치를 확인합니다.",
      "혈관이 심하게 좁거나 단단하면, 스텐트 넣기 전에 일반 풍선으로 먼저 살짝 넓힙니다. (predilation)",
      "병변 길이와 참조 혈관 직경을 보고 DES 크기·길이를 선택합니다. 필요하면 IVUS/OCT로 더 정확히 맞춥니다.",
      "DES가 담긴 카테터를 와이어 위로 병변 위치에 맞게 진입시킵니다. 스텐트 마커가 병변 양끝을 덮는지 조영으로 확인합니다.",
      "풍선을 천천히 팽창해 스텐트를 펼칩니다. 충분히 확장될 때까지 압력을 유지합니다.",
      "필요하면 더 큰 풍선으로 스텐트를 한 번 더 확장합니다. (post-dilation)",
      "최종 조영으로 혈관 모양, 스텐트 위치, TIMI flow, 층류·혈전 여부를 확인합니다.",
      "시술 종료 후 출혈 처치, 압박, 이중항혈소판 요법(DAPT) 계획을 정리합니다.",
    ],
    stepsTitle: "시술 절차",
    stepsSubtitle: "단계별 순서",
    clinicalUse:
      "증상이 있거나 기능적으로 유의미한 관상동맥 협착(FFR/iFR 등으로 확인)에 가장 흔히 시행하는 혈관성형술입니다. 급성 관상동맥증후군, 안정 협심증, 일부 분지부 병변 등에서 사용됩니다. 조영실에서는 스텐트 크기 선택, 배포 순간의 혈압·심전도 모니터링, 최종 조영 확인, 시술 후 DAPT 안내가 핵심입니다.",
    nursingCare: {
      pre: [
        "금식, 알레르기, 동의서, 임신 가능성 확인",
        "최근 항응고/이중항혈소판 복용·중단 일정 확인",
        "신기능, 전해질, 혈소판 수치 확인",
        "접근 혈관 상태 및 말초혈류 사정",
        "스텐트 크기·길이·추가 장비(IVUS/OCT) 준비 확인",
      ],
      post: [
        "접근 부위 압박 상태·출혈·혈종·말초혈류 지속 확인",
        "심전도 변화, 흉통, 호흡곤란, 부정맥 즉시 보고",
        "DAPT 처방·복용 시작 시간 정확히 기록",
        "조영제 신독성(소변량, Cr) 모니터링",
        "퇴원 전 출혈·흉통·호흡곤란 red flag 교육",
      ],
    },
    keyPoints: [
      "스텐트를 남기면서 약물을 전달해 재협착을 줄이는 것이 핵심",
      "스텐트 크기·위치·확장 정도가 결과를 좌우함",
      "시술 후 이중항혈소판 요법(DAPT)이 매우 중요",
      "DCB와 달리 금속 스텐트를 혈관 안에 남김",
      "조영실 역할: 스텐트 준비, 배포 타이밍 확인, 조영·모니터링, DAPT 기록",
    ],
    relatedItems: ["PCI", "DCB", "IVUS", "DAPT"],
    tags: ["시술", "관상동맥", "스텐트", "PCI"],
  },
  {
    slug: "poba",
    title: "POBA",
    englishName: "Plain Old Balloon Angioplasty",
    koreanName: "일반 풍선 혈관성형술",
    summary:
      "약물·스텐트 없이 일반 풍선만으로 협착된 혈관을 넓히는 기본 혈관성형술",
    summaryEn:
      "POBA is basic balloon angioplasty that opens a stenosis using a plain balloon without a stent or drug coating.",
    definition: [
      "POBA(Plain Old Balloon Angioplasty, 일반 풍선 혈관성형술)는 약물 코팅도, 스텐트도 없는 '일반 풍선'만으로 협착 부위를 넓히는 시술입니다.",
      "풍선을 병변 위치에 맞춰 팽창시키면, 혈관 벽이 눌려 넓어집니다. 스텐트를 남기지 않으므로 시술이 끝나면 혈관 안에 금속이 남지 않습니다.",
      "예전에는 단독 치료로 많이 썼지만, 지금은 주로 DES·DCB 시술 전 '먼저 넓혀 두는 단계'(predilation)로 쓰이거나, 스텐트를 넣기 어려운 특수 상황에서 선택됩니다.",
      "DCB는 '약물 코팅 풍선', DES는 '스텐트+약물'이라면, POBA는 가장 기본 형태의 '그냥 풍선' 시술입니다.",
      "한마디로, '일반 풍선으로 혈관을 넓히는 가장 기본 PCI'입니다.",
    ],
    measurementSteps: [
      "시술 전: 동의서, 병변 위치·길이, 신기능, 항응고제/이중항혈소판 복용 여부를 확인합니다.",
      "환자를 준비하고 국소 마취 후 동맥에 접근합니다. (요골동맥 또는 대퇴동맥)",
      "가이드 와이어를 협착 부위를 지나도록 넣고, 조영으로 위치를 확인합니다.",
      "병변 길이와 참조 혈관 직경을 보고 풍선 크기·길이를 선택합니다.",
      "풍선 카테터를 와이어 위로 병변 위치에 맞게 진입시킵니다. 마커가 병변을 덮는지 조영으로 확인합니다.",
      "천천히 풍선을 팽창합니다. 충분히 넓어질 때까지 압력을 유지합니다.",
      "필요하면 더 큰 풍선으로 한 번 더 팽창합니다.",
      "최종 조영으로 혈관 모양, 잔존 협착, 층류(dissection), TIMI flow를 확인합니다.",
      "단독 POBA로 끝낼지, 이어서 DES·DCB를 넣을지 의사가 결정합니다.",
      "시술 종료 후 출혈 처치, 압박, 항혈전 치료 계획을 정리합니다.",
    ],
    stepsTitle: "시술 절차",
    stepsSubtitle: "단계별 순서",
    clinicalUse:
      "관상동맥·말초혈관 PCI의 기본 기술입니다. DES·DCB 시술 전 predilation(예비 확장), 작은 혈관, 일부 분지부·스텐트를 피하고 싶은 경우, 또는 급히 혈류를 회복해야 할 때 단독으로 시행하기도 합니다. 조영실에서는 풍선 팽창 압력·위치·층류 발생 여부를 꼼꼼히 봐야 하며, 스텐트를 남기지 않으므로 급성 혈관 수축(recoil)이나 층류에 더 주의합니다.",
    nursingCare: {
      pre: [
        "금식 여부, 알레르기(조영제·약물), 동의서 확인",
        "신기능, 항응고/이중항혈소판 복용 상태 확인",
        "접근 부위(요골/대퇴) 피부 상태, 말초혈류 확인",
        "풍선 크기·병변 길이 준비물 확인",
        "단독 POBA인지, DES/DCB 전 단계인지 팀과 확인",
      ],
      post: [
        "접근 부위 출혈·혈종·말초혈류 반복 확인",
        "혈압·심전도·흉통·호흡곤란 모니터링 (층류·급성 폐색 징후)",
        "수분 섭취/이뇨, 신기능 악화 여부 확인",
        "이후 DES·DCB·추가 시술 여부와 항혈전 계획 기록",
        "퇴원 전 출혈·흉통 응급 대처법 안내",
      ],
    },
    keyPoints: [
      "가장 기본 형태의 풍선 혈관성형술 (약물·스텐트 없음)",
      "주로 predilation 또는 단독 시술로 사용",
      "스텐트를 남기지 않음 → recoil·층류에 주의",
      "DES·DCB 시술의 기초 단계이기도 함",
      "조영실 역할: 풍선 크기 준비, 팽창 타이밍·조영 확인, 합병증 징후 모니터링",
    ],
    relatedItems: ["PCI", "DES", "DCB", "ISR"],
    tags: ["시술", "관상동맥", "풍선", "PCI"],
  },
  {
    slug: "subvalvular-myomectomy",
    title: "Subvalvular Myomectomy",
    englishName: "Subvalvular Myomectomy",
    koreanName: "판막 아래 심근 절제술",
    summary:
      "판막 바로 아래 두꺼워진 심근을 잘라내어, 피가 나가는 길이 막히는 것을 풀어주는 수술",
    summaryEn:
      "Subvalvular myomectomy removes thickened heart muscle below the valve to relieve outflow obstruction.",
    definition: [
      "판막 아래 심근 절제술은 대동맥판(또는 승모판) 바로 아래에 불필요하게 두꺼워진 심근을 잘라내는 수술입니다.",
      "가장 흔한 이유는 비대성 심근병증(HCM) 중에서도, 심장이 뛸 때 피가 나가는 길(좌심실 유출로)이 막히는 경우입니다. 심근이 너무 두꺼워서 피 통로가 좁아지고, 때로는 승모판이 이상하게 움직이면서 더 막히기도 합니다.",
      "약물로 조절이 안 되거나, 운동 시 실신·호흡곤란·흉통이 심한 환자에게 시행합니다. 조영실에서 혈관조영·심초음파·압력 측정으로 막힘 정도를 먼저 확인한 뒤 수술 여부를 결정하는 경우가 많습니다.",
      "한마디로, '판막 아래 살을 깎아서 피가 나가는 길을 넓혀 주는 수술'입니다.",
    ],
    measurementSteps: [
      "시술 전: 심초음파로 좌심실 유출로 협착(LVOT obstruction)과 막힘 정도를 확인합니다. 필요 시 심카테터검사로 압력 차이도 봅니다.",
      "전신 마취 후 수술 준비를 합니다. 흉부를 열거나(개흉), 최소 침습 경로로 접근합니다.",
      "인공심폐(심장-폐 bypass)를 걸어 심장을 잠시 멈추고 안전하게 수술할 환경을 만듭니다.",
      "대동맥을 살짝 열어 심장 안, 특히 대동맥판 아래·좌심실 유출로 부위를 노출합니다.",
      "판막 바로 아래 두꺼워진 심근(중격 쪽)을 확인하고, 막힘을 만드는 부분을 조심스럽게 잘라냅니다.",
      "수술 중 경식도 초음파(TEE)로 막힘이 풀렸는지, 승모판이 잘 닫히는지, 새로 생긴 누출이 없는지 확인합니다.",
      "절제가 충분하면 심장을 봉합하고, 인공심폐를 끄며 심장이 다시 뛰도록 합니다.",
      "수술 후 중환자실에서 심박출, 혈압, 출혈, 심전도를 면밀히 봅니다.",
      "특히 서맥·방실차단 등 부정맥이 생기지 않는지 확인합니다. (절제 부위가 전도로에 영향을 줄 수 있음)",
      "회복 후 증상 개선, 운동 내성, 추적 심초음파로 재협착·판막 누출 여부를 봅니다.",
    ],
    stepsTitle: "시술 절차",
    stepsSubtitle: "단계별 순서",
    clinicalUse:
      "비대성 폐쇄성 심근병증(HOCM)에서 약물 치료로 조절되지 않는 증상, 실신, 중증 LVOT obstruction 환자에게 시행합니다. 조영실·심초음파실에서 '막힘이 얼마나 심한가'를 평가한 뒤 수술 적응을 판단합니다. 수술 후에도 심전도·혈역학 모니터링이 중요하며, 일부 환자는 영구 심박조율기가 필요할 수 있습니다.",
    nursingCare: {
      pre: [
        "수술 동의서, 마취 평가, 금식 확인",
        "최근 심초음파·카테터 소견, 항응고 상태 확인",
        "정맥 라인·동맥 라인 확보 상태 확인",
        "인공심폐·TEE 준비 상태 팀과 공유",
        "가족 연락처, 수혈 준비 확인",
      ],
      post: [
        "중환자실에서 심박출, 혈압, 심전도, 출혈량 밀착 모니터링",
        "방실차단·서맥 등 부정맥 즉시 보고",
        "흉관 배액량·성질, 산소포화도 확인",
        "통증, 의식, 말초혈류 사정",
        "퇴실 전 TEE/심초음파 추적 일정 확인",
      ],
    },
    keyPoints: [
      "목적: 판막 아래 두꺼운 심근을 제거해 좌심실 유출로 협착을 풂",
      "주요 적응: 증상 있는 HOCM, 약물 치료 실패",
      "수술 중 TEE로 막힘 해소·판막 기능 확인이 핵심",
      "합병증 주의: 방실차단, 승모판 역류, 출혈",
      "조영실/검사실 역할: 수술 전 협착 정도 평가, 수술 후 추적 검사",
    ],
    relatedItems: ["HCM", "LVOT Obstruction", "TEE"],
    tags: ["시술", "심근병증", "수술", "판막"],
  },
  {
    slug: "tavr",
    title: "TAVR",
    englishName: "Transcatheter Aortic Valve Replacement",
    koreanName: "경피적 대동맥판 치환술",
    summary:
      "개심 수술 없이 카테터로 대동맥판을 새 인공판막으로 바꾸는 시술",
    summaryEn:
      "TAVR replaces the aortic valve through a catheter without open-heart surgery.",
    definition: [
      "**TAVR(경피적 대동맥판 치환술)** 는 **흉터를 크게 열지 않고**, **대퇴동맥** 등에서 카테터를 넣어 **좁아진 대동맥판 자리에 새 인공판막**을 펼쳐 넣는 시술입니다.",
      "**쉽게 말하면**: 기존 판막이 돌처럼 딱딱해져 혈이 잘 안 나가면 → 카테터로 **새 판막을 끼워 넣어** 혈이 다시 잘 나가게 해 주는 것. PCI가 관상동맥을 넓히는 것이라면, TAVR은 **심장 입구(대동맥판) 자체를 갈아끼우는** 시술입니다.",
      "**누가 받나**: **심한 대동맥판 협착**인데 **개심 수술 위험이 크거나** 나이·합병증 때문에 수술이 어려운 환자.",
      "**시술 전 꼭 보는 것**: **CT**(판막 크기·접근 혈관·관상동맥 높이) + **심초음파** + **TEE**(시술 중 판막 위치·누출 확인).",
      "**하면 안 되거나 주의**: 심한 대동맥류·관상동맥 막힘 위험·너무 얇은 대동맥 벽(bicuspid 등) — 팀이 CT로 미리 걸러냄.",
      "한마디로, **'대퇴에서 들어가 카테터로 대동맥판을 새 것으로 바꾸는 시술'** 입니다.",
    ],
    videos: [
      {
        youtubeId: "HKTeAOiByLw",
        title:
          "Transcatheter Aortic Valve Replacement (TAVR) — UC Davis Health",
        caption:
          "TAVR 시술 과정 영상 — 접근·판막 전달·배포(deploy) 흐름을 영상으로 확인. 아래 단계별 설명과 함께 보면 이해가 빨라집니다.",
        sourceUrl: "https://youtu.be/HKTeAOiByLw",
      },
    ],
    videosTitle: "참고 영상",
    videosSubtitle: "TAVR 시술 과정 (YouTube)",
    images: [
      {
        src: "/images/procedures/tavr/tavr-principle.svg",
        alt: "TAVR 원리 - 대퇴 접근에서 새 대동맥판 배치",
        caption:
          "**원리 한눈에.** 대퇴동맥 → wire로 판막 통과 → (필요 시 BAV) → 새 판막 deploy → TEE/조영으로 확인.",
      },
    ],
    imagesTitle: "그림으로 이해하기",
    imagesSubtitle: "TAVR 흐름",
    stepsTitle: "시술 절차",
    stepsSubtitle: "단계별 순서 + 그림",
    measurementSteps: [
      {
        text: "**시술 전 준비** — **CT**로 판막 크기(annulus)·접근할 대퇴동맥 상태·**관상동맥 입구 높이**를 봅니다. **심초음파**로 협착 정도·심실 기능 확인. **Valve kit**(SAPIEN=풍선으로 펼침 / Evolut=저절로 펼침)와 **sheath 크기**가 맞는지 스크럽 테이블에서 확인. **임시 pacing lead** 준비(BAV·deploy 때 씀).",
        image: {
          src: "/images/procedures/tavr/tavr-step-prep.svg",
          alt: "TAVR 시술 전 준비",
          caption: "CT·심초음파·valve kit·pacing lead.",
        },
      },
      {
        text: "**대퇴동맥 접근** — 초음파 보면서 **대퇴동맥**에 바늘을 넣고 **큰 sheath(14~20 Fr, 기종별)** 를 삽입합니다. TAVR은 PCI보다 sheath가 훨씬 큽니다. 삽입 후 **헤파린** 투여(혈전 방지).",
        image: {
          src: "/images/procedures/tavr/tavr-step-access.svg",
          alt: "대퇴동맥 접근",
          caption: "대퇴 → 대동맥. Sheath 14~20 Fr.",
        },
      },
      {
        text: "**조영 · Wire 진입** — pigtail로 **대동맥 뿌리(root) 조영** → 판막·관상동맥 위치 확인. **Soft wire**로 좁아진 **대동맥판을 통과**해 좌심실(LV)까지 넣습니다. 그다음 **stiff wire**(단단한 wire)로 바꿔서 delivery system이 움직일 때 안 흔들리게 고정.",
        image: {
          src: "/images/procedures/tavr/tavr-step-wire.svg",
          alt: "Wire로 판막 통과",
          caption: "Soft wire → stiff wire 교체.",
        },
      },
      {
        text: "**BAV (필요 시)** — 기존 판막이 너무 딱딱하면 **풍선으로 먼저 살짝 넓혀** 새 판막이 들어갈 공간을 만듭니다. 이때 **Rapid pacing**을 씁니다: **심박 180~220/min**으로 올려 **혈압을 일부러 떨어뜨린** 뒤(10~15초), 그 사이에 풍선을 팽창. 심장이 덜 움직이는 동안 정확히 넣기 위함.",
        image: {
          src: "/images/procedures/tavr/tavr-step-bav.svg",
          alt: "BAV와 rapid pacing",
          caption: "Pacing ON → 풍선 → Pacing OFF.",
        },
      },
      {
        text: "**판막 위치 맞추기** — 새 판막(delivery system)을 wire 위로 **판막 자리(annulus)** 에 맞춥니다. **TEE**(경식도 초음파)와 **조영**으로 **관상동맥 입구를 가리지 않는지**, 너무 LV 쪽/대동맥 쪽으로 치우치지 않았는지 확인. 위치가 핵심 — 잘못 넣으면 **누출(PVL)·관상동맥 막힘** 위험.",
        image: {
          src: "/images/procedures/tavr/tavr-step-position.svg",
          alt: "판막 위치 맞추기",
          caption: "Annulus 정렬 · coronary 가리지 않기.",
        },
      },
      {
        text: "**Deploy (판막 펼치기)** — **Balloon-expandable(SAPIEN)**: rapid pacing 켠 상태에서 **풍선을 팽창** → crimped 판막이 펼쳐짐 → 풍선 수축 → pacing 끔. **Self-expanding(Evolut)**: **sheath를 천천히 빼면** 판막이 저절로 펼쳐짐(기종·프로토콜에 따라 pacing 없을 수 있음). **이 순간이 시술의 하이라이트** — 팀 모두 BP·TEE·조영 집중.",
        image: {
          src: "/images/procedures/tavr/tavr-step-deploy.svg",
          alt: "Valve deploy",
          caption: "SAPIEN=풍선 / Evolut=sheath 후퇴.",
        },
      },
      {
        text: "**배포 후 확인** — **TEE**: 누출(PVL) 있나, 판막 위치, **관상동맥 혈류** OK인지. **심전도**: **새로운 LBBB·완전 방실차단** 생기면 **임시·영구 pacemaker** 필요할 수 있음(TAVR 후 흔한 합병증). **증상**: 흉통·의식 변화 → stroke·dissection 의심.",
        image: {
          src: "/images/procedures/tavr/tavr-step-check.svg",
          alt: "배포 후 TEE·리듬 확인",
          caption: "PVL · coronary · AV block 체크.",
        },
      },
      {
        text: "**마무리** — 큰 sheath 빼고 **출혈 처리**(ProGlide 등). **발 말초혈류** 반복 확인. 회복실/ICU로 이송. **항혈전/항혈소판** 처방, **24~48시간 뒤 심초음파** 추적.",
        image: {
          src: "/images/procedures/tavr/tavr-step-close.svg",
          alt: "출혈 처리·회복실",
          caption: "Hemostasis · 항혈전 · follow-up echo.",
        },
      },
    ],
    clinicalUse:
      "고령·고위험 대동맥판 협착 환자의 대표적인 구조적 심장 시술입니다. 조영실/structural lab에서 혈관 접근, 배포 순간 모니터링, 출혈 관리가 핵심입니다. TAVR ViV는 과거 수술판 안에 다시 넣는 특수한 형태입니다.",
    nursingCare: {
      pre: [
        "CT·심초음파 계획과 valve kit(사이즈·기종) 일치 확인",
        "대퇴동맥 접근 부위 피부·말초혈류(발) 사정",
        "TEE 준비·마취/진정 계획",
        "Temporary pacing lead + generator 작동 확인",
        "Deploy 순간 팀 역할 분담",
      ],
      post: [
        "배포 직후 BP·ECG·TEE(PVL·coronary) 기록",
        "새 LBBB·완전 AV block → pacemaker 팀 보고",
        "대퇴 접근 출혈·혈종·발 말초혈류 반복 확인",
        "흉통·의식 변화 → stroke/dissection 의심 즉시 보고",
        "항혈전 처방·추적 심초음파 일정",
      ],
    },
    keyPoints: [
      "대퇴동맥 접근 → wire로 판막 통과 → deploy",
      "BAV/deploy 때 rapid pacing으로 BP↓ (의도적)",
      "SAPIEN=풍선 펼침 / Evolut=sheath 후퇴",
      "배포 후 TEE로 PVL·coronary·리듬 확인",
      "합병증: 누출, AV block, stroke, dissection",
    ],
    relatedItems: ["TAVR ViV", "TEE", "Aortic Stenosis"],
    tags: ["시술", "대동맥판", "구조적", "TAVR"],
  },
  {
    slug: "tavr-viv",
    title: "TAVR ViV",
    englishName: "Transcatheter Aortic Valve Replacement — Valve-in-Valve",
    koreanName: "경피적 대동맥판 치환술 — 판막 안 판막",
    summary:
      "예전에 넣은 인공 대동맥판이 망가졌을 때, 그 안에 새 경피적 판막을 또 넣는 시술",
    summaryEn:
      "TAVR ViV places a new transcatheter valve inside a failing surgical bioprosthetic aortic valve.",
    definition: [
      "TAVR ViV(Valve-in-Valve)는 과거 대동맥판 교환술(SAVR)로 넣었던 생체 인공판막이 오래되어 좁아지거나(협착) 새기기 시작했을 때, 그 옛 판막 안에 새 경피적 판막(TAVR)을 넣는 시술입니다.",
      "환자가 이미 한 번 개심 수술을 받았고, 다시 흉터를 열어 수술하기 어렵거나 위험할 때 선택됩니다. 대퇴동맥 등 혈관을 통해 카테터로 접근하므로 개심 수술보다 부담이 적은 편입니다.",
      "다만 '판막 안에 판막'을 넣는 것이라, 크기 맞추기·관상동맥 막힘·판막 위치가 매우 중요합니다. 시술 전 CT로 옛 판막 크기와 관상동맥 위치를 꼼꼼히 봅니다.",
      "한마디로, '망가진 옛 인공판막 안에 새 판막을 끼워 넣는 TAVR'입니다.",
    ],
    measurementSteps: [
      "시술 전: 심초음파·CT로 옛 인공판막의 크기, 형태, 협착/누출 정도를 확인합니다. 관상동맥이 막힐 위험이 있는지 미리 평가합니다.",
      "환자 동의, 신기능, 항응고 상태를 확인하고 시술실/조영실로 이동합니다.",
      "국소 또는 전신 마취 후 대퇴동맥(또는 다른 혈관)으로 접근합니다.",
      "가이드 와이어와 카테터로 대동맥을 거쳐 옛 인공판막 위치까지 진입합니다.",
      "옛 판막 크기에 맞는 TAVR 판막 크기를 선택합니다. ViV에서는 크기 선택이 결과를 좌우하는 가장 중요한 단계 중 하나입니다.",
      "필요하면 옛 판막을 먼저 풍선으로 살짝 넓힙니다. (predilation)",
      "TAVR 판막을 옛 인공판막 안 정확한 위치에 놓고, 천천히 펼쳐 고정합니다.",
      "시술 직후 조영·TEE로 판막 위치, 새 누출(paravalvular leak), 관상동맥 혈류를 확인합니다.",
      "접근 부위 출혈을 처리하고, 환자를 회복실/중환자실로 보냅니다.",
      "시술 후 항혈전 치료 계획을 정하고, 추적 심초음파로 판막 기능을 봅니다.",
    ],
    stepsTitle: "시술 절차",
    stepsSubtitle: "단계별 순서",
    clinicalUse:
      "과거 SAVR 생체판막이 기능 저하된 환자(재수술 고위험군)에게 시행합니다. 조영실에서는 접근 혈관 준비, 조영 촬영, 판막 배포 순간의 혈압·심전도 모니터링, 출혈 관리가 핵심입니다. ViV만의 주의점은 관상동맥 폐쇄와 판막 탈자 위험이므로, 시술 전 CT 계획과 시술 중 영상 확인이 특히 중요합니다.",
    nursingCare: {
      pre: [
        "CT/심초음파 계획 결과, 옛 판막 크기 확인",
        "항응고 상태, 알레르기, 동의서 확인",
        "대퇴동맥 접근 부위 피부·말초혈류 사정",
        "전신/국소 마취 계획 및 금식 확인",
        "관상동맥 폐쇄 위험 대비 응급 장비 준비 확인",
      ],
      post: [
        "접근 부위 출혈·혈종·말초혈류 반복 확인",
        "배포 직후 혈압·리듬·흉통·의식 변화 모니터링",
        "완전 방실차단·새 부정맥 여부 확인",
        "영구 심박기 필요 여부 의료진과 공유",
        "항혈전 계획·추적 심초음파 일정 기록",
      ],
    },
    keyPoints: [
      "ViV = 기존 인공 대동맥판 안에 새 TAVR 판막 삽입",
      "주요 적응: 생체판막 열화·협착, 재개심 수술 고위험 환자",
      "판막 크기 선택과 시술 전 CT 계획이 매우 중요",
      "합병증 주의: 관상동맥 폐쇄, 판막 탈자, 누출, 전도 이상",
      "조영실 역할: 혈관 접근·조영·모니터링·출혈 처치, 배포 순간 팀 커뮤니케이션",
    ],
    relatedItems: ["TAVR", "SAVR", "Bioprosthetic Valve"],
    tags: ["시술", "대동맥판", "TAVR", "판막"],
  },
  {
    slug: "tmvr",
    title: "TMVR",
    englishName: "Transcatheter Mitral Valve Replacement",
    koreanName: "경피적 승모판 치환술",
    summary:
      "개심 수술 없이 카테터로 승모판을 새 인공판막으로 바꾸는 시술",
    summaryEn:
      "TMVR replaces the mitral valve through a catheter without open-heart surgery.",
    definition: [
      "TMVR(경피적 승모판 치환술)는 카테터로 좌심방/좌심실에 접근해, 기능이 망가진 승모판 자리에 새 인공판막을 넣는 시술입니다.",
      "주로 승모판이 심하게 망가졌는데(협착+누출 등) 개심 수술 위험이 매우 큰 환자에게 고려합니다.",
      "대부분 transseptal(심장 중격 뚫기) 또는 transapical(심장 apex 경로) 등으로 좌심심방/좌심실에 들어갑니다.",
      "승모판은 해부학적으로 복잡하고 주변 구조와 가까워, TAVR보다 계획·위치 맞추기가 더 까다롭습니다.",
      "한마디로, '카테터로 승모판을 갈아끼우는 고난도 구조 시술'입니다.",
    ],
    measurementSteps: [
      "시술 전: 심초음파·CT로 승모판 병변(협착/누출), 좌심실 기능, 승모판 고리 크기를 확인합니다.",
      "transseptal 또는 transapical 등 접근 경로를 팀이 미리 정합니다.",
      "환자 동의, 신기능, 항응고, TEE 준비, 마취 계획을 확인합니다.",
      "접근 후 가이드 와이어·카테터로 승모판 위치까지 진입합니다.",
      "기존 판막/고리 상태에 맞는 TMVR 기구 크기를 선택합니다.",
      "필요 시 풍선·전처리 시술로 배포 공간을 확보합니다.",
      "TEE·조영 보면서 인공판막을 정확한 위치에 전개합니다.",
      "배포 후 누출, 와류, LVOT obstruction(유출로 막힘), 리듬을 확인합니다.",
      "접근 부위·중격 puncture 부위 출혈을 확인하고 회복실/중환자실로 이송합니다.",
      "시술 후 항혈전 계획과 추적 심초음파 일정을 정합니다.",
    ],
    stepsTitle: "시술 절차",
    stepsSubtitle: "단계별 순서",
    clinicalUse:
      "고위험 승모판 질환 환자에서 시행하는 구조적 심장 시술입니다. TAVR보다 해부학적으로 복잡해 TEE 가이드와 팀 커뮤니케이션이 더욱 중요합니다. 배포 후 LVOT obstruction, 누출, 심실 기능 악화를 꼭 확인해야 합니다.",
    nursingCare: {
      pre: [
        "CT/TEE로 승모판 크기·누출·좌심실 기능 확인",
        "접근 경로(transseptal/transapical) 계획 공유",
        "금식, TEE 준비, 항응고·동의서 확인",
        "접근 부위 및 중격 puncture 관련 준비 확인",
        "배포 후 LVOT obstruction 대비 모니터링 계획 수립",
      ],
      post: [
        "접근 부위·중격 puncture 출혈·혈종 확인",
        "배포 직후 혈압·리듬·호흡·산소포화도 밀착 모니터링",
        "TEE/임상적으로 누출·LVOT obstruction 증상(저혈압, 부종) 관찰",
        "완전 방실차단·부정맥 발생 시 즉시 보고",
        "항혈전 계획·추적 심초음파 일정 기록",
      ],
    },
    keyPoints: [
      "목적: 카테터로 승모판 교체",
      "고위험 승모판 질환 환자 대상",
      "TAVR보다 복잡, TEE·CT 계획 필수",
      "합병증 주의: 누출, LVOT obstruction, 부정맥",
      "배포 순간 혈역학 변화 모니터링이 매우 중요",
    ],
    relatedItems: ["TAVR", "TEE", "MitraClip", "Mitral Regurgitation"],
    tags: ["시술", "승모판", "구조적", "TMVR"],
  },
  {
    slug: "mitraclip",
    title: "MitraClip",
    englishName: "MitraClip Transcatheter Mitral Valve Repair",
    koreanName: "미트라클립 경피적 승모판 성형술",
    summary:
      "카테터로 승모판 양쪽 잎을 클립으로 잡아 맞붙여, 승모판 역류를 줄이는 시술",
    summaryEn:
      "MitraClip uses a catheter-delivered clip to grasp mitral leaflets together and reduce mitral regurgitation.",
    definition: [
      "MitraClip은 카테터로 심장 안에 들어가, 승모판의 앞잎·뒷잎을 작은 클립으로 잡아 맞붙이는 시술입니다. 판막을 바꾸지 않고 역류를 줄이는 '성형(repair)' 시술입니다.",
      "주로 승모판 역류(MR)가 심한데 개심 수술 위험이 큰 환자에게 고려합니다. 특히 증상이 있거나 심장이 커지는 등 역류의 영향이 큰 경우에 검토합니다.",
      "대부분 대퇴동맥/정맥 접근 후 transseptal로 좌심방에 들어가고, TEE(경식도 초음파) 보면서 클립 위치를 정확히 맞춥니다.",
      "TMVR이 '판막 교체'라면, MitraClip은 '판막 잎을 클립으로 고정해 새는 것을 줄임'으로 이해하면 쉽습니다.",
      "한마디로, '승모판 역류를 클립 하나로 줄이는 경피적 성형 시술'입니다.",
    ],
    videos: [
      {
        youtubeId: "FVSzWP77nNo",
        title: "MitraClip Procedure Animation Video — Boulder Community Health",
        caption:
          "MitraClip 시술 애니메이션 — transseptal 진입, clip이 anterior·posterior leaflet을 잡아 고정하는 과정. TEE 가이드 하 clip deploy 흐름 이해용.",
        sourceUrl: "https://youtu.be/FVSzWP77nNo",
      },
    ],
    videosTitle: "참고 영상",
    videosSubtitle: "MitraClip 시술 과정 (YouTube)",
    measurementSteps: [
      "시술 전: TEE/심초음파로 MR 정도, 잎 모양, 좌심실 기능, 승모판 해부학 적합성을 확인합니다.",
      "환자 동의, 금식, TEE 준비, 항응고·마취 계획을 확인합니다.",
      "대퇴동맥/정맥 접근 후 transseptal puncture로 좌심방에 진입합니다.",
      "가이드 와이어·전달 시스템으로 MitraClip을 승모판 위치로 이동합니다.",
      "TEE로 앞잎·뒷잎이 클립 팔에 잘 잡히는지 실시간 확인합니다.",
      "위치가 맞으면 클립을 전개해 두 잎을 고정합니다.",
      "고정 후 TEE로 MR 감소 정도, 잔존 누출, 클립 위치, LVOT obstruction 여부를 확인합니다.",
      "필요하면 두 번째·세 번째 클립을 추가합니다.",
      "시술 종료 후 접근 부위·중격 puncture 출혈을 확인하고 회복실/병동으로 이송합니다.",
      "시술 후 항혈전/항혈소판 계획과 추적 심초음파 일정을 정합니다.",
    ],
    stepsTitle: "시술 절차",
    stepsSubtitle: "단계별 순서",
    clinicalUse:
      "고위험 승모판 역류 환자에서 가장 널리 쓰이는 경피적 승모판 성형 시술입니다. structural lab/조영실에서 TEE 가이드가 핵심이며, 클립 전개 순간 팀원 모두가 영상·혈압·리듬을 집중해서 봅니다. TMVR과 달리 판막을 교체하지 않으므로, 시술 후에도 잔존 MR과 재역류 추적이 필요합니다.",
    nursingCare: {
      pre: [
        "TEE로 MR 정도·판막 형태·시술 적합성 확인",
        "금식, TEE 준비(하강장 약), 동의서·항응고 확인",
        "transseptal 접근 계획 및 중격 puncture 준비",
        "대퇴동맥/정맥 접근 부위 피부·말초혈류 사정",
        "클립 전개 순간 TEE-의사-간호사 커뮤니케이션 역할 확인",
      ],
      post: [
        "접근 부위·중격 puncture 출혈·혈종·말초혈류 확인",
        "클립 후 혈압·리듬·호흡·산소포화도 모니터링",
        "TEE/임상적으로 잔존 MR·저혈압·폐부종 여부 관찰",
        "항혈전/항혈소판 시작 시간 정확히 기록",
        "추적 심초음파 일정·재역류 증상 교육",
      ],
    },
    keyPoints: [
      "목적: 승모판 잎을 클립으로 고정해 MR 감소",
      "판막 교체(TMVR)가 아닌 성형(repair) 시술",
      "TEE 실시간 가이드가 성공의 핵심",
      "여러 개 클립 삽입 가능",
      "시술 후 잔존 MR·재역류 추적 필요",
    ],
    relatedItems: ["TMVR", "TEE", "Mitral Regurgitation"],
    tags: ["시술", "승모판", "구조적", "MR"],
  },
  {
    slug: "ttvr",
    title: "TTVR",
    englishName: "Transcatheter Tricuspid Valve Replacement",
    koreanName: "경피적 삼첨판 치환술",
    summary:
      "개심 수술 없이 카테터로 삼첨판을 새 인공판막으로 바꾸는 시술",
    summaryEn:
      "TTVR replaces the tricuspid valve through a catheter without open-heart surgery.",
    definition: [
      "TTVR(경피적 삼첨판 치환술)는 카테터로 오른심방/오른심실에 접경해, 기능이 망가진 삼첨판 자리에 새 인공판막을 넣는 시술입니다.",
      "주로 삼첨판 역류(TR)나 기존 삼첨판 인공판막 열화가 심한데, 개심 수술 위험이 매우 큰 환자에게 고려합니다.",
      "대부분 경정맥(대퇴정맥·경정맥 등)으로 접근해 오른심으로 들어갑니다. TAVR·TMVR과 달리 오른심(우심) 구조 시술이라, 오른심 기능·폐동맥 압 평가가 중요합니다.",
      "삼첨판은 압이 낮고 해부학이 복잡해, 판막 크기 맞추기·위치·누출 확인이 까다롭습니다. 필요하면 기존 인공판막 안에 넣는 ViV(Valve-in-Valve) 형태로 시행하기도 합니다.",
      "한마디로, '카테터로 삼첨판을 갈아끼우는 구조적 심장 시술'입니다.",
    ],
    measurementSteps: [
      "시술 전: 심초음파·CT로 TR 정도, 삼첨판/고리 크기, 오른심실·오른심방 크기, 폐동맥 압을 확인합니다.",
      "환자 동의, 금식, 신기능, 항응고, TEE 준비, 마취 계획을 확인합니다.",
      "접근 경로(대퇴정맥·경정맥 등)와 전달 시스템을 팀이 미리 정합니다.",
      "가이드 와이어·카테터로 삼첨판 위치까지 진입합니다.",
      "기존 판막·고리 상태에 맞는 TTVR 기구 크기를 선택합니다.",
      "필요 시 풍선·전처리로 배포 공간을 확보합니다.",
      "TEE·조영 보면서 인공판막을 정확한 위치에 전개합니다.",
      "배포 후 누출(PVL), 판막 위치, 오른심실 기능, 리듬을 확인합니다.",
      "접근 부위 출혈을 확인하고 회복실/중환자실로 이송합니다.",
      "시술 후 항혈전 계획과 추적 심초음파 일정을 정합니다.",
    ],
    stepsTitle: "시술 절차",
    stepsSubtitle: "단계별 순서",
    clinicalUse:
      "고위험 삼첨판 질환(중증 TR, 인공판막 열화) 환자에서 시행하는 구조적 심장 시술입니다. TAVR·TMVR과 함께 경피적 판막 치환술의 한 축이지만, 오른심 시술이라 수액·폐동맥 압·간울혈 관리가 특히 중요합니다. structural lab/조영실에서 TEE 가이드와 배포 순간 혈역학 모니터링이 핵심이며, 시술 후 오른심부전 증상 악화 여부를 꼭 봅니다.",
    nursingCare: {
      pre: [
        "심초음파·CT로 TR 정도, 삼첨판 크기, 오른심실 기능 확인",
        "RHC/임상 자료로 폐동맥 압·오른심부전 정도 파악",
        "금식, TEE 준비, 항응고·동의서 확인",
        "접근 경로(대퇴정맥·경정맥) 피부·말초혈류 사정",
        "수액 과다 주입 주의 — 오른심 부담 환자임을 팀과 공유",
      ],
      post: [
        "접근 부위 출혈·혈종·말초혈류 반복 확인",
        "배포 직후 혈압·리듬·호흡·산소포화도 밀착 모니터링",
        "목정맥 부풂, 간통, 복부 팽만, 하지부종 등 오른심부전 악화 관찰",
        "TEE/임상적으로 누출·저혈압·호흡곤란 여부 확인",
        "항혈전 계획·추적 심초음파 일정 기록",
      ],
    },
    keyPoints: [
      "목적: 카테터로 삼첨판 교체",
      "고위험 TR·삼첨판 인공판막 열화 환자 대상",
      "오른심 시술 → 수액·폐동맥 압·오른심부전 관리가 핵심",
      "TEE·CT 계획과 배포 순간 혈역학 모니터링 필수",
      "합병증 주의: 누출, 부정맥, 출혈, 오른심부전 악화",
    ],
    relatedItems: [
      "TAVR",
      "TMVR",
      "Tricuspid Regurgitation",
      "TEE",
    ],
    tags: ["시술", "삼첨판", "구조적", "TTVR"],
  },
  {
    slug: "tricuspid-teer",
    title: "Tricuspid TEER",
    englishName: "Transcatheter Tricuspid Edge-to-Edge Repair",
    koreanName: "경피적 삼첨판 이엣지-투-이엣지 성형술",
    summary:
      "카테터로 삼첨판 양쪽 잎을 클립으로 잡아 맞붙여, 삼첨판 역류를 줄이는 시술",
    summaryEn:
      "Tricuspid TEER uses a catheter-delivered clip to grasp tricuspid leaflets together and reduce tricuspid regurgitation.",
    definition: [
      "Tricuspid TEER(경피적 삼첨판 이엣지-투-이엣지 성형술)는 카테터로 오른심 안에 들어가, 삼첨판의 앞잎·뒷잎을 클립으로 잡아 맞붙이는 시술입니다. TEER는 '잎 가장자리끼리 맞붙여 고정한다'는 뜻의 성형(repair) 시술입니다.",
      "주로 삼첨판 역류(TR)가 심한데 개심 수술 위험이 큰 환자에게 고려합니다. 다리 부종, 복부 팽만, 피로 등 오른심부전 증상이 있는 경우에 검토됩니다.",
      "대부분 경정맥(대퇴정맥·경정맥 등)으로 접근해 오른심으로 들어가고, TEE(경식도 초음파) 보면서 클립 위치를 맞춥니다. 대표 기구로 TriClip 등이 있습니다.",
      "TTVR이 '판막 교체'라면, Tricuspid TEER는 '판막 잎을 클립으로 고정해 새는 것을 줄임'으로 이해하면 쉽습니다. MitraClip이 승모판용이라면, 이 시술은 삼첨판용 TEER입니다.",
      "한마디로, '삼첨판 역류를 클립으로 줄이는 경피적 성형 시술'입니다.",
    ],
    measurementSteps: [
      "시술 전: TEE/심초음파로 TR 정도, 잎 모양, 오른심실·오른심방 크기, 시술 적합성을 확인합니다.",
      "환자 동의, 금식, TEE 준비, 항응고·마취 계획을 확인합니다.",
      "경정맥(대퇴정맥·경정맥 등) 접근 후 가이드 와이어·카테터로 삼첨판 위치까지 진입합니다.",
      "전달 시스템으로 TEER 클립(예: TriClip)을 삼첨판 위치로 이동합니다.",
      "TEE로 앞잎·뒷잎이 클립 팔에 잘 잡히는지 실시간 확인합니다.",
      "위치가 맞으면 클립을 전개해 두 잎을 고정합니다.",
      "고정 후 TEE로 TR 감소 정도, 잔존 누출, 클립 위치, 오른심실 기능을 확인합니다.",
      "필요하면 두 번째·세 번째 클립을 추가합니다.",
      "시술 종료 후 접근 부위 출혈을 확인하고 회복실/병동으로 이송합니다.",
      "시술 후 항혈전/항혈소판 계획과 추적 심초음파 일정을 정합니다.",
    ],
    stepsTitle: "시술 절차",
    stepsSubtitle: "단계별 순서",
    clinicalUse:
      "고위험 삼첨판 역류 환자에서 시행하는 경피적 삼첨판 성형 시술입니다. structural lab/조영실에서 TEE 가이드가 핵심이며, 클립 전개 순간 팀원 모두가 영상·혈압·리듬을 집중해서 봅니다. TTVR과 달리 판막을 교체하지 않으므로, 시술 후에도 잔존 TR과 오른심부전 증상 추적이 필요합니다. 오른심 시술이므로 수액·부종·간울혈 관리에 특히 유의합니다.",
    nursingCare: {
      pre: [
        "TEE로 TR 정도·판막 형태·시술 적합성 확인",
        "RHC/임상 자료로 오른심부전·폐동맥 압 정도 파악",
        "금식, TEE 준비(하강장 약), 동의서·항응고 확인",
        "접근 경로(대퇴정맥·경정맥) 피부·말초혈류 사정",
        "클립 전개 순간 TEE-의사-간호사 커뮤니케이션 역할 확인",
      ],
      post: [
        "접근 부위 출혈·혈종·말초혈류 확인",
        "클립 후 혈압·리듬·호흡·산소포화도 모니터링",
        "목정맥 부풂, 간통, 복부 팽만, 하지부종 등 오른심부전 악화 관찰",
        "TEE/임상적으로 잔존 TR·저혈압·호흡곤란 여부 확인",
        "항혈전/항혈소판 시작 시간·추적 심초음파 일정 기록",
      ],
    },
    keyPoints: [
      "목적: 삼첨판 잎을 클립으로 고정해 TR 감소",
      "판막 교체(TTVR)가 아닌 성형(repair) 시술",
      "MitraClip의 삼첨판 버전으로 이해하면 쉬움",
      "TEE 실시간 가이드가 성공의 핵심",
      "시술 후 잔존 TR·오른심부전 증상 추적 필요",
    ],
    relatedItems: [
      "TTVR",
      "MitraClip",
      "Tricuspid Regurgitation",
      "TEE",
    ],
    tags: ["시술", "삼첨판", "구조적", "TEER"],
  },
  {
    slug: "ivus",
    title: "IVUS",
    englishName: "Intravascular Ultrasound",
    koreanName: "혈관내 초음파",
    summary:
      "혈관 안에 초음파 탐촉자를 넣어, 조영으로는 잘 안 보이는 혈관 벽과 협착을 직접 보는 검사",
    summaryEn:
      "IVUS uses an ultrasound probe inside the vessel to see plaque, vessel size, and stent results in detail.",
    definition: [
      "IVUS(혈관내 초음파)는 가느다란 초음파 탐촉자를 혈관 안으로 넣어, 혈관 벽과 협착을 실시간으로 보는 검사입니다.",
      "조영술(angiography)은 혈관 속 그림자처럼 보이지만, IVUS는 혈관 단면을 '위에서 내려다본 사진'처럼 보여 줍니다. 그래서 혈관이 실제로 얼마나 좁은지, 플라그가 얼마나 쌓였는지, 스텐트가 잘 펼쳐졌는지 더 정확히 알 수 있습니다.",
      "혈관이 애매하게 좁아 보일 때, 좌주형지(왼쪽 주요 혈관) 병변, 스텐트 크기 선택, 스텐트 시술 후 결과 확인 등에서 자주 사용합니다.",
      "FFR/iFR이 '피가 잘 통하나'를 본다면, IVUS는 '혈관 구조가 어떤가'를 보는 검사입니다. 둘을 함께 쓰면 판단이 더 정확해집니다.",
      "한마디로, '혈관 안에서 초음파로 혈관 단면을 직접 찍어 보는 검사'입니다.",
    ],
    measurementSteps: [
      "시술 전: 조영으로 병변 위치를 먼저 확인하고, IVUS가 필요한 이유(크기 측정, 스텐트 계획, 결과 확인 등)를 정합니다.",
      "가이드 와이어를 병변을 지나도록 혈관 안에 넣습니다.",
      "IVUS 카테터(초음파 탐촉자)를 와이어 위로 혈관 안 깊숙이 진행시킵니다.",
      "탐촉자 끝을 보려는 부위보다 약간 더 안쪽(원위쪽)에 두고, 천천히 빼면서(backpull) 영상을 봅니다.",
      "화면에서 혈관 바깥 테두리(EEM), 혈관 안쪽 면적(루멘), 플라그 두께를 확인합니다.",
      "병변 가장 좁은 부분의 면적(MLA)과 참조 혈관 직경을 재어, 스텐트 크기·길이를 결정합니다.",
      "스텐트 시술 후에는 스텐트가 혈관벽에 잘 붙었는지, 충분히 펼쳐졌는지, 가장자리에 문제가 없는지 IVUS로 다시 확인합니다.",
      "필요한 영상과 수치를 저장하고, 시술 기록에 남깁니다.",
      "IVUS 카테터를 빼고, 이후 PCI나 다른 시술을 이어갑니다.",
    ],
    stepsTitle: "시술 절차",
    stepsSubtitle: "단계별 순서",
    clinicalUse:
      "관상동맥 조영실에서 병변 평가, 스텐트 크기·위치 결정, 시술 후 최적화(optimization)에 널리 씁니다. 조영만으로는 판단이 어려운 중등도 협착, 분지부 병변, 장확장 병변, 스텐트 확장 불충분 여부를 확인할 때 특히 유용합니다. 조영실 팀은 pullback 속도, 영상 저장, 의사에게 주요 수치(MLA, 참조 직경 등)를 말로 전달하는 역할을 합니다.",
    nursingCare: {
      pre: [
        "IVUS 카테터·프린터/저장 장비 작동 확인",
        "항응고(헤파린) 준비 및 ACT 목표치 팀과 공유",
        "환자 알레르기, 신기능, 금식 상태 확인",
        "pullback 속도·영상 기록 담당자 지정",
        "의사가 요청할 MLA/참조직경 기록 준비",
      ],
      post: [
        "IVUS 영상 저장·기록 여부 반드시 확인",
        "접근 부위 출혈·말초혈류 확인",
        "시술 연장으로 인한 수분/신기능 변화 모니터링",
        "추가 PCI 예정 시 항응고 유지 상태 확인",
        "환자 흉통·부정맥 발생 시 즉시 보고",
      ],
    },
    keyPoints: [
      "조영보다 혈관 단면·플라그·스텐트 팽창을 더 정확히 볼 수 있음",
      "주요 용도: 병변 평가, 스텐트 크기 결정, 시술 후 결과 확인",
      "핵심 수치: MLA(최소 루멘 면적), 참조 혈관 직경, 스텐트 확장 정도",
      "FFR/iFR(기능)과 IVUS(구조)를 함께 쓰면 치료 결정에 도움",
      "조영실 역할: 카테터 진입·pullback 보조, 영상 저장, 수치 기록",
    ],
    relatedItems: ["FFR", "iFR", "PCI", "OCT"],
    tags: ["시술", "관상동맥", "초음파", "영상"],
  },
  {
    slug: "oct",
    title: "OCT",
    englishName: "Optical Coherence Tomography",
    koreanName: "광간섭단층촬영",
    summary:
      "혈관 안에서 빛으로 고해상도 단면 영상을 찍어, 플라그·스텐트·혈전을 아주 세밀하게 보는 검사",
    summaryEn:
      "OCT uses light inside the vessel to create high-resolution images of plaque, stent struts, and clot in fine detail.",
    definition: [
      "OCT(광간섭단층촬영)는 혈관 안에 가는 탐촉자를 넣고, 빛으로 혈관 단면을 아주 고해상도로 찍는 검사입니다.",
      "IVUS가 초음파로 혈관을 본다면, OCT는 빛을 써서 훨씬 더 선명하게 봅니다. 스텐트 막대 하나하나, 얇은 플라그 표면, 작은 혈전, 혈관벽 찢어짐(dissection) 등을 잘 볼 수 있습니다.",
      "다만 빛은 혈액에 가려지기 쉬워서, 촬영할 때 조영제나 생리식염수로 혈액을 잠깐 씻어 내야 합니다. 이 부분이 IVUS와 가장 큰 차이입니다.",
      "혈관 깊은 쪽(바깥 벽 전체)은 IVUS보다 잘 안 보일 수 있지만, 혈관 안쪽 표면을 자세히 봐야 할 때는 OCT가 더 유리합니다.",
      "한마디로, '혈관 안을 현미경처럼 자세히 찍어 보는 영상 검사'입니다.",
    ],
    measurementSteps: [
      "시술 전: 조영으로 병변 위치를 확인하고, OCT가 필요한 이유(스텐트 밀착 확인, 혈전·층류 확인, 병변 성격 평가 등)를 정합니다.",
      "가이드 와이어를 병변을 지나도록 혈관 안에 넣습니다.",
      "OCT 카테터를 와이어 위로 혈관 안으로 진입시킵니다.",
      "탐촉자 끝을 보려는 부위보다 약간 더 안쪽에 위치시킵니다.",
      "촬영 직전, 조영제 또는 생리식염수를 빠르게 주입해 혈관 안의 혈액을 잠깐 치웁니다. (이때 영상이 가장 선명해집니다)",
      "자동 pullback 또는 수동으로 천천히 빼면서 단면 영상을 연속 촬영합니다.",
      "화면에서 루멘 크기, 플라그 표면, 스텐트 막대 밀착(apposition), 가장자리 층류·혈전 여부를 확인합니다.",
      "필요한 영상과 수치를 저장하고 시술 기록에 남깁니다.",
      "OCT 카테터를 빼고, 이후 PCI나 추가 처치를 이어갑니다.",
    ],
    stepsTitle: "시술 절차",
    stepsSubtitle: "단계별 순서",
    clinicalUse:
      "스텐트 시술 후 막대가 혈관벽에 잘 붙었는지 확인, 급성 관상동맥증후군에서 혈전·플라그 파열 평가, 미세 혈관이나 복잡 병변의 세밀한 평가에 사용됩니다. 조영실에서는 OCT 촬영 순간 조영제/생리식염수 주입 타이밍이 매우 중요하므로, 의사·간호사·영상팀이 '지금 flush' 타이밍을 맞추는 커뮤니케이션이 핵심입니다.",
    nursingCare: {
      pre: [
        "OCT 카테터·flush용 조영제/생리식염수 준비 확인",
        "flush 타이밍 커뮤니케이션 역할 분담",
        "항응고 상태, 알레르기, 신기능 확인",
        "영상 저장 장비·기록 시스템 작동 확인",
        "촬영 중 환자 움직임 최소화 안내",
      ],
      post: [
        "OCT 영상 저장·기록 완료 여부 확인",
        "flush 후 흉통·리듬 변화 모니터링",
        "접근 부위 출혈·말초혈류 확인",
        "조영제 추가 사용에 따른 소변량·신기능 확인",
        "이후 PCI 계획·항혈전 유지 상태 기록",
      ],
    },
    keyPoints: [
      "IVUS보다 해상도가 높아 혈관 안쪽 표면·스텐트 막대를 더 선명하게 봄",
      "촬영 전 혈액을 flush(조영제/생리식염수 주입)해야 영상이 잘 나옴",
      "주요 용도: 스텐트 밀착 확인, 혈전·층류 평가, 병변 세밀 평가",
      "깊은 혈관벽 전체 보기는 IVUS가 더 유리한 경우가 많음",
      "조영실 역할: flush 준비·주입 타이밍, pullback 보조, 영상 저장",
    ],
    relatedItems: ["IVUS", "FFR", "PCI"],
    tags: ["시술", "관상동맥", "영상", "고해상도"],
  },
  {
    slug: "shockwave-lithotripsy",
    title: "Shockwave Lithotripsy",
    englishName: "Intravascular Lithotripsy (IVL)",
    koreanName: "혈관내 충격파 석회화 분쇄술 (IVL)",
    summary:
      "혈관 안에서 충격파로 딱딱한 석회화 병변을 깨뜨려, 풍선·스텐트가 잘 펼쳐지게 돕는 PCI 보조 시술",
    summaryEn:
      "Intravascular lithotripsy (IVL) uses sonic pulses inside the vessel to crack calcium so balloons and stents can expand properly.",
    definition: [
      "**IVL(Intravascular Lithotripsy, 혈관내 충격파 석회화 분쇄술)** 은 조영실에서 쓰는 **석회화 PCI 전용 보조 시술**입니다. 이름이 신장 결석 쇄석술(ESWL)과 비슷하지만, 여기서는 **관상동맥·말초혈관 벽의 칼슘(석회)** 을 다룹니다.",
      "**쉽게 말하면**: 혈관 벽에 칼슘이 **돌처럼 딱딱하게** 쌓이면, 일반 풍선·스텐트가 **안 펼쳐지거나 찌그러집니다.** IVL은 특수 풍선 카테터로 **짧은 충격파(sonic pulse)** 를 보내 석회에 **균열**을 내고, 그다음 **일반 PCI(풍선·DES/DCB)** 를 이어갑니다. 비유하면 **'얼어붙은 땅을 살짝 쪼개서 길을 뚫는 것'** 과 비슷합니다.",
      "**누가 받나**: **심한 석회화 병변** — IVUS/OCT에서 석회 arc가 넓고(예: 270° 이상), 고압 NC balloon으로도 확장이 안 되거나, 스텐트 **under-expansion** 위험이 큰 PCI.",
      "**Shockwave Medical** 시스템이 대표적입니다. 풍선 안 **emitter**가 sonic pulse를 보내고, generator가 펄스를 제어합니다.",
      "**하면 안 되거나 주의**: 활성 감염·혈관 천공·층박리가 이미 있는 병변, 펄스 중 **팀 stand clear** 필요, **일시적 흉통** 흔함 — 천공·대량 출혈·지속 부정맥은 즉시 대응.",
      "한마디로, **'딱딱한 혈관 석회를 충격파로 깨서 PCI를 가능하게 하는 시술'** 입니다.",
    ],
    videos: [
      {
        youtubeId: "xkGIPWk0TeU",
        title:
          "The Coronary Intravascular Lithotripsy System | Sakra World Hospital",
        caption:
          "관상동맥 IVL(혈관내 충격파) 시스템 소개 영상 — Shockwave catheter·sonic pulse로 석회화 병변을 처리하는 흐름을 영상으로 확인. 아래 단계별 설명과 함께 보면 이해가 빨라집니다.",
        sourceUrl: "https://youtu.be/xkGIPWk0TeU",
      },
    ],
    videosTitle: "참고 영상",
    videosSubtitle: "IVL 시술 (YouTube)",
    images: [
      {
        src: "/images/procedures/ivl/ivl-principle.svg",
        alt: "IVL 원리 - 석회화 병변을 충격파로 균열",
        caption:
          "**원리 한눈에.** 석회가 두꺼우면 풍선·스텐트가 안 펼쳐짐 → IVL pulse로 균열 → 이후 풍선·스텐트 PCI.",
      },
    ],
    imagesTitle: "그림으로 이해하기",
    imagesSubtitle: "IVL 원리",
    stepsTitle: "시술 절차",
    stepsSubtitle: "단계별 순서 + 그림",
    measurementSteps: [
      {
        text: "**시술 전 준비** — **IVUS 또는 OCT**로 석회 **arc(각도)·길이·깊이**를 먼저 봅니다. 병변 길이에 맞는 **Shockwave catheter** 크기(2.5 / 3.0 / 3.5 / 4.0 mm)와 **generator·connector** 작동을 스크럽 테이블에서 확인합니다. IVL 후 이어갈 **NC balloon**, **DES/DCB** 백업 준비. **DAPT**(아스피린+P2Y12) 복용·**ACT 목표 250~300초** 확인.",
        image: {
          src: "/images/procedures/ivl/ivl-step-prep.svg",
          alt: "IVL 시술 전 준비",
          caption: "IVUS/OCT · catheter · generator · NC balloon 백업.",
        },
      },
      {
        text: "**접근 · wire · 항응고** — **요골(radial)** 또는 **대퇴(femoral)** 접근, **6~7 Fr sheath**. LAD/RCA/LCx에 맞는 **guide catheter** 선택 후 **workhorse wire**로 병변을 **distal까지** 통과합니다. **UFH** 투여 → **ACT 250~300초** 달성. IVL 전·중 ACT를 반복 확인하고, 스크럽이 결과를 팀에 말합니다.",
        image: {
          src: "/images/procedures/ivl/ivl-step-access.svg",
          alt: "IVL 접근과 항응고",
          caption: "Radial/femoral · wire · ACT 250~300s.",
        },
      },
      {
        text: "**IVUS/OCT로 석회 평가** — cross-section에서 **석회 arc**(예: 180° / 270° / 360°), **병변 길이(mm)**, **reference vessel 직경**을 기록합니다. 이 수치로 **Shockwave balloon 크기·길이**를 고릅니다. wire가 병변 distal을 넘었는지, side branch 위치도 확인합니다.",
        image: {
          src: "/images/procedures/ivl/ivl-step-imaging.svg",
          alt: "IVUS로 석회 평가",
          caption: "석회 arc · 길이 · vessel Ø → catheter 선택.",
        },
      },
      {
        text: "**Shockwave 카테터 위치** — IVL catheter를 wire 위로 넣어 **석회 구간 정중앙**에 둡니다. 풍선의 **emitter(마커)** 가 calcium 위에 오도록 **조영**으로 proximal·distal edge를 확인합니다. 위치가 어긋나면 pulse 효과가 떨어지므로, **reposition**을 두려워하지 않습니다.",
        image: {
          src: "/images/procedures/ivl/ivl-step-position.svg",
          alt: "Shockwave 카테터 위치",
          caption: "석회 구간 정중앙 · 조영으로 edge 확인.",
        },
      },
      {
        text: "**충격파(sonic pulse) 전달** — 제조사 프로토콜에 따라 풍선을 **1:1 saline/contrast**로 채우고 **약 4 atm**에서 펄스를 보냅니다. 보통 **10 pulses × 여러 cycle**, 병변당 **최대 ~80 pulses**. 펄스 직전 팀이 **\"Pulses — stand clear!\"** 로 커뮤니케이션합니다. **각 cycle 후** 흉통·혈압·ECG·조영상 천공·층박리 징후를 확인하고, **pulse 횟수·위치**를 기록합니다.",
        image: {
          src: "/images/procedures/ivl/ivl-step-pulses.svg",
          alt: "IVL 충격파 전달",
          caption: "4 atm · 10 pulses/cycle · stand clear · 모니터.",
        },
      },
      {
        text: "**IVL 후 풍선 확장** — Shockwave catheter를 빼고 **NC balloon**으로 천천히 확장합니다. 석회가 깨진 뒤에는 **IVL 전보다 낮은 atm**에서도 luminal gain이 나는 경우가 많습니다. 조영으로 residual stenosis·dissection을 봅니다.",
        image: {
          src: "/images/procedures/ivl/ivl-step-balloon.svg",
          alt: "IVL 후 NC balloon 확장",
          caption: "석회 균열 후 NC balloon — luminal gain 확인.",
        },
      },
      {
        text: "**DES/DCB (계획 시)** — 병변 특성에 따라 **DES** 또는 **DCB**를 이어갑니다. IVL의 목적은 **스텐트가 제대로 펼쳐지고 밀착(apposition)** 하게 하는 것 — under-expansion을 줄입니다. 스텐트 deploy 후 **IVUS**로 expansion·malapposition을 확인합니다.",
        image: {
          src: "/images/procedures/ivl/ivl-step-stent.svg",
          alt: "IVL 후 DES/DCB",
          caption: "DES/DCB · expansion · apposition 확인.",
        },
      },
      {
        text: "**최종 확인 · 마무리** — **조영**: TIMI flow, residual stenosis, 층박리·side branch. **IVUS**: MLA, stent expansion, edge dissection. 이상 없으면 sheath 제거·hemostasis. 차트에 **IVL pulse 총 횟수·병변·이후 PCI** 기록. 회복실에서 **흉통·리듬·접근부 출혈** 모니터, **DAPT·조영제 신기능** 확인.",
        image: {
          src: "/images/procedures/ivl/ivl-step-final.svg",
          alt: "IVL 최종 확인",
          caption: "조영·IVUS · hemostasis · 회복실 모니터.",
        },
      },
    ],
    clinicalUse:
      "심하게 석회화된 관상동맥·말초혈관 PCI에서 사용합니다. 스텐트가 잘 안 펼쳐지거나, 고압 NC balloon도 효과가 약한 병변에서 선택합니다. 조영실에서는 **펄스 전달 순간** 환자 통증·리듬 변화를 보고, **pulse 횟수·위치·이후 PCI 결과**를 정확히 기록해야 합니다. IVL만으로 끝나는 경우보다 **IVL → balloon → DES/DCB** 순서가 일반적입니다.",
    nursingCare: {
      pre: [
        "IVUS/OCT 석회 arc·길이·깊이 결과 확인",
        "Shockwave catheter·generator·connector 작동 점검",
        "NC balloon·DES/DCB 백업 준비",
        "ACT 목표 250~300초 · DAPT 복용 확인",
        "펄스 시 'stand clear' 역할 분담 · 팀 커뮤니케이션",
        "금식·알레르기·동의서·신기능 확인",
      ],
      post: [
        "펄스·확장 후 흉통·혈압·ECG 리듬 즉시 모니터",
        "천공·층박리·대량 출혈 징후 보고",
        "IVL pulse 총 횟수·병변 위치 차트 기록",
        "이후 PCI(스텐트/DCB)·DAPT 계획 기록",
        "접근 부위 출혈·혈종·말초혈류 확인",
        "조영제 사용량·소변량·신기능 확인",
        "퇴실 전 지속 흉통·출혈 red flag 교육",
      ],
    },
    keyPoints: [
      "IVL = 혈관 내 석회를 sonic pulse로 균열",
      "주요 적응: 심한 석회화 PCI (IVUS/OCT 확인)",
      "흐름: IVL → NC balloon → DES/DCB (대부분)",
      "펄스 시 stand clear · 흉통 일시적 흔함",
      "ACT 250~300초 · pulse 횟수·위치 기록",
      "최종 IVUS로 expansion·dissection 확인",
    ],
    relatedItems: ["PCI", "DES", "IVUS", "DCB", "OCT"],
    tags: ["시술", "관상동맥", "석회화", "충격파", "IVL"],
  },
  {
    slug: "laa-closure",
    title: "LAA Closure",
    englishName: "Left Atrial Appendage Closure (LAAC)",
    koreanName: "좌심이귀 폐쇄술 (LAA Closure)",
    summary:
      "심방세동 환자의 좌심이귀(LAA)를 기구로 막아 뇌졸중 위험을 줄이는 시술 — Watchman·Amulet 등, TEE 가이드 transseptal",
    summaryEn:
      "LAA closure seals the left atrial appendage in AF to reduce stroke risk — transseptal access with TEE guidance (Watchman, Amulet, etc.).",
    definition: [
      "**LAA Closure(Left Atrial Appendage Closure, LAAC, 좌심이귀 폐쇄술)** 는 **심방세동(AF)** 환자의 **좌심이귀(LAA)** 를 **카테터로 넣는 기구**로 물리적으로 막는 시술입니다.",
      "**쉽게 말하면**: AF일 때 혈전이 잘 생기는 주머니가 **좌심이귀**입니다. 이 주머니 입구에 **플러그(폐쇄 기구)** 를 끼워 막으면, 혈전이 떨어져 나가 **뇌졸중**으로 가는 길을 줄일 수 있습니다. **장기 항응고(와파린·DOAC)가 어려운** AF 환자에게 대안이 됩니다.",
      "**대표 기구**: **Watchman / Watchman FLX Pro**(Boston Scientific), **Amulet**(Abbott), **Lambre** 등. 기관·적응에 따라 선택.",
      "**시술 요약**: **대퇴정맥** 접근 → **transseptal puncture**(중격 뚫기) → **좌심방** → **TEE + 조영**으로 LAA 크기 측정 → 기구 **deploy** → **PASS** 기준 확인 후 **release**.",
      "**하면 안 되는 경우(예)**: LAA 내 **혈전**, 너무 작거나 큰 LAA(기구 불가), 활동성 감염, 시술 불가능한 해부.",
      "한마디로, **'AF 환자 좌심이귀를 TEE 보면서 막아 뇌졸중을 예방하는 EP/structural lab 시술'** 입니다.",
    ],
    videos: [
      {
        youtubeId: "oD7_W28zjmg",
        title: "LAA Closure / Watchman Implantation",
        caption:
          "좌심이귀 폐쇄(LAA Closure) 시술 영상 — transseptal 접근·LAA 기구 배치·deploy 흐름을 영상으로 확인. 아래 단계별 설명과 함께 보면 이해가 빨라집니다.",
        sourceUrl: "https://youtu.be/oD7_W28zjmg",
      },
    ],
    videosTitle: "참고 영상",
    videosSubtitle: "LAA Closure (YouTube)",
    images: [
      {
        src: "/images/procedures/laa/laa-principle.svg",
        alt: "LAA Closure 원리 - 좌심이귀 폐쇄로 뇌졸중 예방",
        caption:
          "**원리.** AF에서 혈전이 잘 생기는 LAA를 기구로 막아 뇌졸중 위험을 줄입니다. 항응고 대안이 될 수 있습니다.",
      },
    ],
    imagesTitle: "그림으로 이해하기",
    imagesSubtitle: "LAA Closure 원리",
    stepsTitle: "시술 절차",
    stepsSubtitle: "단계별 순서 + 그림",
    measurementSteps: [
      {
        text: "**시술 전 준비** — **비판막 AF** 여부, **CHA₂DS₂-VASc** 점수, 출혈·낙상 위험(항응고 대안 필요성) 확인. **TEE**로 LAA **형태**(chicken-wing, windsock 등)·**ostium width·depth**·**혈전 유무** — 혈전 있으면 시술 연기. **항응고 중단 일정**(기관 프로토콜, 보통 시술 전 수일). **금식**, TEE **하강장 약**, 마취(전신/진정) 계획. 기구 키트(Watchman FLX Pro 등) 준비.",
        image: {
          src: "/images/procedures/laa/laa-step-prep.svg",
          alt: "LAA Closure 시술 전 준비",
          caption: "TEE 선행 · LAA 형태·혈전 확인.",
        },
      },
      {
        text: "**대퇴정맥 접근** — **대퇴정맥(femoral vein)** 에 sheath 삽입(보통 **8~14 Fr**, 기종·시스템별). IVC → 우심방 진입. **UFH** 투여 → **ACT 250~300초** 목표. 스크럽: ACT 결과 팀에 공유.",
        image: {
          src: "/images/procedures/laa/laa-step-access.svg",
          alt: "대퇴정맥 접근",
          caption: "Femoral vein · ACT 250~300s.",
        },
      },
      {
        text: "**Transseptal puncture** — **중격(transseptal)** 을 TEE·조영으로 안전하게 뚫어 **좌심방(LA)** 진입. **FO(foramen ovale)** 위치·바늘·와이어·중격 확장기 사용. 합병증: **중격 손상·대동맥 puncture** — TEE 필수. ACT 유지.",
        image: {
          src: "/images/procedures/laa/laa-step-transseptal.svg",
          alt: "Transseptal puncture",
          caption: "RA → LA · TEE·조영 가이드.",
        },
      },
      {
        text: "**LAA 조영 · TEE sizing** — LAA **조영(angio)** + **TEE**로 **landing zone** 측정: **ostium width**, **depth**, **circumference**. 기구 **크기 선택**(예: Watchman **21~35 mm**). LAA morphology에 따라 적합 기종·크기 달라짐. **pigtail** 또는 전용 catheter로 LAA deep cannulation.",
        image: {
          src: "/images/procedures/laa/laa-step-sizing.svg",
          alt: "LAA sizing",
          caption: "Ostium · depth → device size.",
        },
      },
      {
        text: "**Device 배치 · Deploy** — Access/delivery sheath를 **LAA 안**으로 진입. 기구를 **LAA 입구(ostium)** 에 맞추고 **천천히 전개(partial deploy)**. TEE로 위치·압박(compression) 실시간 확인. 필요 시 **recapture** 후 재배치.",
        image: {
          src: "/images/procedures/laa/laa-step-deploy.svg",
          alt: "LAA device deploy",
          caption: "Landing zone · partial deploy · TEE.",
        },
      },
      {
        text: "**PASS 확인 · Release** — **Watchman** 기준 **PASS**: **P**osition, **A**nchor, **S**ize, **S**eal. **Peridevice leak** <5 mm, **LAA occlusion** 충분한지 TEE. 기준 충족 시 **release(최종 고정)**. 불충족 시 retrieve·크기 변경.",
        image: {
          src: "/images/procedures/laa/laa-step-pass.svg",
          alt: "PASS criteria TEE",
          caption: "PASS · leak · occlusion %.",
        },
      },
      {
        text: "**마무리 · 회복** — 최종 **TEE·조영**(출혈·심낭삼출). Sheath 제거·hemostasis. **항혈소판** 시작(보통 **아스피린+클로피도그렐**, 기관·기종별). **추적 TEE**(약 **45일**)로 **endothelialization·폐쇄 완성** 확인. 회복실: **흉통·호흡곤란·신경학적 증상**(뇌졸중)·접근부위 출혈 모니터.",
        image: {
          src: "/images/procedures/laa/laa-step-close.svg",
          alt: "LAA Closure 마무리",
          caption: "항혈소판 · 추적 TEE · 합병증 모니터.",
        },
      },
    ],
    clinicalUse:
      "EP lab·structural heart lab에서 AF 뇌졸중 예방 클리닉과 연계되는 시술입니다. **항응고 금기·불내성** AF 환자, 또는 환자 선택에 따라 **ablation과 동시** 시행하기도 합니다. 조영실·Cath lab 간호사는 LAA Closure 환자가 **관상동맥 조영**으로 올 때 **기구 유무·현재 항혈전·최근 TEE 폐쇄 결과**를 확인해야 합니다. 시술 당일은 **TEE·transseptal·대퇴정맥** 접근이 핵심입니다.",
    nursingCare: {
      pre: [
        "AF 여부·CHA₂DS₂-VASc·항응고 복용·중단 일정",
        "선행 TEE — LAA 크기·형태·혈전 없음 확인",
        "금식·TEE 하강장 약·마취 계획",
        "대퇴정맥 접근 부위 사정",
        "ACT 목표·헤파린 준비",
        "Watchman/Amulet 키트·크기 목록 확인",
      ],
      post: [
        "접근 부위 출혈·혈종·말초혈류 반복 확인",
        "TEE 후 구강·삼킴·호흡·저산소 모니터",
        "흉통·호흡곤란 → 심낭삼출 의심 즉시 보고",
        "의식·말·사지 약함 → 뇌졸중 의심",
        "항혈소판 시작 시각·종류 기록",
        "추적 TEE(약 45일) 예약·교육",
        "기구 크기·종류·PASS 결과 차트 기록",
      ],
    },
    keyPoints: [
      "목적: AF 환자 LAA 폐쇄 → 뇌졸중 위험↓",
      "경로: 대퇴정맥 → transseptal → LA → LAA",
      "TEE + 조영 가이드 필수",
      "Watchman PASS 후 release",
      "시술 후 항혈소판 + 추적 TEE",
      "합병증: 심낭삼출, LAA 천공, 뇌졸중",
    ],
    relatedItems: [
      "S/p Watchman Device",
      "LAA",
      "Atrial Fibrillation",
      "TEE",
      "Transseptal Puncture",
      "DAPT",
    ],
    tags: ["시술", "구조적", "AF", "LAA", "Watchman", "뇌졸중예방", "EP"],
  },
  {
    slug: "watchman-device",
    title: "S/p Watchman Device",
    englishName: "Watchman Left Atrial Appendage Closure",
    koreanName: "와치맨 좌심이귀 폐쇄술",
    summary:
      "심방세동 환자의 좌심이귀를 막아 뇌졸중 위험을 줄이기 위해 넣는 폐쇄 기구 시술",
    summaryEn:
      "The Watchman device closes the left atrial appendage to reduce stroke risk in patients with atrial fibrillation.",
    definition: [
      "Watchman Device는 심방세동(AF) 환자의 '좌심이귀(LAA)'를 물리적으로 막는 폐쇄 기구입니다. AF에서 혈전이 잘 생기는 곳이 좌심이귀인데, 이 부위를 막아 뇌졸중 위험을 낮추는 목적입니다.",
      "S/p Watchman Device는 '와치맨 시술을 받은 환자'라는 뜻입니다. (Status post = ~을 시행한 이후)",
      "주로 장기 항응고(와파린 등)가 어려운 AF 환자(출혈 위험, 낙상, 약물 상호작용 등)에게 고려합니다. 시술 후 일정 기간 지나 폐쇄가 잘 되면 항응고 대신 항혈소판제로 바꾸는 경우가 많습니다.",
      "시술은 대퇴동맥/정맥 접근 후 심장 중격을 뚫고(transseptal) 좌심방으로 들어가, TEE(경식도 초음파) 보면서 기구를 좌심이귀 입구에 고정합니다.",
      "한마디로, 'AF 환자의 좌심이귀를 플러그처럼 막는 뇌졸중 예방 시술'입니다.",
    ],
    measurementSteps: [
      "시술 전: AF 여부, CHA2DS2-VASc 점수, 출혈/낙상 위험, 최근 TEE로 좌심이귀 크기·형태를 확인합니다.",
      "환자를 준비하고(마취/진정), 대퇴동맥·정맥으로 접근합니다.",
      "심장 중격을 안전하게 뚫어(transseptal puncture) 좌심방으로 카테터를 진입시킵니다.",
      "TEE와 조영으로 좌심이귀 위치·크기를 측정하고, 맞는 Watchman 크기를 선택합니다.",
      "와치맨 전달 시스템을 좌심이귀 입구에 위치시키고, 기구를 천천히 전개합니다.",
      "TEE로 기구 위치, 좌심이귀 막힘 정도, 누출(peridevice leak), 압박(compression)을 확인합니다.",
      "위치가 적절하면 기구를 최종 고정(release)합니다.",
      "시술 종료 전 TEE와 조영으로 최종 위치·누출·출혈을 다시 확인합니다.",
      "시술 후 항응고/항혈소판 계획(보통 아스피린+클로피도그렐)을 시작하고, 추적 TEE(보통 약 45일 전후) 일정을 잡습니다.",
      "S/p 환자를 조영실에서 볼 때: 기구 유무, 현재 항혈전 약물, 최근 TEE에서 폐쇄 완성 여부를 반드시 확인합니다.",
    ],
    stepsTitle: "시술 절차",
    stepsSubtitle: "단계별 순서",
    clinicalUse:
      "구조적 심장 시술실(EP/structural lab)에서 시행하며, AF 뇌졸중 예방 클리닉과 연계됩니다. 이후 관상동맥 조영이나 다른 심카테터 시술이 필요할 때 'S/p Watchman' 병력은 항혈전 계획, 출혈 위험, 중격 통과 시 주의에 직접 영향을 줍니다. 조영실 팀은 시술 전 약물 복용 상태와 최근 TEE 결과를 꼭 확인해야 합니다.",
    nursingCare: {
      pre: [
        "최근 TEE(좌심이귀 크기·혈전 여부) 결과 확인",
        "항응고/항혈소판 복용 상태 및 중단 일정 확인",
        "TEE 준비(금식, 하강장 약, 구강 상태) 확인",
        "대퇴동맥/정맥 접근 부위 사정",
        "마취/진정 계획, 알레르기, 동의서 확인",
      ],
      post: [
        "접근 부위 출혈·혈종·말초혈류 반복 확인",
        "TEE 후 구강·삼킴·호흡 상태 확인",
        "항혈소판(아스피린+클로피도그렐 등) 시작 시간 기록",
        "흉통, 호흡곤란, 뇌졸중 증상(의식·말·사지) 모니터링",
        "추적 TEE(약 45일) 예약·교육 반드시 확인",
      ],
    },
    keyPoints: [
      "목적: 좌심이귀 폐쇄로 AF 관련 뇌졸중 위험 감소",
      "S/p = 와치맨 시술 받은 환자",
      "TEE 가이드 하 시술, 크기 선택·위치 확인이 핵심",
      "시술 후 항혈소판 치료 + 추적 TEE로 폐쇄 완성 확인",
      "조영실 주의: 항혈전 종류/기간, 출혈 위험, 기구 위치 병력 확인",
    ],
    relatedItems: [
      "LAA Closure",
      "Atrial Fibrillation",
      "TEE",
      "Transseptal Puncture",
    ],
    tags: ["시술", "구조적", "AF", "뇌졸중예방"],
  },
  {
    slug: "lvad",
    title: "LVAD",
    englishName: "Left Ventricular Assist Device Implantation",
    koreanName: "좌심실 보조장치 이식술",
    summary:
      "심장이 피를 보내는 힘이 약할 때, 기계 펌프를 심장에 연결해 혈액을 몸 전체로 보내 주는 시술",
    summaryEn:
      "LVAD implantation connects a mechanical pump to the heart to help pump blood when the left ventricle is too weak.",
    definition: [
      "LVAD(Left Ventricular Assist Device, 좌심실 보조장치)는 심장의 왼쪽 심실이 피를 제대로 보내지 못할 때, 기계 펌프가 그 일을 대신·보조해 주는 장치입니다. 심장이식을 기다리는 동안(bridge to transplant) 또는 장기적으로(목적 치료, destination therapy) 쓰입니다.",
      "시술은 주로 개심 수술로 진행됩니다. 펌프 본체를 복부나 흉강에 넣고, 흡입관(inflow)을 좌심실에, 배출관(outflow)을 대동맥에 연결합니다. 전원·제어를 위한 '드라이브라인(driveline)'이 복부 밖으로 나옵니다.",
      "LVAD가 돌아가면 심장 박동과 별도로 기계가 연속적으로 피를 밀어 보냅니다. 그래서 맥이 약하거나 거의 없고, 일반 자동 혈압계로는 혈압이 잘 안 잡힙니다. MAP(평균동맥압)으로 관리합니다.",
      "대표 기종으로 HeartMate, HeartWare 등이 있으며, RPM(회전수), flow(유량), power(전력), pulsatility index(맥동 지수) 등을 모니터링합니다.",
      "한마디로, '약해진 왼심실을 기계 펌프로 보조하는 심장 수술'입니다.",
    ],
    videos: [
      {
        youtubeId: "_vma7myqIyo",
        title:
          "3D Medical Device Animation: Heartware System LVAD Pump | AXS Studio",
        caption:
          "HeartWare LVAD 펌프 구조·작동 원리 3D 애니메이션 — inflow/outflow 연결과 펌프가 피를 밀어 주는 흐름을 영상으로 확인할 수 있습니다.",
        sourceUrl: "https://youtu.be/_vma7myqIyo",
      },
    ],
    videosTitle: "참고 영상",
    videosSubtitle: "LVAD 펌프 작동 원리 (YouTube)",
    measurementSteps: [
      "시술 전: 심부전 중증도, 심장이식 대기 여부, 간·신기능, 항응고 상태, 감염 여부를 확인합니다.",
      "심초음파·우심카테터 등으로 심장 기능·폐동맥 압·혈관 저항을 평가합니다.",
      "환자·보호자 동의, 기관 LVAD 팀 계획, 기종 선택을 확인합니다.",
      "개심 수술로 LVAD 본체를 배치하고, inflow·outflow 그래프트를 연결합니다.",
      "드라이브라인을 복부를 통해 체외로 연결하고, 컨트롤러·배터리 시스템을 연결합니다.",
      "가동 후 RPM, flow, power, PI를 조절하며 혈역학을 맞춥니다.",
      "출혈·혈전·부정맥·우심부전 여부를 확인합니다.",
      "중환자실에서 항응고(보통 와파린), MAP 목표, 드라이브라인 드레싱 관리를 시작합니다.",
      "환자·보호자에게 컨트롤러·배터리 사용법, 알람 대응, 감염 예방 교육을 합니다.",
      "이후 조영실·외래에서 볼 때: LVAD 종류, 목표 MAP, 항응고, 드라이브라인 상태, 담당 LVAD 팀 연락처를 반드시 확인합니다.",
    ],
    stepsTitle: "시술 절차",
    stepsSubtitle: "단계별 순서",
    clinicalUse:
      "심장이식 전 단계(bridge) 또는 이식이 어려운 말기 심부전 환자의 대표적인 기계 순환 보조 시술입니다. 조영실·카테터실에서는 LVAD 환자가 RHC, 관상동맥 조영, EP 시술 등을 받을 수 있어, 팀이 장치 종류·MAP 측정법·항응고·드라이브라인 보호를 알아야 합니다. 자동 혈압계 대신 도플러 MAP을 쓰고, MAP·flow·RPM·증상을 함께 봅니다.",
    nursingCare: {
      pre: [
        "LVAD 적응(이식 대기 vs 목적 치료) 및 기종 확인",
        "심초음파·혈액검사·감염·간신기능 평가 결과 확인",
        "항응고 상태, 이전 출혈·혈전 병력 확인",
        "LVAD 팀·심장이식 팀 연락 체계 확인",
        "수술 후 중환자실·장비(RPM/flow 모니터) 준비",
      ],
      post: [
        "MAP(도플러) + RPM + flow + power + PI 함께 기록",
        "자동 혈압계 실패를 오류가 아닌 LVAD 특성으로 이해",
        "드라이브라인 드레싱·감염 징후(발적·분비물·통증) 매일 확인",
        "항응고(와파린 등) 목표 INR·출혈 징후 모니터링",
        "컨트롤러 알람(저유량·고전력·배터리) 즉시 대응·LVAD 팀 보고",
        "환자·보호자 장치 관리 교육 시작",
      ],
    },
    keyPoints: [
      "목적: 약한 좌심실을 기계 펌프로 보조",
      "주요 적응: 말기 심부전, 심장이식 대기, 이식 불가 환자",
      "드라이브라인 감염 예방이 장기 관리의 핵심",
      "혈압은 MAP(도플러)으로 측정 — 수축기/이완기 없을 수 있음",
      "모니터링: RPM, flow, power, PI, MAP, 증상",
      "조영실 주의: 항응고, MAP 측정법, 드라이브라인 보호, LVAD 팀 연락",
    ],
    relatedItems: [
      "왜 LVAD 환자는 MAP만 측정 가능한가?",
      "LVAD 환자 혈압 측정법",
      "Heart Failure",
      "Heart Transplant",
    ],
    tags: ["시술", "심부전", "LVAD", "기계순환보조"],
  },
  {
    slug: "evar",
    title: "EVAR",
    englishName: "Endovascular Aortic Repair",
    koreanName: "경피적 대동맥류 수술",
    summary:
      "개복 수술 없이 대퇴동맥으로 스텐트 그래프트를 넣어 복부 대동맥류를 막아 내는 시술",
    summaryEn:
      "EVAR places a stent graft through the femoral arteries to seal an abdominal aortic aneurysm from inside without open surgery.",
    definition: [
      "EVAR(Endovascular Aortic Repair, 경피적 대동맥류 수술)는 복부 대동맥류(AAA)를 개복하지 않고, 대퇴동맥 등 혈관으로 카테터·스텐트 그래프트를 넣어 동맥류를 안에서 막는 시술입니다.",
      "동맥류는 대동맥 벽이 부풀어 풍선처럼 늘어난 상태입니다. 터지면 생명을 위협하는 출혈이 나므로, 크기·성장 속도가 기준을 넘으면 치료를 고려합니다.",
      "스텐트 그래프트는 '금속 스텐트 + 인조 혈관' 형태로, 정상 대동맥 쪽에 고정되고 동맥류 부위는 그래프트 안으로 피가 흐르지 않게 차단합니다.",
      "시술 전 CT 혈관조영(CTA)으로 동맥류 크기, 목(neck) 길이, 접근 혈관, 분지 혈관 위치를 꼼꼼히 계획합니다.",
      "한마디로, '카테터로 넣은 스텐트 그래프트로 복부 대동맥류를 안에서 막는 시술'입니다.",
    ],
    measurementSteps: [
      "시술 전: CTA로 동맥류 직경·길이, proximal neck 길이·각도, 장·신동맥 분지 위치를 확인합니다.",
      "환자 동의, 신기능, 항응고, 알레르기(조영제), 동맥 접근 혈관 상태를 확인합니다.",
      "대퇴동맥(양쪽 또는 한쪽)으로 접근합니다. 필요 시 브랜치 커버드 스텐트 그래프트를 준비합니다.",
      "가이드 와이어·쉬스를 대동맥까지 진입시키고, 조영으로 위치를 확인합니다.",
      "동맥류 크기·해부학에 맞는 스텐트 그래프트 크기를 선택합니다.",
      "스텐트 그래프트를 동맥류 위 정상 대동맥(neck)에 걸치도록 배치합니다.",
      "천천히 전개(deploy)하고, 조영으로 누출(endoleak), 분지 혈관 혈류, 그래프트 위치를 확인합니다.",
      "필요 시 추가 확장(balloon molding)이나 extensions(extensions limb)를 시행합니다.",
      "접근 부위 출혈을 처리하고 회복실/병동으로 이송합니다.",
      "시술 후 정기 CTA/초음파로 endoleak, 동맥류 크기 변화, 그래프트 위치를 추적합니다.",
    ],
    stepsTitle: "시술 절차",
    stepsSubtitle: "단계별 순서",
    clinicalUse:
      "복부 대동맥류 환자에서 개복 수술(OPEN repair) 대신 선택하는 대표적인 혈관 내 시술입니다. 조영실·혈관외과·심혈관팀이 협진하며, CTA 계획과 배포 순간 조영 확인이 핵심입니다. 시술 후 endoleak(그래프트 밖으로 피가 새는 것) 여부가 중요하며, 장기적으로 정기 영상 추적이 필요합니다. Cath Lab에서 EVAR 환자를 볼 때는 스텐트 그래프트 유무, 항혈전/항응고, 최근 영상 소견을 반드시 확인합니다.",
    nursingCare: {
      pre: [
        "CTA 결과(동맥류 크기, neck, 분지) 및 그래프트 크기 계획 확인",
        "금식, 알레르기, 동의서, 항응고 상태 확인",
        "대퇴동맥 접근 부위 피부·말초혈류 사정",
        "신기능·조영제 사용량 예상 확인",
        "배포·조영 타이밍 팀 커뮤니케이션 역할 확인",
      ],
      post: [
        "접근 부위 출혈·혈종·말초혈류(발·다리) 반복 확인",
        "복부·등 통증, 혈압 저하, 빈맥 등 파열·출혈 징후 모니터링",
        "조영제 신독성(소변량, Cr) 확인",
        "항혈전/항혈소판 처방·시작 시간 기록",
        "장기 추적 CTA/외래 일정·endoleak 교육 확인",
      ],
    },
    keyPoints: [
      "목적: 경피적으로 복부 대동맥류(AAA) 차단",
      "시술 전 CTA 계획이 성공의 핵심",
      "스텐트 그래프트를 proximal neck에 정확히 고정",
      "합병증 주의: endoleak, 접근부위 출혈, 분지 혈관 막힘",
      "시술 후 정기 영상 추적 필수",
      "흉부 대동맥은 TEVAR — 복부는 EVAR",
    ],
    relatedItems: ["AAA", "CTA", "Endoleak", "TEVAR"],
    tags: ["시술", "대동맥", "동맥류", "혈관내"],
  },
  {
    slug: "cabg",
    title: "CABG",
    englishName: "Coronary Artery Bypass Grafting",
    koreanName: "관상동맥우회술",
    summary:
      "막힌 관상동맥을 우회하기 위해 LITA·SVG·요골동맥 등 이식 혈관을 연결하는 개심 수술 — Cath lab에서 native·graft 조영 이해의 기초",
    summaryEn:
      "CABG is open-heart surgery that bypasses obstructed coronary arteries using conduits such as LITA, SVG, and radial artery — foundational for post-op angiography in the cath lab.",
    definition: [
      "**CABG(Coronary Artery Bypass Grafting, 관상동맥우회술)** 는 **막히거나 심하게 좁은 관상동맥(native coronary)** 을 우회하기 위해 **다른 혈관(conduit, graft)** 을 가져와 연결하는 **개심 수술**입니다.",
      "핵심 개념은 **'협착 부위를 건너뛰어(distal to stenosis) 심근에 혈류를 다시 공급'** 하는 것입니다. 이식 혈관의 **원위(distal) 끝** 은 관상동맥 협착 **너머** 에 문합(anastomosis)하고, **정맥 이식(SVG)** 은 **근위(proximal) 끝** 을 대동맥에 연결합니다. **LITA** 는 쇄골하동맥에 그대로 붙어 있어(in-situ) 보통 대동맥 proximal 연결이 없습니다.",
      "대표 이식 혈관: **LITA(LIMA) → LAD** (가장 중요·장기 개통률 최고), **SVG(대복정맥)** → RCA·OM·PDA 등, **요골동맥** → OM·diagonal 등. 자세한 해부는 **'CABG 이식 혈관'** 항목 참고.",
      "적응증(대표): **좌주형지(LM) 병변**, **LAD proximal 병변**, **다발성 관상동맥질환**, **PCI 실패·불가**, **당뇨+다발혈관**, 일부 **응급·STEMI** (기관·환자별). PCI와 비교해 **다발병변·당뇨** 에서 수술 이점이 있는 경우가 많습니다.",
      "수술은 보통 **중간 흉골 절개(median sternotomy)** + **인공심폐(cardiopulmonary bypass, CPB)** 하에 시행합니다. 이식 혈관 채취 → distal anastomosis → SVG proximal aortic punch 순으로 진행합니다.",
      "Cath lab 관점에서 CABG 후 환자는 **재협심증·흉통·심근경색·PCI 필요** 시 **LHC(좌심카테터검사, 관상동맥조영)** 를 받습니다. 이때 **native coronary** 와 **graft(LIMA-LAD, SVG-RCA 등)** 를 **모두** 조영해야 어느 경로가 막혔는지 알 수 있습니다.",
      "한마디로, **'이식 혈관으로 심장 혈관을 다시 연결하는 수술'** 이고, 조영실에서는 **수술 기록(op note)의 graft 종류·연결 부위** 를 반드시 확인한 뒤 조영합니다.",
    ],
    images: [
      {
        src: "/images/procedures/cabg-surgery-overview.svg",
        alt: "CABG 수술 개요 - LITA-LAD, SVG 연결 및 수술 단계",
        caption:
          "CABG 수술 개요. LITA(in-situ)→LAD 문합, SVG(leg)→aorta proximal + coronary distal. CPB 하 개심 수술. Cath lab에서는 op note 기반 native+graft 조영이 필수.",
      },
      {
        src: "/images/anatomy/cabg-graft-overview.svg",
        alt: "CABG 이식 혈관 연결 도해",
        caption:
          "이식 혈관별 연결 관계. 해부학 상세는 '심혈관 해부생리학 → CABG 이식 혈관' 항목 참고.",
      },
    ],
    imagesTitle: "수술 도해",
    imagesSubtitle: "이식 혈관 연결 · Cath lab 연결",
    measurementSteps: [
      "【시술 전】 관상동맥조영·심초음파·증상·PCI 가능성 평가 · 다발병변·LM·LAD·당뇨·LV function 확인 · 외과·심장팀 협진",
      "【1단계 — 접근·CPB】 전신 마취 · median sternotomy · 인공심폐 연결(심장 일시 정지 또는 beating-heart 기법) · heparin",
      "【2단계 — 이식 혈관 채취】 LITA(RITA) dissection along sternum · SVG harvest(leg, EVH or open) · radial harvest(forearm, Allen test) if planned",
      "【3단계 — Distal anastomosis】 협착 **너머** 관상동맥에 이식혈관 distal 끝 문합 · target: LAD, OM, RCA, PDA 등 · distal anastomosis가 장기 patency의 핵심",
      "【4단계 — Proximal anastomosis】 SVG proximal → ascending aorta (aortic punch/side-clamp) · LITA는 보통 subclavian origin 유지(in-situ)",
      "【5단계 — 종료】 heparin reversal · decannulate CPB · 심장 박동·출혈 확인 · 흉관 · 중환자실",
      "【Cath lab — 이후 LHC 시 확인】 Op note: LITA→LAD? SVG 몇 개? Radial graft? Target vessel? · Native vs graft 협착 구분 · LIMA-LAD patency 최우선 평가",
      "【Graft angiography 보고 예】 'LIMA-LAD patent' / 'SVG-OM occluded' / 'native RCA 90% stenosis' / 'jump graft to OM and PDA'",
      "【재협착·재시술】 Graft failure → PCI on graft or native · SVG occlusion 흔함(만성) · LIMA-LAD occlusion 드묾 but 치명적",
    ],
    stepsTitle: "수술 절차",
    stepsSubtitle: "단계별 순서 · Cath lab 연결",
    clinicalUse:
      "다발성 관상동맥질환의 대표적인 혈역학적 재관류 수술입니다. Cath lab·조영실 팀은 CABG 환자가 내원할 때 '단순 PCI 환자'가 아니라 **graft anatomy** 를 함께 봐야 합니다. 수술 후 흉통·재협심증·응급 조영 시 op note 없이 시행하면 graft를 놓치거나 잘못된 혈관을 PCI할 수 있습니다. LITA-LAD는 환자 장기 예후에 가장 중요한 graft이므로, LHC에서 **반드시** 조영·기록합니다.",
    nursingCare: {
      pre: [
        "수술 동의서, 마취 평가, 금식, 항혈소판/항응고 중단 일정(의사 처방) 확인",
        "관상동맥조영·심초음파·신기능·당화혈색소 등 pre-op 검사 확인",
        "채취 예정 이식혈관(다리·전완) 피부 상태, Allen test(요골동맥 시) 기록",
        "수혈 준비, 중환자실 bed, 가족 연락처 확인",
        "Cath lab 연계: 수술 후 graft 정보 op note에 기록될 항목 인지",
      ],
      post: [
        "중환자실: 심박출, 혈압, 심전도, 출혈, 흉관 배액 모니터링",
        "LITA·SVG·요골 채취 부위 출혈·감염·말초혈류 확인",
        "심방세동·서맥 등 부정맥, 저심박출 증후군 징후 보고",
        "흉통(재협심증 vs 수술 통증) 구분, ECG·troponin 변화 기록",
        "퇴원 전 graft 종류·target vessel 교육, 재내원 시 op note 지참 안내",
      ],
    },
    keyPoints: [
      "목적: 협착 너머 심근으로 혈류 우회",
      "LITA→LAD가 가장 중요한 graft",
      "SVG는 versatile하나 장기 개통률 낮음",
      "Cath lab: native + graft 모두 조영",
      "Op note에서 conduit·target 확인 필수",
      "Distal anastomosis가 협착·폐쇄의 흔한 부위",
    ],
    relatedItems: [
      "CABG 이식 혈관",
      "CABG LHC — 우요골 접근이 어려운 이유",
      "관상동맥 구조",
      "PCI",
      "LAD",
      "SVG",
    ],
    tags: ["시술", "CABG", "관상동맥", "수술", "조영실"],
  },
  {
    slug: "cabg-lhc-radial-access",
    title: "CABG LHC — 우요골 접근이 어려운 이유",
    englishName: "CABG LHC — Right Radial Access Difficulty",
    koreanName: "CABG 환자 좌심카테터검사 시 우요골 접근",
    summary:
      "CABG 후 LHC(관상동맥·이식혈관 조영) 시 우요골 접근이 어려운 해부·기술적 이유와 대안 접근(좌요골·대퇴) 정리",
    summaryEn:
      "Why right radial access is often difficult for LHC in post-CABG patients — harvested radial graft, LIMA angiography, Allen test — and alternative routes.",
    definition: [
      "**LHC(Left Heart Catheterization, 좌심카테터검사)** 는 **좌심실·관상동맥·이식혈관(graft)** 을 조영하는 검사입니다. CABG 환자에서는 **native coronary** 뿐 아니라 **LIMA-LAD, SVG-RCA** 등 **모든 graft** 를 평가해야 재협심증·PCI 계획이 가능합니다.",
      "많은 Cath lab에서 **우요골동맥(right radial artery) 접근** 이 1차 선택이지만, **CABG 환자** 에서는 우요골이 **불가능하거나 매우 어려운** 경우가 흔합니다. 이유를 미리 알면 puncture 실패·시간 낭비·환자 불편을 줄일 수 있습니다.",
      "**가장 흔한 이유 — 요골동맥이 CABG 이식혈관으로 채취됨.** 수술 때 **전완 요골동맥(radial artery graft)** 을 가져갔다면, 그 팔의 요골동맥은 **없거나 폐쇄·흉터** 상태입니다. 우요골을 채취했으면 **우요골 puncture 불가** → **좌요골 또는 대퇴** 로 전환해야 합니다.",
      "**반대편 요골도 채취된 경우** (양측 요골동맥 graft, 드묾) → **양측 요골 접근 모두 불가** → **대퇴동맥(femoral)** 이 사실상 유일한 선택입니다.",
      "**Allen test 양성** — 요골을 채취하지 않았어도, 한쪽 요골 puncture 후 반대 손의 **척수동맥·요골동맥 협력 circulation** 이 불충분하면(Allen test +) 그 손 요골 접근을 피합니다. CABG 환자는 **한쪽 요골이 이미 없어** 반대 손만 남은 경우 Allen test가 더욱 중요합니다.",
      "**LIMA(LITA) selective angiography의 기술적 난이도** — LIMA는 **좌쇄골하동맥(left subclavian)** 에서 기원합니다. **우요골** 에서 카테터가 올라가면 **대동맥→좌쇄골하 분지→LIMA** 로 들어가야 하는데, **LIMA 선택조영(selective injection)** 이 **좌요골·대퇴** 보다 어렵거나 시도·조영제·시간이 더 드는 경우가 많습니다. LIMA-LAD patency 확인이 CABG LHC의 **핵심** 이므로 접근로 선택에 영향을 줍니다.",
      "**기타:** 이전 카테터 시 요골 **폐쇄·스파즘** · 수술 후 **전완 흉터·부종** · **박동 없는 LIMA** 조영 시 특수 카테터·각도 필요 · **SVG proximal(aortic) anastomosis** 조영은 접근로별로 catheter shape가 달라질 수 있음.",
      "한마디로, CABG LHC 전 **'어느 팔에서 요골을 썼는지(op note)'**, **'LIMA 조영 계획'**, **'Allen test'** 를 확인하고, 우요골이 안 되면 **주저하지 말 좌요골·대퇴로** 가는 것이 맞습니다.",
    ],
    images: [
      {
        src: "/images/procedures/cabg-lhc-radial-access.svg",
        alt: "CABG LHC 우요골 접근 어려운 이유 - 요골동맥 채취, LIMA 조영, 대안 접근",
        caption:
          "CABG LHC에서 우요골 접근이 어려운 3가지 핵심. ①요골동맥 graft 채취로 puncture 불가 ②LIMA selective 조영이 우요골에서 기술적으로 어려움 ③대안=좌요골·대퇴·brachial.",
      },
    ],
    imagesTitle: "접근 도해",
    imagesSubtitle: "우요골 제한 · 대안 경로",
    measurementSteps: [
      "【LHC 전 필수 확인】 수술 op note: LITA→LAD? SVG targets? **Radial graft 사용 여부·어느 팔** · 최근 흉통·ECG·troponin",
      "【우요골이 어려운 이유 #1】 **Radial artery graft harvest** — 채취된 팔 요골동맥 소실/폐쇄 → puncture 실패 · 해부학적으로 가장 흔한 원인",
      "【#2】 **Allen test (+)** — 반대 손 요골 puncture 시 손 ischemia 위험 · 한쪽 요골 이미 없으면 남은 한 손만으로 판단",
      "【#3】 **LIMA selective angiography** — LIMA=좌 subclavian origin · 우요골 경로에서 LIMA catheter engagement 어려움 · LIMA-LAD는 반드시 확인해야 할 graft",
      "【#4】 이전 cath **radial occlusion/spasm** · 수술 후 forearm scar · bilateral arm IV/trauma",
      "【대안 접근 — 좌요골(left radial)】 우요골(또는 해당 팔) 채취 시 1차 대안 · Allen test(-) 확인 · 일부 연구자는 LIMA 조영에 유리하다고 함",
      "【대안 — 대퇴동맥(femoral)】 양측 요골 불가 시 표준 · LIMA·SVG·native 전체 조영에 안정적 · closure device·bed rest 시간 고려",
      "【대안 — brachial/ulnar】 요골 폐쇄·spasm 시 rescue · ulnar 접근은 경험·기관 정책 따름",
      "【조영 순서(일반적)】 Native coronary → SVG grafts → **LIMA-LAD (가장 중요)** → 필요 시 LV gram · graft occlusion vs native progression 구분",
      "【간호 체크】 Puncture 전 op note·채취 팔 확인 · Allen test 기록 · 접근 실패 시 대안 sheath 준비 · LIMA run 시 조영제·흉통 모니터",
    ],
    stepsTitle: "접근 결정",
    stepsSubtitle: "우요골 제한 이유 · 대안",
    clinicalUse:
      "CABG 후 재협심증·NSTEMI·graft failure 의심 환자의 LHC는 Cath lab 일상 업무입니다. 우요골을 습관적으로 시도했다가 요골동맥 graft 채취 팔을 puncture하면 실패·혈종·지연만 생깁니다. **수술 기록에서 radial graft arm** 을 먼저 확인하고, LIMA 조영이 필요한 경우 **접근로를 미리 계획**합니다. Femoral은 '구식'이 아니라 CABG full graft study에서는 여전히 **가장 확실한 경로** 중 하나입니다.",
    nursingCare: {
      pre: [
        "CABG op note·discharge summary — graft 종류·채취 팔 확인",
        "우요골 puncture 전 **어느 전완에서 radial harvest 했는지** 반드시 질문",
        "양손 Allen test 수행·기록",
        "대안 접근(좌요골·대퇴) sheath·closure device 준비",
        "LIMA 조영 예정 시 조영제 알레르기·신기능 확인",
      ],
      post: [
        "접근 부위 출혈·혈종·말초혈류(손·발) 반복 확인",
        "조영 중·후 흉통·ST 변화·부정맥 모니터링",
        "LIMA run 후 특이 소견 의사·기록에 즉시 반영",
        "조영제 신독성(소변량, Cr) 확인",
        "접근 부위 실패 시 대안 부위 압박·기록 정확히",
      ],
    },
    keyPoints: [
      "CABG LHC = native + 모든 graft 조영",
      "우요골 불가 1위: 요골동맥 graft 채취",
      "LIMA-LAD 조영이 핵심 — 우요골에서 어려울 수 있음",
      "대안: 좌요골 → 대퇴 → brachial/ulnar",
      "Op note·Allen test를 puncture 전에 확인",
      "접근 실패 시 주저 말고 대안 전환",
    ],
    relatedItems: [
      "CABG",
      "CABG 이식 혈관",
      "관상동맥 구조",
      "PCI",
      "LAD",
    ],
    tags: ["시술", "CABG", "LHC", "조영실", "요골", "접근"],
  },
  {
    slug: "coronary-sinus-reducer",
    title: "Coronary Sinus Reducer",
    englishName: "Coronary Sinus Reducer Implantation",
    koreanName: "관상정맥류 Reducer 삽입술",
    summary:
      "PCI·CABG를 더 못 하는 난치성 협심증 환자에게, 심장 뒤쪽 정맥(관상정맥류)을 살짝 좁혀 허혈 심근으로 혈을 돌려주는 시술",
    summaryEn:
      "For refractory angina when PCI/CABG is no longer an option: a hourglass mesh device narrows the coronary sinus to redirect blood flow toward ischemic myocardium.",
    definition: [
      "**Coronary Sinus Reducer(관상정맥류 Reducer)** 는 **PCI나 CABG로 혈관을 넓히는 시술이 아닙니다.** 대신 심장 **뒤쪽에 있는 큰 정맥 — 관상정맥류(coronary sinus, CS)** 안에 **모래시계 모양 스텐트**를 넣어, 그 정맥을 **살짝 좁혀** 혈이 덜 빠져나가게 합니다.",
      "**쉽게 말한 원리**: 심장이 허혈(혈이 부족)하면 **겉(심외막)보다 속(심내막)이 먼저 굶주립니다.** Reducer로 CS 정맥압을 올리면, **덜 허혈한 쪽에서 더 허혈한 심내막 쪽으로 혈이 다시 분배**됩니다. 비유하면 **'배수구를 살짝 막아 물이 가장 마른 곳으로 흐르게 하는 것'** 과 비슷합니다.",
      "**누가 받나**: **난치성 협심증** — 협심증 약을 최대로 써도(CCS II~IV) 흉통이 남고, **PCI·CABG를 더 할 수 없다**고 heart team이 판단한 환자. 부하검사·CMR 등으로 **허혈이 객관적으로 확인**된 경우가 좋습니다.",
      "**왜 필요한가**: PCI·CABG를 여러 번 했거나, 혈관이 너무 곳곳 막혀 **더 이상 뚫을 곳이 없는** 환자가 늘고 있습니다. 이들에게 Reducer는 **남은 혈류를 허혈 심근 쪽으로 돌려주는** 대안입니다.",
      "**하면 안 되는 경우**: ① 우심방압이 이미 높음(RA mean **≥15 mmHg**) ② **양심실 pacing lead가 CS 안에** 있는 경우 ③ **심한 심부전**(LVEF <30~35%) ④ **최근 3개월 내 PCI/CABG** ⑤ **RCA만 허혈** ⑥ **허혈 증거 없는 흉통**",
      "한마디로, **'더 이상 PCI/CABG 못 하는 난치성 협심증 환자의 관상정맥류를 좁혀, 허혈 심근에 혈을 돌려주는 시술'** 입니다. 효과는 **1~3개월 후** 서서히 나타나는 경우가 많습니다.",
    ],
    videos: [
      {
        youtubeId: "8z2Au8JCXlc",
        title: "Neovasc Reducer Animation — Synapse Medical Animation",
        caption:
          "Coronary Sinus Reducer 시술 애니메이션 — CS 내 hourglass device 배치·혈류 재분배 원리. 우측 IJ 접근·deploy 흐름 이해용.",
        sourceUrl: "https://youtu.be/8z2Au8JCXlc",
      },
    ],
    videosTitle: "참고 영상",
    videosSubtitle: "Coronary Sinus Reducer (YouTube)",
    images: [
      {
        src: "/images/procedures/csr/csr-principle.svg",
        alt: "Coronary Sinus Reducer 원리 - CS 좁혀서 허혈 심내막으로 혈류 재분배",
        caption:
          "**원리 한눈에.** PCI/CABG는 막힌 동맥을 뚫는 시술이고, Reducer는 **정맥을 좁혀** 허혈 심내막으로 혈을 돌려줍니다. 효과는 보통 1~3개월 후 나타납니다.",
      },
      {
        src: "/images/procedures/csr/csr-device.svg",
        alt: "Reducer 장치 - 모래시계 모양 스테인리스 스틸 메쉬",
        caption:
          "**장치 모양.** 스테인리스 스틸 메쉬, 가운데(목) 약 3mm로 좁아지는 **모래시계** 형태. 풍선으로 펼쳐 CS에 고정하고, 1~3개월 뒤 조직이 덮이면서 좁아진 상태가 유지됩니다.",
      },
      {
        src: "/images/procedures/csr/coronary-sinus-anatomy.png",
        alt: "관상정맥류(Coronary Sinus) 해부 위치",
        caption:
          "**관상정맥류 위치.** 심장 뒤쪽, 좌심실과 좌심방 사이에 있는 큰 정맥. 심근의 혈이 모여 대정맥으로 들어갑니다. 출처: Wikimedia Commons, xranatomy.com, CC BY-SA 4.0.",
      },
    ],
    imagesTitle: "그림으로 이해하기",
    imagesSubtitle: "원리 · 장치 · 해부",
    measurementSteps: [
      {
        text: "**시술 전 준비** — heart team이 환자를 선별했는지 확인합니다. 협심증 약 최대인데도 흉통이 남는지(CCS class), 허혈 검사 결과, **DAPT**(아스피린 72시간 전부터 + P2Y12) 복용 여부를 봅니다. 국소마취만으로 가능하고, **우측 경정맥** 접근을 계획합니다.",
        image: {
          src: "/images/procedures/csr/csr-step-prep.svg",
          alt: "시술 전 준비 - 환자 선별과 금기",
          caption: "선별 체크와 하면 안 되는 경우.",
        },
      },
      {
        text: "**우측 경정맥 접근** — 초음파 보면서 **우측 목 정맥(IJ)** 에 바늘을 넣고 **9 Fr sheath** 를 삽입합니다. sheath 넣은 뒤 **UFH 100 U/kg** 을 투여합니다. PCI처럼 대퇴동맥이 아니라 **목에서 들어가는** 시술입니다.",
        image: {
          src: "/images/procedures/csr/csr-step-access.svg",
          alt: "우측 경정맥 접근 - 9Fr sheath",
          caption: "목(우측 IJ) → 심장으로 들어갑니다.",
        },
      },
      {
        text: "**우심방압(RA) 측정** — catheter로 우심방에 들어가 **평균압** 을 잽니다. **15 mmHg 이상** 이면 시술을 **중단**합니다(이미 정맥압이 높아서 CS를 좁혀도 이득이 적음). **15 미만** 이면 다음 단계로 갑니다.",
        image: {
          src: "/images/procedures/csr/csr-step-ra-pressure.svg",
          alt: "우심방압 측정 - 15mmHg 이상이면 중단",
          caption: "RA mean ≥15 → 시술 중단.",
        },
      },
      {
        text: "**관상정맥류(CS) 진입** — **LAO 30°** 로 조영하면서 catheter로 **CS 입구(ostium)** 를 찾습니다. **0.035\" wire** 를 CS 안쪽(원위, great cardiac vein 방향)으로 보냅니다. 입구가 어려우면 Amplatz Left 등 다른 catheter로 바꿉니다.",
        image: {
          src: "/images/procedures/csr/csr-step-cs-entry.svg",
          alt: "관상정맥류 진입 - CS ostium",
          caption: "CS 입구를 찾아 wire를 안쪽으로.",
        },
      },
      {
        text: "**CS 조영(venography)** — CS 안을 조영해서 **Reducer를 넣을 위치** 를 정합니다. **입구에서 1.5~3 cm 원위**, **가지혈관(side branch) 피하기**, 뼈 landmark로 위치를 확인합니다.",
        image: {
          src: "/images/procedures/csr/csr-step-venography.svg",
          alt: "CS venography - landing zone 선정",
          caption: "입구에서 1.5~3 cm 원위가 이상적.",
        },
      },
      {
        text: "**9 Fr guide 교환 + Reducer 전달** — **9 Fr straight guide** 로 바꾸고, Reducer가 달린 **풍선 catheter** 를 wire 위로 CS 원위까지 보냅니다. guide 끝에서 device가 **몇 mm 돌출**된 상태로 같이 전진합니다(혈관 손상 방지). 어려운 해부학에서는 **mother-and-child** 기법(5 Fr MP inside 9 Fr)을 씁니다.",
        image: {
          src: "/images/procedures/csr/csr-step-guide.svg",
          alt: "9Fr guide와 Reducer 전달",
          caption: "guide 안에서 Reducer+풍선을 원위까지 전달.",
        },
      },
      {
        text: "**Reducer 배포(펼치기)** — 풍선을 **4~6 atm** 으로 **최소 60초** 팽창시킵니다. CS 직경보다 **10~20% 크게(oversizing)** 펼쳐서 이탈을 막습니다. radiopaque marker와 뼈 landmark로 위치를 다시 확인합니다. 이 단계에서 **일시적 부정맥** 이 나올 수 있습니다.",
        image: {
          src: "/images/procedures/csr/csr-step-deployment.svg",
          alt: "Reducer 배포 - 풍선 4~6atm 60초",
          caption: "풍선으로 모래시계 스텐트를 펼칩니다.",
        },
      },
      {
        text: "**풍선만 빼기** — Reducer는 CS에 **남기고** 풍선만 천천히 후퇴합니다. **2인이 협력**하는 것이 좋습니다: guide tip을 scaffold의 **좁은 목(neck)** 에 밀착 지지한 채 풍선을 빼면 device가 같이 빠지는 것을 방지합니다.",
        image: {
          src: "/images/procedures/csr/csr-step-retrieval.svg",
          alt: "풍선 후퇴 - Reducer는 남김",
          caption: "Reducer는 그대로, 풍선만 천천히 후퇴.",
        },
      },
      {
        text: "**최종 확인 & 마무리** — 다시 CS를 조영해서 Reducer 위치, **천공(perforation)·이탈(migration)** 이 없는지 봅니다. 문제 없으면 sheath를 빼고 압박합니다. **DAPT 최소 1개월** 유지하고, 증상 개선은 **1~3개월** 걸릴 수 있다고 환자에게 안내합니다.",
        image: {
          src: "/images/procedures/csr/csr-step-final.svg",
          alt: "최종 venography와 마무리",
          caption: "위치 확인 → DAPT 1개월 → 효과는 서서히.",
        },
      },
    ],
    stepsTitle: "시술 절차",
    stepsSubtitle: "단계별 순서 + 그림",
    clinicalUse:
      "구조적/관상 조영실에서 **난치성 협심증 클리닉** 과 연계해 시행합니다. PCI·CABG와 달리 **관상동맥을 넓히지 않으므로**, 팀원 모두가 '혈관성형술이 아니라 **정맥계 시술**'임을 알아야 합니다. COSIRA trial 등에서 증상(CCS)·삶의 질 개선이 보고되었습니다. **환자 선별**(RA압, 허혈 범위, 최근 revascularization)이 성공의 핵심입니다.",
    nursingCare: {
      pre: [
        "heart team 선별·동의서·CCS class·허혈 검사 결과 확인",
        "DAPT(아스피린 72h+ + P2Y12) 복용 상태 확인",
        "RA pressure·LVEF·최근 PCI/CABG(3개월) 여부 확인",
        "Biventricular pacing lead(CS 내) 유무 — 금기",
        "우측 경정맥 접근 — 초음파 유도 준비, 국소마취",
        "UFH·Reducer kit·9 Fr guide·응급(perforation) 준비",
      ],
      post: [
        "경정맥 접근 부위 출혈·혈종·목 부종·호흡곤란 모니터",
        "시술 중 저혈압·흉통·부정맥 발생 시 즉시 보고",
        "CS perforation 의심 시: protamine·balloon tamponade·심낭천자 준비",
        "DAPT **최소 1개월** — 처방·복용 교육",
        "증상 개선은 1~3개월에 걸릴 수 있음 — 기대치 교육",
        "퇴원 시 wallet card(장치·제조사·24h 연락처) 확인",
      ],
    },
    keyPoints: [
      "PCI/CABG가 아님 — CS 정맥을 좁혀 혈을 재분배",
      "적응: 난치성 협심증 + 더 이상 revascularization 불가",
      "원리: CS narrowing → 심내막으로 혈류 돌림",
      "접근: 우측 경정맥 9 Fr (목에서 들어감)",
      "금기: RA mean ≥15, CS pacing lead, 심부전, 최근 3개월 PCI/CABG",
      "배포: 4~6 atm, 60초, 10~20% oversizing",
      "효과: 1~3개월 후 서서히 (바로 안 나와도 실패 아님)",
      "시술 후 DAPT 최소 1개월",
    ],
    relatedItems: [
      "PCI",
      "CABG",
      "Refractory Angina",
      "CCS Class",
      "DAPT",
      "Antiplatelet Agents",
    ],
    tags: ["시술", "관상동맥", "난치성협심증", "관상정맥류", "Reducer", "구조적"],
  },
  {
    slug: "renal-denervation",
    title: "Renal Denervation",
    englishName: "Renal Denervation (RDN)",
    koreanName: "신장 신경 절제술 (Renal Denervation)",
    summary:
      "난치성 고혈압 환자의 신장동맥 주변 교감신경을 RF·초음파로 절단(ablate)해 혈압을 낮추는 카테터 시술 — Symplicity Spyral·Paradise 등",
    summaryEn:
      "Renal denervation ablates renal sympathetic nerves via the renal arteries to lower blood pressure in resistant hypertension — Symplicity Spyral (RF), Paradise (ultrasound), and similar systems.",
    definition: [
      "**Renal Denervation(RDN, 신장 신경 절제술)** 은 **신장동맥 벽 주변의 교감신경(renal sympathetic nerves)** 을 카테터로 **에너지(RF 또는 초음파)** 를 보내 **절단(ablate)** 하여 **혈압을 낮추는** 시술입니다.",
      "**쉽게 말하면**: 신장 쪽 교감신경이 **과활성**이면 혈관이 조이고 혈압이 오릅니다. RDN은 **'과열된 보일러 밸브를 조금 내려 압력을 줄이는 것'** 과 비슷합니다. **약물만으로 혈압이 안 잡히는** 환자에게 대안이 됩니다.",
      "**누가 받나**: **난치성(resistant) 고혈압** — 생활습관·**3종 이상** 항고혈압제를 써도 목표 혈압 미달, 또는 약물 부작용으로 치료가 어려운 환자. **CT/MRA** 로 신장동맥 해부가 적합한지 미리 확인합니다.",
      "**대표 장치**: **Medtronic Symplicity Spyral**(RF, 4-electrode helix) · **Recor Paradise**(초음파, cooling) · 기관·국가별 승인·도입 상태는 다릅니다. 여기서는 **가장 흔한 RF(Spyral) 흐름**을 중심으로 정리합니다.",
      "**원리**: 신장동맥 **지방조직( adventitia )** 안에 지나는 교감신경을 **선택적으로 가열** → **effrent·afferent** 신경 신호↓ → **전신 혈압↓**. 효과는 **즉시가 아니라 수주~수개월**에 걸쳐 나타나는 경우가 많습니다.",
      "**하면 안 되거나 주의**: **중증 신장동맥 협착(RAS)**, **FMD**, **신장동맥류**, **이전 renal stent**, **단일 신장**, **eGFR <40** 등 — CT/MRA·팀 선별로 제외. ablation 중 **옆구리 열감(flank heat)** → **진정(midazolam/fentanyl)** 필요.",
      "한마디로, **'대퇴에서 들어가 양쪽 신장동맥 신경을 ablate해 혈압을 낮추는 시술'** 입니다.",
    ],
    videos: [
      {
        youtubeId: "YPyTPdJP3OM",
        title: "Radiofrequency Renal Denervation Procedure — Medtronic",
        caption:
          "Symplicity Spyral RF renal denervation 시술 소개 — helix catheter·G3 generator·4-quadrant ablation. 아래 단계별 설명과 함께 보면 이해가 빨라집니다.",
        sourceUrl: "https://youtu.be/YPyTPdJP3OM",
      },
      {
        youtubeId: "qToVkMGiEjk",
        title:
          "Symplicity Spyral RDN in Practice — EuroPCR",
        caption:
          "실제 cath lab에서의 aortogram·guide·ablation·impedance 모니터링 실무 팁.",
        sourceUrl: "https://youtu.be/qToVkMGiEjk",
      },
    ],
    videosTitle: "참고 영상",
    videosSubtitle: "Renal Denervation (YouTube)",
    images: [
      {
        src: "/images/procedures/rdn/rdn-principle.svg",
        alt: "Renal Denervation 원리 - 신장동맥 교감신경 ablation으로 혈압 감소",
        caption:
          "**원리 한눈에.** 교감신경 과활성 → BP↑ → renal artery에서 RF/초음파 ablation → 신경 신호↓ → BP↓ (점진적).",
      },
      {
        src: "/images/procedures/rdn/renal-artery-anatomy.png",
        alt: "신장·신장동맥 해부 - Gray anatomy",
        caption:
          "**신장동맥 해부.** Aorta에서 분지하는 renal artery가 kidney hilum으로 들어감. RDN은 이 artery wall 주변 신경을 치료. 출처: Wikimedia Commons, Henry Vandyke Carter (Gray's Anatomy), Public Domain.",
      },
    ],
    imagesTitle: "그림으로 이해하기",
    imagesSubtitle: "원리 · 해부",
    stepsTitle: "시술 절차",
    stepsSubtitle: "단계별 순서 + 그림 (Symplicity Spyral RF 기준)",
    measurementSteps: [
      {
        text: "**시술 전 준비** — **resistant HTN** 선별: 3종+ 항고혈압제에도 office/24h BP 목표 미달. **CT/MRA** 로 bilateral renal artery **Ø3~8 mm** (치료 가능), **accessory renal artery** 유무, **RAS·FMD·aneurysm** 배제. 스크럽: **Symplicity Spyral catheter**, **G3 RF generator**, **grounding pad(dispersive electrode)**, **6 Fr guide 45~90 cm**(IMA/LIMA·RDC/RDND1 shape), **0.014\" workhorse wire**(non-hydrophilic, supportive). **항고혈압제는 보통 유지**(시술 후 조정).",
        image: {
          src: "/images/procedures/rdn/rdn-step-prep.svg",
          alt: "RDN 시술 전 준비",
          caption: "Resistant HTN · CT/MRA · Spyral kit · 금기 확인.",
        },
      },
      {
        text: "**대퇴동맥 접근** — **초음파 유도** common femoral puncture 권장. **6~8 Fr sheath** 삽입 → aorta. **UFH** 투여 → **ACT >250초**(기관·프로토콜별, SPYRAL trial 기준). 스크럽이 ACT 결과를 팀에 말합니다. **니트로글리세린(NTG)** intra-arterial — renal spasm 예방(의사 처방).",
        image: {
          src: "/images/procedures/rdn/rdn-step-access.svg",
          alt: "대퇴동맥 접근",
          caption: "Femoral · 6~8 Fr · ACT >250s.",
        },
      },
      {
        text: "**대동맥 조영(Aortogram)** — **Pigtail** catheter를 **L1-L2 junction** 에 두고 aortogram. **양쪽 renal artery** + **accessory branch** 개수·각도·직경(Ø3~8 mm) 확인. pre-imaging 없을 때 필수. contrast **50/50 dilution**, rate/time은 기관·촬영기 설정 따름.",
        image: {
          src: "/images/procedures/rdn/rdn-step-aortogram.svg",
          alt: "Aortogram으로 신장동맥 평가",
          caption: "L1-L2 · accessory renal · Ø3~8mm.",
        },
      },
      {
        text: "**선택적 신장동맥 조영** — **6 Fr guide catheter**(보통 **55 cm**, coronary용보다 짧음 — RDN catheter shaft 길이 때문)로 **한쪽 renal artery** 에 engagement. **Selective renal angiography** 로 **dissection·significant stenosis·aneurysm** 재확인. 좌측 down-sloping takeoff는 **RDC/RDND1** shape가 유리할 수 있음. **NTG** spasm 예방.",
        image: {
          src: "/images/procedures/rdn/rdn-step-selective-angio.svg",
          alt: "선택적 신장동맥 조영",
          caption: "6F guide · selective angio · spasm 예방.",
        },
      },
      {
        text: "**Spyral 카테터 배치** — **0.014\" wire** 를 **distal branch** 까지 advance (hydrophilic wire 피함). **Symplicity Spyral catheter**(6 Fr compatible, rapid exchange)를 wire 위로 넣고, **wire를 retract** 하면 **helix(4 electrode)** 가 artery wall에 **자연스럽게 conform** (혈류 complete occlusion 아님). **치료 순서**: **distal branch → proximal main** (신경 density distal↑). **Ø3~8 mm** artery만 치료.",
        image: {
          src: "/images/procedures/rdn/rdn-step-catheter.svg",
          alt: "Spyral catheter 배치",
          caption: "Wire distal → Spyral deploy → 4-quadrant contact.",
        },
      },
      {
        text: "**RF Ablation (에너지 전달)** — **Symplicity G3 generator** + **grounding pad**. **4 electrode 동시 RF** — 보통 **~60초/cycle** (제조사 프로토콜). Generator가 **impedance·temperature** 실시간 표시: **impedance↓ + temperature↑** = electrode contact OK. **Distal→proximal** 로 catheter reposition — **이전 ablation set보다 ≥5 mm proximal** 간격. electrode contact loss 시 **개별 electrode off/on** 가능. ablation 중 환자 **flank heat** → **midazolam/fentanyl**.",
        image: {
          src: "/images/procedures/rdn/rdn-step-ablation.svg",
          alt: "RF ablation 에너지 전달",
          caption: "G3 · 60s · impedance/temp · distal→proximal.",
        },
      },
      {
        text: "**반대쪽 신장 + accessory artery** — **Contralateral renal artery** 에 동일 절차 반복. **Accessory renal artery**(Ø3~8 mm)도 **main과 같은 innervation pattern** → 치료 대상. branch **먼저** → **main vessel** 순서. bilateral 완료까지 **평균 시술 시간 ~90~100분**(trial 기준).",
        image: {
          src: "/images/procedures/rdn/rdn-step-contralateral.svg",
          alt: "반대쪽 신장 및 accessory artery 치료",
          caption: "Bilateral · accessory branch · 진정.",
        },
      },
      {
        text: "**최종 조영 · 마무리** — 양측 **final selective renal angiography**: **dissection·spasm·flow limitation** 없는지 확인. **신장동맥 stenosis** acute worsening 없음. Sheath 제거 → **groin hemostasis**(manual·closure device). 회복실: **BP·HR·groin· flank pain·신기능(Cr)** 모니터. **혈압 하강은 수주~수개월** — 환자에게 **약물은 당분간 유지**, 외래에서 taper는 의사 판단.",
        image: {
          src: "/images/procedures/rdn/rdn-step-final.svg",
          alt: "최종 조영과 마무리",
          caption: "Final angio · hemostasis · BP follow-up.",
        },
      },
    ],
    clinicalUse:
      "고혈압 클리닉·interventional hypertension program·일부 Cath Lab에서 시행합니다. PCI와 달리 **coronary가 아니라 renal artery** 를 치료하며, **양측 bilateral** ablation이 표준입니다. 조영실 간호·기술자는 **ACT >250s**, **aortogram·accessory renal** 기록, **ablation cycle 횟수·측(좌/우)** , **진정제·flank pain** 을 차트에 남깁니다. **Paradise ultrasound RDN** 은 cooling·circumferential ultrasound로 프로토콜이 다르지만, **접근·aortogram·bilateral** 큰 흐름은 유사합니다.",
    nursingCare: {
      pre: [
        "Resistant HTN 선별·CT/MRA renal anatomy 결과 확인",
        "항고혈압제 복용 목록·마지막 BP(office·24h ABPM) 기록",
        "신기능(Cr/eGFR) · contrast allergy · 금식 확인",
        "Spyral catheter·G3 generator·grounding pad 작동 점검",
        "6 Fr guide·0.014\" wire · ACT 목표 >250s 확인",
        "진정(midazolam/fentanyl) 준비 · flank heat 설명",
      ],
      post: [
        "ACT·총 heparin 용량·ablation cycle(좌/우) 기록",
        "Groin 출혈·혈종·발 말초혈류 모니터",
        "Flank pain·구역·저혈압·서맥 즉시 보고",
        "조영제 사용량·소변량·Cr 추적(신독성)",
        "혈압↓는 즉시 기대하지 않음 — 수주~수개월 follow-up 안내",
        "항고혈압제 **임의 중단 금지** — 외래 조정",
        "퇴실 전 groin·flank red flag 교육",
      ],
    },
    keyPoints: [
      "RDN = renal sympathetic nerve ablation → BP↓",
      "적응: resistant HTN (약물 3종+에도 미달)",
      "접근: femoral · bilateral renal artery",
      "Spyral: RF · 4 electrode · ~60s/cycle",
      "ACT >250s · distal→proximal ablation",
      "BP 효과: 수주~수개월 · 약물 유지 후 조정",
    ],
    relatedItems: [
      "동맥 해부 — 팔·하지·심장",
      "베타블로커",
      "이뇨제",
      "Nitroglycerin",
      "UFH",
      "ACT",
      "Resistant Hypertension",
    ],
    tags: ["시술", "고혈압", "RDN", "신장동맥", "RF", "조영실"],
  },
  {
    slug: "tilt-table-test",
    title: "Tilt-Table Test",
    englishName: "Head-Up Tilt Table Test",
    koreanName: "경사대 검사 (기립경사 검사)",
    summary:
      "환자를 누운 상태에서 서 있는 각도로 기울여 실신·어지럼·혈압·심박 반응을 관찰하는 검사 — 혈관성·반사성 실신 감별",
    summaryEn:
      "The tilt-table test tilts the patient from supine to upright to provoke and observe syncope, dizziness, BP, and heart rate responses — mainly for vasovagal and orthostatic syncope.",
    definition: [
      "**Tilt-table test(경사대 검사, Head-Up Tilt Test, HUTT)** 는 **실신(syncope)·반복 어지럼** 원인을 찾기 위해, 환자를 **누운 채로 점점 세우는 각도(보통 60~70°)** 로 기울이면서 **혈압·심박·ECG·증상**을 관찰하는 검사입니다.",
      "가장 흔히 찾는 것은 **반사성 실신(vasovagal syncope, 신경매개성 실신)** 입니다. 서 있는 자세에서 **혈압이 떨어지고(저혈압)·심박이 느려지거나(서맥)** 어지럼·실신이 재현되면 **양성**으로 볼 수 있습니다.",
      "또 **기립성 저혈압(orthostatic hypotension)**, **POTS(기립성 빈맥증후군)** , **심인성 실신** 감별, **낙상 위험** 평가에도 씁니다. 조영실·EP lab·실신 클리닉에서 시행합니다.",
      "검사는 **수동 tilt(약물 없음)** 또는 **약물 유발(니트로글리세린 SL, 이소프로테레놀 등)** 프로토콜이 있습니다. 기관·가이드라인에 따라 다릅니다.",
      "한마디로, **'안전하게 세워 보고 실신 원인을 재현·관찰하는 검사'** 입니다.",
    ],
    measurementSteps: [
      "【시술 전 준비】 동의서 · 금식(기관 지침, 보통 4~6시간) · 최근 실신/어지럼 병력 · 복용 약물(β-blocker, ACEi, 이뇨제 등 — 중단 여부 의사 확인) · **IV 라인**(필요 시) · 응급약·제세동기·atropine 준비",
      "【1단계 — 누운 상태 baseline】 경사대에 누워 **안전벨트·다리 고정** · 5~10분 안정 · **혈압·심박·ECG** 기록(기준값) · 증상 없음 확인",
      "【2단계 — 기립 경사(tilt up)】 테이블을 **60~70°**(기관에 따라 80°)로 천천히 올림 · 환자는 **움직이지 않고** 누운 자세 유지(다리 편 상태)",
      "【3단계 — 관찰】 **최대 20~45분**(프로토콜별) 동안 **BP·HR·ECG·SpO₂·증상** 연속 기록 · 어지럼·오심·창백·시야 흐림·실신 여부 질문",
      "【양성 반응(positive) — 반사성 실신】 **실신 또는 명확한 실신 직전 증상(presyncope)** + **혈압 저하(SBP ≤90 또는 ≥40 mmHg 하강)** 및/또는 **서맥·일시 무수축** → vasovagal 가능성 높음",
      "【양성 반응 — 기립성 저혈압】 tilt 후 **SBP ≥20 mmHg 하강**(또는 ≥10 + 증상) → orthostatic hypotension",
      "【양성 반응 — POTS 의심】 tilt 후 **HR ≥30 bpm 증가**(청소년 40) + 증상, BP 크게 떨어지지 않음 → 추가 평가",
      "【음성 반응】 프로토콜 시간 끝까지 증상·혈역학 변화 없음 → 반사성 실신 가능성 낮음(완전 배제는 아님) · 필요 시 **약물 유발 단계** 추가",
      "【약물 유발 단계(선택)】 수동 tilt 음성 시 · **니트로글리세린 설하** 또는 **이소프로테레놀 infusion** 후 다시 tilt · **부정맥·저혈압** 위험↑ → 모니터 강화",
      "【종료·회복】 양성/음성 관계없이 증상 시 **즉시 supine(누운 자세)으로 복귀** · BP·HR·의식 회복까지 모니터 · 안정 후 퇴실",
    ],
    stepsTitle: "검사 절차",
    stepsSubtitle: "단계별 순서",
    clinicalUse:
      "반복 실신·어지럼 환자에서 cardiac vs non-cardiac 실신을 가르는 데 핵심 검사 중 하나입니다. EP·실신 클리닉·일부 Cath Lab에서 시행합니다. 양성이면 생활 습가이드(수분·소금·압박스타킹), 물리적 대처(쓰러질 때 자세), 필요 시 β-blocker·midodrine·pacemaker(재발성 서맥성 실신) 등 치료 방향이 잡힙니다. 음성이면 다른 원인(부정맥, 구조적 심질환, 뇌혈관, 발작 등) 추가 검사가 필요합니다. 검사 중 **실제 실신**이 일어날 수 있어 팀·장비 준비가 필수입니다.",
    nursingCare: {
      pre: [
        "금식·약물 중단(β-blocker 등) 의사 처방 확인",
        "최근 실신 횟수·유발 상황·부상 여부 확인",
        "IV 라인·응급카트·제세동기 위치 확인",
        "안전벨트·테이블 고정 장치 작동 확인",
        "환자에게 검사 중 어지럼·실신 가능성 설명",
      ],
      post: [
        "supine 복귀 후 BP·HR·의식·증상 회복까지 모니터",
        "실신·presyncope 발생 시 시각·혈압·HR 기록",
        "검사 후 어지럼·두통·전신통 호소 시 → **'경사대 검사 후 어지럼·두통·전신 통증'** 간호 항목 참고",
        "NTG·이소프로테레놀 사용 시 두통·떨림·어지럼 더 흔함 — 차트에 기록",
        "회복 후 기립 시 재어지럼 여부 확인 — 천천히 기립",
        "충분한 수분 섭취·당일 운전 금지·낙상 주의 교육",
        "결과 설명·외래 추적·치료 계획 안내",
      ],
    },
    keyPoints: [
      "목적: 반사성(혈관성) 실신 재현·감별",
      "60~70° 기립, 20~45분 BP·HR·ECG·증상 관찰",
      "양성: presyncope/실신 + BP↓ 및/또는 HR↓",
      "음성 시 약물 유발(NTG·이소프로테레놀) 검토",
      "실신 발생 가능 — 안전벨트·즉시 supine 복귀",
      "양성 → 생활요법·약물·필요 시 pacemaker 검토",
    ],
    relatedItems: [
      "경사대 검사 후 어지럼·두통·전신 통증",
      "Vasovagal 반응 대응",
      "Syncope",
      "Vasovagal Syncope",
      "Orthostatic Hypotension",
      "POTS",
      "Pacemaker",
    ],
    tags: ["시술", "실신", "EP", "경사대", "혈압"],
  },
];

export function getProcedureBySlug(slug: string): KnowledgeArticle | undefined {
  return procedures.find((item) => item.slug === slug);
}
