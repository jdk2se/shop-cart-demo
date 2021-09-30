export default {
	loadProducts(context: any){
		const req = new Request('./data.json');
		fetch(req)
			.then((response) => response.json())
			.then((products) => {
				console.log(products.Value.Goods); // @todo
				context.commit('updateProducts', products.Value.Goods);
			});
	},

	loadNames(context: any) {
		const req = new Request('./names.json');
		fetch(req)
			.then((response) => response.json())
			.then((names) => {
				console.log(names); // @todo
				context.commit('loadNames', names);
			});
	}
}
