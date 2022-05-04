import React from 'react'
import Controls from '../controls/Controls'
import Output from '../output/Output'
const Home = () => {
  return (
    <>
        <div>
            <div>
                <Controls/>
            </div>
            <div>
                <Output/>
            </div>
        </div>
    </>
  )
}

export default Home