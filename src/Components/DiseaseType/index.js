import React from 'react'
import './styles.css'
import {Typography} from 'antd'
function DiseaseType(props) {
    const {Title,Text} = Typography
  return (
    <div className='specialist' key="">
        <div className='spec-header' key="">
               <Title key="">Clinic and Specialities</Title>
               <Text className='sub-title' key=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        </div>
        <div key='' className='spec-category'></div>
      
    </div>
  )
}

export default DiseaseType
