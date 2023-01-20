import React from 'react'

import "./Deal.css"

function Branded_Deals({name,img,p1,p2,p3,dis}) {
  return (
    <div className='deal'>
<img src={img} alt="" />
<h3>{name}</h3>
<div className='price'>
<p className='p1'>₹{p1}</p>
<del  style={{color:"grey"}}className='p2'>₹{p2}</del>
<p className='p3'>{dis}</p>
</div>


    </div>
  )
}
export default Branded_Deals