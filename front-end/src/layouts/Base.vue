<template>
    <!DOCTYPE html>
    <html lang="pt-br" style="/*color: var(--bs-light);*//*background: url(&quot;https://cdn.bootstrapstudio.io/placeholders/1400x800.png&quot;);*/">

    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
        <title>INNE | {{title}}</title>
        <meta name="theme-color" content="#1a1a1a">
        <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"> -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
        <link rel="stylesheet" :href="require('@/assets/css/Features-Boxed.css')">
        <link rel="stylesheet" :href="require('@/assets/css/Login-Form-Dark.css')">
        <link rel="stylesheet" :href="require('@/assets/css/styles.css')">
        <link rel="stylesheet" :href="require('@/assets/css/Testimonials.css')">
    </head>

    <body>
        <Header/>
        <StartupDetails/>
        <Footer/>
    </body>

    </html>
</template>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"></script>
<script :src="require('@/assets/js/bs-init.js')"></script> 
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>

<script>
import Footer from "./Footer.vue";
import Header from "./Header.vue";
import Index from "../pages/index/Index.vue";
import Login from "../pages/login/Login.vue";
import NewStartup from "../pages/newStartup/NewStartup.vue";
import StartupDetails from "../pages/startupDetails/StartupDetails.vue";
import Home from "../pages/home/Home.vue";

export default {
  name: 'Base',
  components: {
    Footer,
    Header,
    Index,
    Login,
    NewStartup,
    StartupDetails,
    Home
  },
  props: {
    title: String
  }
}
</script>

<style>

</style>