import React from 'react';
import {useQuery} from "@apollo/client";
import {GET_USER} from '../../gql/user';
import './Profile.scss';

export default function Profile(props) {
	const {username} = props;
	const {data, loading, error} = useQuery(GET_USER, {
		variables: {username},
	});

	if (loading) return null;
	if (error) return <h1>Error loading profile.</h1>;
	const {getUser} = data;

	console.log('Profile data:', getUser);

	return (
		<>
			<h1>Profile</h1>
		</>
	)
}
