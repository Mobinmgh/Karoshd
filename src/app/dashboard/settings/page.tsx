import { AppShell } from "@/components/layout/AppShell";
import { PageHeader } from "@/components/layout/PageHeader";

export default function SettingsPage() {
  return (
    <AppShell>
      <PageHeader title="تنظیمات" description="تنظیمات حساب در فازهای بعدی همراه با احراز هویت اضافه می‌شود." />
      <section className="card">
        <h2 className="text-xl font-bold text-slate-950">نسخه نمای ثابت</h2>
        <p className="mt-2 leading-8 text-slate-600">در Phase 1 هیچ احراز هویت، پایگاه داده یا تنظیمات واقعی پیاده‌سازی نشده است.</p>
      </section>
    </AppShell>
  );
}
