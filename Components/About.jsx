import React from 'react'
import './About.css'
import pic1 from '../src/assets/Brazil.jpg'
import pic2 from '../src/assets/China.jpg'
import pic3 from '../src/assets/Maldives.jpg'
import design from '../src/assets/palm-trees.svg'

const About = () => {
  return (
    <div className='cont' id='about'>

     <div className="about-text">
        <p className='the-best'>We are the best</p>
        <h1>About us</h1>
        <p>
          At GlobeGo, we believe that every journey should be unforgettable.
          Founded with a passion for exploration and a love for adventure,
          our team is dedicated to crafting personalized travel experiences that 
          cater to your unique interests and desires.
          Whether you’re dreaming of a sun-soaked beach getaway, a cultural city escape,
          or an exhilarating outdoor adventure, we’re here to turn your travel dreams into reality. 
          Our knowledgeable travel experts are committed to providing exceptional service, insider tips,
          and seamless planning, ensuring your trip is stress-free from start to finish.
         Join us in discovering the world, one destination at a time. Let’s create memories that will last a lifetime!
        </p>
        <button className='about-btn'>Book A Tour</button>
      </div>
      <img src={design} id='design' />
      <div className="about-imgs">
        <img id='pic1' src={pic1} alt="" />
        <img id='pic2' src={pic2} alt="" />
        <img id='pic3' src={pic3} alt="" />
      </div>
    </div>
  )
}

export default About