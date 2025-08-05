// import Header from '@/Components/Header'
import { Inter } from "next/font/google";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Home1/Header";
import Footer from "@/Components/Home1/Footer";
import CallButton from "@/Components/CallButton";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["800"],
  display: "swap",
  variable: "--font-bricolage",
});

export const metadata = {
  title: "Landscaping Sydney By GTS | Beautiful Lawns, Stunning Yards",
  description:
    "Expert landscaping, turf, fencing & garden design services for homes & businesses in Sydney. Get a free quote today! <a href='https://www.landscapinggts.com.au/Services/'>Learn More</a>",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16768438691"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16768438691');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <CallButton />
        <Footer />
      </body>
    </html>
  );
}
