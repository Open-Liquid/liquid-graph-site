"use client";

import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Switch } from "@/components/ui/switch"
import { CartesianGrid, XAxis, Line, LineChart, Bar, BarChart } from "recharts"
import { ChartTooltipContent, ChartTooltip, ChartContainer } from "@/components/ui/chart"
import { BellIcon, BookOpenIcon, CompassIcon, DownloadIcon, FileTextIcon, HomeIcon, MenuIcon, Package2Icon, PieChartIcon, PlayIcon, SettingsIcon, UserIcon, UsersIcon } from "lucide-react";
import Image from "next/image";

export default function Component() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <TooltipProvider>
            <Link
              href="#"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
              prefetch={false}
            >
              <Package2Icon className="h-4 w-4 transition-all group-hover:scale-110" />
              <span className="sr-only">Liquid</span>
            </Link>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}
                >
                  <HomeIcon className="h-5 w-5" />
                  <span className="sr-only">Dashboard</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Dashboard</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}
                >
                  <PieChartIcon className="h-5 w-5" />
                  <span className="sr-only">Portfolio</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Portfolio</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}
                >
                  <FileTextIcon className="h-5 w-5" />
                  <span className="sr-only">Reports</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Reports</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}
                >
                  <BellIcon className="h-5 w-5" />
                  <span className="sr-only">Alerts</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Alerts</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}
                >
                  <CompassIcon className="h-5 w-5" />
                  <span className="sr-only">Recommendations</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Recommendations</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}
                >
                  <UsersIcon className="h-5 w-5" />
                  <span className="sr-only">Collaboration</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Collaboration</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}
                >
                  <UserIcon className="h-5 w-5" />
                  <span className="sr-only">Profile</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Profile</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}
                >
                  <SettingsIcon className="h-5 w-5" />
                  <span className="sr-only">Settings</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>

      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                  prefetch={false}
                >
                  <Package2Icon className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">Liquid</span>
                </Link>
                <Link href="#" className="flex items-center gap-4 px-2.5 text-foreground" prefetch={false}>
                  <HomeIcon className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <PieChartIcon className="h-5 w-5" />
                  Portfolio
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <FileTextIcon className="h-5 w-5" />
                  Reports
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <BellIcon className="h-5 w-5" />
                  Alerts
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <CompassIcon className="h-5 w-5" />
                  Recommendations
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <UsersIcon className="h-5 w-5" />
                  Collaboration
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <UserIcon className="h-5 w-5" />
                  Profile
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <SettingsIcon className="h-5 w-5" />
                  Settings
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="#" prefetch={false}>
                    Dashboard
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Overview</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="relative ml-auto flex-1 md:grow-0">
            <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg"
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                  style={{ aspectRatio: "36/36", objectFit: "cover" }}
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        <main className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          <Card className="col-span-1 lg:col-span-2">
            <CardHeader>
              <CardTitle>Portfolio Overview</CardTitle>
              <CardDescription>
                Your current investment portfolio, including asset allocation, total value, and performance metrics.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-muted rounded-lg p-4 flex flex-col gap-2">
                  <div className="text-sm text-muted-foreground">Total Value</div>
                  <div className="text-2xl font-bold">$250,000</div>
                </div>
                <div className="bg-muted rounded-lg p-4 flex flex-col gap-2">
                  <div className="text-sm text-muted-foreground">Asset Allocation</div>
                  <div className="text-2xl font-bold">60/40</div>
                </div>
                <div className="bg-muted rounded-lg p-4 flex flex-col gap-2">
                  <div className="text-sm text-muted-foreground">YTD Performance</div>
                  <div className="text-2xl font-bold text-green-500">+8.2%</div>
                </div>
                <div className="bg-muted rounded-lg p-4 flex flex-col gap-2">
                  <div className="text-sm text-muted-foreground">Risk Tolerance</div>
                  <div className="text-2xl font-bold">Moderate</div>
                </div>
              </div>
              <div className="mt-6">
                <LinechartChart className="aspect-[16/9]" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recommendations</CardTitle>
              <CardDescription>
                Personalized financial advice and investment recommendations based on your risk profile, goals, and market
                conditions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="bg-muted rounded-lg p-4 flex flex-col gap-2">
                  <div className="text-lg font-bold">Increase Equity Exposure</div>
                  <p className="text-sm text-muted-foreground">
                    Based on your risk tolerance and market conditions, we recommend increasing your equity exposure to
                    70% to take advantage of potential market growth.
                  </p>
                  <Button>Implement Recommendation</Button>
                </div>
                <div className="bg-muted rounded-lg p-4 flex flex-col gap-2">
                  <div className="text-lg font-bold">Diversify into Alternative Investments</div>
                  <p className="text-sm text-muted-foreground">
                    To reduce portfolio volatility and improve long-term returns, we suggest allocating 10% of your
                    portfolio to alternative investments, such as real estate or commodities.
                  </p>
                  <Button>Implement Recommendation</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Reporting</CardTitle>
              <CardDescription>
                View and download detailed financial reports, including performance analysis, market insights, and
                investment strategies.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="bg-muted rounded-lg p-4 flex flex-col gap-2">
                  <div className="text-lg font-bold">Q2 2023 Performance Report</div>
                  <p className="text-sm text-muted-foreground">
                    Review your portfolio&apos;s performance, asset allocation, and market insights for the second quarter of
                    2023.
                  </p>
                  <div className="flex justify-end">
                    <Button size="sm">
                      <DownloadIcon className="h-4 w-4 mr-2" />
                      Download Report
                    </Button>
                  </div>
                </div>
                <div className="bg-muted rounded-lg p-4 flex flex-col gap-2">
                  <div className="text-lg font-bold">2022 Annual Report</div>
                  <p className="text-sm text-muted-foreground">
                    Review your portfolio&apos;s performance, asset allocation, and market insights for the full year of 2022.
                  </p>
                  <div className="flex justify-end">
                    <Button size="sm">
                      <DownloadIcon className="h-4 w-4 mr-2" />
                      Download Report
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Tracking</CardTitle>
              <CardDescription>
                Monitor the progress of your investments, track market trends, and receive alerts for significant changes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="bg-muted rounded-lg p-4 flex flex-col gap-2">
                  <div className="text-lg font-bold">Market Trends</div>
                  <p className="text-sm text-muted-foreground">
                    Stay up-to-date on the latest market trends and performance of your investments.
                  </p>
                  <LinechartChart className="aspect-[16/9]" />
                </div>
                <div className="bg-muted rounded-lg p-4 flex flex-col gap-2">
                  <div className="text-lg font-bold">Portfolio Alerts</div>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications for significant changes in your portfolio, such as asset value fluctuations or
                    rebalancing opportunities.
                  </p>
                  <div className="flex justify-end">
                    <Button size="sm">
                      <BellIcon className="h-4 w-4 mr-2" />
                      Manage Alerts
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Educational Resources</CardTitle>
              <CardDescription>
                Access educational content, such as articles, videos, and tutorials, to help you better understand
                financial concepts and make informed decisions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="bg-muted rounded-lg p-4 flex flex-col gap-2">
                  <div className="text-lg font-bold">Understanding Asset Allocation</div>
                  <p className="text-sm text-muted-foreground">
                    Learn how to diversify your portfolio and balance your investments to manage risk and maximize
                    returns.
                  </p>
                  <div className="flex justify-end">
                    <Button size="sm">
                      <PlayIcon className="h-4 w-4 mr-2" />
                      Watch Video
                    </Button>
                  </div>
                </div>
                <div className="bg-muted rounded-lg p-4 flex flex-col gap-2">
                  <div className="text-lg font-bold">Investing for Retirement</div>
                  <p className="text-sm text-muted-foreground">
                    Explore strategies and best practices for building a retirement portfolio that aligns with your
                    long-term financial goals.
                  </p>
                  <div className="flex justify-end">
                    <Button size="sm">
                      <BookOpenIcon className="h-4 w-4 mr-2" />
                      Read Article
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}

function LinechartChart(props: any) {
  const data = [
    { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
    { name: "May", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
  ]

  return (
    <div {...props}>
      {/* <LineChart width={400} height={200} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart> */}

      <ChartContainer
        config={{

        }}
      >
        <LineChart
          accessibilityLayer
          data={data}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="name"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Line
            dataKey="uv"
            type="natural"
            stroke="#8884d8"
            strokeWidth={2}
            dot={true}
          />
        </LineChart>
      </ChartContainer>
    </div>
  )
}
