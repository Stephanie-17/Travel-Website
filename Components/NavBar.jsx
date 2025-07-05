import "./NavBar.css";
import { useState } from "react";
import menuIcon from "../src/assets/menu.svg";
import closeIcon from "../src/assets/close.svg";

const NavBar = () => {
	const [menu, setMenu] = useState(false);
	return (
		<div className="nav-items" id="home">
			<div className="right-nav-items">
				<a href="#home">
					{" "}
					<p>Home</p>
				</a>
				<a href="#about">
					<p>About</p>
				</a>
				<a href="#destination">
					{" "}
					<p>Destination</p>
				</a>
			</div>

			<h1 id="logo">G-G</h1>

			<div className="left-nav-items">
				<a href="#contact">
					<p>Contact</p>
				</a>
				<a href="#faqs">
					{" "}
					<p>FAQs</p>
				</a>
				<a href="#reviews">
					<p>Reviews</p>
				</a>
			</div>

			{menu ? (
				<div>
					<img
						onClick={() => setMenu(false)}
						src={closeIcon}
						id="close"
						alt=""
            style={{cursor: 'pointer'}}
					/>
					<div className="side-bar">
						<a href="#home">
							{" "}
							<p>Home</p>
						</a>
						<a href="#about">
							<p>About</p>
						</a>
						<a href="#destination">
							{" "}
							<p>Destination</p>
						</a>
						<a href="#contact">
							<p>Contact</p>
						</a>
						<a href="#faqs">
							{" "}
							<p>FAQs</p>
						</a>
						<a href="#reviews">
							<p>Reviews</p>
						</a>
					</div>
				</div>
			) : (
				<img onClick={() => setMenu(true)} id="menu" style={{backgroundColor:'white',borderRadius: '5px', cursor: 'pointer'}} src={menuIcon} alt="" />
			)}
		</div>
	);
};

export default NavBar;
