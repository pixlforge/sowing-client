<template>
  <div>
    <AppResourceHeader>

      <!-- Page title -->
      <AppTitle
        semantic="h1"
        visual="h1"
      >
        {{ $t("pages.account.addresses.titles.index") }}
      </AppTitle>

      <!-- Add an address -->
      <AppAddButtonLink
        :route="{ name: 'account-addresses-create' }"
        :label="$t('buttons.add_address')"
        class="mt-60 md:mt-0"
      />
    </AppResourceHeader>

    <AppCard>

      <!-- Addresses -->
      <AppResourceList v-if="addresses.length">
        <AppAddressItem
          v-for="address in addresses"
          :key="address.id"
          :address="address"
        />
      </AppResourceList>

      <!-- No address found -->
      <div
        v-else
        class="text-center"
      >
        <AppParagraph class="text-center mb-60">
          {{ $t('pages.account.addresses.no_address_found') }}
        </AppParagraph>
        <AppButtonLinkPrimary
          :route="{ name: 'account-addresses-create' }"
          icon="plus-circle"
        >
          {{ $t('buttons.add_address') }}
        </AppButtonLinkPrimary>
      </div>
    </AppCard>

    <!-- Confirmation modal -->
    <AppConfirmationModal
      :title="$t('modals.addresses.delete.title')"
      :body="$t('modals.addresses.delete.body')"
      :button-label="$t('buttons.delete')"
      button-icon="trash-alt"
      icon="exclamation-circle"
      color="red"
      @confirm="destroy"
    />

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import AppCard from '@/components/AppCard'
import AppTitle from '@/components/AppTitle'
import AppParagraph from '@/components/paragraphs/AppParagraph'
import AppAddressItem from '@/components/addresses/AppAddressItem'
import AppAddButtonLink from '@/components/buttons/AppAddButtonLink'
import AppResourceList from '@/components/resources/AppResourceList'
import AppResourceHeader from '@/components/resources/AppResourceHeader'
import AppConfirmationModal from '@/components/modals/AppConfirmationModal'
import AppButtonLinkPrimary from '@/components/buttons/AppButtonLinkPrimary'

export default {
  components: {
    AppCard,
    AppTitle,
    AppParagraph,
    AppAddressItem,
    AppAddButtonLink,
    AppResourceList,
    AppResourceHeader,
    AppConfirmationModal,
    AppButtonLinkPrimary
  },
  middleware: ['authenticated'],
  layout: 'account-management',
  head() {
    return {
      title: `${this.$t('pages.account.addresses.titles.index')} | ${this.$t('pages.account.title')} | ${this.title}`,
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
  computed: {
    ...mapGetters({
      getResourceId: 'confirmation/getResourceId'
    })
  },
  async asyncData({ app }) {
    const addresses = await app.$axios.$get('/addresses')

    return {
      addresses: addresses.data,
      title: app.head.title
    }
  },
  methods: {
    ...mapActions({
      closeModal: 'confirmation/closeModal'
    }),
    async destroy() {
      try {
        await this.$axios.$delete(`/addresses/${this.getResourceId}`)
        await this.getAddresses()
        this.$toasted.success(this.$t('toasts.addresses.deleted'))
      } catch (e) {
        this.$toasted.error(this.$t('toasts.general_error'))
      }
      this.closeModal()
    },
    async getAddresses() {
      const res = await this.$axios.$get('/addresses')
      this.addresses = res.data
    }
  }
}
</script>
