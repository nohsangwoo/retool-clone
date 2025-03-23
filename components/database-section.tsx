"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Table, BarChart, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DatabaseSection() {
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
      id="database-section"
      className="py-24 bg-gradient-to-b from-black to-gray-900 dark:from-white dark:to-gray-100"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="order-2 lg:order-1"
            >
              <div className="bg-gray-900 dark:bg-white rounded-lg overflow-hidden shadow-xl">
                <div className="bg-gray-800 dark:bg-gray-200 p-3 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-sm text-gray-300 dark:text-gray-700">SQL Editor</div>
                </div>
                <div className="p-4 font-mono text-sm text-blue-400 dark:text-blue-600">
                  <div className="flex">
                    <div className="text-gray-500 mr-4 select-none">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="leading-6">
                          {i + 1}
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="leading-6 text-purple-400 dark:text-purple-600">SELECT</div>
                      <div className="leading-6 pl-4 text-green-400 dark:text-green-600">user_id,</div>
                      <div className="leading-6 pl-4 text-green-400 dark:text-green-600">username,</div>
                      <div className="leading-6 pl-4 text-green-400 dark:text-green-600">email,</div>
                      <div className="leading-6 pl-4 text-green-400 dark:text-green-600">created_at</div>
                      <div className="leading-6 text-purple-400 dark:text-purple-600">FROM</div>
                      <div className="leading-6 pl-4 text-yellow-400 dark:text-yellow-600">users</div>
                      <div className="leading-6 text-purple-400 dark:text-purple-600">ORDER BY</div>
                      <div className="leading-6 pl-4 text-green-400 dark:text-green-600">
                        created_at <span className="text-purple-400 dark:text-purple-600">DESC</span>;
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-gray-800 dark:bg-gray-200">
                  <div className="bg-gray-900 dark:bg-white p-3 rounded-lg">
                    <div className="grid grid-cols-4 gap-2 text-xs text-gray-400 dark:text-gray-600 border-b border-gray-700 dark:border-gray-300 pb-2 mb-2">
                      <div>user_id</div>
                      <div>username</div>
                      <div>email</div>
                      <div>created_at</div>
                    </div>
                    <div className="space-y-2 text-sm text-gray-300 dark:text-gray-700">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="grid grid-cols-4 gap-2">
                          <div>{1001 + i}</div>
                          <div>user{i + 1}</div>
                          <div>user{i + 1}@example.com</div>
                          <div>2023-06-{15 - i}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white dark:text-gray-900 mb-6">
                Powerful database for your applications
              </h2>
              <p className="text-xl text-gray-300 dark:text-gray-600 mb-8">
                Store, query, and manage your data with our built-in database. No need to set up and maintain separate
                database infrastructure.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="mr-4 bg-blue-500 p-2 rounded-lg">
                    <Table className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-white dark:text-gray-900">Data Storage</h3>
                    <p className="text-gray-300 dark:text-gray-600">
                      Store your application data securely in our managed database. Create tables, define relationships,
                      and set up permissions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 bg-purple-500 p-2 rounded-lg">
                    <BarChart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-white dark:text-gray-900">SQL Editor</h3>
                    <p className="text-gray-300 dark:text-gray-600">
                      Write and execute SQL queries directly in the browser. Visualize results and save queries for
                      later use.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 bg-green-500 p-2 rounded-lg">
                    <Lock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-white dark:text-gray-900">Security & Permissions</h3>
                    <p className="text-gray-300 dark:text-gray-600">
                      Control access to your data with fine-grained permissions. Encrypt sensitive data and audit all
                      access.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
              >
                EXPLORE DATABASE
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

