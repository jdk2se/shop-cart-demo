<template>
  <section class="cart-item">
    <div class="cart-item__header">
      {{ title }} - {{ qty }} / {{ price }}$
    </div>
    <div class="cart-item__remove">
      <span @click="removeItem(id)">Удалить</span>
    </div>
  </section>
</template>

<script lang="ts">
import {Vue} from 'vue-class-component';
import {Prop} from 'vue-property-decorator';

export default class CartItem extends Vue {
  @Prop({type: String})
  title: string;

  @Prop({type: Number})
  qty: number;

  @Prop({type: Number})
  price: number;

  @Prop({type: Number})
  id: number; // т.к. у товаров нет id используем порядок в корзине...

  removeItem(id: number) {
    this.$store.dispatch('cart/removeCartProduct', this.id);
  }
}
</script>

<style scoped>

</style>
