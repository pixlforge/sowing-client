<template>
  <button
    :disabled="disabled"
    :type="type"
    :title="title"
    :class="[
      `bg-${color}-500 hover:bg-${color}-700`,
      {
        'text-12 font-bold px-30 py-12': size === 'normal',
        'text-14 md:text-16 font-black px-48 py-20': size === 'large',
        'text-10 font-extrabold px-10 py-5': size === 'mini',
        'bg-pink-600 hover:bg-pink-700': color === 'pink-dark'
      }
    ]"
    class="flex justify-center items-center disabled:bg-white outline-none focus:shadow-outline disabled:shadow-none rounded-lg border border-transparent disabled:border-gray-200 text-white disabled:text-gray-200 text-center uppercase no-underline leading-tight sm:whitespace-no-wrap disabled:cursor-not-allowed transition-colors duration-200 ease-out select-none"
  >
    <font-awesome-icon
      v-if="icon"
      :icon="['far', icon]"
      class="mr-10"
    />
    <slot/>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: ''
    },
    color: {
      type: String,
      required: false,
      default: 'green'
    },
    icon: {
      type: String,
      required: false,
      default: null
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    title: {
      type: String,
      required: false,
      default: ''
    },
    size: {
      type: String,
      required: false,
      default: 'normal'
    }
  }
}
</script>
