import React from 'react'
import './Footer.css'
import ig from '../src/assets/instagram-logo (1).png'
import linkedin from '../src/assets/linkedin (1).png'
import fb from '../src/assets/facebook.png'

const Footer = () => {
  return (
    <div>
        <footer>
            <div className='closing-words'>
                <h1>G-G</h1>
                <p>Discover the world with Globe-Go</p>
                <p>Your ultimate travel companion</p>
            </div>
            
            <hr />

            <div className='info'>
                <p>Phone: +123 456 7890</p>
                <div className='logos'>
                <img src={ig} alt="" />
              
                <img src={fb} alt="" />

                </div>
                
                Email:info@gmail.com
            </div>
           
        </footer>
    </div>
  )
}

export default Footer