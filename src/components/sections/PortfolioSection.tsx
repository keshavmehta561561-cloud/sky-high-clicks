import growthThumbnails from "@/assets/growth-thumbnails.jpg"
import tradingThumbnails from "@/assets/trading-thumbnails.jpg"
import vlogThumbnails from "@/assets/vlog-thumbnails.jpg"
import techThumbnails from "@/assets/tech-thumbnails.jpg"
import podcastThumbnails from "@/assets/podcast-thumbnails.jpg"
import educationalThumbnails from "@/assets/educational-thumbnails.jpg"
import otherThumbnails from "@/assets/other-thumbnails.jpg"

const portfolioItems = [
  {
    title: "Growth",
    image: growthThumbnails,
    description: "High-converting thumbnails for business growth and success content"
  },
  {
    title: "Trading",
    image: tradingThumbnails,
    description: "Eye-catching designs for financial and trading content"
  },
  {
    title: "Vlog",
    image: vlogThumbnails,
    description: "Personal and lifestyle thumbnails that drive engagement"
  },
  {
    title: "Tech",
    image: techThumbnails,
    description: "Modern, sleek designs for technology and gadget reviews"
  },
  {
    title: "Podcast",
    image: podcastThumbnails,
    description: "Professional audio content thumbnails and social graphics"
  },
  {
    title: "Educational",
    image: educationalThumbnails,
    description: "Clear, informative designs for educational content"
  },
  {
    title: "Other Work",
    image: otherThumbnails,
    description: "Diverse portfolio showcasing our creative range"
  }
]

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black font-heading text-foreground-bold mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg md:text-xl font-body text-foreground-muted max-w-2xl mx-auto">
            Explore our diverse collection of high-converting thumbnails across multiple niches
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div 
              key={index}
              className="group bg-gradient-card rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={`${item.title} thumbnails by Divansh & Keshav`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-heading text-foreground-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-foreground-muted font-body text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection