<template>
  <div>

    <AppProductCreatorStep>
      3/5
    </AppProductCreatorStep>

    <header class="flex flex-wrap items-center my-30">

      <!-- Back -->
      <AppBackButton
        :route="{ name: 'shop-management-products' }"
        class="mr-20"
      />

      <!-- Page title -->
      <h1 class="text-20 sm:text-24 md:text-30 font-extrabold leading-relaxed text-center md:text-left">
        {{ form.name[locale] || $t('products.management.create.unnamed') }}
      </h1>
    </header>

    Price
  </div>
</template>

<script>
import AppBackButton from '@/components/buttons/AppBackButton'
import AppProductCreatorStep from '@/components/products/creator/AppProductCreatorStep'

export default {
  components: {
    AppBackButton,
    AppProductCreatorStep
  },
  layout: 'create-product'
}
</script>
