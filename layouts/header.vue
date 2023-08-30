<template>
  <default-vue>
    <div class="header-layout">
      <header>
        <nuxt-link to="/">Main Page</nuxt-link>
        <nuxt-link to="/users">Users</nuxt-link>
      </header>
      <div class="content">
        <nuxt />
      </div>
    </div>
  </default-vue>
</template>

<script>
// Layouts
import DefaultVue from './default.vue'

export default {
  components: {
    DefaultVue,
  },
}
</script>

<style lang="scss">
.header-layout {
  padding: 24px;
  > header {
    display: flex;
    gap: 16px;
    > a {
      color: #f4f4f4;
      font: {
        size: 24px;
        weight: 600;
      }
    }
  }
}
</style>
