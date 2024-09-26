import React from "react";
import Cards from "./Cards";
import Navbar from "./navbar";
import JumboTron from "./JumboTron";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const Home = () => {
	return (
		<div className="text-center mx-auto">
			<Navbar/>
			<JumboTron />
			<div className="card-container d-flex justify-content-center">
			<Cards img={"https://picsum.photos/id/237/200/300"} />
			<Cards img={"https://picsum.photos/id/100/200/300/"} />
			<Cards img={"https://picsum.photos/id/111/200/300"}/>
			<Cards img={"https://picsum.photos/id/114/200/300"}/>
		</div>
	</div>
	);
};

export default Home;


