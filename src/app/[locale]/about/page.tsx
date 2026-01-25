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
      date: "2025. 12",
      title: "2025년 예비창업패키지사업 대상 수상",
    },
    {
      date: "2025. 12",
      title: "KST SEED 투자 유치",
      link: "https://www.etnews.com/20260107000098",
    },
    {
      date: "2025. 05",
      title: "예비창업패키지 과제 선정",
    },
    {
      date: "2025. 05. 16",
      title: "㈜큐솔루션즈 법인 설립",
      description: "연구원 창업, 대표: 김도근 박사",
    },
    {
      date: "2025. 05",
      title: "미국특허 등록",
      description: "다공성 세라믹 유전체를 포함하는 플라즈마 발생장치 (12293899)",
    },
    {
      date: "2024. 11",
      title: "KISTEP 주관 사회문제해결R&D 우수성과 선정",
      description: "의료시설 공공기관 내 호흡기 전파 감염을 줄이는 디지털 감염제어 플랫폼",
    },
    {
      date: "2024. 11",
      title: "특허등록 - 휴대용 플라즈마 발생장치",
      description: "10-2726860 / 기술이전(통상실시)",
    },
    {
      date: "2024. 11",
      title: "특허출원",
      description: "부유 감염원 농도에 따른 방역 공조 운영 방법 및 시스템, 방역 공조 장치 배치 추천 방법 및 시스템",
    },
    {
      date: "2024. 10",
      title: "KST 딥 테크 기획창업 챌린지 프로그램 선정",
      description: "제1회 예비창업자 공모",
    },
    {
      date: "2024. 10",
      title: "특허출원",
      description: "방역 공조 관리 방법 및 시스템",
    },
    {
      date: "2024. 08",
      title: "AI 방역공조 플랫폼 POC 완료",
      description: "테스트베드 내 코로나19 확산억제 사례 확인",
    },
    {
      date: "2024. 06",
      title: "미국특허출원",
      description: "공기매개 감염병 확산 방지용 방역공조 시스템",
    },
    {
      date: "2024. 03",
      title: "AI 방역공조 플랫폼 테스트베드 운영",
      description: "예산군 노인요양원",
    },
    {
      date: "2023. 11",
      title: "특허등록 - 다공성 세라믹 유전체를 포함하는 플라즈마 발생장치",
      description: "10-2599214 / 기술이전(통상실시)",
    },
    {
      date: "2023. 09",
      title: "특허등록 - 항균코팅 내구성이 향상된 항균필터",
      description: "10-2575876 / 기술이전(통상실시)",
    },
    {
      date: "2023. 06",
      title: "AI 방역공조 플랫폼 테스트베드 운영",
      description: "창원한마음병원 소아과 로비",
    },
    {
      date: "2023. 06",
      title: "특허출원",
      description: "공기매개 감염병 확산 방지용 방역공조 시스템, 필터부 포집 병원체 비활성화 기능이 구비된 공기청정기",
    },
    {
      date: "2023. 04",
      title: "특허등록 - 다중이용시설 방역 공조 시스템 및 방법",
      description: "10-2521537",
    },
    {
      date: "2022. 12. 23",
      title: "언론홍보 - YTN 사이언스",
      description: "항균 기능성 구리 마스크",
    },
    {
      date: "2022. 10",
      title: "AI 방역공조 플랫폼 테스트베드 운영",
      description: "경남도청 민원실",
    },
    {
      date: "2022. 04",
      title: "범부처 감염병안전강화기술개발사업 선정",
      description: "의료현장 감염병 안전성 강화를 위한 디지털·환경데이터 기반 AI 방역공조 시스템 개발 (2022-2024, 주관기관)",
    },
    {
      date: "2022. 04",
      title: "미래감염병기술개발사업 선정",
      description: "디지털트윈 기반 바이러스 정밀 탐지 및 지능형 방역 공조 시스템 개발 (과학기술정보통신부 한국연구재단, 2022-2024, 주관기관)",
    },
    {
      date: "2022. 02. 07",
      title: "언론홍보 - SBS 뉴스",
      description: "공기중 코로나19 바이러스 잡는다. 플라즈마 공조기술 개발",
    },
    {
      date: "2021. 05. 17",
      title: "언론홍보 - MBC 뉴스",
      description: "코로나19 바이러스 사멸... 기능성 마스크 개발",
    },
    {
      date: "2020. 12. 10",
      title: "언론홍보 - YTN 사이언스",
      description: "공기 통해 전파하는 감염병 막는다",
    },
    {
      date: "2019. 01",
      title: "공공시설 감염병 제어소재 개발 사업 시작",
      description: "2019-2023 / 한국재료연구원 일반사업 / 총괄책임",
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
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[120px] top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-4 md:gap-6 items-start group">
                  <div className="flex-shrink-0 w-24 md:w-28 text-right">
                    <span className="text-sm font-semibold text-primary-600">
                      {milestone.date}
                    </span>
                  </div>
                  <div className="flex-shrink-0 w-3 h-3 rounded-full bg-primary-500 mt-1.5 relative z-10 group-hover:scale-125 transition-transform" />
                  <div className="flex-1 pb-4">
                    {milestone.link ? (
                      <a
                        href={milestone.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="기사 연결"
                        className="inline-flex items-center gap-1 font-semibold text-primary-600 text-sm md:text-base hover:text-primary-700 hover:underline transition-colors"
                      >
                        {milestone.title}
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <h3 className="font-semibold text-gray-900 text-sm md:text-base">
                        {milestone.title}
                      </h3>
                    )}
                    {milestone.description && (
                      <p className="text-gray-500 text-xs md:text-sm mt-0.5">{milestone.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
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
                  {isKorean ? "회의공간" : "Meeting Space"}
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
