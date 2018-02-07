import React from 'react';

export class NewToDo extends React.Component{

    constructor(props){
        super();
        this.state = {
            text: props.value,
        }
    }

    addTodo(){
        this.props.addTodo(this.state.text);
        this.state.text = "";
    }

    handleChange(event){
        this.setState({
            text: event.target.value
        });
    }

    render(){
        return(
            <div className="NewToDo">
                <input onChange={(event) => this.handleChange(event)} value={this.state.text} type="text" placeholder="Add ToDo" />
                <button onClick={this.addTodo.bind(this)} >Add</button>
            </div>
        );
    }
}