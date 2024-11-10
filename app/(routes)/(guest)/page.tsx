'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import NewsletterSection from '@/components/info/newsletters'
import { newsletters } from '@/lib/data/newsletter_info'
import { ChevronRight } from 'lucide-react'

export default function ConsolidatedLandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F6F3EE] text-black font-serif">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 border-b-2 border-black">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto">
            <div className="text-center space-y-4">
              <Badge
                variant="outline"
                className="inline-block mb-4 text-lg font-bold border-2 border-black px-4 py-2 font-sans uppercase tracking-widest"
              >
                Liquid Graph
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-4">The Market Intelligence</h1>
              <div className="w-16 h-1 bg-black mx-auto mb-4" />
              <p className="text-xl text-gray-800 max-w-2xl mx-auto font-sans leading-relaxed">
                Gain the edge in stocks and commodities with our expert analysis. Join thousands of successful investors who
                rely on our market-moving insights.
              </p>
            </div>

            <div className="mt-12 bg-white border-2 border-black p-8">
              <NewsletterSection newsletters={newsletters} />
            </div>

            <div className="mt-16 text-center">
              <Link href="/subscribe" prefetch={false}>
                <Button
                  variant="default"
                  className="w-full max-w-md text-lg font-bold py-6 bg-black text-white hover:bg-gray-800 rounded-none font-sans uppercase tracking-widest transition-all duration-300 ease-in-out transform hover:translate-y-[-2px] hover:shadow-lg"
                >
                  Subscribe Now
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F6F3EE]">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto">
            <div className="text-right space-y-4 flex flex-col items-end mb-12">
              <Badge
                variant="outline"
                className="inline-block mb-4 text-lg font-bold border-2 border-black px-4 py-2 font-sans uppercase tracking-widest"
              >
                Our Approach
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Data-Driven Market Analysis</h2>
              <div className="w-16 h-1 bg-black" />
              <p className="text-xl text-gray-800 max-w-2xl flex justify-end font-sans leading-relaxed">
                We employ cutting-edge quantitative models and advanced technology to identify and capitalize on market
                opportunities in stocks and commodities.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                {
                  title: 'Systematic Strategies',
                  description:
                    'Rigorous quantitative models ensure consistent and repeatable performance across stock and commodity markets.',
                },
                {
                  title: 'Risk Management',
                  description:
                    'Sophisticated techniques integrated into our process to mitigate downside risk and protect investor capital.',
                },
                {
                  title: 'Cutting-Edge Technology',
                  description:
                    'Leveraging the latest in data science and machine learning to drive our investment decisions in stocks and commodities.',
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="text-left p-6 bg-white border-2 border-black shadow-[8px_8px_0_0_#000] hover:shadow-[12px_12px_0_0_#000] transition-all duration-300 ease-in-out"
                >
                  <CardContent className="p-0">
                    <h3 className="text-xl font-bold mb-2 font-serif">{item.title}</h3>
                    <div className="w-12 h-0.5 bg-black mb-4" />
                    <p className="text-gray-800 font-sans">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
