import React from "react";

function Navlink() {
	return (
		<header className="wrapper shadow bottom">
			<div className="logo">
				<h1>Syakir</h1>
			</div>
			<nav>
				<ul>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#projects">Projects</a>
					</li>
					<li>
						<a href="#Contact">Contact</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Navlink;
