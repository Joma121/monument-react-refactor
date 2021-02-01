import React from "react";
import Header from "../header"
import Landing from "./landing"
import { Component } from 'react';

class Index extends Component {
  render () {
    return (
      <div>
        <Header />
        <Landing />
      </div>
    )
  }
}

export default Index;
