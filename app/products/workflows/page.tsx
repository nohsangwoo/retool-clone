import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function WorkflowsPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Workflows</h1>
        <p className="text-xl text-gray-600 mb-8">
          Automate business processes and connect your tools. Build workflows that run on schedules or triggers without
          writing complex code.
        </p>

        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-6">How It Works</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Define Triggers</h3>
                <p className="text-gray-600">
                  Start workflows based on events, schedules, or manual triggers. Connect to webhooks, database changes,
                  or time-based events.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Add Actions</h3>
                <p className="text-gray-600">
                  Define what happens when a workflow runs. Send emails, update databases, call APIs, or perform custom
                  logic.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Monitor & Iterate</h3>
                <p className="text-gray-600">
                  Track workflow runs, debug issues, and improve your automations over time with detailed logs and
                  analytics.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="border border-gray-200 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Common Use Cases</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <ArrowRight size={16} className="text-black" />
                <span>Customer onboarding automation</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight size={16} className="text-black" />
                <span>Approval workflows</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight size={16} className="text-black" />
                <span>Data synchronization between systems</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight size={16} className="text-black" />
                <span>Scheduled reports and notifications</span>
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Integrations</h2>
            <p className="text-gray-600 mb-4">Connect with popular tools and services:</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 p-3 rounded text-center">Slack</div>
              <div className="bg-gray-100 p-3 rounded text-center">Google Sheets</div>
              <div className="bg-gray-100 p-3 rounded text-center">Salesforce</div>
              <div className="bg-gray-100 p-3 rounded text-center">Stripe</div>
              <div className="bg-gray-100 p-3 rounded text-center">Airtable</div>
              <div className="bg-gray-100 p-3 rounded text-center">+ Many more</div>
            </div>
          </div>
        </div>

        <div className="bg-black text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to automate your workflows?</h2>
          <p className="text-xl mb-6">Start building powerful automations today.</p>
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

