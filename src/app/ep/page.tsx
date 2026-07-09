import { Breadcrumb } from "@/components/Breadcrumb";
import { KnowledgeArticleCard } from "@/components/KnowledgeArticleCard";
import { epTopics } from "@/data/ep-topics";

export default function EpPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <Breadcrumb
        items={[
          { label: "메인", href: "/" },
          { label: "EP" },
        ]}
      />

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">EP</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          전기생리(Electrophysiology) 관련 질환과 부정맥을 쉽게 정리합니다.
          각 항목에는 정의, 심전도 포인트, 치료 방향이 포함됩니다.
        </p>
        <p className="mt-3 text-sm text-slate-500">
          총 {epTopics.length}개 항목
        </p>
      </div>

      <div className="grid gap-4">
        {epTopics.map((item) => (
          <KnowledgeArticleCard
            key={item.slug}
            article={item}
            basePath="/ep"
          />
        ))}
      </div>
    </div>
  );
}
