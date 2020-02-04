<template>
  <div>
    <header class="flex flex-col sm:flex-row justify-between">
      <div class="flex items-center">

        <!-- Back -->
        <AppBackButton
          :route="{ name: 'account-addresses' }"
          class="mr-20"
        />

        <!-- Page title -->
        <Heading
          tag="h1"
          visual="h2"
        >
          {{ $t('pages.account.addresses.titles.show') }}
        </Heading>
      </div>

      <!-- Delete -->
      <AppDeleteButton @click.native="openModal"/>
    </header>

    <Card>
      <AppAddressCard :address="address"/>
    </Card>

    <!-- Confirmation modal -->
    <AppConfirmationModal
      :title="$t('modals.addresses.delete.title')"
      :body="$t('modals.addresses.delete.body')"
      :button-label="$t('buttons.delete')"
      @confirm="destroy"
      button-icon="trash-alt"
      icon="exclamation-circle"
      color="red"
    />

  </div>
</template>

<script>
import { mapActions } from 'vuex'

import Card from '@/components/Card'
import Heading from '@/components/Heading'
import AppBackButton from '@/components/buttons/AppBackButton'
import AppDeleteButton from '@/components/buttons/AppDeleteButton'
import AppAddressCard from '@/components/addresses/AppAddressCard'
import AppConfirmationModal from '@/components/modals/AppConfirmationModal'

export default {
  components: {
    Card,
    Heading,
    AppBackButton,
    AppDeleteButton,
    AppAddressCard,
    AppConfirmationModal
  },
  layout: 'account-management',
  middleware: ['authenticated'],
  head() {
    return {
      title: `${this.$t('pages.account.addresses.titles.show')} | ${this.$t('pages.account.title')}`,
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
      address: {},
      errors: {}
    }
  },
  async asyncData({ app, params }) {
    const res = await app.$axios.$get(`/addresses/${params.id}`)

    return {
      address: res.data
    }
  },
  methods: {
    ...mapActions({
      openModal: 'confirmation/openModal',
      closeModal: 'confirmation/closeModal'
    }),
    async destroy() {
      try {
        await this.$axios.$delete(`/addresses/${this.address.id}`)
        this.$toast.success(this.$t('toasts.addresses.deleted'))
        this.$router.push({ name: 'account-addresses' })
      } catch (e) {
        this.$toast.error(this.$t('toasts.general_error'))
      }
      this.closeModal()
    }
  }
}
</script>
