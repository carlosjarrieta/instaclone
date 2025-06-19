import React, {useCallback} from 'react';
import {Button} from "semantic-ui-react";
import {useDropzone} from "react-dropzone";
import './AvatarForm.scss';

export default function AvatarForm(props) {
	const {setShowModal} = props;

	const onDrop = useCallback((acceptedFiles) => {
		// Handle the file upload logic here
		console.log(acceptedFiles);
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
