<template>
  <div>

    <!-- Title -->
    <AppTitle
      semantic="h5"
      visual="h5"
    >
      {{ $t("pages.checkout.delivery_method") }}
    </AppTitle>

    <!-- Select -->
    <AppFormSelect
      name="method"
      theme="light"
      class="mt-20"
      @change.native="$emit('input', $event.target.value)"
    >
      <option
        v-for="method in methods"
        :key="method.id"
        :value="method.id"
      >
        {{ method.name }}
      </option>
    </AppFormSelect>
    <AppFormValidation
      :errors="errors"
      name="method"
    />
  </div>
</template>

<script>
import AppTitle from '@/components/AppTitle'
import AppFormSelect from '@/components/forms/AppFormSelect'
import AppFormValidation from '@/components/forms/AppFormValidation'

export default {
  components: {
    AppTitle,
    AppFormSelect,
    AppFormValidation
  },
  props: {
    methods: {
      type: Array,
      required: true
    },
    errors: {
      type: Object,
      required: false,
      default: () => {
        return {}
      }
    }
  }
}
</script>
