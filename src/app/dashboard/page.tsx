import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { KitCard } from "@/components/kit/KitCard";
import { LocalDraftKits } from "@/components/kit/LocalDraftKits";
import { mockKits } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <AppShell>
      <PageHeader
        title="داشبورد"
        description="مرور سریع کیت‌های رشد، وضعیت گزارش‌ها و مسیر بعدی برای مرتب‌سازی فروش کسب‌وکار."
        action={
          <Link href="/dashboard/new-kit" className="btn-primary w-full sm:w-auto">
            ساخت کیت جدید
          </Link>
        }
      />
      <section className="grid gap-4 md:grid-cols-3">
        {[
          ["۲", "کیت رشد"],
          ["۱", "گزارش کامل"],
          ["۵", "بخش گزارش آماده"],
        ].map(([value, label]) => (
          <div key={label} className="card">
            <p className="text-3xl font-extrabold text-slate-950">{value}</p>
            <p className="mt-2 text-sm font-bold text-slate-600">{label}</p>
          </div>
        ))}
      </section>
      <section className="mt-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-extrabold text-slate-950">آخرین کیت‌ها</h2>
          <Link href="/dashboard/kits" className="text-sm font-bold text-blue-700">
            مشاهده همه
          </Link>
        </div>
        <div className="grid gap-6">
          <LocalDraftKits compact />
          {mockKits.map((kit) => (
            <KitCard key={kit.id} kit={kit} />
          ))}
        </div>
      </section>
    </AppShell>
  );
}
