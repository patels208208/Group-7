import React from "react";
import "./HannahIntro.css";
import image from "./HannahIMG2.jpg";

function HannahIntro() {
	return (
		<div className="hannah-intro">
			<h2> Hannah</h2>
			<h3> About Me!</h3>
			<br></br>
			<p>
				Hi, My name is Hannah. I originally went down an accountancy career path
				but I'm now a planning manager for a data and engineering team.{" "}
			</p>

			<p id="Sox">
				I live in Edinburgh with my cat, Sox who loves to think he is the boss
				<strong> (He definitely is!).</strong>
			</p>

			<p>
				{" "}
				I have worked with and ridden horses since I was young and regularly
				volunteer with a charity who provides Equine Therapy for young carers
				and Neurodiverse children.{" "}
			</p>

			<p className="pstyle">
				I'm looking forward to building our habit-traker from scratch!
			</p>

			<img id="sox-image" src={image} alt="Sox" />
		</div>
	);
}
export default HannahIntro;
