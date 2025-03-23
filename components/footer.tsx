import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 border-t border-gray-800 dark:bg-white dark:text-gray-900 dark:border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Navigation columns */}
          <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
            {/* Products column */}
            <div>
              <h3 className="text-sm text-gray-400 font-medium mb-4 dark:text-gray-600">PRODUCTS</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/products/app-builder" className="hover:text-gray-300 dark:hover:text-gray-700">
                    Apps
                  </Link>
                </li>
                <li>
                  <Link href="/products/workflows" className="hover:text-gray-300 dark:hover:text-gray-700">
                    Workflows
                  </Link>
                </li>
                <li>
                  <Link href="/products/database" className="hover:text-gray-300 dark:hover:text-gray-700">
                    Database
                  </Link>
                </li>
                <li>
                  <Link href="/products/mobile" className="hover:text-gray-300 dark:hover:text-gray-700">
                    Mobile
                  </Link>
                </li>
              </ul>
            </div>

            {/* Solutions column */}
            <div>
              <h3 className="text-sm text-gray-400 font-medium mb-4 dark:text-gray-600">SOLUTIONS</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/solutions/ai-apps" className="hover:text-gray-300 dark:hover:text-gray-700">
                    AI apps
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/external-apps" className="hover:text-gray-300 dark:hover:text-gray-700">
                    External apps
                  </Link>
                </li>
                <li>
                  <Link href="/products/integrations" className="hover:text-gray-300 dark:hover:text-gray-700">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/self-hosting" className="hover:text-gray-300 dark:hover:text-gray-700">
                    Self-hosting
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/use-cases" className="hover:text-gray-300 dark:hover:text-gray-700">
                    Use cases
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/templates" className="hover:text-gray-300 dark:hover:text-gray-700">
                    Templates
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/utilities" className="hover:text-gray-300 dark:hover:text-gray-700">
                    Utilities
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources column */}
            <div>
              <h3 className="text-sm text-gray-400 font-medium mb-4 dark:text-gray-600">RESOURCES</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/resources/blog" className="hover:text-gray-300 dark:hover:text-gray-700">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/resources/reports" className="hover:text-gray-300 dark:hover:text-gray-700">
                    Reports
                  </Link>
                </li>
                <li>
                  <Link href="/resources/customer-stories" className="hover:text-gray-300 dark:hover:text-gray-700">
                    Customer stories
                  </Link>
                </li>
              </ul>
            </div>

            {/* Developers column */}
            <div>
              <h3 className="text-sm text-gray-400 font-medium mb-4 dark:text-gray-600">DEVELOPERS</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/developers/documentation" className="hover:text-gray-300 dark:hover:text-gray-700">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/developers/university" className="hover:text-gray-300 dark:hover:text-gray-700">
                    ReLudgi University
                  </Link>
                </li>
                <li>
                  <Link href="/developers/changelog" className="hover:text-gray-300 dark:hover:text-gray-700">
                    Changelog
                  </Link>
                </li>
                <li>
                  <Link href="/developers/status" className="hover:text-gray-300 dark:hover:text-gray-700">
                    Status
                  </Link>
                </li>
                <li>
                  <Link href="/developers/hire" className="hover:text-gray-300 dark:hover:text-gray-700">
                    Hire a developer
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company column */}
            <div>
              <h3 className="text-sm text-gray-400 font-medium mb-4 dark:text-gray-600">COMPANY</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/company/about" className="hover:text-gray-300 dark:hover:text-gray-700">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/company/careers" className="hover:text-gray-300 dark:hover:text-gray-700">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/company/partners" className="hover:text-gray-300 dark:hover:text-gray-700">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link href="/company/newsroom" className="hover:text-gray-300 dark:hover:text-gray-700">
                    Newsroom
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA and company info column */}
          <div className="md:col-span-3">
            <div className="space-y-4 mb-8">
              <Button className="w-full bg-gray-200 text-black hover:bg-white dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800">
                START FOR FREE
              </Button>
              <Button
                variant="outline"
                className="w-full border-gray-700 hover:bg-gray-800 dark:border-gray-300 dark:hover:bg-gray-200 dark:text-gray-900"
              >
                BOOK A DEMO
              </Button>
            </div>

            <div className="space-y-3 text-sm">
              <Link
                href="/terms"
                className="block text-gray-400 hover:text-gray-300 dark:text-gray-600 dark:hover:text-gray-700"
              >
                TERMS OF USE
              </Link>
              <Link
                href="/privacy"
                className="block text-gray-400 hover:text-gray-300 dark:text-gray-600 dark:hover:text-gray-700"
              >
                PRIVACY POLICY
              </Link>
              <Link
                href="/security"
                className="block text-gray-400 hover:text-gray-300 dark:text-gray-600 dark:hover:text-gray-700"
              >
                SECURITY
              </Link>
              <Link
                href="/sitemap"
                className="block text-gray-400 hover:text-gray-300 dark:text-gray-600 dark:hover:text-gray-700"
              >
                SITE MAP
              </Link>
            </div>

            <div className="mt-8 text-sm text-gray-400 dark:text-gray-600">© RELUDGI 2025</div>
          </div>
        </div>

        {/* Logo section */}
        <div className="mt-16">
          <div className="flex items-center">
            <div className="mr-4">
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16"
              >
                <path
                  d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                  className="fill-white dark:fill-gray-900"
                />
                <path d="M7.5 6H16.5L12 12L16.5 18H7.5L12 12L7.5 6Z" className="fill-black dark:fill-white" />
              </svg>
            </div>
            <h2 className="text-7xl font-light tracking-tight">ReLudgi</h2>
          </div>
        </div>
      </div>
    </footer>
  )
}

