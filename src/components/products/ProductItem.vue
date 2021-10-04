<template>
  <div class="product">
    <div class="product__title">
      {{ product.title }}
      <span>({{ product.qty }})</span>
    </div>
    <div class="product__price">
      {{ product.price }}
    </div>
    <div class="product__add" @click="addToCart">
      to cart
    </div>
  </div>
</template>

<script lang="ts">
import {Vue} from 'vue-class-component';
import {Prop} from 'vue-property-decorator';
import {CatalogProduct} from '@/models/CatalogProduct';

export default class ProductItem extends Vue {
  @Prop({type: CatalogProduct})
  product: any;

  addToCart() {
    this.$store.dispatch('cart/addProductToCart', {
      title: this.product.title,
      price: this.product.price,
    });
  }
}
</script>

<style lang="scss" scoped>
  .product {
    display:        flex;
    flex-direction: row;
    margin-bottom:  10px;
    padding:        5px 10px;

    &:last-child {
      margin-bottom: 0;
    }

    &__title {
      flex-grow: 3;
    }

    &__price {
      display:         flex;
      justify-content: center;
      align-items:     center;
      flex-grow:       1;
      background:      rgba(255, 221, 0, 0.32);
      min-width:       30px;
    }
  }
</style>
