import React, { Component } from "react";

class Article extends Component {
	render() {
		return (
            <article class="col-third">
                <img src={this.props.img} alt=""/>
                <h3>{this.props.article.title}</h3>
                <p>{this.props.article.content}</p>
                <button>Read More</button>
            </article>
		);
	}
}

export default Article