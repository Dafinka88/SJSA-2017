import React from 'react';
import { NewToDo } from './NewToDo';
import { ListToDo } from './ListToDo'

export class Main extends React.Component{
    
    constructor(props){
        super();
        this.state = {
            todos: [],
            text: ""
        }

        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(todo){
        this.setState((prevState) => ({
            todos: prevState.todos.concat(todo),
            text: ""
        }));
    }
    
    render(){
        return(
            <div className="main">
                <NewToDo addTodo={this.addTodo} value={this.state.text} />
                <ListToDo list={this.state.todos} />
            </div>
        );
    }
}