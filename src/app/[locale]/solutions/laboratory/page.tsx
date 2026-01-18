"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  FlaskConical,
  ShieldAlert,
  Scale,
  Activity,
  AlertOctagon,
  Atom,
  FileWarning,
  ClipboardCheck,
  Search,
  Gauge,
  Settings,
  FolderLock,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LaboratorySolutionPage() {
  const t = useTranslations("solutions");
  const nav = useTranslations("nav");

  const benefits = [
    { key: "safety", icon: ShieldAlert },
    { key: "compliance", icon: Scale },
    { key: "tracking", icon: Activity },
    { key: "prevention", icon: AlertOctagon },
  ];

  const features = [
    { key: "detection", icon: Atom },
    { key: "chemical", icon: FileWarning },
    { key: "exposure", icon: Gauge },
    { key: "regulation", icon: ClipboardCheck },
  ];

  const steps = ["assess", "install", "monitor", "manage"];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent-600 via-accent-500 to-accent-700 text-white py-20 lg:py-28">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#solutions"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("detail.backToSolutions")}
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <FlaskConical className="w-7 h-7" />
              </div>
              <span className="text-white/90 font-medium">{nav("laboratory")}</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {t("detail.laboratory.heroTitle")}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {t("detail.laboratory.heroDescription")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              {t("detail.benefits")}
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {t(`detail.laboratory.benefits.${benefit.key}.title`)}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t(`detail.laboratory.benefits.${benefit.key}.description`)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              {t("detail.keyFeatures")}
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.key}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-5 p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent-500 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {t(`detail.laboratory.features.${feature.key}.title`)}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {t(`detail.laboratory.features.${feature.key}.description`)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("detail.howItWorks")}
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-accent-500 flex items-center justify-center text-2xl font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {t(`detail.laboratory.steps.${step}.title`)}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {t(`detail.laboratory.steps.${step}.description`)}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gray-700" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent-500">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {t("detail.ctaTitle")}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {t("detail.ctaDescription")}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-accent-600 hover:bg-gray-100"
            >
              <Link href="/contact">{nav("getDemo")}</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
