<template>
  <div class="bg-green flex flex-col justify-center items-center text-white text-12 py-15">
    <p>
      &copy; 2018 {{ $t("components.footer.disclaimer.rights") }}
      <a
        href="https://www.sowing.ch/"
        target="_blank"
        rel="noopener noreferrer"
        class="no-underline hover:underline text-white font-cafe uppercase">Sowing</a>.
    </p>
    <p class="mt-5">
      {{ $t("components.footer.disclaimer.made_with") }}
      <font-awesome-icon
        :icon="['fas', 'heart']"
        class="text-red"/>
      {{ $t("components.footer.disclaimer.by") }}
      <a
        href="https://www.pixlforge.ch/"
        target="_blank"
        rel="noopener noreferrer"
        class="no-underline hover:underline text-white font-semibold">Pixlforge</a>.
    </p>
  </div>
</template>
