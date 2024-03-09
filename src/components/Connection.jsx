import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { VscTriangleDown } from "react-icons/vsc";


import "./Connection.css"

const Connection = () => {
  return (
    <div className='container3'>
      <div className='connection-container'>
        <h3>Add to your feed</h3>

        <div className='connection-id'>
          <img src="https://media.licdn.com/dms/image/D4D03AQFQ71fdEEhcTQ/profile-displayphoto-shrink_100_100/0/1707815021776?e=1715212800&v=beta&t=_ODE_OlG2s1dKO6OXx4USP5wKMfD6h6lVQHybar4Kk4" alt="" />
          <div>
            <p className='name'> Farah Mudassir</p>
            <p className='tagline'> Psychology Graduate & HR Executive | Bridging Human Insights with  </p>

            <a href="/"><FaPlus />  Follow</a>

          </div>
        </div>


        <div className='connection-id'>
          <img src="https://media.licdn.com/dms/image/D4D35AQHfhME-4o0c2g/profile-framedphoto-shrink_100_100/0/1708590887381?e=1710360000&v=beta&t=COqavawBE3J4uxTKTavdoKo5a_qHgVxlZddVfF0VBW8" alt="" />
          <div>
            <p className='name'>Rabiya Noor Ahmed</p>
            <p className='tagline'>Frontend Developer | Proficient in HTML5, CSS3, JavaScript, Bootstrap5, </p>

            <a href="/"><FaPlus />  Follow</a>

          </div>
        </div>


        <div className='connection-id'>
          <img src="https://media.licdn.com/dms/image/D4D35AQGkfsQgBPR0og/profile-framedphoto-shrink_100_100/0/1708284180558?e=1710360000&v=beta&t=tVLkb4jkzSC0_mDkn-bS1-MmmCSDeS_LHbAWVOWQ0fg" alt="" />
          <div>
            <p className='name'>Maryam Tariq</p>
            <p className='tagline'> Psychology Graduate & HR Executive | Bridging Human Insights with  </p>

            <a href="/"><FaPlus />  Follow</a>

          </div>
        </div>


        <div className='view-all'>
          <a href="/">View all recommendations <FaArrowRightLong /> </a>
        </div>
      </div >

      <a href='/' className='premium'>
        <img src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png" alt="" />
      </a>



      <ul>
        <li><a href="">About</a></li>
        <li><a href="">Accessibility</a></li>
        <li><a href="">Help Center</a></li>
        <li><a href="">Privacy & Terms <sub> <VscTriangleDown /></sub> </a></li>
        <li><a href="">Ad Choices</a></li>
        <li><a href="">Advertising </a></li>
        <li><a href="">Business Services <sub> <VscTriangleDown /></sub></a></li>
        <li><a href="">Get the LinkedIn app</a></li>
        <li><a href="">More</a></li>
      </ul>

      <footer> 
        <img src="https://static.licdn.com/aero-v1/sc/h/aahlc8ivbnmk0t3eyz8as5gvr" alt="" />
        LinkedIn Corporation © 2024
      </footer>

    </div>
  )
}

export default Connection