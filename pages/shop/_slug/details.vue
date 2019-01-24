<template>
  <main>
    
    <!-- Cover -->
    <Cover
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

    <section class="container section">
      <h2 class="title-large text-center mt-100">Bienvenue dans notre boutique!</h2>

      <section class="max-w-1000 px-20 mx-auto">
        <p class="paragraph-body text-center my-60">
          {{ shop.description_long[locale] }}
        </p>
      </section>
      
    </section>
    
  </main>
</template>

<script>
import Header from "@/components/Header";
import Cover from "@/components/shops/Cover";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Header,
    Cover
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
