import React, { Component } from 'react';
import Navigator from './components/Navigator';
import Home from './views/Home'
import Blogs from './views/Blogs'
import About from './views/About'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
        <Router>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blogs" component={Blogs} />
        </Router>
    );
  }
}
export default App;
