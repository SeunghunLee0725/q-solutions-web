"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  GraduationCap,
  FlaskConical,
  ArrowRight,
  Check,
} from "lucide-react";

export function SolutionsSection() {
  const t = useTranslations("solutions");

  const solutions = [
    {
      key: "public",
      icon: Building2,
      href: "/solutions/public",
      gradient: "from-blue-500 to-blue-600",
      lightBg: "bg-blue-50",
    },
    {
      key: "education",
      icon: GraduationCap,
      href: "/solutions/education",
      gradient: "from-green-500 to-green-600",
      lightBg: "bg-green-50",
    },
    {
      key: "laboratory",
      icon: FlaskConical,
      href: "/solutions/laboratory",
      gradient: "from-purple-500 to-purple-600",
      lightBg: "bg-purple-50",
    },
  ];

  return (
    <section className="section-padding bg-white" id="solutions">
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

        {/* Solutions Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                {/* Gradient Header */}
                <div
                  className={`h-2 bg-gradient-to-r ${solution.gradient}`}
                />

                <CardContent className="p-6 lg:p-8">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl ${solution.lightBg} flex items-center justify-center mb-6`}
                  >
                    <solution.icon
                      className={`w-7 h-7 text-${solution.gradient
                        .split("-")[1]
                        .replace("500", "600")}`}
                    />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {t(`${solution.key}.title`)}
                  </h3>
                  <p className="text-primary-600 font-medium mb-4">
                    {t(`${solution.key}.subtitle`)}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {t(`${solution.key}.description`)}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {(
                      t.raw(`${solution.key}.features`) as string[]
                    ).map((feature: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-primary-50 transition-colors"
                  >
                    <Link href={solution.href} className="gap-2">
                      {t("learnMore")}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
