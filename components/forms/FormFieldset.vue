<template>
  <fieldset
    :class="`border-${shopTheme}-200`"
    class="bg-white border rounded-lg p-20 lg:p-36"
  >
    <slot/>
  </fieldset>
</template>

<script>
import theming from '@/mixins/theming'

export default {
  mixins: [theming]
}
</script>
