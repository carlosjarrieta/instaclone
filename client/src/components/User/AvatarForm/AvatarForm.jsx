import React, {useCallback} from 'react';
import {Button} from "semantic-ui-react";
import {useDropzone} from "react-dropzone";
import {useMutation} from "@apollo/client";
import {UPDATE_AVATAR} from '../../../gql/user';
import './AvatarForm.scss';

export default function AvatarForm(props) {
	const {setShowModal} = props;
	const [updateAvatar] = useMutation(UPDATE_AVATAR)

	const onDrop = useCallback(async (acceptedFiles) => {
		const file = acceptedFiles[0];
		try {
			console.log(file);
			const result = await updateAvatar({variables: {file}});
		} catch (e) {
			console.log(e);
		}
	}, []);

	const {getRootProps, getInputProps} = useDropzone({
		accept: 'image/*',
		noKeyboard: true,
		multiple: true,
		onDrop,
	});

	return (
		<div className='avatar-form'>
			<Button {...getRootProps()}> Select Image </Button>
			<Button> Delete Avatar </Button>
			<Button onClick={() => setShowModal(false)}> Cancel </Button>
			<input {...getInputProps()} />
		</div>
	)
}
