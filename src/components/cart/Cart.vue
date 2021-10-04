<template>
  <div class="cart">
    Итого: {{ getTotal }}$
  </div>
  <cart-item v-for="(product, index) in getItems"
    :key="index"
    :id="index"
    :title="product.title"
    :qty="product.qty"
    :price="product.price"
  ></cart-item>
</template>

<script lang="ts">
import { Options, Vue} from 'vue-class-component';
import { mapGetters } from 'vuex';
import CartItem from '@/components/cart/CartItem.vue';

@Options({
  components: {
    CartItem,
  },
  computed: {
    ...mapGetters('cart', ['getItems', 'getTotal']),
  },
})

export default class Cart extends Vue {}
</script>

<style scoped>

</style>
