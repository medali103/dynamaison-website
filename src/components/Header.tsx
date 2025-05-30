'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Panneaux solaires', href: '/panneaux-solaires' },
    { name: 'Bornes de recharge', href: '/bornes-recharge' },
    { name: 'Carports', href: '/carports' },
    { name: 'Pergolas', href: '/pergolas' },
    { name: 'Poolhouses', href: '/poolhouses' },
    { name: 'Cuisines extérieures', href: '/cuisines-exterieures' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-2 max-w-full">
        <div className="flex justify-between items-center py-2">
          {/* Logo with Image */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0 mr-4">
            <Image 
              src="/images/DynaMaisonLogo.png" 
              alt="DynaMaison Logo" 
              width={150}
              height={150}
              className="rounded"
            />
          </Link>

          {/* Desktop Menu - All items visible */}
          <nav className="hidden lg:flex items-center space-x-3 flex-1 justify-center">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-solar-blue font-medium transition-colors whitespace-nowrap text-sm px-1"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex-shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Menu</span>
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block w-full h-0.5 bg-gray-700 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-full h-0.5 bg-gray-700 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-full h-0.5 bg-gray-700 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-gray-100">
            <div className="grid grid-cols-2 gap-2 pt-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 px-2 text-gray-700 hover:text-solar-blue font-medium transition-colors text-sm hover:bg-gray-50 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
