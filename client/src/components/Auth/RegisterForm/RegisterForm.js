import React from 'react';
import {Form, Button} from 'semantic-ui-react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {toast} from 'react-toastify';
import {useMutation} from '@apollo/client';
import {REGISTER} from '../../../gql/user';
import './RegisterForm.scss';

export default function RegisterForm(props) {
	const {setShowLogin} = props;
	const [register] = useMutation(REGISTER);

	const formik = useFormik({
		initialValues: initialValues(),
		validationSchema: validationSchema(),
		onSubmit: async (formData) => {
			try {
				const newUser = formData;
				delete newUser.password_confirm;
				const data = await register({
					variables: {
						input: newUser
					}
				});
				setShowLogin(true);
			} catch (errors) {
				toast.error(errors.message);
				console.log(errors.message);
			}
		}
	});

	return (
		<>
			<h2 className='register-form-title'>
				Regístrate para ver fotos y vídeos de tus amigos.
			</h2>
			<Form className='register-form' onSubmit={formik.handleSubmit}>
				<Form.Input type="text" placeholder='Nombre completo' name='name'
				            value={formik.values.name}
				            onChange={formik.handleChange}
				            error={formik.errors.name && true}
				/>
				<Form.Input type="text" placeholder='Nombre de usuario' name='username'
				            value={formik.values.username}
				            onChange={formik.handleChange}
				            error={formik.errors.username && true}
				/>
				<Form.Input type="text" placeholder='Correo electronico' name='email'
				            value={formik.values.email}
				            onChange={formik.handleChange}
				            error={formik.errors.email && true}
				/>
				<Form.Input type="password" placeholder='Contraseña' name='password'
				            value={formik.values.password}
				            onChange={formik.handleChange}
				            error={formik.errors.password && true}
				/>
				<Form.Input type="password" placeholder='Repetir Contraseña' name='password_confirm'
				            value={formik.values.password_confirm}
				            onChange={formik.handleChange}
				            error={formik.errors.password_confirm && true}
				/>
				<Button className='btn-submit' type='submit'>
					Registrarse
				</Button><
				Button className='btn-reset' type='button' onClick={formik.handleReset}>
				Reiniciar formulario
			</Button>
			</Form>
		</>
	)
}

function initialValues() {
	return {
		name: '',
		username: '',
		email: '',
		password: '',
		password_confirm: ''
	}
}

function validationSchema() {
	return Yup.object({
		name: Yup.string().required('El nombre es obligatorio'),
		username: Yup.string()
			.matches(/^[a-zA-Z0-9-]*$/, "El nombre del usuario no puede tener espacio")
			.required('El nombre de usuario es obligatorio'),
		email: Yup.string().email("El email no es válido").required("El email es obligatorio"),
		password: Yup.string()
			.required('La contraseña es obligatoria')
			.min(6, 'La contraseña debe tener al menos 6 caracteres'),
		password_confirm: Yup.string()
			.required('La contraseña es obligatoria')
			.min(6, 'La contraseña debe tener al menos 6 caracteres')
			.oneOf([Yup.ref('password')], 'Las contraseñas deben coincidir'),
	});
}
