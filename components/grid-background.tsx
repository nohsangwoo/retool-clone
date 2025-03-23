export default function GridBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-4 gap-px pointer-events-none">
        {Array.from({ length: 20 }).map((_, rowIndex) => (
          <div key={`row-${rowIndex}`} className="col-span-4 grid grid-cols-4 gap-px">
            {Array.from({ length: 4 }).map((_, colIndex) => (
              <div key={`cell-${rowIndex}-${colIndex}`} className="border-t border-r border-orange-900/20" />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

