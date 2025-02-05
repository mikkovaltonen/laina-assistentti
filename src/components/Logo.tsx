'use client'

import React from 'react'

export default function Logo() {
  return (
    <div className="flex items-center gap-2" data-testid="logo-container">
      <div className="relative w-8 h-8" data-testid="logo-icon">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg transform -rotate-12"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-blue-800 rounded-lg transform rotate-12 opacity-75"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
          L
        </div>
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
        Laina-assistentti
      </span>
    </div>
  )
} 