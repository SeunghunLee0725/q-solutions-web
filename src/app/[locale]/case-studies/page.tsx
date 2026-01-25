"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  GraduationCap,
  FlaskConical,
  Stethoscope,
  MapPin,
  Calendar,
  Maximize2,
  ArrowRight,
  Quote,
  Shield,
  Star,
  CheckCircle,
  TrendingDown,
  Users,
  Zap,
  Award,
  Heart,
  AlertTriangle,
  DollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CategoryFilter = "all" | "healthcare" | "education" | "public" | "lab";

const caseKeys = ["hospital", "nursing", "lab"] as const;

const caseImages: Record<string, string> = {
  hospital: "/images/cases/hanmaeum-hospital.jpg",
  nursing: "/images/cases/nursing.jpg",
  lab: "/images/cases/university.jpg",
};

const categoryIcons: Record<string, React.ElementType> = {
  "의료기관": Stethoscope,
  "Healthcare": Stethoscope,
  "교육기관": GraduationCap,
  "Education": GraduationCap,
  "공공기관": Building2,
  "Public Facilities": Building2,
  "연구실": FlaskConical,
  "Laboratories": FlaskConical,
};

const metricIcons: Record<string, React.ElementType> = {
  bacteria: Shield,
  shield: Shield,
  star: Star,
  cost: DollarSign,
  alert: AlertTriangle,
  health: Heart,
  check: CheckCircle,
  focus: Zap,
  award: Award,
  users: Users,
};

const categoryColors: Record<string, string> = {
  "의료기관": "from-rose-500 to-pink-600",
  "Healthcare": "from-rose-500 to-pink-600",
  "교육기관": "from-blue-500 to-cyan-600",
  "Education": "from-blue-500 to-cyan-600",
  "공공기관": "from-emerald-500 to-teal-600",
  "Public Facilities": "from-emerald-500 to-teal-600",
  "연구실": "from-purple-500 to-violet-600",
  "Laboratories": "from-purple-500 to-violet-600",
};

export default function CaseStudiesPage() {
  const t = useTranslations("cases");
  const nav = useTranslations("nav");
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");
  const [selectedCase, setSelectedCase] = useState<string | null>(null);

  const filters: { key: CategoryFilter; label: string }[] = [
    { key: "all", label: t("page.filterAll") },
    { key: "healthcare", label: t("page.filterHealthcare") },
    { key: "education", label: t("page.filterEducation") },
    { key: "public", label: t("page.filterPublic") },
    { key: "lab", label: t("page.filterLab") },
  ];

  const getCategoryKey = (category: string): CategoryFilter => {
    const mapping: Record<string, CategoryFilter> = {
      "의료기관": "healthcare",
      "Healthcare": "healthcare",
      "교육기관": "education",
      "Education": "education",
      "공공기관": "public",
      "Public Facilities": "public",
      "연구실": "lab",
      "Laboratories": "lab",
    };
    return mapping[category] || "all";
  };

  const filteredCases = caseKeys.filter((key) => {
    if (activeFilter === "all") return true;
    const category = t(`page.details.${key}.category`);
    return getCategoryKey(category) === activeFilter;
  });

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 lg:py-28 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500 rounded-full blur-3xl" />
        </div>

        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              {t("badge")}
            </span>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
              {t("page.heroTitle")}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {t("page.heroDescription")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-16 lg:top-20 z-40 bg-white/95 backdrop-blur-md border-b">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all",
                  activeFilter === filter.key
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredCases.map((key, index) => {
                const category = t(`page.details.${key}.category`);
                const Icon = categoryIcons[category] || Building2;
                const colorClass = categoryColors[category] || "from-gray-500 to-gray-600";

                return (
                  <motion.div
                    key={key}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: index * 0.05 }}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedCase(key)}
                  >
                    {/* Card Header with Background Image */}
                    <div
                      className="relative h-48 p-6 bg-cover bg-center"
                      style={{ backgroundImage: `url(${caseImages[key]})` }}
                    >
                      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-80", colorClass)} />
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-center gap-2 mb-auto">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                            <Icon className="w-3.5 h-3.5" />
                            {category}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">
                            {t(`page.details.${key}.title`)}
                          </h3>
                          <p className="text-white/80 text-sm line-clamp-2">
                            {t(`page.details.${key}.subtitle`)}
                          </p>
                        </div>
                      </div>

                      {/* Expand icon */}
                      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6">
                      {/* Location & Period */}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          {t(`page.details.${key}.location`)}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {t(`page.details.${key}.period`)}
                        </span>
                      </div>

                      {/* Metrics Preview */}
                      <div className={cn("grid gap-3 mb-4", key === "lab" ? "grid-cols-1" : "grid-cols-2")}>
                        {(key === "lab" ? [0] : [0, 1]).map((idx) => {
                          const metricLabel = t(`page.details.${key}.metrics.${idx}.label`);
                          const metricValue = t(`page.details.${key}.metrics.${idx}.value`);
                          const metricIcon = t(`page.details.${key}.metrics.${idx}.icon`);
                          const MetricIcon = metricIcons[metricIcon] || CheckCircle;

                          return (
                            <div key={idx} className="flex items-center gap-2 p-3 rounded-xl bg-gray-50">
                              <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center">
                                <MetricIcon className="w-4 h-4 text-primary-600" />
                              </div>
                              <div>
                                <p className="text-lg font-bold text-gray-900">{metricValue}</p>
                                <p className="text-xs text-gray-500">{metricLabel}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* View Details */}
                      <button className="flex items-center gap-2 text-primary-600 font-medium text-sm group-hover:gap-3 transition-all">
                        자세히 보기
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Case Detail Modal */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedCase(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const category = t(`page.details.${selectedCase}.category`);
                const Icon = categoryIcons[category] || Building2;
                const colorClass = categoryColors[category] || "from-gray-500 to-gray-600";

                return (
                  <>
                    {/* Modal Header */}
                    <div
                      className="relative p-8 text-white bg-cover bg-center"
                      style={{ backgroundImage: `url(${caseImages[selectedCase]})` }}
                    >
                      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-85", colorClass)} />
                      <button
                        onClick={() => setSelectedCase(null)}
                        className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <span className="text-2xl leading-none">&times;</span>
                      </button>

                      <div className="relative z-10">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-4">
                          <Icon className="w-4 h-4" />
                          {category}
                        </span>
                        <h2 className="text-3xl font-bold mb-2">
                          {t(`page.details.${selectedCase}.title`)}
                        </h2>
                        <p className="text-white/90 text-lg">
                          {t(`page.details.${selectedCase}.subtitle`)}
                        </p>

                        <div className="flex flex-wrap gap-6 mt-6 text-sm">
                          <span className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {t(`page.details.${selectedCase}.location`)}
                          </span>
                          <span className="flex items-center gap-2">
                            <Maximize2 className="w-4 h-4" />
                            {t(`page.details.${selectedCase}.size`)}
                          </span>
                          <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {t(`page.details.${selectedCase}.period`)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Modal Body */}
                    <div className="p-8">
                      {/* Metrics */}
                      <div className={cn("grid gap-4 mb-10", selectedCase === "lab" ? "grid-cols-1 max-w-xs mx-auto" : "grid-cols-2 md:grid-cols-4")}>
                        {(selectedCase === "lab" ? [0] : [0, 1, 2, 3]).map((idx) => {
                          const metricLabel = t(`page.details.${selectedCase}.metrics.${idx}.label`);
                          const metricValue = t(`page.details.${selectedCase}.metrics.${idx}.value`);
                          const metricIcon = t(`page.details.${selectedCase}.metrics.${idx}.icon`);
                          const MetricIcon = metricIcons[metricIcon] || CheckCircle;

                          return (
                            <div key={idx} className="text-center p-4 rounded-2xl bg-gray-50">
                              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mx-auto mb-3">
                                <MetricIcon className="w-6 h-6 text-primary-600" />
                              </div>
                              <p className="text-2xl font-bold text-gray-900">{metricValue}</p>
                              <p className="text-sm text-gray-500">{metricLabel}</p>
                            </div>
                          );
                        })}
                      </div>

                      {/* Challenge */}
                      <div className="mb-8">
                        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                            <AlertTriangle className="w-4 h-4 text-amber-600" />
                          </div>
                          {t("page.challenge")}
                        </h3>
                        <p className="text-gray-600 leading-relaxed pl-10">
                          {t(`page.details.${selectedCase}.challenge`)}
                        </p>
                      </div>

                      {/* Solution */}
                      <div className="mb-8">
                        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center">
                            <Zap className="w-4 h-4 text-primary-600" />
                          </div>
                          {t("page.solution")}
                        </h3>
                        <p className="text-gray-600 leading-relaxed pl-10">
                          {t(`page.details.${selectedCase}.solution`)}
                        </p>
                      </div>

                      {/* Results */}
                      <div className="mb-8">
                        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                            <TrendingDown className="w-4 h-4 text-emerald-600" />
                          </div>
                          {t("page.results")}
                        </h3>
                        <ul className="space-y-2 pl-10">
                          {[0, 1, 2, 3].map((idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-600">
                              <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                              {t(`page.details.${selectedCase}.results.${idx}`)}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Testimonial */}
                      <div className="bg-gray-50 rounded-2xl p-6">
                        <div className="flex items-start gap-4">
                          <Quote className="w-10 h-10 text-primary-300 flex-shrink-0" />
                          <div>
                            <p className="text-gray-700 text-lg italic leading-relaxed mb-4">
                              "{t(`page.details.${selectedCase}.testimonial`)}"
                            </p>
                            <p className="text-gray-900 font-semibold">
                              — {t(`page.details.${selectedCase}.testimonialAuthor`)}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="mt-8 text-center">
                        <Button asChild size="lg">
                          <Link href="/contact">{nav("getDemo")}</Link>
                        </Button>
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              다음 성공 사례의 주인공이 되어보세요
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              무료 공기질 진단으로 시작해 보세요. 전문가가 최적의 솔루션을 제안해 드립니다.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100"
            >
              <Link href="/contact">{nav("getDemo")}</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
