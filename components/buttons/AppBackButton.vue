<template>
  <button
    class="text-20 text-gray-300 hover:text-gray-400"
    :title="$t('buttons.back')"
    @click.prevent="back"
  >
    <font-awesome-icon :icon="['far', 'arrow-alt-circle-left']"/>
  </button>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
}
</script>
