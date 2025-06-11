import React, {useState} from "react";
import "./Auth.scss"
import {Container, Image} from "semantic-ui-react";
import instacloneLogo from "../../assets/images/instaclone.png"

export default function Auth() {
	const [showLogin, setShowLogin] = useState(true)
	return (
		<Container fluid className="auth">
			<Image src={instacloneLogo} alt="Instaclone"/>
			<div className="container-form">
				{showLogin ? <p>Formulario de login</p>: <p>Regístrate</p>}
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