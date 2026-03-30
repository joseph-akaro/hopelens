export const dynamic = "force-dynamic"

import type { Metadata } from "next";
import { Roboto, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { Providers } from "./provider";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";



const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "HopeLens",
  description: "A dashboard for tracking and visualizing the impact of OneHope's projects in Eastern Africa.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    < html lang="en" suppressHydrationWarning={true} className={cn(roboto.className, "font-sans", inter.variable)} >
     <head />
        <body>
          <Providers>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
              {children}
            </ThemeProvider>
          </Providers>
        </body>
        <Analytics />
    </html>
  );
}
