import React from "react";
import {Route} from "react-router-dom";

import Home from "./Home";
import Actors from "./Actors";
import BoxOffice from "./BoxOffice";

const Main =() =>(
		<div className="main_content">
		<Route exact path="/" component={Home} />
		<Route  path="/actors" component={Actors} />
		<Route  path="/boxoffice" component={BoxOffice} />
		</div>
	);
export default Main;