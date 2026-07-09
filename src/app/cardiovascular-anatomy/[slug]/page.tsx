import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { KnowledgeArticleDetail } from "@/components/KnowledgeArticleDetail";
import {
  cardiovascularAnatomy,
  getCardiovascularAnatomyBySlug,
} from "@/data/cardiovascular-anatomy";

type CardiovascularAnatomyDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return cardiovascularAnatomy.map((item) => ({ slug: item.slug }));
}

export default async function CardiovascularAnatomyDetailPage({
  params,
}: CardiovascularAnatomyDetailPageProps) {
  const { slug } = await params;
  const item = getCardiovascularAnatomyBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <Breadcrumb
        items={[
          { label: "메인", href: "/" },
          { label: "심혈관 해부학", href: "/cardiovascular-anatomy" },
          { label: item.title },
        ]}
      />

      <KnowledgeArticleDetail
        article={item}
        categoryLabel="심혈관 해부학"
      />
    </div>
  );
}
