<template>
  <div>

    <!-- Page title -->
    <Heading
      tag="h1"
      visual="h4"
      utilities="text-center"
    >
      {{ $t('login.title') }}
    </Heading>

    <form
      @submit.prevent="login"
      class="mt-36"
    >

      <!-- Email -->
      <FormGroup>
        <FormLabel name="email">
          {{ $t("form.email.label") }}
        </FormLabel>
        <FormInput
          ref="autofocus"
          v-model="form.email"
          :errors="errors"
          name="email"
          type="email"
          placeholder="elon@musk.ch"
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
          {{ $t("form.password.label") }}
        </FormLabel>
        <FormInput
          v-model="form.password"
          name="password"
          type="password"
          placeholder="••••••••"
          required
        />
      </FormGroup>

      <div class="flex flex-wrap justify-center my-36 md:my-60">

        <!-- Password forgotten -->
        <ButtonLinkTertiary :route="{ name: 'auth-forgot' }">
          {{ $t("login.links.password") }}
        </ButtonLinkTertiary>

        <!-- Register an account -->
        <ButtonLinkTertiary :route="{ name: 'auth-register' }">
          {{ $t("login.links.register") }}
        </ButtonLinkTertiary>
      </div>

      <!-- Submit -->
      <ButtonPrimary
        :disabled="missingCredentials"
        type="submit"
        icon="key"
        class="mx-auto mt-36"
      >
        {{ $t("button.connection") }}
      </ButtonPrimary>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import ButtonLinkTertiary from '@/components/buttons/ButtonLinkTertiary'
import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import FormGroup from '@/components/forms/FormGroup'
import FormInput from '@/components/forms/FormInput'
import FormLabel from '@/components/forms/FormLabel'
import FormValidation from '@/components/forms/FormValidation'
import Heading from '@/components/globals/Heading'

export default {
  components: {
    ButtonLinkTertiary,
    ButtonPrimary,
    FormGroup,
    FormInput,
    FormLabel,
    FormValidation,
    Heading
  },
  layout: 'auth',
  middleware: ['guest'],
  head() {
    return {
      title: this.$t('login.title'),
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
  mounted() {
    this.$refs.autofocus.$el.focus()
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
          this.$router.push({ name: 'index' })
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
