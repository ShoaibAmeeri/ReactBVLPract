import React from 'react'
import CardSec1 from './CardSec1'

export default function CardsSec1() {
  let cards = [
    {
      src:"src/assets/Media/Card-1.png",
      txt:"Everyday Value"
    },
    {
      src:"src/assets/Media/Card-1.png",
      txt:"Everyday Value"
    },
    {
      src:"src/assets/Media/Card-1.png",
      txt:"Everyday Value"
    },
    {
      src:"src/assets/Media/Card-1.png",
      txt:"Everyday Value"
    },
    {
      src:"src/assets/Media/Card-1.png",
      txt:"Everyday Value"
    }
    
]

  return (
    <>
      <section className='cards-section-1 container'>
          <h2>EXPLORE MENU</h2>
          <span className='borderRed'></span>
          <div className="cards-container">

          {cards.map((e, i) => (
          <CardSec1 key={i} src={e.src} txt={e.txt} />
        ))}

          </div>
      </section>
    </>
  )
}
