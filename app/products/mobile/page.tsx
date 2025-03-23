import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function MobilePage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Mobile</h1>
        <p className="text-xl text-gray-600 mb-8">
          Build native mobile apps for iOS and Android without the complexity. Create powerful mobile experiences for
          your internal teams.
        </p>

        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold mb-6">Native Mobile Experience</h2>
          <p className="text-lg mb-8">
            Deliver the same powerful functionality of your web apps in a native mobile experience. Your team can access
            critical tools anywhere, anytime.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/30 p-5 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Offline Support</h3>
              <p className="text-gray-300">
                Work with or without an internet connection. Data syncs automatically when connectivity is restored.
              </p>
            </div>
            <div className="bg-black/30 p-5 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Device Features</h3>
              <p className="text-gray-300">
                Access camera, GPS, push notifications, and other native device capabilities in your apps.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Key Features</h2>
          <div className="grid gap-4">
            {[
              "Build once, deploy to iOS and Android",
              "Seamless integration with your existing ReLudgi apps",
              "Secure authentication and data access",
              "Push notifications for real-time updates",
              "Offline data synchronization",
              "Custom branding and white-labeling options",
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg">
                <Check className="text-green-500 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-6">Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4">
              <h3 className="text-xl font-medium mb-2">Field Service</h3>
              <p className="text-gray-600">
                Equip field technicians with mobile tools to access customer data, complete work orders, and capture
                signatures.
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-medium mb-2">Sales Teams</h3>
              <p className="text-gray-600">
                Give sales reps mobile access to customer information, inventory, and order processing while on the go.
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-medium mb-2">Warehouse Management</h3>
              <p className="text-gray-600">
                Enable warehouse staff to scan inventory, update stock levels, and process shipments from mobile
                devices.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-black text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to go mobile?</h2>
          <p className="text-xl mb-6">Extend your internal tools to iOS and Android devices.</p>
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

