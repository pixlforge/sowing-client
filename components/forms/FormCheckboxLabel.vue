<template>
  <label
    :for="name"
    class="block text-12 font-extrabold uppercase tracking-wide select-none"
  >
    <slot />
  </label>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
}
</script>
