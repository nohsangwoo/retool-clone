"use client"

import { useState, useRef, useEffect } from "react"
import { ArrowRight, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
// Add this import at the top of the file
import SolutionsMenu from "./solutions-menu"

interface MegaMenuProps {
  isOpen: boolean
  onClose: () => void
  menuType: string
}

export default function MegaMenu({ isOpen, onClose, menuType }: MegaMenuProps) {
  const [activeItem, setActiveItem] = useState("app-builder")
  const contentRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onClose])

  // Prevent scrolling of the main page when mega menu is open
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

  // Handle scroll to section when clicking on a menu item
  const handleSectionScroll = (sectionId: string) => {
    onClose()

    setTimeout(() => {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  if (!isOpen) return null

  if (menuType === "products") {
    return (
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-16" onClick={onClose}>
        <div
          className="bg-white dark:bg-gray-900 rounded-lg shadow-xl w-full max-w-6xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex">
            {/* Left sidebar */}
            <div className="w-64 bg-gray-100 dark:bg-gray-800 p-4 border-r border-gray-200 dark:border-gray-700">
              <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 px-3">CORE LIBRARY</div>
              <nav className="space-y-1">
                <div
                  className={cn(
                    "w-full flex items-center px-3 py-2 text-sm font-medium rounded-md cursor-pointer",
                    activeItem === "app-builder"
                      ? "text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/30"
                      : "text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700",
                  )}
                  onMouseEnter={() => setActiveItem("app-builder")}
                  onClick={() => handleSectionScroll("apps-section")}
                >
                  <span>Apps</span>
                  {activeItem === "app-builder" && <ChevronRight className="ml-auto h-4 w-4" />}
                </div>
                <div
                  className={cn(
                    "w-full flex items-center px-3 py-2 text-sm font-medium rounded-md cursor-pointer",
                    activeItem === "workflows"
                      ? "text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/30"
                      : "text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700",
                  )}
                  onMouseEnter={() => setActiveItem("workflows")}
                  onClick={() => handleSectionScroll("workflows-section")}
                >
                  <span>Workflows</span>
                  {activeItem === "workflows" && <ChevronRight className="ml-auto h-4 w-4" />}
                </div>
                <div
                  className={cn(
                    "w-full flex items-center px-3 py-2 text-sm font-medium rounded-md cursor-pointer",
                    activeItem === "database"
                      ? "text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/30"
                      : "text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700",
                  )}
                  onMouseEnter={() => setActiveItem("database")}
                  onClick={() => handleSectionScroll("database-section")}
                >
                  <span>Database</span>
                  {activeItem === "database" && <ChevronRight className="ml-auto h-4 w-4" />}
                </div>
                <div
                  className={cn(
                    "w-full flex items-center px-3 py-2 text-sm font-medium rounded-md cursor-pointer",
                    activeItem === "mobile"
                      ? "text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/30"
                      : "text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700",
                  )}
                  onMouseEnter={() => setActiveItem("mobile")}
                  onClick={() => handleSectionScroll("mobile-section")}
                >
                  <span>Mobile</span>
                  {activeItem === "mobile" && <ChevronRight className="ml-auto h-4 w-4" />}
                </div>
              </nav>
            </div>

            {/* Right content area */}
            <div ref={contentRef} className="flex-1 overflow-hidden max-h-[80vh]">
              {/* App Builder Section */}
              <div
                ref={(el) => (itemRefs.current["app-builder"] = el)}
                className={cn("p-6", activeItem === "app-builder" ? "block" : "hidden")}
              >
                <div className="mb-8">
                  <div className="aspect-video w-full bg-orange-100 dark:bg-orange-900/30 rounded-lg overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-48 h-48 bg-orange-200 dark:bg-orange-800 rounded-lg flex items-center justify-center">
                        <div className="grid grid-cols-3 grid-rows-3 gap-2">
                          {Array.from({ length: 9 }).map((_, i) => (
                            <div
                              key={i}
                              className={`w-8 h-8 transform rotate-${Math.random() * 45} ${
                                ["bg-blue-400", "bg-orange-400", "bg-white", "bg-green-400", "bg-yellow-400"][
                                  Math.floor(Math.random() * 5)
                                ]
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-4 dark:text-white">App Builder</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Build powerful internal tools without writing much code. Connect to your data, drag and drop
                  components, and deploy in minutes.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <h3 className="font-medium mb-2 dark:text-white">Visual Builder</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      Drag and drop UI components to create custom interfaces. Choose from tables, charts, forms, and
                      more.
                    </p>
                    <div
                      className="text-blue-600 dark:text-blue-400 text-sm font-medium flex items-center cursor-pointer"
                      onClick={() => handleSectionScroll("apps-section")}
                    >
                      Learn more <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </div>

                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <h3 className="font-medium mb-2 dark:text-white">Data Connections</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      Connect to any database, API, or service. Query your data directly and build interfaces on top of
                      it.
                    </p>
                    <div
                      className="text-blue-600 dark:text-blue-400 text-sm font-medium flex items-center cursor-pointer"
                      onClick={() => handleSectionScroll("apps-section")}
                    >
                      Learn more <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Workflows Section */}
              <div
                ref={(el) => (itemRefs.current["workflows"] = el)}
                className={cn(
                  "p-6 border-t border-gray-200 dark:border-gray-700",
                  activeItem === "workflows" ? "block" : "hidden",
                )}
              >
                <div className="mb-8">
                  <div className="aspect-video w-full bg-blue-100 dark:bg-blue-900/30 rounded-lg overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 rounded-full bg-blue-200 dark:bg-blue-800 flex items-center justify-center">
                          <div className="w-8 h-8 bg-blue-400 dark:bg-blue-600 rounded-sm" />
                        </div>
                        <div className="w-12 h-1 bg-blue-300 dark:bg-blue-700" />
                        <div className="w-16 h-16 rounded-full bg-blue-200 dark:bg-blue-800 flex items-center justify-center">
                          <div className="w-8 h-8 bg-blue-400 dark:bg-blue-600 rounded-sm" />
                        </div>
                        <div className="w-12 h-1 bg-blue-300 dark:bg-blue-700" />
                        <div className="w-16 h-16 rounded-full bg-blue-200 dark:bg-blue-800 flex items-center justify-center">
                          <div className="w-8 h-8 bg-blue-400 dark:bg-blue-600 rounded-sm" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-4 dark:text-white">Workflows</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Automate business processes and connect your tools. Build workflows that run on schedules or triggers
                  without writing complex code.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <h3 className="font-medium mb-2 dark:text-white">Triggers</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      Start workflows based on events, schedules, or manual triggers.
                    </p>
                    <div
                      className="text-blue-600 dark:text-blue-400 text-sm font-medium flex items-center cursor-pointer"
                      onClick={() => handleSectionScroll("workflows-section")}
                    >
                      Learn more <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </div>

                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <h3 className="font-medium mb-2 dark:text-white">Actions</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      Define what happens when a workflow runs. Send emails, update databases, or call APIs.
                    </p>
                    <div
                      className="text-blue-600 dark:text-blue-400 text-sm font-medium flex items-center cursor-pointer"
                      onClick={() => handleSectionScroll("workflows-section")}
                    >
                      Learn more <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </div>

                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <h3 className="font-medium mb-2 dark:text-white">Monitoring</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      Track workflow runs, debug issues, and improve your automations over time.
                    </p>
                    <div
                      className="text-blue-600 dark:text-blue-400 text-sm font-medium flex items-center cursor-pointer"
                      onClick={() => handleSectionScroll("workflows-section")}
                    >
                      Learn more <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Database Section */}
              <div
                ref={(el) => (itemRefs.current["database"] = el)}
                className={cn(
                  "p-6 border-t border-gray-200 dark:border-gray-700",
                  activeItem === "database" ? "block" : "hidden",
                )}
              >
                <div className="mb-8">
                  <div className="aspect-video w-full bg-green-100 dark:bg-green-900/30 rounded-lg overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="grid grid-cols-3 gap-3 w-3/4">
                        <div className="h-8 bg-green-200 dark:bg-green-800 rounded"></div>
                        <div className="h-8 bg-green-300 dark:bg-green-700 rounded"></div>
                        <div className="h-8 bg-green-400 dark:bg-green-600 rounded"></div>
                        <div className="h-8 bg-green-200 dark:bg-green-800 rounded"></div>
                        <div className="h-8 bg-green-300 dark:bg-green-700 rounded"></div>
                        <div className="h-8 bg-green-400 dark:bg-green-600 rounded"></div>
                        <div className="h-8 bg-green-200 dark:bg-green-800 rounded"></div>
                        <div className="h-8 bg-green-300 dark:bg-green-700 rounded"></div>
                        <div className="h-8 bg-green-400 dark:bg-green-600 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-4 dark:text-white">Database</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Store, query, and manage your data with our built-in database. No need to set up and maintain separate
                  database infrastructure.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <h3 className="font-medium mb-2 dark:text-white">Data Storage</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      Store your application data securely in our managed database. Create tables, define relationships,
                      and set up permissions.
                    </p>
                    <div
                      className="text-blue-600 dark:text-blue-400 text-sm font-medium flex items-center cursor-pointer"
                      onClick={() => handleSectionScroll("database-section")}
                    >
                      Learn more <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </div>

                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <h3 className="font-medium mb-2 dark:text-white">SQL Editor</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      Write and execute SQL queries directly in the browser. Visualize results and save queries for
                      later use.
                    </p>
                    <div
                      className="text-blue-600 dark:text-blue-400 text-sm font-medium flex items-center cursor-pointer"
                      onClick={() => handleSectionScroll("database-section")}
                    >
                      Learn more <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Section */}
              <div
                ref={(el) => (itemRefs.current["mobile"] = el)}
                className={cn(
                  "p-6 border-t border-gray-200 dark:border-gray-700",
                  activeItem === "mobile" ? "block" : "hidden",
                )}
              >
                <div className="mb-8">
                  <div className="aspect-video w-full bg-purple-100 dark:bg-purple-900/30 rounded-lg overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-48 h-80 bg-white dark:bg-gray-800 rounded-xl border-4 border-purple-300 dark:border-purple-700 flex items-center justify-center">
                        <div className="w-40 h-72 bg-purple-200 dark:bg-purple-800 rounded-lg flex flex-col p-2">
                          <div className="h-8 bg-purple-300 dark:bg-purple-700 rounded mb-2"></div>
                          <div className="flex-1 grid grid-cols-2 gap-2">
                            <div className="bg-purple-400 dark:bg-purple-600 rounded"></div>
                            <div className="bg-purple-300 dark:bg-purple-700 rounded"></div>
                            <div className="bg-purple-300 dark:bg-purple-700 rounded"></div>
                            <div className="bg-purple-400 dark:bg-purple-600 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-4 dark:text-white">Mobile</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Build native mobile apps for iOS and Android without the complexity. Create powerful mobile
                  experiences for your internal teams.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <h3 className="font-medium mb-2 dark:text-white">Native Apps</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      Build once, deploy to iOS and Android. Create native mobile experiences without maintaining
                      separate codebases.
                    </p>
                    <div
                      className="text-blue-600 dark:text-blue-400 text-sm font-medium flex items-center cursor-pointer"
                      onClick={() => handleSectionScroll("mobile-section")}
                    >
                      Learn more <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </div>

                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <h3 className="font-medium mb-2 dark:text-white">Offline Support</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      Work with or without an internet connection. Data syncs automatically when connectivity is
                      restored.
                    </p>
                    <div
                      className="text-blue-600 dark:text-blue-400 text-sm font-medium flex items-center cursor-pointer"
                      onClick={() => handleSectionScroll("mobile-section")}
                    >
                      Learn more <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <div className="text-sm text-gray-600 dark:text-gray-400">Ready to get started?</div>
            <div className="flex space-x-3">
              <Button variant="outline" size="sm" onClick={onClose} className="dark:border-gray-600 dark:text-gray-300">
                Close
              </Button>
              <Button
                size="sm"
                className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                onClick={() => handleSectionScroll("get-started")}
              >
                START FOR FREE
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Default empty menu for other types
  if (menuType === "solutions") {
    return <SolutionsMenu isOpen={isOpen} onClose={onClose} />
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16" onClick={onClose}>
      <div
        className="bg-white dark:bg-gray-900 rounded-lg shadow-xl w-full max-w-6xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">
            {menuType.charAt(0).toUpperCase() + menuType.slice(1)}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">Menu content for {menuType} will be implemented soon.</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 p-4 border-t border-gray-200 dark:border-gray-700 flex justify-end">
          <Button variant="outline" size="sm" onClick={onClose} className="dark:border-gray-600 dark:text-gray-300">
            Close
          </Button>
        </div>
      </div>
    </div>
  )
}

