<template>
  <section class="category">
<!--    @todo to const -->
    <div class="category__title">
      {{ category.G }}
    </div>
    <product-item
        v-for="(product, id) in getCategoryProducts"
        :key="id"
        :product="getCatalogProduct(product)"
    ></product-item>
  </section>
</template>

<script>
import { Options, Vue} from 'vue-class-component';
import {Prop} from 'vue-property-decorator';
import {mapGetters} from 'vuex';
import ProductItem from '../products/ProductItem';
import {CatalogProduct} from '@/models/CatalogProduct';

@Options({
  components: {
    ProductItem,
  },
  computed: {
    ...mapGetters('products', ['getProducts']),
    getCategoryProducts() {
      const products = this.getProducts.filter((product) => product.G === this.id);

      return products;
    }
  }
})

export default class CategoryItem extends Vue {
  @Prop({type: Number})
  id;

  @Prop({type: Object})
  category;

  getCatalogProduct(product) {
    const catalogProduct = new CatalogProduct();

    catalogProduct.title = this.category.B[product.T].N;
    catalogProduct.price = product.C;
    catalogProduct.qty   = product.P;

    return catalogProduct;
  }
}
</script>

<style lang="scss" scoped>
  .category {
    width:         48%;
    border:        1px solid #000;
    border-radius: 8px;
    margin-bottom: 20px;

    &__title {
      background:    #609cd0;
      color:         #fff;
      width:         100%;
      text-align:    center;
      padding:       5px 0;
      border-radius: 6px 6px 0 0;
      margin-bottom: 10px;
    }
  }
</style>
