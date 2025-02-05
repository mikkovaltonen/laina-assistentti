'use client'
import React, { useState } from 'react'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import StarRating from '@/components/StarRating'
import CompanyLogo from '@/components/CompanyLogo'

// Päivitetään lainatarjoukset
const loanOffers = [
  {
    id: 1,
    name: "Etua.fi",
    logo: "/images/logos/etua.svg",
    stars: 5,
    ratingReason: "Etua.fi kilpailuttaa yli 20 eri pankin ja rahoituslaitoksen lainatarjouksia, mukaan lukien alan suurimmat ja tunnetuimmat toimijat. Palvelun laaja kattavuus ja kyky tuoda esiin useiden merkittävien lainanantajien tarjoukset mahdollistavat käyttäjälle kilpailukykyiset ja edulliset lainaehdot.",
    interestRateMin: 4.0,
    interestRateMax: 20.0,
    monthlyFee: 4,
    setupFee: 90,
    minAmount: 500,
    maxAmount: 70000,
    minYears: 1,
    maxYears: 18,
    rating: 9.5,
    applyUrl: "https://www.etua.fi",
    description: "Suomen ensimmäinen ja johtava lainavertailupalvelu kilpailuttaa yli 20 eri pankin ja rahoituslaitoksen lainatarjoukset. Käyttäjä täyttää yhden hakemuksen ja saa nopeasti henkilökohtaiset tarjoukset."
  },
  {
    id: 2,
    name: "Vertaalainat.fi",
    logo: "/images/logos/vertaalainat.svg",
    stars: 5,
    ratingReason: "Vertaalainat.fi on 100 % kotimainen ja maksuton lainavertailupalvelu, joka kilpailuttaa lainatarjouksia yli 20 pankin ja rahoituslaitoksen kesken. Sen laaja kilpailutus takaa, että käyttäjä saa räätälöidyt ja kilpailukykyiset lainatarjoukset, mikä asettaa sen huippuluokkaan.",
    interestRateMin: 4.5,
    interestRateMax: 20.0,
    monthlyFee: 5,
    setupFee: 95,
    minAmount: 1000,
    maxAmount: 70000,
    minYears: 1,
    maxYears: 15,
    rating: 9.4,
    applyUrl: "https://www.vertaalainat.fi",
    description: "100 % kotimainen ja maksuton lainavertailupalvelu, joka auttaa sekä kuluttajia että yrityksiä löytämään parhaan lainaratkaisun. Kilpailuttaa yli 20 pankin lainatarjoukset."
  },
  {
    id: 3,
    name: "Lainojenvertailu.fi",
    logo: "/images/logos/lainojenvertailu.svg",
    stars: 3,
    ratingReason: "Tämä sivusto toimii ensisijaisesti yleisluontoisena tietopankkina ja oppaana eri lainamuodoista. Vaikka se tarjoaa hyödyllistä vertailutietoa, se ei kerää reaaliaikaista ja laajaa pankkitarjontaa samalla tavalla kuin edellä mainitut palvelut, minkä vuoksi se sijoittuu keskitasolle.",
    interestRateMin: 5.0,
    interestRateMax: 20.0,
    monthlyFee: 4,
    setupFee: 85,
    minAmount: 1000,
    maxAmount: 50000,
    minYears: 1,
    maxYears: 15,
    rating: 9.2,
    applyUrl: "https://www.lainojenvertailu.fi",
    description: "Yleisluontoinen lainojen hintavertailu, joka toimii oppaana kuluttajille. Tarjoaa tietoa eri lainamuotojen kustannusrakenteista ja auttaa löytämään sopivimmat vaihtoehdot."
  },
  {
    id: 4,
    name: "Lainakone.fi",
    logo: "/images/logos/lainakone.svg",
    stars: 2,
    ratingReason: "Lainakone.fi keskittyy pikalainoihin pienille summille (esimerkiksi 50–1000 euroa). Tämä rajaava laina-alue tarkoittaa, että palvelussa kilpailutettavien pankkien ja rahoituslaitosten kirjo on huomattavasti suppeampi, mikä rajoittaa sen tarjoamaa kokonaiskattavuutta.",
    interestRateMin: 6.0,
    interestRateMax: 20.0,
    monthlyFee: 3,
    setupFee: 50,
    minAmount: 50,
    maxAmount: 1000,
    minYears: 0.5,
    maxYears: 2,
    rating: 9.0,
    applyUrl: "https://www.lainakone.fi",
    description: "Nopea, verkkopohjainen lainahakemusprosessi, jossa pienet lainasummat voidaan saada tilille jopa viidessä minuutissa. Painottaa nopeutta ja joustavia maksuehtoja."
  },
  {
    id: 5,
    name: "Lainaopas.fi",
    logo: "/images/logos/lainaopas.svg",
    stars: 1,
    ratingReason: "Lainaopas.fi toimii lähinnä lainaneuvontaa ja opastusta tarjoavana sivustona, eikä se varsinaisesti kerää reaaliaikaisia lainatarjouksia laajasti. Tämän vuoksi sen tarjoama kilpailutus on rajallisempaa, mikä asettaa sen huonoimmaksi tässä vertailussa.",
    interestRateMin: 5.5,
    interestRateMax: 20.0,
    monthlyFee: 4,
    setupFee: 80,
    minAmount: 1000,
    maxAmount: 50000,
    minYears: 1,
    maxYears: 15,
    rating: 9.1,
    applyUrl: "https://www.lainaopas.fi",
    description: "Lainavertailun ja neuvonnan asiantuntijasivusto, joka tarjoaa laajan tietopaketin eri lainatyypeistä sekä niiden ehdoista. Auttaa löytämään sopivan lainaratkaisun."
  },
  {
    id: 6,
    name: "Zmarta.fi",
    logo: "/images/logos/zmarta_logo.png",
    stars: 5,
    ratingReason: "Zmarta on Suomen pitkäaikaisin lainojen vertailupalvelu, joka tarjoaa helpon ja selkeän lainanhakuprosessin. Palvelu mahdollistaa lainojen kilpailutuksen yli 20 luotonmyöntäjältä yhdellä hakemuksella.",
    interestRateMin: 4.41,
    interestRateMax: 20.0,
    monthlyFee: 4,
    setupFee: 0,
    minAmount: 1000,
    maxAmount: 70000,
    minYears: 1,
    maxYears: 15,
    rating: 9.2,
    applyUrl: "https://www.zmarta.fi",
    description: "Suomen pitkäaikaisin lainojen vertailupalvelu. Helppo ja selkeä lainanhakuprosessi, jossa voit saada lainatarjouksia jopa 20 luotonmyöntäjältä. Lainaa 70 000 euroon asti ilman avausmaksua."
  }
]

export default function Home() {
  const [loanAmount, setLoanAmount] = useState(1000)
  const [loanTime, setLoanTime] = useState(1)

  // Lasketaan kuukausierä
  const calculateMonthlyPayment = (amount: number, years: number, interestRate: number) => {
    const monthlyRate = interestRate / 100 / 12
    const numberOfPayments = years * 12
    const monthlyPayment = (amount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                          (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
    return Math.round(monthlyPayment)
  }

  // Näytetään tarjoukset tähtijärjestyksessä ja suodatetaan lainasumman mukaan
  const filteredAndSortedOffers = [...loanOffers]
    .filter(offer => {
      // Tarkistetaan, että valittu lainasumma on palvelun min ja max rajojen sisällä
      return loanAmount >= offer.minAmount && loanAmount <= offer.maxAmount;
    })
    .sort((a, b) => b.stars - a.stars);

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Tervetuloa vertailujen vertailuun
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Olemme koonneet Suomen parhaat lainavertailupalvelut yhteen paikkaan. 
            Vertaamme ja arvioimme lainavertailupalvelut puolestasi, jotta sinä löydät 
            luotettavimman palvelun edullisimman lainan saamiseksi.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-6 mb-12">
          <h3 className="text-2xl font-semibold mb-4">Vertaa kulutusluotot</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">
                Lainasumma: {loanAmount} €
              </label>
              <input 
                type="range" 
                min="1000" 
                max="60000" 
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full accent-blue-600"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>1 000 €</span>
                <span>60 000 €</span>
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">
                Laina-aika: {loanTime} {loanTime === 1 ? 'vuosi' : 'vuotta'}
              </label>
              <input 
                type="range" 
                min="1" 
                max="15" 
                value={loanTime}
                onChange={(e) => setLoanTime(Number(e.target.value))}
                className="w-full accent-blue-600"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>1 vuosi</span>
                <span>15 vuotta</span>
              </div>
            </div>
          </div>
        </section>

        {/* Lainatarjoukset */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredAndSortedOffers.map(offer => (
            <div key={offer.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Yläpalkki */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="min-w-[140px] h-10 bg-white rounded-md px-4 flex items-center justify-center">
                      <CompanyLogo name={offer.name} />
                    </div>
                  </div>
                  <StarRating rating={offer.stars} />
                </div>
              </div>

              {/* Lainan tiedot */}
              <div className="p-6 space-y-4">
                {/* Korko */}
                <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                  <div>
                    <p className="text-gray-500 text-sm">Korko</p>
                    <p className="text-lg font-semibold text-blue-700">
                      {offer.interestRateMin}% - {offer.interestRateMax}%
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500 text-sm">Kuukausierä</p>
                    <p className="text-lg font-semibold text-blue-700">
                      {calculateMonthlyPayment(loanAmount, loanTime, offer.interestRateMin)} €
                    </p>
                  </div>
                </div>

                {/* Lainasummat */}
                <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                  <div>
                    <p className="text-gray-500 text-sm">Lainasumma</p>
                    <p className="font-medium">
                      {offer.minAmount} € - {offer.maxAmount} €
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500 text-sm">Laina-aika</p>
                    <p className="font-medium">
                      {offer.minYears} - {offer.maxYears} vuotta
                    </p>
                  </div>
                </div>

                {/* Kulut */}
                <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                  <div>
                    <p className="text-gray-500 text-sm">Avausmaksu</p>
                    <p className="font-medium">{offer.setupFee} €</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500 text-sm">Tilinhoito</p>
                    <p className="font-medium">{offer.monthlyFee} €/kk</p>
                  </div>
                </div>

                {/* Arvion perustelu */}
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-gray-500 text-sm font-medium mb-2">Arvion perustelu:</p>
                  <p className="text-gray-600 text-sm">{offer.ratingReason}</p>
                </div>

                {/* Kuvaus */}
                <p className="text-gray-600 text-sm">{offer.description}</p>

                {/* Hae lainaa -painike */}
                <a 
                  href={offer.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-center flex items-center justify-center gap-2 font-medium"
                >
                  Hae lainaa
                  <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  )
}
