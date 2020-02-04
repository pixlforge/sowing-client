<template>
  <main>

    <!-- Content -->
    <ContentSection class="max-w-600">

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
        <FormGroup>
          <FormLabel name="user">
            {{ $t("forms.labels.email") }}
          </FormLabel>
          <FormInput
            ref="autofocus"
            v-model="form.email"
            :errors="errors"
            name="user"
            type="email"
            required
          />
          <FormValidation
            :errors="errors"
            name="user"
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

        <!-- Submit -->
        <ButtonPrimary
          type="submit"
          icon="redo-alt"
          class="mx-auto my-72"
        >
          {{ $t("buttons.password_reset") }}
        </ButtonPrimary>
      </form>
    </ContentSection>
  </main>
</template>

<script>
import { mapActions } from 'vuex'

import Heading from '@/components/Heading'
import FormGroup from '@/components/forms/FormGroup'
import FormLabel from '@/components/forms/FormLabel'
import FormInput from '@/components/forms/FormInput'
import ContentSection from '@/components/ContentSection'
import FormValidation from '@/components/forms/FormValidation'
import ButtonPrimary from '@/components/buttons/ButtonPrimary'

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
    FormGroup,
    FormLabel,
    FormInput,
    ContentSection,
    FormValidation,
    ButtonPrimary
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
