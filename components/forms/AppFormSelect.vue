<template>
  <div class="relative w-full">
    <select
      :id="name"
      :name="name"
      :disabled="disabled"
      :value="value"
      :class="{
        'border-red-500': errors[name],
        'bg-gray-100': theme !== 'light',
        'bg-white': theme === 'light'
      }"
      class="block w-full appearance-none disabled:bg-white rounded-lg text-16 leading-tight text-gray-900 disabled:text-gray-200 placeholder-gray-200 outline-none border border-transparent disabled:border-gray-200 disabled:cursor-not-allowed px-16 py-12"
      :required="required"
      @change="$emit('input', $event.target.value)"
    >
      <option
        v-if="!value"
        value=""
        selected
        disabled
      >
        {{ $t("forms.select") }}
      </option>
      <slot/>
    </select>
    <font-awesome-icon
      :icon="['fas', 'caret-down']"
      :class="{
        'text-gray-200': disabled,
        'text-gray-900': !disabled
      }"
      class="absolute h-full inset-y-0 right-0 text-16 mr-20"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      required: false,
      default: null
    },
    name: {
      type: String,
      required: false,
      default: ''
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    errors: {
      type: Object,
      required: false,
      default: () => {
        return {}
      }
    },
    theme: {
      type: String,
      required: false,
      default: ''
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>
