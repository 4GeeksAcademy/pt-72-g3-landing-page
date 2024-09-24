import React from "react";

//create your first component
const Cards = (props) => {
	return (
		<div className="card-container">
			<div className="card" style={{"width" : "18rem"}}>
				<img src={props.img} className="card-img-top" alt="..."/>
				<div className="card-body">
					<h5 className="card-title">Image</h5>
					<p className="card-text">Lorem ipsum odor amet, consectetuer adipiscing elit. Ultrices ridiculus tempus risus pellentesque penatibus potenti. Justo parturient maecenas luctus aenean auctor laoreet. Nulla placerat suscipit auctor mauris parturient nostra ex nibh egestas.</p>
					<a href="#" className="btn btn-primary">Find Out More</a>
				</div>
			</div>
			</div>
	);
};

export default Cards;
