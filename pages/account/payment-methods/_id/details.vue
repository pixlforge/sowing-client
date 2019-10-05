<template>
  <div>
    <header class="flex justify-between">
      <div class="flex items-center">

        <!-- Back -->
        <AppBackButton
          :route="{ name: 'account-payment-methods' }"
          class="mr-20"
        />

        <!-- Page title -->
        <div>
          <AppTitle
            semantic="h1"
            visual="h1"
          >
            {{ paymentMethod.card_type }}
            <span class="text-14 lowercase text-gray-300 font-normal">
              ({{ $t('credit_cards.ending_in') }} {{ paymentMethod.last_four }})
            </span>
          </AppTitle>
        </div>
      </div>

      <!-- Delete -->
      <AppDeleteButton @click.native="openModal"/>
    </header>

    <!-- Confirmation modal -->
    <AppConfirmationModal
      :title="$t('modals.payment_methods.delete.title')"
      :body="$t('modals.payment_methods.delete.body')"
      :button-label="$t('buttons.delete')"
      button-icon="trash-alt"
      icon="exclamation-circle"
      color="red"
      @confirm="destroy"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import AppTitle from '@/components/AppTitle'
import AppBackButton from '@/components/buttons/AppBackButton'
import AppDeleteButton from '@/components/buttons/AppDeleteButton'
import AppConfirmationModal from '@/components/modals/AppConfirmationModal'

export default {
  components: {
    AppTitle,
    AppBackButton,
    AppDeleteButton,
    AppConfirmationModal
  },
  middleware: ['authenticated'],
  layout: 'account-management',
  head() {
    return {
      title: `${this.$t('pages.account.payment_methods.title')} | ${this.$t('pages.account.title')} | ${this.title}`,
      meta: [
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex'
        }
      ]
    }
  },
  async asyncData({ app, route }) {
    const res = await app.$axios.$get(`/payment-methods/${route.params.id}`)

    return {
      paymentMethod: res.data,
      title: app.head.title
    }
  },
  methods: {
    ...mapActions({
      openModal: 'confirmation/openModal',
      closeModal: 'confirmation/closeModal'
    }),
    async destroy() {
      try {
        await this.$axios.$delete(`/payment-methods/${this.paymentMethod.id}`)
        this.$toasted.success(this.$t('toasts.payment_methods.deleted'))
        this.$router.push({ name: 'account-payment-methods' })
      } catch (e) {
        this.$toasted.error(this.$t('toasts.general_error'))
      }
      this.closeModal()
    }
  }
}
</script>
