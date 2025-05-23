<template>
  <main>
    <!-- Page contents -->
    <ContentSection>
      <!-- Title -->
      <Heading tag="h1" visual="main">
        {{ $t('shop_creator.steps.name.title') }}
      </Heading>

      <!-- Infos -->
      <Paragraph class="max-w-800" center>
        {{ $t('shop_creator.steps.name.paragraph') }}
      </Paragraph>

      <!-- Shop name -->
      <ShopFeatureContainer class="max-w-600">
        <ShopName />
      </ShopFeatureContainer>

      <!-- Controls -->
      <ShopCreatorControls>
        <!-- Previous -->
        <ButtonTertiary
          icon="chevron-circle-left"
          class="order-1 md:order-none mx-5"
          @click.native="prev"
        >
          {{ $t('button.back') }}
        </ButtonTertiary>

        <!-- Next -->
        <ButtonPrimary
          :disabled="!basicInfosProvided"
          :color="basicInfosProvided ? shopTheme : ''"
          icon="chevron-circle-right"
          class="order-none md_order-1 mx-5"
          @click.native="next"
        >
          {{ $t('button.next') }}
        </ButtonPrimary>
      </ShopCreatorControls>
    </ContentSection>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import theming from '@/mixins/theming'

import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import ButtonTertiary from '@/components/buttons/ButtonTertiary'
import ContentSection from '@/components/globals/ContentSection'
import Heading from '@/components/globals/Heading'
import Paragraph from '@/components/paragraphs/Paragraph'
import ShopCreatorControls from '@/components/shops/ShopCreatorControls'
import ShopFeatureContainer from '@/components/shops/ShopFeatureContainer'
import ShopName from '@/components/shops/ShopName'

export default {
  components: {
    ButtonPrimary,
    ButtonTertiary,
    ContentSection,
    Heading,
    Paragraph,
    ShopCreatorControls,
    ShopFeatureContainer,
    ShopName,
  },
  mixins: [theming],
  layout: 'shop-creator',
  middleware: ['authenticated'],
  transition: {
    name: 'slide',
    mode: 'out-in',
  },
  async asyncData({ app, store }) {
    const shop = await app.$axios.$get('/user/shop')

    if (shop.data) {
      store.dispatch('shop/setShop', shop.data)
    }
  },
  head() {
    return {
      title: this.$t('shop_creator.steps.name.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '',
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex',
        },
      ],
    }
  },
  computed: {
    ...mapGetters({
      terms: 'shop/terms',
      shopName: 'shop/shopName',
      shopExists: 'shop/shopExists',
      stepDetails: 'shop/stepDetails',
    }),
    basicInfosProvided() {
      return this.shopName
    },
  },
  mounted() {
    if (!this.terms) {
      return this.$router.push('shop-creator-terms')
    }

    if (this.$auth.user.has_shop) {
      this.setStepName(true)
      this.setStepDetails(true)
    }
  },
  methods: {
    ...mapActions({
      flash: 'alert/flash',
      close: 'alert/close',
      setShop: 'shop/setShop',
      setStepName: 'shop/setStepName',
      setStepDetails: 'shop/setStepDetails',
    }),
    prev() {
      this.$router.push({ name: 'shop-creator-terms' })
    },
    async next() {
      if (this.shopExists) {
        this.$router.push({ name: 'shop-creator-details' })
        return
      }

      try {
        await this.$axios.$post('/shops/checker', {
          name: this.shopName,
        })
        this.close()
        this.$router.push({ name: 'shop-creator-details' })
      } catch (e) {
        this.setStepName(false)
        this.$toast.error(
          `"<em>${this.shopName}</em>" ${this.$t('toasts.is_already_in_use')}.`
        )
        this.flash({
          type: 'danger',
          message: `"<em>${this.shopName}</em>" ${this.$t(
            'toasts.is_already_in_use'
          )}!`,
        })
      }
    },
  },
}
</script>
