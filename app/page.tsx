"use client";

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { ResponsiveLine } from "@nivo/line"
import { ResponsiveNetwork } from "@nivo/network"
import { ResponsiveBoxPlot } from '@nivo/boxplot'
import { GitGraphIcon } from "lucide-react"
import network_data from "@/lib/data/network_graph_example.json"
import box_plot_data from "@/lib/data/box_plot_example.json"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="hidden md:flex px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <GitGraphIcon className="h-6 w-6" />
          <span className="sr-only">Liquid Graph</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#strategies" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Strategies
          </Link>
          <Link href="#performance" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Performance
          </Link>
          <Link href="#whitepaper" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Whitepaper
          </Link>
          <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
        </nav>
      </header>
      
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"default"} className="w-12 h-12 fixed bottom-8 right-4 z-50 shadow-lg md:hidden">
            <GitGraphIcon className="h-6 w-6" />
            <span className="sr-only">Liquid Graph</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <nav className="flex flex-col gap-4 p-4">
            {/* logo */}
            <Link href="#" className="flex items-center justify-start mb-4" prefetch={false}>
              <GitGraphIcon className="h-6 w-6" />
              <span className="sr-only">Liquid Graph</span>
            </Link>

            <Link href="#strategies" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Strategies
            </Link>
            <Link href="#performance" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Performance
            </Link>
            <Link href="#whitepaper" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Whitepaper
            </Link>
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              About
            </Link>
          </nav>
        </SheetContent>
      </Sheet>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32" id="home">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 text-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2 text-left">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Liquid Graph: Precision Investing
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Quantitative investing with Liquid Graph, a hedge fund specializing in
                    systematic strategies.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#strategies"
                    prefetch={false}
                  >
                    <Button variant={"default"} className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="h-[20rem] lg:h-[30rem] w-full rounded-xl overflow-hidden">
                <NetworkGraph
                  props={{ className: "h-full w-full" }}
                  data={JSON.parse(JSON.stringify(network_data))}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted" id="strategies">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-left">
              <div className="space-y-2">
                <Badge variant={"outline"} className="mb-4 md:mb-6 rounded-md shadow-lg">The Approach</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Systematic Strategies for Consistent Returns
                </h2>
                <p className="max-w-[5xl] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Liquid Graph employs a rigorous, data-driven approach to investing, leveraging advanced quantitative
                  models and cutting-edge technology to identify and capitalize on market opportunities.
                </p>
              </div>
            </div>

            <div className="mx-auto flex flex-col max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <BoxPlot
                props={{ className: "h-[20rem] w-full max-w-5xl" }}
                data={JSON.parse(JSON.stringify(box_plot_data))}
              />

              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Systematic Approach</h3>
                      <p className="text-muted-foreground">
                        Our investment strategies are based on rigorous quantitative models and data analysis, ensuring
                        consistent and repeatable performance.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Risk Management</h3>
                      <p className="text-muted-foreground">
                        Sophisticated risk management techniques are integrated into our investment process, mitigating
                        downside risk and protecting investor capital.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Cutting-Edge Technology</h3>
                      <p className="text-muted-foreground">
                        We leverage the latest advancements in data science, machine learning, and computational power
                        to drive our investment decisions.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32" id="performance">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-left">
              <div className="space-y-2">
                <Badge variant={"outline"} className="mb-4 md:mb-6 rounded-md shadow-lg">The Performance</Badge>

                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Consistent, Reliable Returns</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Liquid Graph's systematic investment strategies have delivered strong, risk-adjusted returns across
                  various market conditions, providing our investors with a consistent source of alpha.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <LineChart
                props={{ className: "h-[20rem] w-full" }}
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Annualized Returns</h3>
                      <p className="text-muted-foreground">
                        Liquid Graph has delivered an average annualized return of 12.5% over the past 5 years.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Low Volatility</h3>
                      <p className="text-muted-foreground">
                        Our strategies have demonstrated low volatility, with a standard deviation of just 6.2% over the
                        same period.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Sharpe Ratio</h3>
                      <p className="text-muted-foreground">
                        Liquid Graph's Sharpe ratio of 1.8 reflects our ability to generate consistent, risk-adjusted
                        returns.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted" id="whitepaper">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-left">
              <div className="space-y-2">
                <Badge variant={"outline"} className="mb-4 md:mb-6 rounded-md shadow-lg">The Project</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Read the whitepaper that inspired Liquid Graph
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our investment strategies are based on the research and insights outlined in the original whitepaper that inspired Liquid Graph. Download the whitepaper to learn more about our approach and methodology.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                {/* link to pdf hosted on arxiv.org */}
                <Link
                  href="https://arxiv.org/pdf/2106.01484.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant={"default"} className="w-full mt-6">
                    Download Whitepaper
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About section - very vague and elusive */}
        <section className="w-full py-12 md:py-24 lg:py-32" id="about">
          <div className="container px-4 md:px-6 max-w-5xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-left">
              <div className="space-y-2">
                <Badge variant={"outline"} className="mb-4 md:mb-6 rounded-md shadow-lg">The Vision</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Actualizing Collective Consciousness Metrics
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Liquid Graph is redefining the future of investing by interfacing with the current state of the collective consciousness of humanity. With our unique approach to data analysis and machine learning, we are able to predict market trends and capitalize on opportunities as they are presented.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-6 pt-6">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full"
                />
                <Button variant={"default"} className="w-full">
                  Subscribe to our newsletter
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Liquid Graph. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}


function LineChart({ props }: { props: any }) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#FF6B6B", "#48BB78"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#e0e0e0",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}

function NetworkGraph({ props, data }: { props: any, data: any }) {
  return (
    <div {...props}>
      <ResponsiveNetwork
        data={data}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        linkDistance={(e: any) => e.distance}
        centeringStrength={0.3}
        repulsivity={6}
        nodeSize={(n: any) => n.size}
        activeNodeSize={(n: any) => 1.3 * n.size}
        nodeColor={(n: any) => n.color}
        nodeBorderWidth={1}
        nodeBorderColor={{
          from: 'color',
          modifiers: [
            [
              'darker',
              0.8
            ]
          ]
        }}
        linkThickness={n => 2 + 2 * n.target.data.height}
        linkBlendMode="multiply"
        motionConfig="wobbly"
      />
    </div>
  );
}

const BoxPlot = ({ props, data /* see data tab */ }: { props: any, data: any }) => (
  <div {...props}>
    <ResponsiveBoxPlot
      data={data}
      margin={{ top: 60, right: 140, bottom: 60, left: 60 }}
      minValue={0}
      maxValue={10}
      subGroupBy="subgroup"
      padding={0.12}
      enableGridX={true}
      axisTop={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: '',
        legendOffset: 36,
        truncateTickAt: 0
      }}
      axisRight={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: '',
        legendOffset: 0,
        truncateTickAt: 0
      }}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'group',
        legendPosition: 'middle',
        legendOffset: 32,
        truncateTickAt: 0
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'value',
        legendPosition: 'middle',
        legendOffset: -40,
        truncateTickAt: 0
      }}
      colors={{ scheme: 'set2' }}
      borderRadius={2}
      borderWidth={2}
      borderColor={{
        from: 'color',
        modifiers: [
          [
            'darker',
            0.3
          ]
        ]
      }}
      medianWidth={2}
      medianColor={{
        from: 'color',
        modifiers: [
          [
            'darker',
            0.3
          ]
        ]
      }}
      whiskerEndSize={0.6}
      whiskerColor={{
        from: 'color',
        modifiers: [
          [
            'darker',
            0.3
          ]
        ]
      }}
      motionConfig="stiff"
      legends={[
        {
          anchor: 'right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemWidth: 60,
          itemHeight: 20,
          itemsSpacing: 3,
          itemTextColor: '#999',
          itemDirection: 'left-to-right',
          symbolSize: 20,
          symbolShape: 'square',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000'
              }
            }
          ]
        }
      ]}
    />
  </div>
)
