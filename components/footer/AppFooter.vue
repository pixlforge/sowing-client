<template>
  <footer class="bg-green-100">
    <div class="container flex flex-wrap pb-96">

      <!-- Categories -->
      <AppFooterColumn :title="$t('footer.titles.categories')">
        <AppFooterItem
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
      </AppFooterColumn>

      <!-- Selling -->
      <AppFooterColumn :title="$t('footer.titles.sell_on_sowing')">
        <AppFooterItem
          :to="{ name: 'index' }"
          :label="$t('footer.links.login')"
        />
        <AppFooterItem
          :to="{ name: 'index' }"
          :label="$t('footer.links.your_own_store')"
        />
        <AppFooterItem
          :to="{ name: 'index' }"
          :label="$t('footer.links.new_vendors')"
        />
      </AppFooterColumn>

      <!-- About -->
      <AppFooterColumn :title="$t('footer.titles.about')">
        <AppFooterItem
          :to="{ name: 'index' }"
          :label="$t('footer.links.terms')"
        />
        <AppFooterItem
          :to="{ name: 'index' }"
          :label="$t('footer.links.payments')"
        />
        <AppFooterItem
          :to="{ name: 'index' }"
          :label="$t('footer.links.shipments')"
        />
        <AppFooterItem
          :to="{ name: 'faq' }"
          :label="$t('footer.links.faq')"
        />
      </AppFooterColumn>

      <!-- Languages -->
      <AppFooterColumn :title="$t('footer.titles.language')">
        <AppFooterItem
          v-for="locale in availableLocales"
          :key="locale.code"
          :label="locale.name"
          @click.native="setLocale(locale)"
        />
      </AppFooterColumn>

      <!-- Social Networks -->
      <AppFooterColumn :title="$t('footer.titles.social_networks')">
        <AppFooterItemSocial
          url="https://www.facebook.com/Sowingch-1065130827008521/"
          icon="facebook"
          label="Facebook"
        />
        <AppFooterItemSocial
          url="https://www.instagram.com/sowing.ch/"
          icon="instagram"
          label="Instagram"
        />
      </AppFooterColumn>

    </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'
import theming from '@/mixins/theming'

import AppFooterItem from '@/components/footer/AppFooterItem'
import AppFooterColumn from '@/components/footer/AppFooterColumn'
import AppFooterItemSocial from '@/components/footer/AppFooterItemSocial'

export default {
  components: {
    AppFooterItem,
    AppFooterColumn,
    AppFooterItemSocial
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
