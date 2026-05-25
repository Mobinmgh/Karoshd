import type { BusinessProfile, KaroshdKit } from "@/types/business-kit";
import type { BusinessProfileFormValues, BusinessProfileSubmitValues } from "@/lib/validators/business-profile";

const STORAGE_KEY = "karoshd.localDraftKits";
const LOCAL_USER_ID = "local-demo-user";

type LocalDraftBusinessProfile = Partial<BusinessProfileFormValues> & {
  id: string;
  kitId: string;
  createdAt: string;
  updatedAt: string;
};

export type LocalDraftKit = {
  kit: KaroshdKit;
  businessProfile: BusinessProfile | LocalDraftBusinessProfile;
};

export function saveLocalDraftKit(values: Partial<BusinessProfileFormValues> | BusinessProfileSubmitValues): LocalDraftKit {
  const now = new Date().toISOString();
  const kitId = createLocalId("kit");
  const profileId = createLocalId("profile");
  const businessName = normalizeDraftTitle(values.businessName, "پیش‌نویس بدون نام");
  const businessType = normalizeDraftTitle(values.businessType, "نوع کسب‌وکار وارد نشده");
  const niche = normalizeDraftTitle(values.niche, "حوزه فعالیت وارد نشده");

  const kit: KaroshdKit = {
    id: kitId,
    userId: LOCAL_USER_ID,
    title: `کیت رشد ${businessName}`,
    businessName,
    businessType,
    niche,
    status: "draft",
    createdAt: now,
    updatedAt: now,
  };

  const businessProfile: LocalDraftBusinessProfile = {
    id: profileId,
    kitId,
    ...values,
    createdAt: now,
    updatedAt: now,
  };

  const draftKit = { kit, businessProfile };
  const existingDrafts = readLocalDraftKits();
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify([draftKit, ...existingDrafts]));

  return draftKit;
}

export function readLocalDraftKits(): LocalDraftKit[] {
  if (typeof window === "undefined") {
    return [];
  }

  const rawValue = window.localStorage.getItem(STORAGE_KEY);
  if (!rawValue) {
    return [];
  }

  try {
    const parsedValue: unknown = JSON.parse(rawValue);
    return Array.isArray(parsedValue) ? parsedValue.filter(isLocalDraftKit) : [];
  } catch {
    return [];
  }
}

function createLocalId(prefix: string) {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

function normalizeDraftTitle(value: string | undefined, fallback: string) {
  const trimmedValue = value?.trim();
  return trimmedValue ? trimmedValue : fallback;
}

function isLocalDraftKit(value: unknown): value is LocalDraftKit {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Partial<LocalDraftKit>;
  return Boolean(
    candidate.kit &&
      candidate.businessProfile &&
      typeof candidate.kit.id === "string" &&
      typeof candidate.businessProfile.id === "string",
  );
}
