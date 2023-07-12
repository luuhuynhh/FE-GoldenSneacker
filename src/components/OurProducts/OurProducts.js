import React, { useContext, useEffect } from "react";
import ProductContext from "../../contexts/ProductsContext";
import ShopItem from "../ShopItem/ShopItem";
import { myCartToInCartItemObject } from "../../utils/app";

function OurProducts() {
	const { ourProducts, myCart } = useContext(ProductContext);
	const inCartItemObject = myCartToInCartItemObject(myCart);

	return (
		<div className="App_card">
			<div className="App_cardTop">
				<img src="./logo_nike.png" alt="logo" className="App_cardTopLogo" />
			</div>
			<div className="App_cardTitle">Our Products</div>
			<div className="App_cardBody">
				<div>
					{ourProducts.map((item) => (
						<ShopItem
							item={item}
							key={item.id}
							inCart={inCartItemObject[item.id] || false}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default OurProducts;
