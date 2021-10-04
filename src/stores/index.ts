import { createStore } from 'vuex';

import productsModule from './products/index';
import categoriesModule from './categories/index';
import cartModule from './cart/index';


const store = createStore({
	modules: {
		products:   productsModule,
		categories: categoriesModule,
		cart:       cartModule,
	},
});

export default store;
