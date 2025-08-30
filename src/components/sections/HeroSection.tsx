import { PortfolioButton } from "@/components/ui/portfolio-button"
import divanshProfile from "@/assets/divansh-profile.jpg"
import keshavProfile from "@/assets/keshav-profile.jpg"

const HeroSection = () => {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio')
    portfolioSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-sky py-20 px-4">
      <div className="max-w-6xl mx-auto text-center animate-slide-up">
        <div className="flex justify-center mb-8 space-x-8">
          <div className="relative">
            <img
              src={divanshProfile}
              alt="Divansh - Creative Thumbnail Designer"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105"
            />
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold font-heading">
              Divansh
            </div>
          </div>
          <div className="relative">
            <img
              src={keshavProfile}
              alt="Keshav - Creative Thumbnail Designer"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105"
            />
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold font-heading">
              Keshav
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-heading text-foreground-bold mb-6 leading-tight">
          Creative Thumbnail
          <span className="block text-primary">Designers</span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl font-body text-foreground-muted max-w-3xl mx-auto mb-8 leading-relaxed">
          Crafting scroll-stopping, high-CTR thumbnails for creators & brands.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <PortfolioButton 
            variant="hero" 
            size="xl"
            onClick={scrollToPortfolio}
            className="min-w-48"
          >
            View Our Work
          </PortfolioButton>
          <PortfolioButton 
            variant="secondary" 
            size="xl"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="min-w-48"
          >
            Get Started
          </PortfolioButton>
        </div>
      </div>
    </section>
  )
}

export default HeroSection