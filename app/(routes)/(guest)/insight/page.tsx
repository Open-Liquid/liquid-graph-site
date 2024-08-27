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

export default function InsightPage() {
  const [userEmail, setUserEmail] = useState("")

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

              {/* dialog to show subscription options */}
              <Dialog>
                <DialogTrigger className="flex items-center space-x-2 bg-foreground/80 text-background rounded-lg px-4 py-2">
                  Get Started
                </DialogTrigger>
                <DialogOverlay>
                  <DialogContent>
                    <DialogHeader>Subscribe to Liquid Insight</DialogHeader>
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                    />
                  </DialogContent>
                  <DialogFooter>
                    <Button>Subscribe</Button>
                  </DialogFooter>
                </DialogOverlay>
              </Dialog>
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
              {/* basic - 29 / month or 299 / year || premium - 59 / month or 499 / year || enterprise - contact for pricing */}
              <Card className="bg-background rounded-xl p-6 space-y-4 shadow-sm flex flex-col items-start justify-between">
                <CardHeader>
                  <CardTitle>Basic</CardTitle>
                  <CardDescription className="flex items-center space-x-2">
                    $29/month |
                    $299/year
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Weekly Stock Picks</li>
                    <li>Market Analysis</li>
                    <li>Personalized Insight</li>
                  </ul>
                </CardContent>

                <CardFooter className="flex flex-col items-start justify-between w-full gap-y-2">
                  <Button variant="default">Subscribe</Button>
                </CardFooter>
              </Card>

              <Card className="bg-background rounded-xl p-6 space-y-4 shadow-sm flex flex-col items-start justify-between">
                <CardHeader>
                  <CardTitle>Premium</CardTitle>
                  <CardDescription className="flex items-center space-x-2">
                    $59/month |
                    $499/year
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Weekly Stock Picks</li>
                    <li>Market Analysis</li>
                    <li>Personalized Insight</li>
                    <li>Advanced Analytics</li>
                  </ul>
                </CardContent>
                <CardFooter className="flex flex-col items-start justify-between w-full gap-y-2">
                  <Badge variant="secondary" className="w-auto">Most Popular</Badge>
                  <Button variant="default">Subscribe</Button>
                </CardFooter>
              </Card>

              <Card className="bg-background rounded-xl p-6 space-y-4 shadow-sm flex flex-col items-start justify-between">
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription className="flex items-start justify-start mx-0">
                    Contact for Pricing
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Customized Solutions</li>
                    <li>Priority Support</li>
                    <li>White-Labeling</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="default">Contact Us</Button>
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

        <section id="metrics" className="bg-gradient-to-br from-emerald-950 to-teal-950 via-emerald-900 py-12 md:py-10 px-6 w-full flex items-center justify-center">
          <div className="container mx-auto max-w-5xl space-y-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="text-lg font-semibold mb-2">Total Returns</h3>
                <LinechartChart />
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="text-lg font-semibold mb-2">Sector Allocation</h3>
                <PiechartcustomChart />
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="text-lg font-semibold mb-2">Risk-Adjusted Returns</h3>
                <BarchartChart />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function BarchartChart(props: any) {
  return (
    <div {...props} className="w-full h-full min-h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <ChartContainer
          config={{
            desktop: {
              label: "Desktop",
              color: "#4c51bf",
            },
          }}
        >
          <BarChart
            data={[
              { month: "January", desktop: 186 },
              { month: "February", desktop: 305 },
              { month: "March", desktop: 237 },
              { month: "April", desktop: 73 },
              { month: "May", desktop: 209 },
              { month: "June", desktop: 214 },
            ]}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              tick={{
                fill: "#4c51bf",
                fontSize: "0.75rem",
              }}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </ResponsiveContainer>
    </div>
  );
}

function LinechartChart(props: any) {
  return (
    <div {...props} className="w-full h-full min-h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <ChartContainer
          config={{
            desktop: {
              label: "Desktop",
              color: "#4c51bf",
            },
          }}
        >
          <LineChart
            data={[
              { month: "January", desktop: 186 },
              { month: "February", desktop: 305 },
              { month: "March", desktop: 237 },
              { month: "April", desktop: 73 },
              { month: "May", desktop: 209 },
              { month: "June", desktop: 214 },
            ]}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
              tick={{
                fill: "#4c51bf",
                fontSize: "0.75rem",
              }}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Line type="monotone" dataKey="desktop" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
          </LineChart>
        </ChartContainer>
      </ResponsiveContainer>
    </div>
  );
}

function PiechartcustomChart(props: any) {
  return (
    <div {...props} className="w-full h-full min-h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <ChartContainer
          config={{
            sectorAllocation: {
              label: "Sector Allocation",
              color: "#4c51bf",
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
              label={({ sector, percent }) => `${sector} ${(percent * 100).toFixed(0)}%`}
              labelLine={false}
              outerRadius="80%"
            />
          </PieChart>
        </ChartContainer>
      </ResponsiveContainer>
    </div>
  );
}
