import { Breadcrumb } from "@/components/Breadcrumb";
import { KnowledgeArticleCard } from "@/components/KnowledgeArticleCard";
import { testInterpretations } from "@/data/test-interpretations";

export default function TestInterpretationsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <Breadcrumb
        items={[
          { label: "메인", href: "/" },
          { label: "검사 결과 해석" },
        ]}
      />

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">검사 결과 해석</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          RHC 등 심혈관 검사 결과를 어떻게 읽고 해석하는지 정리합니다. 보고서에
          나오는 표현을 쉽게 풀어 설명합니다.
        </p>
        <p className="mt-3 text-sm text-slate-500">
          총 {testInterpretations.length}개 항목
        </p>
      </div>

      <div className="grid gap-4">
        {testInterpretations.map((item) => (
          <KnowledgeArticleCard
            key={item.slug}
            article={item}
            basePath="/test-interpretations"
          />
        ))}
      </div>
    </div>
  );
}
