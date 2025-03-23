"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface SolutionItem {
  id: string
  title: string
  description: string
  path: string
  color: {
    primary: string
    secondary: string
    text: string
    darkPrimary: string
    darkSecondary: string
    darkText: string
  }
}

const solutionItems: SolutionItem[] = [
  {
    id: "ai-apps",
    title: "AI apps",
    description: "Build powerful AI applications with LLM integration and vector databases.",
    path: "/solutions/ai-apps",
    color: {
      primary: "from-orange-500 to-amber-600",
      secondary: "bg-orange-100",
      text: "text-orange-800",
      darkPrimary: "from-orange-600 to-amber-700",
      darkSecondary: "bg-orange-900/30",
      darkText: "text-orange-300",
    },
  },
  {
    id: "enterprise",
    title: "Enterprise",
    description: "Secure, scalable solutions for large organizations with advanced compliance needs.",
    path: "/solutions/enterprise",
    color: {
      primary: "from-blue-500 to-blue-600",
      secondary: "bg-blue-100",
      text: "text-blue-800",
      darkPrimary: "from-blue-600 to-blue-700",
      darkSecondary: "bg-blue-900/30",
      darkText: "text-blue-300",
    },
  },
  {
    id: "startups",
    title: "Startups",
    description: "Rapidly build and iterate on internal tools as your company grows.",
    path: "/solutions/startups",
    color: {
      primary: "from-purple-500 to-purple-600",
      secondary: "bg-purple-100",
      text: "text-purple-800",
      darkPrimary: "from-purple-600 to-purple-700",
      darkSecondary: "bg-purple-900/30",
      darkText: "text-purple-300",
    },
  },
  {
    id: "external-apps",
    title: "External apps",
    description: "Create customer-facing portals and applications with your branding.",
    path: "/solutions/external-apps",
    color: {
      primary: "from-green-500 to-green-600",
      secondary: "bg-green-100",
      text: "text-green-800",
      darkPrimary: "from-green-600 to-green-700",
      darkSecondary: "bg-green-900/30",
      darkText: "text-green-300",
    },
  },
  {
    id: "integrations",
    title: "Integrations",
    description: "Connect to any database, API, or service with our extensive integration library.",
    path: "/solutions/integrations",
    color: {
      primary: "from-cyan-500 to-cyan-600",
      secondary: "bg-cyan-100",
      text: "text-cyan-800",
      darkPrimary: "from-cyan-600 to-cyan-700",
      darkSecondary: "bg-cyan-900/30",
      darkText: "text-cyan-300",
    },
  },
  {
    id: "self-hosting",
    title: "Self-hosting",
    description: "Deploy on your own infrastructure with complete control and security.",
    path: "/solutions/self-hosting",
    color: {
      primary: "from-red-500 to-red-600",
      secondary: "bg-red-100",
      text: "text-red-800",
      darkPrimary: "from-red-600 to-red-700",
      darkSecondary: "bg-red-900/30",
      darkText: "text-red-300",
    },
  },
]

interface SolutionsMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function SolutionsMenu({ isOpen, onClose }: SolutionsMenuProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onClose])

  // Prevent scrolling of the main page when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16" onClick={onClose}>
      <div
        className="bg-white dark:bg-gray-900 rounded-lg shadow-xl w-full max-w-6xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wider">
                Solutions
              </h3>
              <div className="space-y-1">
                {solutionItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.path}
                    className={cn(
                      "block p-3 rounded-lg transition-all duration-200 relative group",
                      hoveredItem === item.id
                        ? `${item.color.secondary} dark:${item.color.darkSecondary}`
                        : hoveredItem
                          ? "opacity-70 hover:opacity-90"
                          : "hover:bg-gray-100 dark:hover:bg-gray-800",
                    )}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    onClick={onClose}
                  >
                    <div className="flex items-start">
                      <div className="flex-grow pr-10">
                        <h4
                          className={cn(
                            "text-lg font-medium mb-1",
                            hoveredItem === item.id && `${item.color.text} dark:${item.color.darkText}`,
                          )}
                        >
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                      </div>

                      <AnimatePresence>
                        {hoveredItem === item.id && (
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2"
                          >
                            <motion.div
                              animate={{ x: [0, 5, 0] }}
                              transition={{
                                repeat: Number.POSITIVE_INFINITY,
                                duration: 1.5,
                                ease: "easeInOut",
                              }}
                              className={cn(
                                "p-2 rounded-full",
                                `bg-gradient-to-r ${item.color.primary} dark:bg-gradient-to-r dark:${item.color.darkPrimary}`,
                              )}
                            >
                              <ArrowRight className="h-5 w-5 text-white" />
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wider">
                Examples
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="/examples/templates"
                  className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  onClick={onClose}
                >
                  <h4 className="font-medium mb-1">Templates</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Ready-to-use app templates for common use cases
                  </p>
                </Link>
                <Link
                  href="/examples/utilities"
                  className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  onClick={onClose}
                >
                  <h4 className="font-medium mb-1">Utilities</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Helper functions and components to speed up development
                  </p>
                </Link>
                <Link
                  href="/examples/case-studies"
                  className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  onClick={onClose}
                >
                  <h4 className="font-medium mb-1">Case Studies</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Real-world examples from our customers</p>
                </Link>
                <Link
                  href="/examples/tutorials"
                  className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  onClick={onClose}
                >
                  <h4 className="font-medium mb-1">Tutorials</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Step-by-step guides to build common applications
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <div className="text-sm text-gray-600 dark:text-gray-400">Need help choosing the right solution?</div>
          <div className="flex space-x-3">
            <button
              className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
              onClick={onClose}
            >
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

