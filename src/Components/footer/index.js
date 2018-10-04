import React, { Component } from 'react';
import './index.css';
import { Link } from "react-router-dom";

class Footer extends Component {
    constructor() {
        super();
        this.state = {

        }
    }


    render() {
        return (
            <div style= {{width: '100%',  backgroundColor: '#2F313D', position: 'relative',  marginTop:'300px'}} >
    <div className="" style={{ height: '1px', position: 'relative', zIndex: '2'}}>
   </div>
        
              {/* <!-- FOOTER --> */}
              <footer style={{width: '100%', backgroundColor: '#2F313D', position: 'relative', zIndex: '2'}}>
                  <div style={{ marginTop:'20px'}} >
                    <div className="row">
          
                      <div className="col-md-3 col-sm-6 col-xs-12">
                        <span className="logo">
                          <img src="img/hommore-wordmark.svg" alt="hommore wordmark"/>
                        </span>
                      </div>
          
                      <div className="col-md-3 col-sm-6 col-xs-12">
                        <ul className="menu-address">
                          <Link to="mailto:info@hommore.com">
                          <span>info@hommore.com</span>
                          </Link>
                          <li>
                            <span className="menu-address">878 Schoen Road</span>
                          </li>
          
                          <li>
                            <span className="menu-address">United States</span>
                          </li>
          
                          <li>
                            <span className="menu-address">866 hommore</span>
                          </li>
                        </ul>
                      </div>
          
                      <div className="col-md-3 col-sm-6 col-xs-12">
                        <ul className="menu">
                          <span className="menu-h1">Menu</span>
                          <div className="menu-line"></div>
                          <li>
                            <Link to ="/"  className="menu" >Home</Link>
                          </li>
          
                          <li>
                            <Link to ="/Resources"  className="menu" >Resources</Link>
                          </li>
          
                          <li>
                            <Link to ="/Report"  className="menu" >Report</Link>
                          </li>
          
                          <li>
                            <Link to ="/Donate" className="menu" >Donate</Link>
                          </li>
                        </ul>
                      </div>
          
                      <div className="col-md-3 col-sm-6 col-xs-12">
                        <ul className="menu">
                          <span className="menu-h1">Support</span>
                          <div className="menu-line"></div>
                          <li>
                            <Link to ="/About" className="menu" >About</Link>
                          </li>
          
                          <li>
                            <Link to ="/Contact" className="menu" >Contact</Link>
                          </li>
          
                          <li>
                             <Link to ="/" className="menu" >Terms & Conditions</Link>
                          </li>
          
                        </ul>
                      </div>
          
                    </div>
                  </div>
                  <br/>
                  <br/>
                  <br/>
                  <div style={{height: '50px', width: '100%', borderTop: '1px solid #414354', backgroundColor: '#2F313D'}}>
                    <p className="copyright">Copyright © 2017 </p>
                    <span style={{float: 'left', paddingTop: '10px'}}>
                      <img src="img/heart-icon.svg" alt="heart icon" />
                    </span>
                    <span className="copyright">hommore <span style={{color: 'transparent'}}> | </span> <span> | </span> <span style={{color: 'transparent'}}> | </span> hommore.com</span>
                    <span style={{ float: 'right', paddingTop: '10px', paddingRight: '20px', color: '#6E7493' }}>
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </span>
                    <span style={{ float: 'right', paddingTop: '10px', paddingRight: '20px', color: '#6E7493' }}>
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </span>
                    <span style={{float: 'right', paddingTop: '10px', paddingRight: '20px', color: '#6E7493'}}>
                      <i className="fa fa-google-plus" aria-hidden="true"></i>
                    </span>
                    <span style={{ float: 'right', paddingTop: '10px', paddingRight: '20px', color: '#6E7493' }}>
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </span>
                    <span style={{ float: 'right', paddingTop: '10px', paddingRight: '20px', color: '#6E7493' }}>
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </span>
                  </div>
                </footer>
              </div>
                             
        );
    }
}

export default Footer;