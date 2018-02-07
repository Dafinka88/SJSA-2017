import React from "react";
import { login } from "../actions/loginActions";
import { connect } from "react-redux";

export class Login extends React.Component { 

	_login(){
		this.props.dispatch(login(this.props.user.name, this.props.user.password));
	};

	render(){
		return(
				<div className="form_container">
				<div className="centered">
					<form onSubmit= {e => {
						e.preventDefault();
						this._login();
					}}>
						<input ref={node => {this.props.user.name=node}} type="text" placeholder="Enter your username" />
						<input ref={node => {this.props.user.password=node}} type="password" placeholder="Enter your password" />
						<button type="submit">Login</button>

					</form>
					</div>
				</div>
			);
	}
}
function mapStateToProps(state){
	return {
		user: state.login.user
	}
}
Login = connect(mapStateToProps)(Login);