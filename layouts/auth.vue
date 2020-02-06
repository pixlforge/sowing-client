<template>
  <div>

    <!-- Alert -->
    <Alert/>

    <main class="min-h-screen flex justify-center items-center bg-green-500">
      <div class="w-full max-w-600 bg-white rounded-lg shadow-2xl p-48">

        <!-- Logo -->
        <LogoLink/>

        <!-- Page content -->
        <Nuxt/>

      </div>
    </main>
  </div>
</template>

<script>
import LogoLink from '@/components/globals/LogoLink'
import Alert from '@/components/globals/Alert'

export default {
  components: {
    LogoLink,
    Alert
  }
}
</script>
