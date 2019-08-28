<template>
  <div>

    <!-- Page title -->
    <AppTitle
      semantic="h1"
      visual="h2"
    >
      {{ $t("pages.account.addresses.title") }}
    </AppTitle>

    <div class="flex flex-wrap -mx-10 mt-36">
      <AppAddress
        v-for="address in addresses"
        :key="address.id"
        :address="address"
      />
    </div>

  </div>
</template>

<script>
import AppTitle from '@/components/AppTitle'
import AppAddress from '@/components/addresses/AppAddress'

export default {
  components: {
    AppTitle,
    AppAddress
  },
  middleware: ['authenticated'],
  layout: 'account-management',
  head() {
    return {
      title: `${this.$t('pages.account.addresses.title')} | ${this.$t('pages.account.title')} | ${this.title}`,
      meta: [
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex'
        }
      ]
    }
  },
  data() {
    return {
      addresses: []
    }
  },
  async asyncData({ app }) {
    const addresses = await app.$axios.$get('/addresses')

    return {
      addresses: addresses.data,
      title: app.head.title
    }
  }
}
</script>
