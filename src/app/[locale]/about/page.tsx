import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  Users,
  Target,
  Award,
  MapPin,
  Calendar,
} from "lucide-react";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  const isKorean = locale === "ko";

  const milestones = [
    {
      year: "2023",
      title: isKorean ? "Q-Solutions 설립" : "Q-Solutions Founded",
      description: isKorean
        ? "AIoT 기반 실내공기질 관리 전문 기업으로 출범"
        : "Launched as AIoT-based indoor air quality management company",
    },
    {
      year: "2024",
      title: isKorean ? "Wells-Riley 모델 기반 솔루션 개발" : "Wells-Riley Model Solution",
      description: isKorean
        ? "과학적 감염 위험 분석 시스템 상용화"
        : "Commercialized scientific infection risk analysis system",
    },
    {
      year: "2024",
      title: isKorean ? "공공기관 도입 확대" : "Public Sector Expansion",
      description: isKorean
        ? "병원, 학교, 공공청사 등 50개 이상 기관 도입"
        : "Deployed in 50+ hospitals, schools, and government buildings",
    },
    {
      year: "2025",
      title: isKorean ? "AI 자동 제어 시스템 출시" : "AI Auto Control Launch",
      description: isKorean
        ? "환기/공조 시스템 자동 연동 기능 추가"
        : "Added automatic ventilation/HVAC integration",
    },
  ];

  const values = [
    {
      icon: Target,
      title: isKorean ? "과학적 접근" : "Scientific Approach",
      description: isKorean
        ? "Wells-Riley 모델을 기반으로 한 정량적 감염 위험 분석"
        : "Quantitative infection risk analysis based on Wells-Riley model",
    },
    {
      icon: Users,
      title: isKorean ? "고객 중심" : "Customer Focus",
      description: isKorean
        ? "기술 용어 대신 고객이 이해하기 쉬운 가치 중심 서비스"
        : "Value-focused service that's easy to understand, not tech jargon",
    },
    {
      icon: Award,
      title: isKorean ? "검증된 효과" : "Proven Results",
      description: isKorean
        ? "도입 기관 평균 90% 세균 감소, 15% 에너지 절감 달성"
        : "Average 90% bacteria reduction, 15% energy savings achieved",
    },
  ];

  return (
    <div className="pt-32 pb-16">
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="default" className="mb-4">
            About Us
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {isKorean ? "건강한 공기, 건강한 삶" : "Clean Air, Healthy Life"}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {isKorean
              ? "Q-Solutions는 AIoT 센서 기반 실내 공기질 관리 전문 기업입니다. 과학적인 데이터 분석으로 안전하고 쾌적한 실내 환경을 만들어 드립니다."
              : "Q-Solutions specializes in AIoT sensor-based indoor air quality management. We create safe and comfortable indoor environments through scientific data analysis."}
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {isKorean ? "우리의 미션" : "Our Mission"}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {isKorean
                  ? "우리는 '보이지 않는 위험'으로부터 사람들을 보호합니다. 실내 공기질은 눈에 보이지 않지만, 건강과 생산성에 직접적인 영향을 미칩니다. Q-Solutions는 최첨단 센서 기술과 과학적 분석 모델을 결합하여, 모든 실내 공간을 안전하게 만드는 것을 목표로 합니다."
                  : "We protect people from 'invisible dangers'. Indoor air quality is invisible but directly affects health and productivity. Q-Solutions combines cutting-edge sensor technology with scientific analysis models to make every indoor space safe."}
              </p>
              <div className="flex items-center gap-4 text-primary-600 font-semibold">
                <span className="text-2xl">&quot;</span>
                <span>Clean air saves us - Q-Solutions help us</span>
                <span className="text-2xl">&quot;</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">
                    50+
                  </div>
                  <div className="text-sm text-gray-600">
                    {isKorean ? "도입 기관" : "Client Organizations"}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">
                    90%
                  </div>
                  <div className="text-sm text-gray-600">
                    {isKorean ? "세균 감소율" : "Bacteria Reduction"}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">
                    24/7
                  </div>
                  <div className="text-sm text-gray-600">
                    {isKorean ? "실시간 모니터링" : "Real-time Monitoring"}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">
                    15%
                  </div>
                  <div className="text-sm text-gray-600">
                    {isKorean ? "에너지 절감" : "Energy Savings"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
            {isKorean ? "핵심 가치" : "Core Values"}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
            {isKorean ? "연혁" : "Milestones"}
          </h2>
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-lg font-bold text-primary-600">
                    {milestone.year}
                  </span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-primary-500 mt-1.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {isKorean ? "연락처" : "Contact"}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary-500 mt-1" />
              <div>
                <p className="font-medium text-gray-900">
                  {isKorean ? "본사" : "Headquarters"}
                </p>
                <p className="text-gray-600 text-sm">
                  {isKorean
                    ? "경남 창원시 성산구 창원대로 797 한국재료연구원 6동 4층"
                    : "797 Changwon-daero, Seongsan-gu, Changwon, Korea"}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary-500 mt-1" />
              <div>
                <p className="font-medium text-gray-900">
                  {isKorean ? "서울 지사" : "Seoul Branch"}
                </p>
                <p className="text-gray-600 text-sm">
                  {isKorean
                    ? "서울 송파구 송파대로 167 B동 B620호"
                    : "167 Songpa-daero, Songpa-gu, Seoul, Korea"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
