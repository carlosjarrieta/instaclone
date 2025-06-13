import React, {useState, useEffect} from 'react';
import {ApolloProvider} from '@apollo/client';
import {ToastContainer} from 'react-toastify';
import client from './config/apollo';
import Auth from "./pages/Auth";
import {getToken} from './utils/token';

export default function App() {
	const [auth, setAuth] = useState(undefined);
	useEffect(() => {
		const token = getToken();
		if (token) {
			setAuth(token);
		} else {
			setAuth(null);
		}
	}, []);

	return (
		<ApolloProvider client={client}>
			<ToastContainer
				position={"top-right"}
				autoClose={5000}
				hideProgressBar
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			{!auth ? <Auth/> : <h1>Estas logueado</h1>}
		</ApolloProvider>
	);
}
