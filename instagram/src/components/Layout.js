
import React from "react";
import { Comments } from "./Comments";

export class Layout extends React.Component {
    render(){
        return(
            <div className="layout">
                <div className="layout_section">
                    <a href="#">
                        <span className="img_holder">
                            <img width="50" src={require('../assets/images/avatar.jpg')} />
                        </span>
                        <h2>Brankica Stankovska</h2>
                    </a>
                </div>

                <div className="image_src">
                    <img width="50" src={require('../assets/images/layout_img.jpg')} />
                </div>

                <div>
                    <Comments/>
                </div>
            </div>
        );
    }
}