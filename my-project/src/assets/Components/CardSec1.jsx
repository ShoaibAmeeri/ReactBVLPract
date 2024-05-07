import React from 'react'

export default function CardSec1(props) {
  return (
    <>
    <div className="card">
        <img src={props.src} alt="Card-1" width={"180px"} />
            <p>{props.txt}</p>
        <span className='borderRed'></span>
    </div>
    </>
  )
}
