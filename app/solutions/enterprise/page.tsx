import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Shield, Users, Lock, Database } from "lucide-react"

export default function EnterprisePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Enterprise-grade solutions</h1>
            <p className="text-xl mb-8">
              Secure, scalable, and compliant internal tools for large organizations. Deploy on your infrastructure or
              our managed cloud.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-100">
                CONTACT SALES
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-600">
                BOOK A DEMO
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">Enterprise features</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Security & Compliance</h3>
                <p className="text-gray-600 mb-4">
                  SOC 2 Type II certified. HIPAA, GDPR, and CCPA compliant. End-to-end encryption for all data.
                </p>
                <a href="#" className="text-blue-600 font-medium flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Self-Hosting</h3>
                <p className="text-gray-600 mb-4">
                  Deploy on your own infrastructure. AWS, GCP, Azure, or on-premise. Complete control over your data.
                </p>
                <a href="#" className="text-blue-600 font-medium flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Team Management</h3>
                <p className="text-gray-600 mb-4">
                  Role-based access control. SSO integration. Audit logs for all actions. Team collaboration features.
                </p>
                <a href="#" className="text-blue-600 font-medium flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Features Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">Why enterprises choose ReLudgi</h2>

            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Lock className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Enterprise-grade security</h3>
                  <p className="text-gray-600 mb-4">
                    We take security seriously. Our platform is built with security best practices at every level.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center">
                      <div className="bg-blue-100 rounded-full p-1 mr-2">
                        <ArrowRight className="h-3 w-3 text-blue-600" />
                      </div>
                      <span className="text-gray-700">SOC 2 Type II certified</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-blue-100 rounded-full p-1 mr-2">
                        <ArrowRight className="h-3 w-3 text-blue-600" />
                      </div>
                      <span className="text-gray-700">End-to-end encryption</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-blue-100 rounded-full p-1 mr-2">
                        <ArrowRight className="h-3 w-3 text-blue-600" />
                      </div>
                      <span className="text-gray-700">Regular security audits</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <img
                    src="/placeholder.svg?height=300&width=400&text=Security+Diagram"
                    alt="Security architecture diagram"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 bg-white rounded-xl p-6 shadow-sm">
                  <img
                    src="/placeholder.svg?height=300&width=400&text=RBAC+Diagram"
                    alt="Role-based access control diagram"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Advanced permissions</h3>
                  <p className="text-gray-600 mb-4">
                    Fine-grained control over who can access what. Role-based access control at the app, page, and
                    component level.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center">
                      <div className="bg-blue-100 rounded-full p-1 mr-2">
                        <ArrowRight className="h-3 w-3 text-blue-600" />
                      </div>
                      <span className="text-gray-700">SSO with SAML, OIDC</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-blue-100 rounded-full p-1 mr-2">
                        <ArrowRight className="h-3 w-3 text-blue-600" />
                      </div>
                      <span className="text-gray-700">Row-level security</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-blue-100 rounded-full p-1 mr-2">
                        <ArrowRight className="h-3 w-3 text-blue-600" />
                      </div>
                      <span className="text-gray-700">Audit logs for all actions</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Database className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Data governance</h3>
                  <p className="text-gray-600 mb-4">
                    Keep your data secure and compliant. Control where your data is stored and how it's accessed.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center">
                      <div className="bg-blue-100 rounded-full p-1 mr-2">
                        <ArrowRight className="h-3 w-3 text-blue-600" />
                      </div>
                      <span className="text-gray-700">Data residency controls</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-blue-100 rounded-full p-1 mr-2">
                        <ArrowRight className="h-3 w-3 text-blue-600" />
                      </div>
                      <span className="text-gray-700">Automated backups</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-blue-100 rounded-full p-1 mr-2">
                        <ArrowRight className="h-3 w-3 text-blue-600" />
                      </div>
                      <span className="text-gray-700">Data loss prevention</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <img
                    src="/placeholder.svg?height=300&width=400&text=Data+Governance"
                    alt="Data governance diagram"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">Trusted by leading enterprises</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-gray-600 text-sm">CTO, Fortune 500 Financial Services</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "ReLudgi has transformed how we build internal tools. The enterprise features like SSO and audit logs
                  were essential for our compliance requirements."
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Michael Chen</h4>
                    <p className="text-gray-600 text-sm">VP of Engineering, Global Healthcare Company</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "The ability to self-host ReLudgi on our own infrastructure was a game-changer for us. We maintain
                  complete control over our sensitive patient data."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
            <p className="text-xl mb-8">
              Contact our enterprise sales team to learn more about how ReLudgi can help your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-100">
                CONTACT SALES
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-600">
                BOOK A DEMO
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

