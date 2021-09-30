import getters from './getters';
import actions from '@/stores/products/actions';
import mutations from '@/stores/products/mutations';

export default {
	namespaced: true,
	state() {
		return {
			names: {},
			products: [
				{
					id: 'p1',
					image: '',
					title: 'Book Collection',
					description:
						'A collection of must-read books. All-time classics included!',
					price: 99.99,
				},
				{
					id: 'p2',
					image: '',
					title: 'Mountain Tent',
					description: 'A tent for the ambitious outdoor tourist.',
					price: 129.99,
				},
				{
					id: 'p3',
					image: '',
					title: 'Food Box',
					description:
						'May be partially expired when it arrives but at least it is cheap!',
					price: 6.99,
				},
			],
		}
	},
	getters,
	actions,
	mutations,
}
