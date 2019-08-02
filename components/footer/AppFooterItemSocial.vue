<template>
  <li>
    <a
      :href="url"
      :class="`hover:text-${shopTheme}-500`"
      target="_blank"
      rel="noopener noreferrer"
      class="text-14 no-underline flex items-center"
    >
      <font-awesome-icon
        :icon="['fab', icon]"
        :class="`text-${shopTheme}-500`"
        class="block text-16 mr-10"
      />
      {{ label }}
    </a>
  </li>
</template>

<script>
import theming from '@/mixins/theming'

export default {
  mixins: [theming],
  props: {
    url: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: false,
      default: null
    }
  }
}
</script>
