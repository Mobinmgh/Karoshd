import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const vazirmatn = localFont({
  src: [
    {
      path: "../assets/fonts/vazirmatn/Vazirmatn-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/vazirmatn/Vazirmatn-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/fonts/vazirmatn/Vazirmatn-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/vazirmatn/Vazirmatn-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/vazirmatn/Vazirmatn-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/vazirmatn/Vazirmatn-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/vazirmatn/Vazirmatn-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/vazirmatn/Vazirmatn-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../assets/fonts/vazirmatn/Vazirmatn-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  title: "کارشد",
  description: "کیت رشد عملی برای کسب‌وکارهای اینستاگرامی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.variable} ${vazirmatn.className} min-h-screen bg-slate-50 text-slate-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
