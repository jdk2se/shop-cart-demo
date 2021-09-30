export default {
	getCart(state: any) {
		return state.cart;
	},

	getTotal(state: any) {
		return state.cart.total.toFixed(2);
	},

	getItems(state: any) {
		return state.cart.items;
	}
}
