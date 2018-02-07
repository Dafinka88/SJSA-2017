import React from "react";
// import { createStore, applyMiddleware} from "redux";
// import { createLogger } from "redux-logger";
// import thunk from "redux-thunk";
// import axios from "axios";


// const initialState = {
// 	fetching: false,
// 	fetched: false,
// 	posts: [],
// 	error: null
// }

// const reducer = function(state=initialState, action){
// 	switch(action.type){
// 		case "FETCH_POSTS_START":
// 		return{...state, fetching: true};
// 		break;
// 		case "RECEIVE_POSTS":
// 		return{...state, fetching: false, fetched: true, users: action.values};
// 		break;
// 		case "FETCH_POSTS_ERROR":
// 		return {...state, fetching: false, error: action.values};
// 		break;
// 	}
// 	return state;
// }




// const middleware= applyMiddleware(thunk, createLogger());


// const store = createStore(reducer,middleware);


// store.subscribe(() => {
// 	console.log("store changed", store.getState());
	

// });



// store.dispatch((dispatch) => {
// 	dispatch({type:"FETCH_POSTS_START"});
// 	axios.get("https://jsonplaceholder.typicodekjsdsl.com/posts").then((response)=> {
// 		// return response.json().then((data)=> {
// 			dispatch({type:"RECEIVE_POSTS", values:response.data});
// 		// })
// 	}).catch((err)=> {
// 		dispatch({type:"FETCH_POSTS_ERROR", values:err});
// 	})


// 	});



export class Main  extends React.Component {
	render(){
		return(
			
				<h2>This comes from Main</h2>
			
			);
	}
}