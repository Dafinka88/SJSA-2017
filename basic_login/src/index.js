import React from "react";
import ReactDOM from "react-dom";
import { Login } from "./components/Login";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route} from "react-router-dom";
import store from "./store";
 
import style from "./assets/css/global.css";


ReactDOM.render(

	<Provider store={store}>
	<Router>
		<Route exact path="/" component={Login}></Route>
		</Router>
	</Provider>,
	document.getElementById("root")
	);