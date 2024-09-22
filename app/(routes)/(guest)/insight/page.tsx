"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { BarChartIcon, CheckIcon, LineChartIcon, PieChartIcon, XIcon } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import QuantumAnimation from "@/components/ldrs/quantum"
import { Badge } from "@/components/ui/badge"
import InsightNewsletters from "@/components/info/insight-newsletters"

export default function InsightPage() {
  const [userEmail, setUserEmail] = useState("")

  return (
    <div className="flex min-h-[100dvh] flex-col bg-white text-black">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-6xl font-bold leading-tight tracking-tight">
                Unlock Financial Insights
              </h1>
              <p className="text-xl leading-relaxed">
                Get data-driven stock picks and market analysis delivered to your inbox.
              </p>
              <Button variant="default" size="lg" className="text-lg px-8 py-6">
                <Link href="#pricing">Start Now</Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <QuantumAnimation />
            </div>
          </div>
        </section>

        {/* Newsletters Section */}
        <section id="newsletters" className="py-24 px-6 bg-gray-100">
          <div className="container mx-auto max-w-5xl space-y-16 my-4">
            <h2 className="text-4xl font-bold text-center">Our Newsletters</h2>
          </div>


          <div className="md:container md:mx-auto md:max-w-5xl md:space-y-16 md:my-4">
            <InsightNewsletters />
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 px-6">
          <div className="container mx-auto max-w-5xl space-y-16">
            <h2 className="text-4xl font-bold text-center">Choose Your Plan</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, idx) => (
                <Card key={idx} className="flex flex-col items-center justify-between bg-white p-8 rounded-none border-2 border-black">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold">{plan.title}</CardTitle>
                    <CardDescription className="text-xl mt-2">{plan.price}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center justify-center">
                          <CheckIcon className="mr-2 h-4 w-4" /> {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="mt-8">
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="default" className="bg-black text-white text-lg px-8 py-6 rounded-none">
                          {plan.cta}
                        </Button>
                      </SheetTrigger>
                      <SheetContent side="bottom" className="w-full sm:w-full h-[80dvh] overflow-y-scroll">
                        <SheetHeader>
                          <SheetTitle className="text-2xl font-bold">{plan.title} Plan</SheetTitle>
                          <SheetDescription className="text-lg">{plan.description}</SheetDescription>
                        </SheetHeader>
                        <div className="mt-8 space-y-4">
                          <Image
                            src={`/placeholder.svg?height=200&width=400`}
                            alt={`${plan.title} Newsletter Example`}
                            width={400}
                            height={200}
                            className="w-full"
                          />
                          <h3 className="text-xl font-semibold">What You Get:</h3>
                          <ul className="list-disc list-inside space-y-2">
                            {plan.detailedFeatures.map((feature, i) => (
                              <li key={i}>{feature}</li>
                            ))}
                          </ul>
                          <div className="mt-8">
                            <h3 className="text-xl font-semibold mb-2">Price:</h3>
                            <p className="text-2xl font-bold">{plan.price}</p>
                            <p className="text-sm text-gray-500 mt-1">{plan.billingCycle}</p>
                          </div>
                          <Button className="w-full mt-4 bg-black text-white text-lg py-6 rounded-none">
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

        {/* Features Section */}
        <section id="features" className="py-24 px-6 bg-gray-100">
          <div className="container mx-auto max-w-5xl space-y-16">
            <h2 className="text-4xl font-bold text-center">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-white p-8 border-2 border-black">
                  <feature.icon className="h-12 w-12 text-black mb-4" />
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-lg">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

const pricingPlans = [
  {
    title: "Basic",
    price: "$29/month",
    features: ["Weekly Stock Picks", "Market Analysis", "Personalized Insight"],
    cta: "Learn More",
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
    cta: "Learn More",
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
    cta: "Contact Us",
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

const features = [
  {
    title: "Data-Driven Insights",
    description: "Our advanced algorithms analyze vast amounts of market data to provide you with actionable insights.",
    icon: LineChartIcon,
  },
  {
    title: "Personalized Strategies",
    description: "Get investment strategies tailored to your unique financial goals and risk tolerance.",
    icon: PieChartIcon,
  },
  {
    title: "Real-Time Alerts",
    description: "Stay informed with instant notifications on market changes and investment opportunities.",
    icon: BarChartIcon,
  },
]
