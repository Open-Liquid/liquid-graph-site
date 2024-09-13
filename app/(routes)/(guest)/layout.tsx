import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { GitGraphIcon, MenuIcon } from "lucide-react"
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Liquid Graph",
  description: "Quantifying the human consciousness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="w-full hidden md:flex md:fixed px-4 lg:px-6 h-14 flex items-center justify-between bg-muted z-[999]">
          <Link href="/" className="flex items-center justify-center" prefetch={false}>
            <GitGraphIcon className="h-6 w-6" />
            <span className="sr-only">Liquid Graph</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="/insight" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Insight
            </Link>
            <Link href="/#strategies" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Strategies
            </Link>
            <Link href="/#performance" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Performance
            </Link>
            <Link href="/#about" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              About
            </Link>
          </nav>
        </header>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant={"default"} className="w-12 h-12 fixed bottom-8 right-4 z-50 shadow-lg md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Liquid Graph</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 p-4">
              {/* logo */}
              <Link href="/" className="flex items-center justify-start mb-4" prefetch={false}>
                <GitGraphIcon className="h-6 w-6" />
                <span className="sr-only">Liquid Graph</span>
              </Link>

              <Link href="/insight" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                Insight
              </Link>
              <Link href="/#strategies" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                Strategies
              </Link>
              <Link href="/#performance" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                Performance
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        {children}

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
      </body>
    </html>
  );
}
