const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-black font-heading text-foreground-bold mb-8">
          About Us
        </h2>
        
        <div className="bg-gradient-card rounded-2xl shadow-card p-8 md:p-12 text-left">
          <p className="text-lg md:text-xl font-body text-foreground leading-relaxed mb-6">
            We are <span className="font-bold text-foreground-bold">Divansh and Keshav</span>, professional thumbnail designers specializing in YouTube and social media graphics. With years of experience and 100+ projects, our work blends creativity with strategy to boost engagement.
          </p>
          
          <p className="text-lg md:text-xl font-body text-foreground leading-relaxed">
            For us, thumbnails are not just design—they're <span className="font-bold text-accent">the science of clicks</span>. We understand what makes viewers stop scrolling and start watching.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-black font-heading text-primary mb-2">100+</div>
              <div className="text-foreground-muted font-body">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black font-heading text-primary mb-2">7+</div>
              <div className="text-foreground-muted font-body">Categories Mastered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black font-heading text-primary mb-2">24h</div>
              <div className="text-foreground-muted font-body">Average Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection