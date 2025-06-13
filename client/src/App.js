import React, {useState, useEffect, useMemo} from 'react';
import {ApolloProvider} from '@apollo/client';
import {ToastContainer} from 'react-toastify';
import client from './config/apollo';
import Auth from "./pages/Auth";
import {getToken} from './utils/token';
import AuthContext from "./context/AuthContext";
import Home from "./pages/./Home/Home";

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

	const logout = () => {
		console.log('logout');
	}

	const setUser = (user) => {
		setAuth(user);
	}

	const authData = useMemo(
		() => ({
			auth,
			logout,
			setUser
		}),
		[auth]
	);

	return (
		<ApolloProvider client={client}>
			<AuthContext.Provider value={auth}>
				{!auth ? <Auth/> : <Home />}
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
			</AuthContext.Provider>
		</ApolloProvider>
	);
}
