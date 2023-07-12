import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { HomeRoute } from "./pages/Home/Home.route";
import ProductContext from "./contexts/ProductsContext";
import { useEffect, useState } from "react";
import { addCartItem, deleteCartItem, getCart, updateCartItem } from "./services/Cart";
import { getAllProducts } from "./services/Products";
const router = createBrowserRouter([HomeRoute]);

function App() {
	const [ourProducts, setOurProducts] = useState([]);
	const [myCart, setMyCart] = useState([]);

	const fetchAllProducts = async () => {
		const products = await getAllProducts();
		setOurProducts(products);
	};

	const fetchCart = async () => {
		const res = await getCart();
		const cartItemInfo = [];
		res.forEach((element) => {
			cartItemInfo.push({
				...ourProducts.filter((product) => product.id === element.product_id)[0],
				count: element.count,
			});
		});

		setMyCart(cartItemInfo);
	};

	/*handle click*/
	const handleCountChange = ({ product, step }) => {
		const index = myCart.findIndex((object) => {
			return object.id === product.id;
		});

		if (index >= 0) {
			const oldCartItem = myCart[index];
			const newCartItem = { ...oldCartItem, count: oldCartItem.count + step };
			if (newCartItem.count === 0) {
				myCart.splice(index, 1);
				deleteCartItem({ product_id: product.id });
			} else {
				myCart.splice(index, 1, newCartItem);
				updateCartItem({ product_id: product.id, count: newCartItem.count });
			}
		} else {
			myCart.push({ ...product, count: step });
			addCartItem({ product_id: product.id, count: step });
		}

		setMyCart([...myCart]);
	};

	const handleRemoveCart = ({ product }) => {
		const newCart = myCart.filter((item) => item.id !== product.id);
		setMyCart(newCart);

		deleteCartItem({ product_id: product.id });
	};

	useEffect(() => {
		fetchAllProducts();
	}, []);

	useEffect(() => {
		fetchCart();
	}, [ourProducts]);

	return (
		<ProductContext.Provider
			value={{
				ourProducts,
				myCart,
				handleCountChange,
				handleRemoveCart,
				setOurProducts,
				setMyCart,
			}}
		>
			<RouterProvider router={router} />
		</ProductContext.Provider>
	);
}

export default App;
