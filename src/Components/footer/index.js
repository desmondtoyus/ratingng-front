import React, { Component } from 'react';
import './index.css';

class Footer extends Component {
    constructor() {
        super();
        this.state = {

        }
    }


    render() {
        return (
            <div className="main_div_of_footer">

                       <footer>
                       <div className="div_of_logo">
                        <span className="logo_text_default logo_text"> Rating.Ng </span>
                        <span className="logo_text_default"> Copyright © 2018  </span>
                        </div>
                        <div className="div_of_socialIcons">
                       <span>
                       <i aria-hidden='true' className='facebook f icon socialIcon_default' />
                           </span> 
                           <span>

                        <i aria-hidden='true' className='twitter icon socialIcon_default' />
                           </span>
                           <span>

                        <i aria-hidden='true' className='instagram icon socialIcon_default' />
                           </span>
                           <span>
                        <i aria-hidden='true' className='snapchat ghost icon socialIcon_default' />

                           </span>
                        

                        </div>
                       </footer>

            </div>
        );
    }
}

export default Footer;