"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Define types for our data
interface UseCase {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  category: string
  integrations: string[]
}

interface Category {
  id: string
  name: string
  count?: number
}

// Sample data for industries/categories
const industries: Category[] = [
  { id: "ecommerce", name: "Ecommerce" },
  { id: "education", name: "Education" },
  { id: "financial-services", name: "Financial Services" },
  { id: "food-and-beverage", name: "Food and Beverage" },
  { id: "healthcare", name: "Healthcare" },
  { id: "hospitality", name: "Hospitality" },
  { id: "logistics", name: "Logistics" },
  { id: "manufacturing", name: "Manufacturing and Construction" },
  { id: "marketplaces", name: "Marketplaces" },
  { id: "media", name: "Media" },
  { id: "real-estate", name: "Real Estate" },
  { id: "software", name: "Software as a Service" },
  { id: "startups", name: "Startups" },
  { id: "utilities", name: "Utilities and Telecoms" },
]

const teamCategories: Category[] = [
  { id: "admin", name: "Admin" },
  { id: "analytics", name: "Analytics" },
  { id: "customer-success", name: "Customer Success" },
  { id: "customer-support", name: "Customer Support" },
  { id: "engineering", name: "Engineering" },
  { id: "marketing", name: "Marketing and Sales" },
  { id: "mobile", name: "Mobile" },
]

// Sample data for use cases
const useCases: UseCase[] = [
  {
    id: "customer-support-dashboard",
    title: "Customer support dashboard with Airtable",
    description: "Build a customer support dashboard from scratch using Airtable as a data source.",
    image: "/placeholder.svg?height=300&width=400&text=Customer+Support+Dashboard",
    tags: ["dashboard", "customer support"],
    category: "customer-support",
    integrations: ["Airtable", "API"],
  },
  {
    id: "google-sheets-frontend",
    title: "Build your Google Sheets frontend 10x faster",
    description: "Connect to Google Sheets and easily build dashboards and other GUIs in minutes.",
    image: "/placeholder.svg?height=300&width=400&text=Google+Sheets+Frontend",
    tags: ["google sheets", "dashboard"],
    category: "admin",
    integrations: ["Google Sheets"],
  },
  {
    id: "elasticsearch-gui",
    title: "A fast and simple Elasticsearch GUI",
    description: "A simple admin panel GUI for all of your Elasticsearch queries: search, index, update, and create.",
    image: "/placeholder.svg?height=300&width=400&text=Elasticsearch+GUI",
    tags: ["elasticsearch", "admin panel"],
    category: "admin",
    integrations: ["PostgreSQL"],
  },
  {
    id: "discount-approval-tool",
    title: "Discount approval tool",
    description: "Build a tool to validate, approve, and keep track of discounts and offer redemptions.",
    image: "/placeholder.svg?height=300&width=400&text=Discount+Approval+Tool",
    tags: ["approval", "discounts"],
    category: "sales",
    integrations: ["PostgreSQL"],
  },
  {
    id: "logistics-tracker",
    title: "Transportation logistics tracker",
    description: "Build a transportation and logistics app that acts as the control center for your rides.",
    image: "/placeholder.svg?height=300&width=400&text=Logistics+Tracker",
    tags: ["logistics", "tracking"],
    category: "logistics",
    integrations: ["PostgreSQL"],
  },
  {
    id: "event-management",
    title: "Event management tool",
    description: "Build a custom app for managing both virtual and live events.",
    image: "/placeholder.svg?height=300&width=400&text=Event+Management",
    tags: ["events", "management"],
    category: "marketing",
    integrations: ["Google Sheets", "MySQL", "PostgreSQL"],
  },
]

export default function UseCasesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([])
  const [selectedTeams, setSelectedTeams] = useState<string[]>([])

  // Filter use cases based on search query and selected filters
  const filteredUseCases = useCases.filter((useCase) => {
    // Search filter
    if (
      searchQuery &&
      !useCase.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !useCase.description.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false
    }

    // Industry filter
    if (
      selectedIndustries.length > 0 &&
      !selectedIndustries.some((industry) => useCase.tags.includes(industry) || useCase.category === industry)
    ) {
      return false
    }

    // Team filter
    if (selectedTeams.length > 0 && !selectedTeams.includes(useCase.category)) {
      return false
    }

    return true
  })

  // Toggle industry selection
  const toggleIndustry = (industryId: string) => {
    setSelectedIndustries((prev) =>
      prev.includes(industryId) ? prev.filter((id) => id !== industryId) : [...prev, industryId],
    )
  }

  // Toggle team selection
  const toggleTeam = (teamId: string) => {
    setSelectedTeams((prev) => (prev.includes(teamId) ? prev.filter((id) => id !== teamId) : [...prev, teamId]))
  }

  // Clear all filters
  const clearFilters = () => {
    setSelectedIndustries([])
    setSelectedTeams([])
    setSearchQuery("")
  }

  // Count total active filters
  const totalFilters = selectedIndustries.length + selectedTeams.length + (searchQuery ? 1 : 0)

  return (
    <main className="min-h-screen">
      {/* Hero Section with Gradient Background */}
      <section className="bg-gradient-to-b from-purple-400 to-purple-300 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Use cases for ReLudgi</h1>
            <p className="text-xl text-gray-800 mb-8">
              From customer support to fraud detection, ReLudgi gives you a powerful set of building blocks to develop
              internal apps that move your business forward.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="Search use cases"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Results Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div className="text-sm text-gray-600">
              Showing {filteredUseCases.length} of {useCases.length} use cases
              {totalFilters > 0 && ` matching ${totalFilters} filters`}
            </div>
            {totalFilters > 0 && (
              <button className="text-sm text-purple-600 font-medium hover:text-purple-800" onClick={clearFilters}>
                Clear all filters
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar with Filters */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Industry Filter */}
                <div>
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">INDUSTRY</h3>
                  <ul className="space-y-2">
                    {industries.map((industry) => (
                      <li key={industry.id}>
                        <button
                          className={cn(
                            "flex items-center w-full text-left",
                            selectedIndustries.includes(industry.id)
                              ? "font-semibold text-gray-900"
                              : "text-gray-700 hover:text-gray-900",
                          )}
                          onClick={() => toggleIndustry(industry.id)}
                        >
                          <span
                            className={cn(
                              "mr-2 h-2 w-2 rounded-full",
                              selectedIndustries.includes(industry.id) ? "bg-purple-600" : "bg-transparent",
                            )}
                          ></span>
                          {industry.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Team Filter */}
                <div>
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">TEAM</h3>
                  <ul className="space-y-2">
                    {teamCategories.map((team) => (
                      <li key={team.id}>
                        <button
                          className={cn(
                            "flex items-center w-full text-left",
                            selectedTeams.includes(team.id)
                              ? "font-semibold text-gray-900"
                              : "text-gray-700 hover:text-gray-900",
                          )}
                          onClick={() => toggleTeam(team.id)}
                        >
                          <span
                            className={cn(
                              "mr-2 h-2 w-2 rounded-full",
                              selectedTeams.includes(team.id) ? "bg-purple-600" : "bg-transparent",
                            )}
                          ></span>
                          {team.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Use Cases Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredUseCases.map((useCase) => (
                  <div
                    key={useCase.id}
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="h-48 bg-gray-200 overflow-hidden">
                      <img
                        src={useCase.image || "/placeholder.svg"}
                        alt={useCase.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{useCase.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {useCase.integrations.map((integration) => (
                          <span key={integration} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                            {integration}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredUseCases.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No matching use cases found</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your filters or search query</p>
                  <Button onClick={clearFilters}>Clear all filters</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to build your own internal tools?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Start building with ReLudgi today and see how quickly you can create powerful internal applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                START FOR FREE
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-gray-800">
                BOOK A DEMO
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

