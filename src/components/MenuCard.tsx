import Link from "next/link";
import type { MenuItem } from "@/data/menus";

type MenuCardProps = {
  menu: MenuItem;
};

export function MenuCard({ menu }: MenuCardProps) {
  if (!menu.available) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 opacity-60">
        <span className="text-3xl">{menu.icon}</span>
        <h2 className="mt-4 text-lg font-semibold text-slate-700">{menu.label}</h2>
        <p className="mt-2 text-sm leading-6 text-slate-500">{menu.description}</p>
        <span className="mt-4 inline-block rounded-full bg-slate-200 px-3 py-1 text-xs text-slate-600">
          준비 중
        </span>
      </div>
    );
  }

  return (
    <Link
      href={menu.href}
      className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-teal-400 hover:shadow-lg"
    >
      <span className="text-3xl">{menu.icon}</span>
      <h2 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-teal-800">
        {menu.label}
      </h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">{menu.description}</p>
      <span className="mt-4 inline-flex items-center text-sm font-medium text-teal-700 group-hover:text-teal-900">
        열기 →
      </span>
    </Link>
  );
}
