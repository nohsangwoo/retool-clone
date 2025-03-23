"use client"

import { useEffect, useRef, useState } from "react"

const companies = [
  { name: "OpenAI", logo: "/logos/openai.svg" },
  { name: "DoorDash", logo: "/logos/doordash.svg" },
  { name: "Volvo", logo: "/logos/volvo.svg" },
  { name: "Amazon", logo: "/logos/amazon.svg" },
  { name: "Wiz", logo: "/logos/wiz.svg" },
  { name: "Stripe", logo: "/logos/stripe.svg" },
]

export default function CompanyLogosSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const sectionTop = rect.top
      const viewportHeight = window.innerHeight

      // Start animation when the section is 80% from entering the viewport
      let progress = 0

      if (sectionTop < viewportHeight * 0.8) {
        // Complete the animation when the section is 30% into the viewport
        progress = Math.min(1, (viewportHeight * 0.8 - sectionTop) / (viewportHeight * 0.5))
      }

      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={sectionRef} className="py-20 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center">
            <div
              className="w-full mb-12 text-center transform transition-all duration-500"
              style={{
                opacity: scrollProgress,
                transform: `translateY(${(1 - scrollProgress) * 30}px)`,
              }}
            >
              <p className="text-gray-400 uppercase text-sm tracking-wider font-medium">
                COMPANIES OF ALL SIZES USE RELUDGI APP BUILDER
              </p>
            </div>

            <div className="w-full flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
              {companies.map((company, index) => (
                <div
                  key={company.name}
                  className="transform transition-all duration-500 grayscale opacity-70 hover:opacity-100 hover:grayscale-0"
                  style={{
                    opacity: Math.min(0.7, scrollProgress * 0.7),
                    transform: `translateX(${(1 - scrollProgress) * -100 + index * 10}px)`,
                    transitionDelay: `${index * 0.1}s`,
                  }}
                >
                  <CompanyLogo name={company.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Subtle grid background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="h-full w-full border-t border-b border-gray-800"></div>
      </div>

      {/* Extra padding at the bottom of this section */}
      <div className="h-20"></div>
    </div>
  )
}

function CompanyLogo({ name }: { name: string }) {
  switch (name) {
    case "OpenAI":
      return (
        <svg width="100" height="30" viewBox="0 0 100 30" fill="currentColor" className="text-white h-8">
          <path d="M38.0239 10.2898C38.0239 4.60898 42.6149 0 48.3149 0C53.9949 0 58.6059 4.60898 58.6059 10.2898C58.6059 15.9706 53.9949 20.5796 48.3149 20.5796C42.6149 20.5796 38.0239 15.9706 38.0239 10.2898ZM44.1949 10.2898C44.1949 12.5788 46.0259 14.4098 48.3149 14.4098C50.6039 14.4098 52.4349 12.5788 52.4349 10.2898C52.4349 8.00082 50.6039 6.16982 48.3149 6.16982C46.0259 6.16982 44.1949 8.00082 44.1949 10.2898Z" />
          <path
            d="M22.1354 10.2898C22.1354 12.5788 20.3044 14.4098 18.0154 14.4098C15.7264 14.4098 13.8954 12.5788 13.8954 10.2898C13.8954 8.00082 15.7264 6.16982 18.0154 6.16982C20.3044 6.16982 22.1354 8.00082 22.1354 10.2898ZM7.72437 10.2898C7.72437 15.9706 3.13339 20.5796 -2.54661 20.5796C-8.24661 20.5796 -12.8376 15.9706 -12.8376 10.2898C-12.8376 4.60898 -8.24661 0 -2.54661 0C3.13339 0 7.72437 4.60898 7.72437 10.2898Z"
            transform="translate(12.8376)"
          />
          <path
            d="M7.72437 10.2898C7.72437 15.9706 3.13339 20.5796 -2.54661 20.5796C-8.24661 20.5796 -12.8376 15.9706 -12.8376 10.2898C-12.8376 4.60898 -8.24661 0 -2.54661 0C3.13339 0 7.72437 4.60898 7.72437 10.2898ZM-6.66661 10.2898C-6.66661 12.5788 -4.83561 14.4098 -2.54661 14.4098C-0.257613 14.4098 1.57339 12.5788 1.57339 10.2898C1.57339 8.00082 -0.257613 6.16982 -2.54661 6.16982C-4.83561 6.16982 -6.66661 8.00082 -6.66661 10.2898Z"
            transform="translate(92.2756 0.000061)"
          />
          <path d="M0 0.0898438H6.171V20.4898H0V0.0898438Z" transform="translate(63.6149 0.0898438)" />
          <path d="M0 0.0898438H6.171V20.4898H0V0.0898438Z" transform="translate(30.2146 0.0898438)" />
        </svg>
      )
    case "DoorDash":
      return (
        <svg width="120" height="20" viewBox="0 0 120 20" fill="currentColor" className="text-white h-8">
          <path
            d="M11.0489 0C4.9429 0 0 4.9429 0 11.0489C0 17.1548 4.9429 22.0977 11.0489 22.0977C17.1548 22.0977 22.0977 17.1548 22.0977 11.0489C22.0977 4.9429 17.1548 0 11.0489 0ZM15.6684 9.0401L11.0489 13.6596L6.42933 9.0401H15.6684Z"
            transform="scale(0.9)"
          />
          <path
            d="M32.5 6H37.5L42.5 16H38.5L37.5 14H32.5L31.5 16H27.5L32.5 6ZM36.5 12L35 9L33.5 12H36.5Z"
            transform="scale(0.9)"
          />
          <path
            d="M44 6H48V14.5C48 15.3284 48.6716 16 49.5 16H54.5C55.3284 16 56 15.3284 56 14.5V6H60V14.5C60 17.5376 57.5376 20 54.5 20H49.5C46.4624 20 44 17.5376 44 14.5V6Z"
            transform="scale(0.9)"
          />
          <path d="M62 6H66V16H62V6Z" transform="scale(0.9)" />
          <path d="M68 6H72V12L77 6H82L76 13L82 20H77L72 14V20H68V6Z" transform="scale(0.9)" />
          <path
            d="M84 6H94C96.2091 6 98 7.79086 98 10V16H94V11C94 10.4477 93.5523 10 93 10H89C88.4477 10 88 10.4477 88 11V16H84V6Z"
            transform="scale(0.9)"
          />
          <path
            d="M100 6H110C112.209 6 114 7.79086 114 10V12C114 14.2091 112.209 16 110 16H104V20H100V6ZM104 12H109C109.552 12 110 11.5523 110 11V11C110 10.4477 109.552 10 109 10H104V12Z"
            transform="scale(0.9)"
          />
          <path d="M116 6H120V20H116V6Z" transform="scale(0.9)" />
        </svg>
      )
    case "Volvo":
      return (
        <svg width="80" height="20" viewBox="0 0 80 20" fill="currentColor" className="text-white h-8">
          <path d="M40 0C35.2 0 31.3 3.9 31.3 8.7C31.3 13.5 35.2 17.4 40 17.4C44.8 17.4 48.7 13.5 48.7 8.7C48.7 3.9 44.8 0 40 0ZM40 1.7C43.9 1.7 47 4.8 47 8.7C47 12.6 43.9 15.7 40 15.7C36.1 15.7 33 12.6 33 8.7C33 4.8 36.1 1.7 40 1.7Z" />
          <path d="M40 3.5L36.5 13.9H38.3L39.1 11.7H40.9L41.7 13.9H43.5L40 3.5ZM39.6 10L40 8.7L40.4 10H39.6Z" />
          <path d="M16.5 3.5L13 13.9H14.8L15.6 11.7H17.4L18.2 13.9H20L16.5 3.5ZM16.1 10L16.5 8.7L16.9 10H16.1Z" />
          <path d="M63.5 3.5L60 13.9H61.8L62.6 11.7H64.4L65.2 13.9H67L63.5 3.5ZM63.1 10L63.5 8.7L63.9 10H63.1Z" />
          <path d="M0 3.5V13.9H1.7V3.5H0Z" />
          <path d="M78.3 3.5V13.9H80V3.5H78.3Z" />
          <path d="M3.5 3.5V13.9H5.2V7.8L8.7 13.9H10.4V3.5H8.7V9.6L5.2 3.5H3.5Z" />
          <path d="M69.6 3.5V13.9H71.3V7.8L74.8 13.9H76.5V3.5H74.8V9.6L71.3 3.5H69.6Z" />
          <path d="M22.6 3.5V13.9H24.3V10H28.7V8.3H24.3V5.2H29.6V3.5H22.6Z" />
          <path d="M50.4 3.5V13.9H52.1V10H56.5V8.3H52.1V5.2H57.4V3.5H50.4Z" />
        </svg>
      )
    case "Amazon":
      return (
        <svg width="100" height="30" viewBox="0 0 100 30" fill="currentColor" className="text-white h-8">
          <path
            d="M64.7 26.0667C59.0333 30.2667 50.7 32.5333 43.5 32.5333C33.3667 32.5333 24.3667 28.9 17.7 22.7667C17.1667 22.2667 17.6333 21.6 18.2667 22C25.4333 26.3333 34.5 28.9 43.8667 28.9C50.1667 28.9 57.2333 27.4333 63.6333 24.3667C64.6333 23.9 65.4667 25.1333 64.7 26.0667Z"
            transform="scale(0.9)"
          />
          <path
            d="M67.6333 22.7C66.9 21.7667 62.3667 22.3 60.3667 22.5667C59.8333 22.6333 59.7667 22.1667 60.2333 21.8333C63.7 19.4333 69.5667 20.1667 70.1667 20.9667C70.7667 21.7667 70.0333 27.8333 66.8333 30.5C66.3667 30.9 65.9333 30.7 66.1333 30.2C66.9 28.3 68.3667 23.6333 67.6333 22.7Z"
            transform="scale(0.9)"
          />
          <path
            d="M60.5667 6.7V3.63333C60.5667 3.23333 60.9 2.96667 61.2667 2.96667H72.0333C72.4333 2.96667 72.7667 3.26667 72.7667 3.63333V6.3C72.7667 6.7 72.4 7.16667 71.8333 7.9L66.3 15.9C68.5 15.8333 70.8333 16.1667 72.7333 17.3C73.2 17.5667 73.3333 17.9667 73.3667 18.3667V21.6333C73.3667 22.0333 72.9333 22.5 72.5 22.2667C69.1333 20.3667 64.6333 20.1333 60.8333 22.3C60.4333 22.5 60 22.0667 60 21.6667V18.5C60 18.0333 60 17.16667 60.5 16.3667L67 7.36667H61.2667C60.8667 7.36667 60.5667 7.06667 60.5667 6.7Z"
            transform="scale(0.9)"
          />
          <path
            d="M21.7667 19.1333H18.5333C18.1667 19.1 17.8667 18.8333 17.8333 18.5V3.7C17.8333 3.33333 18.1667 3.03333 18.5667 3.03333H21.5667C21.9333 3.06667 22.2333 3.33333 22.2667 3.66667V6.53333H22.3333C23.1667 4.36667 24.7 3.03333 26.7667 3.03333C28.8667 3.03333 30.1333 4.36667 31.0333 6.53333C31.8667 4.36667 33.7333 3.03333 35.7 3.03333C37.1 3.03333 38.6333 3.7 39.5333 5.03333C40.5667 6.53333 40.3 8.7 40.3 10.6333L40.2667 18.4333C40.2667 18.8 39.9333 19.1333 39.5333 19.1333H36.3C35.9333 19.1 35.6 18.8 35.6 18.4333V12.1333C35.6 11.5 35.6667 9.7 35.5 9.1C35.2667 8.03333 34.5667 7.7 33.7 7.7C33 7.7 32.2333 8.16667 31.9333 8.9C31.6333 9.63333 31.6667 10.8333 31.6667 11.5V18.4333C31.6667 18.8 31.3333 19.1333 30.9333 19.1333H27.7C27.3333 19.1 27 18.8 27 18.4333L26.9667 12.1333C26.9667 10.6333 27.2 7.66667 25.0333 7.66667C22.8333 7.66667 22.9667 10.5333 22.9667 12.1333V18.4333C22.9667 18.8 22.6333 19.1333 22.2333 19.1333H21.7667Z"
            transform="scale(0.9)"
          />
          <path
            d="M80.2333 3.03333C85.3667 3.03333 88 8.03333 88 14.3C88 20.3 84.9667 25.1333 80.2333 25.1333C75.2333 25.1333 72.6333 20.1333 72.6333 14C72.6333 7.83333 75.2667 3.03333 80.2333 3.03333ZM80.2667 7.03333C77.9 7.03333 77.7333 10.1333 77.7333 12.3C77.7333 14.5 77.7 21.1667 80.2333 21.1667C82.7333 21.1667 82.9 16.1667 82.9 13.8333C82.9 12.3 82.8333 10.5 82.4 9.06667C82.0333 7.83333 81.3 7.03333 80.2667 7.03333Z"
            transform="scale(0.9)"
          />
          <path
            d="M91.8667 19.1333H88.6667C88.3 19.1 87.9667 18.8 87.9667 18.4333L87.9333 3.63333C87.9667 3.3 88.3 3 88.7 3H91.7C92.0333 3.03333 92.3 3.26667 92.3667 3.56667V6.7H92.4333C93.4333 4.36667 94.8 3.03333 97.0333 3.03333C98.5 3.03333 99.9333 3.56667 100.833 5C101.667 6.33333 101.667 8.63333 101.667 10.3V18.5C101.633 18.8333 101.3 19.1333 100.933 19.1333H97.7C97.3667 19.1 97.0667 18.8333 97.0333 18.5V11.9C97.0333 10.4333 97.2 7.7 95.0667 7.7C94.3667 7.7 93.7 8.16667 93.3667 8.86667C92.9333 9.76667 92.8667 10.6667 92.8667 11.9V18.4333C92.8333 18.8 92.5 19.1333 92.1 19.1333H91.8667Z"
            transform="scale(0.9)"
          />
          <path
            d="M54.1333 13.1C54.1333 14.7 54.1667 16.0333 53.3333 17.4667C52.6667 18.6333 51.6333 19.3667 50.4667 19.3667C48.9 19.3667 48 18.2 48 16.5C48 13.1667 51.1333 12.5667 54.1333 12.5667V13.1ZM57.3667 19.1C57.1 19.3333 56.7667 19.3667 56.4667 19.1667C55.3 18.1333 55.1333 17.7 54.5333 16.8333C52.3333 19.0333 50.8333 19.5667 47.9 19.5667C44.4333 19.5667 41.7333 17.4 41.7333 13.1C41.7333 9.7 43.5333 7.36667 46.1333 6.23333C48.3667 5.23333 51.4333 5.03333 53.8 4.73333V4.23333C53.8 3.23333 53.8667 2.06667 53.2667 1.23333C52.7333 0.5 51.7333 0.2 50.8667 0.2C49.2667 0.2 47.8333 1.03333 47.5 2.8C47.4333 3.2 47.1667 3.6 46.7667 3.63333L43.6333 3.26667C43.2667 3.2 42.8667 2.9 42.9667 2.4C43.8 -1.13333 47.4333 -2 50.7 -2C52.3667 -2 54.5 -1.6 55.8333 -0.466667C57.5 0.933333 57.3 2.86667 57.3 4.93333V10.9333C57.3 12.4 57.9 13.0667 58.4667 13.8667C58.7333 14.2333 58.8 14.6667 58.5 14.9667C57.9 15.5 56.8 16.5 56.2333 17.1\

