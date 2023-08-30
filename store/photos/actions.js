// Controllers
import { getPhotos } from '@/controllers/photoController'

export default {
  async loadPhotos(context) {
    const [photos, error] = await getPhotos(this.$axios)

    context.state.photosIsLoaded = true

    if (error !== null) {
      // Error
    }

    context.state.photos = photos
  },
}
