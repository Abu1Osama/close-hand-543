import React from 'react'
import "./Deal.css"

function Daily_essential({name,img,p1,p2,p3,dis}) {
  return (
    <div className='deal'>
<img src={img} alt="" />
<h3>{name}</h3>
<div className='price'>
<p className='p3'>{p3}</p>
</div>


    </div>
  )
}

export default Daily_essential