export const myCartToInCartItemObject = (myCart) => {
	const inCartItemObject = {};

	myCart.forEach((element) => {
		inCartItemObject[element.id] = true;
	});

	return inCartItemObject;
};

export const calculateTotalPrice = (myCart) => {
	let total = 0;
	
	myCart.forEach((element) => {
		total += element.price * element.count;
	});

	return total;
};
