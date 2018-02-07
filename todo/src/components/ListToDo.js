import React from 'react';

export class ListToDo extends React.Component{

    constructor(props){
        super();  
    }

    render(){ 
        return(
            <div className="ListToDo">
                <ul>
                    {this.props.list.map((todo, i) => <li key={i}>{todo}</li>)}
                </ul>
            </div>
        );
    }
}