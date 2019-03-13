<template>
  <section class="shop-creator__section">
    <input
      id="name"
      v-model="localShopName"
      :disabled="shopExists && !editable"
      :class="{ 'form__input--disabled': shopExists && !editable }"
      :placeholder="$t('shop_creator.steps.name.placeholder')"
      name="name"
      type="text"
      class="form__input form__input--grouped">
    <button
      :disabled="(shopExists || !shopName) && !editable"
      :class="(shopExists || !shopName) && !editable ? 'button__disabled' : btnTheme"
      class="button button--grouped"
      @click.prevent="check">
      <font-awesome-icon
        :icon="['far', 'rocket']"
        class="mr-5"/>
      {{ $t("buttons.check_availability") }}
    </button>
  </section>
</template>

<script>
import theming from "@/mixins/theming";
import { mapGetters, mapActions } from "vuex";

export default {
  mixins: [theming],
  props: {
    editable: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    ...mapGetters({
      shopName: "shop/shopName",
      shopExists: "shop/shopExists"
    }),
    localShopName: {
      get() {
        return this.shopName;
      },
      set(name) {
        this.setShopName(name);
      }
    }
  },
  methods: {
    ...mapActions({
      flash: "alert/flash",
      close: "alert/close",
      setShopName: "shop/setShopName"
    }),
    async check() {
      try {
        let res = await this.$axios.$post("/shops/checker", {
          name: this.shopName
        });
        this.$toast.success(
          `"<em>${this.shopName}</em>" ${this.$t("toasts.is_available")}!`
        );
        this.flash({
          type: "success",
          message: `"<em>${this.shopName}</em>" ${this.$t(
            "toasts.is_available"
          )}!`
        });
      } catch (e) {
        this.$toast.error(
          `"<em>${this.shopName}</em>" ${this.$t("toasts.is_already_in_use")}.`
        );
        this.flash({
          type: "danger",
          message: `"<em>${this.shopName}</em>" ${this.$t(
            "toasts.is_already_in_use"
          )}!`
        });
      }
    }
  }
};
</script>
