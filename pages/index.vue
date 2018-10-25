<template>
  <div>
    <div class="container">

      <!-- Features section -->
      <section class="section">
        <h1 class="title-large text-center mt-100">{{ $t("pages.home.titles.features") }}</h1>

        <div class="flex flex-wrap justify-between">

          <!-- Feature 1 -->
          <Feature icon="lightbulb">
            <template slot="title">
              {{ $t("pages.home.features.first.title") }}
            </template>
            {{ $t("pages.home.features.first.body") }}
          </Feature>

          <!-- Feature 2 -->
          <Feature icon="eye">
            <template slot="title">
              {{ $t("pages.home.features.second.title") }}
            </template>
            {{ $t("pages.home.features.second.body") }}
          </Feature>

          <!-- Feature 3 -->
          <Feature icon="rocket">
            <template slot="title">
              {{ $t("pages.home.features.third.title") }}
            </template>
            {{ $t("pages.home.features.third.body") }}
          </Feature>

          <!-- Feature 4 -->
          <Feature icon="shield-check">
            <template slot="title">
              {{ $t("pages.home.features.fourth.title") }}
            </template>
            {{ $t("pages.home.features.fourth.body") }}
          </Feature>
          
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Feature from "@/components/Feature";

export default {
  components: {
    Feature
  }
};
</script>
