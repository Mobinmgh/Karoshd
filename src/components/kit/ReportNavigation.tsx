import type { MockReportSection } from "@/lib/mock-data";

export function ReportNavigation({ sections }: { sections: MockReportSection[] }) {
  return (
    <nav className="sticky top-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
      <p className="mb-3 text-sm font-bold text-slate-950">بخش‌های گزارش</p>
      <div className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="whitespace-nowrap rounded-xl px-3 py-2 text-sm font-bold text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
          >
            {section.title}
          </a>
        ))}
      </div>
    </nav>
  );
}
