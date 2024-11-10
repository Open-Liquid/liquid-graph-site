"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { FilterIcon, ImportIcon, ListFilterIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Playfair_Display, Inter } from "next/font/google"

const playfair = Playfair_Display({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"] })

interface DateRange {
  from: Date
  to: Date
}

const addDays = (date: Date, days: number) => {
  const newDate = new Date(date)
  newDate.setDate(date.getDate() + days)
  return newDate
}

export default function DashboardPage() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  })

  return (
    <main className={`grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-8 md:gap-8 lg:grid-cols-3 xl:grid-cols-3 bg-[#F6F3EE] ${playfair.className}`}>
      <div className="lg:col-span-2">
        <Card className="border-2 border-black shadow-[8px_8px_0_0_#000]">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl lg:text-4xl">Your Recommendations</CardTitle>
            <CardDescription className={`${inter.className} text-base md:text-lg lg:text-xl`}>View and manage your personalized financial recommendations.</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="stocks" className="w-full">
              <div className="flex flex-col md:flex-row md:items-center gap-y-4 mb-6">
                <TabsList className="bg-white border-2 border-black p-0 space-x-1">
                  {["stocks", "bonds", "etfs", "energy"].map((tab) => (
                    <TabsTrigger
                      key={tab}
                      value={tab}
                      className="px-4 py-2 text-sm font-bold uppercase tracking-wide data-[state=active]:bg-black data-[state=active]:text-white transition-all"
                    >
                      {tab}
                    </TabsTrigger>
                  ))}
                </TabsList>
                <div className="ml-auto flex items-center gap-2 mt-4 md:mt-0">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className={`${inter.className} h-8 gap-1 text-sm border-2 border-black`}>
                        <FilterIcon className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only">Filter</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="border-2 border-black">
                      <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuCheckboxItem checked>High Risk</DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>Medium Risk</DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>Low Risk</DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" size="sm" className={`${inter.className} h-8 gap-1 text-sm border-2 border-black`}>
                        <ListFilterIcon className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only">Date Range</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0 border-2 border-black">
                      <Calendar
                        mode="range"
                        selected={date}
                        onSelect={(date) => setDate(date as DateRange)}
                        className="rounded-none"
                      />
                    </PopoverContent>
                  </Popover>

                  <Button size="sm" variant="outline" className={`${inter.className} h-8 gap-1 text-sm border-2 border-black`}>
                    <ImportIcon className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only">Export</span>
                  </Button>
                </div>
              </div>

              {["stocks", "bonds", "etfs", "energy"].map((tabValue) => (
                <TabsContent key={tabValue} value={tabValue} className="border-2 border-black p-4">
                  <div className="w-full overflow-x-auto">
                    <Table className="w-full">
                      <TableHeader className="hidden md:table-header-group">
                        <TableRow>
                          <TableHead className="font-bold">Symbol</TableHead>
                          <TableHead className="font-bold">Name</TableHead>
                          <TableHead className="font-bold">Rating</TableHead>
                          <TableHead className="font-bold">Price</TableHead>
                          <TableHead className="font-bold">Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {(tabValue === "stocks" ? stocks :
                          tabValue === "bonds" ? bonds :
                            tabValue === "etfs" ? etfs : energy).map((item: any, index: number) => (
                              <React.Fragment key={item.symbol || item.ticker || item.issuer}>
                                <TableRow className="md:hidden border-b border-black last:border-b-0">
                                  <TableCell colSpan={5} className="p-4">
                                    <div className={`${inter.className} flex flex-col space-y-2`}>
                                      <div className="flex justify-between">
                                        <span className="font-bold">{item.symbol || item.ticker || item.issuer}</span>
                                        <Badge
                                          variant="outline"
                                          className={`${getBadgeColor(item, tabValue)} border-2 border-black`}
                                        >
                                          {item.risk || item.rating || "ETF" || item.recommendation}
                                        </Badge>
                                      </div>
                                      <div>{item.company || item.name}</div>
                                      <div className="flex justify-between">
                                        <span>{item.recommendation || item.yield || item.expenseRatio || ""}</span>
                                        <span>${item.price}</span>
                                      </div>
                                      <StockDialog stock={item} />
                                    </div>
                                  </TableCell>
                                </TableRow>
                                <TableRow className="hidden md:table-row border-b border-black last:border-b-0">
                                  <TableCell className="font-medium">{item.symbol || item.ticker || item.issuer}</TableCell>
                                  <TableCell>{item.company || item.name}</TableCell>
                                  <TableCell>
                                    <Badge
                                      variant="outline"
                                      className={`${getBadgeColor(item, tabValue)} border-2 border-black`}
                                    >
                                      {item.risk || item.rating || "ETF" || item.recommendation}
                                    </Badge>
                                  </TableCell>
                                  <TableCell>${item.price}</TableCell>
                                  <TableCell>
                                    <StockDialog stock={item} />
                                  </TableCell>
                                </TableRow>
                              </React.Fragment>
                            ))}
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4">
        <Card className="border-2 border-black shadow-[8px_8px_0_0_#000]">
          <CardHeader>
            <CardTitle className="text-xl">Your Account</CardTitle>
          </CardHeader>
          <CardContent className={inter.className}>
            <div className="grid gap-4">
              {[
                { label: "Username", value: "johndoe" },
                { label: "Email", value: "johndoe@example.com" },
                { label: "Subscription", value: "Premium" },
                { label: "Expiration Date", value: "2024-06-30" },
              ].map((item) => (
                <div key={item.label} className="grid gap-1">
                  <div className="text-sm font-medium">{item.label}</div>
                  <div>{item.value}</div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full border-2 border-black hover:bg-black hover:text-white transition-colors">Manage Subscription</Button>
          </CardFooter>
        </Card>
        <Card className="border-2 border-black shadow-[8px_8px_0_0_#000]">
          <CardHeader>
            <CardTitle className="text-xl">Subscription Details</CardTitle>
          </CardHeader>
          <CardContent className={inter.className}>
            <div className="grid gap-4">
              <div className="grid gap-1">
                <div className="text-sm font-medium">Plan</div>
                <div>Premium</div>
              </div>
              <div className="grid gap-1">
                <div className="text-sm font-medium">Price</div>
                <div>$19.99/month</div>
              </div>
              <div className="grid gap-1">
                <div className="text-sm font-medium">Features</div>
                <ul className="list-disc pl-4 text-sm">
                  <li>Personalized recommendations</li>
                  <li>Real-time market updates</li>
                  <li>Priority customer support</li>
                </ul>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full border-2 border-black hover:bg-black hover:text-white transition-colors">Upgrade Plan</Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}

const StockDialog = ({ stock }: any) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline" size="sm" className={`${inter.className} border-2 border-black hover:bg-black hover:text-white transition-colors`}>
        View
      </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-full lg:max-w-[600px] border-2 border-black bg-[#F6F3EE]">
      <DialogHeader>
        <DialogTitle className="text-2xl">{stock.company || stock.name} ({stock.ticker || stock.symbol || stock.issuer})</DialogTitle>
        <DialogDescription className={inter.className}>
          Detailed analysis and recommendation for {stock.company || stock.name}
        </DialogDescription>
      </DialogHeader>
      <ScrollArea className="h-[400px] w-full border-2 border-black p-4">
        <div className={`${inter.className} text-sm`}>
          <h4 className="mb-4 text-lg font-medium leading-none">
            {stock.company || stock.name} ({stock.ticker || stock.symbol || stock.issuer}) Recommendation
          </h4>
          <p className="mt-4 leading-7">
            {/* Add detailed analysis here */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </ScrollArea>
      <DialogFooter>
        <Button onClick={() => { }} className={`${inter.className} border-2 border-black hover:bg-black hover:text-white transition-colors`}>Close</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
)

const getBadgeColor = (item: any, type: string) => {
  if (type === "stocks") {
    return item.risk === 'Low'
      ? 'bg-green-500 text-green-50'
      : item.risk === 'Medium'
        ? 'bg-yellow-500 text-yellow-50'
        : 'bg-red-500 text-red-50'
  } else if (type === "bonds") {
    return item.rating === 'AAA'
      ? 'bg-green-500 text-green-50'
      : item.rating === 'A'
        ? 'bg-yellow-500 text-yellow-50'
        : 'bg-red-500 text-red-50'
  } else if (type === "etfs") {
    return 'bg-blue-500 text-blue-50'
  } else if (type === "energy") {
    return item.rating === 'Buy'
      ? 'bg-green-500 text-green-50'
      : item.rating === 'Hold'
        ? 'bg-yellow-500 text-yellow-50'
        : 'bg-red-500 text-red-50'
  }
}

const stocks = [
  { ticker: 'AAPL', company: 'Apple Inc.', recommendation: 'Buy', risk: 'Low', price: 145.12 },
  { ticker: 'AMZN', company: 'Amazon.com Inc.', recommendation: 'Hold', risk: 'Medium', price: 3200.00 },
  { ticker: 'GOOGL', company: 'Alphabet Inc.', recommendation: 'Sell', risk: 'High', price: 2500.00 },
  { ticker: 'MSFT', company: 'Microsoft Corporation', recommendation: 'Buy', risk: 'Low', price: 300.00 },
  { ticker: 'TSLA', company: 'Tesla Inc.', recommendation: 'Hold', risk: 'Medium', price: 700.00 },
]

const bonds = [
  { issuer: 'US Treasury', rating: 'AAA', yield: '2.5%', price: 1000.00 },
  { issuer: 'Apple Inc.', rating: 'A', yield: '3.0%', price: 1000.00 },
  { issuer: 'Microsoft Corporation', rating: 'A+', yield: '2.8%', price: 1000.00 },
  { issuer: 'Amazon.com Inc.', rating: 'A-', yield: '2.7%', price: 1000.00 },
  { issuer: 'Google LLC', rating: 'A', yield: '2.9%', price: 1000.00 },
]

const etfs = [
  { symbol: 'VOO', name: 'Vanguard S&P 500 ETF', expenseRatio: '0.03%', price: 400.00 },
  { symbol: 'VTI', name: 'Vanguard Total Stock Market ETF', expenseRatio: '0.04%', price: 200.00 },
  { symbol: 'VUG', name: 'Vanguard Growth ETF', expenseRatio: '0.05%', price: 150.00 },
  { symbol: 'VTV', name: 'Vanguard Value ETF', expenseRatio: '0.06%', price: 100.00 },
  { symbol: 'VWO', name: 'Vanguard FTSE Emerging Markets ETF', expenseRatio: '0.10%', price: 50.00 },
]

const energy = [
  { symbol: 'CL', name: 'Crude Oil Futures', rating: 'Buy', price: 70.00 },
  { symbol: 'NG', name: 'Natural Gas Futures', rating: 'Hold', price: 3.50 },
  { symbol: 'RB', name: 'RBOB Gasoline Futures', rating: 'Sell', price: 2.00 },
  { symbol: 'HO', name: 'Heating Oil Futures', rating: 'Buy', price: 2.50 },
  { symbol: 'BZ', name: 'Brent Crude Oil Futures', rating: 'Hold', price: 75.00 },
]
