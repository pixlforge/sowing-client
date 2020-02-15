<template>
  <div class="min-h-screen flex flex-col bg-white pt-36">
    <main class="container py-36">
      <LogoLink/>
      <Nuxt/>
    </main>
  </div>
</template>

<script>
import LogoLink from '@/components/globals/LogoLink'

export default {
  components: {
    LogoLink
  }
}
</script>
