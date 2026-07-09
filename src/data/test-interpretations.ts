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
];

export function getTestInterpretationBySlug(
  slug: string,
): KnowledgeArticle | undefined {
  return testInterpretations.find((item) => item.slug === slug);
}
