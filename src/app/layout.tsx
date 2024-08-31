import { Metadata } from "next"
import '../../styles/globals.css'
import ThemeProvider  from "./provider"

export const metadata: Metadata = {
    title: 'Crypto Trading Simulator',
    description: 'A crypto trading simulator for learning how to trade cryptocurrencies',
  }

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
         <body >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem >   
            {children}
        </ThemeProvider>
    </body>
      </html>
    )
  }