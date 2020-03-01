<template>
  <div class="group cursor-pointer">
    <font-awesome-icon
      :icon="['fas', 'info-circle']"
      :class="`${iconSize} text-${color}-300 group-hover:text-${color}-400`"
      class="transition-colors duration-200 ease-out"
    />
    <div
      :class="`bg-${color}-500`"
      class="w-screen fixed top-0 left-0 text-12 md:text-14 xl:text-16 font-semibold text-center leading-relaxed text-white shadow-lg transform origin-top scale-y-0 group-hover:scale-y-100 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out px-20 py-16 lg:py-36"
    >
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    iconSize: {
      type: String,
      required: false,
      default: 'text-14'
    },
    color: {
      type: String,
      required: false,
      default: 'green'
    }
  }
}
</script>
