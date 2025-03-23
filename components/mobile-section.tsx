"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Smartphone, WifiOff, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MobileSection() {
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

  return (
    <section
      ref={sectionRef}
      id="mobile-section"
      className="py-24 bg-black text-white dark:bg-white dark:text-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-light tracking-tight mb-6"
            >
              Take your apps mobile
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-300 dark:text-gray-600 max-w-3xl mx-auto"
            >
              Build native mobile apps for iOS and Android without the complexity. Create powerful mobile experiences
              for your internal teams.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="space-y-8">
                <div className="bg-gray-900 dark:bg-gray-100 rounded-lg p-6">
                  <div className="flex items-start">
                    <div className="mr-4 bg-blue-500 p-2 rounded-lg">
                      <Smartphone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Native Experience</h3>
                      <p className="text-gray-300 dark:text-gray-600">
                        Build once, deploy to iOS and Android. Create native mobile experiences without maintaining
                        separate codebases.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 dark:bg-gray-100 rounded-lg p-6">
                  <div className="flex items-start">
                    <div className="mr-4 bg-purple-500 p-2 rounded-lg">
                      <WifiOff className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Offline Support</h3>
                      <p className="text-gray-300 dark:text-gray-600">
                        Work with or without an internet connection. Data syncs automatically when connectivity is
                        restored.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 dark:bg-gray-100 rounded-lg p-6">
                  <div className="flex items-start">
                    <div className="mr-4 bg-green-500 p-2 rounded-lg">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">Enterprise Security</h3>
                      <p className="text-gray-300 dark:text-gray-600">
                        Secure authentication, data encryption, and device management for enterprise deployments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-200 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
                >
                  GET STARTED
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              <div className="relative mx-auto w-64 h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500 to-blue-500 rounded-[40px] p-2">
                  <div className="bg-black dark:bg-white h-full w-full rounded-[36px] overflow-hidden">
                    <div className="h-12 flex items-center justify-center">
                      <div className="w-32 h-6 bg-gray-900 dark:bg-gray-200 rounded-b-xl"></div>
                    </div>
                    <div className="p-4 space-y-4">
                      <div className="h-10 bg-gray-800 dark:bg-gray-200 rounded-lg flex items-center px-3">
                        <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                        <div className="h-4 w-24 bg-gray-700 dark:bg-gray-300 rounded"></div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gray-800 dark:bg-gray-200 rounded-lg p-3 h-32 flex flex-col justify-between">
                          <div className="w-8 h-8 bg-green-500 rounded-lg"></div>
                          <div className="h-4 w-full bg-gray-700 dark:bg-gray-300 rounded"></div>
                        </div>
                        <div className="bg-gray-800 dark:bg-gray-200 rounded-lg p-3 h-32 flex flex-col justify-between">
                          <div className="w-8 h-8 bg-purple-500 rounded-lg"></div>
                          <div className="h-4 w-full bg-gray-700 dark:bg-gray-300 rounded"></div>
                        </div>
                        <div className="bg-gray-800 dark:bg-gray-200 rounded-lg p-3 h-32 flex flex-col justify-between">
                          <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
                          <div className="h-4 w-full bg-gray-700 dark:bg-gray-300 rounded"></div>
                        </div>
                        <div className="bg-gray-800 dark:bg-gray-200 rounded-lg p-3 h-32 flex flex-col justify-between">
                          <div className="w-8 h-8 bg-yellow-500 rounded-lg"></div>
                          <div className="h-4 w-full bg-gray-700 dark:bg-gray-300 rounded"></div>
                        </div>
                      </div>

                      <div className="bg-gray-800 dark:bg-gray-200 rounded-lg p-4 space-y-2">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-blue-500 rounded-full mr-2"></div>
                          <div>
                            <div className="h-3 w-20 bg-gray-700 dark:bg-gray-300 rounded"></div>
                            <div className="h-2 w-16 bg-gray-700 dark:bg-gray-300 rounded mt-1"></div>
                          </div>
                        </div>
                        <div className="h-12 bg-gray-700 dark:bg-gray-300 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone buttons */}
                <div className="absolute -right-2 top-24 w-1 h-12 bg-gray-700 dark:bg-gray-300 rounded-l-md"></div>
                <div className="absolute -left-2 top-20 w-1 h-8 bg-gray-700 dark:bg-gray-300 rounded-r-md"></div>
                <div className="absolute -left-2 top-32 w-1 h-12 bg-gray-700 dark:bg-gray-300 rounded-r-md"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-blue-400 rounded-lg rotate-12 opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-purple-400 rounded-full opacity-80"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

