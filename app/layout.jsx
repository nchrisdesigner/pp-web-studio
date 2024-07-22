import { SpeedInsights } from "@vercel/speed-insights/next"

import { Poppins } from "next/font/google"
import "./globals.css"
import NavBar from "./components/Navbar/NavBar"
import Footer from "./components/Footer/Footer"

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets:['latin']
})

export const metadata = {
  title: 'Pixel Perfekt - Web Design Studio',
  description: 'Welcome to Pixel Perfekt - Your Web Design Experts in Thessaloniki, Greece. Elevate your brand with with our client-focused approach, innovative design, and pixel-perfect precision. Discover personalized web design, development, logo, and video motion services crafted for your unique needs.Opt for Pixel Perfekt for a digital adventure that exceeds pixel perfection.',
}

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavBar />
        {children}
        <Footer />
        <SpeedInsights />
        </body>
    </html>
  );
}
