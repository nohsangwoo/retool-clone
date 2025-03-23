import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Bot, Database } from "lucide-react"

export default function AIAppsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-amber-600 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Build powerful AI applications</h1>
            <p className="text-xl mb-8">
              Connect AI apps to your internal data, workflows, and LLMs. Use pre-built actions to ship and iterate
              quickly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-100">
                GET STARTED
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-orange-600">
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
            <h2 className="text-3xl font-bold text-center mb-16">Build AI-powered applications in minutes</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">LLM Integration</h3>
                <p className="text-gray-600 mb-4">
                  Connect to OpenAI, Anthropic, or your own models. Use streaming responses for real-time interactions.
                </p>
                <a href="#" className="text-orange-600 font-medium flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Vector Databases</h3>
                <p className="text-gray-600 mb-4">
                  Build RAG applications with vector search. Connect to Pinecone, Weaviate, or use our built-in vector
                  store.
                </p>
                <a href="#" className="text-orange-600 font-medium flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Bot className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI Assistants</h3>
                <p className="text-gray-600 mb-4">
                  Create AI assistants that can access your data and perform actions. Build chatbots with memory and
                  context.
                </p>
                <a href="#" className="text-orange-600 font-medium flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">Popular AI use cases</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Document Processing</h3>
                <p className="text-gray-600 mb-4">
                  Extract information from documents, summarize content, and answer questions based on document context.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center">
                    <div className="bg-orange-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-orange-600" />
                    </div>
                    <span className="text-gray-700">Contract analysis</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-orange-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-orange-600" />
                    </div>
                    <span className="text-gray-700">Resume parsing</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-orange-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-orange-600" />
                    </div>
                    <span className="text-gray-700">Knowledge base search</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Customer Support</h3>
                <p className="text-gray-600 mb-4">
                  Build AI-powered support agents that can answer questions, troubleshoot issues, and escalate when
                  needed.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center">
                    <div className="bg-orange-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-orange-600" />
                    </div>
                    <span className="text-gray-700">Ticket classification</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-orange-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-orange-600" />
                    </div>
                    <span className="text-gray-700">Response generation</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-orange-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-orange-600" />
                    </div>
                    <span className="text-gray-700">Sentiment analysis</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Content Generation</h3>
                <p className="text-gray-600 mb-4">
                  Create marketing copy, product descriptions, and other content with AI assistance and human review.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center">
                    <div className="bg-orange-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-orange-600" />
                    </div>
                    <span className="text-gray-700">Email campaigns</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-orange-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-orange-600" />
                    </div>
                    <span className="text-gray-700">Social media posts</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-orange-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-orange-600" />
                    </div>
                    <span className="text-gray-700">Blog articles</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Data Analysis</h3>
                <p className="text-gray-600 mb-4">
                  Use AI to analyze data, generate insights, and create visualizations from natural language queries.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center">
                    <div className="bg-orange-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-orange-600" />
                    </div>
                    <span className="text-gray-700">Sales forecasting</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-orange-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-orange-600" />
                    </div>
                    <span className="text-gray-700">Anomaly detection</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-orange-100 rounded-full p-1 mr-2">
                      <ArrowRight className="h-3 w-3 text-orange-600" />
                    </div>
                    <span className="text-gray-700">Natural language BI</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-amber-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to build AI-powered applications?</h2>
            <p className="text-xl mb-8">Get started today and deploy your first AI app in minutes.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-100">
                START FOR FREE
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-orange-600">
                CONTACT SALES
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

