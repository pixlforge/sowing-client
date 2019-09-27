<template>
  <div class="bg-green-500">
    <div class="container flex flex-col md:flex-row items-center md:items-start py-36">

      <!-- Icon -->
      <div class="w-80 h-80 rounded-full bg-white flex justify-center items-center text-36 text-green-500">
        <slot name="icon">
          <AppHeaderIcon :icon="icon"/>
        </slot>
      </div>

      <div class="text-center lg:text-left md:ml-72 mt-48 md:mt-0">

        <!-- Title -->
        <slot name="title">
          <AppTitle
            semantic="h1"
            visual="header"
          >
            {{ title }}
          </AppTitle>
        </slot>

        <!-- Description -->
        <slot name="description">
          <AppHeaderDescription>
            {{ description }}
          </AppHeaderDescription>
        </slot>

        <!-- Extra markup -->
        <slot/>

      </div>
    </div>
  </div>
</template>

<script>
import AppTitle from '@/components/AppTitle'
import AppHeaderIcon from '@/components/headers/AppHeaderIcon'
import AppHeaderDescription from '@/components/headers/AppHeaderDescription'

export default {
  components: {
    AppTitle,
    AppHeaderIcon,
    AppHeaderDescription
  },
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    description: {
      type: String,
      required: false,
      default: ''
    },
    icon: {
      type: String,
      required: false,
      default: 'store'
    }
  }
}
</script>
