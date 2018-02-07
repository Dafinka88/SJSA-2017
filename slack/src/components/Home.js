 import React from "react";
 import PropTypes from "prop-types";
//  import { Comments } from "./Comments";

 export class Home extends React.Component {

    constructor(props){
        super();
        this.state = {
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
        console.log("Constructor");
    }

    componentWillMount(){
        console.log("Component will mount");
    }

    componentDidMount(){
        console.log("Component did mount");
    }

    componentWillReceive(nextProps){
        console.log("Component will receive props", nextProps);
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("Should component update", nextProps, nextState);
        return true;
    }
    componentWillUpdate(nextProps,nextState){
        console.log("Component will update", nextProps, nextState);
    }

    componentDidUpdate(prevProps,prevState){
        console.log("Component did update", prevProps, prevState);
    }

    componentWillUnmount(){
        console.log("Component will upmount");
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
     greet:PropTypes.func
}