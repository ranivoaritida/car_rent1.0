import { Footer, Navbar } from '@/components'
import './globals.css'


export const metadata = {
  title: 'Car Hub',
  description: 'Discover the best car in Madagascar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relatice">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
