import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import css from "./assets/css/global.css";

class App extends React.Component {
	render(){
		return(
			<div className="main_container">
				<Header />
				<Footer />
				
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.getElementById("root"));
