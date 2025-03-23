"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Clock, Zap, Workflow } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WorkflowsSection() {
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
      id="workflows-section"
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
              Automate your business processes
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-300 dark:text-gray-600 max-w-3xl mx-auto"
            >
              Build powerful workflows that connect your tools and automate repetitive tasks. No coding required.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-900 dark:bg-gray-100 rounded-lg p-6 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/20 rounded-full -mr-10 -mt-10"></div>
              <div className="relative z-10">
                <div className="bg-blue-500 text-white p-3 rounded-lg inline-block mb-4">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-3">Scheduled Triggers</h3>
                <p className="text-gray-300 dark:text-gray-600 mb-4">
                  Run workflows on a schedule - hourly, daily, weekly, or with custom cron expressions.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-blue-400" />
                    <span>Recurring reports</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-blue-400" />
                    <span>Data synchronization</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-blue-400" />
                    <span>Automated cleanup tasks</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="border-gray-700 text-black dark:text-white hover:bg-gray-800 dark:border-gray-300 dark:hover:bg-gray-200"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-900 dark:bg-gray-100 rounded-lg p-6 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/20 rounded-full -mr-10 -mt-10"></div>
              <div className="relative z-10">
                <div className="bg-purple-500 text-white p-3 rounded-lg inline-block mb-4">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-3">Event-Based Triggers</h3>
                <p className="text-gray-300 dark:text-gray-600 mb-4">
                  Trigger workflows when specific events occur in your apps or external systems.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-purple-400" />
                    <span>Form submissions</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-purple-400" />
                    <span>Database changes</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-purple-400" />
                    <span>API webhooks</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="border-gray-700 text-black dark:text-white hover:bg-gray-800 dark:border-gray-300 dark:hover:bg-gray-200"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-900 dark:bg-gray-100 rounded-lg p-6 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/20 rounded-full -mr-10 -mt-10"></div>
              <div className="relative z-10">
                <div className="bg-green-500 text-white p-3 rounded-lg inline-block mb-4">
                  <Workflow className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-3">Multi-Step Actions</h3>
                <p className="text-gray-300 dark:text-gray-600 mb-4">
                  Chain together multiple actions with conditional logic and error handling.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-green-400" />
                    <span>Conditional branching</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-green-400" />
                    <span>Data transformation</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-green-400" />
                    <span>Error handling & retries</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="border-gray-700 text-black dark:text-white hover:bg-gray-800 dark:border-gray-300 dark:hover:bg-gray-200"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white"
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-2xl font-medium mb-2">Ready to automate your workflows?</h3>
                <p className="text-blue-100">Start building powerful automations in minutes, not months.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  START FOR FREE
                </Button>
                <Button size="lg" variant="outline" className="border-white hover:bg-blue-700">
                  WATCH DEMO
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

