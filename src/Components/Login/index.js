import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import {Button, Grid,Row,Col,FormGroup,FormControl ,Panel} from 'react-bootstrap';

class Login extends Component {
  render() {
    return (
      <div className="main_div_of_login">
      <Grid>
      <Row className="show-grid" style={{margin:" 80px 0 0 0"}}>
          <Col xs={0} sm={0} md={4} lg={4}></Col>
                        <Col xs={12} sm={12} md={4} lg={4}>
              <Panel>
                <Panel.Body>
    <div className='login_div'>
     <p className="center">logo</p>
     <p className="log_in_to_see center">Log in to see more</p>
     <p className="access_pinterest center">Access Pinterest's best ideas with a</p>
     <p className='free_account center'>free account</p>
     <form className="formm">
        <FormGroup
          controlId="formBasicText1"
        >
          <FormControl
            type="email"
            placeholder="Email or phone number"
          />
        </FormGroup>
        <FormGroup
          controlId="formBasicText"
        >
          <FormControl
            type="password"
            placeholder="Password"
          />
        </FormGroup>
        <Button className="login_btn" disabled={true}>Log in</Button>
        <p className="OR center">OR</p>
        <button className="fb_btn">
        <img alt="ratingng logo" src={require('../../assets/fb.png')} height="30px" width="35px"/> Continue With Facebook
      </button>
      <button className="google_btn">
      <img alt="ratingng logo" src={require('../../assets/google.jpg')} height="25px" width="25px"/>
       Continue With Google
      </button>
      <p className="by_continuing center">By continuing, you agree to Pinterest's <span className="terms_of">Terms of Service, Privacy Policy</span> </p>
      <p className="forgot_pass center"><Link to= "/">Forgot your password?</Link></p>
      <p className="border_line"></p>
      <p className='not_on_pinterest center'>Not on Pinterest yet?<Link to= "/">Sign up</Link></p>
      </form>
    </div>
    </Panel.Body>
              </Panel>
            </Col>
            <Col xs={0} sm={0} md={4} lg={4}></Col>
          </Row>
</Grid>;

      </div>
    );
  }
}

export default Login;
