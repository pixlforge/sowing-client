<template>
  <section class="bg-pink-600">
    <div class="container flex items-center">

      <div class="hidden lg:block lg:w-1/2 xl:w-1/3">
        <img
          src="~assets/img/newsletter.svg"
          alt="Illustration representing a newsletter"
          class="block w-4/5"
        >
      </div>

      <div class="w-full lg:w-1/2 xl:w-2/3 py-132">
        <Heading
          tag="h1"
          visual="main"
          utilities="text-white lg:text-left"
        >
          {{ $t("streaks.newsletter.title") }}
        </Heading>

        <p class="text-20 xl:text-24 text-white text-center lg:text-left mt-30">
          {{ $t("streaks.newsletter.body") }}
        </p>

        <form
          @submit.prevent="subscribe"
          class="relative"
        >

          <div class="flex flex-col md:flex-row justify-center lg:justify-start mt-48">
            <AppFormInput
              v-model="email"
              :placeholder="placeholder"
              :aria-label="$t('aria.inputs.email')"
              name="email"
              type="email"
              class="md:max-w-400 md:rounded-r-none shadow-2xl"
              required
            />

            <AppButtonPrimary
              icon="paper-plane"
              type="submit"
              class="md:rounded-l-none shadow-2xl mt-20 md:mt-0"
            >
              {{ $t("buttons.subscribe") }}
            </AppButtonPrimary>
          </div>

          <p
            v-if="errors.email"
            class="absolute w-full text-12 text-white text-center lg:text-left mt-5"
          >
            {{ errors.email[0] }}
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import Heading from '@/components/Heading'
import AppFormInput from '@/components/forms/AppFormInput'
import AppButtonPrimary from '@/components/buttons/AppButtonPrimary'

export default {
  components: {
    Heading,
    AppFormInput,
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
