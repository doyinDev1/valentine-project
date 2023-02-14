import React, { useEffect } from 'react'
import './Landing.css'
import sample from '../../assests/images/sample.mp4'
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'


const Landing = () => {
  const { width, height } = useWindowSize()

  const history = useNavigate()
  useEffect(() => {
    const timer = setTimeout(() => {
      // Your code to run after 30 seconds goes here
      history("/")
    }, 34000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <>

      <div className='landing'>

        <video className='videoTag' autoPlay loop>
          <source src={sample} type='video/mp4' />
        </video>
      </div>
    </>

  )
}

export default Landing
