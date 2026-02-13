import * as React from "react"
import { cn } from "@/lib/utils"

const Heading = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & { level?: 1 | 2 | 3 | 4 }
>(({ className, level = 2, ...props }, ref) => {
  const Component = `h${level}` as React.ElementType

  return (
    <Component
      ref={ref}
      className={cn(
        "scroll-m-20 tracking-tight",
        {
          "text-4xl font-extrabold lg:text-5xl": level === 1,
          "text-3xl font-semibold first:mt-0": level === 2,
          "text-2xl font-semibold": level === 3,
          "text-xl font-semibold": level === 4,
        },
        className
      )}
      {...props}
    />
  )
})
Heading.displayName = "Heading"

export { Heading }
