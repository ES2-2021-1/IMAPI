<template>
    <div style="overflow: hidden;position: absolute;top: 0;left: 0;height: 100%;width: 100%;">
        <section class="login-dark" style="height: 100%;">
            <form method="post" style="background: #1a1a1a;max-width: min(70%, 330px);margin-top: 20px;">
                <h2 class="visually-hidden">Login Form</h2>
                <div class="illustration">
                    <p style="font-size: 20px;color: var(--bs-white);margin-top: 5px;margin-bottom: 35px;">Aqui você será capaz de expor sua ideia para que ela seja avaliada, e eventualmente, incubada.</p>
                </div>
                <div class="mb-3"><input class="form-control" type="text" name="tittle" placeholder="Título da Startup" autocomplete="off"></div>
                <div class="mb-3"><input class="form-control" type="text" name="description" placeholder="Descrição da Startup" autocomplete="off"></div>
                <div class="d-inline-flex align-items-xxl-center mb-3" style="width: 100%;"><input class="form-control" type="text" name="link" placeholder="Link do pitch" autocomplete="off">
                    <div class="dropdown d-flex d-xxl-flex justify-content-end justify-content-xxl-end align-items-xxl-center" style="margin: 0;"><button class="btn btn-primary d-xxl-flex justify-content-xxl-end" aria-expanded="false" data-bs-toggle="dropdown" type="button" style="margin: 0;background: rgb(26,26,26);"><i class="fa fa-question"></i></button>
                        <div class="dropdown-menu">
                            <p style="padding: 5px;width: 245px;">Poste aqui o link para um pitch contando a ideia por trás da sua startup, utilizaremos desse vídeo para avaliar sua proposta!</p>
                        </div>
                    </div>
                </div>
                <div class="mb-3"><button class="btn btn-primary d-block w-100" type="button" style="background: var(--bs-success);">Cadastrar Startup</button></div>
            </form>
        </section>
    </div>
</template>

<script>
export default {
  name: 'NewStartup',
  components: {
  },
}
</script>

<style>

</style>