"use client"

import { useState } from "react"
import { Check, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annually">("annually")
  const [deploymentType, setDeploymentType] = useState<"cloud" | "self-host">("cloud")
  const [activeTab, setActiveTab] = useState<"plans" | "features">("plans")

  const annualDiscount = "20% SAVINGS"

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Find the plan that
              <br />
              works for you
            </h1>

            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2 bg-gray-200 dark:bg-gray-800 rounded-full p-1">
                  <button
                    className={cn(
                      "px-4 py-1 rounded-full text-sm font-medium transition-colors",
                      billingPeriod === "monthly"
                        ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                        : "text-gray-700 dark:text-gray-300",
                    )}
                    onClick={() => setBillingPeriod("monthly")}
                  >
                    Monthly
                  </button>
                  <button
                    className={cn(
                      "px-4 py-1 rounded-full text-sm font-medium transition-colors",
                      billingPeriod === "annually"
                        ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                        : "text-gray-700 dark:text-gray-300",
                    )}
                    onClick={() => setBillingPeriod("annually")}
                  >
                    Annually
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <span
                  className={cn(
                    "text-sm font-medium",
                    deploymentType === "cloud" ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400",
                  )}
                >
                  Cloud
                </span>
                <Switch
                  checked={deploymentType === "self-host"}
                  onCheckedChange={(checked) => setDeploymentType(checked ? "self-host" : "cloud")}
                />
                <span
                  className={cn(
                    "text-sm font-medium",
                    deploymentType === "self-host"
                      ? "text-gray-900 dark:text-white"
                      : "text-gray-500 dark:text-gray-400",
                  )}
                >
                  Self Host
                </span>
              </div>
            </div>

            {/* Pricing Tabs */}
            <div className="flex mb-8">
              <button
                className={cn(
                  "px-4 py-2 font-medium border-b-2 transition-colors",
                  activeTab === "plans"
                    ? "border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400"
                    : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300",
                )}
                onClick={() => setActiveTab("plans")}
              >
                Plans
              </button>
              <button
                className={cn(
                  "px-4 py-2 font-medium border-b-2 transition-colors",
                  activeTab === "features"
                    ? "border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400"
                    : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300",
                )}
                onClick={() => setActiveTab("features")}
              >
                Compare Features
              </button>
            </div>

            {activeTab === "plans" && (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Free Plan */}
                <div className="bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Free</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">No credit card required</p>
                    <Button variant="outline" className="w-full mb-6">
                      GET STARTED
                    </Button>

                    <div className="flex items-end mb-6">
                      <div className="text-3xl font-bold text-gray-900 dark:text-white">$0</div>
                      <div className="text-gray-600 dark:text-gray-400 ml-1 mb-1">/month</div>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-6">per standard user*</div>

                    <div className="flex items-center mb-6">
                      <div className="text-3xl font-bold text-gray-900 dark:text-white">+</div>
                      <div className="ml-2">
                        <div className="text-3xl font-bold text-gray-900 dark:text-white">$0</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">per end user†</div>
                      </div>
                    </div>

                    <p className="font-medium text-gray-900 dark:text-white mb-4">
                      For developers and early exploration
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">Unlimited web & mobile apps</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">500 workflow runs/month</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">5GB of data storage</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">Up to 5 users</span>
                      </div>
                    </div>

                    <Button variant="secondary" className="w-full">
                      BUILD FOR FREE
                    </Button>
                  </div>
                </div>

                {/* Team Plan */}
                <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Team</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Billed {billingPeriod === "annually" ? "Annually" : "Monthly"}
                    </p>

                    {billingPeriod === "annually" && (
                      <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs font-bold px-3 py-1 rounded inline-block mb-4">
                        {annualDiscount}
                      </div>
                    )}

                    <div className="flex items-end mb-6">
                      <div className="text-3xl font-bold text-gray-900 dark:text-white">$10</div>
                      <div className="text-gray-600 dark:text-gray-400 ml-1 mb-1">/month</div>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-6">per standard user*</div>

                    <div className="flex items-center mb-6">
                      <div className="text-3xl font-bold text-gray-900 dark:text-white">+</div>
                      <div className="ml-2">
                        <div className="text-3xl font-bold text-gray-900 dark:text-white">$5</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">per end user†</div>
                      </div>
                    </div>

                    <p className="font-medium text-gray-900 dark:text-white mb-4">For growing, collaborative teams</p>

                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                      Everything in Free, plus...
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">5,000 workflow runs/month</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">Staging environment</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">App release versions</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{">"}5 users</span>
                      </div>
                    </div>

                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">CHOOSE TEAM</Button>
                  </div>
                </div>

                {/* Business Plan */}
                <div className="bg-teal-100 dark:bg-teal-900/30 rounded-lg overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Business</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Billed {billingPeriod === "annually" ? "Annually" : "Monthly"}
                    </p>

                    {billingPeriod === "annually" && (
                      <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs font-bold px-3 py-1 rounded inline-block mb-4">
                        {annualDiscount}
                      </div>
                    )}

                    <div className="flex items-end mb-6">
                      <div className="text-3xl font-bold text-gray-900 dark:text-white">$50</div>
                      <div className="text-gray-600 dark:text-gray-400 ml-1 mb-1">/month</div>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-6">per standard user*</div>

                    <div className="flex items-center mb-6">
                      <div className="text-3xl font-bold text-gray-900 dark:text-white">+</div>
                      <div className="ml-2">
                        <div className="text-3xl font-bold text-gray-900 dark:text-white">$15</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">per end user†</div>
                      </div>
                    </div>

                    <p className="font-medium text-gray-900 dark:text-white mb-4">For teams who need more control</p>

                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                      Everything in Team, plus...
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">Audit logging</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">Rich permission controls</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">Portals and embedded apps</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">Unlimited environments</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">Unlimited modules</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">Access to external user pricing‡</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">Custom Branding</span>
                      </div>
                    </div>

                    <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">CHOOSE BUSINESS</Button>
                  </div>
                </div>

                {/* Enterprise Plan */}
                <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Enterprise</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">Get in touch</p>
                    <Button variant="outline" className="w-full mb-6">
                      CUSTOM PRICING
                    </Button>

                    <div className="mb-6">
                      <p className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        Flexible pricing that scales with your business
                      </p>
                    </div>

                    <p className="font-medium text-gray-900 dark:text-white mb-4">
                      For teams & orgs operating at scale
                    </p>

                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                      Everything in Business, plus...
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">SAML / OpenID Connect SSO</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">Source control</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">Error monitoring and observability</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">Full white-labeling</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">Independent workspaces</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">Platform APIs and workflow triggers</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">Volume-based discounts</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">Dedicated support</span>
                      </div>
                    </div>

                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">GET PRICING</Button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "features" && (
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm">
                <div className="grid grid-cols-5">
                  <div className="col-span-1 bg-gray-100 dark:bg-gray-700 p-4 font-medium text-gray-900 dark:text-white">
                    Features
                  </div>
                  <div className="col-span-1 p-4 text-center font-medium text-gray-900 dark:text-white">
                    Free
                    <div className="text-sm text-blue-600 dark:text-blue-400 mt-1">Build for free →</div>
                  </div>
                  <div className="col-span-1 p-4 text-center font-medium text-gray-900 dark:text-white bg-purple-50 dark:bg-purple-900/20">
                    Team
                    <div className="text-sm text-blue-600 dark:text-blue-400 mt-1">Choose team →</div>
                  </div>
                  <div className="col-span-1 p-4 text-center font-medium text-gray-900 dark:text-white bg-teal-50 dark:bg-teal-900/20">
                    Business
                    <div className="text-sm text-blue-600 dark:text-blue-400 mt-1">Choose business →</div>
                  </div>
                  <div className="col-span-1 p-4 text-center font-medium text-gray-900 dark:text-white bg-purple-50 dark:bg-purple-900/20">
                    Enterprise
                    <div className="text-sm text-blue-600 dark:text-blue-400 mt-1">Get Pricing →</div>
                  </div>
                </div>

                {/* Users Section */}
                <div className="border-t border-gray-200 dark:border-gray-700">
                  <div className="grid grid-cols-5">
                    <div className="col-span-1 bg-gray-100 dark:bg-gray-700 p-4 font-medium text-gray-900 dark:text-white">
                      Users
                    </div>
                    <div className="col-span-4"></div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 grid grid-cols-5">
                    <div className="col-span-1 p-4 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800">
                      Cost per standard user
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300">Free/month</div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300 bg-purple-50 dark:bg-purple-900/20">
                      $10/month
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300 bg-teal-50 dark:bg-teal-900/20">
                      $50/month
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300 bg-purple-50 dark:bg-purple-900/20">
                      Custom
                      <div className="text-sm text-blue-600 dark:text-blue-400 mt-1">Get Pricing</div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 grid grid-cols-5">
                    <div className="col-span-1 p-4 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800">
                      Cost per end user
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300">Free/month</div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300 bg-purple-50 dark:bg-purple-900/20">
                      $5/month
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300 bg-teal-50 dark:bg-teal-900/20">
                      $15/month
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300 bg-purple-50 dark:bg-purple-900/20">
                      Custom
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 grid grid-cols-5">
                    <div className="col-span-1 p-4 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800">
                      Cost per external user
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300">—</div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300 bg-purple-50 dark:bg-purple-900/20">
                      —
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300 bg-teal-50 dark:bg-teal-900/20">
                      <div>0-250: $8/month</div>
                      <div>251-500: $6/month</div>
                      <div>Over 500: Free</div>
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300 bg-purple-50 dark:bg-purple-900/20">
                      <div>Bulk discounts</div>
                      <div>Per-use-case pricing available</div>
                    </div>
                  </div>
                </div>

                {/* Web Apps Section */}
                <div className="border-t border-gray-200 dark:border-gray-700">
                  <div className="grid grid-cols-5">
                    <div className="col-span-1 bg-gray-100 dark:bg-gray-700 p-4 font-medium text-gray-900 dark:text-white">
                      Web apps
                    </div>
                    <div className="col-span-4"></div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 grid grid-cols-5">
                    <div className="col-span-1 p-4 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800">
                      Web apps
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300">Unlimited</div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300 bg-purple-50 dark:bg-purple-900/20">
                      Unlimited
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300 bg-teal-50 dark:bg-teal-900/20">
                      Unlimited
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300 bg-purple-50 dark:bg-purple-900/20">
                      Unlimited
                    </div>
                  </div>
                </div>

                {/* Mobile Apps Section */}
                <div className="border-t border-gray-200 dark:border-gray-700">
                  <div className="grid grid-cols-5">
                    <div className="col-span-1 bg-gray-100 dark:bg-gray-700 p-4 font-medium text-gray-900 dark:text-white">
                      Mobile apps
                    </div>
                    <div className="col-span-4"></div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 grid grid-cols-5">
                    <div className="col-span-1 p-4 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800">
                      Mobile apps
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300">Unlimited</div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300 bg-purple-50 dark:bg-purple-900/20">
                      Unlimited
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300 bg-teal-50 dark:bg-teal-900/20">
                      Unlimited
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300 bg-purple-50 dark:bg-purple-900/20">
                      Unlimited
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 grid grid-cols-5">
                    <div className="col-span-1 p-4 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800">
                      App themes
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300 bg-purple-50 dark:bg-purple-900/20">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300 bg-teal-50 dark:bg-teal-900/20">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300 bg-purple-50 dark:bg-purple-900/20">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 grid grid-cols-5">
                    <div className="col-span-1 p-4 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800">
                      Offline mode
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300">
                      <Minus className="h-5 w-5 text-gray-400 mx-auto" />
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300 bg-purple-50 dark:bg-purple-900/20">
                      <Minus className="h-5 w-5 text-gray-400 mx-auto" />
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300 bg-teal-50 dark:bg-teal-900/20">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300 bg-purple-50 dark:bg-purple-900/20">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 grid grid-cols-5">
                    <div className="col-span-1 p-4 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800">
                      Push notifications
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300">
                      <Minus className="h-5 w-5 text-gray-400 mx-auto" />
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300 bg-purple-50 dark:bg-purple-900/20">
                      <Minus className="h-5 w-5 text-gray-400 mx-auto" />
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300 bg-teal-50 dark:bg-teal-900/20">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300 bg-purple-50 dark:bg-purple-900/20">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 grid grid-cols-5">
                    <div className="col-span-1 p-4 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800">
                      White-label apps
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300">
                      <Minus className="h-5 w-5 text-gray-400 mx-auto" />
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300 bg-purple-50 dark:bg-purple-900/20">
                      <Minus className="h-5 w-5 text-gray-400 mx-auto" />
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300 bg-teal-50 dark:bg-teal-900/20">
                      <Minus className="h-5 w-5 text-gray-400 mx-auto" />
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300 bg-purple-50 dark:bg-purple-900/20">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 grid grid-cols-5">
                    <div className="col-span-1 p-4 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800">
                      Biometric authentication
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300">
                      <Minus className="h-5 w-5 text-gray-400 mx-auto" />
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300 bg-purple-50 dark:bg-purple-900/20">
                      <Minus className="h-5 w-5 text-gray-400 mx-auto" />
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300 bg-teal-50 dark:bg-teal-900/20">
                      <Minus className="h-5 w-5 text-gray-400 mx-auto" />
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300 bg-purple-50 dark:bg-purple-900/20">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </div>
                  </div>
                </div>

                {/* Workflows Section */}
                <div className="border-t border-gray-200 dark:border-gray-700">
                  <div className="grid grid-cols-5">
                    <div className="col-span-1 bg-gray-100 dark:bg-gray-700 p-4 font-medium text-gray-900 dark:text-white">
                      Workflows
                    </div>
                    <div className="col-span-4"></div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 grid grid-cols-5">
                    <div className="col-span-1 p-4 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800">
                      Workflows runs
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300">500/month</div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300 bg-purple-50 dark:bg-purple-900/20">
                      5,000/month
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300 bg-teal-50 dark:bg-teal-900/20">
                      5,000/month
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300 bg-purple-50 dark:bg-purple-900/20">
                      Custom
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 grid grid-cols-5">
                    <div className="col-span-1 p-4 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800">
                      Workflows steps
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300">Unlimited</div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300 bg-purple-50 dark:bg-purple-900/20">
                      Unlimited
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300 bg-teal-50 dark:bg-teal-900/20">
                      Unlimited
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300 bg-purple-50 dark:bg-purple-900/20">
                      Unlimited
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 grid grid-cols-5">
                    <div className="col-span-1 p-4 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800">
                      Schedule trigger
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300 bg-purple-50 dark:bg-purple-900/20">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300 bg-teal-50 dark:bg-teal-900/20">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300 bg-purple-50 dark:bg-purple-900/20">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 grid grid-cols-5">
                    <div className="col-span-1 p-4 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800">
                      Webhook trigger
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300 bg-purple-50 dark:bg-purple-900/20">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300 bg-teal-50 dark:bg-teal-900/20">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </div>
                    <div className="col-span-1 p-4 text-center text-gray-700 dark:text-gray-300 bg-purple-50 dark:bg-purple-900/20">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Footnotes */}
            <div className="mt-12 text-sm text-gray-600 dark:text-gray-400 space-y-4">
              <p>
                <span className="font-medium">* STANDARD USERS:</span> Enabled users who built or edited an app or
                workflow during the billing cycle.
              </p>
              <p>
                <span className="font-medium">† END USERS:</span> Enabled users who did not build or edit an app or
                workflow during the billing cycle. End users can be restricted from making edits via the permission
                controls available on our Business and Enterprise plans.
              </p>
              <p>
                <span className="font-medium">‡ EXTERNAL USERS:</span> Users that are not part of your organization.{" "}
                <a href="#" className="text-blue-600 dark:text-blue-400">
                  Get in touch
                </a>{" "}
                to learn more about affordable custom external user pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agencies Section */}
      <section className="py-16 bg-amber-50 dark:bg-amber-900/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  ReLudgi for agencies and freelancers
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                  Start building on ReLudgi
                  <br />
                  for your clients
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Discover the best way for agencies and freelancers to build custom apps for their clients and grow
                  their businesses with ReLudgi.
                </p>
                <Button
                  variant="outline"
                  className="border-amber-600 text-amber-600 hover:bg-amber-100 dark:border-amber-400 dark:text-amber-400 dark:hover:bg-amber-900/30"
                >
                  LEARN HOW IT WORKS
                </Button>
              </div>
              <div>
                <div className="bg-amber-100 dark:bg-amber-800/30 rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=400&width=600&text=Agency+Development"
                    alt="Agency development"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black dark:bg-gray-950 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Grow your outputs and shrink your costs</h2>
            <p className="text-xl mb-8">
              With ReLudgi, DoorDash develops 50x faster. Learn how ReLudgi can transform your organization's software.
            </p>
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200 dark:bg-gray-200 dark:text-black dark:hover:bg-gray-300"
            >
              GET PRICING
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

