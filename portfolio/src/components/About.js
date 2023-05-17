import React from 'react';
import photo from '../photos/BlakeReece.jpeg';
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
					Hi There! I'm Blake Reece, a full stack web developer currently enrolled
                    in the University of Arizona Coding Bootcamp. 
			
				</p>
			</div>
		</section>
	);
}

export default About;