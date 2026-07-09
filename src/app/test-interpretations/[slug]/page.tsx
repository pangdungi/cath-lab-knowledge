import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { KnowledgeArticleDetail } from "@/components/KnowledgeArticleDetail";
import {
  getTestInterpretationBySlug,
  testInterpretations,
} from "@/data/test-interpretations";

type TestInterpretationDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return testInterpretations.map((item) => ({ slug: item.slug }));
}

export default async function TestInterpretationDetailPage({
  params,
}: TestInterpretationDetailPageProps) {
  const { slug } = await params;
  const item = getTestInterpretationBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <Breadcrumb
        items={[
          { label: "메인", href: "/" },
          { label: "검사 결과 해석", href: "/test-interpretations" },
          { label: item.title },
        ]}
      />

      <KnowledgeArticleDetail
        article={item}
        categoryLabel="검사 결과 해석"
      />
    </div>
  );
}
