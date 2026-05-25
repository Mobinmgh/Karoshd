import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { KitCard } from "@/components/kit/KitCard";
import { LocalDraftKits } from "@/components/kit/LocalDraftKits";
import { EmptyState } from "@/components/ui/EmptyState";
import { mockKits } from "@/lib/mock-data";

export default function KitsPage() {
  return (
    <AppShell>
      <PageHeader
        title="کیت‌های رشد"
        description="گزارش‌های ساخته‌شده برای کسب‌وکارهای مختلف را اینجا می‌بینی."
        action={
          <Link href="/dashboard/new-kit" className="btn-primary w-full sm:w-auto">
            ساخت کیت جدید
          </Link>
        }
      />
      {mockKits.length > 0 ? (
        <div className="grid gap-6">
          <LocalDraftKits />
          {mockKits.map((kit) => (
            <KitCard key={kit.id} kit={kit} />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </AppShell>
  );
}
