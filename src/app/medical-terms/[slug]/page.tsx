import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FormattedText } from "@/components/FormattedText";
import {
  getMedicalTermBySlug,
  medicalTerms,
} from "@/data/medical-terms";

type MedicalTermDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return medicalTerms.map((term) => ({ slug: term.slug }));
}

export default async function MedicalTermDetailPage({
  params,
}: MedicalTermDetailPageProps) {
  const { slug } = await params;
  const term = getMedicalTermBySlug(slug);

  if (!term) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <Breadcrumb
        items={[
          { label: "메인", href: "/" },
          { label: "의학용어", href: "/medical-terms" },
          { label: term.acronym },
        ]}
      />

      <article className="rounded-2xl border border-slate-200 bg-white p-8">
        <header className="mb-8 border-b border-slate-100 pb-6">
          <p className="mb-2 text-sm font-medium text-teal-700">의학용어</p>
          <h1 className="text-4xl font-bold text-slate-900">{term.acronym}</h1>
          <p className="mt-2 text-lg text-slate-600">{term.fullName}</p>
          <p className="mt-1 text-base text-slate-500">{term.koreanName}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {term.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        <section className="mb-8">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
            한 줄 요약
          </h2>
          <div className="space-y-3">
            <p className="rounded-lg bg-slate-50 px-4 py-3 text-base leading-7 text-slate-800">
              <FormattedText>{term.summary}</FormattedText>
            </p>
            <p className="rounded-lg border border-teal-100 bg-teal-50 px-4 py-3 text-base leading-7 text-teal-900">
              <span className="mr-2 text-xs font-semibold uppercase tracking-wide text-teal-600">
                EN
              </span>
              {term.summaryEn}
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="mb-1 text-lg font-semibold text-slate-900">정의</h2>
          <p className="mb-4 text-sm text-slate-500">쉽게 이해하기</p>
          <div className="space-y-4 rounded-xl bg-slate-50 px-5 py-5">
            {term.definition.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-7 text-slate-700"
              >
                <FormattedText>{paragraph}</FormattedText>
              </p>
            ))}
          </div>
        </section>

        {term.measurementSteps && term.measurementSteps.length > 0 && (
          <section className="mb-8">
            <h2 className="mb-1 text-lg font-semibold text-slate-900">
              측정 방법
            </h2>
            <p className="mb-4 text-sm text-slate-500">단계별로 따라하기</p>
            <ol className="space-y-4">
              {term.measurementSteps.map((step, index) => (
                <li
                  key={step}
                  className="flex gap-4 rounded-xl border border-slate-200 bg-white px-4 py-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-700 text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="pt-1 text-base leading-7 text-slate-700">
                    <FormattedText>{step}</FormattedText>
                  </p>
                </li>
              ))}
            </ol>
          </section>
        )}

        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold text-slate-900">
            임상적 활용
          </h2>
          <p className="leading-7 text-slate-700">
            <FormattedText>{term.clinicalUse}</FormattedText>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold text-slate-900">
            핵심 포인트
          </h2>
          <ul className="space-y-3">
            {term.keyPoints.map((point) => (
              <li
                key={point}
                className="flex gap-3 text-sm leading-6 text-slate-700"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
                <span>
                  <FormattedText>{point}</FormattedText>
                </span>
              </li>
            ))}
          </ul>
        </section>

        {term.relatedTerms && term.relatedTerms.length > 0 && (
          <section>
            <h2 className="mb-3 text-lg font-semibold text-slate-900">
              관련 용어
            </h2>
            <div className="flex flex-wrap gap-2">
              {term.relatedTerms.map((related) => (
                <span
                  key={related}
                  className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-600"
                >
                  {related}
                </span>
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  );
}
