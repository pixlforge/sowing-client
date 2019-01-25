<template>
  <main>
    <section class="container section">
      <div class="flex flex-col items-center">
        <h2 class="title-large text-center mt-150">{{ $t("shop_creator.steps.name.title") }}</h2>

        <section class="max-w-1000 px-20">
          <p class="paragraph-body text-center my-60">{{ $t("shop_creator.steps.name.paragraph") }}</p>
        </section>

        <section class="w-full max-w-400 md:max-w-600">
          <div class="flex flex-col md:flex-row">
            <input
              id="name"
              v-model="localShopName"
              :disabled="shopExists"
              :class="{ 'input-disabled': shopExists }"
              :placeholder="$t('shop_creator.steps.name.placeholder')"
              name="name"
              type="text"
              class="input-base md:rounded-r-none mt-0">
            <button
              :disabled="shopExists"
              :class="shopExists ? 'btn-disabled' : btnTheme"
              class="btn btn-primary md:rounded-l-none nowrap mt-20 md:mt-0"
              @click.prevent="check">
              <font-awesome-icon
                :icon="['far', 'rocket']"
                class="mr-5"/>
              {{ $t("buttons.check_availability") }}
            </button>
          </div>
        </section>

        <div class="flex flex-col md:flex-row mt-100">

          <!-- Previous -->
          <button
            class="btn order-1 md:order-0 md:mr-20 mt-20 md:mt-0"
            @click.prevent="prev">
            <font-awesome-icon
              :icon="['far', 'chevron-circle-left']"
              class="mr-5"/>
            {{ $t("buttons.back") }}
          </button>

          <!-- Next -->
          <button
            :disabled="!shopName"
            :class="shopName ? btnTheme : 'btn-disabled'"
            class="btn order-0 md:order-1"
            @click.prevent="next">
            <font-awesome-icon
              :icon="['far', 'chevron-circle-right']"
              class="mr-5"/>
            {{ $t("buttons.next") }}
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  middleware: ["authenticated"],
  head() {
    return {
      title: `${this.title} | ${this.$t("shop_creator.steps.name.title")}`
    };
  },
  layout: "shop-creator",
  transition: {
    name: "slide",
    mode: "out-in"
  },
  computed: {
    ...mapGetters({
      shopName: "shop/shopName",
      shopTheme: "shop/shopTheme",
      shopExists: "shop/shopExists",
      stepDetails: "shop/stepDetails"
    }),
    btnTheme() {
      return `btn-${this.shopTheme}`;
    },
    localShopName: {
      get() {
        return this.shopName;
      },
      set(name) {
        this.setShopName(name);
      }
    }
  },
  async asyncData({ app }) {
    return {
      title: app.head.title
    };
  },
  mounted() {
    if (!this.shopExists && this.$auth.user.has_shop) {
      this.getShop();
      this.setStepName(true);
      this.setStepDetails(true);
    }
  },
  methods: {
    ...mapActions({
      flash: "alert/flash",
      close: "alert/close",
      setShop: "shop/setShop",
      getShop: "shop/getShop",
      setShopName: "shop/setShopName",
      setStepName: "shop/setStepName",
      setStepDetails: "shop/setStepDetails"
    }),
    async check() {
      if (this.shopName) {
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
            `"<em>${this.shopName}</em>" ${this.$t(
              "toasts.is_already_in_use"
            )}.`
          );
          this.flash({
            type: "danger",
            message: `"<em>${this.shopName}</em>" ${this.$t(
              "toasts.is_already_in_use"
            )}!`
          });
        }
      }
    },
    prev() {
      this.$router.push(this.localePath({ name: "shop-creator-terms" }));
    },
    async next() {
      if (this.shopExists) {
        this.$router.push(this.localePath({ name: "shop-creator-details" }));
        return;
      }
      try {
        await this.$axios.$post("/shops/checker", {
          name: this.shopName
        });
        this.close();
        this.$router.push(this.localePath({ name: "shop-creator-details" }));
      } catch (e) {
        this.setStepName(false);
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
