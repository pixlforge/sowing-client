<template>
  <div>

    <!-- Page title -->
    <Heading
      tag="h1"
      visual="h4"
      utilities="text-center"
    >
      {{ $t('register.title') }}
    </Heading>

    <form
      @submit.prevent="register"
      class="mt-36"
    >

      <!-- Name -->
      <FormGroup>
        <FormLabel name="name">
          {{ $t("forms.labels.name") }}
        </FormLabel>
        <FormInput
          ref="autofocus"
          v-model="form.name"
          :errors="errors"
          name="name"
          required
        />
        <FormValidation
          :errors="errors"
          name="name"
        />
      </FormGroup>

      <!-- Email -->
      <FormGroup>
        <FormLabel name="email">
          {{ $t("forms.labels.email") }}
        </FormLabel>
        <FormInput
          v-model="form.email"
          :errors="errors"
          name="email"
          type="email"
          required
        />
        <FormValidation
          :errors="errors"
          name="email"
        />
      </FormGroup>

      <!-- Password -->
      <FormGroup>
        <FormLabel name="password">
          {{ $t("forms.labels.password") }}
        </FormLabel>
        <FormInput
          v-model="form.password"
          :errors="errors"
          name="password"
          type="password"
          required
        />
        <FormValidation
          :errors="errors"
          name="password"
        />
      </FormGroup>

      <!-- Password confirmation -->
      <FormGroup>
        <FormLabel name="password_confirmation">
          {{ $t("forms.labels.password_confirmation") }}
        </FormLabel>
        <FormInput
          v-model="form.password_confirmation"
          :errors="errors"
          name="password_confirmation"
          type="password"
          required
        />
      </FormGroup>

      <!-- Terms -->
      <FormGroup>
        <FormCheckbox
          v-model="terms"
          name="terms"
        >
          <div class="flex flex-wrap">
            <span class="text-14 text-gray-300 select-none cursor-pointer mr-5">
              {{ $t("register.terms") }}
            </span>
            <nuxt-link
              :to="{ name: 'index' }"
              class="text-14 text-green-500 no-underline hover:underline select-none"
            >
              {{ $t("register.links.terms") }}
            </nuxt-link>
          </div>
        </FormCheckbox>
      </FormGroup>

      <!-- Submit -->
      <ButtonPrimary
        :disabled="missingCredentials"
        type="submit"
        icon="user"
        class="mx-auto mt-36"
      >
        {{ $t("buttons.create_account") }}
      </ButtonPrimary>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import Heading from '@/components/globals/Heading'
import FormGroup from '@/components/forms/FormGroup'
import FormLabel from '@/components/forms/FormLabel'
import FormInput from '@/components/forms/FormInput'
import FormCheckbox from '@/components/forms/FormCheckbox'
import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import FormValidation from '@/components/forms/FormValidation'

export default {
  layout: 'auth',
  middleware: ['guest'],
  head() {
    return {
      title: this.$t('register.title'),
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
    FormGroup,
    FormLabel,
    FormInput,
    FormCheckbox,
    ButtonPrimary,
    FormValidation
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
