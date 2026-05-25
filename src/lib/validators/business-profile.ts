import { z } from "zod";

const requiredText = (message: string) => z.string().trim().min(1, message);
const optionalText = z.string().trim().optional();

export const businessProfileSchema = z.object({
  businessName: requiredText("نام کسب‌وکار را وارد کن."),
  businessType: requiredText("نوع کسب‌وکار را وارد کن."),
  niche: requiredText("حوزه فعالیت را وارد کن."),
  cityOrMarket: optionalText,
  mainProductOrService: requiredText("محصول یا خدمت اصلی را وارد کن."),
  priceRange: optionalText,
  currentSalesModel: optionalText,

  targetCustomer: requiredText("مشتری ایده‌آل را مشخص کن."),
  customerPain: requiredText("مشکل اصلی مشتری را وارد کن."),
  desiredCustomerOutcome: requiredText("نتیجه مورد انتظار مشتری را وارد کن."),
  customerObjections: optionalText,
  purchaseReason: optionalText,

  currentInstagramHandle: optionalText,
  currentFollowers: optionalText,
  averageViews: optionalText,
  currentBio: optionalText,
  currentMainProblem: requiredText("مشکل اصلی پیج را وارد کن."),
  bestContentSoFar: optionalText,
  lowSalesReason: optionalText,

  proofAssets: optionalText,
  testimonials: optionalText,
  beforeAfter: optionalText,
  licenses: optionalText,
  previousBrands: optionalText,
  trustAssets: optionalText,

  brandTone: z.enum(["professional", "friendly", "luxury", "bold", "educational", "simple"], {
    message: "لحن برند را انتخاب کن.",
  }),
  formality: optionalText,
  simplicity: optionalText,
  contentTone: optionalText,
  extraNotes: optionalText,
});

export type BusinessProfileFormValues = z.infer<typeof businessProfileSchema>;

export const businessProfileDefaultValues: BusinessProfileFormValues = {
  businessName: "",
  businessType: "",
  niche: "",
  cityOrMarket: "",
  mainProductOrService: "",
  priceRange: "",
  currentSalesModel: "",
  targetCustomer: "",
  customerPain: "",
  desiredCustomerOutcome: "",
  customerObjections: "",
  purchaseReason: "",
  currentInstagramHandle: "",
  currentFollowers: "",
  averageViews: "",
  currentBio: "",
  currentMainProblem: "",
  bestContentSoFar: "",
  lowSalesReason: "",
  proofAssets: "",
  testimonials: "",
  beforeAfter: "",
  licenses: "",
  previousBrands: "",
  trustAssets: "",
  brandTone: "professional",
  formality: "",
  simplicity: "",
  contentTone: "",
  extraNotes: "",
};
