import React from 'react';
import { navMenu } from './../data';
import { Link } from 'react-router-dom';
function Navbar() {
	return (
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="container">
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						{navMenu.map((item, index) => (
							<li className="nav-item" key={index}>
								<Link to={item.src}>
									<a classname="nav-link active" href={item.src}>
										{item.name}
									</a>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
