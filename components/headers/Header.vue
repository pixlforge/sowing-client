<template>
  <div class="bg-green-500">
    <div class="container flex items-center md:items-start py-36">

      <!-- Icon -->
      <div class="w-50 sm:w-80 h-50 sm:h-80 rounded-full bg-white flex flex-shrink-0 justify-center items-center text-20 sm:text-36 text-green-500">
        <slot name="icon">
          <HeaderIcon :icon="icon"/>
        </slot>
      </div>

      <div class="ml-24 md:ml-72">

        <!-- Title -->
        <slot name="title">
          <Heading
            tag="h1"
            visual="header"
          >
            {{ title }}
          </Heading>
        </slot>

        <!-- Description -->
        <slot name="description">
          <HeaderDescription class="hidden sm:block">
            {{ description }}
          </HeaderDescription>
        </slot>

        <!-- Extra markup -->
        <slot/>

      </div>
    </div>
  </div>
</template>

<script>
import Heading from '@/components/Heading'
import HeaderIcon from '@/components/headers/HeaderIcon'
import HeaderDescription from '@/components/headers/HeaderDescription'

export default {
  components: {
    Heading,
    HeaderIcon,
    HeaderDescription
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
