import React, { Component } from 'react';
import './App.css';
import Login from '../src/Components/Login/index';
import Screen1 from '../src/Components/Screen1/index';
import Screen2 from '../src/Components/Screen2/index';
import Screen3 from '../src/Components/Screen3/index';
import Screen4 from '../src/Components/Screen4/index';
import Screen5 from '../src/Components/Screen5/index';
import Screen6 from '../src/Components/Screen6/index';
import Home from '../src/Components/Home/index';
import About from '../src/Components/About/index';
import Template from '../src/Components/Template';
import Contact from '../src/Components/Contact';
import Career from '../src/Components/Career';


import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/screen1" component={Screen1} />
        <Route path="/screen2" component={Screen2} />
        <Route path="/screen3" component={Screen3} />
        <Route path="/screen4" component={Screen4} />
        <Route path="/screen5" component={Screen5} />
        <Route path="/screen6" component={Screen6} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/template" component={Template} />
        <Route path="/contact" component={Contact} />
        <Route path="/career" component={Career} />



        </div>
    </Router>
    );
  }
}

export default App;
