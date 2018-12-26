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

    Create step 2

    <nuxt-link
      :to="localePath({ name: 'shop-create-step-1' })"
      class="btn btn-primary">
      Précédent
    </nuxt-link>
  </main>
</template>

<script>
import Header from "@/components/Header";

export default {
  transition: {
    name: "slide",
    mode: "out-in"
  },
  components: {
    Header
  }
};
</script>

