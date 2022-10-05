import React from 'react'
import './Video.css'

const Video = (props) => {
  return (
    <div className="card"
      style={{
        width: `${props.openSidebar===false ? "26rem" : "23rem"}`
      }}
    >
        
      <img src="https://i.ytimg.com/vi/TZ7aoZG11Cc/maxresdefault.jpg" className="card-img-top vid-thumbnail" alt="video-thumbnail" />
        

      <div className="card-body">  

        <div className="channel-img">
          <span className='runtime'
            style={{
              top: `${props.openSidebar===false ? "207px" : "180px"}`
            }}
          >2:54</span>
          <img id="channel-img" src="https://i.ytimg.com/vi/TZ7aoZG11Cc/maxresdefault.jpg" alt="channel-img" />
        </div>
        
        <div className="vid-details">
          <h6 className="card-title">Night Changes - One Direction (Tom Clark Cover)</h6>
          <p className="card-text channel-name"><small className="text-muted">PewDiePie</small></p>
          <p className="card-text views-time">
            <span><small className="text-muted">234k views</small></span> &nbsp;
            <span>·</span> &nbsp;
            <span><small className="text-muted">1 year ago</small></span>
          </p>
        </div>
      </div>

    </div>
  )
}

export default Video