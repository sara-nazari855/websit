import "./contact.css";
import Data from "./data";

const Contact = () => {
	return (
		<section id="contact">
			<h2>Get In Touch</h2>
			<p>Message If you Want Farther Information</p>
			<div className="container contact__container">
				{Data.map((contact) => (
					<a
						href={contact.link}
						key={contact.id}
						target="_blank"
						rel="noopener noreferrer"
					>
						{contact.icon}
					</a>
				))}
			</div>
		</section>
	);
};

export default Contact;
