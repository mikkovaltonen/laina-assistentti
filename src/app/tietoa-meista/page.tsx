'use client'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Tietoa meistä
          </h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Mikä on Lainavertailu?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Lainavertailu on riippumaton vertailupalvelu, joka auttaa kuluttajia löytämään parhaat lainavertailupalvelut. 
                Analysoimme ja vertailemme Suomen johtavia lainavertailupalveluita tarjotaksemme puolueetonta tietoa niiden 
                toiminnasta, kattavuudesta ja käytettävyydestä.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Tavoitteenamme on auttaa lainanhakijoita tekemään tietoon perustuvia päätöksiä ja löytämään luotettavimmat 
                vertailupalvelut, jotka parhaiten vastaavat heidän tarpeitaan.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Miten me toimimme?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Tutkimme ja analysoimme jokaista vertailupalvelua seuraavien kriteerien perusteella:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li className="mb-2">Kilpailutuksen laajuus - kuinka monta pankkia ja rahoituslaitosta palvelu kattaa</li>
                <li className="mb-2">Palvelun käytettävyys ja hakuprosessin selkeys</li>
                <li className="mb-2">Tarjousten läpinäkyvyys ja vertailtavuus</li>
                <li className="mb-2">Asiakaspalvelun laatu ja saatavuus</li>
                <li>Käyttäjäkokemukset ja -arviot</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Riippumattomuus ja läpinäkyvyys
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Olemme täysin riippumaton toimija, eikä mikään vertailtavista palveluista voi vaikuttaa arviointeihimme. 
                Arviomme perustuvat kattavaan tutkimukseen, käyttäjäkokemuksiin ja jatkuvaan markkinaseurantaan.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Päivitämme tietojamme säännöllisesti varmistaaksemme, että tarjoamamme tieto on aina ajantasaista 
                ja luotettavaa.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Yhteystiedot
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Jos sinulla on kysyttävää palvelustamme tai haluat antaa palautetta, voit ottaa meihin yhteyttä 
                sähköpostitse osoitteeseen: info@lainavertailu.fi
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
} 