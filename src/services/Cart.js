import { HTTP_METHOD, makeRequest } from "../utils/api";

export const getCart = async () => {
	try {
		const res = await makeRequest(HTTP_METHOD.GET, "/cart");
		return res;
	} catch (err) {
		console.log(err);
	}
};

export const addCartItem = async ({ product_id, count }) => {
	try {
		const res = await makeRequest(HTTP_METHOD.POST, "/cart-items", { product_id, count });
		return res;
	} catch (err) {
		console.log(err);
	}
};

export const updateCartItem = async ({ product_id, count }) => {
	try {
		const res = await makeRequest(HTTP_METHOD.PUT, "/cart-items", { product_id, count });
		return res;
	} catch (err) {
		console.log(err);
	}
};

export const deleteCartItem = async ({ product_id }) => {
	try {
		const res = await makeRequest(HTTP_METHOD.DELETE, `/cart-items/${product_id}`);
		return res;
	} catch (err) {
		console.log(err);
	}
};
