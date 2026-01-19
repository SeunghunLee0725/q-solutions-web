"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function StrengthsSection() {
  const t = useTranslations("strengths");

  const strengths = [
    { key: "scientific", color: "bg-red-500" },
    { key: "realtime", color: "bg-blue-500" },
    { key: "automated", color: "bg-green-500" },
    { key: "proven", color: "bg-purple-500" },
  ];

  return (
    <section className="section-padding bg-gray-50" id="strengths">
      <div className="container-wide mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="default" className="mb-4">
            {t("badge")}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-relaxed">
            {t("title")}
            <br />
            <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              {t("titleHighlight")}
            </span>
          </h2>
        </motion.div>

        {/* Strengths Grid - GE Healthcare Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strengths.map((strength, index) => (
            <motion.div
              key={strength.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              {/* Large Title */}
              <h3 className="text-3xl lg:text-4xl font-light text-gray-900 tracking-wide mb-3">
                {t(`items.${strength.key}.title`)}
              </h3>

              {/* Subtitle */}
              <p className="text-sm font-medium text-gray-600 mb-4">
                {t(`items.${strength.key}.subtitle`)}
              </p>

              {/* Description - Single line */}
              <p className="text-xs text-gray-500 mb-6 line-clamp-1">
                {t(`items.${strength.key}.description`)}
              </p>

              {/* Color Bar */}
              <div className={`h-1 w-full ${strength.color} rounded-full`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
