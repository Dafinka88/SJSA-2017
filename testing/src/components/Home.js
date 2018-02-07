 import React from "react";
 import PropTypes from "prop-types";
//  import { Comments } from "./Comments";

 export class Home extends React.Component {

    constructor(props){
        super();
        this.state = {
            age: props.user.age,
            num_01: props.multiply.a,
            num_02: props.multiply.b,
            status: 0,
            color: "",
            currentDay: "",
            homeLink: props.initialLinkName,
            show: true
        }

        setTimeout(() => {
            this.setState({
                status: 1
            });
        }, 3000);
    }

    changeColor(){
        this.setState({
            color: "red"
        });
    }

    calculate(){
        this.setState({
            result: this.state.num_01 * this.state.num_02
        })
    }

    makeOlder(){ 
        this.setState({
            age: this.state.age + 3
        })
    }   

    getDay(d){
        this.setState({
            currentDay: d.day
        });
        console.log(d);
    }

    changeLink(){
        this.props.changeLink(this.state.homeLink);
    }

    handleChange(event){
        this.setState({
            homeLink: event.target.value
        });
    }

    toggle(){
        this.setState({
            show: !this.state.show
        })
    }

    render(){
        return(
            <div>
                <h2>This comes from Home</h2>


                <button onClick={this.props.greet}>Say Hello</button> 

                <hr/>

                <input 
                    type="text" 
                    placeholder="Enter to change" 
                    value={this.state.homeLink}
                    onChange={(event) => this.handleChange(event)} 
                />

                <button onClick={this.changeLink.bind(this)}>Change Link</button>
                <br/> <br/>
                <button onClick={this.toggle.bind(this)}>
                    Click to toggle
                    <i className="fa fa-pencil"></i>
                </button>

                { this.state.show ? <h2>Hello World</h2> : null }
            </div>
         );
     }
 }

 Home.propTypes = {
     greeting: PropTypes.string,
     year: PropTypes.number,
     user: PropTypes.object,
     children: PropTypes.element.isRequired,
     greet: PropTypes.func
 }