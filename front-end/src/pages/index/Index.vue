<template>
  <div style="background-image: radial-gradient(#39b72e 2px, transparent 2px);background-size: 27px 27px;background-color: #9be268;">
    <FeatureBoxed/>
    <PhotoGallery/>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"></script>
<script src="assets/js/bs-init.js"></script>

<script>
import FeatureBoxed from "./components/FeatureBoxed.vue";
import PhotoGallery from "./components/PhotoGallery.vue";

export default {
  name: 'Index',
  components: {
    FeatureBoxed,
    PhotoGallery
  }
}
</script>

<style>

</style>