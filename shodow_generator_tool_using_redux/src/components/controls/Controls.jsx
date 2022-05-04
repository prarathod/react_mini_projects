import React from 'react'
import './controls.css';
import {useSelector, useDispatch} from 'react-redux';
import {hori,vari} from '../../redux/action-creators/index.js'
const Controls = () => {
    const hor = useSelector(state=>state.hori);
    const va = useSelector(state=>state.vari);
    const dispatch = useDispatch();
    return (
        <>
            <div className='controls'>
                <label>Horizontal Lenght {hor}</label>
                <input type="range" min="-200" max="200" value={hor} onChange={(e)=>{dispatch(hori(e.target.value))}}/>

                <label>Horizontal Lenght {va} </label>
                <input type="range" min="-200" max="200" value={va} onChange={(e)=>{dispatch(vari(e.target.value))}}/>
            </div>
        </>
    )
}

export default Controls