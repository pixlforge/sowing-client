<template>
  <ul class="text-14 md:text-16 leading-loose">
    <li
      v-for="(item, index) in items"
      :key="index"
      class="my-48"
    >
      <font-awesome-icon
        v-if="icon"
        :icon="['far', icon]"
        :class="`text-${iconColor}-500`"
        class="mr-10"
      />
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    icon: {
      type: String,
      required: false,
      default: ''
    },
    iconColor: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
