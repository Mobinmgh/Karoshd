"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import {
  type FieldError,
  type FieldErrors,
  type UseFormRegister,
  useForm,
} from "react-hook-form";
import { saveLocalDraftKit } from "@/lib/storage/local-drafts";
import {
  businessProfileDefaultValues,
  businessProfileSchema,
  type BusinessProfileFormValues,
} from "@/lib/validators/business-profile";

const steps = [
  "اطلاعات کسب‌وکار",
  "مشتری و مسئله",
  "پیج اینستاگرام",
  "اعتمادسازی",
  "لحن برند",
  "مرور نهایی",
] as const;

type FieldType = "input" | "textarea" | "select";
type FieldName = keyof BusinessProfileFormValues;

type FieldOption = {
  label: string;
  value: string;
};

type FieldConfig = {
  name: FieldName;
  label: string;
  helper?: string;
  placeholder: string;
  type: FieldType;
  options?: FieldOption[];
};

type StepConfig = {
  title: (typeof steps)[number];
  description: string;
  fields: FieldConfig[];
};

const stepConfigs: StepConfig[] = [
  {
    title: "اطلاعات کسب‌وکار",
    description: "مشخصات پایه را وارد کن تا گزارش بداند دقیقاً برای چه کسب‌وکاری نوشته می‌شود.",
    fields: [
      {
        name: "businessName",
        label: "نام کسب‌وکار",
        placeholder: "مثلاً: استودیو رشد اینستاگرام",
        type: "input",
      },
      {
        name: "businessType",
        label: "نوع کسب‌وکار",
        placeholder: "مثلاً: خدمات مشاوره، فروشگاه آنلاین، آموزش",
        type: "input",
      },
      {
        name: "niche",
        label: "حوزه فعالیت",
        placeholder: "مثلاً: فروشگاه‌های اینستاگرامی پوشاک",
        type: "input",
      },
      {
        name: "cityOrMarket",
        label: "شهر یا بازار هدف",
        placeholder: "مثلاً: تهران، کل ایران، فارسی‌زبانان خارج از کشور",
        type: "input",
      },
      {
        name: "mainProductOrService",
        label: "محصول یا خدمت اصلی",
        helper: "دقیق بنویس چه چیزی می‌فروشی و مشتری دقیقاً چه چیزی دریافت می‌کند.",
        placeholder: "محصول یا خدمت اصلی من ...",
        type: "textarea",
      },
      {
        name: "priceRange",
        label: "بازه قیمت",
        placeholder: "مثلاً: از ۲ تا ۸ میلیون تومان",
        type: "input",
      },
      {
        name: "currentSalesModel",
        label: "مدل فروش فعلی",
        placeholder: "مثلاً: دایرکت اینستاگرام، واتساپ، سایت، تماس تلفنی",
        type: "textarea",
      },
    ],
  },
  {
    title: "مشتری و مسئله",
    description: "این بخش کمک می‌کند پیشنهاد فروش به زبان مسئله و نتیجه مشتری نوشته شود.",
    fields: [
      {
        name: "targetCustomer",
        label: "مشتری ایده‌آل کیست؟",
        helper: "مثلاً: صاحبان فروشگاه‌های اینستاگرامی که فروش دارند ولی سیستم مشخصی برای محتوا و پاسخ‌گویی ندارند.",
        placeholder: "مشتری اصلی من ...",
        type: "textarea",
      },
      {
        name: "customerPain",
        label: "مشتری چه مشکلی دارد؟",
        placeholder: "مشتری معمولاً با این مشکل روبه‌روست که ...",
        type: "textarea",
      },
      {
        name: "desiredCustomerOutcome",
        label: "مشتری بعد از خرید باید به چه نتیجه‌ای برسد؟",
        placeholder: "بعد از خرید باید بتواند ...",
        type: "textarea",
      },
      {
        name: "customerObjections",
        label: "مشتری قبل از خرید چه تردیدهایی دارد؟",
        placeholder: "مثلاً: قیمت، اعتماد، نتیجه نگرفتن، زمان اجرا",
        type: "textarea",
      },
      {
        name: "purchaseReason",
        label: "چرا باید از این کسب‌وکار خرید کند؟",
        placeholder: "مزیت واقعی ما نسبت به گزینه‌های دیگر این است که ...",
        type: "textarea",
      },
    ],
  },
  {
    title: "پیج اینستاگرام",
    description: "برای این فاز، تحلیل پیج فقط بر اساس اطلاعاتی است که اینجا وارد می‌کنی.",
    fields: [
      {
        name: "currentInstagramHandle",
        label: "آیدی پیج",
        placeholder: "مثلاً: @karoshd",
        type: "input",
      },
      {
        name: "currentFollowers",
        label: "تعداد فالوور تقریبی",
        placeholder: "مثلاً: ۱۲ هزار",
        type: "input",
      },
      {
        name: "averageViews",
        label: "میانگین بازدید ریلز یا استوری",
        placeholder: "مثلاً: ۱۲۰۰ بازدید استوری",
        type: "input",
      },
      {
        name: "currentBio",
        label: "متن فعلی بایو",
        placeholder: "متن بایوی فعلی را اینجا وارد کن.",
        type: "textarea",
      },
      {
        name: "currentMainProblem",
        label: "مشکل اصلی پیج",
        placeholder: "مثلاً: بازدید هست ولی پیام خرید کم است.",
        type: "textarea",
      },
      {
        name: "bestContentSoFar",
        label: "چه نوع محتواهایی تا الان بهتر جواب داده‌اند؟",
        placeholder: "مثلاً: قبل و بعد، پشت صحنه، آموزش کوتاه، رضایت مشتری",
        type: "textarea",
      },
      {
        name: "lowSalesReason",
        label: "چه چیزی باعث شده فروش کم باشد؟",
        placeholder: "برداشت خودت از دلیل فروش کم را بنویس.",
        type: "textarea",
      },
    ],
  },
  {
    title: "اعتمادسازی",
    description: "گزارش نباید مدرک یا رضایت مشتری جعلی بسازد. هر چیزی که واقعاً داری اینجا وارد کن.",
    fields: [
      {
        name: "proofAssets",
        label: "نمونه‌کارها",
        placeholder: "لینک، توضیح کوتاه یا نوع نمونه‌کارها را بنویس.",
        type: "textarea",
      },
      {
        name: "testimonials",
        label: "رضایت مشتری",
        placeholder: "اگر رضایت مشتری داری، متن یا توضیح آن را وارد کن.",
        type: "textarea",
      },
      {
        name: "beforeAfter",
        label: "قبل و بعد",
        placeholder: "اگر نمونه قبل و بعد داری، توضیح بده.",
        type: "textarea",
      },
      {
        name: "licenses",
        label: "مجوزها یا مدارک",
        placeholder: "مجوز، مدرک، گواهی یا تجربه قابل اشاره",
        type: "textarea",
      },
      {
        name: "previousBrands",
        label: "برندهایی که قبلاً همکاری کرده‌اند",
        placeholder: "نام برندها یا نوع مشتریان قبلی",
        type: "textarea",
      },
      {
        name: "trustAssets",
        label: "هر نوع مدرک اعتمادساز",
        placeholder: "مثلاً: تعداد پروژه‌ها، سال تجربه، نتیجه قابل اثبات، نمونه تحویل",
        type: "textarea",
      },
    ],
  },
  {
    title: "لحن برند",
    description: "لحن خروجی باید با نوع برند و مشتری هماهنگ باشد.",
    fields: [
      {
        name: "brandTone",
        label: "لحن برند",
        placeholder: "انتخاب کن",
        type: "select",
        options: [
          { label: "حرفه‌ای", value: "professional" },
          { label: "صمیمی", value: "friendly" },
          { label: "لوکس", value: "luxury" },
          { label: "جسور", value: "bold" },
          { label: "آموزشی", value: "educational" },
          { label: "ساده", value: "simple" },
        ],
      },
      {
        name: "formality",
        label: "رسمی یا خودمانی",
        placeholder: "انتخاب کن",
        type: "select",
        options: [
          { label: "رسمی", value: "رسمی" },
          { label: "نیمه‌رسمی", value: "نیمه‌رسمی" },
          { label: "خودمانی", value: "خودمانی" },
        ],
      },
      {
        name: "simplicity",
        label: "ساده یا لوکس",
        placeholder: "انتخاب کن",
        type: "select",
        options: [
          { label: "ساده و مستقیم", value: "ساده و مستقیم" },
          { label: "متعادل", value: "متعادل" },
          { label: "لوکس و دقیق", value: "لوکس و دقیق" },
        ],
      },
      {
        name: "contentTone",
        label: "آموزشی یا فروش‌محور",
        placeholder: "انتخاب کن",
        type: "select",
        options: [
          { label: "آموزشی", value: "آموزشی" },
          { label: "فروش‌محور", value: "فروش‌محور" },
          { label: "ترکیبی", value: "ترکیبی" },
        ],
      },
      {
        name: "extraNotes",
        label: "توضیحات تکمیلی",
        placeholder: "هر نکته‌ای که برای ساخت گزارش مهم است.",
        type: "textarea",
      },
    ],
  },
];

const reviewGroups = stepConfigs.map((step) => ({
  title: step.title,
  fields: step.fields.map(({ name, label }) => ({ name, label })),
}));

export function BusinessProfileForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [saveMessage, setSaveMessage] = useState("");

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<BusinessProfileFormValues>({
    resolver: zodResolver(businessProfileSchema),
    defaultValues: businessProfileDefaultValues,
    mode: "onTouched",
  });

  const activeStep = stepConfigs[currentStep];
  const isReviewStep = currentStep === steps.length - 1;
  const watchedValues = watch();
  const progress = useMemo(() => Math.round(((currentStep + 1) / steps.length) * 100), [currentStep]);

  async function goNext() {
    const fieldNames = activeStep.fields.map((field) => field.name);
    const isStepValid = await trigger(fieldNames, { shouldFocus: true });

    if (isStepValid) {
      setSaveMessage("");
      setCurrentStep((step) => Math.min(step + 1, steps.length - 1));
    }
  }

  function goPrevious() {
    setSaveMessage("");
    setCurrentStep((step) => Math.max(step - 1, 0));
  }

  function saveDraft(values: BusinessProfileFormValues) {
    saveLocalDraftKit(values);
    setSaveMessage("پیش‌نویس روی همین مرورگر ذخیره شد.");
  }

  function submitFinal(values: BusinessProfileFormValues) {
    saveLocalDraftKit(values);
    router.push("/dashboard/kits/demo-kit");
  }

  return (
    <section className="grid gap-6 lg:grid-cols-[260px_1fr]" dir="rtl">
      <aside className="card h-fit lg:sticky lg:top-5">
        <div className="mb-5">
          <p className="text-sm font-bold text-slate-950">مراحل فرم</p>
          <p className="mt-1 text-xs text-slate-500">
            مرحله {toPersianNumber(currentStep + 1)} از {toPersianNumber(steps.length)}
          </p>
        </div>
        <div className="mb-5 h-2 rounded-full bg-slate-100">
          <div className="h-2 rounded-full bg-blue-600 transition-all" style={{ width: `${progress}%` }} />
        </div>
        <ol className="space-y-3">
          {steps.map((step, index) => {
            const isActive = index === currentStep;
            const isComplete = index < currentStep;

            return (
              <li key={step} className="flex items-center gap-3">
                <span
                  className={`flex size-8 items-center justify-center rounded-full text-sm font-bold ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : isComplete
                        ? "bg-blue-100 text-blue-700"
                        : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {toPersianNumber(index + 1)}
                </span>
                <span className={`text-sm font-bold ${isActive ? "text-slate-950" : "text-slate-500"}`}>{step}</span>
              </li>
            );
          })}
        </ol>
      </aside>

      <form className="card" aria-label="فرم ساخت کیت رشد" onSubmit={handleSubmit(submitFinal)} noValidate>
        <div className="border-b border-slate-100 pb-5">
          <p className="text-sm font-bold text-blue-700">
            مرحله {toPersianNumber(currentStep + 1)} از {toPersianNumber(steps.length)}
          </p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-950">
            {isReviewStep ? "مرور نهایی" : activeStep.title}
          </h2>
          <p className="mt-2 max-w-2xl text-base leading-8 text-slate-600">
            {isReviewStep
              ? "قبل از مشاهده گزارش نمونه، اطلاعات واردشده را مرور کن. با ثبت نهایی، داده فقط روی همین مرورگر ذخیره می‌شود."
              : activeStep.description}
          </p>
        </div>

        {isReviewStep ? (
          <ReviewScreen values={watchedValues} onEditStep={setCurrentStep} />
        ) : (
          <div className="mt-6 grid gap-5">
            {activeStep.fields.map((field) => (
              <FormField key={field.name} field={field} register={register} error={errors[field.name]} />
            ))}
          </div>
        )}

        {saveMessage ? (
          <p className="mt-5 rounded-xl bg-green-100 px-4 py-3 text-sm font-bold text-green-700">{saveMessage}</p>
        ) : null}

        <div className="mt-8 flex flex-col-reverse gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <button type="button" className="btn-secondary w-full disabled:opacity-50 sm:w-auto" onClick={goPrevious} disabled={currentStep === 0}>
            بازگشت
          </button>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button type="button" className="btn-secondary w-full sm:w-auto" onClick={handleSubmit(saveDraft)}>
              ذخیره پیش‌نویس
            </button>
            {isReviewStep ? (
              <button type="submit" className="btn-primary w-full sm:w-auto" disabled={isSubmitting}>
                ثبت و مشاهده گزارش نمونه
              </button>
            ) : (
              <button type="button" className="btn-primary w-full sm:w-auto" onClick={goNext}>
                ادامه
              </button>
            )}
          </div>
        </div>
      </form>
    </section>
  );
}

function FormField({
  field,
  register,
  error,
}: {
  field: FieldConfig;
  register: UseFormRegister<BusinessProfileFormValues>;
  error?: FieldError;
}) {
  const id = `field-${field.name}`;
  const errorId = `${id}-error`;

  return (
    <label htmlFor={id} className="grid gap-2">
      <span className="text-sm font-bold text-slate-800">{field.label}</span>
      {field.helper ? <span className="text-xs leading-6 text-slate-500">{field.helper}</span> : null}
      {field.type === "textarea" ? (
        <textarea
          id={id}
          className="form-textarea"
          placeholder={field.placeholder}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          {...register(field.name)}
        />
      ) : field.type === "select" ? (
        <select
          id={id}
          className="form-input"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          {...register(field.name)}
        >
          <option value="">{field.placeholder}</option>
          {field.options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          className="form-input"
          placeholder={field.placeholder}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          {...register(field.name)}
        />
      )}
      {error?.message ? (
        <span id={errorId} className="text-sm font-bold leading-7 text-red-600">
          {error.message}
        </span>
      ) : null}
    </label>
  );
}

function ReviewScreen({
  values,
  onEditStep,
}: {
  values: BusinessProfileFormValues;
  onEditStep: (step: number) => void;
}) {
  return (
    <div className="mt-6 grid gap-5">
      {reviewGroups.map((group, index) => (
        <section key={group.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-xl font-bold text-slate-950">{group.title}</h3>
            <button type="button" className="btn-ghost w-fit" onClick={() => onEditStep(index)}>
              ویرایش
            </button>
          </div>
          <dl className="grid gap-3 md:grid-cols-2">
            {group.fields.map((field) => (
              <div key={field.name} className="rounded-xl border border-slate-200 bg-white p-4">
                <dt className="text-xs font-bold text-slate-500">{field.label}</dt>
                <dd className="mt-2 whitespace-pre-wrap text-sm leading-7 text-slate-800">
                  {getReviewValue(field.name, values[field.name])}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      ))}
    </div>
  );
}

function getReviewValue(fieldName: FieldName, value: string | undefined) {
  if (!value) {
    return "وارد نشده";
  }

  if (fieldName === "brandTone") {
    return brandToneLabels[value] ?? value;
  }

  return value;
}

const brandToneLabels: Record<string, string> = {
  professional: "حرفه‌ای",
  friendly: "صمیمی",
  luxury: "لوکس",
  bold: "جسور",
  educational: "آموزشی",
  simple: "ساده",
};

function toPersianNumber(value: number) {
  return new Intl.NumberFormat("fa-IR", { useGrouping: false }).format(value);
}
