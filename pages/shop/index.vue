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
          <template v-if="shopName">{{ shopName }}</template>
          <template v-else>{{ $t("pages.shop.title") }}</template>
        </h1>
      </template>
      <template
        v-if="shop.id"
        slot="description">
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
          <li
            v-if="shop.country"
            class="ml-20">
            {{ shop.country.name[locale] }}
          </li>
        </ul>
      </template>
    </Header>

    <section class="container section">
      <div class="flex flex-col items-center">

        <!-- User owns a shop -->
        <template v-if="userHasShop">
          <h2 class="title-large text-center mt-100">{{ $t("pages.shop.title") }}</h2>

          <div class="w-full flex justify-between mt-100">
            <aside class="w-1/5">
              Menu
            </aside>

            <section class="w-4/5">

              <!-- Shop details -->
              <h3 class="text-30 font-bold">Détails</h3>
              <div class="rounded-lg shadow-lg p-40 mt-40">
                <AppShopDetails
                  :countries="countries"
                  :errors="errors"
                  editable/>

                <div class="flex justify-end">
                  <button
                    :class="btnTheme"
                    class="btn mt-100"
                    @click.prevent="update">
                    <font-awesome-icon
                      :icon="['far', 'check']"
                      class="mr-5"/>
                    {{ $t("buttons.update") }}
                  </button>
                </div>
              </div>

              <!-- Shop Customization -->
              <h3 class="text-30 font-bold mt-100">Thème</h3>
              <div class="rounded-lg shadow-lg p-40 mt-40">
                <AppShopCustomization/>
              </div>

            </section>
          </div>
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
import AppShopCover from "@/components/shops/AppShopCover";
import AppShopDetails from "@/components/shops/AppShopDetails";
import AppShopCustomization from "@/components/shops/AppShopCustomization";
import theming from "@/mixins/theming";
import { mapGetters, mapActions } from "vuex";

export default {
  middleware: ["authenticated"],
  head() {
    return {
      title: `${this.title} | ${this.$t("pages.shop.title")}`
    };
  },
  components: {
    Header,
    AppShopCover,
    AppShopDetails,
    AppShopCustomization
  },
  mixins: [theming],
  data() {
    return {
      countries: [],
      errors: {}
    };
  },
  async asyncData({ app, store }) {
    let shop = await app.$axios.$get("/user/shop");
    let countries = await app.$axios.$get("/countries");

    if (shop.data) {
      store.dispatch("shop/setShop", shop.data);
    }

    return {
      countries: countries.data,
      title: app.head.title
    };
  },
  computed: {
    ...mapGetters({
      locale: "locale",
      userHasShop: "userHasShop",
      shop: "shop/shop",
      shopName: "shop/shopName",
      shopAvatar: "shop/shopAvatar",
      shopCover: "shop/shopCover"
    })
  },
  mounted() {
    if (this.currentShop) {
      this.setShop(this.currentShop);
    }
  },
  destroyed() {
    this.resetShop();
  },
  methods: {
    ...mapActions({
      setShop: "shop/setShop",
      updateShop: "shop/updateShop",
      resetShop: "shop/resetShop"
    }),
    async update() {
      try {
        let res = await this.updateShop();
        this.$toast.success("Votre boutique a été mise à jour avec succès!");
      } catch (e) {
        this.errors = e.response.data.errors;
        this.$toast.error(this.$t("toasts.validation"));
      }
    }
  }
};
</script>
