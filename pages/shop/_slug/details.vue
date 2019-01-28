<template>
  <main>
    
    <!-- Cover -->
    <AppShopCover
      v-if="shopCover"
      :shop-cover="shopCover"/>

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
          {{ shopName }}
        </h1>
      </template>
      <template slot="description">
        <p class="header-description">
          {{ shop.description_short[locale] }}
        </p>

        <ul class="list-reset text-14 text-white leading-normal mt-15">
          <li>
            <font-awesome-icon
              :icon="['far', 'map-marker-alt']"
              class="mr-5"/>
            {{ shop.postal_code }} {{ shop.city }}
          </li>
          <li class="ml-20">
            {{ shop.country.name[locale] }}
          </li>
        </ul>
      </template>
    </Header>

    <!-- Content -->
    <section class="container section">
      <h2 class="title-large text-center mt-150">{{ $t("pages.shop_details.welcome") }}</h2>

      <section class="max-w-1000 px-20 mx-auto">
        <p
          class="paragraph-body text-center my-60"
          v-html="shop.description_long[locale]"/>
      </section>
    </section>

    <section class="container section">
      <div class="flex flex-wrap justify-center items-start -m-20">
        <div
          v-for="n in 10"
          :key="n"
          class="w-full sm:w-1/2 lg:w-1/3 xxl:w-1/4 p-20">  
          <img
            :src="imgUrl"
            :alt="imgAlt"
            class="rounded-lg">
        </div>
      </div>
    </section>

    <section class="container section">
      <h2 class="title-large text-center mt-150">{{ $t("pages.shop_details.interested") }}</h2>

      <div class="flex justify-center mt-80">
        <a
          :class="btnTheme"
          class="btn btn-large">
          <font-awesome-icon
            :icon="['far', 'search']"
            class="mr-10"/>
          {{ $t("buttons.see_all_articles") }}
        </a>
      </div>
    </section>

    <!-- Register CTA -->
    <section>
      <StreakRegister/>
    </section>

  </main>
</template>

<script>
import Header from "@/components/Header";
import AppShopCover from "@/components/shops/AppShopCover";
import StreakRegister from "@/components/streaks/StreakRegister";
import { mapGetters, mapActions } from "vuex";

export default {
  head() {
    return {
      title: `${this.title} | ${this.shop.name}`
    };
  },
  components: {
    Header,
    AppShopCover,
    StreakRegister
  },
  data() {
    return {
      shop: {}
    };
  },
  async asyncData({ app, route }) {
    let shop = await app.$axios.$get(`/shops/${route.params.slug}`);

    return {
      title: app.head.title,
      shop: shop.data
    };
  },
  computed: {
    ...mapGetters({
      locale: "locale",
      shopAvatar: "shop/shopAvatar",
      shopCover: "shop/shopCover",
      shopTheme: "shop/shopTheme",
      shopName: "shop/shopName"
    }),
    bgTheme() {
      return `bg-${this.shopTheme}`;
    },
    textTheme() {
      return `text-${this.shopTheme}`;
    },
    btnTheme() {
      return `btn-${this.shopTheme}`;
    },
    imgUrl() {
      return `https://bulma.io/images/placeholders/1280x960.png`;
    },
    imgAlt() {
      return this.$t("components.products.img.alt");
    }
  },
  mounted() {
    this.setShop(this.shop);
  },
  destroyed() {
    this.resetShop();
  },
  methods: {
    ...mapActions({
      setShop: "shop/setShop",
      resetShop: "shop/resetShop"
    })
  }
};
</script>
