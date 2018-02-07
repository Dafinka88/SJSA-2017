import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";


class App extends React.Component {

    constructor(){
        super();

        this.state = {
            homeLink: "Home",
            homeMounted:true
        }
    }

    onGreet(){
        alert("Hello World");
    }

    changeLinkName(newName){
        this.setState({
            homeLink: newName
        })
    }
    changehomeMounted(){
        this.setState({
            homeMounted:this.state.homeMounted
        })
    }

    render(){

            let homeComponent= "";

            if(this.state.homeMounted){
                homeComponent = <Home 
                    year={2018} 
                    greet={this.onGreet}
                    changeLink={this.changeLinkName.bind(this)}
                    initialLinkName={this.state.homeLink}
                /> 
            }

        return(
            <div>
                <Header homeLink={this.state.homeLink} />
                { homeComponent }
                <button onClick={this.changehomeMounted.bind(this)}>Unmount Component</button>
               
                
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));