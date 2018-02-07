import React from "react";
import MovieAPI from "../api";
import { Link } from "react-router-dom";


const Actor = (props) => {
		const actor=MovieAPI.get(
			parseInt(props.match.params.number)
			);

		return(
			<div>
			<h2>{actor.name}--> plays:{actor.plays}</h2>
			<span>Won: {actor.awards}awards</span>
			<Link to="/actors">go back</Link>
			</div>
			);


	}
	export default Actor;