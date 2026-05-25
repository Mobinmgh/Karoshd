import { AppShell } from "@/components/layout/AppShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { BusinessProfileForm } from "@/components/forms/BusinessProfileForm";

export default function NewKitPage() {
  return (
    <AppShell>
      <PageHeader
        title="ساخت کیت رشد جدید"
        description="اطلاعات کسب‌وکارت را مرحله‌به‌مرحله وارد کن. در این فاز فرم فقط سمت کاربر کار می‌کند و چیزی ذخیره یا تولید نمی‌شود."
      />
      <BusinessProfileForm />
    </AppShell>
  );
}
