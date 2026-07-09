import Link from "next/link";
import type { KnowledgeArticle } from "@/types/knowledge-article";

type KnowledgeArticleCardProps = {
  article: KnowledgeArticle;
  basePath: string;
};

export function KnowledgeArticleCard({
  article,
  basePath,
}: KnowledgeArticleCardProps) {
  return (
    <Link
      href={`${basePath}/${article.slug}`}
      className="group block rounded-xl border border-slate-200 bg-white p-5 transition-all hover:border-teal-300 hover:shadow-md"
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <p className="text-xl font-bold text-teal-800">{article.title}</p>
          {article.englishName && (
            <p className="text-sm text-slate-500">{article.englishName}</p>
          )}
        </div>
        {article.koreanName && (
          <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
            {article.koreanName}
          </span>
        )}
      </div>

      <p className="mb-4 text-sm leading-6 text-slate-700">{article.summary}</p>

      <div className="flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-600"
          >
            #{tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
