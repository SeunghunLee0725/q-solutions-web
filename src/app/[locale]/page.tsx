import { setRequestLocale } from "next-intl/server";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { StrengthsSection } from "@/components/sections/StrengthsSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { CasesSection } from "@/components/sections/CasesSection";
import { CTASection } from "@/components/sections/CTASection";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <ProblemSection />
      <StrengthsSection />
      <SolutionsSection />
      <StatsSection />
      <CasesSection />
      <CTASection />
    </>
  );
}
