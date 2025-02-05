import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Logo from '../Logo'

describe('Logo', () => {
  it('renders logo with correct text', () => {
    render(<Logo />)
    expect(screen.getByText('Laina-assistentti')).toBeInTheDocument()
  })

  it('renders logo with correct structure', () => {
    render(<Logo />)
    
    // Tarkistetaan että logo-container on olemassa
    const container = screen.getByTestId('logo-container')
    expect(container).toBeInTheDocument()
    expect(container).toHaveClass('flex', 'items-center', 'gap-2')

    // Tarkistetaan että logo-ikoni on olemassa
    const icon = screen.getByTestId('logo-icon')
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveClass('relative', 'w-8', 'h-8')

    // Tarkistetaan että L-kirjain on olemassa ja sen container on oikein tyylitelty
    const letterContainer = screen.getByText('L').closest('div')
    expect(letterContainer).toHaveClass('absolute', 'inset-0', 'flex', 'items-center', 'justify-center', 'text-white', 'font-bold', 'text-lg')

    // Tarkistetaan että teksti on oikein tyylitelty
    const text = screen.getByText('Laina-assistentti')
    expect(text).toHaveClass('text-2xl', 'font-bold', 'bg-gradient-to-r', 'from-blue-600', 'to-blue-800', 'bg-clip-text', 'text-transparent')
  })
}) 