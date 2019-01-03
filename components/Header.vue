<template>
  <div class="bg-green">
    <div class="container flex flex-col lg:flex-row items-center py-40">
      <div>
        <div class="w-110 h-110 rounded-full bg-white flex justify-center items-center text-48 text-green">
          <slot name="icon"/>
        </div>
      </div>
      <div class="text-center lg:text-left lg:ml-80 mt-40 lg:mt-0">
        <slot name="title"/>
        <slot name="description"/>
      </div>
    </div>
  </div>
</template>

