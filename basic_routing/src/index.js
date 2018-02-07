import React from "react";
import ReactDOM from "react-dom";
import{ BrowserRouter as Router } from "react-router-dom";


import { Header } from "./components/Header";
import { Main } from "./components/Main";


class App extends React.Component {
	render(){
		return(
			<Router>
				<div className="main">
					<Header />
					<Main />
				</div>
			</Router>
			);
	}
}
ReactDOM.render(<App/>, document.getElementById("root"));