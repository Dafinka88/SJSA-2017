import React from "react";
import PropTypes from "prop-types";

export class Vacancy extends React.Component {
    render(){
        let text = "";
        if(this.props.hasVacancy){
            text = "Has vacancy, Welcome!";
        }else{
            text = "NO vacancy, Get out!";
        }
        return(
           <h2>Result goes here: { text }</h2>
        );
    }
}

Vacancy.propTypes = {
    hasVacancy: PropTypes.bool
}