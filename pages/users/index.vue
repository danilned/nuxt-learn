<template>
  <div class="user-page">
    <table-vue :arr="users" :fields="['name', 'username', 'email', 'phone']">
      <template #link="{ id, text }">
        <nuxt-link :to="`/todos/${id}`" class="link">
          {{ text }}
        </nuxt-link>
      </template>
    </table-vue>
  </div>
</template>

<script>
// Components
import TableVue from '@/components/TableVue.vue'

// Controllers
import { getUsers } from '@/controllers/userController'

export default {
  components: {
    TableVue,
  },
  layout: 'header',
  async asyncData({ $axios }) {
    const [result, error] = await getUsers($axios)

    if (error !== null) {
      // Error
      return
    }

    return { users: result }
  },
}
</script>

<style></style>
