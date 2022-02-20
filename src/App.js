import React from "react";
import Navigation from "./components/Navigation";
import "./assets/sass/main.css";

function App() {
	const [isDark, setIsDark] = React.useState(false);

	const toggleTheme = () => {
		setIsDark(!isDark);
	};

	return (
		<div className="app">
			<div className="main-container">
				<Navigation isDark={isDark} toggle={toggleTheme} />
			</div>
		</div>
	);
}

export default App;
