"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Building2, Heart, FlaskConical } from "lucide-react";

export function CasesSection() {
  const t = useTranslations("cases");

  const cases = [
    {
      key: "hospital",
      icon: Building2,
      iconBg: "bg-red-50",
      iconColor: "text-red-500",
    },
    {
      key: "nursing",
      icon: Heart,
      iconBg: "bg-pink-50",
      iconColor: "text-pink-500",
    },
    {
      key: "lab",
      icon: FlaskConical,
      iconBg: "bg-purple-50",
      iconColor: "text-purple-500",
    },
  ];

  return (
    <section className="section-padding bg-gray-50" id="cases">
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("title")}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              {t("titleHighlight")}
            </span>
          </h2>
        </motion.div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md bg-white">
                <CardContent className="p-6 lg:p-8">
                  {/* Category & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <Badge variant="muted">
                      {t(`items.${caseItem.key}.category`)}
                    </Badge>
                    <div
                      className={`w-10 h-10 rounded-lg ${caseItem.iconBg} flex items-center justify-center`}
                    >
                      <caseItem.icon
                        className={`w-5 h-5 ${caseItem.iconColor}`}
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {t(`items.${caseItem.key}.title`)}
                  </h3>

                  {/* Quote */}
                  <div className="relative mb-6">
                    <Quote className="w-8 h-8 text-primary-100 absolute -top-2 -left-2" />
                    <p className="text-gray-600 italic pl-6 leading-relaxed">
                      {t(`items.${caseItem.key}.quote`)}
                    </p>
                  </div>

                  {/* Result & Date */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-primary-600 font-semibold">
                      {t(`items.${caseItem.key}.result`)}
                    </span>
                    <span className="text-sm text-gray-400">
                      {t(`items.${caseItem.key}.date`)}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
