import "./floating-nav.css";
import Data from "./data";
import Scrollspy from "react-scrollspy";
import Nav from "./Nav";

const FloatingNav = () => {
	return (
		<ul id="floating__nav">
			<Scrollspy
				offset={-400}
				className="scrollspy"
				items={["header", "about", "services", "portfolio", "contact"]}
				currentClassName="active"
			>
				{Data.map((item) => (
					<Nav key={item.id} item={item} />
				))}
			</Scrollspy>
		</ul>
	);
};

export default FloatingNav;
