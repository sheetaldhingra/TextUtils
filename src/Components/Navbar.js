import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg bg-body-tertiary navbar-${props.mode} bg-${props.mode}`} data-bs-theme={props.mode}>
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">{props.homeText}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about" >{props.aboutText}</Link>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form> */}
      <div className="d-flex">
        <div className="bg-primary rounded mx-2" style={{height:'30px',width:'30px'}} onClick={()=>props.toggleMode('primary')}></div>
        <div className="bg-secondary rounded mx-2" style={{height:'30px',width:'30px'}} onClick={()=>props.toggleMode('secondary')}></div>
        <div className="bg-danger rounded mx-2" style={{height:'30px',width:'30px'}} onClick={()=>props.toggleMode('danger')}></div>
        <div className="bg-success rounded mx-2" style={{height:'30px',width:'30px'}} onClick={()=>props.toggleMode('success')}></div>
        <div className="bg-warning rounded mx-2" style={{height:'30px',width:'30px'}} onClick={()=>props.toggleMode('warning')}></div>
        <div className="bg-info rounded mx-2" style={{height:'30px',width:'30px'}} onClick={()=>props.toggleMode('info')}></div>
      </div>
      <div className={`form-check form-switch text-${props.mode === "light" ? 'dark' : 'light'}`}>
      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={()=>props.toggleMode(null)} />
  <label className="form-check-label" htmlFor="flexRadioDefault1">
   Toggle Mode
  </label>
</div>
    </div>
  </div>
</nav>
    </>
  )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired,
    homeText: PropTypes.string.isRequired
}
Navbar.defaultProps={
    title: "TextUtils",
    aboutText: "About",
    homeText: "Home"
}
