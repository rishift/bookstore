import React from "react";
import "./Mainpage.css";
import { items, setitems } from "./Cart";

const ProductDisplay = () => {
	function addtocart(book) {
		console.log(items);
		setitems([...items, book])
	}
	const books = [
		{
			name: "The Great Gatsby",
			author: "F. Scott Fitzgerald",
			cover_photo: "https://imagessl4.casadellibro.com/a/l/t0/44/9788499890944.jpg",
			price: 935.71,
		},
		{
			name: "To Kill a Mockingbird",
			author: "Harper Lee",
			cover_photo: "https://imagessl4.casadellibro.com/a/l/t0/44/9788499890944.jpg",
			price: 799.99,
		},
		{
			name: "1984",
			author: "George Orwell",
			cover_photo: "https://imagessl4.casadellibro.com/a/l/t0/44/9788499890944.jpg",
			price: 599.99,
		},
		{
			name: "Pride and Prejudice",
			author: "Jane Austen",
			cover_photo: "https://imagessl4.casadellibro.com/a/l/t0/44/9788499890944.jpg",
			price: 699.99,
		},
	];
	return (<div>
		<h2>Browse our collection</h2>
		<div id="mainpage">
			{books.map((book) => (
				<div key={book.name} className="card">
					<img src={book.cover_photo} alt={book.name} />
					<div className="card-details">
						<h3>{book.name}</h3>
						<p>Author: {book.author}</p>
						<p>Price: ${book.price}</p>
						<div className="card-buttons">
							<button className="add-to-cart" onClick={() => addtocart(book)}>Add to Cart</button>
							<button className="buy-now">Buy Now</button>
						</div>
					</div>
				</div>
			))}
		</div>
	</div>
	);
};

export default ProductDisplay;
