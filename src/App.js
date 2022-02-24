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

	React.useEffect(() => {
		const prefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;

		prefersDark ? setIsDark(true) : setIsDark(false);
	}, []);
	// End of switching dark-mode

	// Fetching data from GitHub API

	const [userdata, setUserdata] = React.useState([]);

	React.useEffect(() => {
		function getUser(username) {
			fetch(`https://api.github.com/users/${username}`)
				.then((res) => res.json())
				.then((data) => setUserdata(data));
		}

		getUser("octocat");
	}, []);

	console.log(userdata);

	// End of fetching data

	// getting user input
	const [user, setUser] = React.useState("");

	function setUsername(event) {
		setUser((prevUser) => {
			return (prevUser = event.target.value);
		});
	}

	return (
		<div className="app">
			<div className="main-container">
				<Navigation isDark={isDark} toggle={toggleTheme} />
				<SearchBar handleChange={setUsername} />
				<UserData
					avatar={userdata.avatar_url}
					name={userdata.name}
					username={userdata.login}
					createdAt={userdata.created_at}
					bio={userdata.bio}
					repos={userdata.public_repos}
					followers={userdata.followers}
					following={userdata.following}
					location={userdata.location}
					twitter={userdata.twitter_username}
					blog={userdata.blog}
					work={userdata.company}
				/>
			</div>
		</div>
	);
}

export default App;
