"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function StatsSection() {
  const t = useTranslations("stats");

  const stats = [
    { key: "bacteria", color: "text-primary-500" },
    { key: "energy", color: "text-secondary-500" },
    { key: "satisfaction", color: "text-amber-500" },
    { key: "uptime", color: "text-green-500" },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary-500 to-primary-700 text-white">
      <div className="container-wide mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge
            variant="outline"
            className="mb-4 border-white/30 text-white bg-white/10"
          >
            {t("badge")}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t("title")}
            <br />
            <span className="text-primary-200">{t("titleHighlight")}</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">
                {t(`items.${stat.key}.value`)}
              </div>
              <div className="text-lg font-medium text-primary-100 mb-1">
                {t(`items.${stat.key}.label`)}
              </div>
              <div className="text-sm text-primary-200/80">
                {t(`items.${stat.key}.description`)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
