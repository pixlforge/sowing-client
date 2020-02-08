<template>
  <footer class="bg-white">
    <div class="container flex flex-wrap pb-96">

      <!-- Categories -->
      <FooterColumn :title="$t('footer.titles.categories')">
        <FooterItem
          v-for="category in categories"
          :key="category.slug"
          :to="{
            name: 'categories-slug',
            params: {
              slug: category.slug
            }
          }"
          :label="category.name[locale]"
        />
      </FooterColumn>

      <!-- Selling -->
      <FooterColumn :title="$t('footer.titles.sell_on_sowing')">
        <FooterItem
          :to="{ name: 'auth-login' }"
          :label="$t('footer.links.login')"
        />
        <FooterItem
          :to="{ name: 'auth-register' }"
          :label="$t('footer.links.your_own_store')"
        />
        <FooterItem
          :to="{ name: 'advice-to-creators' }"
          :label="$t('footer.links.advice_to_creators')"
        />
        <FooterItem
          :to="{ name: 'index' }"
          :label="$t('footer.links.new_vendors')"
        />
      </FooterColumn>

      <!-- About -->
      <FooterColumn :title="$t('footer.titles.about')">
        <FooterItem
          :to="{ name: 'index' }"
          :label="$t('footer.links.terms')"
        />
        <FooterItem
          :to="{ name: 'index' }"
          :label="$t('footer.links.payments')"
        />
        <FooterItem
          :to="{ name: 'index' }"
          :label="$t('footer.links.shipments')"
        />
        <FooterItem
          :to="{ name: 'faq' }"
          :label="$t('footer.links.faq')"
        />
      </FooterColumn>

      <!-- Languages -->
      <FooterColumn :title="$t('footer.titles.language')">
        <FooterItem
          v-for="locale in availableLocales"
          :key="locale.code"
          :label="locale.name"
          @click.native="setLocale(locale)"
        />
      </FooterColumn>

      <!-- Social Networks -->
      <FooterColumn :title="$t('footer.titles.social_networks')">
        <FooterItemSocial
          url="https://www.facebook.com/Sowingch-1065130827008521/"
          icon="facebook"
          label="Facebook"
        />
        <FooterItemSocial
          url="https://www.instagram.com/sowing.ch/"
          icon="instagram"
          label="Instagram"
        />
      </FooterColumn>

    </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'
import theming from '@/mixins/theming'

import FooterItem from '@/components/footer/FooterItem'
import FooterColumn from '@/components/footer/FooterColumn'
import FooterItemSocial from '@/components/footer/FooterItemSocial'

export default {
  components: {
    FooterItem,
    FooterColumn,
    FooterItemSocial
  },
  mixins: [theming],
  computed: {
    ...mapGetters({
      locale: 'locale',
      categories: 'categories'
    }),
    availableLocales() {
      return this.$i18n.locales
    }
  },
  methods: {
    setLocale(locale) {
      this.$i18n.setLocale(locale.code)
    }
  }
}
</script>
