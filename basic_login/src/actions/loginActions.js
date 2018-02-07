export function login(userName, password){
	return function(dispatch){
		if(userName.value==="dafinka" && password.value==="secret"){
			dispatch({type: "LOGGED_IN", values:"SUCCES"});

		}else {
			dispatch({type:"LOGGIN_FAILED", values:"ERROR"});
		};
	};
};