<template>
  <div>

    <!-- Page title -->
    <Heading
      tag="h1"
      visual="h1"
    >
      {{ $t("pages.account.password.title") }}
    </Heading>

    <Card>
      <form @submit.prevent="update">

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
          />
        </FormGroup>

        <!-- Save changes -->
        <AppButtonPrimary
          icon="check"
          type="submit"
        >
          {{ $t("buttons.update") }}
        </AppButtonPrimary>
      </form>
    </Card>
    </card></div>
</template>

<script>
import { mapActions } from 'vuex'

import Card from '@/components/Card'
import Heading from '@/components/Heading'
import FormGroup from '@/components/forms/FormGroup'
import FormInput from '@/components/forms/FormInput'
import FormLabel from '@/components/forms/FormLabel'
import FormValidation from '@/components/forms/FormValidation'
import AppButtonPrimary from '@/components/buttons/AppButtonPrimary'

export default {
  components: {
    Card,
    Heading,
    FormGroup,
    FormInput,
    FormLabel,
    FormValidation,
    AppButtonPrimary
  },
  middleware: ['authenticated'],
  layout: 'account-management',
  head() {
    return {
      title: `${this.$t('pages.account.password.title')} | ${this.$t('pages.account.title')}`,
      meta: [
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
        password: '',
        password_confirmation: ''
      },
      errors: {}
    }
  },
  methods: {
    ...mapActions({
      flash: 'alert/flash'
    }),
    async update() {
      try {
        await this.$axios.$patch('/user/account', { ...this.form })
        this.displaySuccessFeedback()
        this.resetFields()
      } catch (e) {
        this.errors = e.response.data.errors
        this.displayErrorsFeedback()
      }
    },
    displaySuccessFeedback() {
      this.flash({
        type: 'success',
        message: this.$t('alerts.password_updated')
      })
      this.$toast.success(this.$t('alerts.password_updated'))
    },
    displayErrorsFeedback() {
      this.$toast.error(this.$t('toasts.validation'))
    },
    resetFields() {
      this.form = {
        password: '',
        password_confirmation: ''
      }

      this.errors = {}
    }
  }
}
</script>
