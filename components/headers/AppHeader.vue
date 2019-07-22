<template>
  <div class="bg-green-500">
    <div class="container flex flex-col lg:flex-row items-center py-48">
      <div>
        <div class="w-110 h-110 rounded-full bg-white flex justify-center items-center text-48 text-green-500">
          <slot name="icon"/>
        </div>
      </div>
      <div class="text-center lg:text-left lg:ml-72 mt-48 lg:mt-0">
        <slot name="title"/>
        <slot name="description"/>
      </div>
    </div>
  </div>
</template>
