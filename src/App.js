import React from "react";
import Navigation from "./components/Navigation";
import SearchBar from "./components/SearchBar";
import UserData from "./components/UserData";

import "./assets/sass/main.css";

function App() {
	// Switching dark-mode
	const [isDark, setIsDark] = React.useState(false);

	const toggleTheme = () => {
		setIsDark(!isDark);
	};
	// End of switching dark-mode

	return (
		<div className="app">
			<div className="main-container">
				<Navigation isDark={isDark} toggle={toggleTheme} />
				<SearchBar />
				<UserData />
			</div>
		</div>
	);
}

export default App;
