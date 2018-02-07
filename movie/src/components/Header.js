import React from "react";
import { Link } from "react-router-dom";

const Header = () =>(
	<header>
	  <nav>
	    <ul>
	    <li><Link to="/">Home</Link></li>
	    <li><Link to="/actors">Actors</Link></li>
	    <li><Link to="/boxoffice">BoxOffice</Link></li>
	    </ul>
	  </nav>
	</header>
);
export default Header;