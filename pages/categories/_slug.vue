<template>
  <main>

    <!-- Header -->
    <Header>
      <template slot="title">
        <h1 class="header-title">{{ category.name[locale] }}</h1>
      </template>
      <template slot="description">
        <p class="header-description">
          {{ category.description[locale] }}
        </p>
      </template>
    </Header>

    <section class="container pb-100">
      <div class="flex flex-wrap justify-center -mx-40">

        <!-- Sub-categories -->
        <SubCategory
          v-for="subcategory in category.children"
          :key="subcategory.slug"
          :category="category"
          :subcategory="subcategory"
          class="mx-20 mt-100"/>

      </div>
    </section>

  </main>
</template>

<script>
import Header from "@/components/Header";
import SubCategory from "@/components/categories/SubCategory";
import { mapGetters } from "vuex";

export default {
  head() {
    return {
      title: `${this.title} | ${this.category.name[this.locale]}`
    };
  },
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
      title: app.head.title,
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

