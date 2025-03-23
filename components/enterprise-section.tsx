"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Building2, Users, Lock, Database, Shield, BarChart4 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EnterpriseFeature {
  title: string
  description: string
  icon: React.ReactNode
}

const enterpriseFeatures: EnterpriseFeature[] = [
  {
    title: "Host where you want",
    description: "Build and run apps in ReLudgi cloud. Or deploy on your own infrastructure for complete control.",
    icon: <Building2 className="h-5 w-5 text-emerald-600" />,
  },
  {
    title: "Custom SSO",
    description: "Integrate your IdP to enable login and role-mapping using your preferred protocols.",
    icon: <Lock className="h-5 w-5 text-emerald-600" />,
  },
  {
    title: "Audit logs",
    description: "Monitor anything your organization ships with built-in audit logs and in-depth usage analytics.",
    icon: <BarChart4 className="h-5 w-5 text-emerald-600" />,
  },
  {
    title: "Granular permissions",
    description: "Take control with RBAC and data-level permissions to ensure apps are secure by default.",
    icon: <Shield className="h-5 w-5 text-emerald-600" />,
  },
  {
    title: "Eliminate click-ops",
    description: "Manage access, configure environments, and rotate secrets with Secrets Manager and API integrations.",
    icon: <Database className="h-5 w-5 text-emerald-600" />,
  },
  {
    title: "Launch support",
    description: "Get deployment assistance and a dedicated team to build out your first app faster.",
    icon: <Users className="h-5 w-5 text-emerald-600" />,
  },
]

export default function EnterpriseSection() {
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
    <section ref={sectionRef} className="bg-cream py-24 text-gray-900" style={{ backgroundColor: "#f5f2ea" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                <img
                  src="/placeholder.svg?height=600&width=600&text=Enterprise+Illustration"
                  alt="Enterprise features illustration"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-8">
                Centrally govern hundreds of{" "}
                <span className="inline-flex items-center">
                  <Users className="h-8 w-8 mx-1 text-emerald-600" />
                  teams
                </span>{" "}
                and{" "}
                <span className="inline-flex items-center">
                  <Building2 className="h-8 w-8 mx-1 text-emerald-600" />
                  apps
                </span>{" "}
                with{" "}
                <span className="inline-flex items-center">
                  <Lock className="h-8 w-8 mx-1 text-emerald-600" />
                  SOC 2 Type II
                </span>{" "}
                compliant security controls — built for{" "}
                <span className="inline-flex items-center">
                  <Building2 className="h-8 w-8 mx-1 text-emerald-600" />
                  Enterprise
                </span>{" "}
                and trusted by the Fortune 500.
              </h2>

              <div className="mt-12 space-y-6">
                {enterpriseFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="border-t border-gray-300 pt-4"
                  >
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">{feature.icon}</div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                className="mt-12"
              >
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  CONTACT SALES
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

