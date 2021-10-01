<template>
  <products-list></products-list>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Catalog from '@/components/catalog/Catalog.vue';

@Options({
  components: {
    ProductsList: Catalog,
  },
})
export default class App extends Vue {
  created() {
    this.$store.dispatch('products/loadProducts');
    this.$store.dispatch('categories/loadCategories');
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
