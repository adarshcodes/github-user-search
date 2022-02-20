import React from "react";
import Navigation from "./components/Navigation";
import "./assets/sass/main.css";

function App() {
	const [isDark, setIsDark] = React.useState(false);

	return (
		<div className="app">
			<div className="main-container">
				<Navigation isDark={isDark} />
			</div>
		</div>
	);
}

export default App;
