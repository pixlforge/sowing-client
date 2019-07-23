<template>
  <div>

    <!-- Title -->
    <AppTitle
      semantic="h5"
      visual="h5">
      {{ $t("pages.checkout.delivery_method") }}
    </AppTitle>

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
import AppTitle from '@/components/AppTitle';

export default {
  components: {
    AppTitle
  },
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
