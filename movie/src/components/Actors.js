import React from "react";
import { Route } from "react-router-dom";
import FullActors from "./FullActors";
import Actor from "./Actor";

const Actors =() => (
	<div>
	<Route exact path="/actors" component={FullActors} />
	<Route path="/actors/:number" component={Actor} />
	
	</div>
	);
export default Actors;