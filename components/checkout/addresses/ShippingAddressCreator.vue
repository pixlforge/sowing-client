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
          First name
        </label>
        <input
          id="first_name"
          v-model="form.first_name"
          type="text"
          name="first_name"
          class="input-base bg-white shadow-inner"
          required>
      </div>

      <!-- Last name -->
      <div class="mt-20">
        <label
          for="last_name"
          class="label">
          Last name
        </label>
        <input
          id="last_name"
          v-model="form.last_name"
          type="text"
          name="last_name"
          class="input-base bg-white shadow-inner"
          required>
      </div>

      <!-- Company name -->
      <div class="mt-20">
        <label
          for="company_name"
          class="label">
          Company name
        </label>
        <input
          id="company_name"
          v-model="form.company_name"
          type="text"
          name="company_name"
          class="input-base bg-white shadow-inner">
      </div>

      <!-- Address line 1 -->
      <div class="mt-20">
        <label
          for="address_line_1"
          class="label">
          Address line 1
        </label>
        <input
          id="address_line_1"
          v-model="form.address_line_1"
          type="text"
          name="address_line_1"
          class="input-base bg-white shadow-inner"
          required>
      </div>

      <!-- Address line 2 -->
      <div class="mt-20">
        <label
          for="address_line_2"
          class="label">
          Address line 2
        </label>
        <input
          id="address_line_2"
          v-model="form.address_line_2"
          type="text"
          name="address_line_2"
          class="input-base bg-white shadow-inner">
      </div>

      <!-- Postal code -->
      <div class="mt-20">
        <label
          for="postal_code"
          class="label">
          Postal code
        </label>
        <input
          id="postal_code"
          v-model="form.postal_code"
          type="text"
          name="postal_code"
          class="input-base bg-white shadow-inner"
          required>
      </div>

      <!-- City -->
      <div class="mt-20">
        <label
          for="city"
          class="label">
          City
        </label>
        <input
          id="city"
          v-model="form.city"
          type="text"
          name="city"
          class="input-base bg-white shadow-inner"
          required>
      </div>

      <!-- Country -->
      <div class="mt-20">
        <label
          for="country_id"
          class="label">
          Country
        </label>
        <div class="relative">
          <select
            id="country_id"
            v-model="form.country_id"
            name="country_id"
            class="select bg-white shadow-inner"
            required>
            <option
              :value="4"
              selected>
              Switzerland
            </option>
          </select>
          <font-awesome-icon
            :icon="['fas', 'caret-down']"
            class="select-caret"/>
        </div>
      </div>

      <!-- Submit -->
      <div class="flex justify-between mt-30">
        <button
          type="submit"
          class="btn btn-primary">
          Créer l'adresse
        </button>
        <button
          class="btn btn-default"
          @click.prevent="closeAddressCreator">
          Annuler
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
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
      }
    };
  },
  methods: {
    ...mapActions({
      closeAddressCreator: "checkout/closeAddressCreator"
    }),

    async store() {
      let res = await this.$axios.$post("/addresses", this.form);
      this.$emit("address:created", res.data);
    }
  }
};
</script>
