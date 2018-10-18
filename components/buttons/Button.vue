<template>
  <button
    :class="classes"
    class="btn">
    <slot/>
  </button>
</template>

<script>
export default {
  props: {
    primary: {
      type: Boolean,
      required: false,
      default: false
    },
    secondary: {
      type: Boolean,
      required: false,
      default: false
    },
    default: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      classes: {
        "btn-primary": this.primary,
        "btn-secondary": this.secondary,
        "btn-default": this.default
      }
    };
  }
};
</script>

