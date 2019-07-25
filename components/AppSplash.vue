<template>
  <AppContentSection>

    <!-- Icon -->
    <div class="icon__group">
      <template v-if="success">
        <font-awesome-icon
          :icon="['far', 'check-circle']"
          class="icon__icon icon__icon--success"/>
      </template>
      <template v-else-if="error">
        <font-awesome-icon
          :icon="['far', 'exclamation-triangle']"
          class="icon__icon icon__icon--danger"/>
      </template>
    </div>

    <!-- Title -->
    <AppTitle
      semantic="h2"
      visual="main">
      <slot name="title">
        {{ title }}
      </slot>
    </AppTitle>

    <p class="text-18 md:text-20 lg:text-30 font-bold text-center mb-72 md:mb-96 lg:mb-132">
      <slot name="subtitle">
        {{ subtitle }}
      </slot>
    </p>

    <!-- Illustration -->
    <div class="flex justify-center px-20">
      <slot name="illustration"/>
    </div>
  </AppContentSection>
</template>

<script>
import AppTitle from '@/components/AppTitle'
import AppContentSection from '@/components/AppContentSection'

export default {
  components: {
    AppTitle,
    AppContentSection
  },
  props: {
    type: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: false,
      default: ''
    },
    subtitle: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    success() {
      return this.type === 'success'
    },
    error() {
      return this.type === 'error'
    }
  }
}
</script>
