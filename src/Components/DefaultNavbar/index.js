import React, { Component } from 'react';
import { Nav, Navbar, NavItem, } from 'react-bootstrap';
import './index.css';


class DefaultNavbar extends Component {
  render() {
    return (
      <div className="main_div_of_homeNavbar">
      
       <Navbar inverse collapseOnSelect className="homeNavbar">
  <Navbar.Header>
  <label><img alt="ratingng log" className="style_of_logo" src={require('../../assets/ratingNgLogo.svg')} /></label>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
  <Nav pullLeft >
      <NavItem eventKey={1} href="#">
      <span className="sign-in">Product</span>
      </NavItem>
      <NavItem eventKey={2} href="#">
      <span className="sign-in">Services</span>
      </NavItem>
      <NavItem eventKey={2} href="#">
      <span className="sign-in">Experience</span>
      </NavItem>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
      <span className="sign-in">Sign In</span>
      </NavItem>
      <NavItem eventKey={2} href="#">
      <button className ="btn my-2 my-sm-0 sign-up" type="submit">Sign Up</button>
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
      </div>
    );
  }
}

export default DefaultNavbar;