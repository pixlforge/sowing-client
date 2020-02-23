<template>
  <ModalTransition>

    <!-- Backdrop -->
    <div
      ref="confirmationModalBackdrop"
      v-if="showModal"
      class="fixed inset-x-0 inset-y-0 bg-backdrop flex justify-center items-center z-10"
    >

      <!-- Modal background -->
      <div
        :class="`border-${color}-500`"
        class="w-full max-w-600 bg-white rounded-lg shadow-xl border-t-8 flex flex-col md:flex-row px-24 py-48"
      >

        <!-- Icon container -->
        <div class="w-full md:w-1/4 flex justify-center">
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
                  class="text-24 animation-pulse"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Content container -->
        <div class="w-full md:w-3/4 mt-16 md:mt-0">

          <!-- Modal title -->
          <h1 class="text-16 md:text-20 font-bold text-center md:text-left mb-12">
            {{ title }}
          </h1>

          <!-- Modal body -->
          <div class="text-14 text-center md:text-left mb-30">
            {{ body }}
          </div>

          <div class="flex justify-center md:justify-start items-center">

            <!-- Confirm -->
            <ButtonPrimary
              :color="color"
              :icon="buttonIcon"
              @click.native="$emit('confirm')"
              class="mr-10"
            >
              {{ buttonLabel }}
            </ButtonPrimary>

            <!-- Cancel -->
            <ButtonTertiary
              @click.native="closeModal"
              icon="times"
            >
              {{ $t('buttons.cancel') }}
            </ButtonTertiary>
          </div>
        </div>
      </div>
    </div>
  </ModalTransition>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import ButtonTertiary from '@/components/buttons/ButtonTertiary'
import ModalTransition from '@/components/transitions/ModalTransition'

export default {
  components: {
    ButtonPrimary,
    ButtonTertiary,
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
      showModal: 'confirmation/showModal'
    })
  },
  watch: {
    showModal() {
      if (this.showModal) {
        document.querySelector('body').classList.add('overflow-hidden')
      } else {
        document.querySelector('body').classList.remove('overflow-hidden')
      }
    }
  },
  mounted() {
    const escapeHandler = (event) => {
      if (event.key === 'Escape' && this.showModal) {
        this.closeModal()
      }
    }
    document.addEventListener('keydown', escapeHandler)

    const clickHandler = (event) => {
      const element = this.$refs.confirmationModalBackdrop
      const target = event.target
      if (element === target && element.contains(target)) {
        this.closeModal()
      }
    }
    document.addEventListener('click', clickHandler)

    this.$once('hook:destroyed', () => {
      document.removeEventListener('keydown', escapeHandler)
      document.removeEventListener('click', clickHandler)
    })
  },
  methods: {
    ...mapActions({
      closeModal: 'confirmation/closeModal'
    })
  }
}
</script>
