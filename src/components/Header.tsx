import Link from "next/link";
import { SearchForm } from "@/components/SearchForm";

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:py-0 sm:h-16">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <img
            src="/favicon-32x32.png"
            alt="Cath Lab Knowledge"
            width={32}
            height={32}
            className="h-8 w-8 rounded-lg"
            decoding="async"
          />
          <div>
            <p className="text-sm font-semibold text-slate-900">
              Cath Lab Knowledge
            </p>
            <p className="text-xs text-slate-500">심혈관 조영실 지식 모음집</p>
          </div>
        </Link>

        <div className="w-full sm:max-w-sm">
          <SearchForm compact />
        </div>
      </div>
    </header>
  );
}
