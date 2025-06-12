import React from 'react';
import {Form, Button} from 'semantic-ui-react';
import {useFormik} from 'formik';
import './RegisterForm.scss';

export default function RegisterForm(props) {
	const {setShowLogin} = props;
	const formik = useFormik({
		initialValues: initialValues(),
		validationSchema: null,
		onSubmit: (formValues) => {
			console.log("Form submitted formik");
			console.log(formValues);
		}
	});
	const onSubmit = () => {
		console.log("Form submitted");
	}

	return (
		<>
			<h2 className='register-form-title'>
				Regístrate para ver fotos y vídeos de tus amigos.
			</h2>
			<Form className='register-form' onSubmit={formik.handleSubmit}>
				<Form.Input type="text" placeholder='Nombre completo' name='name'
				            value={formik.values.name}
				            onChange={formik.handleChange}/>
				<Form.Input type="text" placeholder='Nombre de usuario' name='username'
				            value={formik.values.username}
				            onChange={formik.handleChange}/>
				<Form.Input type="text" placeholder='Correo electronico' name='email'
				            value={formik.values.email}
				            onChange={formik.handleChange}/>
				<Form.Input type="password" placeholder='Contraseña' name='password'
				            value={formik.values.password}
				            onChange={formik.handleChange}/>
				<Form.Input type="password" placeholder='Repetir Contraseña' name='password_confirm'
				            value={formik.values.password_confirm}
				            onChange={formik.handleChange}/>
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
