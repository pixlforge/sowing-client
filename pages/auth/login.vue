<template>
  <main>

    <!-- Page contents -->
    <ContentSection class="max-w-600">

      <!-- Page title -->
      <Heading
        tag="h1"
        visual="h1"
        utilities="md:text-center"
      >
        {{ $t('pages.login.title') }}
      </Heading>

      <form
        @submit.prevent="login"
        class="mt-36 sm:mt-72"
      >

        <!-- Email -->
        <FormGroup>
          <FormLabel name="email">
            {{ $t("forms.labels.email") }}
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
            {{ $t("forms.labels.password") }}
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
            {{ $t("pages.login.links.password") }}
          </ButtonLinkTertiary>

          <!-- Register an account -->
          <ButtonLinkTertiary :route="{ name: 'auth-register' }">
            {{ $t("pages.login.links.register") }}
          </ButtonLinkTertiary>
        </div>

        <!-- Submit -->
        <ButtonPrimary
          :disabled="missingCredentials"
          type="submit"
          icon="key"
          class="shadow-xl mx-auto my-36 md:my-60"
        >
          {{ $t("buttons.connection") }}
        </ButtonPrimary>
      </form>
    </ContentSection>

  </main>
</template>

<script>
import { mapActions } from 'vuex'

import Heading from '@/components/Heading'
import FormLabel from '@/components/forms/FormLabel'
import FormInput from '@/components/forms/FormInput'
import FormGroup from '@/components/forms/FormGroup'
import ContentSection from '@/components/ContentSection'
import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import FormValidation from '@/components/forms/FormValidation'
import ButtonLinkTertiary from '@/components/buttons/ButtonLinkTertiary'

export default {
  layout: 'auth',
  middleware: ['guest'],
  head() {
    return {
      title: this.$t('pages.login.title'),
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
    FormLabel,
    FormInput,
    FormGroup,
    ContentSection,
    ButtonPrimary,
    FormValidation,
    ButtonLinkTertiary
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
