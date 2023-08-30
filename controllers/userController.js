export const getUsers = async ($axios) => {
  try {
    const result = await $axios.$get(
      'https://jsonplaceholder.typicode.com/users'
    )

    return [result, null]
  } catch (error) {
    return [[], error.message]
  }
}

export const getCurrentUserTodos = async ($axios, id) => {
  try {
    const result = await $axios.$get(
      'https://jsonplaceholder.typicode.com/todos',
      {
        params: {
          userId: id,
        },
      }
    )

    return [result, null]
  } catch (error) {
    return [[], error.message]
  }
}
