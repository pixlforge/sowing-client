<template>
  <div>
    <form
      class="flex flex-col mt-20"
      @submit.prevent="store">

      <!-- First name -->
      <div>
        <label
          for="first_name"
          class="label">
          {{ $t("components.forms.labels.first_name") }}
        </label>
        <input
          id="first_name"
          v-model="form.first_name"
          :class="{ 'border-red': errors.first_name, 'border-green-lightest': !errors.first_name }"
          type="text"
          name="first_name"
          class="input-base bg-white shadow-inner border">
        <template v-if="errors.first_name">
          <p class="input-error">{{ errors.first_name[0] }}</p>
        </template>
      </div>

      <!-- Last name -->
      <div class="mt-20">
        <label
          for="last_name"
          class="label">
          {{ $t("components.forms.labels.last_name") }}
        </label>
        <input
          id="last_name"
          v-model="form.last_name"
          :class="{ 'border-red': errors.last_name, 'border-green-lightest': !errors.last_name }"
          type="text"
          name="last_name"
          class="input-base bg-white shadow-inner border">
        <template v-if="errors.last_name">
          <p class="input-error">{{ errors.last_name[0] }}</p>
        </template>
      </div>

      <!-- Company name -->
      <div class="mt-20">
        <label
          for="company_name"
          class="label">
          {{ $t("components.forms.labels.company_name") }}
        </label>
        <input
          id="company_name"
          v-model="form.company_name"
          :class="{ 'border-red': errors.company_name, 'border-green-lightest': !errors.company_name }"
          type="text"
          name="company_name"
          class="input-base bg-white shadow-inner border">
        <template v-if="errors.company_name">
          <p class="input-error">{{ errors.company_name[0] }}</p>
        </template>
      </div>

      <!-- Address line 1 -->
      <div class="mt-20">
        <label
          for="address_line_1"
          class="label">
          {{ $t("components.forms.labels.address_line_1") }}
        </label>
        <input
          id="address_line_1"
          v-model="form.address_line_1"
          :class="{ 'border-red': errors.address_line_1, 'border-green-lightest': !errors.address_line_1 }"
          type="text"
          name="address_line_1"
          class="input-base bg-white shadow-inner border">
        <template v-if="errors.address_line_1">
          <p class="input-error">{{ errors.address_line_1[0] }}</p>
        </template>
      </div>

      <!-- Address line 2 -->
      <div class="mt-20">
        <label
          for="address_line_2"
          class="label">
          {{ $t("components.forms.labels.address_line_2") }}
        </label>
        <input
          id="address_line_2"
          v-model="form.address_line_2"
          :class="{ 'border-red': errors.address_line_2, 'border-green-lightest': !errors.address_line_2 }"
          type="text"
          name="address_line_2"
          class="input-base bg-white shadow-inner border">
        <template v-if="errors.address_line_2">
          <p class="input-error">{{ errors.address_line_2[0] }}</p>
        </template>
      </div>

      <!-- Postal code -->
      <div class="mt-20">
        <label
          for="postal_code"
          class="label">
          {{ $t("components.forms.labels.postal_code") }}
        </label>
        <input
          id="postal_code"
          v-model="form.postal_code"
          :class="{ 'border-red': errors.postal_code, 'border-green-lightest': !errors.postal_code }"
          type="text"
          name="postal_code"
          class="input-base bg-white shadow-inner border">
        <template v-if="errors.postal_code">
          <p class="input-error">{{ errors.postal_code[0] }}</p>
        </template>
      </div>

      <!-- City -->
      <div class="mt-20">
        <label
          for="city"
          class="label">
          {{ $t("components.forms.labels.city") }}
        </label>
        <input
          id="city"
          v-model="form.city"
          :class="{ 'border-red': errors.city, 'border-green-lightest': !errors.city }"
          type="text"
          name="city"
          class="input-base bg-white shadow-inner border">
        <template v-if="errors.city">
          <p class="input-error">{{ errors.city[0] }}</p>
        </template>
      </div>

      <!-- Country -->
      <CountryDropdown
        v-model="form.country_id"
        :errors="errors.country_id"
        class="mt-20"/>

      <!-- Submit -->
      <div class="flex mt-30">
        <button
          type="submit"
          class="btn btn-primary mr-20">
          {{ $t("components.forms.buttons.create") }}
        </button>
        <button
          class="btn btn-default"
          @click.prevent="closeAddressCreator">
          {{ $t("components.forms.buttons.cancel") }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import CountryDropdown from "@/components/forms/CountryDropdown";
import { mapActions } from "vuex";

export default {
  components: {
    CountryDropdown
  },
  data() {
    return {
      form: {
        first_name: "",
        last_name: "",
        company_name: "",
        address_line_1: "",
        address_line_2: "",
        postal_code: "",
        city: "",
        country_id: "",
        is_default: true
      },
      errors: {}
    };
  },
  methods: {
    ...mapActions({
      closeAddressCreator: "checkout/closeAddressCreator"
    }),

    async store() {
      try {
        let res = await this.$axios.$post("/addresses", this.form);
        this.$emit("address:created", res.data);
      } catch (e) {
        this.$toast.error(this.$t("toasts.validation"));
        this.errors = e.response.data.errors;
      }
    }
  }
};
</script>
