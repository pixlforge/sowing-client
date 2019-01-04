<template>
  <div class="bg-green flex flex-col justify-center items-center text-12 text-white py-15">
    <p>
      &copy; 2018 &ndash; {{ currentYear }} {{ $t("footer.disclaimer.rights") }}
      <a
        href="https://www.sowing.ch/"
        target="_blank"
        rel="noopener noreferrer"
        class="no-underline hover:underline text-white font-cafe uppercase">Sowing</a>.
    </p>
    <p class="mt-5">
      {{ $t("footer.disclaimer.made_with") }}
      <font-awesome-icon
        :icon="['fas', 'heart']"
        class="text-red"/>
      {{ $t("footer.disclaimer.by") }}
      <a
        href="https://www.pixlforge.ch/"
        target="_blank"
        rel="noopener noreferrer"
        class="no-underline hover:underline text-white font-semibold">Pixlforge</a>.
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
