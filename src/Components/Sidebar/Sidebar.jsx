import React, { Component } from 'react'
import './Sidebar.css'

class Sidebar extends Component {
  render() {
  return (

    <div className="sidebar">

      <div className='sidebar-items-container'>
        
        <ul className="sidebar-items-list">
          <li className="sidebar-item"> <i className="fa-solid fa-house"></i> <span>Home</span> </li>
          <li className="sidebar-item"> <i className="fa-solid fa-compass"></i> <span>Explore</span> </li>
          <li className="sidebar-item"> <i className="fa-solid fa-video"></i> <span>Shorts</span> </li>
          <li className="sidebar-item"> <i className="fa-solid fa-photo-film"></i> <span>Subscriptions</span> </li>
        </ul>

        <hr />

        <ul className="sidebar-items-list">
          <li className="sidebar-item"> <i className="fa-solid fa-play"></i> <span>Library</span> </li>
          <li className="sidebar-item"> <i className="fa-solid fa-rotate-left"></i> <span>History</span> </li>
        </ul>


        <hr />
        
        <div className="sign-in-menu">
          <span>Sign in to like videos,</span> <br />
          <span>comment, and subscribe.</span> <br />
          <button> <i className='fa-solid fa-user'></i> SIGN IN </button>
        </div>
        
        <hr />

        <ul className="sidebar-items-list">
          <p>EXPLORE</p>
          <li className="sidebar-item"> <i className="fa-solid fa-music"></i> <span>Music</span> </li>
          <li className="sidebar-item"> <i className="fa-solid fa-trophy"></i> <span>Sports</span> </li>
          <li className="sidebar-item"> <i className="fa-solid fa-gamepad"></i> <span>Gaming</span> </li>
          <li className="sidebar-item"> <i className="fa-solid fa-photo-film"></i> <span>Movies</span> </li>
          <li className="sidebar-item"> <i className="fa-solid fa-newspaper"></i> <span>News</span> </li>
          <li className="sidebar-item"> <i className="fa-solid fa-wifi"></i> <span>Live</span> </li>
          <li className="sidebar-item"> <i className="fa-solid fa-shirt"></i> <span>Fashion & Beauty</span> </li>
          <li className="sidebar-item"> <i className="fa-solid fa-book"></i> <span>Learning</span> </li>
          <li className="sidebar-item"> <i className="fa-brands fa-youtube" style={{color: "red"}}></i> <span>Spotlight</span> </li>
          <li className="sidebar-item"> <i className="fa-solid fa-vr-cardboard"></i> <span>360° Video</span> </li>
        </ul>

        <hr />

        <div className="browse">
          <i className="fa-solid fa-plus"></i>
          <span>Browse channels</span>
        </div>

        <hr />

        <ul className="sidebar-items-list">
          <li className="sidebar-item"> <i className="fa-solid fa-house"></i> <span>Home</span> </li>
          <li className="sidebar-item"> <i className="fa-solid fa-compass"></i> <span>Explore</span> </li>
          <li className="sidebar-item"> <i className="fa-solid fa-video"></i> <span>Shorts</span> </li>
          <li className="sidebar-item"> <i className="fa-solid fa-photo-film"></i> <span>Subscriptions</span> </li>
        </ul>

        <hr />

        <ul className="sidebar-items-list">
          <p style={{marginLeft: "-20px"}}>MORE FROM YOUTUBE</p>
          <li className="sidebar-item"> <i className="fa-brands fa-youtube" style={{color: "red"}}></i> <span>YouTube Premium</span> </li>
          <li className="sidebar-item"> <i className="fa-brands fa-youtube" style={{color: "red"}}></i> <span>YouTube Music</span> </li>
          <li className="sidebar-item"> <i className="fa-brands fa-youtube" style={{color: "red"}}></i> <span>YouTube Kids</span> </li>
          <li className="sidebar-item"> <i className="fa-brands fa-youtube" style={{color: "red"}}></i> <span>YouTube </span> </li>
        </ul>

        <hr />

        <ul className="sidebar-items-list">
          <li className="sidebar-item"> <i className="fa-solid fa-gear"></i> <span>Settings</span> </li>
          <li className="sidebar-item"> <i className="fa-solid fa-flag"></i> <span>Report history</span> </li>
          <li className="sidebar-item"> <i className="fa-solid fa-question"></i> <span>Help</span> </li>
          <li className="sidebar-item"> <i className="fa-solid fa-circle-info"></i> <span>Send feedback</span> </li>
        </ul>

        <hr />

        <div className="sidebar-footer">
          <p> <span>About</span> <span>Press</span> <span>Copyright</span> </p>
          <p> <span>Contact us</span> <span>Creators</span> </p>
          <p> <span>Advertise</span> <span>Developers</span> </p>
          <br />
          <p> <span>Terms</span> <span>Privacy</span> <span>Policy & Safety</span> </p>
          <p>How YouTube works</p>
          <p>Test new features</p>

          <br />
          <p style={{color: "#adadad"}}>© 2022 Google LLC</p>
        </div>

      </div>

    </div>
  )
  }
}
export default Sidebar