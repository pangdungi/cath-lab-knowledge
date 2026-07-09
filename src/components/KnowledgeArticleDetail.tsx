import type { KnowledgeArticle } from "@/types/knowledge-article";

type KnowledgeArticleDetailProps = {
  article: KnowledgeArticle;
  categoryLabel: string;
};

export function KnowledgeArticleDetail({
  article,
  categoryLabel,
}: KnowledgeArticleDetailProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-8">
      <header className="mb-8 border-b border-slate-100 pb-6">
        <p className="mb-2 text-sm font-medium text-teal-700">{categoryLabel}</p>
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          {article.title}
        </h1>
        {article.englishName && (
          <p className="mt-2 text-lg text-slate-600">{article.englishName}</p>
        )}
        {article.koreanName && (
          <p className="mt-1 text-base text-slate-500">{article.koreanName}</p>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
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
            {article.summary}
          </p>
          <p className="rounded-lg border border-teal-100 bg-teal-50 px-4 py-3 text-base leading-7 text-teal-900">
            <span className="mr-2 text-xs font-semibold uppercase tracking-wide text-teal-600">
              EN
            </span>
            {article.summaryEn}
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-1 text-lg font-semibold text-slate-900">정의</h2>
        <p className="mb-4 text-sm text-slate-500">쉽게 이해하기</p>
        <div className="space-y-4 rounded-xl bg-slate-50 px-5 py-5">
          {article.definition.map((paragraph) => (
            <p
              key={paragraph}
              className="text-base leading-7 text-slate-700"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {article.images && article.images.length > 0 && (
        <section className="mb-8">
          <h2 className="mb-1 text-lg font-semibold text-slate-900">
            {article.imagesTitle ?? "참고 이미지"}
          </h2>
          <p className="mb-4 text-sm text-slate-500">
            {article.imagesSubtitle ?? "그림으로 이해하기"}
          </p>
          <div className="space-y-6">
            {article.images.map((image) => (
              <figure
                key={image.src}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full bg-slate-50"
                />
                {image.caption && (
                  <figcaption className="border-t border-slate-100 px-4 py-3 text-sm leading-6 text-slate-600">
                    {image.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </section>
      )}

      {article.measurementSteps && article.measurementSteps.length > 0 && (
        <section className="mb-8">
          <h2 className="mb-1 text-lg font-semibold text-slate-900">
            {article.stepsTitle ?? "측정 방법"}
          </h2>
          <p className="mb-4 text-sm text-slate-500">
            {article.stepsSubtitle ?? "단계별로 따라하기"}
          </p>
          <ol className="space-y-4">
            {article.measurementSteps.map((step, index) => (
              <li
                key={step}
                className="flex gap-4 rounded-xl border border-slate-200 bg-white px-4 py-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-700 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="pt-1 text-base leading-7 text-slate-700">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </section>
      )}

      {article.nursingCare && (
        <section className="mb-8">
          <h2 className="mb-1 text-lg font-semibold text-slate-900">
            간호 포인트
          </h2>
          <p className="mb-4 text-sm font-medium text-amber-700">
            시술 전·후 꼭 놓치지 말아야 할 것
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
              <h3 className="mb-3 text-sm font-bold text-amber-900">
                시술 전
              </h3>
              <ul className="space-y-3">
                {article.nursingCare.pre.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm leading-6 text-amber-950"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-teal-200 bg-teal-50 p-5">
              <h3 className="mb-3 text-sm font-bold text-teal-900">
                시술 후
              </h3>
              <ul className="space-y-3">
                {article.nursingCare.post.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm leading-6 text-teal-950"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      <section className="mb-8">
        <h2 className="mb-3 text-lg font-semibold text-slate-900">
          임상적 활용
        </h2>
        <p className="leading-7 text-slate-700">{article.clinicalUse}</p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-lg font-semibold text-slate-900">
          핵심 포인트
        </h2>
        <ul className="space-y-3">
          {article.keyPoints.map((point) => (
            <li
              key={point}
              className="flex gap-3 text-sm leading-6 text-slate-700"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {article.relatedItems && article.relatedItems.length > 0 && (
        <section>
          <h2 className="mb-3 text-lg font-semibold text-slate-900">
            관련 항목
          </h2>
          <div className="flex flex-wrap gap-2">
            {article.relatedItems.map((related) => (
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
  );
}
