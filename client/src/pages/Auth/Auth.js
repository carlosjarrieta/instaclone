import React, {useState} from "react";
import {Container, Image} from "semantic-ui-react";
import RegisterForm from "../../components/Auth/RegisterForm";
import LoginForm from "../../components/Auth/LoginForm";
import instacloneLogo from "../../assets/images/instaclone.png"
import "./Auth.scss"

export default function Auth() {
	const [showLogin, setShowLogin] = useState(true)
	return (
		<Container fluid className="auth">
			<Image src={instacloneLogo} alt="Instaclone"/>
			<div className="container-form">
				{showLogin ? <LoginForm/> : <RegisterForm setShowLogin={setShowLogin}/>}
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