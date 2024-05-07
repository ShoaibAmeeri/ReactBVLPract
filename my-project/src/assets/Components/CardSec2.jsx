import React from 'react'

export default function CardSec2(props) {
  return (
    <>
    <div className="card">
        <h3>{props.title}</h3>
        <img src={props.src} alt="Card-1" width={"280px"} />
    </div>
    </>
  )
}
