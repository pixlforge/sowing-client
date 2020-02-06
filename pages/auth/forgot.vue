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
        {{ $t("password_email.paragraphs.first") }}
      </Heading>

      <!-- Infos -->
      <Paragraph center>
        {{ $t("password_email.paragraphs.second") }}
      </Paragraph>

      <!-- Form -->
      <form
        @submit.prevent="send"
        class="mt-36 sm:mt-72"
      >

        <!-- Email -->
        <FormGroup>
          <FormLabel name="email">
            {{ $t("forms.labels.email") }}
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
          class="mx-auto my-72"
        >
          {{ $t("buttons.password_email") }}
        </ButtonPrimary>
      </form>
    </ContentSection>
  </main>
</template>

<script>
import { mapActions } from 'vuex'

import Heading from '@/components/globals/Heading'
import FormGroup from '@/components/forms/FormGroup'
import FormLabel from '@/components/forms/FormLabel'
import FormInput from '@/components/forms/FormInput'
import ContentSection from '@/components/globals/ContentSection'
import Paragraph from '@/components/paragraphs/Paragraph'
import FormValidation from '@/components/forms/FormValidation'
import ButtonPrimary from '@/components/buttons/ButtonPrimary'

export default {
  layout: 'auth',
  middleware: ['guest'],
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
  components: {
    Heading,
    FormGroup,
    FormLabel,
    FormInput,
    ContentSection,
    Paragraph,
    FormValidation,
    ButtonPrimary
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
