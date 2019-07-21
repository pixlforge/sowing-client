<template>
  <div class="header__background">
    <div class="header__container container">
      <div>
        <div class="header__avatar">
          <slot name="icon"/>
        </div>
      </div>
      <div class="header__content">
        <slot name="title"/>
        <slot name="description"/>
      </div>
    </div>
  </div>
</template>
