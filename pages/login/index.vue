<template>
  <main>

    <!-- Header -->
    <AppHeader
      :title="$t('pages.login.title')"
      icon="key"
    />

    <!-- Page contents -->
    <AppContentSection class="max-w-600">
      <form @submit.prevent="login">

        <!-- Email -->
        <AppFormGroup>
          <AppFormLabel name="email">
            {{ $t("forms.labels.email") }}
          </AppFormLabel>
          <AppFormInput
            ref="autofocus"
            v-model="form.email"
            :errors="errors"
            name="email"
            type="email"
            placeholder="elon@musk.ch"
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
            name="password"
            type="password"
            placeholder="••••••••"
            required
          />
        </AppFormGroup>

        <div class="flex flex-wrap justify-center my-36 md:my-60">

          <!-- Password forgotten -->
          <AppButtonLinkTertiary :to="localePath({ name: 'password-forgot' })">
            {{ $t("pages.login.links.password") }}
          </AppButtonLinkTertiary>

          <!-- Register an account -->
          <AppButtonLinkTertiary :to="localePath({ name: 'register' })">
            {{ $t("pages.login.links.register") }}
          </AppButtonLinkTertiary>
        </div>

        <!-- Submit -->
        <AppButtonPrimary
          :disabled="missingCredentials"
          type="submit"
          icon="key"
          class="shadow-xl mx-auto my-36 md:my-60"
        >
          {{ $t("buttons.connection") }}
        </AppButtonPrimary>
      </form>
    </AppContentSection>

  </main>
</template>

<script>
import { mapActions } from 'vuex'

import AppHeader from '@/components/headers/AppHeader'
import AppFormLabel from '@/components/forms/AppFormLabel'
import AppFormInput from '@/components/forms/AppFormInput'
import AppFormGroup from '@/components/forms/AppFormGroup'
import AppContentSection from '@/components/AppContentSection'
import AppButtonPrimary from '@/components/buttons/AppButtonPrimary'
import AppFormValidation from '@/components/forms/AppFormValidation'
import AppButtonLinkTertiary from '@/components/buttons/AppButtonLinkTertiary'

export default {
  middleware: ['guest'],
  head() {
    return {
      title: `${this.$t('pages.login.title')} | ${this.title}`,
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
    AppFormLabel,
    AppFormInput,
    AppFormGroup,
    AppContentSection,
    AppButtonPrimary,
    AppFormValidation,
    AppButtonLinkTertiary
  },
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      errors: {}
    }
  },
  computed: {
    missingCredentials() {
      return !this.form.email || this.form.password.length < 8
    }
  },
  asyncData({ app }) {
    return {
      title: app.head.title
    }
  },
  mounted() {
    // console.log(this.$refs.autofocus)
    this.$refs.autofocus.$el.focus()
    // console.log(this.$refs.autofocus_component)
    // this.$refs.autofocus.$el.focus()
    // console.log(this.$refs.autofocus.$el)
  },
  methods: {
    ...mapActions({
      getCart: 'cart/getCart'
    }),
    async login() {
      this.errors = {}

      try {
        await this.$auth.loginWith('local', {
          data: this.form
        })

        if (this.$route.query.redirect) {
          this.$router.push(this.$route.query.redirect)
        } else {
          this.$router.push(this.localePath({ name: 'index' }))
        }

        this.$toast.success(
          `${this.$t('toasts.welcome')}, ${this.$auth.user.name}!`
        )

        await this.getCart()
      } catch (e) {
        this.errors = e.response.data.errors
        this.$toast.error(this.errors.email)
      }
    }
  }
}
</script>
