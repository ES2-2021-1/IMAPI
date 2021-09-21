<template>
  <div class="form-login">
        <section class="login-dark">
            <form class="text-center" method="post">
                <div class="illustration"><img :src="require('@/assets/img/Logo_TIPO BRANCO.png')" style="width: 100%;"></div>
                <div class="mb-3"><input class="form-control" type="email" name="email" placeholder="Email" autocomplete="off"></div>
                <div class="mb-3"><input class="form-control" type="password" name="password" placeholder="Senha" autocomplete="off"></div><a href="#">Esqueci minha senha</a>
                <div class="mb-3"><button class="btn btn-primary d-block w-100" type="button" style="background: var(--bs-success);">Login</button></div>
            </form>
        </section>
    </div>
</template>

<script>
export default {
  name: 'Login',
  components: {
  },
}
</script>

<style>

</style>