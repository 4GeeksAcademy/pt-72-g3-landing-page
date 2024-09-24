import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Cards from "./Cards";

//create your first component
const Home = () => {
	return (
	<div clssName="mx-auto">
		<div className="card-container d-flex justify-content-center">
			<Cards img={"https://picsum.photos/id/237/200/300"} />
			<Cards />
			<Cards />
			<Cards />
		</div>
	</div>	
	);
};

export default Home;
