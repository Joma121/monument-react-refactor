import React from "react";
import Header from "../header";
import Sidebar from "./sidebar";
import Comment from "./comment";
import Article from "./article";
import { Component } from 'react';

class Blog extends Component {
  render () {
    return (
      <div className="blog-page">
        <Header />
        <div className="wrap grid-wrapper">
            <Article/>
            <Sidebar />
        </div>
        <Comment />
      </div>
    )
  }
}

export default Blog;