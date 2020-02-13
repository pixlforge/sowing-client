<template>
  <FormFieldset>
    <div class="flex flex-wrap">
      <div
        v-for="(locale, index) of form.name"
        :key="index"
        class="w-full lg:w-1/2"
      >
        <input
          v-model="form.name[index]"
          :placeholder="`Type name in ${index}`"
          type="text"
          class="w-full h-40 border-2 border-dashed border-gray-200 rounded-lg mb-10"
        >
      </div>
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
