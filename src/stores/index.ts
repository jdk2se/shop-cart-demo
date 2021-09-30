import { createStore } from 'vuex';

import productsModule from './products/index';

const store = createStore({
	modules: {
		products: productsModule,
	},
});

export default store;
