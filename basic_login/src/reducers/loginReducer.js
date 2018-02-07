export default function reducer(state={
	user: {
		name: "",
		password: "",
		loggedIn: false
	},
	shouldRedirect:false,
	errorMessage:null
},action){
	switch(action.type){
		case "LOGGED_IN":
		return Object.assign({}, state, {user: {loggedIn:true}, shouldRedirect:true});
		case "LOGIN_FAILED":
		return Object.assign({}, state, {user: {loggedIn:false}, shouldRedirect:false,
		errorMessage:action.message});
		default: return state;
	}
}