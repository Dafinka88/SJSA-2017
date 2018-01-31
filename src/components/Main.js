import React from "react";
import { combineReducers, createStore } from "redux";


const commentReducer = function (state=[],action){
    switch(action.type){
        case "ADD_COMMENT":
        state = [...state,{comment:action.value}];
        break;
        default: return state;
    }
    return state;
}
   

const reducers = combineReducers({
   comment: commentReducer
});

const store = createStore(reducers);

store.subscribe(() => {
    console.log("store changed", store.getState());
});

store.dispatch({type: "ADD_COMMENT", value: "Like for the picture"});
store.dispatch({type: "ADD_COMMENT", value: "Free comment"});

export class Main extends React.Component {
    render(){
        return(
            <h2>This comes from Main</h2>
        );
    }
}