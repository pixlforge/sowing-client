<template>
  <nuxt-link
    :to="route"
    :class="[
      `bg-${color}-500 hover:bg-${color}-700`,
      {
        'text-12 font-bold px-30 py-12': size === 'normal',
        'text-14 md:text-16 font-black px-48 py-20': size === 'large',
        'text-10 font-extrabold px-10 py-5': size === 'mini',
        'bg-pink-600 hover:bg-pink-700': color === 'pink-dark',
      },
    ]"
    class="inline-flex justify-center items-center outline-none focus:shadow-outline rounded-lg text-white font-bold text-center uppercase no-underline sm:whitespace-no-wrap transition-colors duration-200 ease-out select-none"
  >
    <font-awesome-icon v-if="icon" :icon="['far', icon]" class="mr-10" />
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    route: {
      type: Object,
      required: true,
    },
    color: {
      type: String,
      required: false,
      default: 'green',
    },
    icon: {
      type: String,
      required: false,
      default: null,
    },
    size: {
      type: String,
      required: false,
      default: 'normal',
    },
  },
}
</script>
