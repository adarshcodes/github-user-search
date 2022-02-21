import React from "react";
import ProfilePicture from "../assets/images/";

export default function UserData() {
	return (
		<div className="card">
			<img src={ProfilePicture} alt="avatar" card--profile-picture />
		</div>
	);
}
