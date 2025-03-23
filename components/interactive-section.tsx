"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export default function InteractiveSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const sectionTop = rect.top
      const sectionHeight = rect.height
      const viewportHeight = window.innerHeight

      // Start animation earlier - when the section is 30% into view
      let progress = 0

      if (sectionTop < viewportHeight * 0.7) {
        // Calculate progress based on how far we've scrolled into the section
        // We'll complete the animation after scrolling just 50% of the section height
        progress = Math.min(1, (viewportHeight * 0.7 - sectionTop) / (viewportHeight * 0.5))
      }

      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Calculate positions based on scroll progress
  const sqlEditorPosition = Math.min(0, 50 - scrollProgress * 50) // Moves from 50% to 0%
  const dataTablePosition = Math.max(50, 100 - scrollProgress * 50) // Moves from 100% to 50%
  const opacity = Math.min(1, scrollProgress * 2) // Fades in

  return (
    <div ref={sectionRef} className="relative h-[100vh] grid grid-cols-12 gap-4">
      <div className="sticky top-0 col-span-12 h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          {/* SQL Editor */}
          <div
            className="bg-gray-900 rounded-lg overflow-hidden shadow-xl transition-all duration-300 ease-out"
            style={{
              transform: `translateX(${sqlEditorPosition}%)`,
              opacity: opacity,
              height: "80vh",
            }}
          >
            <div className="bg-gray-800 p-3 flex items-center justify-between border-b border-gray-700">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex space-x-2">
                <div className="px-3 py-1 bg-gray-700 rounded text-xs text-gray-300">SQL</div>
                <div className="px-3 py-1 bg-gray-700 rounded text-xs text-gray-300">GUI</div>
              </div>
            </div>
            <div className="p-4 font-mono text-sm text-blue-400 h-full overflow-auto">
              <div className="flex">
                <div className="text-gray-500 mr-4 select-none">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="leading-6">
                      {i + 1}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="leading-6 text-purple-400">SELECT</div>
                  <div className="leading-6 pl-4 text-green-400">case_id,</div>
                  <div className="leading-6 pl-4 text-green-400">location,</div>
                  <div className="leading-6 pl-4 text-green-400">sop,</div>
                  <div className="leading-6 pl-4 text-green-400">updated_at,</div>
                  <div className="leading-6 pl-4 text-green-400">process_owner,</div>
                  <div className="leading-6 pl-4 text-green-400">status</div>
                  <div className="leading-6 text-purple-400">FROM</div>
                  <div className="leading-6 pl-4 text-yellow-400">action_items</div>
                  <div className="leading-6 text-purple-400">ORDER BY</div>
                  <div className="leading-6 pl-4 text-green-400">
                    updated_at <span className="text-purple-400">DESC</span>;
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Data Table */}
          <div
            className="bg-white rounded-lg overflow-hidden shadow-xl transition-all duration-300 ease-out"
            style={{
              transform: `translateX(${dataTablePosition}%)`,
              opacity: opacity,
              height: "80vh",
            }}
          >
            <div className="bg-gray-100 p-3 flex items-center justify-between border-b border-gray-200">
              <div className="font-medium text-gray-800">Global Insights</div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
              </div>
            </div>
            <div className="p-4 h-full overflow-auto">
              <div className="mb-6">
                <div className="h-32 bg-gradient-to-r from-orange-100 to-orange-200 rounded-lg mb-2 flex items-center justify-center">
                  <svg viewBox="0 0 100 30" className="w-3/4 h-16">
                    <path
                      d="M0,15 Q10,5 20,20 T40,15 T60,20 T80,5 T100,15"
                      fill="none"
                      stroke="#f97316"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="text-xs text-gray-500 text-center">Performance Metrics</div>
              </div>

              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Location
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[
                      { location: "SKY", status: "Pending", color: "bg-yellow-100 text-yellow-800" },
                      { location: "RVT", status: "Pending", color: "bg-yellow-100 text-yellow-800" },
                      { location: "LKS", status: "Investigating", color: "bg-green-100 text-green-800" },
                      { location: "RVT", status: "Pending", color: "bg-yellow-100 text-yellow-800" },
                      { location: "LKS", status: "Investigating", color: "bg-green-100 text-green-800" },
                      { location: "RVT", status: "Pending", color: "bg-yellow-100 text-yellow-800" },
                      { location: "LKS", status: "Investigating", color: "bg-green-100 text-green-800" },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">{row.location}</td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <span className={cn("px-2 py-1 text-xs rounded-full", row.color)}>{row.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Grid lines in background */}
        <div className="absolute inset-0 grid grid-cols-12 gap-4 pointer-events-none">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="col-span-1 h-full border-r border-blue-500/10"></div>
          ))}
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute left-0 right-0 h-px bg-blue-500/10"
              style={{ top: `${(i + 1) * 8.33}%` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}

