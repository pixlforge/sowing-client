<template>
  <div>
    <header class="flex flex-col sm:flex-row justify-between">
      <div class="flex items-center">

        <!-- Back -->
        <AppBackButton
          :route="{ name: 'account-payment-methods' }"
          class="sm:mr-20"
        />

        <!-- Page title -->
        <AppTitle
          semantic="h1"
          visual="h1"
          utilities="mx-auto sm:mx-0"
        >
          {{ $t('pages.account.payment_methods.titles.show') }}
        </AppTitle>
      </div>
      <div class="flex justify-center items-center mt-48 sm:mt-0">

        <!-- Edit -->
        <AppEditButton
          :route="{
            name: 'account-payment-methods-id-edit',
            params: {
              id: paymentMethod.id
            }
          }"
        />

        <!-- Delete -->
        <AppDeleteButton @click.native="openModal"/>
      </div>
    </header>

    <AppCard>
      <div class="rounded-lg border-2 border-gray-100 px-20 py-20 md:py-30">
        <div class="flex flex-col md:flex-row">

          <!-- Icon -->
          <font-awesome-icon
            :icon="['fab', cardType]"
            class="text-72 xl:text-132 text-gray-400 mx-auto md:mx-0"
          />

          <!-- Body -->
          <div class="flex-1 md:ml-30 mt-10">
            <div class="flex flex-col md:flex-row justify-between items-baseline">

              <!-- Card type -->
              <div class="w-full md:w-auto text-16 sm:text-18 md:text-24 text-center md:text-left">
                {{ paymentMethod.card_type }}
              </div>

              <!-- Created at -->
              <div class="w-full md:w-auto text-12 text-gray-400 text-center md:text-left">
                {{ $t('credit_cards.card_added_on') }} {{ paymentMethod.created_at[locale] }}
              </div>
            </div>

            <!-- Last four -->
            <div class="text-12 md:text-18 text-center md:text-left mt-16">
              N° &middot;&middot;&middot;&middot; &middot;&middot;&middot;&middot; &middot;&middot;&middot;&middot; {{ paymentMethod.last_four }}
            </div>

            <!-- Default payment method -->
            <div
              v-if="paymentMethod.is_default"
              class="flex items-center mt-16"
            >
              <font-awesome-icon
                :icon="['fas', 'star']"
                :title="$t('pages.account.payment_methods.is_default')"
                class="hidden md:block text-14 text-orange-400 mr-20"
              />
              <span class="block md:inline w-full md:w-auto text-12 text-gray-400 text-center md:text-left">
                {{ $t('pages.account.payment_methods.is_default') }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </AppCard>

    <!-- Confirmation modal -->
    <AppConfirmationModal
      :title="$t('modals.payment_methods.delete.title')"
      :body="$t('modals.payment_methods.delete.body')"
      :button-label="$t('buttons.delete')"
      @confirm="destroy"
      button-icon="trash-alt"
      icon="exclamation-circle"
      color="red"
    />

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import AppCard from '@/components/AppCard'
import AppTitle from '@/components/AppTitle'
import AppBackButton from '@/components/buttons/AppBackButton'
import AppEditButton from '@/components/buttons/AppEditButton'
import AppDeleteButton from '@/components/buttons/AppDeleteButton'
import AppConfirmationModal from '@/components/modals/AppConfirmationModal'

export default {
  components: {
    AppCard,
    AppTitle,
    AppBackButton,
    AppEditButton,
    AppDeleteButton,
    AppConfirmationModal
  },
  middleware: ['authenticated'],
  layout: 'account-management',
  head() {
    return {
      title: `${this.$t('pages.account.payment_methods.titles.show')} | ${this.$t('pages.account.title')}`,
      meta: [
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex'
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      locale: 'locale'
    }),
    cardType() {
      if (this.paymentMethod.card_type_slug === 'american-express') {
        return 'cc-amex'
      }
      return 'cc-' + this.paymentMethod.card_type_slug
    }
  },
  async asyncData({ app, route }) {
    const res = await app.$axios.$get(`/payment-methods/${route.params.id}`)

    return {
      paymentMethod: res.data
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
