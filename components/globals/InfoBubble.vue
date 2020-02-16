<template>
  <div class="md:relative group cursor-pointer">
    <font-awesome-icon
      :icon="['fas', 'info-circle']"
      :class="`${iconSize} text-${color}-400`"
    />
    <div class="w-screen md:w-300 fixed md:absolute top-0 left-0 text-12 text-center leading-relaxed bg-white rounded-lg shadow-xl transform origin-center md:origin-top-left scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out px-20 py-16 md:ml-18 md:mt-18">
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
