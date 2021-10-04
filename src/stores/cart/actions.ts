export default {
	addProductToCart(context: any, productData: any) {
		const cart = context.getters.getCart;
		const productInCartIndex = cart.items.findIndex((item: any) => item.productId === productData.title);

		if (-1 !== productInCartIndex) {
			context.commit('addExistedProduct', {
				index: productInCartIndex,
			});
		}
		else {
			const newCartItem = {
				productId: productData.title,
				title:     productData.title,
				price:     productData.price,
				qty:       1,
			};

			context.commit('addNewProduct', newCartItem);
		}

		context.commit('increaseCartCounter');
		context.commit('increaseCartSum', {
			price: productData.price,
		});
	},

	removeCartProduct(context: any, id: number) {
		context.commit('removeCartProduct', {index: id});
	},
}
