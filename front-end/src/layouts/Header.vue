<template>
    <header>
        <nav class="navbar navbar-light navbar-expand-md fixed-top" style="background-color: #1a1a1a;box-shadow: white 0px 0px 10px;">
            <div class="container-fluid">
                <router-link to="/">
                    <img :src="require('@/assets/img/Logo_ÍCONE BRANCO.png')" style="width: 40px;">
                </router-link>
                <button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1"><span class="visually-hidden" style="color: var(--bs-light);">Toggle navigation</span><span class="navbar-toggler-icon" style="color: var(--bs-light);filter: invert(100%);"></span></button>
                <div class="collapse navbar-collapse justify-content-md-end" id="navcol-1">
                    <ul class="navbar-nav">
                        <div v-if="!this.$session.exists()">
                            <router-link to="/entrar" class="nav-link"  style="color: var(--bs-light);">
                                <li class="nav-item" style="padding-right: 20px;">Login</li>
                            </router-link>
                        </div>
                        <div v-if="!this.$session.exists()">
                            <router-link to="/cadastro" class="nav-link" style="color: var(--bs-light);padding-right: 20px;">
                                <li class="nav-item">Cadastro</li>
                            </router-link>
                        </div>
                        <div v-if="this.$session.exists()">
                            <router-link to="/home" class="nav-link" style="color: var(--bs-light);padding-right: 20px;">
                                <li class="nav-item">Home</li>
                            </router-link>
                        </div>

                        <li class="nav-item"><a class="nav-link active" href="#" style="color: var(--bs-light);padding-right: 20px;">Contato</a></li>
                        <li class="nav-item"><a class="nav-link" href="#" style="color: var(--bs-light);padding-right: 20px;">Sobre Nós</a></li>
                        <li v-if="this.$session.exists()" @click="logout" class="nav-item"><a class="nav-link" href="#" style="color: var(--bs-light);padding-right: 20px;">Logout</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>



export default {
  name: 'Header',
  data: 
      function() {
        return   {
            url: 'index.html'
        }
  },
  methods: {
      logout: function () {
          this.$session.destroy();
          this.$router.push({ name: 'index' });
          document.location.reload();
      }
  }
}
</script>