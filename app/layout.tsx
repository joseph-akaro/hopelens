import { NeonAuthUIProvider } from '@neondatabase/auth/react';
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next"

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "HopeLens",
  description: "A dashboard for tracking and visualizing the impact of OneHope's projects in Eastern Africa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const authclient = getAuthClient();

  return (
    < html lang="en" suppressHydrationWarning={true} className={roboto.className} >
     <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
          <NeonAuthUIProvider
            authClient={authclient} 
            redirectTo="/"
            emailOTP={true}
            social={{ providers: ['google']  }} 
            credentials={{ forgotPassword: true }} 
            organization
          >
           {children}
          </NeonAuthUIProvider>
          </ThemeProvider>
        </body>
        <Analytics />
    </html>
  );
}
