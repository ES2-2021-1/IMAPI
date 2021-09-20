<template>
  <div>
    <FeatureBoxed/>
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fprofitworks.ca%2Fimages%2FHome-Page%2FPROFITWORKS-Closed-LOOP-SEO-VERSION-3.gif&amp;f=1&amp;nofb=1" style="width: 100%;user-select: none;pointer-events: none;">
    <Testimonials/>
  </div>
  

</template>

<script>
import FeatureBoxed from "./components/FeatureBoxed.vue";
import Testimonials from "./components/Testimonials.vue";

export default {
  name: 'Index',
  components: {
    FeatureBoxed,
    Testimonials
  }
}
</script>

<style>

</style>