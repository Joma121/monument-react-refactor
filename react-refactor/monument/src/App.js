import React from "react";
import { Route, link, Switch } from 'react-router-dom';
import './App.css';
import Index from './components/index/index'
import Blog from './components/blog/blog'
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import { Component } from 'react';

class App extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/blog" component={Blog} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
