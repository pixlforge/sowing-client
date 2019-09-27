<template>
  <ModalTransition>
    <div
      v-if="showConfirmationModal"
      class="fixed inset-x-0 inset-y-0 bg-backdrop flex justify-center items-center z-10"
    >
      <div class="w-full max-w-600 bg-white rounded-lg shadow-xl border-t-8 border-red-500 flex px-24 py-48">
        <div class="w-1/4 flex justify-center">
          <div class="w-60 h-60 bg-red-100 rounded-full flex justify-center items-center">
            <div class="w-40 h-40 bg-red-200 rounded-full flex justify-center items-center">
              <div>
                <font-awesome-icon
                  :icon="['far', 'exclamation-circle']"
                  class="text-30 text-red-600"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="w-3/4">
          <h1 class="text-20 font-bold mb-12">
            Supprimer une adresse
          </h1>
          <div class="text-14 mb-30">
            Êtes-vous certain de vouloir supprimer cette adresse?
          </div>
          <div class="flex items-center">
            <AppButtonPrimary
              color="red"
              icon="trash-alt"
              class="mr-10"
              @click.native="$emit('resource:destroy')"
            >
              {{ $t('buttons.delete') }}
            </AppButtonPrimary>
            <AppButtonTertiary
              icon="times"
              @click.native="displayConfirmationModal(false)"
            >
              {{ $t('buttons.cancel') }}
            </AppButtonTertiary>
          </div>
        </div>
      </div>
    </div>
  </ModalTransition>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import AppButtonPrimary from '@/components/buttons/AppButtonPrimary'
import AppButtonTertiary from '@/components/buttons/AppButtonTertiary'
import ModalTransition from '@/components/transitions/ModalTransition'

export default {
  components: {
    AppButtonPrimary,
    AppButtonTertiary,
    ModalTransition
  },
  computed: {
    ...mapGetters({
      showConfirmationModal: 'confirmation/showConfirmationModal'
    })
  },
  methods: {
    ...mapActions({
      displayConfirmationModal: 'confirmation/displayConfirmationModal'
    })
  }
}
</script>
