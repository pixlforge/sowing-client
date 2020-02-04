<template>
  <div>

    <!-- Title -->
    <Heading
      tag="h5"
      visual="h5"
    >
      {{ $t("pages.checkout.delivery_method") }}
    </Heading>

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
import Heading from '@/components/Heading'
import AppFormSelect from '@/components/forms/AppFormSelect'
import AppFormValidation from '@/components/forms/AppFormValidation'

export default {
  components: {
    Heading,
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
