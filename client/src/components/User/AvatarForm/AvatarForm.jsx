import React from 'react';
import {Button} from "semantic-ui-react";
import './AvatarForm.scss';

export default function AvatarForm(props) {
	const {setShowModal} = props;
	return (
		<div className='avatar-form'>
			<Button> Select Image </Button>
			<Button> Delete Avatar </Button>
			<Button onClick={() => setShowModal(false)}> Cancel </Button>
		</div>
	)
}
