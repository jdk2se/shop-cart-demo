import getters from '@/stores/categories/getters';
import actions from '@/stores/categories/actions';
import mutations from '@/stores/categories/mutations';

export default {
	namespaced: true,
	state() {
		return {
			categories: null,
		}
	},
	getters,
	actions,
	mutations,
}
