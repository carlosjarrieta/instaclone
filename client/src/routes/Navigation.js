import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {map} from 'lodash';
import routes from './routes';

const Navigation = () => {
	return (
		<BrowserRouter>
			<Routes>
				{map(routes, (route, index) => {
					const Layout = route.layout;
					const Component = route.component;

					if (route.path) {
						return (
							<Route
								key={index}
								path={route.path}
								element={
									<Layout>
										<Component />
									</Layout>
								}
							/>
						);
					}
					return (
						<Route
							key={index}
							path="*"
							element={
								<Layout>
									<Component />
								</Layout>
							}
						/>
					);
				})}
			</Routes>
		</BrowserRouter>
	);
};

export default Navigation;