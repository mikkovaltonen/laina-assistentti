'use client'
import ServicePage from '@/components/ServicePage'

export default function EtuaPage() {
  return (
    <ServicePage 
      name="Etua.fi"
      stars={5}
      ratingReason="Etua.fi kilpailuttaa yli 20 eri pankin ja rahoituslaitoksen lainatarjouksia, mukaan lukien alan suurimmat ja tunnetuimmat toimijat. Palvelun laaja kattavuus ja kyky tuoda esiin useiden merkittävien lainanantajien tarjoukset mahdollistavat käyttäjälle kilpailukykyiset ja edulliset lainaehdot."
      description="Suomen ensimmäinen ja johtava lainavertailupalvelu kilpailuttaa yli 20 eri pankin ja rahoituslaitoksen lainatarjoukset."
      features={[
        "Yli 20 pankin kilpailutus yhdellä hakemuksella",
        "Lainamäärät 500 € - 70 000 €",
        "Laina-ajat 1-18 vuotta",
        "Nopea käsittely ja päätös",
        "Ei sitoutumispakkoa tarjouksiin",
        "Maksuton palvelu"
      ]}
      benefits={[
        "Säästä aikaa - yksi hakemus riittää",
        "Vertaile tarjouksia rauhassa",
        "Kilpailuta myös vanhat lainasi",
        "Luotettavat ja tunnetut pankit"
      ]}
      interestRateMin={4.0}
      interestRateMax={20.0}
      minAmount={500}
      maxAmount={70000}
      minYears={1}
      maxYears={18}
      monthlyFee={4}
      setupFee={90}
      applyUrl="https://www.etua.fi"
    />
  )
} 