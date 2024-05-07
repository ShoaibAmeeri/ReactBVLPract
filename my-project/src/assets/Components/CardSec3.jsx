import React from 'react'


export default function CardSec3({src,title,detail,price,incre}) {
  
  return (
    <>
    <div className="card">
        <div className="bars">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <i className="fa-regular fa-heart"></i>
        <img src={src} alt="Card-1" width={"250px"} />
        <h3>{title}</h3>
        <p>{detail}</p>
        <h3>Rs {price}</h3>

        <button className='addToCart' onClick={(incre)}>+ ADD TO BUCKET</button>
    </div>
    </>
  )
}
