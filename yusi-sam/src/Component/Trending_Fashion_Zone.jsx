import React from 'react'

import "./Deal.css"

function Trending_Fashion_Zone({name,img,p1,p2,p3,dis}) {
  return (
    <div className='deal'>
<img src={img} alt="" />
<h3>{name}</h3>
<div className='price'>
<p className='p1'>₹{p1}</p>
<del className='p2'>₹{p2}</del>
<p className='p3'>{dis}</p>
</div>


    </div>
  )
}

export default Trending_Fashion_Zone