'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-blue-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-4">
            Laina-assistentti on lainavertailupalveluiden vertailupalvelu. Autamme sinua löytämään luotettavimman 
            lainavertailupalvelun, jonka kautta saat varmasti edullisimman lainan juuri sinun tarpeisiisi.
          </p>
          <div className="text-sm text-gray-300 space-y-2">
            <p>©{currentYear} Pricerobot Oy | Kaikki oikeudet pidätetään</p>
            <div className="flex justify-center space-x-4">
              <a href="/tietosuojaseloste" className="hover:text-white">Tietosuojaseloste</a>
              <span>|</span>
              <a href="/tietoa-meista" className="hover:text-white">Tietoa meistä</a>
              <span>|</span>
              <a href="/ota-yhteytta" className="hover:text-white">Ota yhteyttä</a>
            </div>
            <p>Yhteystiedot: info@laina-assistentti.fi</p>
          </div>
        </div>
      </div>
    </footer>
  )
} 