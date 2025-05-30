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
  title: 'DynaMaison - Solutions photovoltaïques',
  description: 'Électriciens spécialisés dans les solutions renouvelables dans le Haut-Jura',
  icons: {
    icon: '/images/DynaMaisonLogo.png',
    shortcut: '/images/logo/logo-dynamaison.png',
    apple: '/images/logo/logo-dynamaison.png',
  },
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
