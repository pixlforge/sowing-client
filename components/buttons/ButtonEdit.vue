<template>
  <nuxt-link
    :to="route"
    :title="$t('button.edit')"
    class="text-20 text-gray-300 hover:text-gray-500 mr-20"
  >
    <font-awesome-icon :icon="['far', 'edit']" />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    route: {
      type: Object,
      required: true,
    },
  },
}
</script>
