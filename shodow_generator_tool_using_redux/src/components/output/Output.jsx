import React from 'react'
import { useSelector } from 'react-redux'
const Output = () => {
  const hori = useSelector(state => state.hori);
  const vari = useSelector(state => state.vari);

  let style = {
    boxShadow: `${hori}px ${vari}px 10px black`,
    backgroundColor: `blueviolet`,
  }
  return (
    <>
      <div className='output'>
        <div className='box' style={style}>

          <p>{`background-color:pink boxShadow: ${hori}px ${vari}px 10px black`}</p>
        </div>
      </div>
    </>
  )
}

export default Output