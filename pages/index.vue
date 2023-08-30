<template>
  <div class="main-page">
    <div v-for="item in photos" :key="item.id" class="photo">
      <img :src="item.url" loading="lazy" />
    </div>
  </div>
</template>

<script>
// Vuex
import { mapState } from 'vuex'

export default {
  layout: 'header',
  async fetch({ store }) {
    if (!store.state.photos.photosIsLoaded) {
      await store.dispatch('photos/loadPhotos')
    }
  },
  computed: {
    ...mapState({
      photos: (state) => state.photos.photos,
    }),
  },
}
</script>

<style lang="scss" scoped>
.main-page {
  margin: 32px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 600px);
  justify-content: space-around;
  gap: 32px;
  > .photo {
    width: fit-content;
  }
}
</style>
