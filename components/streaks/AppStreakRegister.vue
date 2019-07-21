<template>
  <section class="bg-green-500">
    <div class="container flex items-center">

      <div class="hidden lg:block lg:w-1/2 xl:w-1/3">
        <img
          src="~assets/img/rocket.svg"
          alt="Illustration representing a rocket"
          class="block w-full">
      </div>

      <div class="w-full lg:w-1/2 xl:w-2/3 py-132">
        <AppTitle
          semantic="h1"
          visual="main"
          utilities="text-white lg:text-left">
          {{ $t("streaks.register.title") }}
        </AppTitle>

        <p class="text-20 xl:text-24 font-semibold text-white text-center lg:text-left mt-30">
          {{ $t("streaks.register.body") }}
        </p>

        <div class="flex flex-col md:flex-row justify-center lg:justify-start mt-48">
          <nuxt-link
            :to="localePath({ name: 'index' })"
            class="button button__secondary">
            <font-awesome-icon
              :icon="['far', 'store']"
              class="mr-10"/>
            {{ $t("buttons.create_my_shop") }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppTitle from '@/components/AppTitle';

export default {
  components: {
    AppTitle
  }
}
</script>
