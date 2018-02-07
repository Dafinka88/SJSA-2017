import React from 'react';

export class Header extends React.Component{
    render(){
        return(
            <div className="header">
                {/* <h2>This comes from Header</h2> */}
                <input type="text" placeholder="Search"/>
            </div>
        );
    }
}