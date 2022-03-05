import React from 'react'
import './style.css'
import {lookingForData} from '../../config/lookingFor'
import { Button } from 'antd'
function LookingFor() {
  return (
    <div className='home-tile-section'>
       <h2 className='section-header-title'>What are you looking for?</h2>
       <div className='data-section'>
         {
           lookingForData?.map(item=>{
             console.log(item)
             return <div className='doctor-book-card' style={{backgroundImage:`url(${item?.url})`}}>
               <h3 className='book-section-title'>{item?.title}</h3>
               <Button className='bookNow-btn'>{item?.btn}</Button>
               </div>
           })
         }

         </div>
    </div>
  )
}

export default LookingFor
