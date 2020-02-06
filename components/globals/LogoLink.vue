<template>
  <div class="text-center mb-36">
    <nuxt-link
      :to="{ name: 'index' }"
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
  }
}
</script>
