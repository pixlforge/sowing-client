<template>
  <transition
    enter-active-class="transition-all duration-100 ease-out"
    leave-active-class="transition-all duration-200 ease-in"
    enter-class="origin-top transform opacity-0 scale-y-0"
    enter-to-class="opacity-100 scale-y-100"
    leave-class="transform opacity-100"
    leave-to-class="transform opacity-0"
  >
    <slot/>
  </transition>
</template>
