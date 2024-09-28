import React from "react";

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
