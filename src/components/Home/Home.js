/* eslint-disable eqeqeq */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Home.css'

const Home = () => {
    const [text, setText] = useState('');
    const history = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
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
            alert("nope that's our safe word 🤭🤭")

        }
        else if (text == 'john') {
            alert('we both know i hate that name dfkm 😂😂')

        }
        else if (text == 'dbaby') {
            alert('dababy ni')

        }
        else {
            alert('lol wetin you dey do guy lmaoooooo 😂😂')

        }
    }
    return (
        <>
            <div className='home'>
                <h1>Hey Beautiful,<br /> you are here...<br />WELCOME </h1>
                <div className="input">
                </div>
                <form onSubmit={handleSubmit} >

                    <label>Type in the name you call me</label>
                    <input type='text' placeholder="Type in your baby's name"
                        onChange={(e) => setText(e.currentTarget.value.toLocaleLowerCase())}

                    />
                    <button>Submit</button>
                </form>
            </div>

        </>
    )
}

export default Home
