import { Breadcrumb } from "@/components/Breadcrumb";
import { KnowledgeArticleCard } from "@/components/KnowledgeArticleCard";
import { procedures } from "@/data/procedures";

export default function ProceduresPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <Breadcrumb
        items={[
          { label: "메인", href: "/" },
          { label: "시술 절차" },
        ]}
      />

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">시술 절차</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          심혈관 조영실 시술을 단계별로 정리합니다. 각 항목에는 시술 순서,
          조영실에서의 역할, 주의점이 포함됩니다.
        </p>
        <p className="mt-3 text-sm text-slate-500">
          총 {procedures.length}개 시술
        </p>
      </div>

      <div className="grid gap-4">
        {procedures.map((item) => (
          <KnowledgeArticleCard
            key={item.slug}
            article={item}
            basePath="/procedures"
          />
        ))}
      </div>
    </div>
  );
}
