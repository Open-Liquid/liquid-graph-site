import type { Metadata } from "next"
import "../../globals.css"
import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { GitGraphIcon, MenuIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
// Import the fonts from Google Fonts (or adapt if hosting locally)
import { DM_Serif_Display, Inter } from "next/font/google"

// Configure the fonts
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
        <header className="w-full hidden md:flex md:fixed px-4 lg:px-6 h-16 items-center justify-between bg-[#F6F3EE] border-b-2 border-black z-[999]">
          <Link href="/" className="flex items-center justify-center" prefetch={false}>
            <GitGraphIcon className="h-8 w-8 text-black" />
            <span className="ml-2 text-xl font-bold">Liquid Graph</span>
          </Link>
          <nav className="ml-auto flex gap-6">
            {["Subscribe", "Strategies", "Performance", "About"].map((item) => (
              <Link
                key={item}
                href={item === "Subscribe" ? "/subscribe" : `/#${item.toLowerCase()}`}
                className={`${inter.className} text-sm font-medium hover:underline underline-offset-4`}
                prefetch={false}
              >
                {item}
              </Link>
            ))}
          </nav>
        </header>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="w-12 h-12 fixed top-8 right-4 z-50 shadow-lg md:hidden border-2 border-black rounded-none bg-white hover:bg-gray-100"
            >
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#F6F3EE] border-l-2 border-black p-0">
            <nav className="flex flex-col gap-4 p-6">
              <Link href="/" className="flex items-center justify-start mb-6" prefetch={false}>
                <GitGraphIcon className="h-8 w-8 text-black" />
                <span className="ml-2 text-xl font-bold">Liquid Graph</span>
              </Link>
              {["Insight", "Strategies", "Performance"].map((item) => (
                <Link
                  key={item}
                  href={item === "Insight" ? "/insight" : `/#${item.toLowerCase()}`}
                  className={`${inter.className} text-lg font-medium hover:underline underline-offset-4`}
                  prefetch={false}
                >
                  {item}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <main className="pt-16 md:pt-24">{children}</main>

        <footer className="flex flex-col gap-4 sm:flex-row py-8 w-full items-center px-4 md:px-6 border-t-2 border-black bg-[#F6F3EE]">
          <p className={`${inter.className} text-sm text-black`}>
            &copy; {new Date().getFullYear()} Liquid Graph. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-6">
            {["Terms of Service", "Privacy Policy"].map((item) => (
              <Link
                key={item}
                href="#"
                className={`${inter.className} text-sm hover:underline underline-offset-4`}
                prefetch={false}
              >
                {item}
              </Link>
            ))}
          </nav>
        </footer>
      </body>
    </html>
  )
}
