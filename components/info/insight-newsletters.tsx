import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card'
import { CalendarDaysIcon, SearchCodeIcon } from 'lucide-react'

const InsightNewsletters = () => {
  return (
    <div className="w-full space-y-10">
      <div className="space-y-2">
        <Badge variant={"outline"} className="mb-4 md:mb-6 rounded-md shadow-lg">Liquid Insight</Badge>

        <h3 className="text-3xl font-bold">Liquid Insight Newsletters</h3>

        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Liquid Insight&apos;s four newsletters are a key component of the firm&apos;s strategy to deliver actionable financial insights and analysis to subscribers. Each newsletter serves a specific purpose and targets different aspects of market analysis, providing value to individual investors, financial advisors, and small investment firms. Below is an overview of each newsletter:
        </p>
      </div>

      {/* cards explaining the four newsletters */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <span className="flex flex-col items-center gap-y-2">
              Weekly Insight
              <Badge variant={"outline"}>Sunday Nights</Badge>
            </span>

            <span className="text-muted-foreground flex flex-col items-start justify-start">
              <CalendarDaysIcon size={24} />
            </span>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-muted-foreground">
              A general overview of market predictions for the upcoming week.
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Link
              href="/insight"
              prefetch={false}
            >
              <Button variant={"default"} className="w-full">
                Learn More
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <span className="flex flex-col items-center gap-y-2">
              Weekly Picks
              <Badge variant={"outline"}>Sunday Nights</Badge>
            </span>

            <span className="text-muted-foreground flex flex-col items-start justify-start">
              <CalendarDaysIcon size={24} />
            </span>
          </CardHeader>
          <CardContent>
            <CardDescription>
              A curated list of market-making picks for the upcoming week.
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Link
              href="/insight"
              prefetch={false}
            >
              <Button variant={"default"} className="w-full">
                Learn More
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <span className="flex flex-col items-center gap-y-2">
              Fund Analysis
              <Badge variant={"outline"}>Monday Mornings</Badge>
            </span>

            <span className="text-muted-foreground flex flex-col items-start justify-start">
              <SearchCodeIcon size={24} />
            </span>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Transparent trade plans for the Liquid Graph Fund, outlining the fund&apos;s strategy for the week.
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Link
              href="/insight"
              prefetch={false}
            >
              <Button variant={"default"} className="w-full">
                Learn More
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <span className="flex flex-col items-center gap-y-2">
              Custom Analysis
              <Badge variant={"outline"}>Weekly and on-demand</Badge>
            </span>

            <span className="text-muted-foreground flex flex-col items-start justify-start">
              <SearchCodeIcon size={24} />
            </span>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Tailored analysis generated based on the subscriber&apos;s specific stock list or portfolio.
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Link
              href="/insight"
              prefetch={false}
            >
              <Button variant={"default"} className="w-full">
                Learn More
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div className="mx-auto w-full max-w-sm space-y-6 pt-6">
        <Link
          href="/insight"
          prefetch={false}
        >
          <Button variant={"default"} className="w-full">
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default InsightNewsletters
