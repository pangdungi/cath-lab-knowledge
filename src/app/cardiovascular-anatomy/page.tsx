import { Breadcrumb } from "@/components/Breadcrumb";
import { KnowledgeArticleCard } from "@/components/KnowledgeArticleCard";
import { cardiovascularAnatomy } from "@/data/cardiovascular-anatomy";

export default function CardiovascularAnatomyPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <Breadcrumb
        items={[
          { label: "메인", href: "/" },
          { label: "심혈관 해부생리학" },
        ]}
      />

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">심혈관 해부생리학</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          조영실·심장내과에서 필요한 심혈관 해부 구조와 응고·혈전 생리를 정리합니다.
          각 항목에는 혈관명, 약어, 응고 경로, 참고 이미지가 포함됩니다.
        </p>
        <p className="mt-3 text-sm text-slate-500">
          총 {cardiovascularAnatomy.length}개 항목
        </p>
      </div>

      <div className="grid gap-4">
        {cardiovascularAnatomy.map((item) => (
          <KnowledgeArticleCard
            key={item.slug}
            article={item}
            basePath="/cardiovascular-anatomy"
          />
        ))}
      </div>
    </div>
  );
}
