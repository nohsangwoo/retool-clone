import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Palette, Lock } from "lucide-react"

export default function ExternalAppsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-green-600 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Customer-facing portals</h1>
            <p className="text-xl mb-8">
              Create branded external applications that connect to your internal systems. Give customers self-service
              access to their data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-green-100">
                GET STARTED
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-green-600">
                VIEW DEMO
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">Build powerful customer portals</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">White-labeling</h3>
                <p className="text-gray-600 mb-4">
                  Customize the look and feel to match your brand. Add your logo, colors, and fonts for a seamless
                  experience.
                </p>
                <a href="#" className="text-green-600 font-medium flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Secure Access</h3>
                <p className="text-gray-600 mb-4">
                  Built-in authentication and authorization. SSO integration, role-based access control, and data
                  security.
                </p>
                <a href="#" className="text-green-600 font-medium flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Custom Domains</h3>
                <p className="text-gray-600 mb-4">
                  Host your customer portal on your own domain. Add SSL certificates for secure connections.
                </p>
                <a href="#" className="text-green-600 font-medium flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">Popular external app use cases</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Customer Dashboards</h3>
                <p className="text-gray-600 mb-4">
                  Give customers visibility into their data, orders, and account status. Provide self-service tools for
                  common tasks.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center">
                    <div className="bg-green-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Order tracking</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-green-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Account management</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-green-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Usage analytics</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Partner Portals</h3>
                <p className="text-gray-600 mb-4">
                  Create dedicated portals for your partners. Manage leads, track commissions, and share resources.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center">
                    <div className="bg-green-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Lead management</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-green-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Commission tracking</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-green-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Resource library</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Vendor Portals</h3>
                <p className="text-gray-600 mb-4">
                  Streamline vendor management with dedicated portals. Manage invoices, track deliveries, and handle
                  communications.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center">
                    <div className="bg-green-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Invoice submission</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-green-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Delivery tracking</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-green-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Communication tools</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Client Portals</h3>
                <p className="text-gray-600 mb-4">
                  Create dedicated spaces for your clients. Share documents, track projects, and collaborate
                  effectively.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center">
                    <div className="bg-green-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Document sharing</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-green-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Project tracking</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-green-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Collaboration tools</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">How it works</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 z-10 relative">
                  <span className="text-green-600 font-bold">1</span>
                </div>
                <div className="absolute top-6 left-6 w-full h-0.5 bg-green-100 hidden md:block"></div>
                <h3 className="text-xl font-semibold mb-3">Connect your data</h3>
                <p className="text-gray-600 mb-4">
                  Connect to your existing databases, APIs, and services. Pull in customer data from your CRM, orders
                  from your database, and more.
                </p>
              </div>

              <div className="relative">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 z-10 relative">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <div className="absolute top-6 left-6 w-full h-0.5 bg-green-100 hidden md:block"></div>
                <h3 className="text-xl font-semibold mb-3">Build your interface</h3>
                <p className="text-gray-600 mb-4">
                  Design your customer portal with our drag-and-drop builder. Customize the look and feel to match your
                  brand.
                </p>
              </div>

              <div className="relative">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 z-10 relative">
                  <span className="text-green-600 font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Deploy and share</h3>
                <p className="text-gray-600 mb-4">
                  Deploy your portal to your custom domain. Set up authentication and invite your customers to access
                  their data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Enterprise-grade security</h3>
                <p className="text-gray-600 mb-4">
                  Your customer data is protected with enterprise-grade security. Control access with fine-grained
                  permissions.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <div className="bg-green-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">SSO integration</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-green-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Role-based access control</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-green-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Data encryption</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-green-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Audit logging</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <img
                  src="/placeholder.svg?height=300&width=400&text=Security+Features"
                  alt="Security features"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">What our customers say</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">David Kim</h4>
                    <p className="text-gray-600 text-sm">CTO, SaaS Platform</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Our customers love the self-service portal we built with ReLudgi. They can access their data, track
                  orders, and get support without having to contact our team."
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Sophia Martinez</h4>
                    <p className="text-gray-600 text-sm">VP of Customer Success, B2B Company</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "We reduced support tickets by 40% after launching our customer portal. Our clients can now find the
                  information they need without waiting for our team to respond."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to build your customer portal?</h2>
            <p className="text-xl mb-8">
              Start building today and give your customers the self-service experience they deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-green-100">
                START FOR FREE
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-green-600">
                BOOK A DEMO
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

