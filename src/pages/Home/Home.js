import React from "react";
import OurProducts from "../../components/OurProducts/OurProducts";
import YourCart from "../../components/YourCart/YourCart";

function Home() {
	return (
		<div className="App_mainContent">
			<OurProducts />
			<YourCart />
		</div>
	);
}

export default Home;
