"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GetStartedSectionProps {
  id?: string
}

export default function GetStartedSection({ id = "get-started-section" }: GetStartedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

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

  const features = [
    "Connect to any database or API",
    "Build UIs with 90+ pre-built components",
    "Customize with JavaScript when needed",
    "Deploy to cloud or self-host",
    "Enterprise-grade security",
    "Collaborate with your team",
  ]

  return (
    <section
      ref={sectionRef}
      id={id}
      className="py-24 bg-gradient-to-b from-black to-gray-900 dark:from-gray-100 dark:to-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white dark:text-gray-900 mb-6">
                Start building better internal tools today
              </h2>
              <p className="text-xl text-gray-300 dark:text-gray-600 mb-8">
                Join thousands of companies that use ReLudgi to build powerful internal tools in a fraction of the time.
              </p>

              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="flex items-center"
                  >
                    <div className="mr-3 bg-green-500 rounded-full p-1">
                      <Check className="h-4 w-4 text-black" />
                    </div>
                    <span className="text-white dark:text-gray-900">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-200 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
                >
                  START FOR FREE
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-700 hover:bg-gray-800 text-white dark:border-gray-400 dark:text-gray-900 dark:hover:bg-gray-200"
                >
                  BOOK A DEMO
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-medium mb-6">Get started in minutes</h3>

                <div className="space-y-6 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-sm text-blue-200 mb-2">Step 1</div>
                    <p className="font-medium">Connect your data sources</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-sm text-blue-200 mb-2">Step 2</div>
                    <p className="font-medium">Build your UI with drag-and-drop</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-sm text-blue-200 mb-2">Step 3</div>
                    <p className="font-medium">Deploy to your team</p>
                  </div>
                </div>

                <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
                  START BUILDING <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-green-400 rounded-lg rotate-12 opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full opacity-80"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

