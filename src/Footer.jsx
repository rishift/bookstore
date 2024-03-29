import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<h3>About BookWaale</h3>
						<p>
							BookWaale is an ecommerce platform dedicated to selling books. We offer a wide range of books across various genres, including fiction, non-fiction, self-help, and more.
						</p>
					</div>
					<div className="col-md-6">
						<h3>Contact Us</h3>
						<p>
							Email: info@bookwaale.com
							<br />
							Phone: 123-456-7890
							<br />
							Address: 123 Main Street, City, State, Country
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;