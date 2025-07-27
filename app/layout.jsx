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
  title: 'PixelPerfekt | Web & Brand Design Studio',
  description: 'Ready to stand out? At PixelPerfekt, we’re more than just designers — we’re storytellers, strategists, and creators. We build custom websites and brand identities that feel uniquely you. From sharp design to smooth animations, every pixel is designed with authenticity and precision to help your brand break through the noise.',
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
