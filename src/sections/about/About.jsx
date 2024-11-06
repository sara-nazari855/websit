import "./about.css";
import Logo from "../../assets/logo.jpg";
import CV from "../../assets/resume/resume.pdf";
import { HiDownload } from "react-icons/hi";
import Data from "./data";
import Card from "../../components/Card";

const About = () => {
	return (
		<section id="about">
			<div className="container about__container">
				<div className="about__left">
					<div className="about__portrait">
						<img src={Logo} alt="portrait of a man down" />
					</div>
				</div>
				<div className="about__right">
					<h2>About Me</h2>
					<div className="about__cards">
						{Data.map((item) => (
							<Card key={item.id} className={"about__card"}>
								<span className="about__card-icon">
									{item.icon}
								</span>
								<h5>{item.title}</h5>
								<small>{item.desc}</small>
							</Card>
						))}
					</div>
					<p>
						I am an Assistant professor of Azad University with more
						than 16 years of teaching experience in the field of
						Software Engineering and Data Science.
					</p>
					<p>
						My primary research interests are in the area of
						Biometric Authentication, Biometric Template Protection,
						Optimization Methods, Meta-Heuristic Algorithms, Pattern
						Recognition, Image Processing and Machine Learning
						especially deep learning. I am a data science researcher
						and have Skills in C++, SQL, Matlab, Rapidminer and
						Python programming.
					</p>
					<a href={CV} download className="btn primary">
						Download CV <HiDownload />
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
