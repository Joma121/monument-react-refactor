import React, { Component } from "react";
import G1 from "../images/gallery_1.jpg";
import G2 from  "../images/gallery_3.jpg";
import G3 from  "../images/gallery_4.jpg";
import G4 from  "../images/gallery_2.jpg";
import G5 from  "../images/gallery_5.jpg";
import G6 from  "../images/gallery_6.jpg";

class Gallery extends Component {
	render() {
		return (
			<section id="gallery">
				<div className="wrap">
					<h2>Issue Twenty</h2>
					<h3>A visual guide to the Southwest</h3>
					<div className="masonry">
						<img src={G1} alt=""/>
						<img src={G2} alt=""/>
						<img src={G3} alt=""/>
						<img src={G4} alt=""/>
						<img src={G5} alt=""/>
						<img src={G6} alt=""/>
					</div>
				</div>
			</section>
		);
	}
}
export default Gallery