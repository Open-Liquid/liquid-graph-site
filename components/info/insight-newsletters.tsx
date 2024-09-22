'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CalendarDaysIcon, SearchCodeIcon, XIcon } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface NewsletterCardProps {
  title: string
  badge: string
  icon: React.ElementType
  description: string
  dialogContent: string
}

const NewsletterCard = ({ title, badge, icon: Icon, description, dialogContent }: NewsletterCardProps) => (
  <Card className="bg-white border-2 border-black hover:shadow-lg transition-shadow rounded-none">
    <CardHeader className="flex flex-row items-center justify-between p-4">
      <div className="flex flex-col items-start gap-y-2">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <Badge variant="secondary" className="bg-yellow-300 text-black">{badge}</Badge>
      </div>
      <Icon size={24} className="text-black" />
    </CardHeader>
    <CardContent className="p-4">
      <CardDescription className="text-black text-sm">{description}</CardDescription>
    </CardContent>
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full mt-2 border-t-2 border-black rounded-none hover:bg-yellow-300">Learn More</Button>
      </DialogTrigger>

      <DialogContent className="bg-white border-none">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
          <Badge variant="secondary" className="bg-yellow-300 text-black w-auto">{badge}</Badge>
        </DialogHeader>

        <DialogDescription className="text-black text-left">{dialogContent}</DialogDescription>
      </DialogContent>
    </Dialog>
  </Card>
)

const InsightNewsletters = () => {
  const [showCTA, setShowCTA] = useState(false)

  // React.useEffect(() => {
  //   const timer = setTimeout(() => setShowCTA(true), 10000) // Show CTA after 10 seconds
  //   return () => clearTimeout(timer)
  // }, [])

  return (
    <div className="w-full max-w-5xl space-y-10 p-4 md:p-8 bg-white rounded-sm">
      <div className="space-y-4 w-full">
        <Badge variant="outline" className="mb-4 text-lg font-bold border-2 border-black px-4 py-2">Liquid Insight</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Gain the Edge with Our Newsletters</h1>
        <p className="text-xl text-black max-w-2xl">
          Join thousands of successful investors who rely on our expert analysis. Don't miss out on market-moving insights.
        </p>
      </div>

      <div className="flex flex-col w-full gap-6 md:grid md:grid-cols-2">
        <NewsletterCard
          title="Weekly Insight"
          badge="Sunday Nights"
          icon={CalendarDaysIcon}
          description="Stay ahead of the market with our expert predictions."
          dialogContent="Our Weekly Insight newsletter provides a comprehensive overview of market predictions for the upcoming week. Stay informed and make data-driven decisions with our expert analysis."
        />
        <NewsletterCard
          title="Weekly Picks"
          badge="Sunday Nights"
          icon={CalendarDaysIcon}
          description="Discover top-performing stocks before they soar."
          dialogContent="Get exclusive access to our curated list of market-making picks for the upcoming week. Our Weekly Picks newsletter has a track record of identifying high-potential stocks before they make significant moves."
        />
        <NewsletterCard
          title="Fund Analysis"
          badge="Monday Mornings"
          icon={SearchCodeIcon}
          description="Learn from our transparent Liquid Graph Fund strategy."
          dialogContent="Gain insights into professional fund management with our Fund Analysis newsletter. We provide transparent trade plans for the Liquid Graph Fund, allowing you to understand and learn from our weekly strategies."
        />
        <NewsletterCard
          title="Custom Analysis"
          badge="Weekly and on-demand"
          icon={SearchCodeIcon}
          description="Receive personalized insights for your portfolio."
          dialogContent="Our Custom Analysis newsletter offers tailored insights based on your specific stock list or portfolio. Get personalized recommendations and analysis to optimize your investment strategy."
        />
      </div>

      {showCTA && (
        <Dialog>
          <DialogTrigger asChild>
            <Button className="fixed bottom-4 right-4 bg-yellow-300 text-black font-bold text-lg p-6 shadow-lg hover:bg-yellow-400 transition-colors">
              Subscribe Now!
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-white border-2 border-black">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">Limited Time Offer!</DialogTitle>
              <DialogDescription className="text-black text-lg">
                Subscribe now and get 20% off your first month. Don't miss this opportunity to gain a competitive edge in the market!
              </DialogDescription>
            </DialogHeader>
            <Button className="w-full bg-black text-white hover:bg-gray-800">Claim Your Discount</Button>
          </DialogContent>
        </Dialog>
      )}

      <div className="text-center">
        <Link href="/insight/#pricing" prefetch={false}>
          <Button variant="default" className="w-full max-w-md text-lg font-bold py-6 bg-black text-white hover:bg-gray-800 text-wrap py-8">
            Start Now
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default InsightNewsletters
