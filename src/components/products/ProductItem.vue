<template>
  <div class="product">
    <div class="product__image">
      <img :src="imageUrl" :alt="title">
    </div>
    <div class="product__text">
      {{ description }}
    </div>
  </div>
</template>

<script>
import {Vue} from 'vue-class-component';
import {Prop} from 'vue-property-decorator';

export default class ProductItem extends Vue {
  @Prop({type: String})
  id;

  @Prop({type: String})
  title;

  @Prop({type: String})
  imageUrl;

  @Prop({type: String})
  description;

  @Prop({type: String})
  price;
}
</script>

<style scoped>

</style>
