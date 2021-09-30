<template>
  <product-item
      v-for="(product, index) in getProducts"
      :key="index"
      :id="product.id"
      :title="product.title"
      :image-url="product.image"
      :description="product.description"
      :price="product.C"
  ></product-item>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import ProductItem from '@/components/products/ProductItem.vue';
import {mapGetters} from 'vuex';

@Options({
  components: {
    ProductItem,
  },
  computed: {
    ...mapGetters('products', ['getProducts', 'getNames']),
  },
})

export default class ProductsList extends Vue {}
</script>

<style scoped>

</style>
