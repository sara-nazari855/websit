import "./portfolio.css";
import ProjectCategory from "./ProjectCategory";
import Projects from "./Projects";
import Data from "./data";
import { useState } from "react";

const Portfolio = () => {
	const [projects, setProjects] = useState(Data);

	// uniq categories for sorting the projects
	const catergories = Data.map((item) => item.category);
	const uniqCategories = ["all", ...new Set(catergories)];

	const filterProjectHandler = (category) => {
		if (category === "all") {
			setProjects(Data);
			return;
		}
		const filterProjects = Data.filter(
			(project) => project.category === category
		);
		setProjects(filterProjects);
	};

	return (
		<section id="portfolio">
			<h2>Recent Projects</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Perferendis aut, non qui natus fuga cumque vitae commodi
				voluptate quod, quae dolor placeat culpa, maxime sit.
			</p>
			<div className="container portfolio__container">
				<ProjectCategory
					categories={uniqCategories}
					onFilterProjects={filterProjectHandler}
				/>
				<Projects projects={projects} />
			</div>
		</section>
	);
};

export default Portfolio;
