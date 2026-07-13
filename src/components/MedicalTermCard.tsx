import { FormattedText } from "@/components/FormattedText";
import Link from "next/link";
import type { MedicalTerm } from "@/types/medical-term";

type MedicalTermCardProps = {
  term: MedicalTerm;
};

export function MedicalTermCard({ term }: MedicalTermCardProps) {
  return (
    <Link
      href={`/medical-terms/${term.slug}`}
      className="group block rounded-xl border border-slate-200 bg-white p-5 transition-all hover:border-teal-300 hover:shadow-md"
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <p className="text-2xl font-bold text-teal-800">{term.acronym}</p>
          <p className="text-sm text-slate-500">{term.fullName}</p>
        </div>
        <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
          {term.koreanName}
        </span>
      </div>

      <p className="mb-4 text-sm leading-6 text-slate-700">
        <FormattedText>{term.summary}</FormattedText>
      </p>

      <div className="flex flex-wrap gap-2">
        {term.tags.map((tag) => (
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
