import { Button } from "@/components/ui/button"
import { ArrowRight, Server, Shield, Lock, Database, Settings } from "lucide-react"

export default function SelfHostingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-500 to-red-600 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Complete control with self-hosting</h1>
            <p className="text-xl mb-8">
              Deploy ReLudgi on your own infrastructure. Maintain full control over your data, security, and compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-red-100">
                LEARN MORE
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-red-600">
                CONTACT SALES
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">Why self-host ReLudgi?</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Server className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Full Control</h3>
                <p className="text-gray-600 mb-4">
                  Maintain complete control over your infrastructure, data, and security. Deploy on your own terms.
                </p>
                <a href="#" className="text-red-600 font-medium flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Security & Compliance</h3>
                <p className="text-gray-600 mb-4">
                  Meet strict security and compliance requirements. Keep sensitive data within your own network.
                </p>
                <a href="#" className="text-red-600 font-medium flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Customization</h3>
                <p className="text-gray-600 mb-4">
                  Customize and extend ReLudgi to meet your specific needs. Integrate with your existing systems.
                </p>
                <a href="#" className="text-red-600 font-medium flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Options Section */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">Deployment options</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Cloud Providers</h3>
                <p className="text-gray-600 mb-4">
                  Deploy ReLudgi on your preferred cloud provider. We support all major cloud platforms.
                </p>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-red-50 p-2 rounded text-sm">AWS</div>
                  <div className="bg-red-50 p-2 rounded text-sm">Google Cloud</div>
                  <div className="bg-red-50 p-2 rounded text-sm">Microsoft Azure</div>
                  <div className="bg-red-50 p-2 rounded text-sm">Digital Ocean</div>
                  <div className="bg-red-50 p-2 rounded text-sm">IBM Cloud</div>
                  <div className="bg-red-50 p-2 rounded text-sm">Oracle Cloud</div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Containerization</h3>
                <p className="text-gray-600 mb-4">Deploy ReLudgi using containers for easy scaling and management.</p>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-red-50 p-2 rounded text-sm">Docker</div>
                  <div className="bg-red-50 p-2 rounded text-sm">Kubernetes</div>
                  <div className="bg-red-50 p-2 rounded text-sm">Amazon ECS</div>
                  <div className="bg-red-50 p-2 rounded text-sm">Google GKE</div>
                  <div className="bg-red-50 p-2 rounded text-sm">Azure AKS</div>
                  <div className="bg-red-50 p-2 rounded text-sm">OpenShift</div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">On-Premise</h3>
                <p className="text-gray-600 mb-4">Deploy ReLudgi on your own servers in your data center.</p>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-red-50 p-2 rounded text-sm">Linux</div>
                  <div className="bg-red-50 p-2 rounded text-sm">Windows Server</div>
                  <div className="bg-red-50 p-2 rounded text-sm">VMware</div>
                  <div className="bg-red-50 p-2 rounded text-sm">Hyper-V</div>
                  <div className="bg-red-50 p-2 rounded text-sm">Bare Metal</div>
                  <div className="bg-red-50 p-2 rounded text-sm">Private Cloud</div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Air-Gapped Environments</h3>
                <p className="text-gray-600 mb-4">
                  Deploy ReLudgi in completely isolated environments with no internet access.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center">
                    <div className="bg-red-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-red-600" />
                    </div>
                    <span className="text-gray-700">Offline license activation</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-red-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-red-600" />
                    </div>
                    <span className="text-gray-700">Offline package installation</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-red-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-red-600" />
                    </div>
                    <span className="text-gray-700">Manual updates</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-red-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-red-600" />
                    </div>
                    <span className="text-gray-700">Isolated network support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Enterprise-grade security</h3>
                <p className="text-gray-600 mb-6">
                  Self-hosting gives you complete control over your security posture. Implement your own security
                  measures and comply with your organization's requirements.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <div className="bg-red-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-red-600" />
                    </div>
                    <span className="text-gray-700">Custom authentication integration</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-red-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-red-600" />
                    </div>
                    <span className="text-gray-700">Data encryption at rest and in transit</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-red-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-red-600" />
                    </div>
                    <span className="text-gray-700">Network isolation and VPC support</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-red-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-red-600" />
                    </div>
                    <span className="text-gray-700">Audit logging and monitoring</span>
                  </li>
                </ul>
                <Button className="bg-red-600 text-white hover:bg-red-700">SECURITY DOCUMENTATION</Button>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                <img
                  src="/placeholder.svg?height=400&width=500&text=Security+Features"
                  alt="Security features"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Residency Section */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <img
                  src="/placeholder.svg?height=400&width=500&text=Global+Data+Centers"
                  alt="Global data centers map"
                  className="w-full h-auto rounded-lg"
                />
              </div>

              <div className="order-1 md:order-2">
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Data residency & compliance</h3>
                <p className="text-gray-600 mb-6">
                  Keep your data in your preferred region to meet data residency requirements. Comply with local
                  regulations like GDPR, HIPAA, and more.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <div className="bg-red-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-red-600" />
                    </div>
                    <span className="text-gray-700">Regional data storage</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-red-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-red-600" />
                    </div>
                    <span className="text-gray-700">Compliance with local regulations</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-red-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-red-600" />
                    </div>
                    <span className="text-gray-700">Data sovereignty</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-red-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-red-600" />
                    </div>
                    <span className="text-gray-700">Custom data retention policies</span>
                  </li>
                </ul>
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
              <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Robert Chen</h4>
                    <p className="text-gray-600 text-sm">CIO, Financial Services Company</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "As a financial institution, we have strict security and compliance requirements. Self-hosting ReLudgi
                  allows us to meet these requirements while still benefiting from the platform's powerful features."
                </p>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Emily Rodriguez</h4>
                    <p className="text-gray-600 text-sm">VP of IT, Healthcare Provider</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "HIPAA compliance is non-negotiable for us. With ReLudgi's self-hosting option, we can keep patient
                  data secure and compliant while building the internal tools our staff needs."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to take control?</h2>
            <p className="text-xl mb-8">
              Contact our team to learn more about self-hosting ReLudgi in your environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-red-100">
                CONTACT SALES
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-red-600">
                DOWNLOAD WHITEPAPER
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

