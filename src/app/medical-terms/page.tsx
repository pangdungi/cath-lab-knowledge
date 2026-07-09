import { Breadcrumb } from "@/components/Breadcrumb";
import { MedicalTermCard } from "@/components/MedicalTermCard";
import { medicalTerms } from "@/data/medical-terms";

export default function MedicalTermsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <Breadcrumb
        items={[
          { label: "메인", href: "/" },
          { label: "의학용어" },
        ]}
      />

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">의학용어</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          심혈관 조영실에서 사용되는 의학용어와 약어를 정리합니다. 각 항목에는
          정의, 임상적 의미, 조영실에서의 활용 포인트가 포함됩니다.
        </p>
        <p className="mt-3 text-sm text-slate-500">
          총 {medicalTerms.length}개 용어
        </p>
      </div>

      <div className="grid gap-4">
        {medicalTerms.map((term) => (
          <MedicalTermCard key={term.slug} term={term} />
        ))}
      </div>
    </div>
  );
}
