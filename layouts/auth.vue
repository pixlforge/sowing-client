<template>
  <div>

    <!-- Alert -->
    <Alert/>

    <main class="min-h-screen flex justify-center items-center lg:items-start sm:bg-green-500">
      <div class="w-full max-w-400 sm:max-w-500 lg:max-w-600 bg-white sm:rounded-lg sm:shadow-2xl px-20 sm:px-48 sm:py-48 my-48">

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
