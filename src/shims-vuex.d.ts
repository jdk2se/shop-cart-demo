import { store } from '@/stores/index';

declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		$store: store;
	}
}
