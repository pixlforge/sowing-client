<template>
  <main>
    <section class="container section">
      <div class="flex flex-col items-center">
        <h2 class="title-large text-center mt-100">{{ $t("shop_creator.steps.name.title") }}</h2>

        <section class="max-w-1000">
          <p class="paragraph-body text-center my-60">{{ $t("shop_creator.steps.name.paragraph") }}</p>
        </section>

        <section class="w-full max-w-600">
          <div class="flex">
            <input
              id="name"
              v-model="localShopName"
              :disabled="shopExists"
              :class="{ 'input-disabled': shopExists }"
              :placeholder="$t('shop_creator.steps.name.placeholder')"
              name="name"
              type="text"
              class="input-base rounded-r-none mt-0">
            <button
              :disabled="shopExists"
              :class="{ 'btn-disabled': shopExists }"
              class="btn btn-primary rounded-l-none nowrap"
              @click.prevent="check">
              <font-awesome-icon
                :icon="['far', 'rocket']"
                class="mr-5"/>
              {{ $t("buttons.check_availability") }}
            </button>
          </div>
        </section>

        <div class="flex mt-100">

          <!-- Previous -->
          <button
            class="btn btn-default mr-20"
            @click.prevent="prev">
            <font-awesome-icon
              :icon="['far', 'chevron-circle-left']"
              class="mr-5"/>
            {{ $t("buttons.back") }}
          </button>

          <!-- Next -->
          <button
            class="btn btn-primary"
            @click.prevent="next">
            <font-awesome-icon
              :icon="['far', 'chevron-circle-right']"
              class="mr-5"/>
            {{ $t("buttons.to_my_shop_details") }}
          </button>

        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  layout: "shop-creator",
  transition: {
    name: "slide",
    mode: "out-in"
  },
  computed: {
    ...mapGetters({
      shopName: "shop/shopName",
      stepDetails: "shop/stepDetails",
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
  mounted() {
    if (!this.shopExists && this.$auth.user.has_shop) {
      this.getShop();
      this.setStepName(true);
      this.setStepDetails(true);
    }
  },
  methods: {
    ...mapActions({
      setShopName: "shop/setShopName",
      getShop: "shop/getShop",
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
        } catch (e) {
          this.$toast.error(
            `"<em>${this.shopName}</em>" ${this.$t(
              "toasts.is_already_in_use"
            )}.`
          );
        }
      }
    },
    prev() {
      this.$router.push(this.localePath({ name: "shop-creator-terms" }));
    },
    next() {
      this.$router.push(this.localePath({ name: "shop-creator-details" }));
    }
  }
};
</script>

