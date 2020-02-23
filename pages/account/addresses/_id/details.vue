<template>
  <div>
    <header class="flex flex-col sm:flex-row justify-between">
      <div class="flex items-center">

        <!-- Back -->
        <ButtonBack
          :route="{ name: 'account-addresses' }"
          class="mr-20"
        />

        <!-- Page title -->
        <Heading
          tag="h1"
          visual="h2"
        >
          {{ $t('account.addresses.titles.show') }}
        </Heading>
      </div>

      <!-- Delete -->
      <ButtonDelete @click.native="openModal"/>
    </header>

    <Card>
      <AddressCard :address="address"/>
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

  </div>
</template>

<script>
import { mapActions } from 'vuex'

import AddressCard from '@/components/addresses/AddressCard'
import ButtonBack from '@/components/buttons/ButtonBack'
import ButtonDelete from '@/components/buttons/ButtonDelete'
import Card from '@/components/globals/Card'
import ConfirmationModal from '@/components/modals/ConfirmationModal'
import Heading from '@/components/globals/Heading'

export default {
  components: {
    AddressCard,
    ButtonBack,
    ButtonDelete,
    Card,
    ConfirmationModal,
    Heading
  },
  layout: 'account-management',
  middleware: ['authenticated'],
  head() {
    return {
      title: `${this.$t('account.addresses.titles.show')} | ${this.$t('account.title')}`,
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
