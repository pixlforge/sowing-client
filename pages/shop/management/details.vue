<template>
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
</template>

<script>
import AppShopDetails from "@/components/shops/AppShopDetails";
import AppShopCustomization from "@/components/shops/AppShopCustomization";
import theming from "@/mixins/theming";
import { mapGetters, mapActions } from "vuex";

export default {
  middleware: ["authenticated"],
  head() {
    return {
      title: `${this.$t("pages.shop.title")} | ${this.title}`
    };
  },
  layout: "shop-management",
  components: {
    AppShopDetails,
    AppShopCustomization
  },
  mixins: [theming],
  data() {
    return {
      errors: {}
    };
  },
  async asyncData({ app, store }) {
    let shop = await app.$axios.$get("/user/shop");
    let countries = await app.$axios.$get("/countries");

    return {
      shopData: shop.data,
      countries: countries.data,
      title: app.head.title
    };
  },
  computed: {
    ...mapGetters({
      shopExists: "shop/shopExists"
    })
  },
  mounted() {
    if (!this.shopExists) {
      this.setShop(this.shopData);
    }
  },
  methods: {
    ...mapActions({
      setShop: "shop/setShop",
      updateShop: "shop/updateShop"
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
