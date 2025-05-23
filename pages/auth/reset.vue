<template>
  <div>
    <!-- Page title -->
    <Heading tag="h1" visual="h4" utilities="text-center">
      {{ $t('password_reset.title') }}
    </Heading>

    <!-- Instructions -->
    <Paragraph class="text-center mx-auto my-36">
      {{ $t('password_reset.instructions') }}
    </Paragraph>

    <form class="mt-36 sm:mt-72" @submit.prevent="reset">
      <!-- Email -->
      <FormGroup>
        <FormLabel name="user">
          {{ $t('form.email.label') }}
        </FormLabel>
        <FormInput
          ref="autofocus"
          v-model="form.email"
          :errors="errors"
          name="user"
          type="email"
          required
        />
        <FormValidation :errors="errors" name="user" />
      </FormGroup>

      <!-- Password -->
      <FormGroup>
        <FormLabel name="password">
          {{ $t('form.password.label') }}
        </FormLabel>
        <FormInput
          v-model="form.password"
          :errors="errors"
          name="password"
          type="password"
          required
        />
        <FormValidation :errors="errors" name="password" />
      </FormGroup>

      <!-- Password confirmation -->
      <FormGroup>
        <FormLabel name="password_confirmation">
          {{ $t('form.password_confirmation.label') }}
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
      <ButtonPrimary type="submit" icon="redo-alt" class="mx-auto mt-36">
        {{ $t('button.password_reset') }}
      </ButtonPrimary>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import FormGroup from '@/components/forms/FormGroup'
import FormInput from '@/components/forms/FormInput'
import FormLabel from '@/components/forms/FormLabel'
import FormValidation from '@/components/forms/FormValidation'
import Heading from '@/components/globals/Heading'
import Paragraph from '@/components/paragraphs/Paragraph'

export default {
  components: {
    ButtonPrimary,
    FormGroup,
    FormInput,
    FormLabel,
    FormValidation,
    Heading,
    Paragraph,
  },
  layout: 'auth',
  middleware: ['guest'],
  data() {
    return {
      form: {
        token: null,
        email: '',
        password: '',
        password_confirmation: '',
      },
      errors: {},
    }
  },
  head() {
    return {
      title: this.$t('password_reset.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '',
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex',
        },
      ],
    }
  },
  mounted() {
    this.$refs.autofocus.$el.focus()
    this.form.token = this.$route.query.token
  },
  methods: {
    ...mapActions({
      flash: 'alert/flash',
    }),
    async reset() {
      if (!this.form.token) {
        return
      }

      this.errors = {}

      try {
        const res = await this.$axios.$post('/auth/reset', this.form)
        this.$toast.success(res.message)
        this.flash({
          message: res.message,
          type: 'success',
        })
        this.$router.push({ name: 'auth-login' })
      } catch (e) {
        this.errors = e.response.data.errors

        for (const error in this.errors) {
          this.$toast.error(this.errors[error])
        }
      }
    },
  },
}
</script>
