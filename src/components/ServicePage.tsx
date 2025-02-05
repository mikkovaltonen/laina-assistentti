'use client'
import React from 'react'
import StarRating from './StarRating'
import { CheckCircleIcon, StarIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

interface ServicePageProps {
  name: string
  stars: number
  overview?: string
  significance?: string
  usability?: string
  strengths?: string
  summary?: string
  applyUrl?: string
}

export default function ServicePage({
  name,
  stars,
  overview,
  significance,
  usability,
  strengths,
  summary,
  applyUrl,
}: ServicePageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {name} – {stars} tähteä
          </h1>
        </header>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Yleiskuvaus ja kilpailutuslaajuus
            </h2>
            <p className="text-gray-600 leading-relaxed">{overview}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Merkittävyys ja tutkimustiedot
            </h2>
            <p className="text-gray-600 leading-relaxed">{significance}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Käyttöliittymä ja käytettävyys
            </h2>
            <p className="text-gray-600 leading-relaxed">{usability}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Vahvuudet ja kehitysehdotukset
            </h2>
            <p className="text-gray-600 leading-relaxed">{strengths}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Yhteenveto
            </h2>
            <p className="text-gray-600 leading-relaxed">{summary}</p>
          </section>

          {applyUrl && (
            <div className="mt-8">
              <a
                href={applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
              >
                Hae lainaa
                <ArrowTopRightOnSquareIcon className="w-5 h-5" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 