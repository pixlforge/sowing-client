<template>
  <main>
    <Header :item="category"/>
    <div class="container pb-100">
      <div class="flex flex-wrap justify-start">

        <!-- List all categories -->
        <SubCategory
          v-for="subcategory in category.children"
          :key="subcategory.slug"
          :category="category"
          :subcategory="subcategory"
          class="mx-auto mt-100"/>

      </div>
    </div>
  </main>
</template>

<script>
import Header from "@/components/Header";
import SubCategory from "@/components/categories/SubCategory";
import { mapGetters } from "vuex";

export default {
  components: {
    Header,
    SubCategory
  },
  data() {
    return {
      category: {}
    };
  },
  async asyncData({ params, app }) {
    let res = await app.$axios.$get(`/categories/${params.slug}`);

    return {
      category: res.data
    };
  },
  computed: {
    ...mapGetters({
      locale: "locale"
    })
  }
};
</script>

