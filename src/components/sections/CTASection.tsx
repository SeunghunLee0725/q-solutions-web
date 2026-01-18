"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export function CTASection() {
  const t = useTranslations("cta");

  return (
    <section className="section-padding bg-white">
      <div className="container-wide mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 px-6 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-24"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-secondary-500/20 rounded-full blur-3xl" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              {t("title")}
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
              {t("description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl" variant="white" className="gap-2">
                <Link href="/contact">
                  {t("button")}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="xl"
                variant="outline"
                className="gap-2 border-white/30 text-white hover:bg-white/10"
              >
                <a href="tel:070-4191-0516">
                  <Phone className="w-5 h-5" />
                  {t("contact")}
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
