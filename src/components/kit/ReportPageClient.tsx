"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { GeneratedSectionCard } from "@/components/kit/GeneratedSectionCard";
import { ReportNavigation } from "@/components/kit/ReportNavigation";
import { getLocalDraftKitById, type LocalDraftKit } from "@/lib/storage/local-drafts";
import { mockKits, reportSections, statusClasses, statusLabels, type MockReportSection } from "@/lib/mock-data";
import type { BusinessProfileFormValues } from "@/lib/validators/business-profile";

const localPlaceholderSections: MockReportSection[] = [
  {
    id: "offer",
    title: "پیشنهاد فروش",
    badge: "در انتظار تولید",
    content: [
      "گزارش هنوز تولید نشده است.",
      "اطلاعات کسب‌وکار ذخیره شده و در فاز بعد برای تولید گزارش استفاده می‌شود.",
    ],
  },
  {
    id: "instagram",
    title: "تحلیل پیج اینستاگرام",
    badge: "در انتظار تولید",
    content: [
      "گزارش هنوز تولید نشده است.",
      "اطلاعات کسب‌وکار ذخیره شده و در فاز بعد برای تولید گزارش استفاده می‌شود.",
    ],
  },
  {
    id: "campaign",
    title: "کمپین ۷ روزه استوری",
    badge: "در انتظار تولید",
    content: [
      "گزارش هنوز تولید نشده است.",
      "اطلاعات کسب‌وکار ذخیره شده و در فاز بعد برای تولید گزارش استفاده می‌شود.",
    ],
  },
  {
    id: "replies",
    title: "اسکریپت پاسخ به مشتری",
    badge: "در انتظار تولید",
    content: [
      "گزارش هنوز تولید نشده است.",
      "اطلاعات کسب‌وکار ذخیره شده و در فاز بعد برای تولید گزارش استفاده می‌شود.",
    ],
  },
  {
    id: "plan",
    title: "برنامه اجرا",
    badge: "در انتظار تولید",
    content: [
      "گزارش هنوز تولید نشده است.",
      "اطلاعات کسب‌وکار ذخیره شده و در فاز بعد برای تولید گزارش استفاده می‌شود.",
    ],
  },
];

const profileFieldGroups: Array<{
  title: string;
  fields: Array<{ name: keyof BusinessProfileFormValues; label: string }>;
}> = [
  {
    title: "اطلاعات کسب‌وکار",
    fields: [
      { name: "businessName", label: "نام کسب‌وکار" },
      { name: "businessType", label: "نوع کسب‌وکار" },
      { name: "niche", label: "حوزه فعالیت" },
      { name: "cityOrMarket", label: "شهر یا بازار هدف" },
      { name: "mainProductOrService", label: "محصول یا خدمت اصلی" },
      { name: "priceRange", label: "بازه قیمت" },
      { name: "currentSalesModel", label: "مدل فروش فعلی" },
    ],
  },
  {
    title: "مشتری و مسئله",
    fields: [
      { name: "targetCustomer", label: "مشتری ایده‌آل" },
      { name: "customerPain", label: "مشکل مشتری" },
      { name: "desiredCustomerOutcome", label: "نتیجه بعد از خرید" },
      { name: "customerObjections", label: "تردیدهای قبل از خرید" },
      { name: "purchaseReason", label: "دلیل خرید از این کسب‌وکار" },
    ],
  },
  {
    title: "پیج اینستاگرام",
    fields: [
      { name: "currentInstagramHandle", label: "آیدی پیج" },
      { name: "currentFollowers", label: "تعداد فالوور تقریبی" },
      { name: "averageViews", label: "میانگین بازدید" },
      { name: "currentBio", label: "متن فعلی بایو" },
      { name: "currentMainProblem", label: "مشکل اصلی پیج" },
      { name: "bestContentSoFar", label: "محتواهای بهتر جواب‌داده" },
      { name: "lowSalesReason", label: "دلیل فروش کم" },
    ],
  },
  {
    title: "اعتمادسازی و لحن",
    fields: [
      { name: "proofAssets", label: "نمونه‌کارها" },
      { name: "testimonials", label: "رضایت مشتری" },
      { name: "beforeAfter", label: "قبل و بعد" },
      { name: "licenses", label: "مجوزها یا مدارک" },
      { name: "previousBrands", label: "برندهای همکار قبلی" },
      { name: "trustAssets", label: "مدارک اعتمادساز" },
      { name: "brandTone", label: "لحن برند" },
      { name: "formality", label: "رسمی یا خودمانی" },
      { name: "simplicity", label: "ساده یا لوکس" },
      { name: "contentTone", label: "آموزشی یا فروش‌محور" },
      { name: "extraNotes", label: "توضیحات تکمیلی" },
    ],
  },
];

export function ReportPageClient({ kitId }: { kitId: string }) {
  const mockKit = useMemo(() => mockKits.find((item) => item.id === kitId), [kitId]);
  const shouldUseMockReport = kitId === "demo-kit" || Boolean(mockKit);
  const [localDraft, setLocalDraft] = useState<LocalDraftKit | null>(null);
  const [hasCheckedLocalDraft, setHasCheckedLocalDraft] = useState(shouldUseMockReport);

  useEffect(() => {
    if (shouldUseMockReport) {
      return;
    }

    setLocalDraft(getLocalDraftKitById(kitId) ?? null);
    setHasCheckedLocalDraft(true);
  }, [kitId, shouldUseMockReport]);

  if (shouldUseMockReport) {
    return <MockReportShell kitId={kitId} />;
  }

  if (!hasCheckedLocalDraft) {
    return (
      <AppShell>
        <section className="card">
          <p className="text-base font-bold text-slate-700">در حال بررسی پیش‌نویس محلی...</p>
        </section>
      </AppShell>
    );
  }

  if (!localDraft) {
    return (
      <AppShell>
        <section className="card">
          <h1 className="text-2xl font-extrabold text-slate-950">کیت محلی پیدا نشد</h1>
          <p className="mt-2 max-w-2xl text-base leading-8 text-slate-600">
            این پیش‌نویس روی همین مرورگر پیدا نشد. ممکن است پاک شده باشد یا لینک مربوط به مرورگر دیگری باشد.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/dashboard/kits" className="btn-secondary w-full sm:w-auto">
              بازگشت به کیت‌ها
            </Link>
            <Link href="/dashboard/new-kit" className="btn-primary w-full sm:w-auto">
              ساخت کیت جدید
            </Link>
          </div>
        </section>
      </AppShell>
    );
  }

  return <LocalDraftReportShell draft={localDraft} />;
}

function MockReportShell({ kitId }: { kitId: string }) {
  const kit = mockKits.find((item) => item.id === kitId) ?? mockKits[0];

  return (
    <AppShell>
      <ReportHeader
        status={statusLabels[kit.status]}
        statusClassName={statusClasses[kit.status]}
        date="۱۴۰۵/۰۳/۰۲"
        title={`گزارش رشد ${kit.businessName}`}
        description="این صفحه با داده نمونه ساخته شده تا ساختار گزارش نهایی، ناوبری بخش‌ها و اکشن‌های اصلی مشخص باشد."
      />
      <ReportLayout sections={reportSections}>
        {reportSections.map((section) => (
          <GeneratedSectionCard key={section.id} section={section} />
        ))}
        <BackToKits />
      </ReportLayout>
    </AppShell>
  );
}

function LocalDraftReportShell({ draft }: { draft: LocalDraftKit }) {
  return (
    <AppShell>
      <ReportHeader
        status="پیش‌نویس"
        statusClassName={statusClasses.draft}
        date={formatPersianDate(draft.kit.createdAt)}
        title={`گزارش رشد ${draft.kit.businessName}`}
        description="این کیت از اطلاعات ذخیره‌شده روی همین مرورگر ساخته شده است. تولید گزارش در فاز بعد فعال می‌شود."
      />
      <ReportLayout sections={localPlaceholderSections}>
        <SavedBusinessProfileCard draft={draft} />
        {localPlaceholderSections.map((section) => (
          <GeneratedSectionCard key={section.id} section={section} />
        ))}
        <BackToKits />
      </ReportLayout>
    </AppShell>
  );
}

function ReportHeader({
  status,
  statusClassName,
  date,
  title,
  description,
}: {
  status: string;
  statusClassName: string;
  date: string;
  title: string;
  description: string;
}) {
  return (
    <header className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <span className={`rounded-full px-3 py-1 text-xs font-bold ${statusClassName}`}>{status}</span>
            <span className="text-sm text-slate-500">تاریخ ساخت: {date}</span>
          </div>
          <h1 className="text-3xl font-extrabold leading-tight text-slate-950">{title}</h1>
          <p className="mt-2 max-w-2xl text-base leading-8 text-slate-600">{description}</p>
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
  );
}

function ReportLayout({
  sections,
  children,
}: {
  sections: MockReportSection[];
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,920px)]">
      <aside className="lg:order-1">
        <ReportNavigation sections={sections} />
      </aside>
      <div className="space-y-6 lg:order-2">{children}</div>
    </div>
  );
}

function SavedBusinessProfileCard({ draft }: { draft: LocalDraftKit }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-report">
      <div className="border-b border-slate-100 pb-5">
        <h2 className="text-2xl font-extrabold leading-tight text-slate-950">اطلاعات ذخیره‌شده</h2>
        <p className="mt-2 text-base leading-8 text-slate-600">
          این اطلاعات از پیش‌نویس محلی خوانده شده و در فاز بعد مبنای تولید گزارش خواهد بود.
        </p>
      </div>
      <div className="mt-6 grid gap-5">
        {profileFieldGroups.map((group) => (
          <div key={group.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-xl font-bold text-slate-950">{group.title}</h3>
            <dl className="mt-4 grid gap-3 md:grid-cols-2">
              {group.fields.map((field) => (
                <div key={field.name} className="rounded-xl border border-slate-200 bg-white p-4">
                  <dt className="text-xs font-bold text-slate-500">{field.label}</dt>
                  <dd className="mt-2 whitespace-pre-wrap text-sm leading-7 text-slate-800">
                    {getProfileValue(field.name, draft.businessProfile[field.name])}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </section>
  );
}

function BackToKits() {
  return (
    <div className="flex justify-start">
      <Link href="/dashboard/kits" className="btn-secondary">
        بازگشت به کیت‌ها
      </Link>
    </div>
  );
}

function getProfileValue(fieldName: keyof BusinessProfileFormValues, value: string | undefined) {
  if (!value) {
    return "وارد نشده";
  }

  if (fieldName === "brandTone") {
    return brandToneLabels[value] ?? value;
  }

  return value;
}

const brandToneLabels: Record<string, string> = {
  professional: "حرفه‌ای",
  friendly: "صمیمی",
  luxury: "لوکس",
  bold: "جسور",
  educational: "آموزشی",
  simple: "ساده",
};

function formatPersianDate(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}
