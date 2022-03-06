<template>
  <h2
    :class="`text-${shopTheme}-400`"
    class="text-12 font-extrabold uppercase tracking-wide select-none mb-10 mt-20"
  >
    <slot />
  </h2>
</template>

<script>
import theming from '@/mixins/theming'

export default {
  mixins: [theming],
}
</script>
