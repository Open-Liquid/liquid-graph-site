"use client";

import { useState } from "react";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { CartesianGrid, XAxis, Line, LineChart, Pie, PieChart, Bar, BarChart, ResponsiveContainer } from "recharts"
import { ChartTooltipContent, ChartTooltip, ChartContainer } from "@/components/ui/chart"
import { BarChartIcon, CheckIcon, LineChartIcon, PieChartIcon, XIcon } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogOverlay,
  DialogHeader,
  DialogContent,
  DialogFooter,
} from "@/components/ui/dialog"
import QuantumAnimation from "@/components/ldrs/quantum";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import InsightNewsletters from "@/components/info/insight-newsletters";

// Swiss Style: Grid Layout, Generous White Space, Minimalist Colors

export default function InsightPage() {
  const [userEmail, setUserEmail] = useState("")

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <main className="flex-1">
        {/* Section with a clean Swiss grid and minimal colors */}
        <section className="bg-muted py-12 md:py-24 px-6">
          <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Unlock the Power of Liquid&apos;s Quant Algorithms
              </h1>
              <p className="text-lg md:text-xl leading-relaxed">
                Get actionable stock picks, market insights, and personalized investment strategies delivered to your inbox.
              </p>

              {/* Dialog for subscription options with flat color and simple UI */}
              <Button variant="default">
                <Link href="#pricing">
                  Get Started
                </Link>
              </Button>
            </div>

            <div className="flex justify-center">
              <QuantumAnimation />
            </div>
          </div>
        </section>

        <section id="newsletters" className="py-12 md:py-24 px-6">
          <div className="container mx-auto max-w-5xl space-y-12">
            <InsightNewsletters />
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="bg-muted py-12 md:py-24 px-6">
          <div className="container mx-auto max-w-5xl space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Pricing</h2>
              <p className="text-lg md:text-xl">
                Choose the plan that best fits your investment needs.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Pricing Cards with flat, minimalist design */}
              {pricingPlans.map((plan, idx) => (
                <Card key={idx} className="flex flex-col items-center justify-between bg-white p-6 rounded-lg shadow-sm">
                  <CardHeader>
                    <CardTitle>{plan.title}</CardTitle>
                    <CardDescription className="text-neutral-600">{plan.price}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="flex items-end justify-end mt-6 w-full">
                    <Button variant="default" className="bg-neutral-800 text-white w-full">
                      {plan.cta}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-12 md:py-24 px-6">
          <div className="container mx-auto max-w-5xl space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Features</h2>
              <p className="text-lg md:text-xl leading-relaxed">
                Discover the key features that set Liquid Insight apart.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
                <LineChartIcon className="h-10 w-10 text-neutral-800" />
                <h3 className="text-xl font-bold">Stock Picks</h3>
                <p className="leading-relaxed">
                  Receive weekly stock picks curated by our team of quant analysts.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
                <BarChartIcon className="h-10 w-10 text-neutral-800" />
                <h3 className="text-xl font-bold">Market Analysis</h3>
                <p className="leading-relaxed">
                  Get in-depth market analysis and insights to stay ahead of the curve.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
                <PieChartIcon className="h-10 w-10 text-neutral-800" />
                <h3 className="text-xl font-bold">Personalized Insight</h3>
                <p className="leading-relaxed">
                  Tailored investment strategies based on your risk profile and goals.
                </p>
              </div>
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
    price: "$29/month | $299/year",
    features: ["Weekly Stock Picks", "Market Analysis", "Personalized Insight"],
    cta: "Subscribe"
  },
  {
    title: "Premium",
    price: "$59/month | $499/year",
    features: ["Weekly Stock Picks", "Market Analysis", "Personalized Insight", "Advanced Analytics"],
    cta: "Subscribe"
  },
  {
    title: "Enterprise",
    price: "Contact for Pricing",
    features: ["Customized Solutions", "Priority Support", "White-Labeling"],
    cta: "Contact Us"
  },
];
