import React, { Component } from 'react';
import LogginNavbar from '../LogginNavbar/index';
import Footer from '../footer/index'
import { Link } from 'react-router-dom';
import {
    Grid,
    Row,
    Col,
    Panel,
    Button,
    FormGroup,
    FormControl,
    Form,
    ControlLabel,
    Radio
} from "react-bootstrap";
import './index.css'


class Screen5 extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div className="main_div_of_screen5 main-container">
        <LogginNavbar />
                <Grid>
                    <Row style={{margin:" 100px 0 0 0"}}>
                        <Col xs={0} sm={0} md={2} lg={2}></Col>
                        <Col xs={12} sm={12} md={8} lg={8}>
                            <Panel>
                                <Panel.Body>
                                    <Row className="show-grid">
                                        <Col xs={12} sm={4} md={4} lg={4}>
                                            <br />
                                            <Link to='/' className="navs">Account Basics</Link >
                                            <Link to='/' className="navs">Profile</Link>
                                            <Link to='/' className="navs">Notifications</Link>
                                            <Link to='/' className="navs">Social Networks</Link>
                                            <Link to='/' className="navs">Security</Link>
                                            <br />
                                        </Col>
                                        <Col xs={12} sm={8} md={8} lg={8}>
                                            <Row>
                                                <Col xs={12} sm={12} md={12} lg={12}>
                                                    <h2 className="heading">Account Basics</h2>
                                                </Col>
                                            </Row>
                                            <br />
                                            <Form inline>
                                                <Row>
                                                    <Col xs={12} sm={12} md={12} lg={12}>
                                                        <FormControl
                                                            className="input"
                                                            type="email"
                                                            placeholder="johndoe@example.com"
                                                        />
                                                    </Col>
                                                </Row>
                                                <br />
                                                <Row>
                                                    <Col xs={12} sm={12} md={12} lg={12}>
                                                        <FormControl
                                                            className="input"
                                                            type="password"
                                                            placeholder="Password"
                                                        />
                                                    </Col>
                                                </Row>
                                                <br />
                                                <Row>
                                                    <Col xs={12} sm={12} md={12} lg={12}>
                                                        <FormControl
                                                            className="input"
                                                            type="password"
                                                            placeholder="Type Password Again"
                                                        />
                                                    </Col>
                                                </Row>
                                                <br />
                                                <Row>
                                                    <Col xs={12} sm={12} md={12} lg={12}>
                                                        <FormControl
                                                            className="input select"
                                                            componentClass="select"
                                                        >
                                                            <option value="United States">United States</option>
                                                            <option value="United Kingdom">United Kingdom</option>
                                                        </FormControl>
                                                    </Col>
                                                </Row>
                                                <br />
                                                <Row>
                                                    <Col xs={12} sm={12} md={12} lg={12}>
                                                        <FormGroup>
                                                            <Col xs={12} sm={12} md={3} lg={3}>
                                                                <Radio name="radioGroup" inline>
                                                                    Male
                                                                </Radio>
                                                            </Col>
                                                            <Col xs={12} sm={12} md={3} lg={3}>
                                                                <Radio name="radioGroup" inline>
                                                                    Female
                                                                </Radio>
                                                            </Col>
                                                            <Col xs={12} sm={12} md={3} lg={3}>
                                                                <Radio name="radioGroup" inline>
                                                                    Custom
                                                                </Radio>
                                                            </Col>
                                                            <Col xs={0} sm={0} md={3} lg={3}></Col>
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                            </Form>
                                            <br />
                                            <Row>
                                                <Col xs={12} sm={12} md={12} lg={12}>
                                                    <h2 className="heading">Profile</h2>
                                                </Col>
                                            </Row>
                                            <br />
                                            <Form inline>
                                                <Row>
                                                    <Col xs={12} sm={12} md={6} lg={6}>
                                                        <FormControl
                                                        style={{margin:"5px"}}
                                                            className="input"
                                                            type="text"
                                                            placeholder="Bianca"
                                                        />
                                                    </Col>
                                                    <Col xs={12} sm={12} md={6} lg={6} >
                                                        <FormControl
                                                        style={{margin:"5px"}}
                                                            className="input"
                                                            type="text"
                                                            placeholder="Lungu Montoya"
                                                        />
                                                    </Col>
                                                </Row>
                                                <br />
                                                <Row>
                                                    <Col xs={12} sm={12} md={12} lg={12}>
                                                    <Button className="changePic">Change picture</Button>
                                                    </Col>
                                                </Row>
                                                <br />
                                                <Row>
                                                    <Col xs={12} sm={12} md={12} lg={12}>
                                                        <ControlLabel>www/rating.ng/</ControlLabel>
                                                        <FormControl
                                                            type="text"
                                                            placeholder="Qwerty"
                                                        />
                                                    </Col>
                                                </Row>
                                                <br />
                                                <Row>
                                                    <Col xs={12} sm={12} md={12} lg={12}>
                                                        <FormControl
                                                            className="input"
                                                            componentClass="textarea"
                                                            placeholder="About you"
                                                            rows="5"
                                                        />
                                                    </Col>
                                                </Row>
                                                <br />
                                                <Row>
                                                    <Col xs={12} sm={12} md={12} lg={12}>
                                                        <FormControl
                                                            className="input"
                                                            type="text"
                                                            placeholder="Location"
                                                        />
                                                    </Col>
                                                </Row>
                                            </Form>
                                            <br />
                                            <Row>
                                                <Col xs={12} sm={12} md={12} lg={12}>
                                                    <h2 className="heading">Notifications</h2>
                                                </Col>
                                            </Row>
                                            <br />
                                            <Row>
                                                <Col xs={12} sm={12} md={12} lg={12}>
                                                    <p>We'll always let you know about important changes, but you pick what else you want to hear about.</p>
                                                </Col>
                                            </Row>
                                            <br />
                                            <Row>
                                                <Col xs={12} sm={12} md={12} lg={12}>
                                                    <h4 className="heading">On Rating.Ng</h4>
                                                </Col>
                                            </Row>
                                            <br />
                                            <Row>
                                                <Col xs={12} sm={12} md={12} lg={12}>
                                                    <p>Control whatever you see activity from Facebook friends and people you follow. This include things like products they reviewed, people they follow and reviews they created.</p>
                                                </Col>
                                            </Row>
                                            <br />
                                            <Row>
                                                <Col xs={3} sm={2} md={2} lg={2}>
                                                    <label className="switch">
                                                        <input className="toggle" type="checkbox" />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </Col>
                                                <Col xs={9} sm={10} md={10} lg={10}>
                                                    <p>See activity from other people</p>
                                                </Col>
                                            </Row>
                                            <br />
                                            <Row>
                                                <Col xs={9} sm={9} md={9} lg={9}>
                                                    <h4 className="heading">By email</h4>
                                                    <p>just the good stuff</p>
                                                </Col>
                                                <Col xs={3} sm={3} md={3} lg={3}>
                                                    <i aria-hidden='true' className='add big icon' />
                                                </Col>
                                            </Row>
                                            <br />
                                            <Row>
                                                <Col xs={9} sm={9} md={9} lg={9}>
                                                    <h4 className="heading">By push notification</h4>
                                                    <p>just the good stuff</p>
                                                </Col>
                                                <Col xs={3} sm={3} md={3} lg={3}>
                                                    <i aria-hidden='true' className='add big icon' />
                                                </Col>
                                            </Row>
                                            <br />
                                            <Row>
                                                <Col xs={12} sm={12} md={12} lg={12}>
                                                    <h2 className="heading">Social Networks</h2>
                                                </Col>
                                            </Row>
                                            <br />
                                            <Row>
                                                <Col xs={12} sm={12} md={12} lg={12}>
                                                    <p>Facebook</p>
                                                </Col>
                                            </Row>
                                            <br />
                                            <Row>
                                                <Col xs={2} sm={2} md={2} lg={2}>
                                                    <i aria-hidden='true' className='blue facebook f big icon' />
                                                </Col>
                                                <Col xs={10} sm={10} md={10} lg={10}>
                                                    <p className="socials">Connected to Facebook</p>
                                                    <p className="heading socials">http://www.facebook.com/Qwerty</p>
                                                </Col>
                                            </Row>
                                            <br />
                                            <Row>
                                                <Col xs={3} sm={2} md={2} lg={2}>
                                                    <label className="switch">
                                                        <input className="toggle" type="checkbox" />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </Col>
                                                <Col xs={9} sm={10} md={10} lg={10}>
                                                    <p className="alignCenter">Use your Facebook account to log in</p>
                                                </Col>
                                            </Row>
                                            <br />
                                            <Row>
                                                <Col xs={12} sm={12} md={12} lg={12}>
                                                    <p>Gmail</p>
                                                </Col>
                                            </Row>
                                            <br />
                                            <Row>
                                                <Col xs={2} sm={2} md={2} lg={2}>
                                                    <i aria-hidden='true' className='envelope outline big icon' />
                                                </Col>
                                                <Col xs={10} sm={10} md={10} lg={10}>
                                                    <p className="socials">Not connected to Gmail</p>
                                                    <p className="heading socials">Connect to Gmail</p>
                                                </Col>
                                            </Row>
                                            <br />
                                            <Row>
                                                <Col xs={3} sm={2} md={2} lg={2}>
                                                    <label className="switch">
                                                        <input className="toggle" type="checkbox" />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </Col>
                                                <Col xs={9} sm={10} md={10} lg={10}>
                                                    <p>Connect to Gmail</p>
                                                </Col>
                                            </Row>
                                            <br />
                                            <Row>
                                                <Col xs={12} sm={12} md={12} lg={12}>
                                                    <h2 className="heading">Security</h2>
                                                </Col>
                                            </Row>
                                            <br />
                                            <Row>
                                                <Col xs={12} sm={12} md={12} lg={12}>
                                                    <h4 className="heading">Enable Two-factor Authentication.</h4>
                                                </Col>
                                            </Row>
                                            <br />
                                            <Row>
                                                <Col xs={3} sm={2} md={2} lg={2}>
                                                    <label className="switch">
                                                        <input className="toggle" type="checkbox" />
                                                        <span className="slider round"></span>
                                                    </label>
                                                </Col>
                                                <Col xs={9} sm={10} md={10} lg={10}>
                                                    <p>Require code at log in</p>
                                                </Col>
                                            </Row>
                                            <br />
                                            <Row>
                                                <Col xs={12} sm={12} md={12} lg={12}>
                                                    <p>This makes your account extra secure. Along with your password, you'll need to enter the secret code that we text your phone each time you log in.</p>
                                                </Col>
                                            </Row>
                                            <br />
                                            <Row>
                                                <Col xs={12} sm={6} md={6} lg={6}>
                                                <button className="btn my-2 my-sm-0 saveSettings" type="submit">Save Settings</button>
                                                </Col>
                                                <Col xs={12} sm={6} md={6} lg={6}>
                                                    <Button className="cancel">Cancel</Button>
                                                </Col>
                                            </Row>
                                            <br />
                                        </Col>
                                    </Row>
                                </Panel.Body>
                            </Panel>
                        </Col>
                        <Col xs={0} sm={0} md={2} lg={2}></Col>
                    </Row>
                </Grid>
                <Footer />
            </div>
        );
    }
}

export default Screen5;