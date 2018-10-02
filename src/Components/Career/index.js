import React, {Component} from 'react';
import '../Contact/index.css';
import DefaultNavbar from '../defaultNavbar/index';
import Footer from '../footer';

class Career extends Component{

    render(){

    return(

        <div className="main_div_of_home main-container home-container" >
        <DefaultNavbar />

    <div className="resources-area" style={{marginTop:'5%'}}>
      <div className="container" >
      <div className="row">
        <div className="col-sm-12">
        </div>
      </div>
        <div className="row">
          <div className="col-md-12 higlights" style={{height: '100%', paddingLeft: '25px', position: 'relative', zIndex: '2'}}>
            <div className="highlights-card">
              <br/>
              <br/>
              <span className="about-title">Join Our Team</span>
              <br/>
               <div className="highlights-card-content" style={{paddingTop:'2px'}}>

                <div className="col-md-8" style={{display: 'inline'}}>
                  <br/>
                  <hr/>
                  <p>job description goes here </p>
                  <br/>
                  <br/>
                  <div className="form-group" style={{marginBottom: '0px'}}>
                  <select name="category" className="form-control" style={{width:'100%', fontSize: '15px', border: '1px solid #FF6B6B', paddingLeft: '30px', paddingRight: '30px', borderRadius: '30px', height: '50px', color: '#949494'}} onChange={this.handleInputChange}>
                    <option>Click to Select a Department </option>
                    <option>Media Marketing</option>
                    <option>Tech</option>
                  </select>
                  <br/>
                </div>
                
                  <div className="report-input-fields" style={{display: 'inline'}}>
                    <div className="input-group" style={{maxWidth: '800px', width: '100%'}}>
                      <input type="text" className="form-control" style={{borderRadius: '30px', maxWidth: '800px', width: '100%'}} placeholder="Your Full name"/>
                    </div>
                    <br/>

                  </div>
                  <div className="report-input-fields" style={{display: 'inline'}}>
                    <div className="input-group" style={{maxWidth: '800px', width: '100%'}}>
                      <input type="text" className="form-control" style={{borderRadius: '30px', maxWidth: '800px', width: '100%'}} placeholder="Your Phone Number"/>
                    </div>
                    <br/>

                  </div>
                  <div className="report-input-fields" style={{display: 'inline'}}>
                    <div className="input-group" style={{maxWidth: '800px', width: '100%'}}>
                      <input type="email" className="form-control" style={{borderRadius: '30px', maxWidth: '800px', width: '100%'}} placeholder="Your Email Address"/>
                    </div>
                    <br/>

                  </div>
         

                  <div className="report-input-fields" style={{display: 'inline'}}>
                    <div className="input-group" style={{maxWidth: '800px', width: '100%'}}>
                      <textarea className="form-control" rows="8" id="desciption" style={{borderRadius: '30px', maxWidth: '800px', width: '100%'}} placeholder="Brief description"></textarea>

                    </div>
                    <br/>
                    <br/>

                  </div>
                  <div className="report-input-fields">
                    <div className="input-group">
                      <a href="submit-report.html">
                        <div className="input-group-btn" style={{textAlign: 'left'}}>
                          <button className="btn btn-submit" type="submit" style={{marginLeft: '3px'}}>Submit</button>
                        </div>
                      </a>
                    </div>

                  </div>
                </div>
              </div>

              <br/>
              <br/>

            </div>
          </div>
        </div>
      </div>
    </div>
   <Footer />
</div>
    );
}
}

export default Career;


    