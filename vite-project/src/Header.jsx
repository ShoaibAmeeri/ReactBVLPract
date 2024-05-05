import React from 'react'

function Header(props) {
  return (
    <header>
    <ul>
      <li>{props.first}</li>
      <li>About</li>
      <li>Contact</li>
      <li>Policy</li>
    </ul>
  </header>
  )
}

export default Header