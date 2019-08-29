<template>
  <nuxt-link
    :to="url"
    class="text-20 text-gray-300 hover:text-gray-400"
    :title="$t('buttons.back')"
  >
    <font-awesome-icon :icon="['far', 'arrow-alt-circle-left']"/>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    }
  }
}
</script>
