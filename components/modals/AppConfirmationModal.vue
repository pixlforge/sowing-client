<template>
  <ModalTransition>
    <div
      v-if="showConfirmationModal"
      class="fixed inset-x-0 inset-y-0 bg-backdrop flex justify-center items-center z-10"
    >
      <div
        :class="`border-${color}-500`"
        class="w-full max-w-600 bg-white rounded-lg shadow-xl border-t-8 flex px-24 py-48"
      >
        <div class="w-1/4 flex justify-center">
          <div
            :class="`bg-${color}-100`"
            class="w-60 h-60 rounded-full flex justify-center items-center"
          >
            <div
              :class="`bg-${color}-200`"
              class="w-40 h-40 rounded-full flex justify-center items-center"
            >
              <div>
                <font-awesome-icon
                  :icon="['far', icon]"
                  :class="`text-${color}-600`"
                  class="text-30"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="w-3/4">
          <h1 class="text-20 font-bold mb-12">
            {{ title }}
          </h1>
          <div class="text-14 mb-30">
            {{ body }}
          </div>
          <div class="flex items-center">
            <AppButtonPrimary
              :color="color"
              :icon="buttonIcon"
              class="mr-10"
              @click.native="$emit('confirm')"
            >
              {{ buttonLabel }}
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
  props: {
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    buttonLabel: {
      type: String,
      required: true
    },
    buttonIcon: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
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
