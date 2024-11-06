import Card from "../../components/Card";
import Data from "./data";
import "./services.css";

const Services = () => {
	return (
		<section id="services">
			<h2>Educational Background</h2>
			<p>Here is my Degrees in Computer Engineering.</p>
			<div className="container services__container">
				{Data.map((item) => (
					<Card key={item.id} className={"service light"}>
						<div className="service__icon">{item.icon}</div>
						<div className="srvice__details">
							<h4>{item.title}</h4>
							<p>{item.desc}</p>
						</div>
					</Card>
				))}
			</div>
		</section>
	);
};

export default Services;
