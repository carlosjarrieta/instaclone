import React, {useState} from 'react';
import {Grid, Image} from "semantic-ui-react";
import {useQuery} from "@apollo/client";
import {GET_USER} from '../../gql/user';
import useAuth from "../../hooks/useAuth";
import UserNotFound from "../UserNotFound";
import ModalBasic from "../Modals/ModalBasic";
import ImageNoFound from '../../assets/images/avatar.png';
import './Profile.scss';
import AvatarForm from "../User/AvatarForm/AvatarForm";

export default function Profile(props) {
	const {username} = props;
	const [showModal, setShowModal] = useState(false);
	const [titleModal, setTitleModal] = useState('');
	const [childrenModal, setChildrenModal] = useState(null);
	const {auth} = useAuth();

	const {data, loading, error} = useQuery(GET_USER, {
		variables: {username},
	});

	if (loading) return null;
	if (error) return <UserNotFound/>;
	const {getUser} = data;

	const handlerModal = (type) => {
		switch (type) {
			case 'avatar':
				setTitleModal('Change Avatar');
				setChildrenModal(<AvatarForm setShowModal={setShowModal}/>);
				setShowModal(true);
				break;
			default:
				break;
		}
	}

	return (
		<>
			<Grid className='profile'>
				<Grid.Column width={5} className='profile__left'>
					<Image avatar src={getUser.avatar || ImageNoFound}
					       onClick={() => username === auth.username && handlerModal('avatar')}
					/>
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

			<ModalBasic show={showModal} setShow={setShowModal} title={titleModal}>
				{childrenModal}
			</ModalBasic>
		</>
	)
}
