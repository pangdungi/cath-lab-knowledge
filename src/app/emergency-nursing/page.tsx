import { Breadcrumb } from "@/components/Breadcrumb";
import { KnowledgeArticleCard } from "@/components/KnowledgeArticleCard";
import { emergencyNursingTopics } from "@/data/emergency-nursing-topics";

export default function EmergencyNursingPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <Breadcrumb
        items={[
          { label: "메인", href: "/" },
          { label: "응급간호" },
        ]}
      />

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">응급간호</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          심정지·코드 블루 등 응급 상황에서 필요한 ACLS, 소생술, 팀 대응
          방법을 정리합니다.
        </p>
        <p className="mt-3 text-sm text-slate-500">
          총 {emergencyNursingTopics.length}개 항목
        </p>
      </div>

      <div className="grid gap-4">
        {emergencyNursingTopics.map((item) => (
          <KnowledgeArticleCard
            key={item.slug}
            article={item}
            basePath="/emergency-nursing"
          />
        ))}
      </div>
    </div>
  );
}
