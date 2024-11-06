import Logo from "../../assets/logo.jpg";
import Logo2 from "../../assets/azad.png";
import Logo3 from "../../assets/azad2.png";
import "./navbar.css";
import data from "./data";
import { useModalContext } from "../../context/modal-context";

// icons imports
import { IoIosColorPalette } from "react-icons/io";

const NavBar = () => {
	const { showModalHandler } = useModalContext();

	return (
		<nav>
			<div className="container nav__container">
				<a href="index.html" className="nav__logo">
					<img src={Logo2} alt="Logo" />
				</a>
				<ul className="nav__menu">
					{data.map((item) => (
						<li key={item.id}>
							<a href={item.link}>{item.title}</a>
						</li>
					))}
				</ul>
				<button id="theme__icon" onClick={showModalHandler}>
					<IoIosColorPalette />
				</button>
			</div>
		</nav>
	);
};

export default NavBar;
