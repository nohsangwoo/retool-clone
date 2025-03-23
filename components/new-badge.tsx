import { ArrowRight } from "lucide-react"

export default function NewBadge() {
  return (
    <div className="bg-black text-white rounded-full px-4 py-2 flex items-center gap-2 shadow-lg max-w-md">
      <span className="bg-green-500 text-xs font-bold px-2 py-0.5 rounded">NEW</span>
      <span className="text-sm">What's new in ReLudgi: Our latest release includes over 100 improvements</span>
      <ArrowRight size={16} />
    </div>
  )
}

