"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

type SearchFormProps = {
  defaultQuery?: string;
  compact?: boolean;
};

export function SearchForm({ defaultQuery = "", compact = false }: SearchFormProps) {
  const router = useRouter();
  const [query, setQuery] = useState(defaultQuery);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = query.trim();

    if (trimmed) {
      router.push(`/search?q=${encodeURIComponent(trimmed)}`);
      return;
    }

    router.push("/search");
  };

  return (
    <form onSubmit={handleSubmit} className={compact ? "w-full" : "w-full max-w-md"}>
      <div className="relative">
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="의학용어, 시술, 질환 검색..."
          className={`w-full rounded-xl border border-slate-200 bg-slate-50 text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-teal-400 focus:bg-white focus:ring-2 focus:ring-teal-100 ${
            compact ? "h-10 pl-4 pr-20 text-sm" : "h-12 pl-4 pr-24 text-base"
          }`}
        />
        <button
          type="submit"
          className={`absolute right-1.5 top-1/2 -translate-y-1/2 rounded-lg bg-teal-700 font-medium text-white transition-colors hover:bg-teal-800 ${
            compact ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"
          }`}
        >
          검색
        </button>
      </div>
    </form>
  );
}
