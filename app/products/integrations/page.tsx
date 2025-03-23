import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function IntegrationsPage() {
  const integrationCategories = [
    {
      name: "Databases",
      items: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server", "Oracle", "Snowflake"],
    },
    {
      name: "APIs & Services",
      items: ["REST API", "GraphQL", "SOAP", "gRPC", "Webhooks"],
    },
    {
      name: "SaaS Platforms",
      items: ["Salesforce", "HubSpot", "Zendesk", "Stripe", "Twilio", "Slack"],
    },
    {
      name: "Authentication",
      items: ["OAuth 2.0", "SAML", "LDAP", "Active Directory", "Okta", "Auth0"],
    },
  ]

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Integrations</h1>
        <p className="text-xl text-gray-600 mb-8">
          Connect to any API, database, or service. ReLudgi integrates with your existing infrastructure to build
          powerful internal tools.
        </p>

        <div className="relative mb-12">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search integrations..."
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {integrationCategories.map((category) => (
            <div key={category.name} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold">{category.name}</h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-3">
                  {category.items.map((item) => (
                    <div key={item} className="bg-gray-100 rounded-md p-3 text-center">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-6">Custom Integrations</h2>
          <p className="text-gray-600 mb-6">
            Don't see what you need? ReLudgi can connect to virtually any system with our custom integration framework.
            Build connectors to proprietary systems or legacy applications with our developer tools.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button>Contact Sales</Button>
            <Button variant="outline">View Documentation</Button>
          </div>
        </div>

        <div className="bg-black text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to connect your systems?</h2>
          <p className="text-xl mb-6">Start building with ReLudgi's powerful integration capabilities.</p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200">
              START FOR FREE
            </Button>
            <Button size="lg" variant="outline" className="border-gray-700 hover:bg-gray-800">
              BOOK A DEMO
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

