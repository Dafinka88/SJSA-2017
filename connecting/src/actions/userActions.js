
export function fetchUser(){
	return {
		type: "FETCH_USER_SUCCESS",
			values: { 
			id: 1,
			name: "Dafinka",
			age: 26
		}
	}
}
export function setUserName(name){
	return {
		type:"SET_USER_NAME",
		values: name
	}
}
export function setUserAge(age){
	return {
		type: "SET_USER_AGE",
		values: age
	}
}