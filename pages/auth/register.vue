<template>
  <main>

    <!-- Form -->
    <AppContentSection class="max-w-600">

      <!-- Page title -->
      <Heading
        tag="h1"
        visual="h1"
        utilities="md:text-center"
      >
        {{ $t('pages.register.title') }}
      </Heading>

      <form
        @submit.prevent="register"
        class="mt-36 sm:mt-72"
      >

        <!-- Name -->
        <AppFormGroup>
          <AppFormLabel name="name">
            {{ $t("forms.labels.name") }}
          </AppFormLabel>
          <AppFormInput
            ref="autofocus"
            v-model="form.name"
            :errors="errors"
            name="name"
            required
          />
          <AppFormValidation
            :errors="errors"
            name="name"
          />
        </AppFormGroup>

        <!-- Email -->
        <AppFormGroup>
          <AppFormLabel name="email">
            {{ $t("forms.labels.email") }}
          </AppFormLabel>
          <AppFormInput
            v-model="form.email"
            :errors="errors"
            name="email"
            type="email"
            required
          />
          <AppFormValidation
            :errors="errors"
            name="email"
          />
        </AppFormGroup>

        <!-- Password -->
        <AppFormGroup>
          <AppFormLabel name="password">
            {{ $t("forms.labels.password") }}
          </AppFormLabel>
          <AppFormInput
            v-model="form.password"
            :errors="errors"
            name="password"
            type="password"
            required
          />
          <AppFormValidation
            :errors="errors"
            name="password"
          />
        </AppFormGroup>

        <!-- Password confirmation -->
        <AppFormGroup>
          <AppFormLabel name="password_confirmation">
            {{ $t("forms.labels.password_confirmation") }}
          </AppFormLabel>
          <AppFormInput
            v-model="form.password_confirmation"
            :errors="errors"
            name="password_confirmation"
            type="password"
            required
          />
        </AppFormGroup>

        <!-- Terms -->
        <AppFormGroup>
          <AppFormCheckbox
            v-model="terms"
            name="terms"
          >
            <div class="flex flex-wrap">
              <span class="text-14 text-gray-300 select-none cursor-pointer mr-5">
                {{ $t("pages.register.terms") }}
              </span>
              <nuxt-link
                :to="{ name: 'index' }"
                class="text-14 text-green-500 no-underline hover:underline select-none"
              >
                {{ $t("pages.register.links.terms") }}
              </nuxt-link>
            </div>
          </AppFormCheckbox>
        </AppFormGroup>

        <!-- Submit -->
        <AppButtonPrimary
          :disabled="missingCredentials"
          type="submit"
          icon="user"
          class="shadow-xl mx-auto my-72"
        >
          {{ $t("buttons.create_account") }}
        </AppButtonPrimary>
      </form>
    </AppContentSection>
  </main>
</template>

<script>
import { mapActions } from 'vuex'

import Heading from '@/components/Heading'
import AppFormGroup from '@/components/forms/AppFormGroup'
import AppFormLabel from '@/components/forms/AppFormLabel'
import AppFormInput from '@/components/forms/AppFormInput'
import AppContentSection from '@/components/AppContentSection'
import AppFormCheckbox from '@/components/forms/AppFormCheckbox'
import AppButtonPrimary from '@/components/buttons/AppButtonPrimary'
import AppFormValidation from '@/components/forms/AppFormValidation'

export default {
  layout: 'auth',
  middleware: ['guest'],
  head() {
    return {
      title: this.$t('pages.register.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex'
        }
      ]
    }
  },
  components: {
    Heading,
    AppFormGroup,
    AppFormLabel,
    AppFormInput,
    AppContentSection,
    AppFormCheckbox,
    AppButtonPrimary,
    AppFormValidation
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      terms: false,
      errors: {}
    }
  },
  computed: {
    missingCredentials() {
      return !this.form.name ||
        !this.form.email ||
        this.form.password.length < 8 ||
        this.form.password_confirmation.length < 8 ||
        !this.terms
    }
  },
  mounted() {
    this.$refs.autofocus.$el.focus()
  },
  methods: {
    ...mapActions({
      getCart: 'cart/getCart'
    }),
    async register() {
      if (!this.terms) {
        this.$toast.error(this.$t('toasts.terms'))
        return
      }

      this.errors = {}

      try {
        const res = await this.$axios.$post('/auth/register', { ...this.form })
        this.$toast.success(`${this.$t('toasts.welcome')} ${res.data.name}!`)
        await this.login()
        this.$router.push({ name: 'auth-register-success' })
      } catch (e) {
        this.errors = e.response.data.errors
        this.$toast.error(this.$t('toasts.validation'))
      }
    },
    async login() {
      await this.$auth.loginWith('local', {
        data: this.form
      })
    }
  }
}
</script>
