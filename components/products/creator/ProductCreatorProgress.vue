<template>
  <div>
    <div class="flex justify-center items-center">

      <!-- Done -->
      <div
        v-for="n in 3"
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
        v-for="n in 2"
        :key="`remaining-${n}`"
        class="w-10 h-10 flex justify-center items-center bg-gray-200 rounded-full mx-3"
      />

    </div>
    <div class="text-14 text-center mt-5">
      Types &amp; variations
    </div>
  </div>
</template>

<script>
import theming from '@/mixins/theming'

export default {
  mixins: [theming]
}
</script>
