import React, { useState } from 'react';
import './Contactform.css';

const ContactForm = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [query, setQuery] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form onSubmit={handleSubmit} id='contact'>
			<h2>Contact us</h2> 
			<div>
				<label htmlFor="name">Your Name:</label>
				<input
					type="text"
					id="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="email">Your Email:</label>
				<input
					type="email"
					id="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="query">Your Query:</label>
				<textarea
					id="query"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				></textarea>
			</div>
			<button type="submit">Submit</button>
		</form>
	);
};

export default ContactForm;