import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import SidebarSmall from '../SidebarSmall/SidebarSmall'
import './Navbar.css'

const Navbar = (props) => {

  return (
    <>
    <nav>
        <div className="menu">
            <div className="bars-container" onClick={props.toggleSide}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            <div className='nav-img'>
                <img src={require('../../assets/logo.png')} alt="yt-logo" />
            </div>
        </div>
        <div className="nav-input">
            <input type="text" placeholder='Search'/>
            <div className="nav-search-icon">
                <i className='fa-solid fa-search'></i>
            </div>
        </div>
        <div className="nav-user">
            <button> <i className='fa-solid fa-user'></i> SIGN IN </button>
        </div>
    </nav>


    <div className="side-bar">
        {
            props.openSidebar === true ? 
            <Sidebar openSidebar={props.openSidebar} />
            :
            <SidebarSmall openSidebar={props.openSidebar} />
        }
    </div>
    </>
  )
}
export default Navbar