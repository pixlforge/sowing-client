<template>
  <main>

    <!-- Cover -->
    <ShopCover
      v-if="shopCover"
      :shop-cover="shopCover"
    />

    <!-- Header -->
    <AppHeader
      :class="bgTheme"
      :title="shopName"
      :description="shop.description_short[locale]"
    >
      <AppHeaderList>
        <li>
          <font-awesome-icon
            :icon="['far', 'map-marker-alt']"
            class="mr-5"
          />
          {{ shop.postal_code }} {{ shop.city }}
        </li>
        <li class="ml-20">
          {{ shop.country.name[locale] }}
        </li>
      </AppHeaderList>
    </AppHeader>

    <!-- About -->
    <ContentSection>
      <Heading
        tag="h1"
        visual="main"
      >
        {{ $t("pages.shop_details.welcome") }}
      </Heading>

      <p
        v-html="shop.description_long[locale]"
        class="max-w-600 text-16 leading-loose text-center mx-auto my-36 md:my-72 mt-72 sm:mt-132"
      />
    </ContentSection>

    <!-- Additional images -->
    <ContentSection>
      <div class="flex flex-wrap justify-center items-start -m-20">
        <div
          v-for="n in 10"
          :key="n"
          class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-20"
        >
          <img
            :src="imgUrl"
            :alt="imgAlt"
            class="rounded-lg shadow-xl"
          >
        </div>
      </div>
    </ContentSection>

    <!-- Shop articles -->
    <ContentSection>
      <Heading
        tag="h2"
        visual="main"
      >
        {{ $t("pages.shop_details.interested") }}
      </Heading>

      <div class="flex justify-center mt-72">
        <AppButtonLinkPrimary
          :route="{ name: 'index' }"
          :color="shopTheme"
          icon="search"
          size="large"
          class="shadow-2xl"
        >
          {{ $t("buttons.see_all_articles") }}
        </AppButtonLinkPrimary>
      </div>
    </ContentSection>

    <!-- Register CTA -->
    <StreakRegister/>

  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import theming from '@/mixins/theming'

import Heading from '@/components/Heading'
import AppHeader from '@/components/headers/AppHeader'
import ShopCover from '@/components/shops/ShopCover'
import ContentSection from '@/components/ContentSection'
import AppHeaderList from '@/components/headers/AppHeaderList'
import StreakRegister from '@/components/streaks/StreakRegister'
import AppButtonLinkPrimary from '@/components/buttons/AppButtonLinkPrimary'

export default {
  head() {
    return {
      title: `${this.shop.name} | ${this.title}`
    }
  },
  components: {
    Heading,
    AppHeader,
    ShopCover,
    ContentSection,
    AppHeaderList,
    StreakRegister,
    AppButtonLinkPrimary
  },
  mixins: [theming],
  data() {
    return {
      shop: {}
    }
  },
  computed: {
    ...mapGetters({
      locale: 'locale',
      shopAvatar: 'shop/shopAvatar',
      shopCover: 'shop/shopCover',
      shopName: 'shop/shopName'
    }),
    imgUrl() {
      return 'https://bulma.io/images/placeholders/1280x960.png'
    },
    imgAlt() {
      return this.$t('products.img.alt')
    }
  },
  async asyncData({ app, route }) {
    const shop = await app.$axios.$get(`/shops/${route.params.slug}`)

    return {
      title: app.head.title,
      shop: shop.data
    }
  },
  mounted() {
    this.setShop(this.shop)
  },
  destroyed() {
    this.resetShop()
  },
  methods: {
    ...mapActions({
      setShop: 'shop/setShop',
      resetShop: 'shop/resetShop'
    })
  }
}
</script>
