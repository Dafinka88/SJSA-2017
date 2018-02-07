import React from "react";

export class Comments extends React.Component {
    render(){
        return(
           <div>   
               <h2>Comments Go here</h2>
               <ul>
                   {this.props.data.map((com, i) =>
                        <li key={i}>
                            <a href={com.url}>{com.userName}</a>
                            <span> {com.comment}</span>
                        </li>
                    )}
               </ul>
           </div>
        );
    }
}