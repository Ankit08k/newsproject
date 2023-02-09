import React, { Component } from 'react'
import logo from './new.png'
import {Link} from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <img src={logo} alt="Logo" width="110" height="126" style={{marginLeft:"20px"}}/>
        {/* <img src="newslogo.png" alt="Cinque Terre" width="304" height="236"/>  */}
          {/* <a className="navbar-brand" href="/">Navbar</a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" style={{marginLeft:"14rem"}} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/" style={{color:"red",border:"2px solid red",}}>Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" to="/business" style={{color:"red"}}>Business</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/" to="/entertainment" style={{color:"red"}}>Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/" to="/health" style={{color:"red"}}>Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/" to="/science" style={{color:"red"}}>Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/" to="/sports" style={{color:"red"}}>Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/" to="/technology" style={{color:"red"}}>Technology</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/" to="/general" style={{color:"red"}}>General</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" style={{color:"red"}} aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
                {/* <li className="nav-item">
                  <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true" style={{color:"red"}}>Disabled</a>
                </li> */}
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  />
              <button className="btn btn-outline-success" type="submit" style={{color:"red"}}>Search</button>
            </form>
          </div>
        </div>
      </nav>
    )
  }
}
