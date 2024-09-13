import React from 'react'
import { ArrowRightIcon, BarChartIcon, NewspaperIcon, DollarSignIcon, GroupIcon } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const newsletters = [
  {
    title: 'Weekly Insight',
    icon: <BarChartIcon className="w-8 h-8" />,
    description: 'Comprehensive market predictions and macroeconomic analysis for the upcoming week.',
    audience: 'Investors and traders seeking a broad market outlook.',
    issuance: 'Every Sunday night',
    purchaseLink: '/insight#pricing'
  },
  {
    title: 'Weekly Picks',
    icon: <DollarSignIcon className="w-8 h-8" />,
    description: 'Curated list of high-potential stocks and ETFs based on quantitative analysis.',
    audience: 'Active traders looking for specific investment opportunities.',
    issuance: 'Every Sunday night',
    purchaseLink: '/insight#pricing'
  },
  {
    title: 'Fund Analysis',
    icon: <NewspaperIcon className="w-8 h-8" />,
    description: 'Transparent trade plans and in-depth analysis of the Liquid Graph Fund.',
    audience: 'Investors interested in professional fund management strategies.',
    issuance: 'Monday mornings',
    purchaseLink: '/insight#pricing'
  },
  {
    title: 'Custom Analysis',
    icon: <GroupIcon className="w-8 h-8" />,
    description: 'Tailored analysis based on subscriber-specific portfolios and requests.',
    audience: 'High-net-worth individuals, financial advisors, and institutions.',
    issuance: 'Weekly and on-demand',
    purchaseLink: '/insight#pricing'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <header className="py-12 md:pt-32 px-6 md:px-12 lg:px-24">
        <h1 className="text-5xl font-bold mb-4">Liquid Insight</h1>
        <p className="text-xl max-w-3xl">
          Delivering actionable financial insights through algorithm-driven newsletters.
        </p>
      </header>

      <main className="px-6 md:px-12 lg:px-24 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Newsletters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {newsletters.map((newsletter, index) => (
              <div key={index} className="border-t-4 border-black pt-6">
                <div className="flex items-center mb-4">
                  {newsletter.icon}
                  <h3 className="text-2xl font-bold ml-4">{newsletter.title}</h3>
                </div>
                <div className="flex flex-col items-start">
                  <p className="mb-4">{newsletter.description}</p>
                  <p className="mb-2"><strong>Audience:</strong> {newsletter.audience}</p>
                  <p><strong>Issuance:</strong> {newsletter.issuance}</p>
                </div>

                <div className="flex flex-col items-start justify-end pt-6">
                  <Badge variant={"outline"} className="hover:bg-black hover:text-white rounded-sm">
                    <Link href={newsletter.purchaseLink}>
                      Subscribe
                    </Link>
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20 mt-36">
          <h2 className="text-3xl font-bold mb-8">Our Value Proposition</h2>
          <p className="text-xl max-w-3xl">
            Liquid Insight empowers subscribers with deep, algorithm-driven insights in a clear, actionable format.
            Our tailored analyses and market predictions enable informed decision-making to enhance investment strategies and returns.
          </p>
        </section>
      </main>

      <footer className="py-12 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-green-950 to-emerald-800 via-emerald-900">
        <div className="flex justify-end items-end">
          <Link href="/insight#pricing" className="flex items-center group">
            <Badge className="px-6 py-1 text-2xl rounded-md font-light tracking-wide" variant={"default"}>
              Subscribe Now
              <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Badge>
          </Link>
        </div>
      </footer>
    </div>
  )
}
