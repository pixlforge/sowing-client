<template>
  <transition
    enter-active-class="transition-opacity transition-faster ease-out"
    leave-active-class="transition-opacity transition-faster ease-in"
    enter-class="opacity-25"
    enter-to-class="opacity-100"
    leave-class="opacity-100"
    leave-to-class="opacity-25"
  >
    <slot/>
  </transition>
</template>
