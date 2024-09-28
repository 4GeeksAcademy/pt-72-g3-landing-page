import React from "react";
import Cards from "./Cards";
import Navbar from "./navbar";
import JumboTron from "./JumboTron";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";



const Footer = () => {
	return (
		<div className="footerContainer my-5">
			<footer className="text-center text-lg-start bg-secondary">
    			<div className="container d-flex justify-content-center py-5">
      				<button type="button" className="btn btn-primary btn-lg btn-floating mx-2">
        				<i className="fab fa-facebook-f"></i>
      				</button>
      				<button type="button" className="btn btn-primary btn-lg btn-floating mx-2">
        				<i className="fab fa-youtube"></i>
      				</button>
      				<button type="button" className="btn btn-primary btn-lg btn-floating mx-2">
        				<i className="fab fa-instagram"></i>
      				</button>
      				<button type="button" className="btn btn-primary btn-lg btn-floating mx-2">
        				<i className="fab fa-twitter"></i>
      				</button>
    			</div>

				<div className="text-center text-white p-3">
      				© 2024 Copyright: 4Geeks pt-72 G3 
    			</div>
  			</footer>
  		</div>
	);
};

export default Footer;

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


