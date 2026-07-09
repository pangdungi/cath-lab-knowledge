import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { KnowledgeArticleDetail } from "@/components/KnowledgeArticleDetail";
import {
  cardiovascularDiseases,
  getCardiovascularDiseaseBySlug,
} from "@/data/cardiovascular-diseases";

type CardiovascularDiseaseDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return cardiovascularDiseases.map((item) => ({ slug: item.slug }));
}

export default async function CardiovascularDiseaseDetailPage({
  params,
}: CardiovascularDiseaseDetailPageProps) {
  const { slug } = await params;
  const item = getCardiovascularDiseaseBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <Breadcrumb
        items={[
          { label: "메인", href: "/" },
          { label: "심혈관 질환", href: "/cardiovascular-diseases" },
          { label: item.title },
        ]}
      />

      <KnowledgeArticleDetail
        article={item}
        categoryLabel="심혈관 질환"
      />
    </div>
  );
}
