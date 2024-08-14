"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { CartesianGrid, XAxis, Line, LineChart, Pie, PieChart, Bar, BarChart } from "recharts"
import { ChartTooltipContent, ChartTooltip, ChartContainer } from "@/components/ui/chart"
import { BarChartIcon, CheckIcon, LineChartIcon, PieChartIcon, XIcon } from "lucide-react";
import GridAnimation from "@/components/ldrs/grid";
import QuantumAnimation from "@/components/ldrs/quantum";
import Image from "next/image";

export default function InsightPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <main className="flex-1">
        {/* bg should be gradient from emerald-950 to teal-950 via emerald-900 */}
        {/* <section className="bg-emerald-950 py-12 md:py-24 px-6"> */}
        <section className="bg-gradient-to-br from-emerald-950 to-teal-950 via-emerald-900 py-12 md:py-24 px-6">
          <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
                Unlock the Power of Liquid&apos;s Quant Algorithms
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground">
                Get actionable stock picks, market insights, and personalized investment strategies delivered to your
                inbox.
              </p>
              <form className="flex gap-2">
                <Input type="email" placeholder="Enter your email" className="flex-1" />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>

            <div className="flex justify-center">
              <QuantumAnimation />
            </div>
          </div>
        </section>

        <section id="features" className="bg-muted/80 py-12 md:py-24 px-6">
          <div className="container mx-auto max-w-5xl space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Features</h2>
              <p className="text-lg md:text-xl text-muted-foreground/80">
                Discover the key features that set Liquid Insight apart.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background rounded-xl p-6 space-y-4 shadow-sm">
                <LineChartIcon className="h-10 w-10 text-primary/80" />
                <h3 className="text-xl font-bold">Stock Picks</h3>
                <p className="text-muted-foreground/80">
                  Receive weekly stock picks curated by our team of quant analysts.
                </p>
              </div>
              <div className="bg-background rounded-xl p-6 space-y-4 shadow-sm">
                <BarChartIcon className="h-10 w-10 text-primary/80" />
                <h3 className="text-xl font-bold">Market Analysis</h3>
                <p className="text-muted-foreground/80">
                  Get in-depth market analysis and insights to stay ahead of the curve.
                </p>
              </div>
              <div className="bg-background rounded-xl p-6 space-y-4 shadow-sm">
                <PieChartIcon className="h-10 w-10 text-primary/80" />
                <h3 className="text-xl font-bold">Personalized Insight</h3>
                <p className="text-muted-foreground/80">
                  Tailored investment strategies based on your risk profile and goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-gradient-to-br from-emerald-950 to-teal-950 via-emerald-900 py-12 md:py-24 px-6">
          <div className="container mx-auto max-w-5xl space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Pricing</h2>
              <p className="text-lg md:text-xl text-primary-foreground/80">
                Choose the plan that best fits your investment needs.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-background rounded-xl p-6 space-y-4 shadow-sm">
                <CardHeader>
                  <CardTitle>Basic</CardTitle>
                  <CardDescription>Get started with our essential features.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-4xl font-bold">$9</p>
                    <p className="text-muted-foreground/80">per month</p>
                  </div>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5 text-primary/80" />
                      Weekly stock picks
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5 text-primary/80" />
                      Market analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <XIcon className="h-5 w-5 text-muted-foreground/80" />
                      Personalized insights
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button>Subscribe</Button>
                </CardFooter>
              </Card>
              <Card className="bg-background rounded-xl p-6 space-y-4 shadow-sm">
                <CardHeader>
                  <CardTitle>Premium</CardTitle>
                  <CardDescription>Get the full suite of Liquid Insight features.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-4xl font-bold">$19</p>
                    <p className="text-muted-foreground/80">per month</p>
                  </div>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5 text-primary/80" />
                      Weekly stock picks
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5 text-primary/80" />
                      Market analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5 text-primary/80" />
                      Personalized insights
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button>Subscribe</Button>
                </CardFooter>
              </Card>
              <Card className="bg-background rounded-xl p-6 space-y-4 shadow-sm">
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>Custom solutions for your business.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-4xl font-bold">Contact Us</p>
                    <p className="text-muted-foreground/80">Tailored for your specific needs</p>
                  </div>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5 text-primary/80" />
                      Dedicated account manager
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5 text-primary/80" />
                      Custom reporting and analytics
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5 text-primary/80" />
                      Integrations and API access
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button>Contact Sales</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section id="about" className="bg-muted/80 py-12 md:py-24 px-6">
          <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/placeholder.svg"
                alt="About Image"
                width="500"
                height="400"
                className="rounded-xl"
                style={{ aspectRatio: "500/400", objectFit: "cover" }}
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">About Liquid Insight</h2>
              <p className="text-lg md:text-xl text-muted-foreground/80">
                Liquid Insight is a reverse hedge fund platform that leverages advanced quantitative algorithms
                to provide personalized investment strategies, stock picks, and market analysis to our subscribers.
                This is in contrast to traditional hedge funds, which are typically only accessible to accredited
                investors and charge high fees. Our mission is to democratize access to sophisticated investment
                strategies and help our customers achieve their financial goals.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground/80">
                Our team of experienced quant analysts and data scientists continuously monitor the markets, identify
                trends, and develop actionable insights to help you make informed investment decisions.
              </p>
              <Button variant="link">Learn More</Button>
            </div>
          </div>
        </section>

        <section id="metrics" className="bg-gradient-to-br from-emerald-950 to-teal-950 via-emerald-900 py-12 md:py-24 px-6">
          <div className="container mx-auto max-w-5xl space-y-8 md:space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground">Performance Metrics</h2>
              <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80">
                See how Liquid Insight is driving results for our customers.
              </p>
            </div>
            {/* grid in lg, flex in sm */}
            <div className="flex flex-col md:grid md:grid-cols-3 gap-6 sm:gap-8">
              <Card className="bg-background rounded-xl p-4 sm:p-0 space-y-4 shadow-sm">
                <CardHeader>
                  <CardTitle>Total Returns</CardTitle>
                </CardHeader>
                <CardContent>
                  <LinechartChart className="aspect-[4/3]" />
                </CardContent>
              </Card>

              <Card className="bg-background rounded-xl p-4 sm:p-6 space-y-4 shadow-sm">
                <CardHeader>
                  <CardTitle>Sector Allocation</CardTitle>
                </CardHeader>
                <CardContent>
                  <PiechartcustomChart className="aspect-square" />
                </CardContent>
              </Card>

              <Card className="bg-background rounded-xl p-4 sm:p-6 space-y-4 shadow-sm">
                <CardHeader>
                  <CardTitle>Risk-Adjusted Returns</CardTitle>
                </CardHeader>
                <CardContent>
                  <BarchartChart className="aspect-[4/3] w-full h-full overflow-x-scroll" />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function BarchartChart(props: any) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
        className="min-h-[300px]"
      >
        <BarChart
          accessibilityLayer
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}

function LinechartChart(props: any) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
      >
        <LineChart
          accessibilityLayer
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Line dataKey="desktop" type="natural" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
        </LineChart>
      </ChartContainer>
    </div>
  )
}

function PiechartcustomChart(props: any) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          sectorAllocation: {
            label: "Sector Allocation",
            color: "hsl(var(--chart-1))",
          },
        }}
      >
        <PieChart>
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Pie
            data={[
              { sector: "Tech", sectorAllocation: 0.3 },
              { sector: "Healthcare", sectorAllocation: 0.2 },
              { sector: "Finance", sectorAllocation: 0.2 },
              { sector: "Energy", sectorAllocation: 0.1 },
              { sector: "Consumer", sectorAllocation: 0.1 },
            ]}
            dataKey="sectorAllocation"
            fill="var(--color-sectorAllocation)"
          />
        </PieChart>
      </ChartContainer>
    </div>
  )
}
