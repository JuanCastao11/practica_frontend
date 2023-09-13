import { NavLink } from "react-router-dom"
import {BiCube} from "react-icons/bi"




const icons = () => {
  return (
    <>
    <header className="head">
        <div className="container">
        <h1 className="title">CT CREATIVE TIM</h1>
        <p className="text"></p>
        <button className="Dashboard"><BiCube className="Bicube"/><span className="textoDash">DASHBOARD</span></button>
        <nav>
            <ul className="menu">
                <li className="">
                    <NavLink to="/" className="">
                    <BiCube className="icons"/>
                    ICONS
                    </NavLink>
                </li>
                <li className="">
                    <NavLink to="/maps">
                    MAPS
                    </NavLink>
                </li>
                <li className="">
                    <NavLink to="/notification">
                    NOTIFICATIONS
                    </NavLink>
                </li>
                <li className="">
                    <NavLink to="/table-list">
                    USER PROFILE
                    </NavLink>                    
                </li>
                <li className="">
                    <NavLink to="/typographic">
                    TABLE LIST
                    </NavLink>
                </li>
                <li className="">
                    <NavLink to="/user-profile">
                    TYPOGRAPHY 
                    </NavLink>
                </li>
            </ul>
        </nav>
        </div>
    </header>
    </>
  )
}

export default icons