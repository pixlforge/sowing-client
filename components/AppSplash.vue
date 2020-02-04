<template>
  <AppContentSection>

    <!-- Icon -->
    <div class="text-center mb-60">
      <template v-if="success">
        <font-awesome-icon
          :icon="['far', 'check-circle']"
          class="text-72 text-green-500"
        />
      </template>
      <template v-else-if="error">
        <font-awesome-icon
          :icon="['far', 'exclamation-triangle']"
          class="text-72 text-red-500"
        />
      </template>
      <template v-else>
        <font-awesome-icon
          :icon="['far', 'comment-alt-smile']"
          class="text-72 text-blue-500"
        />
      </template>
    </div>

    <!-- Title -->
    <Heading
      tag="h2"
      visual="main"
    >
      <slot name="title">
        {{ title }}
      </slot>
    </Heading>

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
import Heading from '@/components/Heading'
import AppContentSection from '@/components/AppContentSection'

export default {
  components: {
    Heading,
    AppContentSection
  },
  props: {
    type: {
      type: String,
      required: false,
      default: ''
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
