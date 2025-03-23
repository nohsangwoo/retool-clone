"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Testimonial {
  id: number
  quote: string
  author: string
  role: string
  company: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "ReLudgi has transformed how we build internal tools. What used to take weeks now takes hours. Our engineering team can focus on core product development while business teams can build their own tools.",
    author: "Sarah Johnson",
    role: "CTO",
    company: "TechFlow Inc.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    quote:
      "The flexibility of ReLudgi is unmatched. We've built everything from simple dashboards to complex operational tools. The ability to customize with code when needed gives us the best of both worlds.",
    author: "Michael Chen",
    role: "VP of Engineering",
    company: "DataSphere",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    quote:
      "Our customer support team now has a unified view of all customer data thanks to ReLudgi. We connected our CRM, support tickets, and order history into one interface, reducing resolution time by 40%.",
    author: "Emily Rodriguez",
    role: "Head of Customer Success",
    company: "Elevate Solutions",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    quote:
      "As a non-technical founder, ReLudgi has been a game-changer. I can build tools to analyze our business data without bothering our developers. The learning curve is minimal compared to the value it provides.",
    author: "David Park",
    role: "Co-founder",
    company: "GrowthMetrics",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={sectionRef} className="bg-black text-white dark:bg-gray-100 dark:text-gray-900 py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">What our customers say</h2>
            <p className="text-xl text-gray-400 dark:text-gray-600 max-w-3xl mx-auto">
              Thousands of companies use ReLudgi to build internal tools faster and more efficiently.
            </p>
          </div>

          <div className="relative">
            {/* Large quote icon */}
            <div className="absolute -top-10 left-0 text-gray-800 opacity-30">
              <Quote size={80} />
            </div>

            {/* Testimonial slider */}
            <div className="relative bg-gray-900 dark:bg-white rounded-xl p-8 md:p-12 overflow-hidden shadow-lg">
              <div className="relative z-10">
                <div className="min-h-[300px] flex flex-col justify-between">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                  >
                    <p className="text-xl md:text-2xl font-light leading-relaxed mb-8">
                      "{testimonials[activeIndex].quote}"
                    </p>
                    <div className="flex items-center">
                      <div className="mr-4">
                        <img
                          src={testimonials[activeIndex].image || "/placeholder.svg"}
                          alt={testimonials[activeIndex].author}
                          className="w-12 h-12 rounded-full bg-gray-700"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">{testimonials[activeIndex].author}</h4>
                        <p className="text-gray-400 dark:text-gray-600">
                          {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveIndex(index)}
                          className={cn(
                            "w-2 h-2 rounded-full transition-all duration-300",
                            index === activeIndex ? "bg-white dark:bg-gray-900 w-6" : "bg-gray-600 dark:bg-gray-400",
                          )}
                          aria-label={`Go to testimonial ${index + 1}`}
                        />
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={prevTestimonial}
                        className="border-gray-700 hover:bg-gray-800 text-white dark:border-gray-300 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={nextTestimonial}
                        className="border-gray-700 hover:bg-gray-800 text-white dark:border-gray-300 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className="border border-gray-600 dark:border-gray-400"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-light mb-8">Ready to transform how you build internal tools?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
              >
                START FOR FREE
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-700 hover:bg-gray-800 text-white dark:border-gray-400 dark:text-gray-900 dark:hover:bg-gray-200"
              >
                READ CUSTOMER STORIES
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

