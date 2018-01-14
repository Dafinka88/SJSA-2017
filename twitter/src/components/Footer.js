import React from "react";
import { Comments } from "./comments";

export class Footer extends React.Component {
	render(){
		return(
			<div className="footer">

				<div className="image_src">
					<img src={require('../assets/images/t.jpg')} />
				</div>

				

				<div className="footer_section">
					<h2>18 likes</h2>
				</div>

				<div className="footer_section">
					<Comments />
				</div>
			</div>
		);
	}
}