import { ReportPageClient } from "@/components/kit/ReportPageClient";

export default function ReportPage({ params }: { params: { kitId: string } }) {
  return <ReportPageClient kitId={params.kitId} />;
}
