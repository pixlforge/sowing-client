<template>
  <div>

    <!-- Page title -->
    <Heading
      tag="h1"
      visual="h4"
      utilities="text-center"
    >
      {{ $t("password_email.paragraphs.first") }}
    </Heading>

    <!-- Instructions -->
    <Paragraph class="text-center mx-auto my-36">
      {{ $t("password_email.paragraphs.second") }}
    </Paragraph>

    <!-- Form -->
    <form
      @submit.prevent="send"
      class="mt-36"
    >

      <!-- Email -->
      <FormGroup>
        <FormLabel name="email">
          {{ $t("form.email.label") }}
        </FormLabel>
        <FormInput
          ref="autofocus"
          v-model="email"
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

      <!-- Submit -->
      <ButtonPrimary
        type="submit"
        icon="redo-alt"
        class="mx-auto mt-36"
      >
        {{ $t("buttons.password_email") }}
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
    Paragraph
  },
  middleware: ['guest'],
  layout: 'auth',
  head() {
    return {
      title: this.$t('password_email.title'),
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
      email: '',
      errors: {}
    }
  },
  mounted() {
    this.$refs.autofocus.$el.focus()
  },
  methods: {
    ...mapActions({
      flash: 'alert/flash'
    }),
    async send() {
      this.errors = {}

      try {
        const res = await this.$axios.$post('/auth/forgot', { email: this.email })
        this.$toast.success(res.message)
        this.flash({ message: res.message, type: 'success' })
        this.$router.push({ name: 'auth-login' })
      } catch (e) {
        this.errors = e.response.data.errors
        this.$toast.error(this.errors.email)
      }
    }
  }
}
</script>
