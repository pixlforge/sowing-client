<template>
  <button class="dropdown-parent btn shadow flex justify-center items-center px-20 xl:ml-auto">
    <font-awesome-icon
      :icon="['far', 'globe-africa']"
      class="text-18 text-green mr-10"/>
    <font-awesome-icon
      :icon="['fas', 'caret-down']"
      class="text-14 text-grey-dark"/>
    <ul class="dropdown-child list-reset text-left pin-t py-20 ml-37 mt-35">
      <li>
        <nuxt-link
          :to="switchLocalePath('fr')"
          class="block no-underline text-grey-dark hover:text-green pl-30 py-5">
          Français
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          :to="switchLocalePath('en')"
          class="block no-underline text-grey-dark hover:text-green pl-30 py-5">
          English
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          :to="switchLocalePath('de')"
          class="block no-underline text-grey-dark hover:text-green pl-30 py-5">
          Deutsch
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          :to="switchLocalePath('it')"
          class="block no-underline text-grey-dark hover:text-green pl-30 py-5">
          Italiano
        </nuxt-link>
      </li>
    </ul>
  </button>
</template>

<script>
export default {};
</script>

