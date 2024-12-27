import React from "react";
import profilePicture from "../assets/1720.png";

function Hero() {
	return (
		<section className="wrapper full-height shadow " id="hero">
			<div className="left">
				<h1 className="hero-heading">Fullstack Developer</h1>
				<p className="hero-description">
					Hi! I'm Syakir. Fullstack developer based in Malaysia
				</p>
				<div className="tech-stack">
					<img
						src="https://skillicons.dev/icons?i=html,css,express,js,nodejs,react,postgres,mongodb"
						alt=""
					/>
				</div>
			</div>
			<div className="right">
				<img src={profilePicture} alt="Profile picture" />
			</div>
		</section>
	);
}

export default Hero;
