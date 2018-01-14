import React from "react";

export class Comments extends React.Component {
	render(){
		return(
			<ul className="comment_list">
				<li>
					<a href="#">Dafinka Pechorova</a>
					<p>This is an example of a comment</p>
				</li>
				<li>
					<a href="#">Dafinka Pechorova</a>
					<p>This is an example of a comment</p>
				</li>
				<li>
					<a href="#">Maria Mitrovai</a>
					<p>This is an example of a comment</p>
				</li>
				<li>
					<a href="#">Dafinka pechorova</a>
					<p>This is an example of a comment</p>
				</li>
			</ul>
		);
	}
}