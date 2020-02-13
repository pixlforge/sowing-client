<template>
  <FormFieldset>
    <div
      v-for="(locale, index) of form.name"
      :key="index"
    >
      <input
        v-model="form.name[index]"
        type="text"
        class="block border-2 border-gray-400 rounded-lg mb-10 h-40"
      >
    </div>
  </FormFieldset>
</template>

<script>
import FormFieldset from '@/components/forms/FormFieldset'

export default {
  components: {
    FormFieldset
  },
  props: {
    type: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      form: {
        name: this.type.name
      }
    }
  }
}
</script>
