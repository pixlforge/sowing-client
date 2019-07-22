<template>
  <main>

    <!-- Header -->
    <AppHeader>
      <template slot="icon">
        <AppHeaderIcon/>
      </template>
      <template slot="title">
        <AppTitle
          semantic="h1"
          visual="header">
          {{ category.name[locale] }}
        </AppTitle>
      </template>
      <template slot="description">
        <AppHeaderDescription>
          {{ category.description[locale] }}
        </AppHeaderDescription>
      </template>
    </AppHeader>

    <!-- Content -->
    <section class="section__container container">

      <!-- Subcategories with sections -->
      <template v-if="categoryHasSections">
        <div
          v-for="section in category.children"
          :key="section.id">
          <h2 class="subcategory__section">
            {{ section.name[locale] }}
          </h2>

          <div class="subcategory__wrapper">
            <div
              v-for="subcategory in section.children"
              :key="subcategory.slug"
              class="subcategory__container">
              <AppSubCategory
                :category="category"
                :subcategory="subcategory"/>
            </div>
          </div>
        </div>
      </template>

      <!-- Subcategories without sections -->
      <template v-else>
        <div class="subcategory__wrapper">
          <div
            v-for="subcategory in category.children"
            :key="subcategory.slug"
            class="subcategory__container">
            <AppSubCategory
              :category="category"
              :subcategory="subcategory"/>
          </div>
        </div>
      </template>
    </section>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';

import AppTitle from '@/components/AppTitle';
import AppHeader from '@/components/headers/AppHeader';
import AppHeaderIcon from '@/components/headers/AppHeaderIcon';
import AppSubCategory from '@/components/categories/AppSubCategory';
import AppHeaderDescription from '@/components/headers/AppHeaderDescription';

export default {
  head() {
    return {
      title: `${this.category.name[this.locale]} | ${this.title}`
    };
  },
  components: {
    AppTitle,
    AppHeader,
    AppHeaderIcon,
    AppSubCategory,
    AppHeaderDescription
  },
  data() {
    return {
      category: {}
    };
  },
  computed: {
    ...mapGetters({
      locale: 'locale'
    }),
    categoryHasSections() {
      return this.category.children[0].is_section;
    }
  },
  async asyncData({ params, app }) {
    const res = await app.$axios.$get(`/categories/${params.slug}`);

    return {
      title: app.head.title,
      category: res.data
    };
  }
};
</script>
