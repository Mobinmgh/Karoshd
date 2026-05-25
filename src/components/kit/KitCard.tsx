import Link from "next/link";
import { statusClasses, statusLabels, type MockKit } from "@/lib/mock-data";

export function KitCard({ kit }: { kit: MockKit }) {
  return (
    <article className="card">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-950">{kit.businessName}</h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">{kit.businessType}</p>
          <p className="text-sm leading-7 text-slate-500">حوزه: {kit.niche}</p>
        </div>
        <span className={`w-fit rounded-full px-3 py-1 text-xs font-bold ${statusClasses[kit.status]}`}>
          {statusLabels[kit.status]}
        </span>
      </div>
      <div className="mt-6 flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-sm text-slate-500">آخرین ویرایش: {kit.updatedAt}</span>
        <Link href={`/dashboard/kits/${kit.id}`} className="btn-secondary w-full sm:w-auto">
          مشاهده گزارش
        </Link>
      </div>
    </article>
  );
}
