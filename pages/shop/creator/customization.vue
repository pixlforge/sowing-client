<template>
  <main>
    <section class="section__container container">
      <div class="section__centered">
        <h2 class="title__main title--center">
          {{ $t("shop_creator.steps.customization.title") }}
        </h2>

        <p class="paragraph__medium paragraph--center paragraph--narrow paragraph--spaced">
          {{ $t("shop_creator.steps.customization.paragraph") }}
        </p>

        <!-- Shop customization -->
        <AppShopCustomization
          v-if="shop.id"
          class="shop-creator__customization-component"/>

        <div class="shop-creator__controls">

          <!-- Previous -->
          <button
            class="button button__previous"
            @click.prevent="prev">
            <font-awesome-icon
              :icon="['far', 'chevron-circle-left']"
              class="button__icon button__icon--small"/>
            {{ $t("buttons.back") }}
          </button>

          <!-- Next -->
          <button
            :class="btnTheme"
            class="button button__next"
            @click.prevent="next">
            <font-awesome-icon
              :icon="['far', 'chevron-circle-right']"
              class="button__icon button__icon--small"/>
            {{ $t("buttons.next") }}
          </button>
        </div>

      </div>
    </section>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import theming from '@/mixins/theming';

import AppShopCustomization from '@/components/shops/AppShopCustomization';

export default {
  middleware: ['authenticated', 'hasShop'],
  head() {
    return {
      title: `${this.$t('shop_creator.steps.customization.title')} | ${this.title}`
    };
  },
  layout: 'shop-creator',
  transition: {
    name: 'slide',
    mode: 'out-in'
  },
  components: {
    AppShopCustomization
  },
  mixins: [theming],
  computed: {
    ...mapGetters({
      shop: 'shop/shop',
      stepName: 'shop/stepName',
      shopExists: 'shop/shopExists',
      stepDetails: 'shop/stepDetails'
    })
  },
  asyncData({ app }) {
    return {
      title: app.head.title
    };
  },
  mounted() {
    if (!this.shopExists && this.$auth.user.has_shop) {
      this.getShop();
    }

    this.setStepName(true);
    this.setStepDetails(true);
  },
  methods: {
    ...mapActions({
      getShop: 'shop/getShop',
      setStepName: 'shop/setStepName',
      setStepDetails: 'shop/setStepDetails'
    }),
    prev() {
      this.$router.push(this.localePath({ name: 'shop-creator-details' }));
    },
    next() {
      if (this.stepName && this.stepDetails) {
        this.$router.push(this.localePath({ name: 'shop-creator-connect' }));
      }
    }
  }
};
</script>
