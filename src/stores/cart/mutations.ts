export default {
	addExistedProduct(state: any, payload: any) {
		state.cart.items[payload.index].qty++;
	},

	addNewProduct(state: any, payload: any) {
		state.cart.items.push(payload);
	},

	increaseCartCounter(state: any) {
		state.cart.qty++;
	},

	increaseCartSum(state: any, payload:any) {
		state.cart.total = state.cart.total + payload.price;
	},


	removeCartProduct(state: any, payload: any) {
		const index = payload.index;
		const cart  = state.cart;
		const productInCartIndex = cart.items.findIndex((_: any, itemIndex: number) => itemIndex === index);

		if (-1 === productInCartIndex) {
			return;
		}

		const items = state.cart.items[productInCartIndex];
		state.cart.items.splice(productInCartIndex, 1);
		state.cart.qty   -= items.qty;
		state.cart.total -= items.qty * items.price;
	}
}
