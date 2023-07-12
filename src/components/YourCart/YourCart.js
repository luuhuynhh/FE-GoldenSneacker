import React, { useContext } from "react";
import ProductContext from "../../contexts/ProductsContext";
import CartItem from "../CartItem/CartItem";
import { calculateTotalPrice } from "../../utils/app";

function YourCart() {
	const { myCart } = useContext(ProductContext);
	const totalPrice = calculateTotalPrice(myCart);

	return (
		<div className="App_card">
			<div className="App_cardTop">
				<img src="./logo_nike.png" alt="logo" className="App_cardTopLogo" />
			</div>
			<div className="App_cardTitle">
				Your Cart <span className="App_cardTitleAmount">${totalPrice.toFixed(2)}</span>
			</div>
			<div className="App_cardBody">
				<div>
					{!myCart || !myCart.length ? (
						<div className="App_cartEmpty">
							<p className="App_cartEmptyText">Your cart is empty.</p>
						</div>
					) : (
						myCart.map((item, index) => <CartItem item={item} key={index} />)
					)}
				</div>
			</div>
		</div>
	);
}

export default YourCart;
