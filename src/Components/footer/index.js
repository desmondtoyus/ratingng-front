import React, { Component } from 'react';
import './index.css';
import { Row, Col } from "react-bootstrap";
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
   <div style={{marginLeft:'28%', marginRight:'auto', width:'50%', textAlign: 'center'}}> 
   <Row style={{margin:"10px 0 0 0"}}>
   <Col md={1}></Col>
   <Col md={3}> <Link to ="/" className="menu" >Terms & Conditions</Link></Col>
   <Col md={2}>  <Link to ="/contact" className="menu" >Contact</Link></Col>
   <Col md={2}> <Link to ="/about" className="menu" >About Us</Link></Col>
   <Col md={2}><Link to ="/career" className="menu" >Careers</Link></Col>
       <Col md={2}> </Col>

   </Row>
   </div>
              <footer style={{width: '100%', backgroundColor: '#2F313D', position: 'relative', zIndex: '2'}}>
                  <div style={{height: '50px', width: '100%', borderTop: '1px solid #414354', backgroundColor: '#2F313D'}}>
                    <span style={{float: 'left', paddingTop: '10px', marginLeft:'10px'}}>
                      <img src={require('../../assets/favicon.svg')}  alt="heart icon" />
                    </span>
                    <span className="copyright" style={{marginLeft:'40%', marginRight:'auto'}}>Rating.Ng <p className="copyright">Copyright © 2018 </p><span style={{color: 'transparent'}}> </span></span>
                    <span style={{ float: 'right', paddingTop: '10px', paddingRight: '20px', color: '#6E7493' }}>
                    <i aria-hidden='true' className='facebook f icon socialIcon_default' />
                    </span>
                    <span style={{ float: 'right', paddingTop: '10px', paddingRight: '20px', color: '#6E7493' }}>
                    <i aria-hidden='true' className='twitter icon socialIcon_default' />
                    </span>
                    <span style={{ float: 'right', paddingTop: '10px', paddingRight: '20px', color: '#6E7493' }}>
                    <i aria-hidden='true' className='instagram icon socialIcon_default' />
                    </span>
                    <span style={{ float: 'right', paddingTop: '10px', paddingRight: '20px', color: '#6E7493' }}>
                    <i aria-hidden='true' className='snapchat ghost icon socialIcon_default' />
                    </span>
                  </div>
                </footer>
              </div>
                             
        );
    }
}

export default Footer;