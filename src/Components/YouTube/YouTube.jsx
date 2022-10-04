import React, { useState } from 'react'
import MainContainer from '../MainContainer/MainContainer'
import Navbar from '../Navbar/Navbar'
import './YouTube.css'

const YouTube = () => {
  
  const [openSidebar, setOpenSidebar] = useState(true);
  const toggleSide = () => {
    if (openSidebar === false) {
      setOpenSidebar(true)
    } else {
      setOpenSidebar(false)
    }
  }



  return (
    <div className='yt-app-container'>

      <Navbar toggleSide={toggleSide} openSidebar={openSidebar} />

      <MainContainer toggleSide={toggleSide} openSidebar={openSidebar} />

    </div>
  )
}
export default YouTube