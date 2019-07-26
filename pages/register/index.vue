<template>
  <main>

    <!-- Header -->
    <AppHeader
      :title="$t('pages.register.title')"
      icon="user-plus"/>

    <!-- Form -->
    <AppContentSection class="max-w-600">
      <form @submit.prevent="register">

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
            required/>
          <AppFormValidation
            :errors="errors"
            name="name"/>
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
            required/>
          <AppFormValidation
            :errors="errors"
            name="email"/>
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
            required/>
          <AppFormValidation
            :errors="errors"
            name="password"/>
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
            required/>
        </AppFormGroup>

        <!-- Terms -->
        <div class="form__checkbox-group">
          <label for="terms">
            <input
              id="terms"
              v-model="terms"
              type="checkbox"
              name="terms"
              class="form__checkbox-input">
            <span class="form__checkbox-label">{{ $t("pages.register.terms") }}</span>
            <nuxt-link
              :to="localePath({ name: 'index' })"
              class="form__checkbox-link">{{ $t("pages.register.links.terms") }}</nuxt-link>.
          </label>
        </div>

        <!-- Submit -->
        <AppButtonPrimary
          :disabled="missingCredentials"
          type="submit"
          icon="user"
          class="shadow-xl mx-auto my-72">
          {{ $t("buttons.create_account") }}
        </AppButtonPrimary>
      </form>
    </AppContentSection>
  </main>
</template>

<script>
import { mapActions } from 'vuex'

import AppHeader from '@/components/headers/AppHeader'
import AppFormGroup from '@/components/forms/AppFormGroup'
import AppFormLabel from '@/components/forms/AppFormLabel'
import AppFormInput from '@/components/forms/AppFormInput'
import AppContentSection from '@/components/AppContentSection'
import AppButtonPrimary from '@/components/buttons/AppButtonPrimary'
import AppFormValidation from '@/components/forms/AppFormValidation'

export default {
  middleware: ['guest'],
  head() {
    return {
      title: `${this.$t('pages.register.title')} | ${this.title}`,
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
    AppHeader,
    AppFormGroup,
    AppFormLabel,
    AppFormInput,
    AppContentSection,
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
  asyncData({ app }) {
    return {
      title: app.head.title
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
        this.next()
      } catch (e) {
        this.errors = e.response.data.errors
        this.$toast.error(this.$t('toasts.validation'))
      }
    },
    async login() {
      await this.$auth.loginWith('local', {
        data: this.form
      })
    },
    next() {
      this.$router.push(this.localePath({ name: 'register-success' }))
    }
  }
}
</script>
