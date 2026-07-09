import { Suspense } from "react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SearchForm } from "@/components/SearchForm";
import { SearchResults } from "@/components/SearchResults";

type SearchPageProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q = "" } = await searchParams;

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <Breadcrumb
        items={[
          { label: "메인", href: "/" },
          { label: "검색" },
        ]}
      />

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">검색</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          모든 메뉴의 내용을 한꺼번에 검색합니다.
        </p>
      </div>

      <div className="mb-8">
        <SearchForm defaultQuery={q} />
      </div>

      <Suspense
        fallback={
          <div className="rounded-xl border border-slate-200 bg-white px-6 py-10 text-center text-sm text-slate-500">
            검색 중...
          </div>
        }
      >
        <SearchResults />
      </Suspense>
    </div>
  );
}
