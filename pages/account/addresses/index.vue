<template>
  <div>
    <ResourceHeader>

      <!-- Page title -->
      <Heading
        tag="h1"
        visual="h1"
      >
        {{ $t("pages.account.addresses.titles.index") }}
      </Heading>

      <!-- Add an address -->
      <AppAddButtonLink
        :route="{ name: 'account-addresses-create' }"
        :label="$t('buttons.add_address')"
        class="mt-60 md:mt-0"
      />
    </ResourceHeader>

    <Card>

      <!-- Addresses -->
      <ResourceList v-if="addresses.length">
        <AppAddressItem
          v-for="address in addresses"
          :key="address.id"
          :address="address"
        />
      </ResourceList>

      <!-- No address found -->
      <div
        v-else
        class="text-center"
      >
        <Paragraph class="text-center mb-60">
          {{ $t('pages.account.addresses.no_address_found') }}
        </Paragraph>
        <AppButtonLinkPrimary
          :route="{ name: 'account-addresses-create' }"
          icon="plus-circle"
        >
          {{ $t('buttons.add_address') }}
        </AppButtonLinkPrimary>
      </div>
    </Card>

    <!-- Confirmation modal -->
    <ConfirmationModal
      :title="$t('modals.addresses.delete.title')"
      :body="$t('modals.addresses.delete.body')"
      :button-label="$t('buttons.delete')"
      @confirm="destroy"
      button-icon="trash-alt"
      icon="exclamation-circle"
      color="red"
    />

    </card></div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Card from '@/components/Card'
import Heading from '@/components/Heading'
import Paragraph from '@/components/paragraphs/Paragraph'
import AppAddressItem from '@/components/addresses/AppAddressItem'
import AppAddButtonLink from '@/components/buttons/AppAddButtonLink'
import ResourceList from '@/components/resources/ResourceList'
import ResourceHeader from '@/components/resources/ResourceHeader'
import ConfirmationModal from '@/components/modals/ConfirmationModal'
import AppButtonLinkPrimary from '@/components/buttons/AppButtonLinkPrimary'

export default {
  components: {
    Card,
    Heading,
    Paragraph,
    AppAddressItem,
    AppAddButtonLink,
    ResourceList,
    ResourceHeader,
    ConfirmationModal,
    AppButtonLinkPrimary
  },
  middleware: ['authenticated'],
  layout: 'account-management',
  head() {
    return {
      title: `${this.$t('pages.account.addresses.titles.index')} | ${this.$t('pages.account.title')}`,
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
      addresses: addresses.data
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
