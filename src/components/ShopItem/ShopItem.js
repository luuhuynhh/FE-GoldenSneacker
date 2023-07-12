import React, { useContext } from "react";
import ProductContext from "../../contexts/ProductsContext";

function ShopItem({ item, inCart }) {
	const { handleCountChange } = useContext(ProductContext);

	return (
		<div className="App_shopItem">
			<div className="App_shopItemImage" style={{ backgroundColor: item.color }}>
				<img src={item.image} alt={item.name} />
			</div>
			<div className="App_shopItemName">{item.name}</div>
			<div className="App_shopItemDescription">{item.description}</div>
			<div className="App_shopItemBottom">
				<div className="App_shopItemPrice">${item.price}</div>
				{!inCart ? (
					<div
						className="App_shopItemButton"
						onClick={() => handleCountChange({ product: item, step: 1 })}
					>
						<p>ADD TO CART</p>
					</div>
				) : (
					<div className="App_inactive App_shopItemButton">
						<div className="App_shopItemButtonCover">
							<div className="App_shopItemButtonCoverCheckIcon"></div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default ShopItem;
