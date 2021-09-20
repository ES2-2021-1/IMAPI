<template>
    <section class="testimonials-clean" style="margin: 0px;margin-top: 50px;background: rgb(26,26,26);">
        <div class="container">
            <div class="intro">
                <h2 class="text-center" style="color: rgb(255,255,255);">Testemunhas</h2>
            </div>
            <div class="row people" style="margin-top: 0;">
                <Testimonial author="Ben Johnson" title="CEO da Uber2" comment="Eu não acreditei quando vi pela primeira vez, era muito bom para ser verdade, eu continuei meio que por teimosia, e olha pra mim hoje! Sou o milionário mais jovem de Chapecó." :img="require('@/assets/img/3.jpg')"/>

                <Testimonial author="Carl Kent" title="Founder of Style Co" comment="Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id." :img="require('@/assets/img/2.jpg')"/>
                
                <Testimonial author="Emily Clark" title="Owner of Creative Ltd." comment="Aliquam varius finibus est, et interdum justo suscipit. Vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu." :img="require('@/assets/img/3.jpg')"/>
            </div>
        </div>
    </section>
</template>

<script>
import Testimonial from "./Testimonial.vue";

export default {
  name: 'Testimonials',
  components: {
    Testimonial
  }
}
</script>