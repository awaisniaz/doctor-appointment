import React from 'react'
import logo from '../images/logo.png'
import './styles.css'
import { ChevronDownIcon } from '@heroicons/react/solid'
export default function Header() {
  const menu = [{
    title:'Home',
    url:'/'
  },
  {
    title:'Doctors',
    url:'/doctors',
    options:[{

    }]
  },
  {
    title:'Patients',
    url:'/patients',
    options:[{
      
    }]
  }
]
  return (<div className="columns-2 shadow-md flex align-middle justify-between p-3 container-border">
    <div className='flex align-middle justify-start gap-7'>
      <img src={logo} className='h-14 mr-0' alt='logo Image'></img>
      <div className='flex gap-6 justify-center align-middle'>
        {
          menu?.map(item=>{
            return <a className='font-bold flex justify-center align-middle font-sans text-cyan-400 hover:text-cyan-500 navigation gap-2' href={item?.url}>{item?.title} {item?.options != undefined ?  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>:null}</a>
          })
        }
      </div>
    </div>
    <div className='flex justify-end'>
      <button className='bg-cyan-400 p-3 rounded text-gray-50 font-bold hover:bg-cyan-500'>Login / Signup</button>
    </div>
  </div>
  )
}
