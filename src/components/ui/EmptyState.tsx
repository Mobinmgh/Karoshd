import Link from "next/link";

export function EmptyState() {
  return (
    <section className="card flex flex-col items-start gap-4">
      <div>
        <h2 className="text-xl font-bold text-slate-950">هنوز هیچ کیتی نساخته‌ای.</h2>
        <p className="mt-2 max-w-xl text-base leading-8 text-slate-600">
          اولین کیت رشد کسب‌وکارت را بساز و پیشنهاد فروش، تحلیل پیج و برنامه اجرای خودت را دریافت کن.
        </p>
      </div>
      <Link href="/dashboard/new-kit" className="btn-primary w-full sm:w-auto">
        ساخت کیت جدید
      </Link>
    </section>
  );
}
