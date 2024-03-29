import React from 'react';
import introImage from './intro.png';
import './Intro.css';

const Intro = () => {
	return (
		<section className="intro">
			<div className="intro-content">
				<h1>Welcome to BookWaale</h1>
				<p>Discover a world of books at your fingertips</p>
				<button className="btn">Shop Now</button>
			</div>
			<div className="intro-image">
				<img className="intro-image-background" src={introImage} alt="BookWaale Intro" />
			</div>
		</section>
	);
}

export default Intro;