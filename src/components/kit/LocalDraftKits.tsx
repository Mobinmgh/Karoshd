"use client";

import { useEffect, useState } from "react";
import { KitCard, type KitCardData } from "@/components/kit/KitCard";
import { clearLocalDraftKits, readLocalDraftKits } from "@/lib/storage/local-drafts";
import type { LocalDraftKit } from "@/lib/storage/local-drafts";

export function LocalDraftKits({ compact = false }: { compact?: boolean }) {
  const [drafts, setDrafts] = useState<LocalDraftKit[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setDrafts(readLocalDraftKits());
  }, []);

  if (drafts.length === 0 && !message) {
    return null;
  }

  function clearDrafts() {
    const confirmed = window.confirm("پیش‌نویس‌های ذخیره‌شده روی همین مرورگر پاک شوند؟");

    if (!confirmed) {
      return;
    }

    clearLocalDraftKits();
    setDrafts([]);
    setMessage("پیش‌نویس‌های محلی پاک شدند.");
  }

  const visibleDrafts = compact ? drafts.slice(0, 2) : drafts;

  return (
    <section className="grid gap-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-950">پیش‌نویس‌های محلی</h2>
          <p className="mt-1 text-sm leading-7 text-slate-600">این کیت‌ها فقط روی همین مرورگر ذخیره شده‌اند.</p>
        </div>
        <button type="button" className="btn-secondary w-full sm:w-auto" onClick={clearDrafts}>
          پاک‌کردن پیش‌نویس‌های محلی
        </button>
      </div>
      {message ? (
        <p className="rounded-xl bg-green-100 px-4 py-3 text-sm font-bold text-green-700">{message}</p>
      ) : null}
      {visibleDrafts.length > 0 ? (
        <div className="grid gap-4">
          {visibleDrafts.map((draft) => (
            <KitCard
              key={draft.kit.id}
              kit={toKitCardData(draft)}
              label="ذخیره‌شده روی همین مرورگر"
              href="/dashboard/kits/demo-kit"
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}

function toKitCardData(draft: LocalDraftKit): KitCardData {
  return {
    id: draft.kit.id,
    businessName: draft.kit.businessName,
    businessType: draft.kit.businessType,
    niche: draft.kit.niche,
    status: draft.kit.status,
    updatedAt: formatPersianDate(draft.kit.updatedAt),
  };
}

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
