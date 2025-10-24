import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Package, Users, Star } from 'lucide-react'

export const StarterKitsSection = () => {
  const kits = [
    {
      icon: Package,
      name: 'Complete Starter Kit',
      price: 119.99,
      originalPrice: 149.99,
      image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=500&h=400&fit=crop',
      includes: ['Beginner Paddle', '4 Balls', 'Carrying Bag', 'Grip Tape'],
      badge: 'Best Value'
    },
    {
      icon: Users,
      name: 'Duo Player Pack',
      price: 199.99,
      originalPrice: 239.99,
      image: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=500&h=400&fit=crop',
      includes: ['2 Paddles', '6 Balls', 'Premium Case', 'Extra Grips'],
      badge: 'For Couples'
    },
    {
      icon: Star,
      name: 'Premium Bundle',
      price: 159.99,
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1617882044039-5e3f2e8e8f8e?w=500&h=400&fit=crop',
      includes: ['Intermediate Paddle', '6 Tournament Balls', 'Premium Bag', 'Accessories'],
      badge: 'Upgrade'
    }
  ]

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ready-to-Play Starter Kits
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to start playing in one convenient package. Save money and get on the court faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {kits.map((kit) => {
            const Icon = kit.icon
            return (
              <Card key={kit.name} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={kit.image} 
                    alt={kit.name}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
                    {kit.badge}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 rounded-lg p-2">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{kit.name}</h3>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-foreground">
                        ${kit.price}
                      </span>
                      {kit.originalPrice && (
                        <span className="text-lg text-muted-foreground line-through">
                          ${kit.originalPrice}
                        </span>
                      )}
                    </div>
                    {kit.originalPrice && (
                      <div className="text-sm text-accent font-semibold">
                        Save ${(kit.originalPrice - kit.price).toFixed(2)}
                      </div>
                    )}
                  </div>

                  <div className="space-y-2 mb-6">
                    <div className="text-sm font-semibold text-foreground">Includes:</div>
                    <ul className="space-y-1">
                      {kit.includes.map((item) => (
                        <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full gradient-cta">
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Starter Kits
          </Button>
        </div>
      </div>
    </section>
  )
}