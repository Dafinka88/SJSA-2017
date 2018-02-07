import React from "react";

export class Header extends React.Component{
	render(){
		return(
              <header>
              	<div className="header-item">
              	  <img width= "100" src={require('../assets/images/logo.png')} />
              	  {5+5}
              	</div>

              	<div className="header-item">
              	 <input type="text" placeholder="Search.."/>
              	</div>

              	<div className="header-item">
              	<ul>
              	  <li> 

              		<button>
              		<i className= "fa fa-compass"></i>
              		</button> 

              	  </li>

              		<li>

              		  <button>
              		   <i className= "fa fa-heart"></i>
              		  </button>
              		  </li>

              		<li>

              		   <button>
              		      <i className= "fa fa-user"></i>
              		  </button>

              		</li>

              	
              	</ul>
             </div>
              </header>
			);
	}

	
}