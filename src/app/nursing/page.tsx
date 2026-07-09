import { Breadcrumb } from "@/components/Breadcrumb";
import { KnowledgeArticleCard } from "@/components/KnowledgeArticleCard";
import { nursingTopics } from "@/data/nursing-topics";

export default function NursingPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <Breadcrumb
        items={[
          { label: "메인", href: "/" },
          { label: "간호" },
        ]}
      />

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">간호</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          조영실·심장내과 병동에서 필요한 간호 포인트, 측정법, 환자 관리
          방법을 정리합니다.
        </p>
        <p className="mt-3 text-sm text-slate-500">
          총 {nursingTopics.length}개 항목
        </p>
      </div>

      <div className="grid gap-4">
        {nursingTopics.map((item) => (
          <KnowledgeArticleCard
            key={item.slug}
            article={item}
            basePath="/nursing"
          />
        ))}
      </div>
    </div>
  );
}
