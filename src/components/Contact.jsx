import React from "react";

function Contact() {
	return (
		<section className="wrapper full-height shadow flex" id="contact">
			<h2>Contact me</h2>
			<div className="contact-container">
				<div className="card">
					{/* Email icon */}
					<p>syakir.haziq29@gmail.com</p>
					<button className="button">
						<a href="mailto:syakir.haziq29@gmail.com">Send a message</a>
					</button>
				</div>
				<div className="card">
					{/* Github linkedin */}
					<p>Muhammad Syakir Haziq Mohd Nordin</p>
					<button className="button">
						<a
							href="https://www.linkedin.com/in/muhammad-syakir-haziq-mohd-nordin-a7b78818b"
							target="_blank"
						>
							View my profile
						</a>
					</button>
				</div>
			</div>
		</section>
	);
}

export default Contact;
