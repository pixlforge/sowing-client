<template>
  <section class="bg-green-500">
    <div class="container flex items-center">

      <div class="hidden lg:block lg:w-1/2 xl:w-1/3">
        <img
          src="~assets/img/rocket.svg"
          alt="Illustration representing a rocket"
          class="block w-full"
        >
      </div>

      <div class="w-full lg:w-1/2 xl:w-2/3 py-132">
        <Heading
          tag="h1"
          visual="main"
          utilities="text-white lg:text-left"
        >
          {{ $t("streaks.register.title") }}
        </Heading>

        <p class="text-20 xl:text-24 text-white text-center lg:text-left mt-30">
          {{ $t("streaks.register.body") }}
        </p>

        <div class="flex flex-col md:flex-row justify-center lg:justify-start mt-48">
          <ButtonLinkPrimary
            :route="{ name: 'auth-register' }"
            icon="store"
            color="pink-dark"
          >
            {{ $t("buttons.create_my_shop") }}
          </ButtonLinkPrimary>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Heading from '@/components/Heading'
import ButtonLinkPrimary from '@/components/buttons/ButtonLinkPrimary'

export default {
  components: {
    Heading,
    ButtonLinkPrimary
  }
}
</script>
