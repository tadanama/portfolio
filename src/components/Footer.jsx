import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
	return (
		<footer className="wrapper flex">
			<p>© Syakir Haziq - All Rights Reserved</p>
			<div className="socials">
				<a
					href="https://www.linkedin.com/in/muhammad-syakir-haziq-mohd-nordin-a7b78818b"
					target="_blank"
				>
					<FontAwesomeIcon icon={faLinkedin} className="icon" />
				</a>
				<a href="https://github.com/tadanama" target="_blank">
					<FontAwesomeIcon icon={faGithub} className="icon" />
				</a>
			</div>
		</footer>
	);
}

export default Footer;
