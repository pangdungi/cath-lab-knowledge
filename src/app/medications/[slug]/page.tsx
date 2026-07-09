import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { KnowledgeArticleDetail } from "@/components/KnowledgeArticleDetail";
import { getMedicationBySlug, medications } from "@/data/medications";

type MedicationDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return medications.map((item) => ({ slug: item.slug }));
}

export default async function MedicationDetailPage({
  params,
}: MedicationDetailPageProps) {
  const { slug } = await params;
  const item = getMedicationBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <Breadcrumb
        items={[
          { label: "메인", href: "/" },
          { label: "약물", href: "/medications" },
          { label: item.title },
        ]}
      />

      <KnowledgeArticleDetail article={item} categoryLabel="약물" />
    </div>
  );
}
