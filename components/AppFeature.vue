<template>
  <div class="feature__container">
    <div class="feature__icon-container">
      <font-awesome-icon
        :icon="['far', icon]"
        class="feature__icon"/>
    </div>
    <h3 class="feature__title">
      <slot name="title"/>
    </h3>
    <p class="feature__body">
      <slot/>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    }
  }
}
</script>
