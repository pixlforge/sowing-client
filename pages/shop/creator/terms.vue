<template>
  <main>

    <!-- Header -->
    <Header>
      <template slot="icon">
        <font-awesome-icon :icon="['far', 'store']"/>
      </template>
      <template slot="title">
        <h1 class="header-title">{{ $t("pages.shop.creation") }}</h1>
      </template>
    </Header>

    <!-- Page contents -->
    <section class="container section">
      
      <!-- Terms -->
      <AppTerms/>

      <!-- Controls -->
      <div class="flex flex-col items-center">
        <div class="text-18 text-center leading-normal mt-80">
          <label
            for="terms"
            class="select-none">
            <input
              id="terms"
              v-model="localTerms"
              type="checkbox"
              name="terms"
              class="mr-10">
            {{ $t("pages.terms.approve") }}
          </label>
          <small class="block text-grey-lighter">
            {{ $t("pages.terms.must_approve") }}
          </small>
        </div>

        <button
          :disabled="!terms"
          :class="{ 'btn-disabled': !terms }"
          class="btn btn-primary mt-80"
          @click.prevent="next">
          <font-awesome-icon
            :icon="['far', 'chevron-circle-right']"
            class="mr-5"/>
          {{ $t("buttons.begin_shop_creation") }}
        </button>
      </div>
    </section>

  </main>
</template>

<script>
import Header from "@/components/Header";
import AppTerms from "@/components/terms/AppTerms";
import { mapGetters, mapActions } from "vuex";

export default {
  middleware: ["authenticated"],
  head() {
    return {
      title: `${this.title} | ${this.$t("pages.terms.title")}`
    };
  },
  components: {
    Header,
    AppTerms
  },
  computed: {
    ...mapGetters({
      terms: "shop/terms"
    }),
    localTerms: {
      get() {
        return this.terms;
      },
      set(terms) {
        this.setTerms(terms);
      }
    }
  },
  async asyncData({ app }) {
    return {
      title: app.head.title
    };
  },
  methods: {
    ...mapActions({
      setTerms: "shop/setTerms"
    }),
    next() {
      if (this.terms) {
        this.$router.push(this.localePath({ name: "shop-creator-name" }));
      }
    }
  }
};
</script>
