<template>
  <div class="current-user-todos">
    <div class="header">
      <nuxt-link :to="previousUrl">Go Back</nuxt-link>
    </div>
    <div class="user-todos">
      <div v-for="todo in todos" :key="todo.id" class="todo form-check">
        <div class="title form-check-label">{{ todo.title }}</div>
        <input
          :checked="todo.completed"
          type="checkbox"
          class="form-check-input"
          @change="$event.target.checked = !$event.target.checked"
        />
      </div>
    </div>
  </div>
</template>

<script>
// Controllers
import { getCurrentUserTodos } from '@/controllers/userController.js'

export default {
  beforeRouteEnter(to, from, next) {
    next((ctx) => {
      ctx.previousUrl = from.path
    })
  },
  layout: 'default',
  async asyncData({ $axios, params }) {
    const [result, error] = await getCurrentUserTodos($axios, params.id)

    if (error !== null) {
      // Error
      return
    }

    return { todos: result }
  },
  data() {
    return {
      previousUrl: '',
    }
  },
}
</script>

<style lang="scss" src="@/styles/todos.scss"></style>
