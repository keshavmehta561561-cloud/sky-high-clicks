const testimonials = [
  {
    text: "Incredible at their job, always delivers on time.",
    author: "Sarah Chen",
    role: "YouTube Creator"
  },
  {
    text: "Fresh concepts, very professional and easy to work with.",
    author: "Marcus Johnson",
    role: "Business Coach"
  },
  {
    text: "Unique designs, smooth experience, highly recommend!",
    author: "Priya Sharma",
    role: "Tech Reviewer"
  },
  {
    text: "My click-through rates increased by 40% after working with them.",
    author: "David Rodriguez",
    role: "Finance YouTuber"
  },
  {
    text: "Outstanding creativity and attention to detail. Worth every penny!",
    author: "Emma Wilson",
    role: "Lifestyle Blogger"
  },
  {
    text: "They understand what works on social media. Exceptional results!",
    author: "Alex Kumar",
    role: "Digital Marketer"
  }
]

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 px-4 bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black font-heading text-foreground-bold mb-4">
            What Clients Say
          </h2>
          <p className="text-lg md:text-xl font-body text-foreground-muted max-w-2xl mx-auto">
            Don't just take our word for it - hear from creators who've seen real results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-card rounded-2xl shadow-card hover:shadow-glow transition-all duration-300 p-6"
            >
              <div className="mb-4">
                <div className="flex text-accent mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-foreground font-body leading-relaxed mb-4">"{testimonial.text}"</p>
              </div>
              
              <div className="border-t border-border pt-4">
                <div className="font-semibold font-heading text-foreground-bold">
                  {testimonial.author}
                </div>
                <div className="text-sm text-foreground-muted font-body">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection