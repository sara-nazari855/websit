import Card from "../../components/Card";

const Project = ({ project }) => {
	return (
		<Card className={"portfolio__project"}>
			{/* <div className="portfolio__project-image">
				<img src={project.image} alt="project portfolio" />
			</div> */}
			<div>
				<h4>{project.desc}</h4>
				<p>{project.title}</p>
			</div>
			<div className="portfolio__project-cta">
				{/* <a
					href={project.demo}
					className="btn sm"
					target="_blank"
					rel="noopner noreferrer"
				>
					English
				</a> */}
				<a
					href={project.demo}
					className="btn sm primary"
					target="_blank"
					rel="noopener noreferrer"
				>
					Google Scholar
				</a>
			</div>
		</Card>
	);
};

export default Project;
