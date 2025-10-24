import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Target, TrendingUp, Trophy } from 'lucide-react'

export const LevelGuide = () => {
  const levels = [
    {
      icon: Target,
      level: 'Beginner',
      rating: '1.0 - 2.5',
      description: 'Just starting out? Focus on learning the basics and having fun.',
      characteristics: [
        'Learning basic rules and scoring',
        'Developing consistent serve',
        'Working on court positioning',
        'Building fundamental strokes'
      ],
      paddleRec: 'Lightweight paddle with large sweet spot',
      color: 'bg-blue-500'
    },
    {
      icon: TrendingUp,
      level: 'Intermediate',
      rating: '3.0 - 3.5',
      description: 'Developing your game with strategy and improved technique.',
      characteristics: [
        'Consistent serves and returns',
        'Understanding spin and placement',
        'Improved court awareness',
        'Developing shot variety'
      ],
      paddleRec: 'Balanced paddle with good control and power',
      color: 'bg-primary'
    },
    {
      icon: Trophy,
      level: 'Advanced',
      rating: '4.0+',
      description: 'Competitive player with refined skills and tournament experience.',
      characteristics: [
        'Advanced shot selection',
        'Consistent spin control',
        'Strategic court positioning',
        'Tournament-level play'
      ],
      paddleRec: 'High-performance paddle with precision control',
      color: 'bg-accent'
    }
  ]

  return (
    <section id="level-guide" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Find Your Skill Level
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Understanding your skill level helps you choose the right equipment and improve faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {levels.map((level) => {
            const Icon = level.icon
            return (
              <Card key={level.level} className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`${level.color} rounded-lg p-3`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{level.level}</h3>
                      <div className="text-sm text-muted-foreground">Rating: {level.rating}</div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {level.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="text-sm font-semibold text-foreground">Characteristics:</div>
                    <ul className="space-y-1">
                      {level.characteristics.map((char) => (
                        <li key={char} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{char}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-3 mb-4">
                    <div className="text-xs font-semibold text-foreground mb-1">Recommended:</div>
                    <div className="text-sm text-muted-foreground">{level.paddleRec}</div>
                  </div>

                  <Button variant="outline" className="w-full">
                    Shop {level.level} Paddles
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}