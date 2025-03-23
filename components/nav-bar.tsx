"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import MegaMenu from "./mega-menu"
import { ThemeToggle } from "./theme-toggle"

const navItems = [
  {
    label: "PRODUCTS",
    href: "#",
    hasMegaMenu: true,
    menuType: "products",
  },
  {
    label: "SOLUTIONS",
    href: "#",
    hasMegaMenu: true,
    menuType: "solutions",
  },
  {
    label: "DEVELOPERS",
    href: "#",
    hasMegaMenu: true,
    menuType: "developers",
  },
  {
    label: "RESOURCES",
    href: "#",
    hasMegaMenu: true,
    menuType: "resources",
  },
  { label: "USE CASES", href: "/use-cases" },
  { label: "PRICING", href: "/pricing" },
]

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)
  const pathname = usePathname()

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (activeMegaMenu) {
        // The mega menu component handles its own click outside
        // We don't need to do anything here
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [activeMegaMenu])

  // Close dropdown when navigating
  useEffect(() => {
    setActiveMegaMenu(null)
    setMobileMenuOpen(false)
  }, [pathname])

  const toggleMegaMenu = (menuType: string) => {
    if (activeMegaMenu === menuType) {
      setActiveMegaMenu(null)
    } else {
      setActiveMegaMenu(menuType)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-black text-white dark:bg-white dark:text-gray-900">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link href="/" className="mr-8">
            <ReLudgiLogo />
          </Link>
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.hasMegaMenu ? (
                  <button
                    onClick={() => toggleMegaMenu(item.menuType)}
                    className={cn(
                      "text-sm font-medium text-gray-200 hover:text-white flex items-center dark:text-gray-700 dark:hover:text-gray-900",
                      activeMegaMenu === item.menuType && "text-white dark:text-gray-900",
                    )}
                  >
                    {item.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={cn(
                        "ml-1 h-3 w-3 transition-transform duration-200",
                        activeMegaMenu === item.menuType && "transform rotate-180",
                      )}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-gray-200 hover:text-white dark:text-gray-700 dark:hover:text-gray-900"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="link" className="text-white dark:text-gray-900">
            SIGN IN
          </Button>
          <Button
            variant="outline"
            className="border-gray-700 text-black dark:text-white hover:bg-gray-800 dark:border-gray-300 dark:hover:bg-gray-200 "
          >
            BOOK A DEMO
          </Button>
          <Button className="bg-white text-black hover:bg-gray-200 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800">
            START FOR FREE
          </Button>
        </div>
        <div className="md:hidden flex items-center space-x-4">
          <div className="bg-gray-800 rounded-md p-1 dark:bg-gray-200">
            <ThemeToggle />
          </div>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden absolute w-full bg-black pb-6 px-4 dark:bg-white",
          mobileMenuOpen ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col space-y-1 pt-2 pb-4">
          {navItems.map((item) => (
            <div key={item.label} className="py-2">
              {item.hasMegaMenu ? (
                <button
                  onClick={() => toggleMegaMenu(item.menuType)}
                  className="text-sm font-medium text-gray-200 hover:text-white flex items-center justify-between w-full dark:text-gray-700 dark:hover:text-gray-900"
                >
                  <span>{item.label}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={cn(
                      "h-3 w-3 transition-transform duration-200",
                      activeMegaMenu === item.menuType && "transform rotate-180",
                    )}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
              ) : (
                <Link
                  href={item.href}
                  className="text-sm font-medium text-gray-200 hover:text-white block dark:text-gray-700 dark:hover:text-gray-900"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className="flex flex-col space-y-3">
          <Button variant="link" className="text-white justify-start dark:text-gray-900">
            SIGN IN
          </Button>
          <Button
            variant="outline"
            className="border-gray-700 text-black hover:bg-gray-800 dark:border-gray-300 dark:hover:bg-gray-200 dark:text-gray-900"
          >
            BOOK A DEMO
          </Button>
          <Button className="bg-white text-black hover:bg-gray-200 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800">
            START FOR FREE
          </Button>
        </div>
      </div>

      {/* Mega Menu */}
      {activeMegaMenu && (
        <MegaMenu isOpen={!!activeMegaMenu} onClose={() => setActiveMegaMenu(null)} menuType={activeMegaMenu} />
      )}
    </header>
  )
}

function ReLudgiLogo() {
  return (
    <div className="flex items-center">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
          className="fill-white dark:fill-gray-900"
        />
        <path d="M7.5 6H16.5L12 12L16.5 18H7.5L12 12L7.5 6Z" className="fill-black dark:fill-white" />
      </svg>
      <span className="ml-2 text-xl font-semibold">ReLudgi</span>
    </div>
  )
}

