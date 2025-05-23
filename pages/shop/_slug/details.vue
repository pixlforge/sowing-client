<template>
  <main>
    <!-- Cover -->
    <ShopCover v-if="shopCover" :shop-cover="shopCover" />

    <!-- Header -->
    <Header
      :class="bgTheme"
      :title="shopName"
      :description="shop.description_short[locale]"
    >
      <HeaderList>
        <li>
          <font-awesome-icon :icon="['far', 'map-marker-alt']" class="mr-5" />
          {{ shop.postal_code }} {{ shop.city }}
        </li>
        <li class="ml-20">
          {{ shop.country.name[locale] }}
        </li>
      </HeaderList>
    </Header>

    <!-- About -->
    <ContentSection>
      <Heading tag="h1" visual="main">
        {{ $t('shop_details.welcome') }}
      </Heading>

      <!-- eslint-disable vue/no-v-html -->
      <p
        class="max-w-600 text-16 leading-loose text-center mx-auto my-36 md:my-72 mt-72 sm:mt-132"
        v-html="shop.description_long[locale]"
      />
      <!-- eslint-enable vue/no-v-html -->
    </ContentSection>

    <!-- Additional images -->
    <ContentSection>
      <div class="flex flex-wrap justify-center items-start -m-20">
        <div
          v-for="n in 10"
          :key="n"
          class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-20"
        >
          <img :src="imgUrl" :alt="imgAlt" class="rounded-lg shadow-xl" />
        </div>
      </div>
    </ContentSection>

    <!-- Shop articles -->
    <ContentSection>
      <Heading tag="h2" visual="main">
        {{ $t('shop_details.interested') }}
      </Heading>

      <div class="flex justify-center mt-72">
        <ButtonLinkPrimary
          :route="{ name: 'index' }"
          :color="shopTheme"
          icon="search"
          size="large"
          class="shadow-2xl"
        >
          {{ $t('button.see_all_articles') }}
        </ButtonLinkPrimary>
      </div>
    </ContentSection>

    <!-- Register CTA -->
    <StreakRegister />
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import theming from '@/mixins/theming'

import ButtonLinkPrimary from '@/components/buttons/ButtonLinkPrimary'
import ContentSection from '@/components/globals/ContentSection'
import Header from '@/components/headers/Header'
import HeaderList from '@/components/headers/HeaderList'
import Heading from '@/components/globals/Heading'
import ShopCover from '@/components/shops/ShopCover'
import StreakRegister from '@/components/streaks/StreakRegister'

export default {
  components: {
    ButtonLinkPrimary,
    ContentSection,
    Header,
    HeaderList,
    Heading,
    ShopCover,
    StreakRegister,
  },
  mixins: [theming],
  async asyncData({ app, route }) {
    const shop = await app.$axios.$get(`/shops/${route.params.slug}`)

    return {
      title: app.head.title,
      shop: shop.data,
    }
  },
  data() {
    return {
      shop: {},
    }
  },
  head() {
    return {
      title: `${this.shop.name} | ${this.title}`,
    }
  },
  computed: {
    ...mapGetters({
      locale: 'locale',
      shopAvatar: 'shop/shopAvatar',
      shopCover: 'shop/shopCover',
      shopName: 'shop/shopName',
    }),
    imgUrl() {
      return 'https://bulma.io/images/placeholders/1280x960.png'
    },
    imgAlt() {
      return this.$t('product.img.alt')
    },
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
      resetShop: 'shop/resetShop',
    }),
  },
}
</script>
