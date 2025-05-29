import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'DynaMaison - Solutions photovoltaïques et aménagements extérieurs',
  description: 'Spécialistes en panneaux solaires, bornes de recharge, pergolas, carports, poolhouses et cuisines extérieures. Charles et Mohamed, électriciens de métier dans le Haut-Jura.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-inter">
        <Header />
        {children}
      </body>
    </html>
  )
}
