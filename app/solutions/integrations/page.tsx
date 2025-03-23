import { Button } from "@/components/ui/button"
import { ArrowRight, Database, Code, Puzzle, Zap } from "lucide-react"

export default function IntegrationsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Connect to anything</h1>
            <p className="text-xl mb-8">
              Integrate with any database, API, or service. Build powerful internal tools that connect to all your
              existing systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-cyan-600 hover:bg-cyan-100">
                EXPLORE INTEGRATIONS
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-cyan-600">
                VIEW DOCUMENTATION
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">Connect to your data, wherever it lives</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-cyan-50 rounded-xl p-6 border border-cyan-100">
                <div className="bg-cyan-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Database Connectors</h3>
                <p className="text-gray-600 mb-4">
                  Connect to SQL and NoSQL databases. Query, write, and transform data from any database.
                </p>
                <a href="#" className="text-cyan-600 font-medium flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>

              <div className="bg-cyan-50 rounded-xl p-6 border border-cyan-100">
                <div className="bg-cyan-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">API Integrations</h3>
                <p className="text-gray-600 mb-4">
                  Connect to REST, GraphQL, SOAP, and other APIs. Authenticate with OAuth, API keys, and more.
                </p>
                <a href="#" className="text-cyan-600 font-medium flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>

              <div className="bg-cyan-50 rounded-xl p-6 border border-cyan-100">
                <div className="bg-cyan-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Puzzle className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Custom Connectors</h3>
                <p className="text-gray-600 mb-4">
                  Build custom connectors for proprietary systems. Extend our integration library with your own
                  connectors.
                </p>
                <a href="#" className="text-cyan-600 font-medium flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Categories Section */}
      <section className="py-20 bg-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">Integration categories</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Databases</h3>
                <p className="text-gray-600 mb-4">
                  Connect to SQL and NoSQL databases to query, write, and transform data.
                </p>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-cyan-50 p-2 rounded text-sm">PostgreSQL</div>
                  <div className="bg-cyan-50 p-2 rounded text-sm">MySQL</div>
                  <div className="bg-cyan-50 p-2 rounded text-sm">MongoDB</div>
                  <div className="bg-cyan-50 p-2 rounded text-sm">SQL Server</div>
                  <div className="bg-cyan-50 p-2 rounded text-sm">Oracle</div>
                  <div className="bg-cyan-50 p-2 rounded text-sm">Redis</div>
                  <div className="bg-cyan-50 p-2 rounded text-sm">Snowflake</div>
                  <div className="bg-cyan-50 p-2 rounded text-sm">BigQuery</div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">APIs & Services</h3>
                <p className="text-gray-600 mb-4">
                  Connect to REST, GraphQL, SOAP, and other APIs with various authentication methods.
                </p>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-cyan-50 p-2 rounded text-sm">REST API</div>
                  <div className="bg-cyan-50 p-2 rounded text-sm">GraphQL</div>
                  <div className="bg-cyan-50 p-2 rounded text-sm">SOAP</div>
                  <div className="bg-cyan-50 p-2 rounded text-sm">gRPC</div>
                  <div className="bg-cyan-50 p-2 rounded text-sm">Webhooks</div>
                  <div className="bg-cyan-50 p-2 rounded text-sm">OAuth 2.0</div>
                  <div className="bg-cyan-50 p-2 rounded text-sm">JWT</div>
                  <div className="bg-cyan-50 p-2 rounded text-sm">API Keys</div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">SaaS Platforms</h3>
                <p className="text-gray-600 mb-4">
                  Connect to popular SaaS platforms to access and manipulate your data.
                </p>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-cyan-50 p-2 rounded text-sm">Salesforce</div>
                  <div className="bg-cyan-50 p-2 rounded text-sm">HubSpot</div>
                  <div className="bg-cyan-50 p-2 rounded text-sm">Stripe</div>
                  <div className="bg-cyan-50 p-2 rounded text-sm">Slack</div>
                  <div className="bg-cyan-50 p-2 rounded text-sm">Google Workspace</div>
                  <div className="bg-cyan-50 p-2 rounded text-sm">Microsoft 365</div>
                  <div className="bg-cyan-50 p-2 rounded text-sm">Zendesk</div>
                  <div className="bg-cyan-50 p-2 rounded text-sm">Airtable</div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Cloud Services</h3>
                <p className="text-gray-600 mb-4">Connect to cloud services for storage, compute, and more.</p>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-cyan-50 p-2 rounded text-sm">AWS S3</div>
                  <div className="bg-cyan-50 p-2 rounded text-sm">Google Cloud Storage</div>
                  <div className="bg-cyan-50 p-2 rounded text-sm">Azure Blob Storage</div>
                  <div className="bg-cyan-50 p-2 rounded text-sm">AWS Lambda</div>
                  <div className="bg-cyan-50 p-2 rounded text-sm">Google Cloud Functions</div>
                  <div className="bg-cyan-50 p-2 rounded text-sm">Azure Functions</div>
                  <div className="bg-cyan-50 p-2 rounded text-sm">Firebase</div>
                  <div className="bg-cyan-50 p-2 rounded text-sm">Supabase</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">How integrations work</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-cyan-100 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-cyan-600 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Choose your data source</h3>
                      <p className="text-gray-600">
                        Select from our library of pre-built connectors or create a custom connection to your data
                        source.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-cyan-100 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-cyan-600 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Configure authentication</h3>
                      <p className="text-gray-600">
                        Set up authentication with OAuth, API keys, database credentials, or other methods.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-cyan-100 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-cyan-600 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Query and transform data</h3>
                      <p className="text-gray-600">
                        Write queries, call API endpoints, or use our visual query builder to access and transform your
                        data.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-cyan-100 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-cyan-600 font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Build your UI</h3>
                      <p className="text-gray-600">
                        Use the data from your integrations to build powerful UIs with our component library.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-cyan-50 rounded-xl p-6 border border-cyan-100">
                <img
                  src="/placeholder.svg?height=400&width=500&text=Integration+Flow"
                  alt="Integration flow diagram"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Integrations Section */}
      <section className="py-20 bg-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <img
                  src="/placeholder.svg?height=400&width=500&text=Custom+Integration"
                  alt="Custom integration development"
                  className="w-full h-auto rounded-lg"
                />
              </div>

              <div className="order-1 md:order-2">
                <div className="bg-cyan-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Custom integrations</h3>
                <p className="text-gray-600 mb-6">
                  Don't see what you need? Build custom integrations for your proprietary systems or legacy
                  applications.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <div className="bg-cyan-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-cyan-600" />
                    </div>
                    <span className="text-gray-700">JavaScript/TypeScript SDK</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-cyan-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-cyan-600" />
                    </div>
                    <span className="text-gray-700">Custom connector framework</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-cyan-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-cyan-600" />
                    </div>
                    <span className="text-gray-700">Developer documentation</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-cyan-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-cyan-600" />
                    </div>
                    <span className="text-gray-700">Integration templates</span>
                  </li>
                </ul>
                <Button className="bg-cyan-600 text-white hover:bg-cyan-700">VIEW DOCUMENTATION</Button>
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
              <div className="bg-cyan-50 rounded-xl p-6 border border-cyan-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Michael Chen</h4>
                    <p className="text-gray-600 text-sm">CTO, Data Analytics Company</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "The ability to connect to all our data sources in one place has been a game-changer. We've built
                  dashboards that pull data from multiple databases and APIs, giving us a complete view of our
                  business."
                </p>
              </div>

              <div className="bg-cyan-50 rounded-xl p-6 border border-cyan-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-gray-600 text-sm">VP of Engineering, SaaS Platform</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "We needed to connect to a legacy system with a custom API. The custom connector framework made it
                  easy to build exactly what we needed, and now it's seamlessly integrated with the rest of our tools."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to connect your data?</h2>
            <p className="text-xl mb-8">Start building integrations today and unlock the power of your data.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-cyan-600 hover:bg-cyan-100">
                START FOR FREE
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-cyan-600">
                BOOK A DEMO
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

