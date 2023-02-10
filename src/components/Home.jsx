import React from 'react'
import Gatos from './Gatos';
import "./main.css"
const Home = () => {
  return (
    <div>
      <div className='title'><h1 >Look at the cutest cats!</h1></div>
        <div className="container mt-5 main">
            <div className="btn-group">
            <Gatos/>
            </div>
        </div>       
    </div>
  )
}

export default Home
