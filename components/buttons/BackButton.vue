<template>
  <nuxt-link
    :to="route"
    :title="$t('buttons.back')"
    class="text-20 text-gray-300 hover:text-gray-400"
  >
    <font-awesome-icon :icon="['far', 'arrow-alt-circle-left']"/>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    route: {
      type: Object,
      required: true
    }
  }
}
</script>
