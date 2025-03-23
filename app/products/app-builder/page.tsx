import { Button } from "@/components/ui/button"

export default function AppBuilderPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">App Builder</h1>
        <p className="text-xl text-gray-600 mb-8">
          Build powerful internal tools without writing much code. Connect to your data, drag and drop components, and
          deploy in minutes.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Visual Builder</h2>
            <p className="text-gray-600 mb-4">
              Drag and drop UI components to create custom interfaces. Choose from tables, charts, forms, and more to
              build exactly what you need.
            </p>
            <Button>Learn More</Button>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Data Connections</h2>
            <p className="text-gray-600 mb-4">
              Connect to any database, API, or service. Query your data directly and build interfaces on top of your
              existing infrastructure.
            </p>
            <Button>View Integrations</Button>
          </div>
        </div>

        <div className="bg-black text-white p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-xl mb-6">Build your first app in minutes, not months.</p>
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

