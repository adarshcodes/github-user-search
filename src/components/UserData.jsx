import React from "react";

export default function UserData(props) {
	let format = (d) =>
		d.toString().replace(/\w+ (\w+) (\d+) (\d+).*/, "$2-$1-$3");

	let joinedDate = format(Date(props.createdAt));

	return (
		<div className="card">
			<div className="card--pp">
				<img src={props.avatar} alt="pp" />
			</div>
			<div className="card--card-data">
				<div className="userdata">
					<div className="userdata__name">
						<h1 className="userdata__user heading-primary">{props.name}</h1>
						<h3 className="userdata__username">{props.username}</h3>
					</div>
					<p className="userdata__date">Joined {joinedDate}</p>
				</div>

				<div className="card--card-data__bio">
					{props.bio === null
						? `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
					Quisque volutpat mattis eros. nulled`
						: props.bio}
				</div>

				<div className="card--card-data__repo-card">
					<div className="repo">
						<p className="text">Repos</p>
						<h2 className="heading-secondary repo-numbers">{props.repos}</h2>
					</div>

					<div className="followers">
						<p className="text">Followers</p>
						<h2 className="heading-secondary repo-numbers">
							{props.followers}
						</h2>
					</div>

					<div className="following">
						<p className="text">Following</p>
						<h2 className="heading-secondary repo-numbers">
							{props.following}
						</h2>
					</div>
				</div>

				<div className="card--card-data__social">
					<div className="socialicon">
						<i class="fa-solid fa-location-dot"></i>
						{props.location === null ? "Not available" : props.location}
					</div>

					<div className="socialicon">
						<i class="fa-brands fa-twitter"></i>
						<a href="not yet">
							{props.twitter === null ? "Not available" : props.twitter}
						</a>
					</div>

					<div className="socialicon">
						<i class="fa-solid fa-link"></i>
						<a href="https://github.blog">
							{props.blog === null ? "Not available" : props.blog}
						</a>
					</div>

					<div className="socialicon">
						<i class="fa-solid fa-building"></i>
						{props.work === null ? "Not available" : props.work}
					</div>
				</div>
			</div>
		</div>
	);
}
