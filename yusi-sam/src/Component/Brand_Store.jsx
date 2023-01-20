import React from 'react'

import "./Deal.css"

function Brand_Store({name,img,p1,p2,p3,dis}) {
  return (
    <div className='deal'>
<img src={img} alt="" />
<h3>{name}</h3>
<div className='price'>
<p className='p3'>{dis}</p>
</div>


    </div>
  )
}
export default Brand_Store