import React from "react";
import ReactDOM from "react-dom";
import {Header} from "./components/Header";
import {Layout} from "./components/Layout";
import css from "./assets/css/global.css";
class App extends React.Component{
	render(){
		return(
             <div className="main-container">
             	<Header/>
             	<Layout/>

             </div>
			);
	}
}
ReactDOM.render(<App/>, document.getElementById("root"));