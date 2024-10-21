import React from 'react'
import logo from '../assets/bg_logo.png'
import CallMadeIcon from '@mui/icons-material/CallMade';
import insta from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import email from '../assets/gmail.png';
import Divider from '@mui/material/Divider';
function Footer() {
  return (
    <div className='bg-slate-900 border-t-4 border-emerald-300 grid grid-cols-3'>

    <div className='w-40 h-auto'>
      <img src={logo} alt="logo" />
    </div>

<div className='grid grid-cols-2'>

    <div className=' mt-5 text-white'>
        <h1 className='text-emerald-300 text-2xl'>Reach Us <CallMadeIcon/></h1>
        <li className='text-lg'>hello@cybercarnival.in</li>
        <li className='text-lg'>SRMIST, Bharathi Salai, Ramapuram Chennai</li>
    </div>

    <div className=' mt-5 translate-x-36'>
        <h1 className='text-emerald-300 text-2xl text-center'>Follow Our Socials</h1>
        <div className='mt-4 grid grid-cols-4 gap-5'>
        <ul>
        <a href='https://www.instagram.com/cyber_carnival_srmrmp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>
        <img className='w-9 h-9' src={insta}/>
        </a>
        </ul>
        <ul>
        <a href='https://www.linkedin.com/in/cyber-carnival-srm-ramapuram-71a63a2b1/'>
        <img className='w-9 h-9' src={linkedin}/>
        </a>
        </ul>
        <ul>
        <a href='https://www.instagram.com/cyber_carnival_srmrmp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>
        <img className='w-9 h-9' src={email}/>
        </a>
        </ul>
        <ul>
        <a href='https://www.instagram.com/cyber_carnival_srmrmp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>
        <img className='w-9 h-9' src={email}/>
        </a>
        </ul>
    </div>
</div>    

    <Divider variant='middle' className='bg-white col-span-2 translate-x-16'/>
    <h1 className='text-gray-400 text-center translate-x-52'>© 2024 Copyright: SRM RMP CSE CS</h1>
    </div>
    </div>
  )
}

export default Footer
