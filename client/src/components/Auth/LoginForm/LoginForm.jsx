import React, {useState} from 'react';
import {Form, Button} from 'semantic-ui-react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useMutation} from '@apollo/client';
import {LOGIN} from '../../../gql/user';
import {setToken, decodeToken} from '../../../utils/token';
import useAuth from "../../../hooks/useAuth";
import './LoginForm.scss';

export default function LoginForm() {
	const [error, setError] = useState('');
	const [login] = useMutation(LOGIN);
	const {setUser} = useAuth();


	const formik = useFormik({
		initialValues: initialValues(),
		validationSchema: validationSchema(),
		onSubmit: async (formData) => {
			setError('')
			try {
				const {data} = await login({
					variables: {
						input: formData
					}
				});

				const {token} = data.login;
				setToken(token);
				setUser(decodeToken(token));
			} catch (error) {
				setError(error.message)
			}

		},
	});
	return (
		<Form className='login-form' onSubmit={formik.handleSubmit}>
			<h2>Entra para ver fotos y vídeos de tus amigos</h2>
			<Form.Input type="text" placeholder='Correo electronico' name='email'
			            value={formik.values.email}
			            error={formik.errors.email && true}
			            onChange={formik.handleChange}
			/>
			<Form.Input type="password" placeholder='Contraseña' name='password'
			            value={formik.values.password}
			            error={formik.errors.password && true}
			            onChange={formik.handleChange}
			/>
			<Button type='submit' className='btn-submit'>
				Iniciar sesión
			</Button>
			{error && <p className='error-message'>{error}</p>}
		</Form>
	)
}

function initialValues() {
	return {
		email: '',
		password: ''
	};
}

function validationSchema() {
	return Yup.object({
		email: Yup.string()
			.email("El email no es válido")
			.matches(
				/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
				"El formato del correo no es válido"
			)
			.required("El email es obligatorio"),
		password: Yup.string()
			.min(6, 'La contraseña debe tener al menos 6 caracteres')
			.required('La contraseña es obligatoria')
	});
}
