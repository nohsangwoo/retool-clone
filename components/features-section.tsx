"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Database, Layers, Code, Workflow, Upload } from "lucide-react"
import { cn } from "@/lib/utils"

interface FeatureItem {
  id: string
  title: string
  number: string
  icon: React.ReactNode
  description: string
  content: React.ReactNode
}

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState("connect")
  const containerRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.2 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  const features: FeatureItem[] = [
    {
      id: "connect",
      title: "Connect",
      number: "01",
      icon: <Database className="h-5 w-5" />,
      description:
        "Query data using dozens of built-in connectors: databases, third-party services, and anything with a REST or GraphQL API.",
      content: <ConnectContent />,
    },
    {
      id: "design",
      title: "Design",
      number: "02",
      icon: <Layers className="h-5 w-5" />,
      description: "Build interfaces with our library of 90+ components. Customize them to match your needs and brand.",
      content: <DesignContent />,
    },
    {
      id: "customize",
      title: "Customize",
      number: "03",
      icon: <Workflow className="h-5 w-5" />,
      description: "Tailor every aspect of your app with custom logic, workflows, and integrations.",
      content: <CustomizeContent />,
    },
    {
      id: "code",
      title: "Code",
      number: "04",
      icon: <Code className="h-5 w-5" />,
      description: "Extend functionality with JavaScript, React, and custom components when you need more control.",
      content: <CodeContent />,
    },
    {
      id: "deploy",
      title: "Deploy",
      number: "05",
      icon: <Upload className="h-5 w-5" />,
      description: "Ship your app to production in minutes. Host on our cloud or your own infrastructure.",
      content: <DeployContent />,
    },
  ]

  const activeFeatureData = features.find((f) => f.id === activeFeature)

  return (
    <section ref={containerRef} className="bg-black text-white py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-wider text-gray-400 mb-3"
          >
            How it works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-light tracking-tight mb-6"
          >
            Flexible app-building
            <br />
            tools, built for
            <br />
            developers
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left side - Menu */}
          <div className="lg:col-span-4">
            <div className="space-y-6">
              {features.map((feature) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.1 * features.findIndex((f) => f.id === feature.id) }}
                >
                  <FeatureMenuItem
                    feature={feature}
                    isActive={activeFeature === feature.id}
                    onClick={() => setActiveFeature(feature.id)}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:col-span-8 relative min-h-[500px] md:min-h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  duration: 0.5,
                }}
                className="w-full h-full"
              >
                {activeFeatureData?.content}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

interface FeatureMenuItemProps {
  feature: FeatureItem
  isActive: boolean
  onClick: () => void
}

function FeatureMenuItem({ feature, isActive, onClick }: FeatureMenuItemProps) {
  return (
    <div
      className={cn(
        "border-b border-gray-800 pb-6 cursor-pointer transition-all duration-300",
        isActive ? "opacity-100" : "opacity-60 hover:opacity-80",
      )}
      onClick={onClick}
    >
      <div className="flex items-center mb-3">
        <span className="text-sm text-gray-500 mr-3">{feature.number}</span>
        <h3 className="text-xl font-medium">{feature.title}</h3>
      </div>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="text-gray-400 text-sm leading-relaxed"
        >
          <div className="flex items-center mb-2">
            <div className="mr-2 text-white">{feature.icon}</div>
            <p>{feature.description}</p>
          </div>
        </motion.div>
      )}
    </div>
  )
}

function ConnectContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: 0.3,
        duration: 0.6,
      },
    },
  }

  return (
    <motion.div
      className="bg-blue-500 rounded-lg p-6 h-full relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-20 pointer-events-none">
        {Array.from({ length: 36 }).map((_, i) => (
          <div key={i} className="border border-blue-400"></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <motion.div variants={itemVariants} className="mb-8">
          <h3 className="text-2xl font-medium mb-4">Connect to any data source</h3>
          <p className="text-blue-100">
            Build internal tools powered by your data, wherever it lives. Connect to databases, APIs, and more.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-blue-600 rounded-lg p-4 mb-6">
          <div className="flex items-center mb-3">
            <Database className="h-5 w-5 mr-2" />
            <h4 className="font-medium">Database Connectors</h4>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {["PostgreSQL", "MySQL", "MongoDB", "SQL Server", "Oracle", "Snowflake"].map((db) => (
              <div key={db} className="bg-blue-700 rounded px-3 py-2 text-sm">
                {db}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-blue-600 rounded-lg p-4">
          <div className="flex items-center mb-3">
            <Code className="h-5 w-5 mr-2" />
            <h4 className="font-medium">API Integrations</h4>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {["REST", "GraphQL", "SOAP", "gRPC", "Webhooks", "Custom"].map((api) => (
              <div key={api} className="bg-blue-700 rounded px-3 py-2 text-sm">
                {api}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating icons */}
      <motion.div className="absolute top-10 right-10" variants={iconVariants}>
        <div className="bg-white text-blue-600 p-3 rounded-lg shadow-lg">
          <Database className="h-8 w-8" />
        </div>
      </motion.div>

      <motion.div className="absolute bottom-20 right-20" variants={iconVariants} transition={{ delay: 0.5 }}>
        <div className="bg-green-400 text-white p-3 rounded-lg shadow-lg">
          <Code className="h-8 w-8" />
        </div>
      </motion.div>

      <motion.div className="absolute top-32 left-10" variants={iconVariants} transition={{ delay: 0.7 }}>
        <div className="bg-purple-500 text-white p-3 rounded-lg shadow-lg">
          <Layers className="h-8 w-8" />
        </div>
      </motion.div>
    </motion.div>
  )
}

function DesignContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      className="bg-purple-600 rounded-lg p-6 h-full relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="border border-purple-400"></div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <motion.div variants={itemVariants} className="mb-8">
          <h3 className="text-2xl font-medium mb-4">Design beautiful interfaces</h3>
          <p className="text-purple-100">
            Build interfaces with our library of 90+ components. Customize them to match your needs and brand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={itemVariants} className="bg-purple-700 rounded-lg p-4">
            <h4 className="font-medium mb-3">UI Components</h4>
            <div className="grid grid-cols-2 gap-2">
              {["Tables", "Forms", "Charts", "Maps", "Buttons", "Modals"].map((component) => (
                <div key={component} className="bg-purple-800 rounded px-3 py-2 text-sm">
                  {component}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-purple-700 rounded-lg p-4">
            <h4 className="font-medium mb-3">Layout Options</h4>
            <div className="space-y-2">
              <div className="bg-purple-800 rounded p-2">
                <div className="h-4 w-full bg-purple-600 rounded mb-2"></div>
                <div className="flex space-x-2">
                  <div className="h-12 w-1/3 bg-purple-600 rounded"></div>
                  <div className="h-12 w-2/3 bg-purple-600 rounded"></div>
                </div>
              </div>
              <div className="bg-purple-800 rounded p-2">
                <div className="h-4 w-full bg-purple-600 rounded mb-2"></div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-8 bg-purple-600 rounded"></div>
                  <div className="h-8 bg-purple-600 rounded"></div>
                  <div className="h-8 bg-purple-600 rounded"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mt-6 bg-purple-700 rounded-lg p-4 overflow-hidden relative">
          <h4 className="font-medium mb-3">Component Library</h4>
          <div className="flex space-x-3 overflow-x-auto pb-2">
            {["Table", "Chart", "Form", "Button", "Modal", "Card", "List", "Menu"].map((item) => (
              <motion.div
                key={item}
                className="flex-shrink-0 bg-purple-800 rounded-lg p-3 w-24 h-24 flex items-center justify-center text-center"
                whileHover={{ scale: 1.05 }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-10 right-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
      >
        <div className="bg-white text-purple-600 p-3 rounded-lg shadow-lg">
          <Layers className="h-8 w-8" />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-16 left-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.6, type: "spring" }}
      >
        <div className="bg-yellow-400 text-white p-3 rounded-lg shadow-lg">
          <div className="h-8 w-8 flex items-center justify-center font-bold">UI</div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function CustomizeContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      className="bg-green-600 rounded-lg p-6 h-full relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="border border-green-400"></div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <motion.div variants={itemVariants} className="mb-8">
          <h3 className="text-2xl font-medium mb-4">Customize everything</h3>
          <p className="text-green-100">
            Tailor every aspect of your app with custom logic, workflows, and integrations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={itemVariants} className="bg-green-700 rounded-lg p-4">
            <h4 className="font-medium mb-3">Logic Builder</h4>
            <div className="space-y-2">
              <div className="bg-green-800 rounded p-3 flex items-center">
                <div className="h-4 w-4 bg-yellow-400 rounded-full mr-2"></div>
                <div className="text-sm">When form is submitted</div>
              </div>
              <div className="bg-green-800 rounded p-3 flex items-center">
                <div className="h-4 w-4 bg-blue-400 rounded-full mr-2"></div>
                <div className="text-sm">Validate input data</div>
              </div>
              <div className="bg-green-800 rounded p-3 flex items-center">
                <div className="h-4 w-4 bg-purple-400 rounded-full mr-2"></div>
                <div className="text-sm">Save to database</div>
              </div>
              <div className="bg-green-800 rounded p-3 flex items-center">
                <div className="h-4 w-4 bg-red-400 rounded-full mr-2"></div>
                <div className="text-sm">Send notification</div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-green-700 rounded-lg p-4">
            <h4 className="font-medium mb-3">Workflow Automation</h4>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-green-500"></div>
              <div className="space-y-4 relative">
                <div className="bg-green-800 rounded p-3 pl-8 relative">
                  <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-3 w-3 bg-white rounded-full"></div>
                  <div className="text-sm">Trigger: New database record</div>
                </div>
                <div className="bg-green-800 rounded p-3 pl-8 relative">
                  <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-3 w-3 bg-white rounded-full"></div>
                  <div className="text-sm">Action: Process data</div>
                </div>
                <div className="bg-green-800 rounded p-3 pl-8 relative">
                  <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-3 w-3 bg-white rounded-full"></div>
                  <div className="text-sm">Action: Update related records</div>
                </div>
                <div className="bg-green-800 rounded p-3 pl-8 relative">
                  <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-3 w-3 bg-white rounded-full"></div>
                  <div className="text-sm">Action: Send email notification</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mt-6 bg-green-700 rounded-lg p-4">
          <h4 className="font-medium mb-3">Integration Templates</h4>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {["Slack", "Gmail", "Stripe", "Salesforce", "Jira", "GitHub"].map((integration) => (
              <div key={integration} className="bg-green-800 rounded px-3 py-2 text-sm text-center">
                {integration}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-10 right-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
      >
        <div className="bg-white text-green-600 p-3 rounded-lg shadow-lg">
          <Workflow className="h-8 w-8" />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-16 right-16"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.6, type: "spring" }}
      >
        <div className="bg-orange-400 text-white p-3 rounded-lg shadow-lg">
          <div className="h-8 w-8 flex items-center justify-center font-bold">API</div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function CodeContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      className="bg-gray-800 rounded-lg p-6 h-full relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="border border-gray-600"></div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <motion.div variants={itemVariants} className="mb-8">
          <h3 className="text-2xl font-medium mb-4">Code when you need to</h3>
          <p className="text-gray-300">
            Extend functionality with JavaScript, React, and custom components when you need more control.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={itemVariants} className="bg-gray-900 rounded-lg p-4">
            <h4 className="font-medium mb-3">JavaScript Functions</h4>
            <div className="bg-gray-950 rounded-lg p-3 font-mono text-sm text-green-400 overflow-auto">
              <pre>{`// Transform data before display
function processData(data) {
  return data.map(item => ({
    ...item,
    fullName: \`\${item.firstName} \${item.lastName}\`,
    status: getStatus(item.lastActive)
  }));
}

// Calculate status based on activity
function getStatus(lastActive) {
  const days = daysSince(lastActive);
  if (days < 1) return "Active";
  if (days < 7) return "Recent";
  return "Inactive";
}`}</pre>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-gray-900 rounded-lg p-4">
            <h4 className="font-medium mb-3">React Components</h4>
            <div className="bg-gray-950 rounded-lg p-3 font-mono text-sm text-blue-400 overflow-auto">
              <pre>{`import React, { useState } from "react";

function CustomDataTable({ data, columns }) {
  const [sortBy, setSortBy] = useState(null);
  const [sortDir, setSortDir] = useState("asc");
  
  const handleSort = (column) => {
    if (sortBy === column) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortDir("asc");
    }
  };
  
  // Sort data based on current state
  const sortedData = [...data].sort((a, b) => {
    if (!sortBy) return 0;
    return sortDir === "asc" 
      ? a[sortBy] > b[sortBy] ? 1 : -1
      : a[sortBy] < b[sortBy] ? 1 : -1;
  });
  
  return (
    <table className="custom-table">
      {/* Table implementation */}
    </table>
  );
}`}</pre>
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mt-6 bg-gray-900 rounded-lg p-4">
          <h4 className="font-medium mb-3">API Integration</h4>
          <div className="bg-gray-950 rounded-lg p-3 font-mono text-sm text-purple-400 overflow-auto">
            <pre>{`// Fetch data from external API
async function fetchUserData(userId) {
  try {
    const response = await fetch(
      \`https://api.example.com/users/\${userId}\`,
      {
        headers: {
          'Authorization': \`Bearer \${API_KEY}\`
        }
      }
    );
    
    if (!response.ok) {
      throw new Error('API request failed');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
}`}</pre>
          </div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-10 right-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
      >
        <div className="bg-white text-gray-800 p-3 rounded-lg shadow-lg">
          <Code className="h-8 w-8" />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-16 left-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.6, type: "spring" }}
      >
        <div className="bg-blue-500 text-white p-3 rounded-lg shadow-lg">
          <div className="h-8 w-8 flex items-center justify-center font-bold">JS</div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function DeployContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      className="bg-orange-600 rounded-lg p-6 h-full relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="border border-orange-400"></div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <motion.div variants={itemVariants} className="mb-8">
          <h3 className="text-2xl font-medium mb-4">Deploy with confidence</h3>
          <p className="text-orange-100">
            Ship your app to production in minutes. Host on our cloud or your own infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={itemVariants} className="bg-orange-700 rounded-lg p-4">
            <h4 className="font-medium mb-3">Deployment Options</h4>
            <div className="space-y-2">
              <div className="bg-orange-800 rounded p-3 flex items-center">
                <div className="h-4 w-4 bg-blue-400 rounded-full mr-2"></div>
                <div className="text-sm">ReLudgi Cloud (managed)</div>
              </div>
              <div className="bg-orange-800 rounded p-3 flex items-center">
                <div className="h-4 w-4 bg-green-400 rounded-full mr-2"></div>
                <div className="text-sm">Self-hosted (your infrastructure)</div>
              </div>
              <div className="bg-orange-800 rounded p-3 flex items-center">
                <div className="h-4 w-4 bg-purple-400 rounded-full mr-2"></div>
                <div className="text-sm">Private cloud (AWS, GCP, Azure)</div>
              </div>
              <div className="bg-orange-800 rounded p-3 flex items-center">
                <div className="h-4 w-4 bg-yellow-400 rounded-full mr-2"></div>
                <div className="text-sm">On-premise deployment</div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-orange-700 rounded-lg p-4">
            <h4 className="font-medium mb-3">Security & Compliance</h4>
            <div className="space-y-2">
              <div className="bg-orange-800 rounded p-3 flex items-center">
                <div className="text-sm">✓ SOC 2 Type II Certified</div>
              </div>
              <div className="bg-orange-800 rounded p-3 flex items-center">
                <div className="text-sm">✓ GDPR Compliant</div>
              </div>
              <div className="bg-orange-800 rounded p-3 flex items-center">
                <div className="text-sm">✓ HIPAA Compliant</div>
              </div>
              <div className="bg-orange-800 rounded p-3 flex items-center">
                <div className="text-sm">✓ SSO & SAML Authentication</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mt-6 bg-orange-700 rounded-lg p-4">
          <h4 className="font-medium mb-3">Deployment Timeline</h4>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-orange-500"></div>
            <div className="space-y-4 relative">
              <div className="bg-orange-800 rounded p-3 pl-8 relative">
                <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-3 w-3 bg-white rounded-full"></div>
                <div className="text-sm">Day 1: Build your app</div>
              </div>
              <div className="bg-orange-800 rounded p-3 pl-8 relative">
                <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-3 w-3 bg-white rounded-full"></div>
                <div className="text-sm">Day 2: Test with your team</div>
              </div>
              <div className="bg-orange-800 rounded p-3 pl-8 relative">
                <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-3 w-3 bg-white rounded-full"></div>
                <div className="text-sm">Day 3: Deploy to production</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-10 right-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
      >
        <div className="bg-white text-orange-600 p-3 rounded-lg shadow-lg">
          <Upload className="h-8 w-8" />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-16 right-16"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.6, type: "spring" }}
      >
        <div className="bg-blue-500 text-white p-3 rounded-lg shadow-lg">
          <div className="h-8 w-8 flex items-center justify-center font-bold">GO</div>
        </div>
      </motion.div>
    </motion.div>
  )
}

