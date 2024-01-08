import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
// import {useEffect,useState} from 'react';
import { Link } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown';
function Navbar() {
  const { loginWithRedirect,isAuthenticated,user } = useAuth0();
  const { logout } = useAuth0();
  // const[backendData,setBackendData] = useState([{}])
  // useEffect(() =>{
  //   fetch("/api").then(
  //     response => response.json()
  //   ).then(
  //     data =>{
  //       setBackendData(data)
  //     }
  //   )
  // },[])
  return (
    <div>
  <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div className="container-fluid">
  <Link className="navbar-brand" to="/">
      <img src="logo192.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
      International Insights
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/bookanappointment">Book an Appointment</Link></li>
            <li><a className="dropdown-item" href="/">Check Information</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Ask Chatbot</a></li>
          </ul>
        </li> */}
        <NavDropdown
              id="nav-dropdown-dark-example"
              title="Services"
            >
              <NavDropdown.Item as={Link} to="/connections">Connections</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/finance">Financial Guide</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/studies">Studies</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/universities">Universities</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/currencyconverter">Currency Converter</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/connections">Accomodation</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/connections">Flights</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/connections">Country Ranking</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/contactus">Contact Us</Link>
        </li>
        {/* <li className="nav-item">
          <button onClick={useEffect()} className="nav-link active" aria-current="page" href="/">backend</button>
        </li> */}
        
        
      </ul>
      <ul class="navbar-nav">
      {isAuthenticated && 
        <NavDropdown
              id="nav-dropdown-dark-example"
              title={`Welcome, ${user.email}`}
              className="no-dropdown-arrow"
            >
              <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Settings
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>}
      {/* <li className="nav-item mx-2">{isAuthenticated && <p>{user.email}</p>}</li> */}
        {
          isAuthenticated ? (<li className="nav-item ">
            <button type="button" class="btn btn-primary" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
          </li>
            )  :(
              <li className="nav-item">
          <button type="button" class="btn btn-primary" onClick={() => loginWithRedirect()}>Log In</button>
          
        </li>
            )
        }
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
