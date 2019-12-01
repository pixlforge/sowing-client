<template>
  <div class="bg-gray-100">
    <AppContentSection>
      <header class="flex items-center">

        <!-- Back -->
        <AppBackButton
          :route="{ name: 'shop-management-products' }"
          class="mr-20"
        />

        <!-- Page title -->
        <AppTitle
          semantic="h1"
          visual="h2"
        >
          {{ $t("products.management.create.title") }}
        </AppTitle>
      </header>

      <nuxt/>
    </AppContentSection>
  </div>
</template>

<script>
import AppTitle from '@/components/AppTitle'
import AppBackButton from '@/components/buttons/AppBackButton'
import AppContentSection from '@/components/AppContentSection'

export default {
  components: {
    AppTitle,
    AppBackButton,
    AppContentSection
  }
}
</script>
