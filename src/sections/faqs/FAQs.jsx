import "./faqs.css";
import Data from "./data";
import FAQ from "./FAQ";

const FAQs = () => {
	return (
		<section id="faqs">
			<h2>Professional Experience</h2>
			<p>Here is My Professional Experience in University</p>
			<div className="container faqs__container">
				{Data.map((faq) => (
					<FAQ key={faq.id} faq={faq} />
				))}
			</div>
		</section>
	);
};

export default FAQs;
