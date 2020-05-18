import React, { useState } from 'react';
import { axiosWithAuth } from '../util/axiosWithAuth';

const LoginForm = (props) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const login = (event) => {
		event.preventDefault();
		axiosWithAuth()
			.post('/login', { username, password })
			.then((res) => {
				console.log('Logged In!', res.data.payload);
				localStorage.setItem('token', res.data.payload);
				props.history.push('/protected');
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<form onSubmit={login}>
			<input type="text" onChange={(event) => setUsername(event.target.value)} />
			<input type="password" onChange={(event) => setPassword(event.target.value)} />
			<button>Login</button>
		</form>
	);
};
export default LoginForm;
