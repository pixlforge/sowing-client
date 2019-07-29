<template>
  <div class="bg-green-500 flex flex-col justify-center items-center text-12 text-white py-16">
    <p>
      &copy; {{ currentYear }} {{ $t("footer.disclaimer.rights") }}
      <a
        href="https://www.sowing.ch/"
        target="_blank"
        rel="noopener noreferrer"
        class="no-underline hover:underline text-white uppercase">Sowing</a>.
    </p>
    <p>
      {{ $t("footer.disclaimer.made_with") }}
      <font-awesome-icon
        :icon="['fas', 'heart']"
        class="text-red-500"/>
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
      return new Date().getFullYear()
    }
  }
}
</script>
