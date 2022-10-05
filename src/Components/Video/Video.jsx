import React from 'react'
import './Video.css'

const Video = (props) => {
  return (
    <div className="card"
        style={{
            width: `${props.openSidebar===false ? "19.7rem" : "24rem"}`
        }}
    >
        <img src="https://i.ytimg.com/vi/TZ7aoZG11Cc/maxresdefault.jpg" className="card-img-top" alt="video-thumbnail" />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
  )
}

export default Video