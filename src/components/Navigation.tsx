'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import Logo from './Logo'

const services = [
  { name: 'Etua.fi', path: '/vertailu/etua' },
  { name: 'Sortter.fi', path: '/vertailu/sortter' },
  { name: 'Vertaalainat.fi', path: '/vertailu/vertaalainat' },
  { name: 'Lainojenvertailu.fi', path: '/vertailu/lainojenvertailu' },
  { name: 'Lainakone.fi', path: '/vertailu/lainakone' },
  { name: 'Lainaopas.fi', path: '/vertailu/lainaopas' },
  { name: 'Zmarta.fi', path: '/vertailu/zmarta' },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <header className="bg-white border-b border-gray-100">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="hover:opacity-90 transition-opacity">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/paras-vertailupalvelu"
              className={`px-4 py-2 rounded-lg transition-all ${
                pathname === '/paras-vertailupalvelu'
                  ? 'bg-blue-50 text-blue-600 font-medium'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Paras vertailupalvelu
            </Link>

            <div className="relative group">
              <button className="flex items-center px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-all group">
                <span>Vertailupalvelut</span>
                <ChevronDownIcon className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-200" />
              </button>

              <div className="absolute left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      href={service.path}
                      className={`flex px-4 py-2 text-sm ${
                        pathname === service.path
                          ? 'bg-blue-50 text-blue-600 font-medium'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/tietoa-meista"
              className={`px-4 py-2 rounded-lg transition-all ${
                pathname === '/tietoa-meista'
                  ? 'bg-blue-50 text-blue-600 font-medium'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Tietoa meistä
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
} 