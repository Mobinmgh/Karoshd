import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { GeneratedSectionCard } from "@/components/kit/GeneratedSectionCard";
import { ReportNavigation } from "@/components/kit/ReportNavigation";
import { mockKits, reportSections, statusClasses, statusLabels } from "@/lib/mock-data";

export default function ReportPage({ params }: { params: { kitId: string } }) {
  const kit = mockKits.find((item) => item.id === params.kitId) ?? mockKits[0];

  return (
    <AppShell>
      <header className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <span className={`rounded-full px-3 py-1 text-xs font-bold ${statusClasses[kit.status]}`}>
                {statusLabels[kit.status]}
              </span>
              <span className="text-sm text-slate-500">تاریخ ساخت: ۱۴۰۵/۰۳/۰۲</span>
            </div>
            <h1 className="text-3xl font-extrabold leading-tight text-slate-950">گزارش رشد {kit.businessName}</h1>
            <p className="mt-2 max-w-2xl text-base leading-8 text-slate-600">
              این صفحه با داده نمونه ساخته شده تا ساختار گزارش نهایی، ناوبری بخش‌ها و اکشن‌های اصلی مشخص باشد.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button type="button" className="btn-secondary">
              کپی همه
            </button>
            <button type="button" className="btn-primary">
              دانلود PDF
            </button>
          </div>
        </div>
      </header>
      <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,920px)]">
        <aside className="lg:order-1">
          <ReportNavigation sections={reportSections} />
        </aside>
        <div className="space-y-6 lg:order-2">
          {reportSections.map((section) => (
            <GeneratedSectionCard key={section.id} section={section} />
          ))}
          <div className="flex justify-start">
            <Link href="/dashboard/kits" className="btn-secondary">
              بازگشت به کیت‌ها
            </Link>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
