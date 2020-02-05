<template>
  <main>

    <!-- Page contents -->
    <ContentSection>

      <Splash
        :title="$t('shop_creator.steps.done.title')"
        :subtitle="$t('shop_creator.steps.done.paragraph')"
        type="success"
        class="max-w-800"
      >
        <template slot="illustration">
          <IllustrationSuccess/>
        </template>
      </Splash>

      <!-- Controls -->
      <ShopCreatorControls>

        <!-- Previous -->
        <ButtonTertiary
          @click.native="prev"
          icon="chevron-circle-left"
          class="order-1 md:order-none mx-5"
        >
          {{ $t("buttons.back") }}
        </ButtonTertiary>

        <!-- Next -->
        <ButtonPrimary
          :color="shopTheme"
          @click.native="next"
          icon="chevron-circle-right"
          class="order-none md_order-1 mx-5"
        >
          {{ $t("buttons.finish") }}
        </ButtonPrimary>
      </ShopCreatorControls>
    </ContentSection>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import theming from '@/mixins/theming'

import Splash from '@/components/globals/Splash'
import ContentSection from '@/components/globals/ContentSection'
import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import ButtonTertiary from '@/components/buttons/ButtonTertiary'
import ShopCreatorControls from '@/components/shops/ShopCreatorControls'
import IllustrationSuccess from '@/components/illustrations/IllustrationSuccess'

export default {
  middleware: ['authenticated', 'hasShop'],
  head() {
    return {
      title: this.$t('shop_creator.steps.done.title'),
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
    Splash,
    ContentSection,
    ButtonPrimary,
    ButtonTertiary,
    ShopCreatorControls,
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
      this.$router.push({ name: 'shop-creator-connect' })
    },
    next() {
      if (
        this.stepName &&
        this.stepDetails &&
        this.stepCustomization &&
        this.stepConnect
      ) {
        this.$router.push({ name: 'shop-management-dashboard' })
      }
    }
  }
}
</script>
