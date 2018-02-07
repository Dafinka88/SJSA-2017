import React from "react";
import MovieAPI from "../api";
import { Link } from "react-router-dom";

const FullActors=() => (
		<div className ="actor_list">
		<ul>
			{
				MovieAPI.all().map((a)=>
					<li key={a.number}> <Link to={`/actors/${a.number}`}>{a.name}</Link></li>
					)
			}
		</ul>
		</div>
	);
	export default FullActors;