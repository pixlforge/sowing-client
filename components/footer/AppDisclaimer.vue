<template>
  <div class="disclaimer__container">
    <p>
      &copy; {{ currentYear }} {{ $t("footer.disclaimer.rights") }}
      <a
        href="https://www.sowing.ch/"
        target="_blank"
        rel="noopener noreferrer"
        class="disclaimer__brand-link">Sowing</a>.
    </p>
    <p class="disclaimer__made-by">
      {{ $t("footer.disclaimer.made_with") }}
      <font-awesome-icon
        :icon="['fas', 'heart']"
        class="disclaimer__heart-icon"/>
      {{ $t("footer.disclaimer.by") }}
      <a
        href="https://www.pixlforge.ch/"
        target="_blank"
        rel="noopener noreferrer"
        class="disclaimer__link">Pixlforge</a>.
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>
