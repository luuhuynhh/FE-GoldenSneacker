import queryString from "query-string";

export const HTTP_METHOD = {
	GET: "GET",
	PUT: "PUT",
	DELETE: "DELETE",
	POST: "POST",
};

const API_HOST = process.env.REACT_APP_API_HOST;

export const makeRequest = async (method, url, data = null) => {
	let res = null;
	if (method === HTTP_METHOD.GET || method === HTTP_METHOD.DELETE) {
		res = await (
			await fetch(`${API_HOST}${url}?${queryString.stringify(data)}`, {
				method: method,
			})
		).json();
	} else {
		res = await (
			await fetch(`${API_HOST}${url}`, {
				method: method,
				body: JSON.stringify(data || {}),
				headers: {
					"Content-Type": "application/json",
				},
			})
		).json();
	}

	return res;
};
