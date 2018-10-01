import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';


class Drawer extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    
openNav() {
    document.getElementById("mySidenav").style.width = "260px";
    // document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("icon").style.visibility = "hidden";
    
}

closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    // document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("icon").style.visibility = "initial";
    
}
    render() {
        return (
            <div className="main_div_of_drawer">
            <div id="mySidenav" className="sidenav">
  <span className="closebtn" onClick={()=> this.closeNav()}>&times;</span>
  <Link to='/'>Product</Link>
  <Link to='/'>Services</Link>
  <Link to='/'>Experience</Link>
</div>

  <span className="menu_icon" id="icon" onClick={()=> this.openNav()}>&#9776;</span>
            </div>
        );
    }
}

export default Drawer;