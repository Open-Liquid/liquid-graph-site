"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { FilterIcon, ImportIcon, ListFilterIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

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
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg md:text-xl lg:text-2xl">Your Recommendations</CardTitle>
            <CardDescription className="text-sm md:text-base lg:text-lg">View and manage your personalized financial recommendations.</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="stocks">
              <div className="flex flex-col md:flex-row md:items-center gap-y-2">
                <TabsList>
                  <TabsTrigger value="stocks">Stocks</TabsTrigger>
                  <TabsTrigger value="bonds">Bonds</TabsTrigger>
                  <TabsTrigger value="etfs">ETFs</TabsTrigger>
                  <TabsTrigger value="energy">Energy</TabsTrigger>
                </TabsList>
                <div className="ml-auto flex items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="h-8 md:h-7 lg:h-6 gap-1 text-sm">
                        <FilterIcon className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only">Filter</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="ml-auto flex items-center gap-2 flex-wrap">
                      <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuCheckboxItem checked>High Risk</DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>Medium Risk</DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>Low Risk</DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  {/* select date range - calendar should pop down from the button showing the selected range */}
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" size="sm" className="h-7 gap-1 text-sm">
                        <ListFilterIcon className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only">Date Range</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <Calendar
                        mode="range"
                        selected={date}
                        onSelect={(date) => setDate(date as DateRange)}
                        className="w-72"
                      />
                    </PopoverContent>
                  </Popover>

                  <Button size="sm" variant="outline" className="h-7 gap-1 text-sm">
                    <ImportIcon className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only">Export</span>
                  </Button>
                </div>
              </div>

              <TabsContent value="stocks" className="overflow-x-auto mt-4">
                <div className="w-full overflow-x-auto">
                  <Table className="w-full">
                    <TableHeader className="hidden md:table-header-group">
                      <TableRow>
                        <TableHead>Ticker</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Recommendation</TableHead>
                        <TableHead>Risk</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {stocks.map((stock: any, index: number) => (
                        <React.Fragment key={stock.ticker}>
                          <TableRow className="md:hidden">
                            <TableCell colSpan={6} className="p-4">
                              <div className="flex flex-col space-y-2">
                                <div className="flex justify-between">
                                  <span className="font-bold">{stock.ticker}</span>
                                  <Badge
                                    variant="outline"
                                    className={`${stock.risk === 'Low'
                                        ? 'bg-green-500 text-green-50'
                                        : stock.risk === 'Medium'
                                          ? 'bg-yellow-500 text-yellow-50'
                                          : 'bg-red-500 text-red-50'
                                      }`}
                                  >
                                    {stock.risk}
                                  </Badge>
                                </div>
                                <div>{stock.company}</div>
                                <div className="flex justify-between">
                                  <span>{stock.recommendation}</span>
                                  <span>${stock.price}</span>
                                </div>
                                <StockDialog stock={stock} />
                              </div>
                            </TableCell>
                          </TableRow>
                          <TableRow className="hidden md:table-row">
                            <TableCell>{stock.ticker}</TableCell>
                            <TableCell>{stock.company}</TableCell>
                            <TableCell>{stock.recommendation}</TableCell>
                            <TableCell>
                              <Badge
                                variant="outline"
                                className={`${stock.risk === 'Low'
                                    ? 'bg-green-500 text-green-50'
                                    : stock.risk === 'Medium'
                                      ? 'bg-yellow-500 text-yellow-50'
                                      : 'bg-red-500 text-red-50'
                                  }`}
                              >
                                {stock.risk}
                              </Badge>
                            </TableCell>
                            <TableCell>${stock.price}</TableCell>
                            <TableCell>
                              <StockDialog stock={stock} />
                            </TableCell>
                          </TableRow>
                        </React.Fragment>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>

              <TabsContent value="bonds">
                <div className="w-full overflow-x-auto">
                  <Table className="w-full">
                    <TableHeader className="hidden md:table-header-group">
                      <TableRow>
                        <TableHead>Issuer</TableHead>
                        <TableHead>Rating</TableHead>
                        <TableHead>Yield</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {bonds.map((bond: any, index: number) => (
                        <React.Fragment key={bond.issuer}>
                          <TableRow className="md:hidden">
                            <TableCell colSpan={5} className="p-4">
                              <div className="flex flex-col space-y-2">
                                <div className="flex justify-between">
                                  <span className="font-bold">{bond.issuer}</span>
                                  <Badge
                                    variant="outline"
                                    className={`${bond.rating === 'AAA'
                                        ? 'bg-green-500 text-green-50'
                                        : bond.rating === 'A'
                                          ? 'bg-yellow-500 text-yellow-50'
                                          : 'bg-red-500 text-red-50'
                                      }`}
                                  >
                                    {bond.rating}
                                  </Badge>
                                </div>
                                <div className="flex justify-between">
                                  <span>{bond.yield}</span>
                                  <span>${bond.price}</span>
                                </div>
                                <StockDialog stock={bond} />
                              </div>
                            </TableCell>
                          </TableRow>
                          <TableRow className="hidden md:table-row">
                            <TableCell>{bond.issuer}</TableCell>
                            <TableCell>
                              <Badge
                                variant="outline"
                                className={`${bond.rating === 'AAA'
                                    ? 'bg-green-500 text-green-50'
                                    : bond.rating === 'A'
                                      ? 'bg-yellow-500 text-yellow-50'
                                      : 'bg-red-500 text-red-50'
                                    }`}
                              >
                                {bond.rating}
                              </Badge>
                            </TableCell>
                            <TableCell>{bond.yield}</TableCell>
                            <TableCell>${bond.price}</TableCell>
                            <TableCell>
                              <StockDialog stock={bond} />
                            </TableCell>
                          </TableRow>
                        </React.Fragment>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>

              <TabsContent value="etfs">
                <div className="w-full overflow-x-auto">
                  <Table className="w-full">
                    <TableHeader className="hidden md:table-header-group">
                      <TableRow>
                        <TableHead>Symbol</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Expense Ratio</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {etfs.map((etf: any, index: number) => (
                        <React.Fragment key={etf.symbol}>
                          <TableRow className="md:hidden">
                            <TableCell colSpan={5} className="p-4">
                              <div className="flex flex-col space-y-2">
                                <div className="flex justify-between">
                                  <span className="font-bold">{etf.symbol}</span>
                                  <Badge
                                    variant="outline"
                                    className="bg-green-500 text-green-50"
                                  >
                                    ETF
                                  </Badge>
                                </div>
                                <div>{etf.name}</div>
                                <div className="flex justify-between">
                                  <span>{etf.expenseRatio}</span>
                                  <span>${etf.price}</span>
                                </div>
                                <StockDialog stock={etf} />
                              </div>
                            </TableCell>
                          </TableRow>
                          <TableRow className="hidden md:table-row">
                            <TableCell>{etf.symbol}</TableCell>
                            <TableCell>{etf.name}</TableCell>
                            <TableCell>{etf.expenseRatio}</TableCell>
                            <TableCell>${etf.price}</TableCell>
                            <TableCell>
                              <StockDialog stock={etf} />
                            </TableCell>
                          </TableRow>
                        </React.Fragment>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>

              <TabsContent value="energy">
                <div className="w-full overflow-x-auto">
                  <Table className="w-full">
                    <TableHeader className="hidden md:table-header-group">
                      <TableRow>
                        <TableHead>Symbol</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Rating</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {energy.map((energy: any, index: number) => (
                        <React.Fragment key={energy.symbol}>
                          <TableRow className="md:hidden">
                            <TableCell colSpan={5} className="p-4">
                              <div className="flex flex-col space-y-2">
                                <div className="flex justify-between">
                                  <span className="font-bold">{energy.symbol}</span>
                                  <Badge
                                    variant="outline"
                                    className={`${energy.rating === 'Buy'
                                        ? 'bg-green-500 text-green-50'
                                        : energy.rating === 'Hold'
                                          ? 'bg-yellow-500 text-yellow-50'
                                          : 'bg-red-500 text-red-50'
                                      }`}
                                  >
                                    {energy.rating}
                                  </Badge>
                                </div>
                                <div>{energy.name}</div>
                                <div className="flex justify-between">
                                  <span>${energy.price}</span>
                                </div>
                                <StockDialog stock={energy} />
                              </div>
                            </TableCell>
                          </TableRow>
                          <TableRow className="hidden md:table-row">
                            <TableCell>{energy.symbol}</TableCell>
                            <TableCell>{energy.name}</TableCell>
                            <TableCell>
                              <Badge
                                variant="outline"
                                className={`${energy.rating === 'Buy'
                                    ? 'bg-green-500 text-green-50'
                                    : energy.rating === 'Hold'
                                      ? 'bg-yellow-500 text-yellow-50'
                                      : 'bg-red-500 text-red-50'
                                    }`}
                              >
                                {energy.rating}
                              </Badge>
                            </TableCell>
                            <TableCell>${energy.price}</TableCell>
                            <TableCell>
                              <StockDialog stock={energy} />
                            </TableCell>
                          </TableRow>
                        </React.Fragment>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>

            </Tabs>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Your Account</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-1">
                <div className="text-sm font-medium">Username</div>
                <div>johndoe</div>
              </div>
              <div className="grid gap-1">
                <div className="text-sm font-medium">Email</div>
                <div>johndoe@example.com</div>
              </div>
              <div className="grid gap-1">
                <div className="text-sm font-medium">Subscription</div>
                <div>Premium</div>
              </div>
              <div className="grid gap-1">
                <div className="text-sm font-medium">Expiration Date</div>
                <div>2024-06-30</div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline">Manage Subscription</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Subscription Details</CardTitle>
          </CardHeader>
          <CardContent>
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
            <Button variant="outline">Upgrade Plan</Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}

const StockDialog = ({ stock }: any) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline" size="sm">
        View
      </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-full lg:max-w-[600px]">
      <DialogHeader>
        <DialogTitle>{stock.company} ({stock.ticker})</DialogTitle>
        <DialogDescription>
          Detailed analysis and recommendation for {stock.company}
        </DialogDescription>
      </DialogHeader>
      <ScrollArea className="h-[400px] w-full">
        <div className="p-4 text-sm">
          <h4 className="mb-4 text-lg font-medium leading-none">
            {stock.company} ({stock.ticker}) Recommendation
          </h4>
          <p className="mt-4 leading-7">
            {/* Add detailed analysis here */}
          </p>
        </div>
      </ScrollArea>
      <DialogFooter>
        <Button onClick={() => {}}>Close</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

const stocks = [
  {
    ticker: 'AAPL',
    company: 'Apple Inc.',
    recommendation: 'Buy',
    risk: 'Low',
    price: 145.12,
  },
  {
    ticker: 'AMZN',
    company: 'Amazon.com Inc.',
    recommendation: 'Hold',
    risk: 'Medium',
    price: 3200.00,
  },
  {
    ticker: 'GOOGL',
    company: 'Alphabet Inc.',
    recommendation: 'Sell',
    risk: 'High',
    price: 2500.00,
  },
  {
    ticker: 'MSFT',
    company: 'Microsoft Corporation',
    recommendation: 'Buy',
    risk: 'Low',
    price: 300.00,
  },
  {
    ticker: 'TSLA',
    company: 'Tesla Inc.',
    recommendation: 'Hold',
    risk: 'Medium',
    price: 700.00,
  },
  {
    ticker: 'FB',
    company: 'Meta Platforms Inc.',
    recommendation: 'Sell',
    risk: 'High',
    price: 300.00,
  },
  {
    ticker: 'NVDA',
    company: 'NVIDIA Corporation',
    recommendation: 'Buy',
    risk: 'Low',
    price: 200.00,
  },
  {
    ticker: 'PYPL',
    company: 'PayPal Holdings Inc.',
    recommendation: 'Hold',
    risk: 'Medium',
    price: 100.00,
  },
  {
    ticker: 'NFLX',
    company: 'Netflix Inc.',
    recommendation: 'Sell',
    risk: 'High',
    price: 500.00,
  },
  {
    ticker: 'INTC',
    company: 'Intel Corporation',
    recommendation: 'Buy',
    risk: 'Low',
    price: 50.00,
  },
  {
    ticker: 'CSCO',
    company: 'Cisco Systems Inc.',
    recommendation: 'Hold',
    risk: 'Medium',
    price: 40.00,
  },
  {
    ticker: 'QCOM',
    company: 'Qualcomm Inc.',
    recommendation: 'Sell',
    risk: 'High',
    price: 150.00,
  },
];

const bonds = [
  {
    issuer: 'US Treasury',
    rating: 'AAA',
    yield: '2.5%',
    price: 1000.00,
  },
  {
    issuer: 'Apple Inc.',
    rating: 'A',
    yield: '3.0%',
    price: 1000.00,
  },
  {
    issuer: 'Microsoft Corporation',
    rating: 'A+',
    yield: '2.8%',
    price: 1000.00,
  },
  {
    issuer: 'Amazon.com Inc.',
    rating: 'A-',
    yield: '2.7%',
    price: 1000.00,
  },
  {
    issuer: 'Google LLC',
    rating: 'A',
    yield: '2.9%',
    price: 1000.00,
  },
];

const etfs = [
  {
    symbol: 'VOO',
    name: 'Vanguard S&P 500 ETF',
    expenseRatio: '0.03%',
    price: 400.00,
  },
  {
    symbol: 'VTI',
    name: 'Vanguard Total Stock Market ETF',
    expenseRatio: '0.04%',
    price: 200.00,
  },
  {
    symbol: 'VUG',
    name: 'Vanguard Growth ETF',
    expenseRatio: '0.05%',
    price: 150.00,
  },
  {
    symbol: 'VTV',
    name: 'Vanguard Value ETF',
    expenseRatio: '0.06%',
    price: 100.00,
  },
  {
    symbol: 'VWO',
    name: 'Vanguard FTSE Emerging Markets ETF',
    expenseRatio: '0.10%',
    price: 50.00,
  },
];

// Energy futures recommendations. this should show intraday prices and recommendations as well as future price predictions. These will be exchanged traded commodities (ETCs) or futures contracts listed on exchanges like NYMEX or ICE.
const energy = [
  {
    symbol: 'CL',
    name: 'Crude Oil Futures',
    rating: 'Buy',
    price: 70.00,
  },
  {
    symbol: 'NG',
    name: 'Natural Gas Futures',
    rating: 'Hold',
    price: 3.50,
  },
  {
    symbol: 'RB',
    name: 'RBOB Gasoline Futures',
    rating: 'Sell',
    price: 2.00,
  },
  {
    symbol: 'HO',
    name: 'Heating Oil Futures',
    rating: 'Buy',
    price: 2.50,
  },
  {
    symbol: 'BZ',
    name: 'Brent Crude Oil Futures',
    rating: 'Hold',
    price: 75.00,
  },
  {
    symbol: 'NG',
    name: 'Natural Gas Futures',
    rating: 'Sell',
    price: 3.00,
  },
  {
    symbol: 'RB',
    name: 'RBOB Gasoline Futures',
    rating: 'Buy',
    price: 2.10,
  },
  {
    symbol: 'HO',
    name: 'Heating Oil Futures',
    rating: 'Hold',
    price: 2.40,
  },
];
