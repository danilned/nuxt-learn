export const getPhotos = async ($axios) => {
  try {
    const result = await $axios.$get(
      'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=4'
    )

    return [result, null]
  } catch (error) {
    return [[], error.message]
  }
}
