import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import {Button, Grid,Row,Col,FormGroup,FormControl ,Panel} from 'react-bootstrap';
import {Icon} from "semantic-ui-react";

class Login extends Component {
  render() {
    return (
      <div className="main_div_of_login">
      <Grid>
      <Row className="show-grid" style={{margin:"80px 0 auto 0"}}>
          <Col xs={0} sm={0} md={4} lg={4}></Col>
                        <Col xs={12} sm={12} md={4} lg={4}>
              <Panel>
                <Panel.Body>
    <div className='login_div'>
     <p className="center"><img alt="ratingng log" className="ratingLogo" src={require('../../assets/ratingNgLogo.svg')} width="120px" /></p>
     <p className="log_in_to_see center">Log in</p>
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
        <Button className="login_btn" bsStyle="primary">Log in</Button>
        <p className="OR center">OR</p>
        <Button className="fb_btn" bsStyle="primary"> <Icon name ='facebook official'/> Continue With Facebook</Button>
        <Button className="google_btn"bsStyle="primary"> <Icon name ='google'/>  Continue With Google</Button>
      <p className="by_continuing center">By continuing, you agree to Rating.Ng's <span className="terms_of">Privacy Policy</span> </p>
      <p className="forgot_pass center"><Link to= "/">Forgot your password?</Link></p>
      <p className="border_line"></p>
      <p className='not_on_pinterest center'>Not on Rating.Ng yet? <Link to= "/" className='sign_up'> Sign up</Link></p>
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
