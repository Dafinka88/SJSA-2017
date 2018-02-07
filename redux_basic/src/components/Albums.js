import React from "react";
import {createStore, applyMiddleware} from "redux";
import axios from "axios";
import {createLogger} from "redux-logger";
import thunk from "redux-thunk";


const initialState = {
	fetching: false,
	fetched: false,
	posts: [],
	error: null
}

const reducer = function(state=initialState, action){
	switch(action.type){
	case "FETCH_ALBUMS_START":
	return {...state, fetching: true};
	// break;
	case "RECEIVED_ALBUMS":
	return {...state, fetching:false, fetched: true, users: action.values};
	// break;
	case "FETCH_ALBUMS_ERROR":
	return {...state,fetching:false, error: action.values};
	default: return state;
	}
	// return state;
}

const middleware= applyMiddleware(thunk, createLogger());
const store = createStore(reducer, middleware);

store.dispatch((dispatch)=>{
	dispatch({type:"FETCH_ALBUMS_START"});
	axios.get("https://jsonplaceholder.typicode.com/albums").then((response)=>{
		dispatch({type:"RECEIVED_ALBUMS",values:response.data});
	}).catch((err)=>{
		dispatch({type:"FETCH_ALBUMS_ERROR",values:err});
	})
});




export class Albums extends React.Component {

	render(){
		return(
			<h2>Albums</h2>
			);
	}
}