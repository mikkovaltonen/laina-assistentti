import React from 'react'
import { render, screen } from '@testing-library/react'
import ServicePage from '../ServicePage'

describe('ServicePage', () => {
  const mockProps = {
    name: "Test Service",
    stars: 4,
    overview: "Test overview",
    significance: "Test significance",
    usability: "Test usability",
    strengths: "Test strengths",
    summary: "Test summary"
  }

  it('renders service name correctly', () => {
    render(<ServicePage {...mockProps} />)
    expect(screen.getByText(/^Test Service/)).toBeInTheDocument()
  })

  it('renders all sections', () => {
    render(<ServicePage {...mockProps} />)
    expect(screen.getByText('Test overview')).toBeInTheDocument()
    expect(screen.getByText('Test significance')).toBeInTheDocument()
    expect(screen.getByText('Test usability')).toBeInTheDocument()
    expect(screen.getByText('Test strengths')).toBeInTheDocument()
    expect(screen.getByText('Test summary')).toBeInTheDocument()
  })

  it('renders correct number of stars', () => {
    render(<ServicePage {...mockProps} />)
    const stars = screen.getAllByTestId('star-icon')
    expect(stars).toHaveLength(4)
  })

  it('handles missing props gracefully', () => {
    const minimalProps = {
      name: "Test Service",
      stars: 3
    }
    render(<ServicePage {...minimalProps} />)
    expect(screen.getByText(/^Test Service/)).toBeInTheDocument()
    const stars = screen.getAllByTestId('star-icon')
    expect(stars).toHaveLength(3)
  })
}) 