import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { KnowledgeArticleDetail } from "@/components/KnowledgeArticleDetail";
import { getProcedureBySlug, procedures } from "@/data/procedures";

type ProcedureDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return procedures.map((item) => ({ slug: item.slug }));
}

export default async function ProcedureDetailPage({
  params,
}: ProcedureDetailPageProps) {
  const { slug } = await params;
  const item = getProcedureBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <Breadcrumb
        items={[
          { label: "메인", href: "/" },
          { label: "시술 절차", href: "/procedures" },
          { label: item.title },
        ]}
      />

      <KnowledgeArticleDetail article={item} categoryLabel="시술 절차" />
    </div>
  );
}
