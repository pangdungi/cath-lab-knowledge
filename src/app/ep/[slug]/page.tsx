import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { KnowledgeArticleDetail } from "@/components/KnowledgeArticleDetail";
import { epTopics, getEpTopicBySlug } from "@/data/ep-topics";

type EpDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return epTopics.map((item) => ({ slug: item.slug }));
}

export default async function EpDetailPage({ params }: EpDetailPageProps) {
  const { slug } = await params;
  const item = getEpTopicBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <Breadcrumb
        items={[
          { label: "메인", href: "/" },
          { label: "EP", href: "/ep" },
          { label: item.title },
        ]}
      />

      <KnowledgeArticleDetail article={item} categoryLabel="EP" />
    </div>
  );
}
