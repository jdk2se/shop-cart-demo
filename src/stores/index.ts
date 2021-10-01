import { createStore } from 'vuex';

import productsModule from './products/index';
import categoriesModule from './categories/index';

const store = createStore({
	modules: {
		products:   productsModule,
		categories: categoriesModule,
	},
});

export default store;
