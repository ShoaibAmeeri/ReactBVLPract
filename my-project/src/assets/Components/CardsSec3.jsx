import React from 'react'
import CardSec3 from './CardSec3'

export default function CardsSec3({increment}) {
  let cards = [
    {
      title:"Zinger Stacker Combo",
      detail: "1 Zinger Stacker + 1 Regular fries + 1 Regular drink",
      price: "890",
      src:"src/assets/Media/Card-3.png",
    },
    {
      title:"Zinger Stacker Combo",
      detail: "1 Zinger Stacker + 1 Regular fries + 1 Regular drink",
      price: "890",
      src:"src/assets/Media/Card-3.png",
    },
    {
      title:"Zinger Stacker Combo",
      detail: "1 Zinger Stacker + 1 Regular fries + 1 Regular drink",
      price: "890",
      src:"src/assets/Media/Card-3.png",
    },
    {
      title:"Zinger Stacker Combo",
      detail: "1 Zinger Stacker + 1 Regular fries + 1 Regular drink",
      price: "890",
      src:"src/assets/Media/Card-3.png",
    },
    

  ]
  return (
    <>
        <section className='cards-section-3 container'>
            <h2>TOP DEALS</h2>
            <span className='borderRed'></span>
            <div className="cards-container">

            {cards.map((e, i) => (
            <CardSec3 key={i} title={e.title} src={e.src} detail={e.detail} price={e.price} incre={increment}/>
            ))}

            </div>
        </section>
    </>
  )
}
