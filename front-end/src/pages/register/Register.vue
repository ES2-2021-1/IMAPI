<template>
  <div class="form-login">
        <section class="login-dark">
            <form method="post">
                <h2 class="visually-hidden">Login Form</h2>
                <div class="illustration"><img :src="require('@/assets/img/Logo_TIPO BRANCO.png')" style="width: 100%;"></div>
                <div class="mb-3"><input class="form-control" type="text" name="name" placeholder="Nome" autocomplete="off"></div>
                <div class="mb-3"><input class="form-control" type="email" name="email" placeholder="Email" autocomplete="off"></div>
                <div class="mb-3"><input class="form-control" type="password" name="password" placeholder="Senha" autocomplete="off"></div>
                <div class="mb-3"><button class="btn btn-primary d-block w-100" type="button" style="background: var(--bs-success);">Cadastro</button></div>
            </form>
        </section>
    </div>
</template>

<script>
export default {
  name: 'Register',
  components: {
  },
}
</script>

<style>

</style>