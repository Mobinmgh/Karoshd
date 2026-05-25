import Link from "next/link";
import type { ReactNode } from "react";

const navItems = [
  { href: "/dashboard", label: "داشبورد" },
  { href: "/dashboard/kits", label: "کیت‌های رشد" },
  { href: "/dashboard/new-kit", label: "ساخت کیت جدید" },
  { href: "/dashboard/settings", label: "تنظیمات" },
];

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-right" dir="rtl">
      <div className="container-dashboard grid gap-6 py-5 lg:grid-cols-[240px_1fr]">
        <aside className="lg:sticky lg:top-5 lg:h-[calc(100vh-40px)]">
          <div className="card flex flex-col gap-6 p-5">
            <Link href="/" className="block">
              <div className="text-xl font-extrabold leading-none text-slate-950">کارشد</div>
              <div className="mt-2 text-sm text-slate-500">سیستم رشد کسب‌وکار</div>
            </Link>
            <nav className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="whitespace-nowrap rounded-xl px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="hidden rounded-2xl bg-slate-100 p-4 text-sm leading-7 text-slate-600 lg:block">
              نسخه فعلی فقط نمای ثابت محصول است. اتصال داده، احراز هویت و تولید گزارش در فازهای بعدی اضافه می‌شود.
            </div>
          </div>
        </aside>
        <main className="min-w-0">{children}</main>
      </div>
    </div>
  );
}
