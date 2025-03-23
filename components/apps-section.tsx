"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Check, Layers, Database, Code } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AppsSection() {
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
    "Drag-and-drop interface builder",
    "90+ pre-built UI components",
    "Connect to any data source",
    "Custom JavaScript extensions",
    "Role-based access control",
    "Deploy to cloud or self-host",
  ]

  return (
    <section
      ref={sectionRef}
      id="apps-section"
      className="py-24 bg-gradient-to-b from-gray-900 to-black dark:from-gray-100 dark:to-white"
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
                Build powerful apps without code
              </h2>
              <p className="text-xl text-gray-300 dark:text-gray-600 mb-8">
                Create custom interfaces for your data with our drag-and-drop app builder. Connect to any database or
                API and deploy in minutes.
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
                    <div className="mr-3 bg-blue-500 rounded-full p-1">
                      <Check className="h-4 w-4 text-white" />
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
                  START BUILDING <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-700 text-black dark:text-white hover:bg-gray-800 dark:border-gray-400 dark:hover:bg-gray-200"
                >
                  VIEW DEMO
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
                <h3 className="text-2xl font-medium mb-6">App Builder Features</h3>

                <div className="space-y-6 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-start">
                    <div className="mr-4 bg-blue-400 p-2 rounded-lg">
                      <Layers className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-medium mb-1">UI Component Library</div>
                      <p className="text-sm text-blue-100">
                        Tables, charts, forms, buttons, and more. Customize to match your brand.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-start">
                    <div className="mr-4 bg-purple-400 p-2 rounded-lg">
                      <Database className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-medium mb-1">Data Connections</div>
                      <p className="text-sm text-blue-100">
                        Connect to PostgreSQL, MySQL, MongoDB, REST APIs, GraphQL, and more.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-start">
                    <div className="mr-4 bg-green-400 p-2 rounded-lg">
                      <Code className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-medium mb-1">Custom Logic</div>
                      <p className="text-sm text-blue-100">
                        Add JavaScript functions to transform data and handle complex business logic.
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">EXPLORE APP BUILDER</Button>
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

