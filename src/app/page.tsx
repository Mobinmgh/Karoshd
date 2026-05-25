import Link from "next/link";

const kitItems = [
  "پیشنهاد فروش واضح‌تر",
  "تحلیل پیج اینستاگرام",
  "کمپین ۷ روزه استوری",
  "اسکریپت پاسخ به مشتری",
  "برنامه اجرای عملی",
];

const pricingPlans = [
  {
    name: "شروعی",
    description: "مناسب تست اولیه",
    features: ["یک کیت رشد", "خروجی قابل کپی", "دانلود PDF"],
  },
  {
    name: "حرفه‌ای",
    description: "برای کسب‌وکارهای فعال‌تر",
    features: ["چند کیت رشد", "امکان ویرایش و بازتولید بخش‌ها", "ذخیره گزارش‌ها"],
  },
  {
    name: "آژانس",
    description: "برای کار با چند مشتری",
    features: ["چند مشتری", "خروجی قابل ارائه به کارفرما", "قالب گزارش حرفه‌ای"],
  },
];

export default function LandingPage() {
  return (
    <main className="bg-slate-50 text-right" dir="rtl">
      <header className="border-b border-slate-200 bg-white">
        <div className="container-landing flex items-center justify-between py-4">
          <Link href="/" className="text-xl font-extrabold text-slate-950">
            کارشد
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-bold text-slate-600 md:flex">
            <a href="#features">امکانات</a>
            <a href="#sample">نمونه خروجی</a>
            <a href="#pricing">قیمت‌گذاری</a>
            <a href="#faq">سوالات متداول</a>
          </nav>
          <Link href="/dashboard/new-kit" className="btn-primary">
            ساخت کیت رشد
          </Link>
        </div>
      </header>

      <section className="container-landing grid gap-10 py-16 lg:grid-cols-[1fr_440px] lg:items-center">
        <div>
          <p className="mb-4 text-sm font-bold text-blue-700">کارشد برای کسب‌وکارهای اینستاگرامی</p>
          <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.45] text-slate-950">
            پیج اینستاگرام داری، ولی سیستم فروش نداری؟
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-9 text-slate-600">
            این ابزار اطلاعات کسب‌وکارت را می‌گیرد و برایت یک کیت کامل رشد می‌سازد: پیشنهاد فروش، تحلیل پیج، کمپین
            استوری، اسکریپت پاسخ به مشتری و برنامه اجرا.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/dashboard/new-kit" className="btn-primary w-full sm:w-auto">
              ساخت کیت رشد کسب‌وکار
            </Link>
            <a href="#sample" className="btn-secondary w-full sm:w-auto">
              دیدن نمونه خروجی
            </a>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-report">
          <div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <p className="text-sm font-bold text-slate-950">پیش‌نمایش گزارش</p>
              <p className="text-xs text-slate-500">کیت رشد کارشد</p>
            </div>
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">کامل شده</span>
          </div>
          <div className="space-y-4">
            {kitItems.slice(0, 4).map((item, index) => (
              <div key={item} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <div className="flex items-center gap-3">
                  <span className="flex size-7 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                    {index + 1}
                  </span>
                  <span className="font-bold text-slate-900">{item}</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-slate-200">
                  <div className="h-2 rounded-full bg-blue-600" style={{ width: `${82 - index * 10}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-14">
        <div className="container-landing grid gap-6 md:grid-cols-3">
          {["پیشنهاد فروش نامشخص است", "پیج اعتماد کافی نمی‌سازد", "پاسخ به مشتری تکراری و دستی است"].map((title) => (
            <article key={title} className="rounded-2xl border border-slate-200 p-6">
              <h2 className="text-xl font-bold text-slate-950">{title}</h2>
              <p className="mt-3 text-base leading-8 text-slate-600">
                کارشد این بخش را به خروجی اجرایی تبدیل می‌کند تا صاحب کسب‌وکار بداند قدم بعدی چیست.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="features" className="container-landing py-16">
        <h2 className="text-3xl font-extrabold text-slate-950">کیت رشد شامل چه چیزهایی است؟</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-5">
          {kitItems.map((item) => (
            <div key={item} className="card">
              <p className="font-bold text-slate-950">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="sample" className="bg-white py-16">
        <div className="container-landing grid gap-8 lg:grid-cols-[360px_1fr]">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-950">نمونه خروجی</h2>
            <p className="mt-3 text-base leading-8 text-slate-600">
              خروجی باید مثل گزارش قابل اجرا باشد، نه یک متن کلی یا یک گفت‌وگوی آزاد.
            </p>
          </div>
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-2xl font-bold text-slate-950">تحلیل سریع پیج</h3>
            <p className="mt-5 font-bold text-slate-800">مشکل اصلی:</p>
            <p className="mt-2 leading-9 text-slate-700">
              پیشنهاد فروش در بایو واضح نیست و کاربر در چند ثانیه اول نمی‌فهمد دقیقاً چه چیزی می‌فروشید.
            </p>
            <p className="mt-5 font-bold text-slate-800">اقدام پیشنهادی:</p>
            <p className="mt-2 leading-9 text-slate-700">
              بایو باید شامل نتیجه نهایی، مخاطب هدف و CTA مستقیم باشد.
            </p>
          </article>
        </div>
      </section>

      <section className="container-landing py-16">
        <h2 className="text-3xl font-extrabold text-slate-950">برای چه کسانی مناسب است؟</h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {["فروشگاه اینستاگرامی", "مشاور و مدرس", "فریلنسر و آژانس کوچک", "کسب‌وکار خدماتی"].map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 font-bold text-slate-800">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="bg-white py-16">
        <div className="container-landing">
          <h2 className="text-3xl font-extrabold text-slate-950">قیمت‌گذاری نسخه آزمایشی</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <article key={plan.name} className="card">
                <h3 className="text-2xl font-bold text-slate-950">{plan.name}</h3>
                <p className="mt-2 text-slate-600">{plan.description}</p>
                <ul className="mt-5 space-y-2 text-sm leading-7 text-slate-700">
                  {plan.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
                <button type="button" className="btn-secondary mt-6 w-full">
                  فعلاً برای نسخه آزمایشی فعال نیست
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="container-landing py-16">
        <h2 className="text-3xl font-extrabold text-slate-950">سوالات متداول</h2>
        <div className="mt-8 grid gap-4">
          {[
            ["آیا باید به اینستاگرام وصل شود؟", "خیر. نسخه اول فقط بر اساس اطلاعاتی که وارد می‌کنی گزارش می‌سازد."],
            ["آیا پرداخت فعال است؟", "خیر. در این فاز فقط نمای محصول و مسیر کاربری ساخته شده است."],
          ].map(([question, answer]) => (
            <article key={question} className="card">
              <h3 className="text-xl font-bold text-slate-950">{question}</h3>
              <p className="mt-2 leading-8 text-slate-600">{answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-14">
        <div className="container-landing flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-950">اولین کیت رشدت را بساز.</h2>
            <p className="mt-2 text-slate-600">فرم مرحله‌ای آماده است و گزارش نمونه هم در داشبورد دیده می‌شود.</p>
          </div>
          <Link href="/dashboard/new-kit" className="btn-primary w-full sm:w-auto">
            ساخت کیت رشد
          </Link>
        </div>
      </section>
    </main>
  );
}
