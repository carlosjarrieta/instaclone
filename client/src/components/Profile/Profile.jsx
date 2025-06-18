import React from 'react';
import {Grid, Image} from "semantic-ui-react";
import {useQuery} from "@apollo/client";
import {GET_USER} from '../../gql/user';
import ImageNoFound from '../../assets/images/avatar.png';
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
			<Grid className='profile'>
				<Grid.Column width={5} className='profile__left'>
					<Image avatar src={getUser.avatar || ImageNoFound}/>
				</Grid.Column>
				<Grid.Column width={11} className='profile__right'>
					<div>HeaderProfile</div>
					<div>Followers</div>
					<div className="other">
						<p className='name'>{getUser.name}</p>
						{getUser.website && (
							<a href={getUser.website} className='siteWeb' target="_blank" rel="noreferrer">
								{getUser.website}
							</a>
						)}
						{getUser.bio && (
							<p className='bio'>{getUser.bio}</p>
						)}
					</div>
				</Grid.Column>
			</Grid>
		</>
	)
}
