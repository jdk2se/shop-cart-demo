<template>
  <products-list></products-list>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ProductsList from '@/components/products/ProductsList.vue';

@Options({
  components: {
    ProductsList,
  },
})
export default class App extends Vue {
  created() {
    this.$store.dispatch('products/loadProducts');
    this.$store.dispatch('products/loadNames');
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
