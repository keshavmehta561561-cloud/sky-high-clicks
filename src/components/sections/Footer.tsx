const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold font-heading mb-4">
              Divansh & Keshav
            </h3>
            <p className="font-body text-primary-foreground/80 leading-relaxed">
              Professional thumbnail designers crafting scroll-stopping visuals for creators and brands worldwide.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold font-heading mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80 font-body">
              <li>YouTube Thumbnails</li>
              <li>Social Media Graphics</li>
              <li>Brand Identity Design</li>
              <li>Custom Illustrations</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold font-heading mb-4">Contact</h4>
            <div className="space-y-2 text-primary-foreground/80 font-body">
              <p>designsbydivansh@gmail.com</p>
              <p>Response within 24 hours</p>
              <p>Available for urgent projects</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 font-body">
            © 2024 Divansh & Keshav. All rights reserved. | Crafting viral thumbnails since day one.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer