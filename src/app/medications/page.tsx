import { Breadcrumb } from "@/components/Breadcrumb";
import { KnowledgeArticleCard } from "@/components/KnowledgeArticleCard";
import { medications } from "@/data/medications";

export default function MedicationsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <Breadcrumb
        items={[
          { label: "메인", href: "/" },
          { label: "약물" },
        ]}
      />

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">약물</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          심혈관 조영실에서 자주 쓰이는 약물을 정리합니다. 각 항목에는 용도,
          용법, 조영실에서의 주의점이 포함됩니다.
        </p>
        <p className="mt-3 text-sm text-slate-500">
          총 {medications.length}개 약물
        </p>
      </div>

      {medications.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-200 bg-white px-6 py-10 text-center">
          <p className="text-base text-slate-600">
            아직 등록된 약물이 없습니다.
          </p>
          <p className="mt-2 text-sm text-slate-400">
            약물을 하나씩 추가해 나갈 예정입니다.
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {medications.map((item) => (
            <KnowledgeArticleCard
              key={item.slug}
              article={item}
              basePath="/medications"
            />
          ))}
        </div>
      )}
    </div>
  );
}
