<template>
  <button class="dropdown-parent btn shadow flex justify-center items-center px-20 xl:ml-auto">
    <font-awesome-icon
      :icon="['far', 'globe-africa']"
      class="text-18 text-green mr-10"/>
    <font-awesome-icon
      :icon="['fas', 'caret-down']"
      class="text-14 text-grey-dark"/>
    <ul class="dropdown-child list-reset text-left pin-t py-20 ml-37 mt-35 z-20">
      <li
        v-for="locale in $i18n.locales"
        :key="locale.code">
        <nuxt-link
          :to="switchLocalePath(locale.code)"
          class="link-dropdown">
          {{ locale.name }}
        </nuxt-link>
      </li>
    </ul>
  </button>
</template>

<script>
export default {};
</script>

