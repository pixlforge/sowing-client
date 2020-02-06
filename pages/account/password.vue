<template>
  <div>

    <!-- Page title -->
    <Heading
      tag="h1"
      visual="h1"
    >
      {{ $t("account.password.title") }}
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
        <ButtonPrimary
          icon="check"
          type="submit"
        >
          {{ $t("buttons.update") }}
        </ButtonPrimary>
      </form>
    </Card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import Heading from '@/components/globals/Heading'
import Card from '@/components/globals/Card'
import FormGroup from '@/components/forms/FormGroup'
import FormInput from '@/components/forms/FormInput'
import FormLabel from '@/components/forms/FormLabel'
import FormValidation from '@/components/forms/FormValidation'
import ButtonPrimary from '@/components/buttons/ButtonPrimary'

export default {
  components: {
    Heading,
    Card,
    FormGroup,
    FormInput,
    FormLabel,
    FormValidation,
    ButtonPrimary
  },
  middleware: ['authenticated'],
  layout: 'account-management',
  head() {
    return {
      title: `${this.$t('account.password.title')} | ${this.$t('account.title')}`,
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
