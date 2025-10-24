import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export const HeroSection = () => {
  const scrollToPaddles = () => {
    const element = document.getElementById('top-paddles')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="gradient-hero py-20 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                Premium Pickleball & Padel Gear
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Find Your Perfect Paddle
            </h1>
            
            <p className="text-xl text-muted-foreground">
              Professional-grade equipment for players of all levels. From beginners to tournament champions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="gradient-cta text-lg px-8 hover:opacity-90"
                onClick={scrollToPaddles}
              >
                Choose Your Paddle
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8"
                onClick={() => {
                  const element = document.getElementById('level-guide')
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Find Your Level
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Happy Players</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">4.9★</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Paddle Models</div>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&h=800&fit=crop"
                alt="Premium pickleball paddle"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border">
              <div className="flex items-center gap-4">
                <div className="bg-accent/10 rounded-full p-3">
                  <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Free Shipping</div>
                  <div className="text-sm text-muted-foreground">On orders over $100</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}