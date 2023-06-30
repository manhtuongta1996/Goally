import './globals.css'
import { Providers } from "./providers";
import {Poppins} from "next/font/google"

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  variable: "--font-poppins"
})
console.log(poppins)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`mx-4 md:mx-48 xl:mx-96 ${poppins.variable}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
