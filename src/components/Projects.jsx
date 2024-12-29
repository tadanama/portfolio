import React from "react";

function Projects() {
	return (
		<section className="wrapper full-height shadow" id="projects">
			<h2>Projects</h2>
			<div className="project-container grid">
				<div className="card">
					<h3>Notes app</h3>
					<p>
						A simple note-taking app with full CRUD functionality. Built with
						Redux Toolkit for state management and data fetching, Node.js and
						Express.js for backend processing, and MongoDB for persistent
						storage.
					</p>
					<ul className="flex">
						<li>React.js</li>
						<li>Redux toolkit</li>
						<li>Node.js</li>
						<li>Express.js</li>
						<li>Mongodb</li>
					</ul>
					<div className="github-buttons">
						<button className="button">
							<a href="">Demo</a>
						</button>
						<button className="button">
							<a href="">Github</a>
						</button>
					</div>
				</div>
				<div className="card">
					<h3>Meme generator</h3>
					<p>
						A dynamic meme generator integrated with a public API to fetch meme
						images in real time. Users can personalize memes by adding custom
						text to the top and bottom, creating a fun and interactive
						experience.
					</p>
					<ul className="flex">
						<li>React.js</li>
					</ul>
					<div className="github-buttons">
						<button className="button">
							<a href="">Demo</a>
						</button>
						<button className="button">
							<a href="">Github</a>
						</button>
					</div>
				</div>
				<div className="card">
					<h3>Groceries List</h3>
					<p>
						Grocery list app with full CRUD functionality, enabling users to
						add, view, edit, and delete items. Includes a search feature for
						easy filtering and a dynamic list style that marks items as
						completed with a strikethrough when checked.
					</p>
					<ul className="flex">
						<li>React.js</li>
					</ul>
					<div className="github-buttons">
						<button className="button">
							<a href="">Demo</a>
						</button>
						<button className="button">
							<a href="">Github</a>
						</button>
					</div>
				</div>
				<div className="card">
					<h3>JWT Backend Authentication</h3>
					<p>
						Secure login and registration system with bcrypt password hashing,
						access/refresh token management, middleware for authorization, error
						handling, and a token refresh endpoint for session continuity.
					</p>
					<ul className="flex">
						<li>Node.js</li>
						<li>Express.js</li>
						<li>jsonwebtoken</li>
						<li>bcrypt</li>
					</ul>
					<div className="github-buttons">
						<button className="button">
							<a href="">Demo</a>
						</button>
						<button className="button">
							<a href="">Github</a>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Projects;
