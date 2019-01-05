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
      <div class="flex flex-col items-center mt-100">
        <h2 class="text-36">Vous n'avez pas encore créé votre boutique.</h2>

        <img
          src="~assets/img/under_construction.svg"
          alt=""
          class="block w-1/2 mt-100">

        <nuxt-link
          :to="localePath({ name: 'shop-creator-terms' })"
          class="btn btn-primary mt-80">
          <font-awesome-icon
            :icon="['far', 'rocket']"
            class="mr-10"/>
          Créer ma boutique
        </nuxt-link>

      </div>
    </section>
  </main>
</template>

<script>
import Header from "@/components/Header";

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
  }
};
</script>
