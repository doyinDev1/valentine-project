/* eslint-disable eqeqeq */
import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import sample from '../../assests/images/sample3.mp3'
import './Home.css'

const Home = () => {
    const amountInputRef = useRef();
    const enteredAmount = amountInputRef.current?.value;
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [text, setText] = useState('');
    const history = useNavigate()

    useEffect(() => {
        audioRef.current.play();
        setIsPlaying(true);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (enteredAmount == 'sapa') {
            alert('sapa dey')
        }
        if (text == 'doyin') {
            history('/lover')

        }
        else if (text == '') {
            alert('try again, this time try and type something boss')

        }
        else if (text == 'ode') {
            alert('na you be ode werey, try again')

        }
        else if (text == 'dee') {
            alert("nope that will be our safe word 🤭🤭")

        }
        else if (text == 'john') {
            alert('we both know i hate that name dfkm 😂😂')

        }
        else if (text == 'baby') {
            alert('dababy ni 😂')

        }
        else {
            alert('lol wetin you dey do guy lmaoooooo 😂😂')
        }
    }
    return (
        <>
            <audio ref={audioRef} src={sample} loop autoPlay type="audio/mp3" />

            <div className='home'>
                <h1>Hey Beautiful,<br /> you are here...<br />WELCOME </h1>
                <div className="input">
                </div>
                <form onSubmit={handleSubmit} >

                    <label>Type in the name you call me</label>
                    <input
                        ref={amountInputRef}
                        type='text' placeholder="Type in your baby's name"
                        onChange={(e) => setText(e.currentTarget.value.toLocaleLowerCase())}

                    />
                    <button>Submit</button>
                </form>
            </div>

        </>
    )
}

export default Home
