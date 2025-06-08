import { Montserrat } from "next/font/google";
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import ScrollToTopButton from "./components/sub/ScrollToTopButton";


config.autoAddCss = false

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300","400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} `}>
        <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
        />
      </head>
      <body className={montserrat.className}>

        {children}
        <ScrollToTopButton />
       
      </body>
    </html>
  );
}