<template>
  <div class="min-h-screen flex flex-col bg-white pt-36">
    <main class="py-36">
      <LogoLink :to="{ name: 'shop-management-products' }"/>
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
