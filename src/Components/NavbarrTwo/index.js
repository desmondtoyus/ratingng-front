import React, { Component } from 'react';
import './index.css';
import Drawer from '../drawer/index';
import { Link } from 'react-router-dom';

class NavbarrTwo extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="main_div_of_navbar_2">
            <div className="Header_Of_Login">
            <div className="div_of_log_N_menu">
              <span> <Drawer /> </span>
              <span><img alt="ratingng log" className="style_of_logo" src={require('../../assets/ratingNgLogo.svg')} /></span>
            </div>
              <div className="div_of_navs">
                <span className="alignMiddle">
                  <i aria-hidden='true' className='search icon defaultIconStyle' />
                </span>
                
                <span className="alignMiddle">
                  <Link to='/' href="" className="defaultLinks"> Home </Link>
                </span>

                <span className="alignMiddle">
                  <Link to='/' href="" className="defaultLinks"> Following </Link>
                </span>

                <span className="alignMiddle">
                  <Link to='/' href="" className="defaultLinks"> Bianca </Link>
                </span>

                <span className="alignMiddle">
                <i aria-hidden='true' className='comment outline icon defaultIconStyle' />
                </span>

                <span className="alignMiddle">
                <i aria-hidden='true' className='bell outline icon defaultIconStyle' />
                </span>

                <span className="alignMiddle">
                <i aria-hidden='true' className=' ellipsis horizontal icon defaultIconStyle' />
                </span>
    
              </div>
            </div>
          </div>
        );
    }
}

export default NavbarrTwo;