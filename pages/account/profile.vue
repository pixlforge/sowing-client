<template>
  <div>

    <!-- Page title -->
    <Heading
      tag="h1"
      visual="h1"
    >
      {{ $t("account.profile.title") }}
    </Heading>

    <Card>
      <form @submit.prevent="update">

        <!-- Name -->
        <FormGroup>
          <FormLabel name="name">
            {{ $t("form.labels.name") }}
          </FormLabel>
          <FormInput
            v-model="form.name"
            :errors="errors"
            name="name"
          />
          <FormValidation
            :errors="errors"
            name="name"
          />
        </FormGroup>

        <!-- Email -->
        <FormGroup>
          <FormLabel name="email">
            {{ $t("form.labels.email") }}
          </FormLabel>
          <FormInput
            v-model="form.email"
            :errors="errors"
            name="email"
            type="email"
          />
          <FormValidation
            :errors="errors"
            name="email"
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
      title: `${this.$t('account.profile.title')} | ${this.$t('account.title')}`,
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
        name: '',
        email: ''
      },
      oldEmail: '',
      newEmail: '',
      errors: {}
    }
  },
  async asyncData({ app }) {
    const user = await app.$axios.$get('/user/account')

    return {
      user: user.data
    }
  },
  mounted() {
    this.hydrateUser()
  },
  methods: {
    ...mapActions({
      setUser: 'setUser',
      flash: 'alert/flash'
    }),
    async update() {
      try {
        this.oldEmail = this.$auth.user.email
        const res = await this.$axios.$patch('/user/account', {
          id: this.$auth.user.id,
          ...this.form
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
          message: this.$t('alerts.verify_email_updated')
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
    }
  }
}
</script>
