import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import CompanyLogo from '../CompanyLogo'

describe('CompanyLogo', () => {
  const testCases = [
    { name: 'etua.fi', expectedLogo: 'etua.svg' },
    { name: 'lainakone', expectedLogo: 'lainakone.svg' },
    { name: 'Lainojen Vertailu', expectedLogo: 'lainojen-vertailu-logo.jpg' },
    { name: 'vertaalainat.fi', expectedLogo: 'vertaalainat.svg' },
    { name: 'lainaopas', expectedLogo: 'lainaopas.svg' },
    { name: 'zmarta.fi', expectedLogo: 'zmarta_logo.png' },
    { name: 'unknown company', expectedLogo: null },
  ]

  testCases.forEach(({ name, expectedLogo }) => {
    test(`renders ${name} correctly`, () => {
      render(<CompanyLogo name={name} />)

      if (expectedLogo) {
        const img = screen.getByRole('img')
        expect(img).toBeInTheDocument()
        expect(img).toHaveAttribute('src', `/images/logos/${expectedLogo}`)
        expect(img).toHaveAttribute('alt', `${name.replace('.fi', '').trim()} logo`)
        expect(img.parentElement).toHaveClass('flex', 'items-center', 'justify-center')
        expect(img).toHaveClass('w-32', 'h-12', 'object-contain')
      } else {
        // For unknown companies, expect text fallback
        const textElement = screen.getByText(name.replace('.fi', '').trim())
        expect(textElement).toBeInTheDocument()
        expect(textElement).toHaveClass('font-bold', 'text-lg', 'text-blue-800')
      }
    })
  })

  test('handles empty name gracefully', () => {
    render(<CompanyLogo name="" />)
    const element = screen.getByTestId('company-logo-text')
    expect(element).toHaveClass('font-bold', 'text-lg', 'text-blue-800')
    expect(element).toBeEmptyDOMElement()
  })
}) 