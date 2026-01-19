"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Bug, Brain, HeartPulse } from "lucide-react";

export function ProblemSection() {
  const t = useTranslations("problem");

  const problems = [
    {
      icon: Bug,
      key: "infection",
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
    {
      icon: Brain,
      key: "productivity",
      color: "text-amber-500",
      bgColor: "bg-amber-50",
    },
    {
      icon: HeartPulse,
      key: "health",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <section className="section-padding bg-white" id="problem">
      <div className="container-wide mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            {t("badge")}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-relaxed">
            {t("title")}
            <br />
            <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              {t("titleHighlight")}
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardContent className="p-6 lg:p-8">
                  <div
                    className={`w-14 h-14 rounded-xl ${problem.bgColor} flex items-center justify-center mb-6`}
                  >
                    <problem.icon className={`w-7 h-7 ${problem.color}`} />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {t(`items.${problem.key}.title`)}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {t(`items.${problem.key}.description`)}
                  </p>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-baseline gap-2">
                      <span
                        className={`text-3xl font-bold ${problem.color.replace(
                          "text-",
                          "text-"
                        )}`}
                      >
                        {t(`items.${problem.key}.stat`)}
                      </span>
                      <span className="text-sm text-gray-500">
                        {t(`items.${problem.key}.statLabel`)}
                      </span>
                    </div>
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
