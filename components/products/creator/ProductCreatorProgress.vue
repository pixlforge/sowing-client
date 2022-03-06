<template>
  <div>
    <div class="flex justify-center items-center">
      <!-- Done -->
      <div
        v-for="n in completedSteps"
        :key="`done-${n}`"
        :class="`bg-${shopTheme}-300`"
        class="w-10 h-10 flex justify-center items-center rounded-full mx-3"
      />

      <!-- Current -->
      <div
        :class="`bg-${shopTheme}-500`"
        class="w-15 h-15 flex justify-center items-center rounded-full mx-3"
      />

      <!-- Remaining -->
      <div
        v-for="n in remainingSteps"
        :key="`remaining-${n}`"
        class="w-10 h-10 flex justify-center items-center bg-gray-200 rounded-full mx-3"
      />
    </div>

    <!-- Label -->
    <div class="text-14 text-center mt-5">
      <slot />
    </div>
  </div>
</template>

<script>
import theming from '@/mixins/theming'

export default {
  mixins: [theming],
  props: {
    currentStep: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      steps: 6,
    }
  },
  computed: {
    completedSteps() {
      return this.currentStep - 1
    },
    remainingSteps() {
      return this.steps - this.currentStep
    },
  },
}
</script>
