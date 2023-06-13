import React from 'react';
import './About.css';
import photo from '../../photos/BlakeReece.jpeg';
function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img src={photo} alt="about-me" className='photo' />
				
			</div>
			<div>
				<p>
				Hello, I'm Blake Reece, originally from Chicago and now based in Phoenix. I recently enrolled in the University of Arizona Coding Bootcamp, where I'm pursuing my passion for web development. With a previous career as a barber, I've developed strong attention to detail and excellent customer service skills. In the bootcamp, I've been immersing myself in various programming languages and frameworks, equipping me to build robust web applications. I'm excited to merge my creativity and problem-solving abilities with my technical expertise, aiming to create innovative and user-friendly digital experiences.
			
				</p>
			</div>
		</section>
	);
}

export default About;