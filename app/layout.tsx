import './globals.css'
import {Poppins} from "@next/font/google"
import NavBar from '@/components/NavBar'
import SideBar from '@/components/SideBar'
const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: "--font-poppins"
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`mx-4 md:mx-48 xl:mx-60 ${poppins.className}`}>
          <NavBar />
          <SideBar />
          {children}
      </body>
    </html>
  )
}
