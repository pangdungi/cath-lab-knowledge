import { MenuCard } from "@/components/MenuCard";
import { SearchForm } from "@/components/SearchForm";
import { menus } from "@/data/menus";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <section className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          심혈관 조영실 지식 모음집
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
          조영실에서 일하는 간호사와 의사를 위한 지식 베이스입니다.
          아래 메뉴에서 원하는 항목을 선택하세요.
        </p>
        <div className="mt-6 max-w-xl">
          <SearchForm />
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
          메뉴
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {menus.map((menu) => (
            <MenuCard key={menu.id} menu={menu} />
          ))}
        </div>
      </section>
    </div>
  );
}
