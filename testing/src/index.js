import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";


class App extends React.Component {

    constructor(){
        super();

        this.state = {
            homeLink: "Home"
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

    render(){


        return(
            <div>
                <Header homeLink={this.state.homeLink} />
                <Home 
                    year={2018} 
                    user={user}
                    greet={this.onGreet}
                    changeLink={this.changeLinkName.bind(this)}
                    initialLinkName={this.state.homeLink}
                >
                    <p>Passed NOT from props</p>
                </Home>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));