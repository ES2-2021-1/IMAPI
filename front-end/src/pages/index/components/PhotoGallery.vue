<template>
    <section class="photo-gallery">
        <div class="container">
            <div class="intro">
                <h2 class="text-center">Alguns de nossos cases</h2>
            </div>
            <div class="row row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 row-cols-xxl-3 photos" data-bss-baguettebox="">
                <div class="col-sm-6 col-md-4 col-lg-3 item" v-for="inneCase in inneCases" v-bind:key="inneCase.imageUrl">
                    <a v-bind:href="require(`@/assets/img/` + inneCase.imageUrl)">
                        <img class="img-fluid" v-bind:src="require(`@/assets/img/` + inneCase.imageUrl)">
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script src="js/baguetteBox.min.js" async></script>

<script>

export default {
  name: 'PhotoGallery',
  data: function() {
      return {
          inneCases: [
              { imageUrl: "collegare.jpeg" },
              { imageUrl: "minimarket.jpeg" },
              { imageUrl: "mist.jpeg" },
              { imageUrl: "mopi.jpeg" },
              { imageUrl: "trampoja.jpeg" },
              { imageUrl: "habitus.jpeg" },
        ]
      }
  }, mounted: function() {
    const baguetteBox = require('@/assets/js/baguetteBox.min.js');
    if (document.querySelectorAll('[data-bss-baguettebox]').length > 0) {
        baguetteBox.run('[data-bss-baguettebox]', { animation: 'slideIn' });
    }
  }
}

</script>

<style src='@/assets/css/baguetteBox.min.css'></style>

<style>

.photo-gallery {
    margin-top: 50px;
}

</style>