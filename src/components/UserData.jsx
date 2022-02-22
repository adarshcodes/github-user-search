import React from "react";
import ProfilePicture from "../assets/images/favicon-32x32.png";

export default function UserData() {
	return (
		<div className="card">
			<img src={ProfilePicture} alt="avatar" card--profile-picture />
			<div className="card--card-data">
				<div className="userdata">
					<div className="card--card-data__name">
						<h1 className="card--card-data__user heading-primary">
							The Octocat
						</h1>
						<h3 className="card--card-data__username">@Octocat</h3>
					</div>
					<p className="card--card-data__date">Joined 25 Jan 2011</p>
				</div>

				<div className="card--card-data__bio">
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
					Quisque volutpat mattis eros.
				</div>

				<div className="card--card-data__repo-card">
					<div className="repo">
						<p className="text">Repos</p>
						<h2 className="heading-secondary">8</h2>
					</div>

					<div className="followers">
						<p className="text">Followers</p>
						<h2 className="heading-secondary">3938</h2>
					</div>

					<div className="following">
						<p className="text">Following</p>
						<h2 className="heading-secondary">9</h2>
					</div>
				</div>

				<div className="card--card-data__social">
					<div className="socialicon">
						<i class="fa-solid fa-location-dot"></i>
						San Fransisco
					</div>

					<div className="socialicon">
						<i class="fa-brands fa-twitter"></i>
						<a href="https://twitter.com">Twitter</a>
					</div>

					<div className="socialicon">
						<i class="fa-solid fa-link"></i>
						<a href="https://github.blog">https://github.blog</a>
					</div>

					<div className="socialicon">
						<i class="fa-solid fa-building"></i>
						@github
					</div>
				</div>
			</div>
		</div>
	);
}
