'use client'
import { useEffect, useRef } from 'react'

const PiggyBankAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = 800  // Leveämpi canvas taustakuvalle
    canvas.height = 400

    // Ladataan taustakuva
    const backgroundImage = new Image()
    backgroundImage.src = '/images/money-background.jpg' // Lisää tämä kuva public/images/ kansioon
    
    // Odotetaan että kuva on latautunut
    backgroundImage.onload = () => {
      // Possun parametrit (pienempi koko)
      const piggyBank = {
        x: canvas.width - 100,  // Oikea kulma
        y: canvas.height - 80,  // Alakulma
        width: 120,  // Pienempi koko
        height: 80
      }

      // Setelit (vähemmän seteleitä)
      const bills = Array.from({ length: 5 }, () => ({
        x: piggyBank.x + (Math.random() - 0.5) * 60,
        y: piggyBank.y + (Math.random() - 0.5) * 40,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.05,
        width: 20,
        height: 10,
        color: `hsl(${120 + Math.random() * 20}, 70%, ${60 + Math.random() * 20}%)`
      }))

      function drawBackground() {
        // Piirretään taustakuva ja lisätään hieman läpinäkyvyyttä
        ctx.globalAlpha = 0.3
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height)
        ctx.globalAlpha = 1.0
      }

      function drawPiggyBank() {
        ctx.save()
        ctx.translate(piggyBank.x, piggyBank.y)

        // Possun runko
        ctx.beginPath()
        ctx.ellipse(0, 0, piggyBank.width / 2, piggyBank.height / 2, 0, 0, Math.PI * 2)
        ctx.fillStyle = '#2563eb'
        ctx.fill()
        ctx.strokeStyle = '#1e40af'
        ctx.lineWidth = 2
        ctx.stroke()

        // Possun kuono
        ctx.beginPath()
        ctx.ellipse(piggyBank.width / 2 - 15, 0, 20, 15, 0, 0, Math.PI * 2)
        ctx.fillStyle = '#2563eb'
        ctx.fill()
        ctx.strokeStyle = '#1e40af'
        ctx.stroke()

        // Sieraimet
        ctx.beginPath()
        ctx.arc(piggyBank.width / 2, -3, 2, 0, Math.PI * 2)
        ctx.arc(piggyBank.width / 2, 3, 2, 0, Math.PI * 2)
        ctx.fillStyle = '#1e40af'
        ctx.fill()

        // Korvat
        ctx.beginPath()
        ctx.ellipse(-20, -piggyBank.height / 2 + 8, 12, 8, Math.PI / 4, 0, Math.PI * 2)
        ctx.fillStyle = '#2563eb'
        ctx.fill()
        ctx.strokeStyle = '#1e40af'
        ctx.stroke()

        // Kolikkoaukko
        ctx.fillStyle = '#1e40af'
        ctx.fillRect(-10, -piggyBank.height / 2 + 8, 20, 4)

        ctx.restore()
      }

      function drawBill(bill: typeof bills[0]) {
        ctx.save()
        ctx.translate(bill.x, bill.y)
        ctx.rotate(bill.rotation)

        // Setelin pohja
        ctx.beginPath()
        ctx.rect(-bill.width / 2, -bill.height / 2, bill.width, bill.height)
        ctx.fillStyle = bill.color
        ctx.fill()
        ctx.strokeStyle = '#15803d'
        ctx.lineWidth = 1
        ctx.stroke()

        // Setelin "kuviointi"
        ctx.beginPath()
        ctx.rect(-bill.width / 3, -bill.height / 3, bill.width / 1.5, bill.height / 1.5)
        ctx.strokeStyle = '#15803d'
        ctx.stroke()

        ctx.restore()
      }

      function updateBills() {
        bills.forEach(bill => {
          bill.x += bill.vx
          bill.y += bill.vy
          bill.rotation += bill.rotationSpeed

          // Törmäys possun reunoihin
          const dx = bill.x - piggyBank.x
          const dy = bill.y - piggyBank.y
          const isOutside = (dx * dx) / (piggyBank.width * piggyBank.width / 4) +
                           (dy * dy) / (piggyBank.height * piggyBank.height / 4) > 1

          if (isOutside) {
            const angle = Math.atan2(dy, dx)
            const nx = Math.cos(angle)
            const ny = Math.sin(angle)
            
            const dot = bill.vx * nx + bill.vy * ny
            bill.vx = bill.vx - 2 * dot * nx
            bill.vy = bill.vy - 2 * dot * ny

            // Lisätään pieni satunnainen pyörähdys törmäyksessä
            bill.rotationSpeed = (Math.random() - 0.5) * 0.05
          }
        })
      }

      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        
        drawBackground()
        drawPiggyBank()
        updateBills()
        bills.forEach(drawBill)
        
        requestAnimationFrame(animate)
      }

      animate()
    }
  }, [])

  return (
    <div className="flex justify-center mt-8">
      <canvas
        ref={canvasRef}
        className="border border-gray-200 rounded-lg shadow-lg"
      />
    </div>
  )
}

export default PiggyBankAnimation 