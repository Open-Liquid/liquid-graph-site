import type { Metadata } from "next"
import "../../globals.css"
import Link from "next/link"
import Image from "next/image"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { BarChart3Icon, BellIcon, FileTextIcon, HomeIcon, MenuIcon, Package2Icon, PieChartIcon, SearchIcon, SettingsIcon, UserIcon, UsersIcon } from "lucide-react"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
// Import the fonts from Google Fonts (or adapt if hosting locally)
import { DM_Serif_Display, Inter } from "next/font/google"

const dmSerifDisplay = DM_Serif_Display({ subsets: ["latin"], weight: ["400"] })
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Liquid Graph",
  description: "Quantifying the financial markets",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${dmSerifDisplay.className} bg-[#F6F3EE] text-black`}>
        <div className="flex min-h-screen w-full flex-col">
          <aside className="fixed inset-y-0 left-0 z-10 hidden w-16 flex-col border-r-2 border-black bg-[#F6F3EE] sm:flex">
            <nav className="flex flex-col items-center gap-6 px-2 py-8">
              <TooltipProvider>
                <Link
                  href="/"
                  className="flex h-10 w-10 items-center justify-center rounded-none border-2 border-black bg-black text-white transition-all hover:bg-white hover:text-black"
                  prefetch={false}
                >
                  <BarChart3Icon className="h-6 w-6" />
                  <span className="sr-only">Liquid Graph</span>
                </Link>
                {[
                  { icon: HomeIcon, label: "Dashboard", href: "/" },
                  { icon: PieChartIcon, label: "Portfolio", href: "/portfolio" },
                  { icon: FileTextIcon, label: "Reports", href: "/reports" },
                  { icon: BellIcon, label: "Alerts", href: "/alerts" },
                  { icon: Package2Icon, label: "Recommendations", href: "/recommendations" },
                  { icon: UsersIcon, label: "Collaboration", href: "/collaboration" },
                ].map((item) => (
                  <Tooltip key={item.label}>
                    <TooltipTrigger asChild>
                      <Link
                        href={item.href}
                        className="flex h-10 w-10 items-center justify-center rounded-none border-2 border-black transition-all hover:bg-black hover:text-white"
                        prefetch={false}
                      >
                        <item.icon className="h-5 w-5" />
                        <span className="sr-only">{item.label}</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="border-2 border-black bg-[#F6F3EE]">
                      {item.label}
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-6 px-2 py-8">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="/settings"
                      className="flex h-10 w-10 items-center justify-center rounded-none border-2 border-black transition-all hover:bg-black hover:text-white"
                      prefetch={false}
                    >
                      <SettingsIcon className="h-5 w-5" />
                      <span className="sr-only">Settings</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="border-2 border-black bg-[#F6F3EE]">
                    Settings
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </nav>
          </aside>

          <div className="flex flex-col sm:pl-16">
            <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b-2 border-black bg-[#F6F3EE] px-4 sm:px-6">
              <Sheet>
                <SheetTrigger asChild>
                  <Button size="icon" variant="outline" className="sm:hidden border-2 border-black rounded-none">
                    <MenuIcon className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] border-r-2 border-black bg-[#F6F3EE] p-0">
                  <nav className="grid gap-2 p-4">
                    <Link
                      href="/"
                      className="flex h-10 items-center rounded-none border-2 border-black bg-black px-4 text-lg font-semibold text-white"
                      prefetch={false}
                    >
                      <BarChart3Icon className="mr-2 h-5 w-5" />
                      Liquid Graph
                    </Link>
                    {[
                      { icon: HomeIcon, label: "Dashboard", href: "/" },
                      { icon: PieChartIcon, label: "Portfolio", href: "/portfolio" },
                      { icon: FileTextIcon, label: "Reports", href: "/reports" },
                      { icon: BellIcon, label: "Alerts", href: "/alerts" },
                      { icon: Package2Icon, label: "Recommendations", href: "/recommendations" },
                      { icon: UsersIcon, label: "Collaboration", href: "/collaboration" },
                      { icon: SettingsIcon, label: "Settings", href: "/settings" },
                    ].map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="flex items-center rounded-none border-2 border-black px-4 py-2 text-lg transition-colors hover:bg-black hover:text-white"
                        prefetch={false}
                      >
                        <item.icon className="mr-2 h-5 w-5" />
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>

              <Breadcrumb className={`hidden md:flex ${inter.className}`}>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href="/" prefetch={false}>
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
              <div className="relative ml-auto flex-1 md:w-auto md:flex-initial">
                <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className={`${inter.className} w-full rounded-none border-2 border-black bg-white pl-10 md:w-[300px]`}
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="h-10 w-10 rounded-none border-2 border-black p-0">
                    <Image
                      src="/placeholder.svg"
                      width={36}
                      height={36}
                      alt="Avatar"
                      className="h-full w-full object-cover"
                    />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 rounded-none border-2 border-black bg-[#F6F3EE]">
                  <DropdownMenuLabel className={inter.className}>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-black" />
                  <DropdownMenuItem className={inter.className}>Profile</DropdownMenuItem>
                  <DropdownMenuItem className={inter.className}>Settings</DropdownMenuItem>
                  <DropdownMenuItem className={inter.className}>Support</DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-black" />
                  <DropdownMenuItem className={inter.className}>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </header>

            <main className="flex-1 p-4 sm:p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
