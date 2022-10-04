import React from 'react'
import './SidebarSmall.css'

const SidebarSmall = () => {
  return (
    <div className='sidebar-sm'>
        
        <div className="sidebar-sm-items-container">

            <div className="sidebar-sm-item">
                <i className='fa-solid fa-house'></i>
                <p>Home</p>
            </div>
            <div className="sidebar-sm-item">
                <i className='fa-solid fa-compass'></i>
                <p>Explore</p>
            </div>
            <div className="sidebar-sm-item">
                <i className='fa-solid fa-video'></i>
                <p>Shorts</p>
            </div>
            <div className="sidebar-sm-item">
                <i className='fa-solid fa-photo-film'></i>
                <p>Subscriptions</p>
            </div>
            <div className="sidebar-sm-item">
                <i className='fa-solid fa-play'></i>
                <p>Library</p>
            </div>
            <div className="sidebar-sm-item">
                <i className='fa-solid fa-rotate-left'></i>
                <p>History</p>
            </div>

        </div>

    </div>
  )
}

export default SidebarSmall