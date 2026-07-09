"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { searchItems } from "@/lib/search";

export function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const results = searchItems(query);

  if (!query.trim()) {
    return (
      <div className="rounded-xl border border-dashed border-slate-200 bg-white px-6 py-10 text-center">
        <p className="text-base text-slate-600">
          검색어를 입력하면 의학용어, 심혈관 질환, 검사 결과 해석, 시술 절차를
          한꺼번에 찾을 수 있습니다.
        </p>
        <p className="mt-2 text-sm text-slate-400">
          예: FFR, IVUS, TAVR, tricuspid, filling pressure
        </p>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white px-6 py-10 text-center">
        <p className="text-base text-slate-700">
          <span className="font-semibold text-teal-800">&quot;{query}&quot;</span>
          에 대한 결과가 없습니다.
        </p>
        <p className="mt-2 text-sm text-slate-500">
          다른 키워드로 다시 검색해 보세요.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <p className="text-sm text-slate-500">
        <span className="font-medium text-slate-700">{results.length}개</span> 결과
      </p>

      {results.map((result) => (
        <Link
          key={`${result.category}-${result.slug}`}
          href={result.href}
          className="block rounded-xl border border-slate-200 bg-white p-5 transition-all hover:border-teal-300 hover:shadow-md"
        >
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
              {result.categoryLabel}
            </span>
            {result.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-500"
              >
                #{tag}
              </span>
            ))}
          </div>

          <h2 className="text-lg font-bold text-slate-900">{result.title}</h2>
          {result.subtitle && (
            <p className="mt-1 text-sm text-slate-500">{result.subtitle}</p>
          )}
          <p className="mt-2 text-sm leading-6 text-slate-700">{result.summary}</p>
        </Link>
      ))}
    </div>
  );
}
