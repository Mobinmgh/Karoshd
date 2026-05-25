import { AppShell } from "@/components/layout/AppShell";
import { PageHeader } from "@/components/layout/PageHeader";

const steps = ["اطلاعات کسب‌وکار", "مشتری و مسئله", "پیج اینستاگرام", "اعتمادسازی", "لحن برند", "مرور نهایی"];

const fields = [
  ["نام کسب‌وکار", "مثلاً: استودیو رشد اینستاگرام", "input"],
  ["نوع کسب‌وکار", "مثلاً: خدمات مشاوره و تولید محتوا", "input"],
  ["حوزه فعالیت", "مثلاً: فروشگاه‌های اینستاگرامی پوشاک", "input"],
  ["محصول یا خدمت اصلی", "دقیق بنویس چه چیزی می‌فروشی.", "textarea"],
  ["مشتری ایده‌آل شما کیست؟", "مشتری اصلی من ...", "textarea"],
  ["مشکل اصلی پیج چیست؟", "مثلاً فروش کم است چون پیشنهاد واضح نیست.", "textarea"],
];

export default function NewKitPage() {
  return (
    <AppShell>
      <PageHeader
        title="ساخت کیت رشد جدید"
        description="این فرم در فاز فعلی نمای ثابت دارد. ساختار مرحله‌ای، فیلدها و مرور نهایی برای اتصال داده در فاز بعد آماده شده‌اند."
      />
      <section className="grid gap-6 lg:grid-cols-[260px_1fr]">
        <aside className="card h-fit lg:sticky lg:top-5">
          <p className="mb-4 text-sm font-bold text-slate-950">مراحل فرم</p>
          <ol className="space-y-3">
            {steps.map((step, index) => (
              <li key={step} className="flex items-center gap-3">
                <span
                  className={`flex size-8 items-center justify-center rounded-full text-sm font-bold ${
                    index === 0 ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {index + 1}
                </span>
                <span className={`text-sm font-bold ${index === 0 ? "text-slate-950" : "text-slate-500"}`}>
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </aside>
        <form className="card" aria-label="فرم ساخت کیت رشد">
          <div className="border-b border-slate-100 pb-5">
            <p className="text-sm font-bold text-blue-700">مرحله ۱ از ۶</p>
            <h2 className="mt-2 text-2xl font-extrabold text-slate-950">اطلاعات کسب‌وکار</h2>
            <p className="mt-2 text-base leading-8 text-slate-600">
              اطلاعات را واضح و کوتاه وارد کن تا گزارش نهایی قابل اجرا باشد.
            </p>
          </div>
          <div className="mt-6 grid gap-5">
            {fields.map(([label, placeholder, type]) => (
              <label key={label} className="grid gap-2">
                <span className="text-sm font-bold text-slate-800">{label}</span>
                {type === "textarea" ? (
                  <textarea className="form-textarea" placeholder={placeholder} />
                ) : (
                  <input className="form-input" placeholder={placeholder} />
                )}
                <span className="text-xs leading-6 text-slate-500">این بخش در گزارش نهایی برای تحلیل پیشنهاد و پیج استفاده می‌شود.</span>
              </label>
            ))}
          </div>
          <div className="mt-8 flex flex-col-reverse gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:justify-between">
            <button type="button" className="btn-secondary w-full sm:w-auto">
              ذخیره پیش‌نویس
            </button>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button type="button" className="btn-secondary w-full sm:w-auto">
                بازگشت
              </button>
              <button type="button" className="btn-primary w-full sm:w-auto">
                ادامه
              </button>
            </div>
          </div>
        </form>
      </section>
    </AppShell>
  );
}
