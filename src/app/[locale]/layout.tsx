import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    ko: "Q-Solutions | 실내 공기질 관리 솔루션",
    en: "Q-Solutions | Indoor Air Quality Management",
  };

  const descriptions: Record<string, string> = {
    ko: "AIoT 센서 기반 실시간 공기질 모니터링과 과학적 감염 위험 분석으로 안전한 실내 환경을 만듭니다.",
    en: "Real-time air quality monitoring with AIoT sensors and scientific infection risk analysis for safer indoor environments.",
  };

  return {
    title: titles[locale] || titles.ko,
    description: descriptions[locale] || descriptions.ko,
    keywords: [
      "실내공기질",
      "IAQ",
      "공기질관리",
      "감염예방",
      "AIoT",
      "센서",
      "모니터링",
    ],
    openGraph: {
      title: titles[locale] || titles.ko,
      description: descriptions[locale] || descriptions.ko,
      type: "website",
      locale: locale === "ko" ? "ko_KR" : "en_US",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "ko" | "en")) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header locale={locale} />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
