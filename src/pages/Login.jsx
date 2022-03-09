import React, { useRef } from 'react';
import '@style/login.scss';
import logo from '@logos/logo_yard_sale.svg';

const Login = () => {
	const from = useRef(null);
    
	const handleSubmit = (envent) =>
	{
		envent.preventDefault();
		const fromData = new FormData(from.current);
		const data = {
			username : fromData.get('username'),
			password : fromData.get('password'),

		}
		console.log(data);
	}
	return (
		<div className="Login">
			<div className="Login-container">
				<img src={logo} alt="logo" className="logo" />
				<form action="/" className="form" ref={from}>
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" name="username" placeholder="platzi@example.cm" className="input input-email" />
					<label htmlFor="password" className="label">Password</label>
					<input type="password" name="password" placeholder="*********" className="input input-password" />
					<button 
						className="secondary-button signup-button" onClick={handleSubmit}>
						Sigin Up
					</button>
					<a href="/">Forgot my password</a>
				</form>
				
			</div>
		</div>
	);
}

export default Login;