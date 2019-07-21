<template>
  <div>
    <h5 class="title__medium">
      {{ $t("pages.checkout.delivery_method") }}
    </h5>
    <div class="form__select-group form__select-group--spaced">
      <select
        id="method"
        :class="{ 'border-red': errors.length }"
        name="method"
        class="form__select form__select--white"
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
        class="form__select-caret"/>
      <template v-if="errors">
        <p class="form__feedback">
          {{ errors[0] }}
        </p>
      </template>
    </div>
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
