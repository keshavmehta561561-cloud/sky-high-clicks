import { useState } from "react"
import { PortfolioButton } from "@/components/ui/portfolio-button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import emailjs from '@emailjs/browser'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = 'service_5o0gsnn'
  const EMAILJS_TEMPLATE_ID = 'template_vnrmjpm'
  const EMAILJS_PUBLIC_KEY = 'JrC5yNxG9l7KP8s_W'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.project,
        to_email: 'designsbydivansh@gmail.com'
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      })

      // Reset form
      setFormData({ name: '', email: '', project: '' })
    } catch (error) {
      console.error('EmailJS error:', error)
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly at designsbydivansh@gmail.com",
        variant: "destructive"
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black font-heading text-foreground-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg md:text-xl font-body text-foreground-muted max-w-2xl mx-auto">
            Ready to create scroll-stopping thumbnails? Get in touch and let's discuss your project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold font-heading text-foreground-bold mb-4">
                Get in Touch
              </h3>
              <p className="text-foreground font-body leading-relaxed mb-6">
                Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold font-heading text-foreground-bold">Email</div>
                  <div className="text-foreground-muted font-body">designsbydivansh@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold font-heading text-foreground-bold">Response Time</div>
                  <div className="text-foreground-muted font-body">Within 24 hours</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold font-heading text-foreground-bold">Delivery</div>
                  <div className="text-foreground-muted font-body">24-48 hours average</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-card rounded-2xl shadow-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold font-heading text-foreground-bold mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold font-heading text-foreground-bold mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="project" className="block text-sm font-semibold font-heading text-foreground-bold mb-2">
                  Project Details
                </label>
                <Textarea
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full resize-none"
                  placeholder="Tell us about your project, including number of thumbnails needed, content type, style preferences, and timeline..."
                />
              </div>
              
              <PortfolioButton 
                type="submit"
                variant="cta" 
                size="lg"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </PortfolioButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection