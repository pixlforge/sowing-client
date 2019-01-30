<template>
  <section class="w-full">
    <div class="flex flex-col md:flex-row">
      <input
        id="name"
        v-model="localShopName"
        :disabled="shopExists && !editable"
        :class="{ 'input-disabled': shopExists && !editable }"
        :placeholder="$t('shop_creator.steps.name.placeholder')"
        name="name"
        type="text"
        class="input-base md:rounded-r-none mt-0">
      <button
        :disabled="(shopExists || !shopName) && !editable"
        :class="(shopExists || !shopName) && !editable ? 'btn-disabled' : btnTheme"
        class="btn btn-primary md:rounded-l-none nowrap mt-20 md:mt-0"
        @click.prevent="check">
        <font-awesome-icon
          :icon="['far', 'rocket']"
          class="mr-5"/>
        {{ $t("buttons.check_availability") }}
      </button>
    </div>
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
