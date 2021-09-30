import actions from '@/stores/cart/actions';
import getters from '@/stores/cart/getters';
import mutations from '@/stores/cart/mutations';

export default {
	namespaced: true,
	state() {
		return {
			cart: {
				items: [],
				total: 0,
				qty: 0
			}
		}
	},
	getters,
	actions,
	mutations,
}
