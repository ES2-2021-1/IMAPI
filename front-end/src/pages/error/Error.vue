<template>
  <section class="features-boxed" style="background: rgb(26,26,26);margin-top: 56px;">
        <div class="container" style="padding-top: 30px;padding-bottom: 70px;">
            <div class="intro">
                <h2 class="text-center" style="color: rgb(255,255,255);">Opa! Algo deu errado :(</h2>
                <p class="text-center" style="font-size: calc(12px + 0.7vw);color: #ffffff;">Tente atualizar a página e realizar o seu login novamente.
                    <br><br>
                    <router-link to="/" style="color: var(--bs-light);padding-right: 20px;">
                            Voltar a tela inicial
                    </router-link>
                </p>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'Error',
    components: { }
}
</script>

<style>
</style>