import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../util/axiosWithAuth';

const Friends = () => {
	const [friends, setFriends] = useState([]);

	useEffect(() => {
		axiosWithAuth()
			.get('/friends')
			.then((res) => {
				setFriends(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<ul>
				{friends.map((friend) => {
					return (
						<li key={friend.id}>
							{friend.name}, {friend.age}, {friend.email}{' '}
						</li>
					);
				})}
			</ul>
		</div>
	);
};
export default Friends;
