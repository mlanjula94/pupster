import React from "react";
import { NavLink } from "react-router-dom";


//Depending on the current path, this component sets the "active" className on the appropriate navigation link item
const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <NavLink className="navbar-brand" to="/" activeClassName="active">Pupster</NavLink>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/" activeClassName="active">About</NavLink>
          <NavLink className="nav-item nav-link" to="/discover" activeClassName="active">Discover</NavLink>
          <NavLink className="nav-item nav-link" to="/search" activeClassName="active">Search</NavLink>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;