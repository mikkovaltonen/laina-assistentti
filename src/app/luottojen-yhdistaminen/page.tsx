'use client'
import Logo from '@/components/Logo'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

export default function LoanCombining() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <nav className="bg-blue-800 text-white p-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <a href="/" className="hover:opacity-90">
              <Logo />
            </a>
            <div className="space-x-4">
              <a href="/" className="hover:text-blue-200">Etusivu</a>
              <a href="/luottojen-yhdistaminen" className="hover:text-blue-200">Luottojen yhdistäminen</a>
              <a href="/etua" className="hover:text-blue-200">Etua.fi</a>
              <a href="/vertaalainat" className="hover:text-blue-200">Vertaalainat</a>
              <a href="/lainojenvertailu" className="hover:text-blue-200">Lainojenvertailu</a>
              <a href="/tietoa-meista" className="hover:text-blue-200">Tietoa meistä</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Luottojen yhdistäminen</h1>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Pääosio */}
            <div className="p-8">
              <p className="text-xl text-gray-600 mb-8">
                Onko sinulla useita pienempiä luottoja, joita kaikkia lyhennät kuukausittain? 
                Siinä tapauksessa kannattaa harkita lainojen yhdistämistä.
              </p>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Mitä luottojen yhdistäminen tarkoittaa?
                  </h2>
                  <p className="text-gray-600">
                    Luottojen yhdistäminen tarkoittaa, että otat yhden lainan, joka kattaa kaikki vanhat lainasi. 
                    Tämän jälkeen maksat vain yhtä lainaa. Samalla myös säästät lainakuluissa jopa satoja euroja 
                    aikaisempien lainojesi suuruudesta riippuen.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Yhdistämisen hyödyt
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Säästät rahaa lainakuluissa</li>
                    <li>Säästät aikaa ja vaivaa, kun useiden eräpäivien sijasta muistat vain yhden</li>
                    <li>Maksuhäiriöiden riski pienenee</li>
                    <li>Kokonaiskulut ovat helpommin hahmotettavissa</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Miten luottojen yhdistäminen tapahtuu?
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-lg mb-2">1. Kartoita lainasi</h3>
                      <p className="text-gray-600">
                        Laske yhteen kaikki nykyiset lainasi ja niiden kuukausierät.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-lg mb-2">2. Vertaile tarjouksia</h3>
                      <p className="text-gray-600">
                        Käytä lainavertailupalveluita löytääksesi edullisimman yhdistelmälainan.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="font-semibold text-lg mb-2">3. Yhdistä lainat</h3>
                      <p className="text-gray-600">
                        Maksa vanhat lainat pois uudella lainalla ja nauti pienemmistä kuluista.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA-osio */}
                <div className="bg-blue-50 p-8 rounded-lg mt-8">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Vertaile yhdistelmälainoja
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Vertaile eri palveluiden yhdistelmälainoja ja löydä edullisin vaihtoehto vanhojen 
                    lainojesi yhdistämiseen. Säästä aikaa ja rahaa yhdistämällä lainasi jo tänään!
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a 
                      href="/etua"
                      className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-xl text-center flex items-center justify-center gap-2 hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                    >
                      Vertaile lainoja
                      <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                    </a>
                    <a 
                      href="/tietoa-meista"
                      className="bg-white text-blue-700 border-2 border-blue-700 py-4 px-6 rounded-xl text-center hover:bg-blue-50 transition-all duration-300"
                    >
                      Lue lisää palveluistamme
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
} 