<template>
  <div>
    <!-- Page title -->
    <Heading tag="h1" visual="h1">
      {{ $t('account.profile.title') }}
    </Heading>

    <Card>
      <form @submit.prevent="update">
        <!-- Name -->
        <FormGroup>
          <FormLabel name="name">
            {{ $t('form.name.label') }}
          </FormLabel>
          <FormInput v-model="form.name" :errors="errors" name="name" />
          <FormValidation :errors="errors" name="name" />
        </FormGroup>

        <!-- Email -->
        <FormGroup>
          <FormLabel name="email">
            {{ $t('form.email.label') }}
          </FormLabel>
          <FormInput
            v-model="form.email"
            :errors="errors"
            name="email"
            type="email"
          />
          <FormValidation :errors="errors" name="email" />
        </FormGroup>

        <!-- Save changes -->
        <ButtonPrimary icon="check" type="submit">
          {{ $t('button.update') }}
        </ButtonPrimary>
      </form>
    </Card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import Card from '@/components/globals/Card'
import FormGroup from '@/components/forms/FormGroup'
import FormInput from '@/components/forms/FormInput'
import FormLabel from '@/components/forms/FormLabel'
import FormValidation from '@/components/forms/FormValidation'
import Heading from '@/components/globals/Heading'

export default {
  components: {
    ButtonPrimary,
    Card,
    FormGroup,
    FormInput,
    FormLabel,
    FormValidation,
    Heading,
  },
  layout: 'account-management',
  middleware: ['authenticated'],
  async asyncData({ app }) {
    const user = await app.$axios.$get('/user/account')

    return {
      user: user.data,
    }
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
      },
      oldEmail: '',
      newEmail: '',
      errors: {},
    }
  },
  head() {
    return {
      title: `${this.$t('account.profile.title')} | ${this.$t(
        'account.title'
      )}`,
      meta: [
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex',
        },
      ],
    }
  },
  mounted() {
    this.hydrateUser()
  },
  methods: {
    ...mapActions({
      setUser: 'setUser',
      flash: 'alert/flash',
    }),
    async update() {
      try {
        this.oldEmail = this.$auth.user.email
        const res = await this.$axios.$patch('/user/account', {
          id: this.$auth.user.id,
          ...this.form,
        })
        this.setUser(res.data)
        this.newEmail = this.$auth.user.email
        this.displaySuccessFeedback()
      } catch (e) {
        this.errors = e.response.data.errors
        this.displayErrorsFeedback()
      }
    },
    displaySuccessFeedback() {
      if (this.newEmail !== this.oldEmail) {
        this.flash({
          type: 'success',
          message: this.$t('alerts.verify_email_updated'),
        })
      }
      this.$toast.success(this.$t('account.profile.updated'))
    },
    displayErrorsFeedback() {
      this.$toast.error(this.$t('toasts.validation'))
    },
    hydrateUser() {
      this.form.name = this.user.name
      this.form.email = this.user.email
    },
  },
}
</script>
