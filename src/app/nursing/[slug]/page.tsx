import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { KnowledgeArticleDetail } from "@/components/KnowledgeArticleDetail";
import { getNursingTopicBySlug, nursingTopics } from "@/data/nursing-topics";

type NursingDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return nursingTopics.map((item) => ({ slug: item.slug }));
}

export default async function NursingDetailPage({
  params,
}: NursingDetailPageProps) {
  const { slug } = await params;
  const item = getNursingTopicBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <Breadcrumb
        items={[
          { label: "메인", href: "/" },
          { label: "간호", href: "/nursing" },
          { label: item.title },
        ]}
      />

      <KnowledgeArticleDetail article={item} categoryLabel="간호" />
    </div>
  );
}
