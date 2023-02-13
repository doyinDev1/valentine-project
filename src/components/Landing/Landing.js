import React from 'react'
import './Landing.css'
import Marquee from "react-fast-marquee";
import sample from '../../assests/images/sample.mp4'

const Landing = () => {
  return (
    <div className='landing'>

      <video className='videoTag' autoPlay >
        <source src={sample} type='video/mp4' />
      </video>
    </div>
  )
}

export default Landing
