import React, { useContext } from "react";
import ProductContext from "../../contexts/ProductsContext";

function CartItem({ item }) {
	const { handleCountChange, handleRemoveCart } = useContext(ProductContext);
	return (
		<div className="App_cartItem">
			<div className="App_cartItemLeft cartItemLeft">
				<div
					className="App_cartItemImage cartItemImage"
					style={{ backgroundColor: item.color }}
				>
					<div className="App_cartItemImageBlock">
						<img src={item.image} alt="" />
					</div>
				</div>
			</div>
			<div className="App_cartItemRight cartItemRight">
				<div className="App_cartItemName cartItemName">{item.name}</div>
				<div className="App_cartItemPrice cartItemPrice">${item.price}</div>
				<div className="App_cartItemActions cartItemActions">
					<div className="App_cartItemCount cartItemCount">
						<div
							className="App_cartItemCountButton"
							onClick={() => handleCountChange({ product: item, step: -1 })}
						>
							-
						</div>
						<div className="App_cartItemCountNumber">{item.count}</div>
						<div
							className="App_cartItemCountButton"
							onClick={() => handleCountChange({ product: item, step: 1 })}
						>
							+
						</div>
					</div>
					<div
						className="App_cartItemRemove cartItemRemove"
						onClick={() => handleRemoveCart({ product: item })}
					>
						<img src="remove.png" alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default CartItem;
