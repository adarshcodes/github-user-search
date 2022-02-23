import React from "react";
// import Moon from "../assets/images/icon-moon.svg";
// import Sun from "../assets/images/icon-sun.svg";

export default function Navigation(props) {
	return (
		<nav className="navbar">
			<h1 className="navbar--logo heading-primary">devfinder</h1>
			<div className="navbar--theme-switcher" onClick={props.toggle}>
				<h4 className="heading-quad navbar--theme-switcher__theme-text">
					{props.isDark ? "Light" : "Dark"}
				</h4>

				{props.isDark ? (
					<i class="fa-duotone fa-sun-bright"></i>
				) : (
					<i class="fa-duotone fa-moon-stars"></i>
				)}
			</div>
		</nav>
	);
}
