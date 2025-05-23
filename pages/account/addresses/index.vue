<template>
  <div>
    <ResourceHeader>
      <!-- Page title -->
      <Heading tag="h1" visual="h1">
        {{ $t('account.addresses.titles.index') }}
      </Heading>

      <!-- Add an address -->
      <ButtonLinkAdd
        :route="{ name: 'account-addresses-create' }"
        :label="$t('button.add_address')"
        class="mt-60 md:mt-0"
      />
    </ResourceHeader>

    <Card>
      <!-- Addresses -->
      <ResourceList v-if="addresses.length">
        <AddressItem
          v-for="address in addresses"
          :key="address.id"
          :address="address"
        />
      </ResourceList>

      <!-- No address found -->
      <div v-else class="text-center">
        <Paragraph class="text-center mb-60">
          {{ $t('account.addresses.no_address_found') }}
        </Paragraph>
        <ButtonLinkPrimary
          :route="{ name: 'account-addresses-create' }"
          icon="plus-circle"
        >
          {{ $t('button.add_address') }}
        </ButtonLinkPrimary>
      </div>
    </Card>

    <!-- Confirmation modal -->
    <ConfirmationModal
      :title="$t('modals.addresses.delete.title')"
      :body="$t('modals.addresses.delete.body')"
      :button-label="$t('button.delete')"
      button-icon="trash-alt"
      icon="exclamation-circle"
      color="red"
      @confirm="destroy"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import AddressItem from '@/components/addresses/AddressItem'
import ButtonLinkAdd from '@/components/buttons/ButtonLinkAdd'
import ButtonLinkPrimary from '@/components/buttons/ButtonLinkPrimary'
import Card from '@/components/globals/Card'
import ConfirmationModal from '@/components/modals/ConfirmationModal'
import Heading from '@/components/globals/Heading'
import Paragraph from '@/components/paragraphs/Paragraph'
import ResourceHeader from '@/components/resources/ResourceHeader'
import ResourceList from '@/components/resources/ResourceList'

export default {
  components: {
    AddressItem,
    ButtonLinkAdd,
    ButtonLinkPrimary,
    Card,
    ConfirmationModal,
    Heading,
    Paragraph,
    ResourceHeader,
    ResourceList,
  },
  layout: 'account-management',
  middleware: ['authenticated'],
  async asyncData({ app }) {
    const addresses = await app.$axios.$get('/addresses')

    return {
      addresses: addresses.data,
    }
  },
  data() {
    return {
      addresses: [],
    }
  },
  head() {
    return {
      title: `${this.$t('account.addresses.titles.index')} | ${this.$t(
        'account.title'
      )}`,
      meta: [
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
      getResourceId: 'confirmation/getResourceId',
    }),
  },
  methods: {
    ...mapActions({
      closeModal: 'confirmation/closeModal',
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
    },
  },
}
</script>
