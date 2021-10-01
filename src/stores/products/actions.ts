export default {
	loadProducts(context: any){
		const req = new Request('./data.json');
		fetch(req)
			.then((response) => response.json())
			.then((products) => {
				context.commit('updateProducts', products.Value.Goods);
			});
	},
}
