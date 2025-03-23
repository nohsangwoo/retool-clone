import { Button } from "@/components/ui/button"
import { ArrowRight, Rocket, CreditCard, Users } from "lucide-react"

export default function StartupsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-500 to-purple-600 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Built for startups</h1>
            <p className="text-xl mb-8">
              Rapidly build and iterate on internal tools as your company grows. Scale from prototype to production
              without rebuilding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-100">
                START FOR FREE
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-purple-600">
                VIEW STARTUP PROGRAM
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">Why startups choose ReLudgi</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Rocket className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Move fast</h3>
                <p className="text-gray-600 mb-4">
                  Build internal tools in hours, not weeks. Iterate quickly as your requirements change and your company
                  grows.
                </p>
                <a href="#" className="text-purple-600 font-medium flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <CreditCard className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Startup pricing</h3>
                <p className="text-gray-600 mb-4">
                  Special pricing for early-stage startups. Free tier to get started, then scale pricing as you grow.
                </p>
                <a href="#" className="text-purple-600 font-medium flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Team collaboration</h3>
                <p className="text-gray-600 mb-4">
                  Built for teams. Collaborate on building tools, share components, and manage permissions.
                </p>
                <a href="#" className="text-purple-600 font-medium flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">Common startup use cases</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Customer Onboarding</h3>
                <p className="text-gray-600 mb-4">
                  Build tools to streamline your customer onboarding process. Track progress, automate tasks, and
                  improve conversion.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center">
                    <div className="bg-purple-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-purple-600" />
                    </div>
                    <span className="text-gray-700">Onboarding dashboards</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-purple-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-purple-600" />
                    </div>
                    <span className="text-gray-700">Progress tracking</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-purple-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-purple-600" />
                    </div>
                    <span className="text-gray-700">Task automation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Operations Dashboard</h3>
                <p className="text-gray-600 mb-4">
                  Create a central hub for your operations team. Monitor metrics, manage orders, and track inventory.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center">
                    <div className="bg-purple-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-purple-600" />
                    </div>
                    <span className="text-gray-700">Real-time metrics</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-purple-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-purple-600" />
                    </div>
                    <span className="text-gray-700">Order management</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-purple-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-purple-600" />
                    </div>
                    <span className="text-gray-700">Inventory tracking</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Customer Support Portal</h3>
                <p className="text-gray-600 mb-4">
                  Build tools for your support team to manage tickets, track customer issues, and improve response
                  times.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center">
                    <div className="bg-purple-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-purple-600" />
                    </div>
                    <span className="text-gray-700">Ticket management</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-purple-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-purple-600" />
                    </div>
                    <span className="text-gray-700">Customer lookup</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-purple-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-purple-600" />
                    </div>
                    <span className="text-gray-700">Knowledge base integration</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Sales CRM</h3>
                <p className="text-gray-600 mb-4">
                  Create a custom CRM tailored to your sales process. Track leads, manage deals, and forecast revenue.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center">
                    <div className="bg-purple-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-purple-600" />
                    </div>
                    <span className="text-gray-700">Lead tracking</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-purple-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-purple-600" />
                    </div>
                    <span className="text-gray-700">Deal pipeline</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-purple-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-purple-600" />
                    </div>
                    <span className="text-gray-700">Revenue forecasting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Startup Program Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-purple-50 rounded-xl p-8 border border-purple-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Rocket className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">ReLudgi Startup Program</h3>
                  <p className="text-gray-600 mb-4">
                    Eligible startups get special pricing, dedicated support, and access to exclusive resources.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <div className="bg-purple-100 rounded-full p-1 mr-2">
                        <ArrowRight className="h-3 w-3 text-purple-600" />
                      </div>
                      <span className="text-gray-700">90% discount for 1 year</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-purple-100 rounded-full p-1 mr-2">
                        <ArrowRight className="h-3 w-3 text-purple-600" />
                      </div>
                      <span className="text-gray-700">Priority support</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-purple-100 rounded-full p-1 mr-2">
                        <ArrowRight className="h-3 w-3 text-purple-600" />
                      </div>
                      <span className="text-gray-700">Startup community access</span>
                    </li>
                  </ul>
                  <Button className="bg-purple-600 text-white hover:bg-purple-700">APPLY NOW</Button>
                </div>
                <div className="hidden md:block">
                  <img
                    src="/placeholder.svg?height=300&width=400&text=Startup+Program"
                    alt="Startup Program"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">From our startup customers</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Alex Rivera</h4>
                    <p className="text-gray-600 text-sm">CTO, TechStartup</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "As a small team, we couldn't afford to build custom internal tools from scratch. ReLudgi allowed us
                  to create exactly what we needed in days, not months."
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Jamie Lee</h4>
                    <p className="text-gray-600 text-sm">Founder, GrowthCo</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "The startup program was a game-changer for us. We got access to enterprise features at a price we
                  could afford, and the support team helped us get up and running quickly."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to build faster?</h2>
            <p className="text-xl mb-8">
              Start building internal tools today and focus on what matters most - growing your startup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-100">
                START FOR FREE
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-purple-600">
                BOOK A DEMO
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

