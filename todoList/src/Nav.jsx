import React, { memo } from 'react'


function Nav({adjective, getAdj}) {
    console.log("navbar is rendered")
  return (
    <>
    <div>this is our {adjective} Navbar</div>
    <button onClick={getAdj} >hello</button>
    </>
  )
}

export default memo(Nav)