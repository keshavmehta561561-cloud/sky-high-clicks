import { PortfolioButton } from "@/components/ui/portfolio-button"

const services = [
  {
    title: "YouTube Thumbnail Design",
    description: "Optimized for clicks and views. We create thumbnails that stand out in the YouTube feed and drive higher CTR.",
    features: ["High-CTR optimization", "A/B testing ready", "Platform-specific sizing", "Trend-aware designs"]
  },
  {
    title: "Social Media Graphics",
    description: "Instagram, Facebook, Twitter visuals that capture attention and drive engagement across all platforms.",
    features: ["Multi-platform sizing", "Brand consistency", "Story & post formats", "Engagement-focused"]
  }
]

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-4 bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black font-heading text-foreground-bold mb-4">
            Our Services
          </h2>
          <p className="text-lg md:text-xl font-body text-foreground-muted max-w-2xl mx-auto">
            Professional design services tailored to boost your content's performance
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gradient-card rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 p-8"
            >
              <h3 className="text-2xl md:text-3xl font-bold font-heading text-foreground-bold mb-4">
                {service.title}
              </h3>
              <p className="text-foreground font-body mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    <span className="text-foreground-muted font-body">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <PortfolioButton 
            variant="cta" 
            size="xl"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Design Your Next Viral Thumbnail
          </PortfolioButton>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection