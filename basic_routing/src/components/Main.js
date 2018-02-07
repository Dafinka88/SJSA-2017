
import React from "react";
import { Route } from "react-router-dom";

import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";


export class Main extends React.Component {
   render(){
       return (
           <div className = "main_content">
           <Route exact path="/" component={Home} />
           <Route path="/about" component={About} />
           <Route path="/contact" component={Contact} />
           </div>
       );
   }
}