<template>
  <div>
    <!-- Title -->
    <Heading tag="h5" visual="h5">
      {{ $t('checkout.delivery_method') }}
    </Heading>

    <!-- Select -->
    <FormSelect
      name="method"
      theme="light"
      class="mt-20"
      @change.native="$emit('input', $event.target.value)"
    >
      <option v-for="method in methods" :key="method.id" :value="method.id">
        {{ method.name }}
      </option>
    </FormSelect>
    <FormValidation :errors="errors" name="method" />
  </div>
</template>

<script>
import Heading from '@/components/globals/Heading'
import FormSelect from '@/components/forms/FormSelect'
import FormValidation from '@/components/forms/FormValidation'

export default {
  components: {
    Heading,
    FormSelect,
    FormValidation,
  },
  props: {
    methods: {
      type: Array,
      required: true,
    },
    errors: {
      type: Object,
      required: false,
      default: () => {
        return {}
      },
    },
  },
}
</script>
