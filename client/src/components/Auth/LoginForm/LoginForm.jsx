import React from 'react';
import {Form, Button} from 'semantic-ui-react';
import {useFormik} from 'formik';
import './LoginForm.scss';

export default function LoginForm() {
	const formik = useFormik({
		initialValues: initialValues(),
		validationSchema: null,
		onSubmit: (formData) => {
			console.log("Form data submitted:", formData);
		},
	});
	return (
		<Form className='login-form' onSubmit={formik.handleSubmit}>
			<h2>Entra para ver fotos y vídeos de tus amigos</h2>
			<Form.Input type="text" placeholder='Correo electronico' name='email'
			            value={formik.values.email}
			            onChange={formik.handleChange}
			/>
			<Form.Input type="password" placeholder='Contraseña' name='password'
			            value={formik.values.password}
			            onChange={formik.handleChange}
			/>
			<Button type='submit' className='btn-submit'>
				Iniciar sesión
			</Button>
		</Form>
	)
}

function initialValues() {
	return {
		email: '',
		password: ''
	};
}