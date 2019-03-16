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
          class="header__avatar header__avatar--picture"/>
        <div
          v-else
          :class="textTheme">
          <font-awesome-icon
            :icon="['far', 'store']"
            class="header__icon"/>
        </div>
      </template>
      <template slot="title">
        <h1 class="header__title">
          <template v-if="shopName">{{ shopName }}</template>
          <template v-else>{{ $t("pages.shop.title") }}</template>
        </h1>
      </template>
      <template
        v-if="shop.id"
        slot="description">
        <p class="header__description">
          {{ shop.description_short[locale] }}
        </p>

        <ul class="list__address list__address--white">
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

    <section class="section__container container">
      <div class="section__centered">

        <!-- User owns a shop -->
        <template v-if="userHasShop">
          <h2 class="title__main title--center">
            {{ $t("pages.shop.title") }}
          </h2>

          <div class="shop__columns-wrapper">
            <aside class="shop__menu">
              Menu
            </aside>

            <section class="shop__content">

              <!-- Shop details -->
              <h3 class="title__larger">
                Détails
              </h3>
              <div class="shop__section">
                <AppShopDetails
                  :countries="countries"
                  :errors="errors"
                  editable/>

                <div class="shop__controls">
                  <button
                    :class="btnTheme"
                    class="button button--spaced-larger"
                    @click.prevent="update">
                    <font-awesome-icon
                      :icon="['far', 'check']"
                      class="button__icon button__icon--small"/>
                    {{ $t("buttons.update") }}
                  </button>
                </div>
              </div>

              <!-- Shop Customization -->
              <h3 class="title__larger">
                Thème
              </h3>
              <div class="shop__section shop__section--last">
                <AppShopCustomization/>
              </div>

            </section>
          </div>
        </template>
        
        <!-- User does not own a shop -->
        <template v-else>
          <h2 class="title__main title--center">
            {{ $t("pages.shop.not_created_yet") }}
          </h2>

          <p class="paragraph__large paragraph--center">
            {{ $t("pages.shop.creation_cta_line_1") }}<br>
            {{ $t("pages.shop.creation_cta_line_2") }}
          </p>

          <div class="illustration__container">
            <img
              src="~assets/img/under_construction.svg"
              alt="Illustration of a building under construction"
              class="illustration__image">
          </div>

          <nuxt-link
            :to="localePath({ name: 'shop-creator-terms' })"
            class="button button__primary button--spaced-large">
            <font-awesome-icon
              :icon="['far', 'rocket']"
              class="button__icon button__icon--small"/>
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
