import Data from "./data";
import Testimonial from "./Testimonial";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import "./testimonials.css";

const Testimonials = () => {
	return (
		<section id="testimonials">
			<h2>Educational Activities</h2>
			<p>This is my Corrent and Finished Educational Activities</p>
			<div className="container">
				<Swiper
					slidesPerView={1}
					spaceBetween={30}
					breakpoints={{
						601: { slidesPerView: 2 },
						1025: { slidesPerView: 3 },
					}}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination, Autoplay]}
					autoplay={true}
					className="mySwiper"
				>
					{Data.map((item) => (
						<SwiperSlide key={item.id}>
							<Testimonial testimonial={item} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default Testimonials;
