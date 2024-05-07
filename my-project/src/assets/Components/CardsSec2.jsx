import React from 'react'
import CardSec2 from './CardSec2'

export default function CardsSec2() {
  let cards = [
    {
      title:"Krunch Burger",
      src:"src/assets/Media/Card-2.png",
    },
    {
      title:"Krunch Burger",
      src:"src/assets/Media/Card-2.png",
    },
    {
      title:"Krunch Burger",
      src:"src/assets/Media/Card-2.png",
    },
    {
      title:"Krunch Burger",
      src:"src/assets/Media/Card-2.png",
    },
    {
      title:"Krunch Burger",
      src:"src/assets/Media/Card-2.png",
    }

  ]
  return (
    <>
        <section className='cards-section-2 container'>
            <h2>BEST SELLERS</h2>
            <span className='borderRed'></span>
            <div className="cards-container">

            {cards.map((e, i) => (
            <CardSec2 key={i} title={e.title} src={e.src} />
            ))}

            </div>
        </section>
    </>
  )
}
