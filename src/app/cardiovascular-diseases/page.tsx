import { Breadcrumb } from "@/components/Breadcrumb";
import { KnowledgeArticleCard } from "@/components/KnowledgeArticleCard";
import { cardiovascularDiseases } from "@/data/cardiovascular-diseases";

export default function CardiovascularDiseasesPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <Breadcrumb
        items={[
          { label: "메인", href: "/" },
          { label: "심혈관 질환" },
        ]}
      />

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">심혈관 질환</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          심혈관 조영실에서 자주 다루는 질환을 쉽게 정리합니다. 각 항목에는
          정의, 임상적 의미, 조영실에서의 주의점이 포함됩니다.
        </p>
        <p className="mt-3 text-sm text-slate-500">
          총 {cardiovascularDiseases.length}개 항목
        </p>
      </div>

      <div className="grid gap-4">
        {cardiovascularDiseases.map((item) => (
          <KnowledgeArticleCard
            key={item.slug}
            article={item}
            basePath="/cardiovascular-diseases"
          />
        ))}
      </div>
    </div>
  );
}
