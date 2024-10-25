
import "../styles/globals.css";

import Header from "@/components/partials/Header";
import Footer from "@/components/partials/Footer";
import GoogleAnalytics from "@/components/gtag/GoogleAnalytics";
import meta from "@/data/metadata"
import { Metadata } from "next";

//Meta data
export const metadata: Metadata = meta

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      
      <body>
          {process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
            <GoogleAnalytics ga_id= 
            {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
          ) : null}
        <Header />
        
          {children}
      
        <Footer />
      </body>
      
    </html>
  )
}
