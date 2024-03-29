import React from "react";
import "./BestSelling.css";
import book1 from "./book1.png";
import book2 from "./book2.png";

const BestSelling = () => {
	const books = [
		{
			id: 1,
			coverPhoto: book1,
			name: "Book 1",
			author: "Author 1",
			rating: 4.5,
		},
		{
			id: 2,
			coverPhoto: book2,
			name: "Book 2",
			author: "Author 2",
			rating: 4.2,
		},
		{
			id: 3,
			coverPhoto: book1,
			name: "Book 1",
			author: "Author 1",
			rating: 4.5,
		},
		{
			id: 4,
			coverPhoto: book2,
			name: "Book 2",
			author: "Author 2",
			rating: 4.2,
		},
		// Add more books here
	];

	return (
		<div className="best-selling" id="best-selling">
			<h2>Best Sellers of the Month</h2>
			<div className="carousel">
				{books.map((book) => (
					<div key={book.id} className="card">
						<img src={book.coverPhoto} alt={book.name} />
						<h3>{book.name}</h3>
						<p>By {book.author}</p>
						<div className="rating">
							{Array.from({ length: Math.floor(book.rating) }, (_, index) => (
								<span key={index} className="star"></span>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default BestSelling;
