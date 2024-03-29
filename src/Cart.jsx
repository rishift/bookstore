import React, { useState } from 'react';
import './Cart.css';
import Navbar from './Navbar';

let items, setitems;

const Cart = () => {
	const [cartItems, setCartItems] = useState([
		{ name: 'Book 1', author: 'Author 1', cover_photo: 'https://imagessl4.casadellibro.com/a/l/t0/44/9788499890944.jpg', price: 100 },
		{ name: 'Book 2', author: 'Author 2', cover_photo: 'https://imagessl4.casadellibro.com/a/l/t0/44/9788499890944.jpg', price: 150 },
		{ name: 'Book 3', author: 'Author 3', cover_photo: 'https://imagessl4.casadellibro.com/a/l/t0/44/9788499890944.jpg', price: 200 },
		{ name: 'Book 4', author: 'Author 3', cover_photo: 'https://imagessl4.casadellibro.com/a/l/t0/44/9788499890944.jpg', price: 200 },
	]);
items = cartItems;
setitems = setCartItems;
	const handleDeleteItem = (index) => {
		const updatedCartItems = [...cartItems];
		updatedCartItems.splice(index, 1);
		setCartItems(updatedCartItems);
	};

	const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

	return (
		<div>
			<Navbar />
			<div>
			<h1>Shopping Cart</h1>
			<ul>
				{cartItems.map((item, index) => (
					<li key={index}>
						<img src={item.cover_photo} alt={item.name} />
						<div>
							<h3>{item.name}</h3>
							<p>Author: {item.author}</p>
							<p>Price: {item.price}</p>
							<button onClick={() => handleDeleteItem(index)}>Delete</button>
						</div>
					</li>
				))}
			</ul>
			<p>Total Items: {cartItems.length}</p>
			<p>Total Price: Rs {totalPrice}</p>
			<button>Checkout</button>
		</div>
		</div>
		
	);
};

export {items, setitems};
export default Cart;