import { SpeedInsights } from "@vercel/speed-insights/next"

import "./globals.css"
import NavBar from "./components/Navbar/NavBar"
import Footer from "./components/Footer/Footer"
import { Poppins } from "next/font/google"
import {  MenuProvider } from "./context/context"

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin']
})

export const metadata = {
  title: 'PixelPerfekt Web Design Studio | Creative Digital Experts',
  description: 'Welcome to PixelPerfekt, your trusted web design studio in Thessaloniki, Greece. Experience custom web design, development, brand identity, and animation services crafted to elevate your brand. With a client-first approach and unmatched attention to detail, PixelPerfekt brings your digital vision to life with precision and creativity.',
  alternates: {
    canonical: 'https://www.pixelperfekt.gr/',
  },
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={poppins.className}>
        <MenuProvider>
          <NavBar />
          {children}
          <Footer />
        </MenuProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
