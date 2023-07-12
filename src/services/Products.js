import { HTTP_METHOD, makeRequest } from "../utils/api";

export const getAllProducts = async () => {
	try {
		const res = await makeRequest(HTTP_METHOD.GET, "/products");
		return res;
	} catch (err) {
		console.log(err);
	}
};
