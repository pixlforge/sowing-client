<template>
  <section class="bg-pink-600">
    <div class="container flex items-center">

      <div class="hidden lg:block lg:w-1/2 xl:w-1/3">
        <img
          src="~assets/img/newsletter.svg"
          alt="Illustration representing a newsletter"
          class="block w-4/5">
      </div>

      <div class="w-full lg:w-1/2 xl:w-2/3 py-132">
        <AppTitle
          semantic="h1"
          visual="main"
          utilities="text-white lg:text-left">
          {{ $t("streaks.newsletter.title") }}
        </AppTitle>

        <p class="text-20 xl:text-24 font-semibold text-white text-center lg:text-left mt-30">
          {{ $t("streaks.newsletter.body") }}
        </p>

        <form
          class="relative"
          @submit.prevent="subscribe">

          <div class="flex flex-col md:flex-row justify-center lg:justify-start mt-48">
            <input
              id="email"
              v-model="email"
              :placeholder="placeholder"
              :aria-label="$t('aria.inputs.email')"
              type="email"
              name="email"
              class="form__input form__input--grouped"
              required>

            <AppButtonPrimary
              icon="paper-plane"
              type="submit"
              class="md:rounded-l-none mt-20 md:mt-0">
              {{ $t("buttons.subscribe") }}
            </AppButtonPrimary>
          </div>

          <p
            v-if="errors.email"
            class="form__feedback form__feedback--white form__feedback--centered">
            {{ errors.email[0] }}
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import AppTitle from '@/components/AppTitle'
import AppButtonPrimary from '@/components/buttons/AppButtonPrimary'

export default {
  components: {
    AppTitle,
    AppButtonPrimary
  },
  data() {
    return {
      email: '',
      errors: {}
    }
  },
  computed: {
    placeholder() {
      return this.$t('streaks.newsletter.placeholder')
    }
  },
  methods: {
    async subscribe() {
      this.errors = {}

      try {
        await this.$axios.$post('/newsletter/subscribe', {
          email: this.email
        })
        this.$toast.success(this.$t('toasts.subscribed'))
        this.email = ''
      } catch (e) {
        this.errors = e.response.data.errors
        this.$toast.error(this.$t('toasts.validation'))
      }
    }
  }
}
</script>
