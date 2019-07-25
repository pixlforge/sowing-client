<template>
  <main>

    <!-- Page contents -->
    <AppContentSection>

      <AppSplash
        type="success"
        :title="$t('shop_creator.steps.done.title')"
        :subtitle="$t('shop_creator.steps.done.paragraph')"
        class="max-w-800">
        <template slot="illustration">
          <IllustrationSuccess/>
        </template>
      </AppSplash>

      <!-- Controls -->
      <AppShopCreatorControls>

        <!-- Previous -->
        <AppButtonTertiary
          icon="chevron-circle-left"
          class="order-1 md:order-none mx-5"
          @click.native="prev">
          {{ $t("buttons.back") }}
        </AppButtonTertiary>

        <!-- Next -->
        <AppButtonPrimary
          :color="shopTheme"
          icon="chevron-circle-right"
          class="order-none md_order-1 mx-5"
          @click.native="next">
          {{ $t("buttons.finish") }}
        </AppButtonPrimary>
      </AppShopCreatorControls>
    </AppContentSection>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import theming from '@/mixins/theming'

import AppSplash from '@/components/AppSplash'
import AppContentSection from '@/components/AppContentSection'
import AppButtonPrimary from '@/components/buttons/AppButtonPrimary'
import AppButtonTertiary from '@/components/buttons/AppButtonTertiary'
import AppShopCreatorControls from '@/components/shops/AppShopCreatorControls'
import IllustrationSuccess from '@/components/illustrations/IllustrationSuccess'

export default {
  middleware: ['authenticated', 'hasShop'],
  head() {
    return {
      title: `${this.$t('shop_creator.steps.done.title')} | ${this.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex'
        }
      ]
    }
  },
  layout: 'shop-creator',
  transition: {
    name: 'slide',
    mode: 'out-in'
  },
  components: {
    AppSplash,
    AppContentSection,
    AppButtonPrimary,
    AppButtonTertiary,
    AppShopCreatorControls,
    IllustrationSuccess
  },
  mixins: [theming],
  computed: {
    ...mapGetters({
      stepName: 'shop/stepName',
      shopExists: 'shop/shopExists',
      stepDetails: 'shop/stepDetails',
      stepCustomization: 'shop/stepCustomization',
      stepConnect: 'shop/stepConnect'
    })
  },
  asyncData({ app }) {
    return {
      title: app.head.title
    }
  },
  mounted() {
    if (!this.shopExists && this.$auth.user.has_shop) {
      this.getUserShop()
    }

    this.setStepName(true)
    this.setStepDetails(true)
    this.setStepCustomization(true)
    this.setStepConnect(true)
  },
  methods: {
    ...mapActions({
      getUserShop: 'shop/getUserShop',
      setStepName: 'shop/setStepName',
      setStepDetails: 'shop/setStepDetails',
      setStepCustomization: 'shop/setStepCustomization',
      setStepConnect: 'shop/setStepConnect'
    }),
    prev() {
      this.$router.push(this.localePath({ name: 'shop-creator-connect' }))
    },
    next() {
      if (
        this.stepName &&
        this.stepDetails &&
        this.stepCustomization &&
        this.stepConnect
      ) {
        this.$router.push(this.localePath({ name: 'shop-management-dashboard' }))
      }
    }
  }
}
</script>
