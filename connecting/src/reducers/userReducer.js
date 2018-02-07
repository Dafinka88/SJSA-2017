

export default function reducer(state={
	user: {
	id: null,
	name: null,
	age: null
},

	fetching: false,
	fetched: false,
	error: null

},action){

switch(action.type){
	case "FETCH_USER":{
		return {...state, fetching:true}
	};
	case "FETCH_USER_ERROR":{
		return {...state, fetching:false, error:action.values}
	};
	case "FETCH_USER_SUCCESS":{
		return {
			...state,
			fetching:false,
			fetched:true,
			user:action.values
		}
	};
	case "SET_USER_NAME":{
		return {
			...state,
			user:{
			...state.user,
			name:action.values

		}
	}
};
 		case "SET_USER_AGE":{
		return {
			...state,
			user:{
			...state.user,
			age:action.values
		}
	}
};
default: return state;
}
}

