import getters from './getters';
import actions from '@/stores/products/actions';
import mutations from '@/stores/products/mutations';

export default {
	namespaced: true,
	state() {
		return {
			products: [],
		}
	},
	getters,
	actions,
	mutations,
}
