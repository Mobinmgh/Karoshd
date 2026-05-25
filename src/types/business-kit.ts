export type KitStatus = "draft" | "generating" | "completed" | "failed";

export type GeneratedSectionType =
  | "offer"
  | "instagram_audit"
  | "story_campaign"
  | "sales_replies"
  | "action_plan";

export type BrandTone = "professional" | "friendly" | "luxury" | "bold" | "educational" | "simple";

export type KaroshdKit = {
  id: string;
  userId: string;
  title: string;
  businessName: string;
  businessType: string;
  niche: string;
  status: KitStatus;
  createdAt: string;
  updatedAt: string;
};

export type BusinessProfile = {
  id: string;
  kitId: string;

  businessName: string;
  businessType: string;
  niche: string;
  cityOrMarket?: string;

  mainProductOrService: string;
  priceRange?: string;
  currentSalesModel?: string;

  targetCustomer: string;
  customerPain: string;
  desiredCustomerOutcome: string;
  customerObjections?: string;
  purchaseReason?: string;

  currentInstagramHandle?: string;
  currentBio?: string;
  currentFollowers?: string;
  averageViews?: string;
  currentMainProblem: string;
  bestContentSoFar?: string;
  lowSalesReason?: string;

  proofAssets?: string;
  testimonials?: string;
  beforeAfter?: string;
  licenses?: string;
  previousBrands?: string;
  trustAssets?: string;
  portfolioLinks?: string;
  competitors?: string;

  brandTone: BrandTone;
  formality?: string;
  simplicity?: string;
  contentTone?: string;
  extraNotes?: string;

  createdAt: string;
  updatedAt: string;
};

export type GeneratedSection = {
  id: string;
  kitId: string;
  type: GeneratedSectionType;
  title: string;
  contentMarkdown: string;
  createdAt: string;
  updatedAt: string;
};
