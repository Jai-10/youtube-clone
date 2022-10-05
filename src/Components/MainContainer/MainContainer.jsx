import React from 'react'
import Header from '../Header/Header'
import Video from '../Video/Video'
import './MainContainer.css'

const MainContainer = (props) => {
  return (
    <div className='main-content-container'
      style={{
        marginLeft: `${props.openSidebar===false ? "80px" : "250px" }`
      }}
    >
      
      <Header />

      <div className="video-container"
        style={{ marginLeft: `${props.openSidebar===true ? "25px" : null}` }}
      >
        <Video openSidebar={props.openSidebar} />
        <Video openSidebar={props.openSidebar} />
        <Video openSidebar={props.openSidebar} />
        <Video openSidebar={props.openSidebar} />
        <Video openSidebar={props.openSidebar} />
        <Video openSidebar={props.openSidebar} />
        <Video openSidebar={props.openSidebar} />
        <Video openSidebar={props.openSidebar} />
        <Video openSidebar={props.openSidebar} />
        <Video openSidebar={props.openSidebar} />
        <Video openSidebar={props.openSidebar} />
        <Video openSidebar={props.openSidebar} />
        <Video openSidebar={props.openSidebar} />
        <Video openSidebar={props.openSidebar} />
        <Video openSidebar={props.openSidebar} />
        <Video openSidebar={props.openSidebar} />
        <Video openSidebar={props.openSidebar} />
        <Video openSidebar={props.openSidebar} />
        <Video openSidebar={props.openSidebar} />
        <Video openSidebar={props.openSidebar} />
        <Video openSidebar={props.openSidebar} />
        <Video openSidebar={props.openSidebar} />
        <Video openSidebar={props.openSidebar} />
        <Video openSidebar={props.openSidebar} />
        <Video openSidebar={props.openSidebar} />
        <Video openSidebar={props.openSidebar} />
        <Video openSidebar={props.openSidebar} />
        <Video openSidebar={props.openSidebar} />
        <Video openSidebar={props.openSidebar} />
        <Video openSidebar={props.openSidebar} />
        <Video openSidebar={props.openSidebar} />
        <Video openSidebar={props.openSidebar} />
        <Video openSidebar={props.openSidebar} />
        <Video openSidebar={props.openSidebar} />
        <Video openSidebar={props.openSidebar} />
        <Video openSidebar={props.openSidebar} />
        <Video openSidebar={props.openSidebar} />
        <Video openSidebar={props.openSidebar} />
        <Video openSidebar={props.openSidebar} />
        <Video openSidebar={props.openSidebar} />
        <Video openSidebar={props.openSidebar} />
        <Video openSidebar={props.openSidebar} />
      </div>


    </div>
  )
}

export default MainContainer