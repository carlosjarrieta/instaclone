import React from "react";
import './UserNotFound.scss'
import {Link} from "react-router-dom";
export default function UserNotFound() {
	return (
		<div className="user-not-found">
			<p>User not found.</p>
			<p>The user you are looking for does not exist or has been deleted.</p>
			<Link to="/" className="user-not-found__link">Go back to home</Link>
		</div>
	);
}