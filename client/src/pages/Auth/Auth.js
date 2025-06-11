import React, {useState} from "react";
import {Container, Image} from "semantic-ui-react";
import RegisterForm from "../../components/Auth/RegisterForm";
import instacloneLogo from "../../assets/images/instaclone.png"
import "./Auth.scss"

export default function Auth() {
	const [showLogin, setShowLogin] = useState(false)
	return (
		<Container fluid className="auth">
			<Image src={instacloneLogo} alt="Instaclone"/>
			<div className="container-form">
				{showLogin ? <p>Formulario de login</p> : <RegisterForm setShowLogin={setShowLogin}/>}
			</div>

			<div className="change-form">
				{showLogin ? (
					<>
						¿No tienes una cuenta?
						<span onClick={() => setShowLogin(!showLogin)}>Regístrate</span>
					</>
				) : (
					<>
						¿Ya tienes una cuenta?
						<span onClick={() => setShowLogin(!showLogin)}>Inicia sesión</span>
					</>
				)}
			</div>
		</Container>
	);
}