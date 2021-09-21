<template>
    <div class="col-md-6 col-lg-4 item">
        <div class="box">
            <p class="description" style="color: rgb(0,0,0);">{{ comment }}</p>
        </div>
        <div class="author"><img class="rounded-circle" :src="img">
            <h5 class="name" style="color: rgb(255,255,255);">{{ author }}</h5>
            <p class="title">{{ title }}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Testimonial',
  components: {
  },
  props : {
    author: String,
    title: String,
    comment: Text,
    img: String
  }
}
</script>