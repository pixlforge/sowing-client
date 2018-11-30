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

      <!-- Subcategories with sections -->
      <template v-if="categoryHasSections">
        <div
          v-for="section in category.children"
          :key="section.id"
          class="">
          <h2 class="text-48 text-green-darkest mt-100">{{ section.name[locale] }}</h2>

          <div class="flex flex-wrap justify-center -mx-40">
            <SubCategory
              v-for="subcategory in section.children"
              :key="subcategory.slug"
              :category="category"
              :subcategory="subcategory"
              class="mx-20 mt-100"/>
          </div>
        </div>
      </template>

      <!-- Subcategories without sections -->
      <template v-else>
        <div class="flex flex-wrap justify-center -mx-40">
          <SubCategory
            v-for="subcategory in category.children"
            :key="subcategory.slug"
            :category="category"
            :subcategory="subcategory"
            class="mx-20 mt-100"/>
        </div>
      </template>
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
    }),
    categoryHasSections() {
      return this.category.children[0].is_section;
    }
  }
};
</script>

