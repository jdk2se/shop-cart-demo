<template>
  <div class="catalog">
    <category-item
        v-for="(category, id) in getCategories"
        :key="id"
        :id="parseInt(id)"
        :category="category"
    ></category-item>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import CategoryItem from '@/components/categories/CategoryItem.vue';
import {mapGetters} from 'vuex';

@Options({
  components: {
    CategoryItem,
  },
  computed: {
    ...mapGetters('categories', ['getCategories']),
  },
})

export default class ProductsList extends Vue {}
</script>

<style lang="scss" scoped>
  .catalog {
    display:         flex;
    flex-direction:  row;
    flex-wrap:       wrap;
    justify-content: space-between;
    max-width:       800px;
    margin:          0 auto;
  }
</style>
