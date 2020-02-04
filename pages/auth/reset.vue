<template>
  <main>

    <!-- Content -->
    <AppContentSection class="max-w-600">

      <!-- Page title -->
      <Heading
        tag="h1"
        visual="h1"
        utilities="md:text-center"
      >
        {{ $t("pages.password_reset.title") }}
      </Heading>

      <form
        @submit.prevent="reset"
        class="mt-36 sm:mt-72"
      >

        <!-- Email -->
        <AppFormGroup>
          <AppFormLabel name="user">
            {{ $t("forms.labels.email") }}
          </AppFormLabel>
          <AppFormInput
            ref="autofocus"
            v-model="form.email"
            :errors="errors"
            name="user"
            type="email"
            required
          />
          <AppFormValidation
            :errors="errors"
            name="user"
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

        <!-- Submit -->
        <AppButtonPrimary
          type="submit"
          icon="redo-alt"
          class="mx-auto my-72"
        >
          {{ $t("buttons.password_reset") }}
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
import AppFormValidation from '@/components/forms/AppFormValidation'
import AppButtonPrimary from '@/components/buttons/AppButtonPrimary'

export default {
  layout: 'auth',
  middleware: ['guest'],
  head() {
    return {
      title: this.$t('pages.password_reset.title'),
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
    AppFormValidation,
    AppButtonPrimary
  },
  data() {
    return {
      form: {
        token: null,
        email: '',
        password: '',
        password_confirmation: ''
      },
      errors: {}
    }
  },
  mounted() {
    this.$refs.autofocus.$el.focus()
    this.form.token = this.$route.query.token
  },
  methods: {
    ...mapActions({
      flash: 'alert/flash'
    }),
    async reset() {
      if (!this.form.token) {
        return
      }

      try {
        const res = await this.$axios.$post('/auth/reset', this.form)
        this.$toast.success(res.message)
        this.flash({
          message: res.message,
          type: 'success'
        })
        this.$router.push({ name: 'auth-login' })
      } catch (e) {
        this.errors = e.response.data.errors

        for (const error in this.errors) {
          this.$toast.error(this.errors[error])
        }
      }
    }
  }
}
</script>
