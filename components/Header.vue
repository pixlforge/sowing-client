<template>
  <div class="bg-green">
    <div class="container flex items-center py-40">
      <div>
        <div class="w-110 h-110 rounded-full bg-white flex justify-center items-center text-50 text-green">
          <slot name="icon"/>
        </div>
      </div>
      <div class="ml-80">
        <slot name="title"/>
        <slot name="description"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

