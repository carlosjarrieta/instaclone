import React from "react";
import useAuth from "../../hooks/useAuth";

export default function Home() {
	const auth = useAuth();
	console.log("Auth data:", auth);
	return (
		<div className="home">
			<h1>Home Page</h1>
			<p>Welcome to the home page!</p>
		</div>
	);
}