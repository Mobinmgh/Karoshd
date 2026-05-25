import type { MockReportSection } from "@/lib/mock-data";

export function GeneratedSectionCard({ section }: { section: MockReportSection }) {
  return (
    <section id={section.id} className="scroll-mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-report">
      <div className="flex flex-col gap-3 border-b border-slate-100 pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-extrabold leading-tight text-slate-950">{section.title}</h2>
          <span className="mt-3 inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">
            {section.badge}
          </span>
        </div>
        <div className="flex gap-2">
          <button type="button" className="btn-ghost">
            کپی متن
          </button>
          <button type="button" className="btn-secondary">
            تولید دوباره
          </button>
        </div>
      </div>
      <div className="mt-6 space-y-4 text-base leading-9 text-slate-700">
        {section.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
