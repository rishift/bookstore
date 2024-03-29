import React, { useState, useEffect } from 'react';
import './Backtotop.css';

const BackToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	const handleScroll = () => {
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		setIsVisible(scrollTop > 0);
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<button
			className={`back-to-top ${isVisible ? 'visible' : ''}`}
			onClick={scrollToTop}
		>
			⬆️
		</button>
	);
};

export default BackToTop;