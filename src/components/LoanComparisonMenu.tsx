'use client'
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

export default function LoanComparisonMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 hover:text-blue-200"
      >
        Lainavertailut
        <ChevronDownIcon className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
          <a href="/etua" className="block px-4 py-2 hover:bg-blue-50 text-gray-700 hover:text-blue-700">
            Etua.fi
          </a>
          <a href="/vertaalainat" className="block px-4 py-2 hover:bg-blue-50 text-gray-700 hover:text-blue-700">
            Vertaalainat.fi
          </a>
          <a href="/lainojenvertailu" className="block px-4 py-2 hover:bg-blue-50 text-gray-700 hover:text-blue-700">
            Lainojenvertailu.fi
          </a>
          <a href="/lainakone" className="block px-4 py-2 hover:bg-blue-50 text-gray-700 hover:text-blue-700">
            Lainakone.fi
          </a>
          <a href="/lainaopas" className="block px-4 py-2 hover:bg-blue-50 text-gray-700 hover:text-blue-700">
            Lainaopas.fi
          </a>
        </div>
      )}
    </div>
  )
} 