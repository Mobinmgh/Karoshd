# AGENTS.md

## Project Name

Karoshd (کارشد)

## Required Companion File

This project must also include `DESIGN_SYSTEM.md`.

`AGENTS.md` defines product behavior, architecture, scope, and Codex working rules.

`DESIGN_SYSTEM.md` defines visual language, RTL layout rules, typography, colors, components, spacing, and UI consistency.

Codex must read both files before making product or UI changes.

---

## Product Naming

The app name is **Karoshd** in English and **کارشد** in Persian.

Use **کارشد** in Persian UI copy.

Use **Karoshd** in code comments, technical docs, route naming when needed, and English-facing internal references.

Do not rename the product to generic terms like AI Business Growth Kit, Growth Kit App, or Business AI Tool.

---

## Product Summary

Build a Persian-first AI-powered business growth application for Instagram-based businesses, service providers, freelancers, consultants, creators, and small online sellers.

The product helps users turn a messy business or Instagram page into a clearer sales system.

It should not feel like a generic AI chatbot.

It should feel like a structured business tool that uses AI internally to generate useful outputs.

Core promise:

> تبدیل پیج و کسب‌وکار پراکنده به یک سیستم فروش قابل اجرا

The product must help users create:

1. A stronger business offer
2. An Instagram page audit
3. A 7-day story sales campaign
4. Customer reply scripts
5. A practical action plan

The first version should be an MVP, not a bloated SaaS.

Build the smallest useful product that can produce a paid Karoshd business growth report.

---

## Core Principle

Do not build a toy.

Do not build a generic ChatGPT wrapper.

Do not build a content generator only.

Every feature must answer one of these questions:

- Does this help the business make more money?
- Does this clarify the offer?
- Does this improve trust?
- Does this improve conversion?
- Does this reduce repeated manual work?
- Does this create an output the user would pay for?

If the answer is no, do not build it.

---

## Target Users

Primary users:

- Instagram business owners
- Small service businesses
- Coaches and consultants
- Course sellers
- Freelancers
- Small agencies
- Online shops
- Personal brands
- Local businesses selling through Instagram or WhatsApp

The app must assume users are not technical.

They may not understand marketing deeply.

They need guided structure, not an empty prompt box.

---

## Language and Localization

The product is Persian-first.

All user-facing default copy must be Persian.

Use RTL layout everywhere.

Persian text direction must be correct in:

- Forms
- Inputs
- Textareas
- Buttons
- Cards
- Reports
- PDF exports
- Navigation
- Empty states
- Error messages
- Generated outputs

Do not mix LTR layout into Persian UI.

English technical names may exist in code only.

---

## Product Tone

The app should be direct, practical, and business-focused.

Avoid hype.

Avoid fake motivational language.

Avoid vague words like:

- تحول
- معجزه
- رشد انفجاری
- هوش مصنوعی جادویی
- درآمد میلیونی تضمینی

Use clear, useful language.

Good examples:

- «پیشنهاد فروش شما هنوز واضح نیست.»
- «مخاطب باید در ۵ ثانیه بفهمد دقیقاً چه چیزی می‌فروشید.»
- «این بخش برای کاهش تردید خریدار طراحی شده.»
- «اینجا باید مدرک، نمونه‌کار یا رضایت مشتری اضافه شود.»

---

## MVP Scope

Build Version 1 with these modules only:

1. Business Profile Setup
2. Offer Builder
3. Instagram Page Audit
4. Story Sales Campaign Generator
5. Sales Reply Script Generator
6. Final Growth Kit Report

Do not build:

- Team management
- Complex analytics
- Payment gateway
- Public marketplace
- Multi-language support
- Advanced admin panel
- Social media API integration
- Direct Instagram login
- Auto-posting
- Complex CRM
- Mobile app
- Browser extension

Those are later.

---

## Recommended Stack

Use this stack unless the existing project already uses something else:

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- React Hook Form
- Zod
- Supabase for database and auth
- Supabase Storage for report files if needed
- Server Actions or API routes for backend operations
- OpenAI-compatible AI abstraction layer for generation
- React Markdown for rendering generated output
- html2pdf, Playwright, or server-side PDF export if needed

If AI provider is not configured yet, create a clean abstraction so the provider can be swapped later.

Do not hardcode provider logic deep inside UI components.

---

## Environment Variables

Use environment variables for all secrets.

Expected variables:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

AI_PROVIDER=openai
AI_API_KEY=
AI_MODEL=
```

Never commit secrets.

Never expose server-side API keys to the client.

---

## App Routes

Use this route structure:

```txt
/
  Landing page

/auth/login
  Login page

/auth/register
  Register page

/dashboard
  User dashboard

/dashboard/new-kit
  Create new Karoshd Growth Kit

/dashboard/kits
  List previous kits

/dashboard/kits/[kitId]
  View generated kit

/dashboard/kits/[kitId]/edit
  Edit business profile and regenerate sections

/dashboard/settings
  User settings
```

If auth is not ready yet, allow local mock mode for development, but structure the app so auth can be added cleanly.

---

## Main User Flow

The primary flow:

1. User lands on the homepage.
2. User understands the product in under 10 seconds.
3. User creates a new kit.
4. User fills a guided business questionnaire.
5. App validates inputs.
6. User reviews entered business data.
7. User clicks generate.
8. App generates structured sections.
9. User sees a full Persian Karoshd business growth report.
10. User can copy sections, download PDF, or regenerate specific sections.

Do not force users into a blank chat interface.

Use guided forms.

---

## Core Data Model

Use this conceptual data model.

### User

```ts
type User = {
  id: string
  email: string
  fullName?: string
  createdAt: string
}
```

### KaroshdKit

```ts
type KaroshdKit = {
  id: string
  userId: string
  title: string
  businessName: string
  businessType: string
  niche: string
  status: "draft" | "generating" | "completed" | "failed"
  createdAt: string
  updatedAt: string
}
```

### BusinessProfile

```ts
type BusinessProfile = {
  id: string
  kitId: string

  businessName: string
  businessType: string
  cityOrMarket?: string

  mainProductOrService: string
  priceRange?: string
  targetCustomer: string
  customerPain: string
  desiredCustomerOutcome: string

  currentInstagramHandle?: string
  currentBio?: string
  currentFollowers?: string
  averageViews?: string
  currentMainProblem: string

  proofAssets?: string
  testimonials?: string
  portfolioLinks?: string
  competitors?: string

  brandTone: "professional" | "friendly" | "luxury" | "bold" | "educational" | "simple"
  extraNotes?: string
}
```

### GeneratedSection

```ts
type GeneratedSection = {
  id: string
  kitId: string
  type:
    | "offer"
    | "instagram_audit"
    | "story_campaign"
    | "sales_replies"
    | "action_plan"
  title: string
  contentMarkdown: string
  createdAt: string
  updatedAt: string
}
```

---

## Questionnaire Fields

The app must ask for these fields.

### Basic Business Info

- نام کسب‌وکار
- نوع کسب‌وکار
- حوزه فعالیت
- شهر یا بازار هدف
- محصول یا خدمت اصلی
- بازه قیمت
- مدل فروش فعلی

### Customer

- مشتری ایده‌آل کیست؟
- مشتری چه مشکلی دارد؟
- مشتری بعد از خرید باید به چه نتیجه‌ای برسد؟
- مشتری قبل از خرید چه تردیدهایی دارد؟
- چرا باید از این کسب‌وکار خرید کند؟

### Instagram

- آیدی پیج
- تعداد فالوور تقریبی
- میانگین بازدید ریلز یا استوری
- متن فعلی بایو
- مشکل اصلی پیج
- چه نوع محتواهایی تا الان بهتر جواب داده‌اند؟
- چه چیزی باعث شده فروش کم باشد؟

### Proof and Trust

- نمونه‌کارها
- رضایت مشتری
- قبل و بعد
- مجوزها یا مدارک
- برندهایی که قبلاً همکاری کرده‌اند
- هر نوع مدرک اعتمادساز

### Tone

- لحن برند
- رسمی یا خودمانی
- ساده یا لوکس
- آموزشی یا فروش‌محور

---

## Module 1: Offer Builder

Goal:

Create a clear offer from messy business input.

Output must include:

1. Current offer diagnosis
2. Clear one-sentence offer
3. Stronger offer version
4. Target customer
5. Main promise
6. Pain points
7. Objections
8. Trust-building elements
9. CTA suggestions
10. Pricing/package suggestions if possible

Persian output structure:

```md
## تشخیص پیشنهاد فعلی

...

## پیشنهاد فروش واضح‌تر

...

## نسخه قوی‌تر پیشنهاد

...

## مشتری هدف

...

## وعده اصلی

...

## تردیدهای احتمالی مشتری

...

## عناصر اعتمادساز

...

## CTA پیشنهادی

...
```

Rules:

- Be practical.
- Do not promise unrealistic results.
- Do not invent fake proof.
- If proof is missing, explicitly say what proof should be collected.
- If pricing data is weak, suggest package structure, not exact guaranteed prices.

---

## Module 2: Instagram Page Audit

Goal:

Audit the business's Instagram presence based on user-provided data.

No Instagram API is required for MVP.

Output must include:

1. Bio audit
2. Profile clarity score
3. Offer clarity
4. Trust issues
5. Content direction problems
6. Highlights recommendations
7. CTA recommendations
8. Quick fixes
9. 7-day improvement plan

Persian output structure:

```md
## تشخیص کلی پیج

...

## ایرادهای اصلی بایو

...

## وضوح پیشنهاد فروش

...

## مشکل اعتمادسازی

...

## پیشنهاد برای هایلایت‌ها

...

## اصلاحات سریع

...

## برنامه ۷ روزه بهبود پیج

...
```

Rules:

- Do not claim to have analyzed the real Instagram page unless API/scraping exists.
- Always say analysis is based on user-provided information.
- Be direct but not insulting.
- Focus on conversion, trust, and clarity.

---

## Module 3: Story Sales Campaign Generator

Goal:

Generate a 7-day Instagram story campaign designed to sell one offer.

Each day should include:

- Goal
- Story frames
- Exact Persian story text
- Interaction element
- CTA
- Objection handled

Output format:

```md
## کمپین ۷ روزه استوری فروش

### روز ۱: آگاه‌سازی مشکل

هدف:
...

استوری‌ها:
1. ...
2. ...
3. ...

تعامل:
...

CTA:
...

اعتراض ذهنی که پاسخ داده می‌شود:
...
```

Rules:

- Stories must be short enough for Instagram.
- Persian text must be natural.
- Avoid generic motivational content.
- Use polls, question boxes, sliders, before/after, testimonials, FAQs.
- Do not create fake scarcity unless the business actually has scarcity.
- Do not invent fake testimonials.

---

## Module 4: Sales Reply Script Generator

Goal:

Generate ready-to-use replies for common customer messages.

Required categories:

1. Price request
2. “It is expensive”
3. “I need to think”
4. “Do you have discount?”
5. “Why should I buy from you?”
6. “Send samples”
7. “How does it work?”
8. “Is it guaranteed?”
9. “I bought from someone else before and had a bad experience”
10. Follow-up after no response

Each reply category must include:

- Short reply
- Professional reply
- More persuasive reply

Output format:

```md
## اسکریپت پاسخ به مشتری

### وقتی مشتری قیمت می‌پرسد

پاسخ کوتاه:
...

پاسخ حرفه‌ای:
...

پاسخ متقاعدکننده‌تر:
...
```

Rules:

- Replies must sound human.
- Avoid manipulative pressure.
- Avoid aggressive sales language.
- Keep them usable in Instagram DM or WhatsApp.
- Mention missing business details where needed.

---

## Module 5: Action Plan

Goal:

Turn the report into execution.

Output:

1. Top 5 problems
2. Top 5 fixes
3. 7-day action plan
4. 30-day action plan
5. Metrics to track
6. What not to waste time on

Output format:

```md
## اولویت‌های اصلی

...

## ۵ اقدام فوری

...

## برنامه ۷ روزه

...

## برنامه ۳۰ روزه

...

## شاخص‌هایی که باید اندازه‌گیری شوند

...

## کارهایی که فعلاً نباید انجام شوند

...
```

Rules:

- Be specific.
- Avoid huge abstract strategy.
- Tell the user what to do next.
- Make it executable by a small business owner.

---

## AI Architecture

All AI generation must go through a single server-side service.

Suggested file:

```txt
src/lib/ai/generate.ts
```

Example interface:

```ts
export type GenerateBusinessSectionInput = {
  sectionType:
    | "offer"
    | "instagram_audit"
    | "story_campaign"
    | "sales_replies"
    | "action_plan"
  businessProfile: BusinessProfile
}

export async function generateBusinessSection(
  input: GenerateBusinessSectionInput
): Promise<string> {
  // Provider-specific implementation here.
}
```

Do not call AI directly inside React components.

Do not expose AI API keys to the browser.

Use structured system prompts per module.

Save generated output to database.

Allow regeneration per section.

---

## Prompting Rules for AI Generation

Each generation prompt must include:

1. Role
2. Business profile data
3. Output format
4. Hard constraints
5. Persian language requirement
6. No fake proof rule
7. Practical execution rule

Global AI behavior:

- Answer only in Persian for generated report sections.
- Use RTL-compatible markdown.
- Do not invent facts.
- If input is weak, say what is missing.
- Prefer direct, practical business language.
- Avoid generic filler.
- Avoid motivational fluff.
- Avoid unrealistic income promises.
- Avoid illegal, medical, financial, or legal claims.

---

## UI Design Requirements

Use a clean dashboard layout.

Visual style:

- White or very light background
- High contrast Persian typography
- Card-based sections
- Clear spacing
- Large readable form labels
- Sticky progress indicator on long forms
- Simple stepper for questionnaire
- Primary CTA should be obvious
- Avoid visual clutter

RTL rules:

- Use `dir="rtl"` on Persian pages.
- Use `text-right` for Persian text.
- Form labels should sit above inputs.
- Icons should not imply LTR flow unless mirrored.
- Progress steps should move right to left.
- Tables should align Persian content to the right.
- Copy buttons should still be easy to access.

---

## UX Requirements

The user must never face a blank page with no guidance.

Use:

- Helpful placeholders
- Examples under complex fields
- Progress indicator
- Save draft
- Clear validation errors
- Preview before generation
- Copy button for generated sections
- Regenerate section button
- Download report button

For long generation, show progress states:

- در حال تحلیل اطلاعات کسب‌وکار
- در حال ساخت پیشنهاد فروش
- در حال بررسی پیج اینستاگرام
- در حال ساخت کمپین استوری
- در حال آماده‌سازی گزارش نهایی

---

## Landing Page Requirements

Landing page sections:

1. Hero
2. Problem
3. Product explanation
4. What the kit includes
5. Who it is for
6. Sample output preview
7. Pricing placeholder
8. FAQ
9. CTA

Hero copy:

```txt
پیج اینستاگرام داری، ولی سیستم فروش نداری؟

این ابزار اطلاعات کسب‌وکارت را می‌گیرد و برایت یک کیت کامل رشد می‌سازد:
پیشنهاد فروش، تحلیل پیج، کمپین استوری، اسکریپت پاسخ به مشتری و برنامه اجرا.
```

Primary CTA:

```txt
ساخت کیت رشد کسب‌وکار
```

Secondary CTA:

```txt
دیدن نمونه خروجی
```

---

## Pricing Page Placeholder

Do not implement payment in MVP unless explicitly requested.

Show pricing cards as static UI:

### شروعی

- مناسب تست اولیه
- یک کیت رشد
- خروجی قابل کپی
- دانلود PDF

### حرفه‌ای

- چند کیت رشد
- امکان ویرایش و بازتولید بخش‌ها
- ذخیره گزارش‌ها

### آژانس

- چند مشتری
- خروجی قابل ارائه به کارفرما
- قالب گزارش حرفه‌ای

Buttons can say:

```txt
فعلاً برای نسخه آزمایشی فعال نیست
```

---

## Report Page Requirements

The report page must show:

- Business name
- Generated date
- Section navigation
- Offer section
- Instagram audit section
- Story campaign section
- Sales replies section
- Action plan section
- Copy buttons
- Regenerate buttons
- Download PDF button

Make generated markdown readable.

Use strong section headings.

Avoid dense paragraphs.

---

## Validation Rules

Use Zod for form validation.

Required fields:

- businessName
- businessType
- niche
- mainProductOrService
- targetCustomer
- customerPain
- desiredCustomerOutcome
- currentMainProblem
- brandTone

Optional fields should not block generation.

But missing optional fields should be acknowledged in generated output where relevant.

---

## Error Handling

Handle these cases:

- AI provider missing
- AI generation failed
- Database save failed
- User submitted incomplete form
- Network failure
- Unauthorized user
- Kit not found

Error messages must be Persian and useful.

Bad:

```txt
Something went wrong.
```

Good:

```txt
گزارش ساخته نشد. اتصال به سرویس تولید محتوا مشکل دارد. چند دقیقه بعد دوباره امتحان کنید.
```

---

## Security Rules

- Never expose API keys on the client.
- Validate all user input server-side.
- Use row-level security if using Supabase.
- Users must only access their own kits.
- Sanitize rendered markdown if needed.
- Do not allow arbitrary script injection through generated content.
- Rate-limit generation endpoints if possible.

---

## Accessibility

- Use semantic HTML.
- Buttons must be keyboard accessible.
- Inputs must have labels.
- Error messages must be connected to fields.
- Contrast must be readable.
- Do not rely only on color to show state.

---

## Development Behavior for Codex

When working on this project:

1. Read this AGENTS.md first.
2. Inspect the existing codebase before editing.
3. Do not overwrite unrelated files.
4. Make small, coherent changes.
5. Prefer complete working features over half-built abstractions.
6. Keep TypeScript strict.
7. Avoid `any` unless absolutely necessary.
8. Create reusable components only when repetition is real.
9. Do not prematurely optimize.
10. Do not add dependencies unless needed.
11. After changes, run lint/typecheck/build if scripts exist.
12. If tests exist, run them.
13. If something cannot be completed, explain exactly what is missing.

---

## File Organization

Recommended structure:

```txt
src/
  app/
    page.tsx
    auth/
    dashboard/
      page.tsx
      new-kit/
        page.tsx
      kits/
        page.tsx
        [kitId]/
          page.tsx
          edit/
            page.tsx

  components/
    layout/
    forms/
    kit/
    ui/

  lib/
    ai/
      generate.ts
      prompts.ts
    db/
      supabase.ts
    validators/
      business-profile.ts
    utils/
      format-date.ts

  types/
    business-kit.ts
```

---

## Components to Create

Core components:

```txt
BusinessProfileForm
BusinessProfileStep
FormProgress
KitCard
GeneratedSectionCard
CopyButton
RegenerateButton
ReportNavigation
MarkdownReport
EmptyState
LoadingGenerationState
```

---

## Business Profile Form UX

Use multi-step form.

Recommended steps:

1. اطلاعات کسب‌وکار
2. مشتری و مسئله
3. پیج اینستاگرام
4. اعتمادسازی
5. لحن و تنظیمات
6. مرور نهایی

Each step should have:

- Clear title
- Short explanation
- 3 to 7 fields max
- Next button
- Previous button
- Save draft if possible

Do not put 40 fields on one screen.

---

## Database Schema Suggestion

If using Supabase SQL, use this as a starting point:

```sql
create table karoshd_kits (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  business_name text not null,
  business_type text not null,
  niche text not null,
  status text not null default 'draft',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table karoshd_business_profiles (
  id uuid primary key default gen_random_uuid(),
  kit_id uuid not null references karoshd_kits(id) on delete cascade,

  business_name text not null,
  business_type text not null,
  city_or_market text,

  main_product_or_service text not null,
  price_range text,
  target_customer text not null,
  customer_pain text not null,
  desired_customer_outcome text not null,

  current_instagram_handle text,
  current_bio text,
  current_followers text,
  average_views text,
  current_main_problem text not null,

  proof_assets text,
  testimonials text,
  portfolio_links text,
  competitors text,

  brand_tone text not null,
  extra_notes text,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table karoshd_generated_sections (
  id uuid primary key default gen_random_uuid(),
  kit_id uuid not null references karoshd_kits(id) on delete cascade,
  type text not null,
  title text not null,
  content_markdown text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
```

Add RLS policies before production.

---

## Sample System Prompt for Offer Builder

Use this as a base inside `src/lib/ai/prompts.ts`.

```txt
You are a Persian business strategist specialized in small businesses, Instagram-based businesses, service businesses, and offer design.

Your task is to create a practical offer diagnosis and improved offer for the business below.

Rules:
- Output only in Persian.
- Use RTL-friendly markdown.
- Be direct and practical.
- Do not use motivational fluff.
- Do not invent fake proof, fake results, fake testimonials, or fake numbers.
- If important information is missing, clearly say what is missing.
- Focus on clarity, trust, conversion, and execution.
- Do not make illegal, medical, financial, or guaranteed income claims.

Business data:
{{businessProfile}}

Required output format:
## تشخیص پیشنهاد فعلی
...
## پیشنهاد فروش واضح‌تر
...
## نسخه قوی‌تر پیشنهاد
...
## مشتری هدف
...
## وعده اصلی
...
## تردیدهای احتمالی مشتری
...
## عناصر اعتمادساز
...
## CTA پیشنهادی
...
```

---

## Sample System Prompt for Instagram Audit

```txt
You are a Persian Instagram business auditor.

Analyze the business based only on the user-provided information. Do not claim that you inspected the real Instagram page.

Rules:
- Output only in Persian.
- Use RTL-friendly markdown.
- Be clear, practical, and conversion-focused.
- Do not insult the user.
- Do not invent analytics.
- Focus on bio clarity, offer clarity, trust, highlights, content direction, and CTA.

Business data:
{{businessProfile}}

Required output format:
## تشخیص کلی پیج
...
## ایرادهای اصلی بایو
...
## وضوح پیشنهاد فروش
...
## مشکل اعتمادسازی
...
## پیشنهاد برای هایلایت‌ها
...
## اصلاحات سریع
...
## برنامه ۷ روزه بهبود پیج
...
```

---

## Sample System Prompt for Story Campaign

```txt
You are a Persian Instagram sales campaign strategist.

Create a 7-day story sales campaign for the business below.

Rules:
- Output only in Persian.
- Stories must be short enough to fit Instagram story frames.
- Do not invent fake testimonials.
- Do not create fake scarcity.
- Use polls, question boxes, FAQs, proof, before/after, objection handling, and clear CTAs when relevant.
- Make the campaign practical and usable.

Business data:
{{businessProfile}}

Required output format:
## کمپین ۷ روزه استوری فروش

### روز ۱: ...
هدف:
...
استوری‌ها:
1. ...
2. ...
3. ...
تعامل:
...
CTA:
...
اعتراض ذهنی که پاسخ داده می‌شود:
...
```

---

## Sample System Prompt for Sales Replies

```txt
You are a Persian sales messaging specialist for Instagram DM and WhatsApp.

Create ready-to-use customer reply scripts for the business below.

Rules:
- Output only in Persian.
- Replies must sound human and natural.
- Avoid manipulation, pressure, fake scarcity, and unrealistic claims.
- Create short, professional, and persuasive versions for each category.
- Make replies usable in Instagram DM or WhatsApp.

Business data:
{{businessProfile}}

Required categories:
1. Price request
2. It is expensive
3. I need to think
4. Do you have discount?
5. Why should I buy from you?
6. Send samples
7. How does it work?
8. Is it guaranteed?
9. I had a bad experience before
10. Follow-up after no response

Required output format:
## اسکریپت پاسخ به مشتری

### وقتی مشتری قیمت می‌پرسد
پاسخ کوتاه:
...
پاسخ حرفه‌ای:
...
پاسخ متقاعدکننده‌تر:
...
```

---

## Sample System Prompt for Action Plan

```txt
You are a Persian small-business execution consultant.

Turn the business diagnosis into a practical execution plan.

Rules:
- Output only in Persian.
- Be specific and executable.
- Prioritize actions that improve clarity, trust, conversion, and sales.
- Avoid abstract advice.
- Avoid motivational fluff.
- If inputs are weak, include actions for collecting missing information.

Business data:
{{businessProfile}}

Required output format:
## اولویت‌های اصلی
...
## ۵ اقدام فوری
...
## برنامه ۷ روزه
...
## برنامه ۳۰ روزه
...
## شاخص‌هایی که باید اندازه‌گیری شوند
...
## کارهایی که فعلاً نباید انجام شوند
...
```

---

## MVP Acceptance Criteria

The MVP is acceptable when:

- User can create a business profile.
- User can generate all five report sections.
- Output is Persian.
- UI is RTL.
- Generated sections are saved.
- User can view previous kits.
- User can copy generated sections.
- User can regenerate a section.
- User can download or print report.
- App does not expose AI secrets.
- App builds successfully.
- Basic empty/error/loading states exist.

---

## Build Order

Follow this order.

### Phase 1: Static Product Shell

- Landing page
- Dashboard shell
- Kit list page
- New kit form UI
- Report page mock data

### Phase 2: Data and Validation

- Types
- Zod schemas
- Local mocked storage or Supabase tables
- Create kit
- Save profile
- Show saved kit

### Phase 3: AI Generation

- AI service abstraction
- Prompt templates
- Generate one section
- Save generated section
- Add regenerate button

### Phase 4: Full Report

- Generate all sections
- Loading states
- Error handling
- Markdown rendering
- Copy buttons

### Phase 5: Export and Polish

- Print/PDF export
- Better mobile layout
- Empty states
- Persian UX copy
- Landing page polish

---

## Non-Negotiables

- Persian-first.
- RTL-first.
- No generic chatbot interface.
- No fake business claims.
- No fake proof.
- No bloated SaaS features in MVP.
- No client-side AI API calls.
- No overengineering.
- No random redesigns that break readability.
- No LTR Persian UI.

---

## How to Ask Codex to Work

Use specific tasks.

Good:

```txt
Read AGENTS.md. Build the multi-step BusinessProfileForm using React Hook Form and Zod. Keep all UI Persian and RTL. Do not add AI generation yet.
```

Good:

```txt
Read AGENTS.md. Implement the AI service abstraction in src/lib/ai/generate.ts and add prompt templates in src/lib/ai/prompts.ts. Do not call AI from client components.
```

Good:

```txt
Read AGENTS.md. Create the report page UI using mocked generated sections. Include copy buttons, section navigation, and Persian RTL typography.
```

Bad:

```txt
Build the whole app.
```

Bad:

```txt
Make it better.
```

Bad:

```txt
Add AI.
```

---

## Final Reminder

This product should not look like a demo.

It should look like a serious business tool.

The MVP does not need many features.

It needs one strong outcome:

A business owner fills a guided form and receives a useful Persian Karoshd Growth Kit they would actually pay for.
