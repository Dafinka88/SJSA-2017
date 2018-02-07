
import React from "react";
export class Comments extends React.Component{
   render(){
       return(
           <ul className="comments_list">
                 <li>
                  <a href="#"> Dafinka pechorova</a>
                   <p>This is an example of comments</p>
                 </li>

               <li>
                  <a href="#"> Dafinka Pechorova </a>
                   <p>This is an example of comments</p>
               </li>

               <li>
                  <a href="#"> Brankica Stankovska </a>
                   <p>This is an example of comments</p>
               </li>
               <li>
                    <a href="#"> Brankica Stankovska </a>
                   <p> This is an example of comments</p>
               </li>
           </ul>
           );
   }
}