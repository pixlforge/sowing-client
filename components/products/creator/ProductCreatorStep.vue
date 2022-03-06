<template>
  <div
    :class="`bg-${shopTheme}-500`"
    class="w-60 h-60 flex justify-center items-center rounded-full text-16 text-white font-bold"
  >
    <slot />
  </div>
</template>

<script>
import theming from '@/mixins/theming'

export default {
  mixins: [theming],
}
</script>
