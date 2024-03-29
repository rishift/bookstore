import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Intro from "./Intro";
import BestSelling from "./BestSelling";
import Backtotop from "./Backtotop";
import ContactForm from "./Contactform";
import Mainpage from "./Mainpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Cart";

function Homep() {
	return (
		<div className="App">
			<Navbar />
			<Intro />
			<BestSelling />
			<Mainpage />
			<ContactForm />
			<Footer />
			<Backtotop />
		</div>
	);
}

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Homep />} />
				<Route path="/cart" element={<Cart />}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
