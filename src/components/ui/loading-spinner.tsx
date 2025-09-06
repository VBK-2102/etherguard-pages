import { cn } from "@/lib/utils"

interface LoadingSpinnerProps {
  className?: string
  size?: "sm" | "md" | "lg"
  white?: boolean
}

const sizeClasses = {
  sm: "w-4 h-4",
  md: "w-8 h-8",
  lg: "w-12 h-12"
}

export function LoadingSpinner({ 
  className, 
  size = "md",
  white = false 
}: LoadingSpinnerProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <img
        src="/loading-ghost.gif"
        alt="Loading..."
        className={cn(
          sizeClasses[size],
          "object-contain"
        )}
      />
    </div>
  )
}
