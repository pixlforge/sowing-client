<template>
  <main>

    <!-- Header -->
    <Header :class="bgTheme">
      <template slot="icon">
        <div
          v-if="shopAvatar"
          :style="`background-image: url('${shopAvatar}');`"
          class="block w-110 h-110 rounded-full bg-center bg-no-repeat bg-cover"/>
        <div
          v-else
          :class="textTheme">
          <font-awesome-icon
            :icon="['far', 'store']"
            class="block"/>
        </div>
      </template>
      <template slot="title">
        <h1 class="header-title">
          <template v-if="shopName">{{ shopName }}</template>
          <template v-else>{{ $t("pages.shop.title") }}</template>
        </h1>
      </template>
    </Header>

    <section class="container section">
      <div class="flex flex-col items-center">

        <!-- User owns a shop -->
        <template v-if="userHasShop">
          <h2 class="title-large text-center mt-100">{{ $t("pages.shop.title") }}</h2>
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
import { mapGetters, mapActions } from "vuex";

export default {
  middleware: ["authenticated"],
  head() {
    return {
      title: `${this.title} | ${this.$t("pages.shop.title")}`
    };
  },
  components: {
    Header
  },
  data() {
    return {
      currentShop: {}
    };
  },
  async asyncData({ app }) {
    let shop = await app.$axios.$get("/user/shop");

    return {
      currentShop: shop.data,
      title: app.head.title
    };
  },
  computed: {
    ...mapGetters({
      userHasShop: "userHasShop",
      shopTheme: "shop/shopTheme",
      shopName: "shop/shopName",
      shopAvatar: "shop/shopAvatar"
    }),
    bgTheme() {
      return `bg-${this.shopTheme}`;
    },
    textTheme() {
      return `text-${this.shopTheme}`;
    }
  },
  mounted() {
    if (this.currentShop) {
      this.setShop(this.currentShop);
    }
  },
  methods: {
    ...mapActions({
      setShop: "shop/setShop"
    })
  }
};
</script>
