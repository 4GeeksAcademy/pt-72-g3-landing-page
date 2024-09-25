import React from "react";
import JumboTron from "./JumboTron";

const Home = () => {
	return (
		<div className="text-center">
			<JumboTron />
		</div>
	);
};

export default Home;


//create your first component
const Navbar = () => {
	return (
		<nav class="navbar navbar-expand-lg bg-body-tertiary">
			<div class="container-fluid">
			<a class="navbar-brand" href="#">Navbar</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
				<div class="collapse navbar-collapse text-color-black" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
					<a class="nav-link active" aria-current="page" href="#">Home</a>
					</li>
					<li class="nav-item">
					<a class="nav-link" href="#"><strong>Your Page</strong></a>
					</li>
					<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Settings
					</a>
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="#">Dark Theam</a></li>
						<li><a class="dropdown-item" href="#">Your Home Page</a></li>
						<li><hr class="dropdown-divider"/>Site Settings</li>
						<li><a class="dropdown-item" href="#">Post Settings</a></li>
					</ul>
					</li>
					<li class="nav-item">
					<a class="nav-link disabled" aria-disabled="true">Comments</a>
					</li>
				</ul>
				<form class="d-flex" role="search">
					<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
					<button class="btn btn-outline-primary" type="submit">Search</button>
				</form>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;

