import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { KnowledgeArticleDetail } from "@/components/KnowledgeArticleDetail";
import {
  emergencyNursingTopics,
  getEmergencyNursingTopicBySlug,
} from "@/data/emergency-nursing-topics";

type EmergencyNursingDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return emergencyNursingTopics.map((item) => ({ slug: item.slug }));
}

export default async function EmergencyNursingDetailPage({
  params,
}: EmergencyNursingDetailPageProps) {
  const { slug } = await params;
  const item = getEmergencyNursingTopicBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <Breadcrumb
        items={[
          { label: "메인", href: "/" },
          { label: "응급간호", href: "/emergency-nursing" },
          { label: item.title },
        ]}
      />

      <KnowledgeArticleDetail article={item} categoryLabel="응급간호" />
    </div>
  );
}
