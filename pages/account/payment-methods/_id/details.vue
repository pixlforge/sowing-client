<template>
  <div>
    <header class="flex flex-col sm:flex-row justify-between">
      <div class="flex items-center">
        <!-- Back -->
        <ButtonBack
          :route="{ name: 'account-payment-methods' }"
          class="sm:mr-20"
        />

        <!-- Page title -->
        <Heading tag="h1" visual="h1" utilities="mx-auto sm:mx-0">
          {{ $t('account.payment_methods.titles.show') }}
        </Heading>
      </div>
      <div class="flex justify-center items-center mt-48 sm:mt-0">
        <!-- Edit -->
        <ButtonEdit
          :route="{
            name: 'account-payment-methods-id-edit',
            params: {
              id: paymentMethod.id,
            },
          }"
        />

        <!-- Delete -->
        <ButtonDelete @click.native="openModal" />
      </div>
    </header>

    <Card>
      <div class="rounded-lg border-2 border-gray-100 px-20 py-20 md:py-30">
        <div class="flex flex-col md:flex-row">
          <!-- Icon -->
          <font-awesome-icon
            :icon="['fab', cardType]"
            class="text-72 xl:text-132 text-gray-400 mx-auto md:mx-0"
          />

          <!-- Body -->
          <div class="flex-1 md:ml-30 mt-10">
            <div
              class="flex flex-col md:flex-row justify-between items-baseline"
            >
              <!-- Card type -->
              <div
                class="w-full md:w-auto text-16 sm:text-18 md:text-24 text-center md:text-left"
              >
                {{ paymentMethod.card_type }}
              </div>

              <!-- Created at -->
              <div
                class="w-full md:w-auto text-12 text-gray-400 text-center md:text-left"
              >
                {{ $t('credit_cards.card_added_on') }}
                {{ paymentMethod.created_at[locale] }}
              </div>
            </div>

            <!-- Last four -->
            <div class="text-12 md:text-18 text-center md:text-left mt-16">
              N° &middot;&middot;&middot;&middot;
              &middot;&middot;&middot;&middot; &middot;&middot;&middot;&middot;
              {{ paymentMethod.last_four }}
            </div>

            <!-- Default payment method -->
            <div
              v-if="paymentMethod.is_default"
              class="flex items-center mt-16"
            >
              <font-awesome-icon
                :icon="['fas', 'star']"
                :title="$t('account.payment_methods.is_default')"
                class="hidden md:block text-14 text-orange-400 mr-20"
              />
              <span
                class="block md:inline w-full md:w-auto text-12 text-gray-400 text-center md:text-left"
              >
                {{ $t('account.payment_methods.is_default') }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Card>

    <!-- Confirmation modal -->
    <ConfirmationModal
      :title="$t('modals.payment_methods.delete.title')"
      :body="$t('modals.payment_methods.delete.body')"
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

import ButtonBack from '@/components/buttons/ButtonBack'
import ButtonDelete from '@/components/buttons/ButtonDelete'
import ButtonEdit from '@/components/buttons/ButtonEdit'
import Card from '@/components/globals/Card'
import ConfirmationModal from '@/components/modals/ConfirmationModal'
import Heading from '@/components/globals/Heading'

export default {
  components: {
    ButtonBack,
    ButtonDelete,
    ButtonEdit,
    Card,
    ConfirmationModal,
    Heading,
  },
  layout: 'account-management',
  middleware: ['authenticated'],
  async asyncData({ app, route }) {
    const res = await app.$axios.$get(`/payment-methods/${route.params.id}`)

    return {
      paymentMethod: res.data,
    }
  },
  head() {
    return {
      title: `${this.$t('account.payment_methods.titles.show')} | ${this.$t(
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
      locale: 'locale',
    }),
    cardType() {
      if (this.paymentMethod.card_type_slug === 'american-express') {
        return 'cc-amex'
      }
      return 'cc-' + this.paymentMethod.card_type_slug
    },
  },
  methods: {
    ...mapActions({
      openModal: 'confirmation/openModal',
      closeModal: 'confirmation/closeModal',
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
    },
  },
}
</script>
