'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { ArrowRightIcon, BarChartIcon, NewspaperIcon, DollarSignIcon, GroupIcon, CheckIcon } from 'lucide-react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { newsletters } from '@/lib/data/newsletter_info'
import NewsletterSection from '@/components/info/newsletters'
import { Playfair_Display, Inter } from "next/font/google"
import QuantumAnimation from '@/components/ldrs/quantum'

const playfair = Playfair_Display({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"] })

const pricingPlans = [
  {
    title: "Basic",
    price: "$29/month",
    features: ["Weekly Stock Picks", "Market Analysis", "Personalized Insight"],
    description: "Perfect for individual investors looking to get started with data-driven insights.",
    detailedFeatures: [
      "Weekly curated stock picks based on our proprietary algorithm",
      "Monthly market analysis report",
      "Personalized investment recommendations based on your risk profile",
      "Access to our basic educational resources",
    ],
    billingCycle: "Billed monthly or $299 annually (save 14%)",
  },
  {
    title: "Premium",
    price: "$59/month",
    features: ["Daily Stock Picks", "Advanced Analytics", "Priority Support", "Exclusive Webinars"],
    description: "Ideal for serious investors who want comprehensive market insights and premium support.",
    detailedFeatures: [
      "Daily stock picks with in-depth analysis",
      "Real-time market alerts and notifications",
      "Advanced portfolio analytics and risk assessment tools",
      "Priority email and chat support",
      "Monthly exclusive webinars with our top analysts",
      "Access to all educational resources and historical data",
    ],
    billingCycle: "Billed monthly or $599 annually (save 15%)",
  },
  {
    title: "Enterprise",
    price: "Custom Pricing",
    features: ["Tailored Solutions", "API Access", "Dedicated Account Manager", "Custom Reporting"],
    description: "Customized solutions for large organizations and institutional investors.",
    detailedFeatures: [
      "Fully customized investment strategies and reporting",
      "API access for seamless integration with your existing systems",
      "Dedicated account manager and 24/7 support",
      "Custom data feeds and bespoke research",
      "On-site training and implementation support",
      "White-labeling options available",
    ],
    billingCycle: "Custom billing cycles available",
  },
]

export default function ConsolidatedInsightLanding() {
  const [selectedPlan, setSelectedPlan] = useState(null)

  return (
    <div className={`flex min-h-screen flex-col bg-[#F6F3EE] text-black ${playfair.className}`}>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 px-6 border-b-2 border-black">
          <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge variant="outline" className="text-lg font-bold border-2 border-black px-4 py-2 rounded-none">
                Liquid Graph
              </Badge>
              <h1 className="text-5xl font-bold leading-tight tracking-tight">
                Unlock Financial Insights
              </h1>
              <p className={`${inter.className} text-xl leading-relaxed`}>
                Get data-driven stock picks and market analysis delivered to your inbox. Join thousands of successful investors who rely on our expert analysis.
              </p>
              <Button variant="default" size="lg" className={`${inter.className} text-lg px-8 py-6 bg-black text-white hover:bg-gray-800 rounded-none transition-all duration-300 ease-in-out transform hover:translate-y-[-2px] hover:shadow-lg`}>
                <Link href="#pricing">Start Now</Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <QuantumAnimation />
            </div>
          </div>
        </section>

        {/* Newsletters Section */}
        <section id="newsletters" className="py-24 px-6 bg-white border-b-2 border-black">
          <NewsletterSection title="The Liquid Graph Newsletters" newsletters={newsletters} />
        </section>

        {/* Value Proposition Section */}
        <section className="py-24 px-6 border-b-2 border-black">
          <div className="container mx-auto max-w-5xl space-y-16">
            <h2 className="text-4xl font-bold text-left">
              Why Choose Liquid Graph?
            </h2>
            <p className={`${inter.className} text-xl text-left max-w-3xl`}>
              Liquid Graph empowers subscribers with deep, algorithm-driven insights in a clear, actionable format.
              Our tailored analyses and market predictions enable informed decision-making to enhance investment strategies and returns.
            </p>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 px-6 bg-white">
          <div className="container mx-auto max-w-5xl space-y-16">
            <h2 className="text-4xl font-bold text-center">Choose Your Plan</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, idx) => (
                <Card key={idx} className="flex flex-col items-center justify-between bg-[#F6F3EE] p-8 rounded-none border-2 border-black shadow-[8px_8px_0_0_#000] hover:shadow-[12px_12px_0_0_#000] transition-all duration-300 ease-in-out">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold">{plan.title}</CardTitle>
                    <CardDescription className={`${inter.className} text-xl mt-2 font-bold`}>{plan.price}</CardDescription>
                  </CardHeader>
                  <CardContent className={`${inter.className} text-left`}>
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start justify-start">
                          <CheckIcon className="mr-2 h-4 w-4" /> {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="mt-8">
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="default" className={`${inter.className} bg-black text-white text-lg px-8 py-6 rounded-none hover:bg-gray-800 transition-all duration-300 ease-in-out`}>
                          Learn More
                        </Button>
                      </SheetTrigger>
                      <SheetContent side="bottom" className="w-full sm:w-full h-[80vh] overflow-y-scroll bg-[#F6F3EE] border-t-2 border-black rounded-none">
                        <SheetHeader>
                          <SheetTitle className="text-3xl font-bold">{plan.title} Plan</SheetTitle>
                          <SheetDescription className={`${inter.className} text-lg`}>{plan.description}</SheetDescription>
                        </SheetHeader>
                        <div className="mt-8 space-y-4">
                          <Image
                            src={`/placeholder.svg?height=200&width=400`}
                            alt={`${plan.title} Newsletter Example`}
                            width={400}
                            height={200}
                            className="w-full border-2 border-black"
                          />
                          <h3 className="text-xl font-semibold">What You Get:</h3>
                          <ul className={`${inter.className} list-disc list-inside space-y-2`}>
                            {plan.detailedFeatures.map((feature, i) => (
                              <li key={i}>{feature}</li>
                            ))}
                          </ul>
                          <div className="mt-8">
                            <h3 className="text-xl font-semibold mb-2">Price:</h3>
                            <p className="text-2xl font-bold">{plan.price}</p>
                            <p className={`${inter.className} text-sm text-gray-500 mt-1`}>{plan.billingCycle}</p>
                          </div>
                          <Button className={`${inter.className} w-full mt-4 bg-black text-white text-lg py-6 rounded-none hover:bg-gray-800 transition-all duration-300 ease-in-out`}>
                            Subscribe Now
                          </Button>
                        </div>
                      </SheetContent>
                    </Sheet>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
