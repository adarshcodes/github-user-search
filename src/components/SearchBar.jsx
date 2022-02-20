import React from "react";
import Search from "../assets/images/icon-search.svg";

export default function SearchBar() {
	return (
		<div className="search-bar">
			<img src={Search} alt="search" className="search-bar--icon" />
			<div className="search-bar--form">
				<input type="text" className="search-bar--input" />
				<p className="search-bar--input-error">No results</p>
			</div>
			<div className="search-bar--btn">Search</div>
		</div>
	);
}
