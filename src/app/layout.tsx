import './globals.css'
import { Inter } from 'next/font/google'
import Nav from './components/Nav'
const inter = Inter({ subsets: ['latin'] })
import RecoilProvider from './tools/RecoilProvider'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <RecoilProvider>
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        
        {children}
      </body>
    </html>
    </RecoilProvider>
  )
}
