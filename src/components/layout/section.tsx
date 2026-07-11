import { cn } from "@/lib/utils"

export function Section({ 
  className, 
  children, 
  id,
  background = "cream"
}: { 
  className?: string
  children: React.ReactNode
  id?: string
  background?: "cream" | "maroon" | "offwhite"
}) {
  return (
    <section 
      id={id} 
      className={cn(
        "py-16 md:py-24", 
        {
          "bg-brand-cream text-brand-umber": background === "cream",
          "bg-brand-maroon text-brand-cream": background === "maroon",
          "bg-brand-offwhite text-brand-umber": background === "offwhite",
        },
        className
      )}
    >
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  )
}
