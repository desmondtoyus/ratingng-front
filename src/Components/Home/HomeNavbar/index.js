import React, { Component } from 'react';
import { Nav, Navbar, NavItem, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './index.css';


class HomeNavbar extends Component {
  render() {
    return (
      <div className="main_div_of_homeNavbar">
       <Navbar inverse collapseOnSelect className="homeNavbar">
  <Navbar.Header>

    {/* <Navbar.Brand>
      <Link to='/'href="#brand">React-Bootstrap</Link>
    </Navbar.Brand> */}
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
  <Nav>
      <NavItem eventKey={1} href="#">
      <Link to='/'className="sign-in">Product</Link>
      </NavItem>
      <NavItem eventKey={2} href="#">
      <Link to='/'className="sign-in">Services</Link>
      </NavItem>
      <NavItem eventKey={2} href="#">
      <Link to='/'className="sign-in">Experience</Link>
      </NavItem>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
      <Link to='/'className="sign-in">Sign In</Link>
      </NavItem>
      <NavItem eventKey={2} href="#">
      <button class="btn my-2 my-sm-0 sign-up" type="submit">Sign Up</button>
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
      </div>
    );
  }
}

export default HomeNavbar;