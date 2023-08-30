<template>
  <div class="layout">
    <div class="wrapper">
      <nuxt v-if="!$slots.default" />
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  min-height: 100vh;
  padding: 32px;
  > .wrapper {
    min-height: calc(100vh - 64px);
    border-radius: 32px;
    background: #4f4f4f;
  }
}
</style>
