import React from 'react'
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Playfair_Display, Inter } from "next/font/google"

const playfair = Playfair_Display({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"] })

type NewsletterItem = {
  title: string
  description: string
  badge: string
  icon: React.ElementType
  audience: string
  issuance: string
  detailedContent: string
}

type NewsletterSectionProps = {
  title?: string
  newsletters: NewsletterItem[]
}

const NewsletterCard = ({ newsletter }: { newsletter: NewsletterItem }) => {
  const Icon = newsletter.icon

  return (
    <Card className="flex flex-col justify-between bg-white border-2 border-black hover:shadow-[8px_8px_0_0_#000] transition-all duration-300 ease-in-out rounded-none h-full">
      <CardHeader className="space-y-4 border-b-2 border-black">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className={`${playfair.className} text-2xl font-bold text-black`}>{newsletter.title}</CardTitle>
            <Badge className="bg-[#F6F3EE] text-black border-2 border-black rounded-none px-2 py-0.5 text-xs uppercase tracking-wide">
              {newsletter.badge}
            </Badge>
          </div>
          <Icon className="w-8 h-8 text-black flex-shrink-0" />
        </div>
        <CardDescription className={`${inter.className} text-black`}>
          {newsletter.description}
        </CardDescription>
      </CardHeader>

      <CardContent className={`${inter.className} text-sm text-black pt-4`}>
        <div className="space-y-2">
          <p><span className="font-semibold">Audience:</span> {newsletter.audience}</p>
          <p><span className="font-semibold">Frequency:</span> {newsletter.issuance}</p>
        </div>
      </CardContent>

      <CardFooter className="pt-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className={`${inter.className} w-full border-2 border-black rounded-none hover:bg-black hover:text-white transition-colors`}
            >
              Learn More
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-[#F6F3EE] sm:max-w-[425px] rounded-none border-2 border-black">
            <DialogHeader>
              <div className="flex items-center gap-2">
                <Icon className="w-8 h-8 text-black" />
                <DialogTitle className={`${playfair.className} text-2xl font-bold text-black`}>{newsletter.title}</DialogTitle>
              </div>
              <Badge className="w-fit bg-white text-black border-2 border-black rounded-none px-2 py-0.5 text-xs uppercase tracking-wide">
                {newsletter.badge}
              </Badge>
            </DialogHeader>
            <DialogDescription className={`${inter.className} text-black`}>
              {newsletter.detailedContent}
            </DialogDescription>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  )
}

const NewsletterSection = ({
  title = "Our Newsletters",
  newsletters
}: NewsletterSectionProps) => {
  return (
    <section className="py-24 px-6 bg-[#F6F3EE]">
      <div className="container mx-auto max-w-5xl space-y-16">
        <h2 className={`${playfair.className} text-4xl font-bold text-center text-black`}>{title}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {newsletters.map((newsletter, index) => (
            <NewsletterCard key={index} newsletter={newsletter} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection
