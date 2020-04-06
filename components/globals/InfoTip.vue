<template>
  <div
    :class="[
      `bg-${shopTheme}-200`,
      {
        'px-48 py-20 my-24': open,
        'px-20 py-10 my-10': !open
      }
    ]"
    class="w-full relative rounded-lg flex flex-col lg:flex-row items-start transition-all duration-200 ease-out"
  >

    <!-- Button minimize / maximize -->
    <button
      @click="open = !open"
      :class="`text-${shopTheme}-400 hover:text-${shopTheme}-500`"
      role="button"
      class="absolute top-0 right-0 transition-colors duration-200 ease-out"
    >
      <font-awesome-icon
        :icon="['fas', open ? 'window-minimize' : 'window-maximize']"
        class="text-14 transition-all duration-200 ease-out mr-36 mt-12"
      />
    </button>

    <!-- Icon -->
    <div
      :class="{
        'w-50 h-50': open,
        'w-20 h-20': !open
      }"
      class="bg-white rounded-full flex flex-shrink-0 justify-center items-center transition-all duration-200 ease-out lg:mr-20 mb-20 lg:mb-0"
    >
      <font-awesome-icon
        :icon="['far', icon]"
        :class="[
          `text-${shopTheme}-500`,
          {
            'text-30': open,
            'text-14': !open
          }
        ]"
        class="transition-all duration-200 ease-out"
      />
    </div>

    <!-- Content -->
    <div
      v-if="open"
      :class="[
        `text-${shopTheme}-600`,
        {
          'opacity-100': open,
          'opacity-0': !open
        }
      ]"
      class="text-14 leading-relaxed text-center lg:text-left transition-opacity duration-200 ease-out"
    >
      <slot/>
    </div>

  </div>
</template>

<script>
import theming from '@/mixins/theming'

export default {
  mixins: [theming],
  props: {
    icon: {
      type: String,
      required: false,
      default: 'info'
    }
  },
  data() {
    return {
      open: true
    }
  }
}
</script>
