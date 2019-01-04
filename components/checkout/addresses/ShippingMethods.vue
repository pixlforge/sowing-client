<template>
  <div>
    <h5 class="text-20 text-green-darkest">{{ $t("pages.checkout.delivery_method") }}</h5>
    <form class="mt-20">
      <div class="relative">
        <select
          id="method"
          :class="{ 'border-red': errors.length, 'border-green-lightest': !errors.length }"
          name="method"
          class="select bg-white shadow-inner border"
          @change="$emit('input', $event.target.value)">
          <option
            value=""
            disabled>
            {{ $t("forms.select") }}
          </option>
          <option
            v-for="method in methods"
            :key="method.id"
            :value="method.id">
            {{ method.name }}
          </option>
        </select>
        <font-awesome-icon
          :icon="['fas', 'caret-down']"
          class="select-caret"/>
      </div>
      <template v-if="errors">
        <p class="input-error">{{ errors[0] }}</p>
      </template>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    methods: {
      type: Array,
      required: true
    },
    errors: {
      type: Array,
      required: false,
      default() {
        return [];
      }
    }
  }
};
</script>
