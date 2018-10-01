import React, { Component } from 'react';
import Drawer from '../drawer/index';
import { Link } from 'react-router-dom';

import './index.css';


class Navbarr extends Component {
  render() {
    return (
      <div className="main_div_of_navbar">
        <div className="Header_Of_Login">
        <div className="div_of_log_N_menu">
          <span> <Drawer /> </span>
          <span><img alt="ratingng log" className="style_of_logo" src={require('../../assets/ratingNgLogo.svg')} /></span>
        </div>
          <div className="div_of_navs">
            <span>
              <i aria-hidden='true' className='search icon defaultIconStyle alignMiddle' />
            </span>
            <span className="">
              <Link to='/' href="" className="defaultLinks alignMiddle"> Sign In </Link>
            </span>
            <span>

              <button className="btn my-2 my-sm-0 sign-up" type="submit">Sign Up</button>
            </span>

          </div>
        </div>
      </div>
    );
  }
}

export default Navbarr;