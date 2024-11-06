import Logo from "../../assets/logo.jpg";
import Data from "./data";
import "./header.css";

const Header = () => {
	return (
		<header id="header">
			<div className="container header__container">
				<div className="header__profile">
					<img src={Logo} alt="headerImage" />
				</div>
				<h3>Sarah Nazari</h3>
				<p>
					I am an Assistant professor of Azad University with more
					than 16 years of teaching experience in the field of
					Software Engineering and Data Science.
				</p>
				<div className="header__cta">
					<a href="#contact" className="btn primary">
						Lets talk
					</a>
					<a href="#portfolio" className="btn light">
						My work
					</a>
				</div>
				<div className="header__socials">
					{Data.map((item) => (
						<a
							key={item.id}
							href={item.link}
							target="_blank"
							rel="noopener noreferrer"
						>
							{item.icon}
						</a>
					))}
				</div>
			</div>
		</header>
	);
};

export default Header;
