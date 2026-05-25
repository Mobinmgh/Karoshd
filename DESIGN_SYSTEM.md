# DESIGN_SYSTEM.md

## Product

Karoshd / کارشد

Karoshd is a Persian-first business growth tool for Instagram-based businesses, service providers, freelancers, creators, consultants, and small online sellers.

The UI must feel like a serious business operating tool, not a playful AI demo.

Design goal:

> آرام، دقیق، واضح، قابل اعتماد، فارسی‌محور، فروش‌محور

The product must help users feel:

- Their business is being organized
- Their offer is becoming clearer
- Their Instagram page can become more sales-driven
- Their report is something they could actually use or pay for

---

## Core Design Rules

1. Persian-first.
2. RTL-first.
3. Business-like, not childish.
4. Clean, calm, high-trust interface.
5. No random gradients everywhere.
6. No overdesigned SaaS cliché.
7. No huge neon AI aesthetics.
8. No fake futuristic visuals.
9. No decorative clutter.
10. Every screen must be readable on mobile.

If there is ever a conflict between beauty and readability, choose readability.

---

## Visual Personality

Karoshd should feel like:

- A strategic dashboard
- A clean consulting report
- A premium business workspace
- A calm execution tool

It should not feel like:

- A generic AI startup
- A crypto dashboard
- A gamified habit app
- A colorful creator toy
- A complex enterprise admin panel

Keywords:

```txt
clean
sharp
Persian
structured
trusted
minimal
serious
calm
business-focused
```

---

## Direction and RTL Requirements

Set the main app wrapper to:

```tsx
<html lang="fa" dir="rtl">
```

For Persian pages:

```tsx
<main dir="rtl" className="text-right">
```

Rules:

- Text must align right by default.
- Form labels align right.
- Inputs align right.
- Textareas align right.
- Navigation order should feel right-to-left.
- Stepper progress should move from right to left.
- Sidebar, if used, should sit on the right side on desktop.
- Icons that imply direction must be mirrored when needed.
- Tables should align Persian text to the right.
- Numbers can remain readable in LTR where appropriate, especially prices, dates, and percentages.
- Do not accidentally create LTR Persian UI.

---

## Color System

Use a restrained business palette.

### Main Colors

```css
--background: #F8FAFC;
--surface: #FFFFFF;
--surface-muted: #F1F5F9;

--text-primary: #0F172A;
--text-secondary: #475569;
--text-muted: #64748B;

--border: #E2E8F0;
--border-strong: #CBD5E1;

--primary: #2563EB;
--primary-hover: #1D4ED8;
--primary-soft: #DBEAFE;

--success: #16A34A;
--success-soft: #DCFCE7;

--warning: #D97706;
--warning-soft: #FEF3C7;

--danger: #DC2626;
--danger-soft: #FEE2E2;
```

### Usage

Primary blue should be used for:

- Main CTA
- Active states
- Progress highlights
- Important links
- Primary badges

Do not overuse blue.

Background should remain light and clean.

Cards should be white.

Use subtle borders instead of heavy shadows.

---

## Forbidden Visual Choices

Do not use:

- Purple/pink AI gradients as the main identity
- Neon glows
- Glassmorphism everywhere
- Dark dashboard by default
- Excessive shadows
- Random colorful cards
- Low-contrast gray text
- Center-aligned long Persian paragraphs
- Tiny form labels
- Dense dashboard tables with no spacing
- Uncontrolled animation

---

## Typography

Use a Persian-readable font.

Recommended font stack:

```css
font-family:
  "Vazirmatn",
  "IRANSansX",
  "Dana",
  "Tahoma",
  sans-serif;
```

If external fonts are not configured yet, use system fallback but keep spacing and weight appropriate.

### Type Scale

Use this scale:

```css
--text-xs: 12px;
--text-sm: 14px;
--text-base: 16px;
--text-lg: 18px;
--text-xl: 20px;
--text-2xl: 24px;
--text-3xl: 30px;
--text-4xl: 36px;
```

### Font Weights

```css
--font-regular: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
```

### Typography Rules

- Body text: 16px minimum.
- Form labels: 14px or 15px, medium weight.
- Section titles: 20px to 24px, bold.
- Page titles: 28px to 36px, bold.
- Persian line-height should be generous.

Recommended line heights:

```css
body: 1.9;
headings: 1.45;
buttons: 1.2;
```

Avoid long paragraphs wider than 720px.

---

## Layout System

Use a consistent spacing system.

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
```

### Page Containers

Landing page:

```txt
max-width: 1120px
horizontal padding desktop: 32px
horizontal padding mobile: 20px
```

Dashboard:

```txt
max-width: 1180px
horizontal padding desktop: 32px
horizontal padding mobile: 16px
```

Report page:

```txt
content max-width: 920px
navigation/sidebar max-width: 260px
```

---

## Border Radius

Use soft but not childish radii.

```css
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-xl: 20px;
--radius-2xl: 24px;
```

Default card radius: 20px.

Button radius: 12px.

Input radius: 12px.

---

## Shadows

Use minimal shadows.

```css
--shadow-sm: 0 1px 2px rgba(15, 23, 42, 0.06);
--shadow-md: 0 8px 24px rgba(15, 23, 42, 0.08);
```

Most components should use border + white background.

Use shadows only for:

- Main report cards
- Important dashboard cards
- Floating/sticky navigation
- Modals

---

## App Structure

Desktop dashboard layout:

- Right sidebar navigation
- Main content area
- Top page header inside content

Mobile layout:

- Top navigation
- Collapsible menu if needed
- Full-width cards
- Sticky bottom CTA only when useful

Preferred dashboard layout:

```txt
[Right Sidebar] [Main Content]
```

Since the app is RTL, the sidebar belongs on the right.

---

## Landing Page Design

Landing page should be clear and conversion-focused.

### Sections

1. Header
2. Hero
3. Problem
4. Product explanation
5. What the kit includes
6. Sample report preview
7. Who it is for
8. How it works
9. Pricing placeholder
10. FAQ
11. Final CTA

### Hero Layout

Desktop:

```txt
Right side: headline, subheadline, CTA
Left side: report preview card
```

Mobile:

```txt
Headline
Subheadline
CTA
Report preview card
```

### Hero Copy Direction

Use Persian copy like:

```txt
پیج داری، ولی سیستم فروش نداری؟
```

Subheadline:

```txt
کارشد اطلاعات کسب‌وکارت را می‌گیرد و یک کیت رشد عملی می‌سازد:
پیشنهاد فروش، تحلیل پیج، کمپین استوری، اسکریپت پاسخ به مشتری و برنامه اجرا.
```

CTA:

```txt
ساخت کیت رشد
```

Secondary CTA:

```txt
دیدن نمونه خروجی
```

### Hero Visual

Use a realistic app/report preview.

Do not use abstract 3D objects.

Good visual:

- A clean report card
- A checklist
- A section preview
- A small progress indicator

Bad visual:

- Robot
- Neon brain
- Floating AI orb
- Generic futuristic dashboard

---

## Dashboard Design

Dashboard must feel operational.

Required elements:

- Page title
- Short explanation
- Primary action button
- Kit cards
- Empty state
- Recent activity if useful

Dashboard card example:

```txt
[نام کسب‌وکار]
نوع کسب‌وکار
وضعیت: کامل / پیش‌نویس / در حال ساخت
آخرین ویرایش
[مشاهده گزارش]
```

Empty state:

```txt
هنوز هیچ کیتی نساخته‌ای.
اولین کیت رشد کسب‌وکارت را بساز و پیشنهاد فروش، تحلیل پیج و برنامه اجرای خودت را دریافت کن.
```

CTA:

```txt
ساخت کیت جدید
```

---

## Form Design

Forms are the most important part of the MVP.

The user should feel guided, not interrogated.

Use multi-step form.

### Form Steps

1. اطلاعات کسب‌وکار
2. مشتری و مسئله
3. پیج اینستاگرام
4. اعتمادسازی
5. لحن برند
6. مرور نهایی

### Form Layout

Desktop:

- Form card centered
- Stepper on top or right
- Helpful context box on the side if space allows

Mobile:

- One column
- Step title
- Fields
- Next/previous buttons

### Field Rules

Each field should have:

- Clear Persian label
- Optional helper text
- Good placeholder
- Error message if invalid

Example:

Label:

```txt
مشتری ایده‌آل شما کیست؟
```

Helper:

```txt
مثلاً: صاحبان فروشگاه‌های اینستاگرامی که فروش دارند ولی سیستم مشخصی برای تولید محتوا و پاسخ‌گویی ندارند.
```

Placeholder:

```txt
مشتری اصلی من ...
```

### Input Styling

Use:

```txt
height: 44px minimum
padding: 12px 14px
border: 1px solid var(--border)
radius: 12px
background: white
```

Textarea:

```txt
min-height: 120px
line-height: 1.9
resize: vertical
```

Focus state:

```css
border-color: var(--primary);
box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
```

---

## Buttons

### Primary Button

Used for main action.

```txt
background: primary blue
text: white
height: 44px or 48px
radius: 12px
font-weight: 700
```

Examples:

```txt
ساخت کیت رشد
ادامه
تولید گزارش
ذخیره تغییرات
```

### Secondary Button

Used for low-risk actions.

```txt
background: white
border: border
text: text-primary
```

Examples:

```txt
بازگشت
مشاهده نمونه
ویرایش اطلاعات
```

### Ghost Button

Used for quiet actions.

Examples:

```txt
کپی متن
تولید دوباره
حذف پیش‌نویس
```

---

## Cards

Default card:

```txt
background: white
border: 1px solid #E2E8F0
radius: 20px
padding: 24px
```

Card titles:

```txt
font-size: 18px to 20px
font-weight: 700
color: text-primary
```

Card body:

```txt
font-size: 15px to 16px
color: text-secondary
line-height: 1.9
```

Use cards for:

- Dashboard kits
- Report sections
- Form steps
- Pricing plans
- Sample previews
- FAQ items

---

## Report Page Design

The report is the main product output.

It must feel valuable.

Layout desktop:

```txt
Right: sticky section navigation
Center: report content
Top: business name + date + actions
```

Layout mobile:

```txt
Top: business name
Actions
Section tabs or accordion
Report cards
```

Report page must include:

- Business name
- Generated date
- Report status
- Copy all button
- Download/print button
- Section navigation
- Section cards

### Report Section Card

Each generated section should use this structure:

```txt
[Section title]
[Short description or badge]
[Generated markdown content]
[Copy] [Regenerate]
```

Section names in Persian:

```txt
پیشنهاد فروش
تحلیل پیج اینستاگرام
کمپین ۷ روزه استوری
اسکریپت پاسخ به مشتری
برنامه اجرا
```

### Report Typography

Generated markdown should be readable.

Rules:

- H2: 24px, bold, margin-top 32px
- H3: 20px, bold, margin-top 24px
- Paragraph: 16px, line-height 2
- Lists: right-aligned, padded correctly for RTL
- Strong text should be visible but not overused

---

## Markdown Rendering Rules

Generated AI sections will render as markdown.

Ensure:

- RTL markdown layout
- Persian list indentation correct
- Headings have enough spacing
- Long text does not become dense
- Copy button copies raw markdown or clean text
- No unsafe HTML execution

Do not render untrusted HTML directly.

---

## Status Badges

Use subtle badges.

Examples:

Draft:

```txt
پیش‌نویس
background: #F1F5F9
text: #475569
```

Generating:

```txt
در حال ساخت
background: #DBEAFE
text: #1D4ED8
```

Completed:

```txt
کامل شده
background: #DCFCE7
text: #166534
```

Failed:

```txt
ناموفق
background: #FEE2E2
text: #991B1B
```

---

## Loading States

Generation loading must feel calm.

Use progress messages:

```txt
در حال تحلیل اطلاعات کسب‌وکار...
در حال ساخت پیشنهاد فروش...
در حال بررسی ساختار پیج...
در حال طراحی کمپین استوری...
در حال آماده‌سازی گزارش نهایی...
```

Do not use playful loaders.

Use:

- Simple spinner
- Progress bar
- Skeleton cards
- Calm text

---

## Empty States

Empty states must guide next action.

Bad:

```txt
No data.
```

Good:

```txt
هنوز گزارشی ساخته نشده.
اطلاعات کسب‌وکارت را وارد کن تا کارشد اولین کیت رشد را برایت بسازد.
```

Empty state should include:

- Title
- Short explanation
- One CTA

---

## Error States

Error messages should be useful.

Bad:

```txt
Error happened.
```

Good:

```txt
گزارش ساخته نشد. اتصال به سرویس تولید محتوا مشکل دارد. چند دقیقه بعد دوباره امتحان کنید.
```

Form error example:

```txt
نام کسب‌وکار را وارد کن.
```

System error example:

```txt
ذخیره اطلاعات انجام نشد. اتصال اینترنت یا تنظیمات پایگاه داده را بررسی کن.
```

---

## Navigation

Dashboard navigation items:

```txt
داشبورد
کیت‌های رشد
ساخت کیت جدید
تنظیمات
خروج
```

Landing navigation:

```txt
امکانات
نمونه خروجی
قیمت‌گذاری
سوالات متداول
ورود
```

Primary nav CTA:

```txt
ساخت کیت رشد
```

---

## Icons

Use simple line icons.

Recommended icon style:

- 1.75px or 2px stroke
- Rounded caps
- Minimal
- No colorful icon sets

Use icons only when they clarify.

Do not place icons everywhere.

Good icon uses:

- Dashboard cards
- Report sections
- Status states
- Navigation
- Empty states

---

## Motion

Use motion sparingly.

Allowed:

- Button hover transition
- Card hover lift, very subtle
- Form step transition
- Accordion open/close
- Loading skeleton

Motion values:

```css
transition-duration: 150ms to 250ms;
transition-timing-function: ease-out;
```

Avoid:

- Bouncy animations
- Excessive page transitions
- Floating elements
- Looping decorative animation

---

## Responsive Rules

Mobile is mandatory.

Breakpoints:

```txt
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
```

Mobile rules:

- Single-column layout
- Cards full width
- Form fields full width
- Buttons full width when primary
- Report navigation becomes tabs/accordion
- Avoid horizontal scrolling
- Tables should become stacked cards if needed

---

## Component Standards

### AppShell

Includes:

- RTL wrapper
- Sidebar or top nav
- Main content container
- Consistent background

### PageHeader

Includes:

- Title
- Description
- Optional action button

Example:

```txt
کیت‌های رشد
گزارش‌های ساخته‌شده برای کسب‌وکارهای مختلف را اینجا می‌بینی.
```

### BusinessProfileForm

Must be:

- Multi-step
- Validated
- RTL
- Persuasive but not overwhelming
- Mobile friendly

### GeneratedSectionCard

Must include:

- Section title
- Generated content
- Copy button
- Regenerate button
- Loading state for regeneration

### KitCard

Must include:

- Business name
- Business type
- Status
- Last updated date
- View button

### CopyButton

States:

```txt
کپی
کپی شد
خطا در کپی
```

### RegenerateButton

States:

```txt
تولید دوباره
در حال تولید...
```

---

## Pricing Design

Pricing cards should be simple.

Plans:

```txt
شروعی
حرفه‌ای
آژانس
```

Use 3 cards on desktop, stacked on mobile.

Each card:

- Plan name
- Short description
- Feature list
- CTA
- Small note

Do not implement real payment UI in MVP unless requested.

---

## Sample Output Preview

The landing page should show a sample report preview card.

Example preview:

```txt
تحلیل سریع پیج

مشکل اصلی:
پیشنهاد فروش در بایو واضح نیست و کاربر در چند ثانیه اول نمی‌فهمد دقیقاً چه چیزی می‌فروشید.

اقدام پیشنهادی:
بایو باید شامل نتیجه نهایی، مخاطب هدف و CTA مستقیم باشد.
```

This helps users understand the product without logging in.

---

## Content Style

Persian UI copy should be concise.

Avoid long explanations inside buttons and labels.

Good:

```txt
ساخت کیت رشد
ویرایش اطلاعات
تولید گزارش
کپی متن
```

Bad:

```txt
برای شروع فرآیند ساخت گزارش رشد کسب‌وکار کلیک کنید
```

Keep UI copy human and direct.

---

## Accessibility

Required:

- Semantic HTML
- Proper labels for inputs
- Keyboard accessible buttons
- Visible focus states
- Good contrast
- Error messages tied to fields
- Do not rely only on color
- Use `aria-busy` for generating states where useful

---

## Implementation Notes for Tailwind

Recommended Tailwind base style:

```tsx
<body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
```

Common card class:

```tsx
rounded-2xl border border-slate-200 bg-white p-6 shadow-sm
```

Common primary button style:

```tsx
h-11 rounded-xl bg-blue-600 px-5 text-sm font-bold text-white transition hover:bg-blue-700
```

Common secondary button style:

```tsx
h-11 rounded-xl border border-slate-200 bg-white px-5 text-sm font-bold text-slate-900 transition hover:bg-slate-50
```

Common input style:

```tsx
h-11 rounded-xl border border-slate-200 bg-white px-3 text-right text-sm outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100
```

Common textarea style:

```tsx
min-h-32 rounded-xl border border-slate-200 bg-white px-3 py-3 text-right text-sm leading-8 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100
```

---

## Do Not Change Randomly

Codex must not randomly change:

- Color palette
- Typography scale
- Border radius system
- RTL structure
- Card spacing
- Button style
- Report layout
- Form step structure

Any visual change must follow this design system.

---

## Design Acceptance Criteria

A screen is acceptable only if:

- It is fully RTL.
- Persian text is readable.
- Main action is obvious.
- There is enough whitespace.
- Cards are visually consistent.
- It works on mobile.
- It does not look like a generic AI chatbot.
- It uses the Karoshd visual system.
- It does not introduce random colors or layouts.
- It feels like a product someone could pay for.

---

## Codex Instruction

When asked to build or modify UI:

1. Read `AGENTS.md`.
2. Read `DESIGN_SYSTEM.md`.
3. Follow the existing component patterns.
4. Do not redesign unless explicitly asked.
5. Do not introduce random visual styles.
6. Keep all Persian UI RTL.
7. Prefer consistency over novelty.
8. If a requested feature conflicts with this design system, explain the conflict before implementing.

---

## Final Design Reminder

Karoshd should not impress users with decoration.

It should earn trust through clarity.

The interface should quietly say:

> اینجا قرار است کسب‌وکارت مرتب‌تر، واضح‌تر و قابل فروش‌تر شود.
