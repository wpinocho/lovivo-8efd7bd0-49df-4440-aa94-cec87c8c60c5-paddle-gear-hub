import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check, X } from 'lucide-react'

export const PaddleComparer = () => {
  const paddles = [
    {
      name: 'Beginner',
      price: '$79.99',
      image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=400&h=400&fit=crop',
      features: [
        { name: 'Large Sweet Spot', included: true },
        { name: 'Lightweight', included: true },
        { name: 'Comfortable Grip', included: true },
        { name: 'Carbon Fiber', included: false },
        { name: 'Spin Control', included: false },
        { name: 'Tournament Grade', included: false }
      ],
      recommended: 'New Players'
    },
    {
      name: 'Intermediate',
      price: '$109.99',
      image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400&h=400&fit=crop',
      features: [
        { name: 'Large Sweet Spot', included: true },
        { name: 'Lightweight', included: true },
        { name: 'Comfortable Grip', included: true },
        { name: 'Carbon Fiber', included: true },
        { name: 'Spin Control', included: true },
        { name: 'Tournament Grade', included: false }
      ],
      recommended: 'Developing Players',
      popular: true
    },
    {
      name: 'Advanced',
      price: '$149.99',
      image: 'https://images.unsplash.com/photo-1617882044039-5e3f2e8e8f8e?w=400&h=400&fit=crop',
      features: [
        { name: 'Large Sweet Spot', included: true },
        { name: 'Lightweight', included: true },
        { name: 'Comfortable Grip', included: true },
        { name: 'Carbon Fiber', included: true },
        { name: 'Spin Control', included: true },
        { name: 'Tournament Grade', included: true }
      ],
      recommended: 'Competitive Players'
    }
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Compare Paddle Levels
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Not sure which paddle is right for you? Compare features across skill levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {paddles.map((paddle) => (
            <Card 
              key={paddle.name} 
              className={`relative ${paddle.popular ? 'border-primary border-2 shadow-lg' : ''}`}
            >
              {paddle.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="aspect-square w-32 h-32 mx-auto mb-4 rounded-lg overflow-hidden">
                    <img 
                      src={paddle.image} 
                      alt={paddle.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{paddle.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-1">{paddle.price}</div>
                  <div className="text-sm text-muted-foreground">{paddle.recommended}</div>
                </div>

                <div className="space-y-3 mb-6">
                  {paddle.features.map((feature) => (
                    <div key={feature.name} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-accent flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground/40 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-foreground' : 'text-muted-foreground/60'}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                <Button 
                  className="w-full"
                  variant={paddle.popular ? 'default' : 'outline'}
                >
                  View Paddles
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}