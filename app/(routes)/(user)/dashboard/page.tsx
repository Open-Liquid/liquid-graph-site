"use client";

import { useState } from "react";
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
                <CardTitle>Your Recommendations</CardTitle>
                <CardDescription>View and manage your personalized financial recommendations.</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="stocks">
                  <div className="flex items-center">
                    <TabsList>
                      <TabsTrigger value="stocks">Stocks</TabsTrigger>
                      <TabsTrigger value="bonds">Bonds</TabsTrigger>
                      <TabsTrigger value="real-estate">Real Estate</TabsTrigger>
                    </TabsList>
                    <div className="ml-auto flex items-center gap-2">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm" className="h-7 gap-1 text-sm">
                            <FilterIcon className="h-3.5 w-3.5" />
                            <span className="sr-only sm:not-sr-only">Filter</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
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
                  <TabsContent value="stocks">
                    <Table>
                      <TableHeader>
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
                        <TableRow>
                          <TableCell>AAPL</TableCell>
                          <TableCell>Apple Inc.</TableCell>
                          <TableCell>Buy</TableCell>
                          <TableCell>
                            <Badge variant="outline" className="bg-green-500 text-green-50">
                              Low
                            </Badge>
                          </TableCell>
                          <TableCell>$150.00</TableCell>
                          <TableCell>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" size="sm">
                                  View
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[600px]">
                                <DialogHeader>
                                  <DialogTitle>Apple Inc. (AAPL)</DialogTitle>
                                  <DialogDescription>
                                    Detailed analysis and recommendation for Apple Inc.
                                  </DialogDescription>
                                </DialogHeader>
                                <DialogContent>
                                  <ScrollArea className="h-[400px] w-full">
                                    <div className="p-4 text-sm">
                                      <h4 className="mb-4 text-lg font-medium leading-none">
                                        Apple Inc. (AAPL) Recommendation
                                      </h4>
                                      <p className="mt-4 leading-7">
                                        Apple Inc. is a leading technology company known for its innovative products and
                                        services. Our analysis suggests that AAPL is a strong buy recommendation due to
                                        its consistent financial performance, dominant market position, and promising
                                        future growth prospects.
                                      </p>
                                      <p className="mt-4 leading-7">
                                        The company's diversified product portfolio, including the iPhone, iPad, Mac,
                                        and various services, provides a solid foundation for long-term growth.
                                        Additionally, Apple's focus on user experience, ecosystem integration, and brand
                                        loyalty make it a compelling investment opportunity.
                                      </p>
                                      <p className="mt-4 leading-7">
                                        We believe AAPL is well-positioned to capitalize on emerging technologies and
                                        market trends, such as 5G, augmented reality, and the growing demand for premium
                                        consumer electronics and services.
                                      </p>
                                    </div>
                                  </ScrollArea>
                                </DialogContent>
                                <DialogFooter>
                                  <div>
                                    <Button>Close</Button>
                                  </div>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>TSLA</TableCell>
                          <TableCell>Tesla Inc.</TableCell>
                          <TableCell>Hold</TableCell>
                          <TableCell>
                            <Badge variant="outline" className="bg-yellow-500 text-yellow-50">
                              Medium
                            </Badge>
                          </TableCell>
                          <TableCell>$300.00</TableCell>
                          <TableCell>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" size="sm">
                                  View
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[600px]">
                                <DialogHeader>
                                  <DialogTitle>Tesla Inc. (TSLA)</DialogTitle>
                                  <DialogDescription>
                                    Detailed analysis and recommendation for Tesla Inc.
                                  </DialogDescription>
                                </DialogHeader>
                                <DialogContent>
                                  <ScrollArea className="h-[400px] w-full">
                                    <div className="p-4 text-sm">
                                      <h4 className="mb-4 text-lg font-medium leading-none">
                                        Tesla Inc. (TSLA) Recommendation
                                      </h4>
                                      <p className="mt-4 leading-7">
                                        Tesla Inc. is a pioneering electric vehicle (EV) manufacturer that has disrupted
                                        the automotive industry. Our analysis suggests a "Hold" recommendation for TSLA
                                        due to the company's high valuation, increasing competition, and potential
                                        regulatory risks.
                                      </p>
                                      <p className="mt-4 leading-7">
                                        While Tesla has established itself as a leader in the EV market, the company
                                        faces challenges in maintaining its competitive edge as traditional automakers
                                        ramp up their own EV offerings. Additionally, the stock's high valuation may
                                        limit its upside potential in the short to medium term.
                                      </p>
                                      <p className="mt-4 leading-7">
                                        However, we believe Tesla's long-term growth potential remains strong, driven by
                                        its technological innovations, brand loyalty, and the global shift towards
                                        sustainable transportation. Investors should closely monitor the company's
                                        performance and industry dynamics before making any investment decisions.
                                      </p>
                                    </div>
                                  </ScrollArea>
                                </DialogContent>
                                <DialogFooter>
                                  <div>
                                    <Button>Close</Button>
                                  </div>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>AMZN</TableCell>
                          <TableCell>Amazon.com, Inc.</TableCell>
                          <TableCell>Sell</TableCell>
                          <TableCell>
                            <Badge variant="outline" className="bg-red-500 text-red-50">
                              High
                            </Badge>
                          </TableCell>
                          <TableCell>$120.00</TableCell>
                          <TableCell>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" size="sm">
                                  View
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[600px]">
                                <DialogHeader>
                                  <DialogTitle>Amazon.com, Inc. (AMZN)</DialogTitle>
                                  <DialogDescription>
                                    Detailed analysis and recommendation for Amazon.com, Inc.
                                  </DialogDescription>
                                </DialogHeader>
                                <DialogContent>
                                  <ScrollArea className="h-[400px] w-full">
                                    <div className="p-4 text-sm">
                                      <h4 className="mb-4 text-lg font-medium leading-none">
                                        Amazon.com, Inc. (AMZN) Recommendation
                                      </h4>
                                      <p className="mt-4 leading-7">
                                        Amazon.com, Inc. is a global e-commerce and technology giant that has
                                        transformed the retail industry. However, our analysis suggests a "Sell"
                                        recommendation for AMZN due to concerns about the company's long-term
                                        profitability, increasing regulatory
                                      </p>
                                    </div>
                                  </ScrollArea>
                                </DialogContent>
                              </DialogContent>
                            </Dialog>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
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
