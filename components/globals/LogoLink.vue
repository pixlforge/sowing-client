<template>
  <div class="text-center mb-36">
    <nuxt-link
      :to="to"
      class="inline-block"
    >
      <Logo class="w-200"/>
    </nuxt-link>
  </div>
</template>

<script>
import Logo from '@/components/globals/Logo'

export default {
  components: {
    Logo
  },
  props: {
    to: {
      type: Object,
      required: false,
      default() {
        return { name: 'index' }
      }
    }
  }
}
</script>
