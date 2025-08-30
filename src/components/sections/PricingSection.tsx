import { PortfolioButton } from "@/components/ui/portfolio-button"

const pricingPlans = [
  {
    title: "Single Thumbnail",
    price: "$15",
    description: "Perfect for testing our quality",
    features: [
      "1 Custom Thumbnail",
      "High-resolution delivery",
      "24-48 hour turnaround",
      "1 revision included"
    ],
    popular: false
  },
  {
    title: "Thumbnail Pack",
    price: "$120",
    originalPrice: "$150",
    description: "Best value for content creators",
    features: [
      "10 Custom Thumbnails",
      "High-resolution delivery",
      "Priority support",
      "3 revisions per thumbnail",
      "Batch consistency"
    ],
    popular: true
  },
  {
    title: "Social Media Graphic",
    price: "$10",
    description: "Instagram, Facebook, Twitter ready",
    features: [
      "1 Social Media Graphic",
      "Multi-platform sizing",
      "24-hour turnaround",
      "1 revision included"
    ],
    popular: false
  }
]

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black font-heading text-foreground-bold mb-4">
            Simple Pricing
          </h2>
          <p className="text-lg md:text-xl font-body text-foreground-muted max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Quality designs at affordable rates.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-gradient-card rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 p-8 ${
                plan.popular ? 'ring-4 ring-accent scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold font-heading">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-xl md:text-2xl font-bold font-heading text-foreground-bold mb-2">
                  {plan.title}
                </h3>
                <div className="mb-2">
                  {plan.originalPrice && (
                    <span className="text-lg text-foreground-muted line-through mr-2">
                      {plan.originalPrice}
                    </span>
                  )}
                  <span className="text-4xl font-black font-heading text-primary">
                    {plan.price}
                  </span>
                </div>
                <p className="text-foreground-muted font-body text-sm">
                  {plan.description}
                </p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    <span className="text-foreground font-body text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <PortfolioButton 
                variant={plan.popular ? "accent" : "cta"}
                size="lg"
                className="w-full"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Order Now
              </PortfolioButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingSection