import React from 'react'
import './style.css'
import {lookingForData} from '../../config/lookingFor'
import { Button } from 'antd'
function LookingFor() {
  return (
    <div className='home-tile-section' key="1">
       <h2 className='section-header-title' key="1">What are you looking for?</h2>
       <div className='data-section' key="1">
         {
           lookingForData?.map(item=>{
             console.log(item)
             return <div key="1" className='doctor-book-card' style={{backgroundImage:`url(${item?.url})`}}>
               <h3 key="1" className='book-section-title'>{item?.title}</h3>
               <Button key="1" className='bookNow-btn'>{item?.btn}</Button>
               </div>
           })
         }

         </div>
    </div>
  )
}

export default LookingFor
