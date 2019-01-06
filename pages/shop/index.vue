<template>
  <main>

    <!-- Header -->
    <Header>
      <template slot="icon">
        <font-awesome-icon :icon="['far', 'store']"/>
      </template>
      <template slot="title">
        <h1 class="header-title">{{ $t("pages.shop.title") }}</h1>
      </template>
    </Header>

    <section class="container section">
      <div class="flex flex-col items-center">

        <!-- User owns a shop -->
        <template v-if="userHasShop">
          <h2 class="title-large text-center mt-100">Nom de la boutique</h2>
        </template>
        
        <!-- User does not own a shop -->
        <template v-else>
          <h2 class="title-large text-center mt-100">{{ $t("pages.shop.not_created_yet") }}</h2>

          <section class="w-full max-w-1000">
            <p class="paragraph-body text-center mt-60">
              {{ $t("pages.shop.creation_cta_line_1") }}<br>
              {{ $t("pages.shop.creation_cta_line_2") }}
            </p>
          </section>

          <img
            src="~assets/img/under_construction.svg"
            alt=""
            class="block w-full md:w-1/2 mt-100">

          <nuxt-link
            :to="localePath({ name: 'shop-creator-terms' })"
            class="btn btn-primary mt-100">
            <font-awesome-icon
              :icon="['far', 'rocket']"
              class="mr-10"/>
            {{ $t("buttons.create_my_shop") }}
          </nuxt-link>
        </template>

      </div>
    </section>

  </main>
</template>

<script>
import Header from "@/components/Header";
import { mapGetters } from "vuex";

export default {
  head() {
    return {
      title: `${this.title} | ${this.$t("pages.shop.title")}`
    };
  },
  components: {
    Header
  },
  async asyncData({ app }) {
    return {
      title: app.head.title
    };
  },
  computed: {
    ...mapGetters({
      userHasShop: "userHasShop"
    })
  }
};
</script>
