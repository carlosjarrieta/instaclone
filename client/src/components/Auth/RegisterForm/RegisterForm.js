import React from 'react';
import {Form, Button} from 'semantic-ui-react';
import './RegisterForm.scss';

export default function RegisterForm(props) {
	const {setShowLogin} = props;
	const onSubmit = () => {
		console.log("Form submitted");
	}

	return (
		<>
			<h2 className='register-form-title'>
				Regístrate para ver fotos y vídeos de tus amigos.
			</h2>
			<Form className='register-form' onSubmit={onSubmit}>
				<Form.Input type="text" placeholder='Nombre completo' name='name'/>
				<Form.Input type="text" placeholder='Nombre de usuario' name='username'/>
				<Form.Input type="text" placeholder='Correo electronico' name='email'/>
				<Form.Input type="password" placeholder='Contraseña' name='password'/>
				<Form.Input type="password" placeholder='Repetir Contraseña' name='password_confirm'/>
				<Button className='btn-submit' type='submit'>
					Registrarse
				</Button>
			</Form>
		</>
	)
}
