import './globals.css'
import {Poppins} from "next/font/google"
import NavBar from '@/components/NavBar'
import SideBar from '@/components/SideBar'
import QueryProvider from '@/components/query-provider/QueryProvider'
const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: "--font-poppins"
})
export default function RootLayout({
  children
}) {
  return (
    <html lang="en">
      <body className={`mx-4 md:mx-48 xl:mx-60 ${poppins.className}`}>
        <QueryProvider>
          <NavBar />
          <SideBar />
          {children}
        </QueryProvider>
      </body>
    </html>
  )
}
