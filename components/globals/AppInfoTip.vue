<template>
  <div
    :class="`bg-${shopTheme}-200`"
    class="w-full rounded-lg flex flex-col lg:flex-row items-center px-48 py-20 my-24"
  >
    <div class="w-50 h-50 bg-white rounded-full flex flex-shrink-0 justify-center items-center lg:mr-20 mb-20 lg:mb-0">
      <font-awesome-icon
        :icon="['far', icon]"
        :class="`text-${shopTheme}-500`"
        class="text-30"
      />
    </div>
    <p
      :class="`text-${shopTheme}-600`"
      class="text-14 lg:text-16 leading-relaxed text-center lg:text-left"
    >
      <slot/>
    </p>
  </div>
</template>

<script>
import theming from '@/mixins/theming'

export default {
  mixins: [theming],
  props: {
    icon: {
      type: String,
      required: false,
      default: 'info'
    }
  }
}
</script>
