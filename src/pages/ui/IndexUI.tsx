import { ProductCard } from '@/components/ProductCard'
import { FloatingCart } from '@/components/FloatingCart'
import { NewsletterSection } from '@/components/NewsletterSection'
import { EcommerceTemplate } from '@/templates/EcommerceTemplate'
import { HeroSection } from '@/components/HeroSection'
import { PaddleComparer } from '@/components/PaddleComparer'
import { StarterKitsSection } from '@/components/StarterKitsSection'
import { LevelGuide } from '@/components/LevelGuide'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex'

interface IndexUIProps {
  logic: UseIndexLogicReturn
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    loading,
    filteredProducts,
  } = logic

  const topPaddlesCollection = collections.find(c => c.handle === 'top-paddles')

  return (
    <EcommerceTemplate showCart={true}>
      {/* Hero Section */}
      <HeroSection />

      {/* Top Paddles Section */}
      <section id="top-paddles" className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                Top Paddles
              </h2>
              <p className="text-lg text-muted-foreground">
                Our best-selling and highest-rated paddles
              </p>
            </div>
            <Button variant="outline" className="hidden md:flex items-center gap-2">
              View All
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-muted rounded-lg h-96 animate-pulse"></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No products available yet.
              </p>
            </div>
          )}

          <div className="text-center mt-8 md:hidden">
            <Button variant="outline" className="flex items-center gap-2 mx-auto">
              View All Paddles
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Paddle Comparer */}
      <PaddleComparer />

      {/* Starter Kits */}
      <StarterKitsSection />

      {/* Level Guide */}
      <LevelGuide />

      {/* CTA Section */}
      <section className="py-20 gradient-hero border-y">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Choose Your Paddle?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join hundreds of players who've found their perfect match. Free shipping on orders over $100.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="gradient-cta text-lg px-8"
              onClick={() => {
                const element = document.getElementById('top-paddles')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Choose Your Paddle
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSection />

      <FloatingCart />
    </EcommerceTemplate>
  )
}