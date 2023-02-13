import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'

const Home1 = () => {
    const history = useNavigate()

    return (
        <>
            <div className='home'>
                <h1>Hey Baby!!!<br /><br />WELCOME </h1>
                <div className="input">
                </div>
                <button onClick={() => { history("/home") }}>START</button>
            </div>
        </>
    )
}

export default Home1
