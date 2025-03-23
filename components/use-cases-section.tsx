"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LayoutGrid, Sparkles, Database, Share2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface UseCase {
  id: string
  title: string
  icon: React.ReactNode
  description: string
  includedFeatures?: string[]
  connectTo?: string[]
  image: string
}

const useCases: UseCase[] = [
  {
    id: "solutions",
    title: "Solutions that scale with your business",
    icon: <LayoutGrid className="h-6 w-6" />,
    description:
      "Build powerful internal tools that grow with your organization. Connect your data sources and create custom interfaces for every team.",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "admin-panel",
    title: "Admin panel",
    icon: <LayoutGrid className="h-6 w-6" />,
    description:
      "Build reliable admin panels for support, operations, and engineering. Map to your existing SSO and permission systems, and give secure access to relevant teams.",
    includedFeatures: ["70+ integrations", "100+ UI components"],
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "gen-ai",
    title: "Gen AI apps",
    icon: <Sparkles className="h-6 w-6" />,
    description:
      "Connect AI apps to your internal data, workflows, and LLMs. Use pre-built actions to ship and iterate. Ingest data into ReLudgi Vectors to build RAG apps.",
    connectTo: ["OpenAI", "Anthropic", "Microsoft Azure"],
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "sql-dashboard",
    title: "SQL Dashboard",
    icon: <Database className="h-6 w-6" />,
    description:
      "Create dashboards and reports, including write-backs, as needed. Connect to more than 70+ systems, including APIs, databases, and cloud storage services.",
    connectTo: ["PostgreSQL database", "MySQL database", "GraphQL APIs", "Amazon Redshift", "Google BigQuery"],
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "customer-portal",
    title: "Customer portal",
    icon: <Share2 className="h-6 w-6" />,
    description:
      "Create branded customer portals that connect to your internal systems. Give customers self-service access to their data, orders, and support.",
    includedFeatures: ["White-labeling", "SSO integration", "Role-based access"],
    image: "/placeholder.svg?height=600&width=800",
  },
]

// Mock images for the different use cases
const mockImages = {
  solutions: "/placeholder.svg?height=600&width=800&text=Solutions+Dashboard",
  "admin-panel": "/placeholder.svg?height=600&width=800&text=Admin+Panel",
  "gen-ai": "/placeholder.svg?height=600&width=800&text=AI+Interface",
  "sql-dashboard": "/placeholder.svg?height=600&width=800&text=SQL+Dashboard",
  "customer-portal": "/placeholder.svg?height=600&width=800&text=Customer+Portal",
}

export default function UseCasesSection() {
  const [activeCase, setActiveCase] = useState("solutions")
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const activeCaseRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    // Scroll active case into view when it changes
    if (activeCaseRef.current) {
      activeCaseRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      })
    }
  }, [activeCase])

  const activeUseCaseData = useCases.find((uc) => uc.id === activeCase)

  return (
    <section ref={sectionRef} className="bg-black text-white py-24 overflow-hidden" id="use-cases">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-sm uppercase tracking-wider text-gray-400 mb-3">Use cases</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left side - Menu */}
          <div className="lg:col-span-5 space-y-24">
            {useCases.map((useCase) => (
              <div
                key={useCase.id}
                ref={useCase.id === activeCase ? activeCaseRef : null}
                className={cn(
                  "transition-all duration-500 cursor-pointer",
                  useCase.id === activeCase ? "opacity-100" : "opacity-50 hover:opacity-70",
                )}
                onClick={() => setActiveCase(useCase.id)}
              >
                <div className="flex items-center mb-4">
                  <div
                    className={cn(
                      "mr-3 transition-colors duration-300",
                      useCase.id === activeCase ? "text-white" : "text-gray-500",
                    )}
                  >
                    {useCase.icon}
                  </div>
                  <h3
                    className={cn(
                      "text-2xl md:text-3xl font-light transition-colors duration-300",
                      useCase.id === activeCase ? "text-white" : "text-gray-400",
                    )}
                  >
                    {useCase.title}
                  </h3>
                </div>

                <div
                  className={cn(
                    "transition-all duration-500",
                    useCase.id === activeCase ? "opacity-100 max-h-96" : "opacity-0 max-h-0 overflow-hidden",
                  )}
                >
                  <p className="text-gray-300 mb-6 max-w-xl">{useCase.description}</p>

                  {useCase.includedFeatures && (
                    <div className="mb-4">
                      <div className="text-sm text-gray-400 mb-2">Included:</div>
                      <div className="flex flex-wrap gap-2">
                        {useCase.includedFeatures.map((feature) => (
                          <span key={feature} className="bg-gray-800 text-white text-sm px-3 py-1 rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {useCase.connectTo && (
                    <div>
                      <div className="text-sm text-gray-400 mb-2">
                        {useCase.id === "gen-ai"
                          ? "Connect to popular public or private LLMs:"
                          : "Ready to connect to:"}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {useCase.connectTo.map((item) => (
                          <span key={item} className="bg-gray-800 text-white text-sm px-3 py-1 rounded-full">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Floating images */}
          <div className="lg:col-span-7 relative min-h-[500px]">
            <div className="sticky top-32">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCase}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    duration: 0.5,
                  }}
                  className="relative z-10"
                >
                  <div className="relative rounded-lg overflow-hidden shadow-2xl border border-gray-800">
                    <img
                      src={mockImages[activeCase as keyof typeof mockImages] || "/placeholder.svg"}
                      alt={activeUseCaseData?.title || "Use case"}
                      className="w-full h-auto"
                    />
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Background grid */}
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 opacity-30 pointer-events-none">
              {Array.from({ length: 64 }).map((_, i) => (
                <div key={i} className="border border-blue-900/20"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

