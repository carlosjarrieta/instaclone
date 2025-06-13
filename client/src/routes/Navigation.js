import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {map} from 'lodash';
import routes from './routes';

const Navigation = () => {
	return (
		<BrowserRouter>
			<Routes>
				{map(routes, (route, index) => {
					if (route.path) {
						return (
							<Route
								key={index}
								path={route.path}
								element={<route.component/>}
							/>
						);
					}
					return (
						<Route
							key={index}
							path="*"
							element={<route.component/>}
						/>
					);
				})}
			</Routes>
		</BrowserRouter>
	);
};

export default Navigation;