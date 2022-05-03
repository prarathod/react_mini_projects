import React, { useState } from 'react'
import './home.css';
const Home = () => {
    const [hori, setHori] = useState(10);
    const [vari, setVari] = useState(10);
    const [blur, setBlur] = useState(10);
    const [color, setColor] = useState('black')
    const [check, setCheck] = useState(false);
    const [boxColor, setBoxColor] = useState('blueviolet');
    const [bgImg, setBgImg] = useState('')

    let style = {
        boxShadow: `${check ? "inset" : ""} ${hori}px ${vari}px ${blur}px ${color}`,
        backgroundColor: `${boxColor}`,
        backgroundImage: `url(${bgImg})`
    }
    return (
        <div className='App'>

            <div className='controls'>

                <label>Horizontal Lenght {hori}</label>

                <input type="range" min="-200" max="200" value={hori} onChange={(e) => setHori(e.target.value)} />

                <label>Horizontal Lenght {vari}</label>
                <input type="range" min="-200" max="200" value={vari} onChange={(e) => setVari(e.target.value)} />

                <label>Horizontal Lenght {blur}</label>
                <input type="range" min="-200" max="200" value={blur} onChange={(e) => setBlur(e.target.value)} />

                <label>Box Color  </label>
                <input type="color" min="-200" max="200" value={boxColor} onChange={(e) => setBoxColor(e.target.value)} />
                <br />
                <label>Background Color  </label>
                <input type="color" min="-200" max="200" value={color} onChange={(e) => setColor(e.target.value)} />

                <div className="switch">
                    <label>
                        outline
                        <input type="checkbox" checked={check} onChange={() => setCheck(!check)} />
                        <span className="lever"></span>
                        inset
                    </label>
                </div>

                <div className="">
                <label>Enter Image URL</label>
                    <input type='text' value={bgImg} onChange={(e) => setBgImg(e.target.value)} />
                </div>


            </div>
            <div className='output'>
                <div className='box' style={style}>

                    <p>{`background-color: ${boxColor} boxShadow: ${check ? "inset" : ""} ${hori}px ${vari}px ${blur}px ${color}`}</p>
                </div>
            </div>
        </div>
    )
}

export default Home;

