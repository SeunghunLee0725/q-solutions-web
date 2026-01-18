"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-wide mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo-white.svg"
              alt="Q-Solutions"
              width={150}
              height={40}
              className="h-8 w-auto mb-4"
            />
            <p className="text-sm text-gray-400 mb-4">
              {t("company.description")}
            </p>
            <p className="text-sm font-medium text-primary-400">
              {t("company.tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {t("links.solutions")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/solutions/public"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  공공기관
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/education"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  학교·교육기관
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/laboratory"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  연구실
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  {t("links.caseStudies")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  {t("links.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  {t("links.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {t("contact.title")}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-primary-400" />
                <span className="text-sm">{t("contact.phone")}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-primary-400" />
                <a
                  href="mailto:cto@q-solutions.net"
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  {t("contact.email")}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-primary-400 flex-shrink-0" />
                <div className="text-sm space-y-1">
                  <p>{t("contact.headquarters")}</p>
                  <p>{t("contact.branch")}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">{t("copyright")}</p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
