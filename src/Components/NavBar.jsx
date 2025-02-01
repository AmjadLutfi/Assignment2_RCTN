import React from "react";
import {Link} from 'react-router-dom'
import image from '../images/amjad.jpg'

export default function NavBar(){
    return(
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-warning sidebar">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 profile">
                        <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <span className="fs-5 d-none d-sm-inline"><Link to="/DataUser">User</Link></span>
                        </a>
                        <img src={image} alt="hugenerd" width="150" height="150" className="rounded-circle"/>
                        <h3 className="profile-name">Aulia Amjad Lutfi</h3>
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-center menu">
                            
                            <li className="menu-item">
                                <Link to="/About">About</Link> 
                            </li>
                            <li className="menu-item">
                                <Link to="/Experience">Experience</Link> 
                            </li>
                            <li className="menu-item">
                                <Link to="/Awards">Awards</Link> 
                            </li>
                            <li className="menu-item">
                                <Link to="/Interest">Interest</Link> 
                            </li>
                            <li className="menu-item">
                                <Link to="/Skills">Skills</Link> 
                            </li>
                            <li className="menu-item">
                                <Link to="/Home">Home</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                        </ul>
                        
                        <hr/>
                        <div className="dropdown pb-4">
                            <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle"/>
                                <span className="d-none d-sm-inline mx-1">loser</span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                                <li><a className="dropdown-item" href="#">New project...</a></li>
                                <li><a className="dropdown-item" href="#">Settings</a></li>
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><a className="dropdown-item" href="#">Sign out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
    )
}