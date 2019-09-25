<template>
  <div>
    <div class="flex justify-between items-baseline">

      <!-- Page title -->
      <AppTitle
        semantic="h1"
        visual="h2"
      >
        {{ $t("pages.account.addresses.title") }}
      </AppTitle>

      <!-- Add an address -->
      <AppAddButtonLink
        :to="localePath({ name: 'account-addresses-create' })"
        :label="$t('buttons.add_address')"
      />
    </div>

    <div class="flex flex-wrap -mx-10 my-72 md:my-96">
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
import AppAddButtonLink from '@/components/buttons/AppAddButtonLink'

export default {
  components: {
    AppTitle,
    AppAddress,
    AppAddButtonLink
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
