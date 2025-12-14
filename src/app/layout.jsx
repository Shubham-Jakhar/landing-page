import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import ThemeProvider from "@/components/theme-provider"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Sammunat - Digital Solutions That Drive Business Growth",
  description:
    "Sammunat LLC is a digital solutions company helping startups and businesses grow through modern technology, clean design, and scalable systems.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
