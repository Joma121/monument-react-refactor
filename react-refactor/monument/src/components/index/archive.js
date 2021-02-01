import React, { Component } from "react";
import Article from './article';
import A1 from "../../images/article_1.jpg";
import A2 from  "../../images/article_2.jpg";
import A3 from  "../../images/article_3.jpg";

class Archive extends Component {
    state = {
        articleOne: {
            title: "",
            content: "",
        },
        articleTwo: {
            title: "",
            content: "",
        },
        articleThree: {
            title: "",
            content: "",
        }
    }

    componentDidMount(){
        this.createArticles();
    }

    createArticles = () => {
        this.setState({
            articleOne: {
                img: {A1},
                title: "Issue Twenty - The Southwest",
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel voluptate eos nisi necessitatibus aperiam dolorem ut eveniet quae dolores quisquam nulla, cumque tenetur blanditiis modi tempora excepturi error veniam suscipit dicta praesentium reiciendis illo obcaecati odit inventore minima. Pariatur facilis, excepturi! Facilis cumque dicta reiciendis nam accusantium cum pariatur sunt accusamus voluptas eaque sapiente totam dolorum nulla eligendi molestiae, quidem odit repellat temporibus quae ipsa aut placeat modi sint doloribus. Ipsum nisi veritatis, facere doloribus. Nihil veritatis corporis eaque odio.",
            },
            articleTwo: {
                img: {A2},
                title: "Issue Nineteen - Camping",
                content: "Maiores qui doloremque suscipit molestias. Saepe omnis dolore, ipsum voluptatem quisquam eveniet repellat! Eius in vero, cum dolorem ad earum, dignissimos quasi qui obcaecati, minima, esse aliquid beatae. Placeat, adipisci temporibus suscipit neque assumenda earum perferendis autem voluptatem nostrum ipsa porro, voluptas cumque ullam et reiciendis deserunt eos aspernatur esse laudantium cum natus cupiditate nesciunt. Nostrum doloremque odio maiores, quis architecto vero unde error, obcaecati ullam esse soluta et incidunt. Totam quaerat unde doloribus inventore sapiente molestiae, rem? Dolor, est.",
            },
            articleThree: {
                img: {A3},
                title: "Issue Eighteen - Food",
                content: "Dolore asperiores, ad nam, molestiae, fugiat numquam ut dolorum est unde eum cupiditate! Totam optio ullam enim sed ipsum molestias quod fugiat, placeat, fugit nemo saepe quidem ex asperiores excepturi rerum! Earum obcaecati non dignissimos voluptate repellendus voluptatibus ratione sit totam architecto, pariatur, amet ea. Officia nulla repellat, eius voluptatibus provident repellendus sint dolorum veniam? Amet rerum alias quas aut ratione illum voluptatem excepturi, ea saepe illo quis maxime repudiandae minus praesentium nihil quaerat ducimus reprehenderit consequatur qui?",
            }
        })
    }

	render() {
		return (
            <section>
                <h2>From the Archive</h2>
                <div class="grid-wrapper articles">
                    <Article article={this.state.articleOne} img={A1} />
                    <Article article={this.state.articleTwo} img={A2} />
                    <Article article={this.state.articleThree} img={A3} />
                </div>
            </section>
		);
	}
}
export default Archive