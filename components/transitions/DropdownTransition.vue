<template>
  <transition
    enter-active-class="transition-all transition-faster ease-out"
    leave-active-class="transition-all transition-medium ease-in"
    enter-class="opacity-25 scale-75"
    enter-to-class="opacity-100 scale-100"
    leave-class="opacity-100 scale-100"
    leave-to-class="opacity-25 scale-75"
  >
    <slot/>
  </transition>
</template>
