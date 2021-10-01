export default {
	loadCategories(context: any) {
		const req = new Request('./names.json');
		fetch(req)
			.then((response) => response.json())
			.then((categories) => {
				context.commit('loadCategories', categories);
			});
	}
}
