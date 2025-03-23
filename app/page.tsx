"use client"
import { Button } from "@/components/ui/button"
import GridBackground from "@/components/grid-background"
import NewBadge from "@/components/new-badge"
import InteractiveSection from "@/components/interactive-section"
import CompanyLogosSection from "@/components/company-logos-section"
import FeaturesSection from "@/components/features-section"
import TestimonialsSection from "@/components/testimonials-section"
import GetStartedSection from "@/components/get-started-section"
import UseCasesSection from "@/components/use-cases-section"
import EnterpriseSection from "@/components/enterprise-section"
import AppsSection from "@/components/apps-section"
import WorkflowsSection from "@/components/workflows-section"
import DatabaseSection from "@/components/database-section"
import MobileSection from "@/components/mobile-section"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row">
          <div className="relative w-full lg:w-1/2 bg-black text-white dark:bg-gray-900 p-6 md:p-12 lg:p-16 flex flex-col justify-center">
            <GridBackground />
            <div className="relative z-10 max-w-2xl mx-auto lg:mx-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6">
                The best way to build internal software
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Seamlessly connect databases, build with elegant components, and customize with code. Accelerate mundane
                tasks, freeing up time for the work that matters most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                >
                  START FOR FREE
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-700 text-black hover:bg-gray-800 dark:border-gray-300 dark:hover:bg-gray-200 dark:text-white"
                >
                  BOOK A DEMO
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 bg-sky-100 dark:bg-sky-900 relative overflow-hidden">
            <div className="absolute inset-0 flex items-end justify-center">
              <div
                className="w-full h-[40%] bg-contain bg-bottom bg-no-repeat"
                style={{ backgroundImage: "url('/cityscape.svg')" }}
              ></div>
            </div>
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
              <NewBadge />
            </div>
          </div>
        </section>

        {/* Apps Section */}
        <AppsSection />

        {/* Workflows Section */}
        <WorkflowsSection />

        {/* Database Section */}
        <DatabaseSection />

        {/* Mobile Section */}
        <MobileSection />

        {/* Features Section with left menu and animated content */}
        <FeaturesSection />

        {/* Interactive Section */}
        <section className="bg-black text-white dark:bg-gray-900 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
                Extend, customize, and connect 100+{" "}
                <span className="text-blue-400 inline-flex items-center">
                  <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
                    <rect x="6" y="6" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  components
                </span>{" "}
                to build polished{" "}
                <span className="text-blue-400 inline-flex items-center">
                  <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M7 12H17M7 8H17M7 16H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  apps
                </span>
                , fast.
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                >
                  START FOR FREE
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-700 text-black dark:text-white hover:bg-gray-800 dark:border-gray-300 dark:hover:bg-gray-200 dark:text-white"
                >
                  BOOK A DEMO
                </Button>
              </div>
            </div>

            <InteractiveSection />
          </div>
        </section>

        {/* Company Logos Section */}
        <CompanyLogosSection />

        {/* Use Cases Section */}
        <UseCasesSection />

        {/* Enterprise Section - Light Background */}
        <EnterpriseSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Get Started Section */}
        <GetStartedSection id="get-started" />

        {/* Extra space at the bottom to ensure scrollability */}
        <div className="py-32 bg-black dark:bg-gray-900"></div>
      </main>
    </div>
  )
}

