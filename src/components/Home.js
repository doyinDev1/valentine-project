import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <>
            <div className='home'>
                <h1>Hey Beautiful,<br /> you are here... <br />WELCOME </h1>
                <div className="input">
                </div>
                <label>Type in my name</label>
                <input type='text' placeholder="Type in your baby's name" />
                <input type='submit' />
            </div>

        </>
    )
}

export default Home
