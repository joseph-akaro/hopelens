import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next"
import { auth } from "@/lib/auth/server";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic"


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

    const { data: session } = await auth.getSession()

    if (!session?.user) {
    redirect("/auth/sign-in") //
    }

  return (
    < html lang="en" suppressHydrationWarning={true} className={roboto.className} >
     <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
          >
            {children}
          </ThemeProvider>
        </body>
        <Analytics />
    </html>
  );
}
