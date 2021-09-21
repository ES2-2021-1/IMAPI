<template>
    <!DOCTYPE html>
    <html lang="pt-br" style="/*color: var(--bs-light);*//*background: url(&quot;https://cdn.bootstrapstudio.io/placeholders/1400x800.png&quot;);*/">

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
        <title>INNE | {{title}}</title>
        <meta name="" content="">
        <meta name="theme-color" content="#1a1a1a">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
        <link rel="stylesheet" :href="require('@/assets/css/Features-Boxed.css')">
        <link rel="stylesheet" :href="require('@/assets/css/Login-Form-Dark.css')">
        <link rel="stylesheet" :href="require('@/assets/css/styles.css')">
        <link rel="stylesheet" :href="require('@/assets/css/Testimonials.css')">
    </head>

    <body style="background-image: radial-gradient(#39b72e 2px, transparent 2px);background-size: 27px 27px;background-color: #9be268;">
      <nav class="navbar navbar-light navbar-expand-md fixed-top" style="background-color: #1a1a1a;box-shadow: white 0px 0px 10px;">
          <div class="container-fluid"><a href="index.html"><img :src="require('@/assets/img/Logo_ÍCONE BRANCO.png')" style="width: 40px;"></a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1"><span class="visually-hidden" style="color: var(--bs-light);">Toggle navigation</span><span class="navbar-toggler-icon" style="color: var(--bs-light);filter: invert(100%);"></span></button>
              <div class="collapse navbar-collapse justify-content-md-end" id="navcol-1">
                  <ul class="navbar-nav">
                      <li class="nav-item"><a class="nav-link active" href="#" style="color: var(--bs-light);padding-right: 20px;">UFFS</a></li>
                      <li class="nav-item"><a class="nav-link active" href="cadastro.html" style="color: var(--bs-light);padding-right: 20px;">Cadastro</a></li>
                      <li class="nav-item" style="padding-right: 20px;"><a class="nav-link" href="#" style="color: var(--bs-light);">Contato</a></li>
                      <li class="nav-item"><a class="nav-link" href="#" style="color: var(--bs-light);padding-right: 20px;">Sobre Nós</a></li>
                  </ul>
              </div>
          </div>
      </nav>
      <Register/>
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
import Register from "../pages/register/Register.vue";

export default {
  name: 'Base',
  components: {
    Footer,
    Header,
    Index,
    Login,
    Register
  },
  props: {
    title: String
  }
}
</script>