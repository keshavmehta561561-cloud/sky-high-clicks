import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const portfolioButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium font-heading transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        hero: "bg-gradient-button text-primary-foreground shadow-button hover:shadow-glow hover:scale-105 active:scale-95 font-bold tracking-wide",
        cta: "bg-primary text-primary-foreground hover:bg-primary-hover shadow-button hover:shadow-glow font-semibold",
        secondary: "bg-card text-card-foreground border-2 border-primary hover:bg-primary hover:text-primary-foreground shadow-card hover:shadow-button",
        ghost: "text-foreground-bold hover:bg-card hover:text-foreground-bold",
        accent: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-glow animate-glow-pulse font-bold"
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 rounded-md px-4",
        lg: "h-14 rounded-lg px-8 text-base",
        xl: "h-16 rounded-xl px-10 text-lg"
      },
    },
    defaultVariants: {
      variant: "hero",
      size: "default",
    },
  }
)

export interface PortfolioButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof portfolioButtonVariants> {
  asChild?: boolean
}

const PortfolioButton = React.forwardRef<HTMLButtonElement, PortfolioButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(portfolioButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
PortfolioButton.displayName = "PortfolioButton"

export { PortfolioButton, portfolioButtonVariants }