import React from 'react';
import './Navbar.css';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<div className='logo'>BookWaale</div>
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="#best-selling">Best Sellers</a></li>
				<li><a href="#contact">Contact Us</a></li>
				<li><a href="/cart">Cart</a></li>
			</ul>
		</nav>
	);
};

export default Navbar;

