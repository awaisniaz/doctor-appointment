import { url } from 'inspector'
import React from 'react'
import './style.css'
const Banner = ()=> {
  return (
    <div className='banner-container' style={{backgroundImage:'url("./images/background_image.jpg")'}}>
        <div className='banner-contant' key="1">
            <div className='banner-top' key="1">
                <h1 key="1">Search Doctor, Make an Appointment</h1>
                <p key="1">Discover the best doctors, clinic & hospital the city nearest to you.</p>
                </div>

        </div>
      
    </div>
  )
}

export default Banner
