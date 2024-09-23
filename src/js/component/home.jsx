import React from "react";

//create your first component
const Cards = () => {
	return (
		<div class="card-container">
			<div class="card" style="width: 18rem;">
				<img src="https://picsum.photos/id/237/200/300" class="card-img-top" alt="..."/>
				<div class="card-body">
					<h5 class="card-title">Dogs Needing Homes</h5>
					<p class="card-text">Lorem ipsum odor amet, consectetuer adipiscing elit. Ultrices ridiculus tempus risus pellentesque penatibus potenti. Justo parturient maecenas luctus aenean auctor laoreet. Nulla placerat suscipit auctor mauris parturient nostra ex nibh egestas.</p>
					<a href="#" class="btn btn-primary">Find Out More</a>
				</div>
			</div>
			<div class="card" style="width: 18rem;">
				<img src="https://picsum.photos/id/100/200/300" class="card-img-top" alt="..."/>
				<div class="card-body">
					<h5 class="card-title">Beaches Of The World</h5>
					<p class="card-text">Lorem ipsum odor amet, consectetuer adipiscing elit. Id nostra etiam convallis est hac fames suscipit. Aliquam quam bibendum consectetur luctus tempor lobortis lorem. Vivamus nibh varius bibendum primis lorem egestas pulvinar nisi.</p>
					<a href="#" class="btn btn-primary">Find Out More</a>
				</div>
			</div>
			<div class="card" style="width: 18rem;">
				<img src="https://picsum.photos/id/111/200/300" class="card-img-top" alt="..."/>
				<div class="card-body">
					<h5 class="card-title">Classic Cars</h5>
					<p class="card-text">Lorem ipsum odor amet, consectetuer adipiscing elit. Id orci vehicula finibus ad at integer. Hendrerit eleifend proin hac pellentesque non per interdum tempor amet.</p>
					<a href="#" class="btn btn-primary">Find Out More</a>
				</div>
			</div>
			<div class="card" style="width: 18rem;">
				<img src="https://picsum.photos/id/142/200/300" class="card-img-top" alt="..."/>
				<div class="card-body">
					<h5 class="card-title">Castles and Estates of the World</h5>
					<p class="card-text">Lorem ipsum odor amet, consectetuer adipiscing elit. Himenaeos conubia sagittis; turpis natoque mi mollis.</p>
					<a href="#" class="btn btn-primary">Find Out More</a>
				</div>
			</div>
		</div>
	);
};

export default Cards;
